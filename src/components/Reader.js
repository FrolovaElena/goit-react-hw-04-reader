import React, { Component } from 'react';
import propTypes from 'prop-types';
import queryString from 'query-string';
import styles from './Reader.module.css';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';
import items from '../assets/publications.json';

export default class ReaderPublicationPage extends Component {
  static propTypes = {
    history: propTypes.shape({}).isRequired,
    location: propTypes.shape({}).isRequired,
  };

  state = {
    index: 0,
  };

  componentDidMount() {
    const { history, location } = this.props;
    const { index } = this.state;
    const currentItem = index + 1;
    const { item } = queryString.parse(location.search);

    if (item)
      return history.push({
        search: `?item=${currentItem}`,
      });

    return history.push({
      search: '?item=1',
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { index: prevIndex } = prevState;
    const { index: nextIndex } = this.state;
    const currentItem = nextIndex + 1;
    const { history, location } = this.props;

    if (prevIndex !== nextIndex)
      history.push({ ...location, search: `?item=${currentItem}` });
  }

  handleDecrement = () => {
    this.setState(state => ({
      index: state.index - 1,
    }));
  };

  handleIncrement = () => {
    this.setState(state => ({
      index: state.index + 1,
    }));
  };

  render() {
    const { index } = this.state;

    return (
      <div className={styles.reader}>
        <Publication title={items[index].title} text={items[index].text} />
        <Counter current={index + 1} total={items.length} />
        <Controls
          current={index + 1}
          total={items.length}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
