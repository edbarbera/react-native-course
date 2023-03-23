import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer MuLwECbWmeqA3YNQlguiJQqC5no2fqcFxuhh4naeaD-472ao8j1ezgfvcBIpcGI6B92P39yZhnI6NherdvglqcX0jGvqKKK75mXuXRURJRrKw3s5JFg7lUubhyIbZHYx'
  }
});
