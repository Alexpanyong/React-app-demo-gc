import React, { Component } from 'react';
import './Route1.css';
import { API_ENDPOINT } from '../../constants/constant';
import { PostItem } from '../PostItem/PostItem';
import * as fn from '../../utils/Functions';

export class Route1 extends Component {
  constructor (props) {
    super(props);
    this.state = {
      apiData: {},
      total: 0,
      entries: []
    };
  }

  componentWillMount () {
    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(json => {
        this.setState({
          apiData: json,
          total: json.total,
          entries: json.entries
        });
        console.log("Data fetched:", this.state.apiData);
      })
      .catch(
        () => {console.log("Fetch posts failed")}
      )
  }

  getSeriesEntry (entriesArray) {
    return entriesArray ? entriesArray.filter(entry => entry.programType === 'series') : [];
  }

  render() {
    const { entries } = this.state;
    const allSeriesEntries = this.getSeriesEntry(entries);
    const arrayByYear = fn.sortEntryByYear(allSeriesEntries);
    const firstTwentyOneEntries = fn.getFirstTwentyOneEntries(arrayByYear);
    const sortedArray = fn.ascendingSortedEntries(firstTwentyOneEntries);
    console.log("21 series:", sortedArray);
    return (
      <div>
        <h2>Popular Series</h2>
        <ul>
          {sortedArray && sortedArray.map(entry => <PostItem key={entry.title} post={entry}/>)}
        </ul>
      </div>
    );
  }
}
