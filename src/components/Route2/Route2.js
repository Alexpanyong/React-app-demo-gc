import React, { Component } from 'react';
import './Route2.css';
import { API_ENDPOINT } from '../../constants/constant';
import { PostItem } from '../PostItem/PostItem';
import * as fn from '../../utils/Functions';

export class Route2 extends Component {
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

  getMoviesEntry (entriesArray) {
    return entriesArray ? entriesArray.filter(entry => entry.programType === 'movie') : [];
  }

  render() {
    const { entries } = this.state;
    const allMoviesEntries = this.getMoviesEntry(entries);
    const arrayByYear = fn.sortEntryByYear(allMoviesEntries);
    const firstTwentyOneEntries = fn.getFirstTwentyOneEntries(arrayByYear);
    const sortedArray = fn.ascendingSortedEntries(firstTwentyOneEntries);
    console.log("21 movies:", sortedArray);
    return (
      <div>
        <h2>Popular Movies</h2>
        <ul>
          {sortedArray && sortedArray.map(entry => <PostItem key={entry.title} post={entry}/>)}
        </ul>
      </div>
    );
  }
}
