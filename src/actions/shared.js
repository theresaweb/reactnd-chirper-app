import { getInitialData } from '../utils.api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  // call asynchronous function
  return (dispatch) => {
    return getInitialData() {
      .then(({users, tweets}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
      })
    }
  }
}
