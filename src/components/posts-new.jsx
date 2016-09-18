import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions';

class PostsNew extends Component {
  render() {
    let { fields: { title, categories, content }, handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.props.createPost) }>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
        </div>

        <div className="form-group">
          <label>Content</label>
          <input type="textarea" className="form-control" {...content}/>
        </div>

        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    );
  }
}

/**
 * Connecting form
 * connect: first arg is mapStateToProps, second is mapDispatchToProps
 * reduxForm: 1st is form config, 2nd and 3rd are mapStateToProps, mapDispatchToProps
 */
export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content'],
}, null, { createPost })(PostsNew);