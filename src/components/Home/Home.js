import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount () {

  }

  render() {
    return (
      <div>
        <div className="linkBtn">
          <Link to="/route1">Popular Series</Link>
        </div>
        <div className="linkBtn">
          <Link to="/route2">Popular Movies</Link>
        </div>
      </div>
    );
  }
}
