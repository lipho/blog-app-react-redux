import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions'
import {Link} from 'react-router';

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id)
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
  }

  render() {
    let {post} = this.props;
    if (!this.props.post) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <button onClick={this.onDeleteClick.bind(this)}
          className="btn btn-danger pull-xs-right">Delete Post</button>
        <Link to={'/'}>Back</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
 return {post: state.posts.post}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);