import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=lsdkfjwoiowio';

export const fetchPosts = () => {
  let request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
};

export const createPost = props => {
  let request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
  return {
    type: CREATE_POSTS,
    payload: request
  }
}

export const fetchPost = id => {
  let request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_SINGLE_POST,
    payload: request
  }
}