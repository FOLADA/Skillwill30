
const SET_USER = 'SET_USER';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

export const setUser = (user:any) => ({
  type: SET_USER,
  payload: user
});

export const fetchUser = () => {
  return async (dispatch:any) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const userData = await response.json();
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: userData
      });
      console.log(userData)
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };
};