export RECEIVE_TWEETS = 'RECEIVE_USERS'

export function receiveUsers(tweets) {
  return {
    type: RECEIVE_USERS,
    users
  }
}
