export default (state, action) => {
  switch (action.type) {
    case 'next':
      return {
        pagination: action.payload
      }
    default:
      return state
  }
}