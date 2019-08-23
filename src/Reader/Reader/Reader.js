import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import qs from 'qs';
import * as data from '../publication.json';
import Article from '../Article/Article';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styles from './Reader.module.css';

const readerClasses = [styles.reader];

class Reader extends Component {
  static defaultProps = {
    articleNumber: 0,
  };

  state = { articleNumber: this.props.articleNumber };

  handleCount = num => {
    this.setState(
      {
        articleNumber:
          Number(Object.values(qs.parse(this.props.location.search))[0]) + num,
      },
      () => {
        this.props.history.push({
          ...this.props.location,
          search: `page=${Number(this.state.articleNumber)}`,
        });
      },
    );
  };

  render() {
    const { location } = this.props;
    const articleNumber = Number(Object.values(qs.parse(location.search))[0]);
    const publications = data.default;
    const isIncreamentDesabled = () => articleNumber >= publications.length;
    const isDecreamentDesabled = () => articleNumber <= 1;

    return articleNumber >= 1 && articleNumber <= publications.length ? (
      <div className={readerClasses}>
        <Article articleNumber={articleNumber} publications={publications} />
        <Counter
          articleNumber={articleNumber}
          numberOfAllArticles={publications.length}
        />
        <Controls
          handleCount={this.handleCount}
          isIncreamentDesabled={isIncreamentDesabled()}
          isDecreamentDesabled={isDecreamentDesabled()}
        />
      </div>
    ) : (
      <Redirect push to="/reader?page=1" />
    );
  }
}

Reader.propTypes = {
  articleNumber: PropTypes.number,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  history: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Reader;
