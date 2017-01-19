import constants from '../constants'
import { APIManager } from '../utils'

export default {

  signUp: (params) => {
    return (dispatch) => {

      APIManager
      .post('/account/register', params)
      .then(response => {
        //console.log('RESPONSE: ' + JSON.stringify(response))
        dispatch({
          type: constants.CURRENT_USER_RECEIVED,
          user: response.user
        })
      })
      .catch((err) =>{
        console.log('ERROR: ' + err)

        })
      }
  },

  login: (params) => {
    return (dispatch) => {

      APIManager
      .post('/account/login', params)
      .then(response => {
        dispatch({
          type: constants.CURRENT_USER_RECEIVED,
          user: response.user
        })
      })
      .catch((err) => {
        console.log('ERROR: ' + err.message)
        alert(err.message)
        })
      }
  },

  checkCurrentUser: () => {
    return (dispatch) => {

      APIManager
      .get('/account/currentuser', null)
      .then(response => {
        //console.log('RESPONSE: ' + JSON.stringify(response))
        dispatch({
          type: constants.CURRENT_USER_RECEIVED,
          user: response.user
        })
      })
      .catch((err) =>{
        console.log('ERROR: ' + err)

        })
      }
  },

  createPost: (params) => {
    return (dispatch) => {

      APIManager
      .post('/api/post', params)
      .then(response => {
        dispatch({
          type: constants.POST_CREATED,
          post: response.result
        })
      })
      .catch((err) =>{
        console.log('ERROR: ' + err)

        })
      }
  },

  fetchPosts: (params) => {
    return (dispatch) => {

      APIManager
      .get('/api/post', params)
      .then(response => {
        dispatch({
          type: constants.POSTS_RECIEVED,
          posts: response.results
        })
      })
      .catch((err) =>{
        console.log('ERROR: ' + err)

        })
      }
    },

    updateCurrentLocation: (location) => {
      return {
        type: constants.CURRENT_LOCATION_CHANGED,
        location: location
      }

    }



}
