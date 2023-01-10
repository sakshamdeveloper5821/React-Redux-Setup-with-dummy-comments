
export const getCommentsSuccess = payload => ({
  type: getCommentsSuccess,
  payload
});

export const getCommentsFailure = payload => ({
  type: getCommentsFailure,
  payload
});

export const getComments = () => dispatch =>  {
      return dispatch(getCommentsSuccess());
}

var comments = [];
export const addComments = (data) => {
      return (dispatch) => {
        // comments.push(data);
        return dispatch(getCommentsSuccess(data));
      }
}