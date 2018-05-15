import React, { Component } from 'react';
import './PostItem.css';

export class PostItem extends Component {
  render() {
    const { post } = this.props;
    return (
      <li className="postItem">
        <div className="postImage"><img src={post.images['Poster Art'].url} /></div>
        <div className="postTitle">{post.title}</div>
      </li>
    );
  }
}