import constants from '../constants'

var initialState = {
  currentLocation: {
    lat: 55.6729011,
    lng: 12.5807447
  },
  list: null

}

export default (state = initialState, action) => {
  let updated = Object.assign({}, state)

  switch (action.type){
    case constants.POSTS_RECIEVED:
        console.log('POSTS_RECIEVED: ' + JSON.stringify(action.posts))
        updated['list'] = action.posts
        return updated

    case constants.CURRENT_LOCATION_CHANGED:
        //console.log('CURRENT_LOCATION_CHANGED: ' + JSON.stringify(action.location))
        updated['currentLocation'] = action.location
        updated['list'] = null

        return updated



      default:
          return updated
  }


}
