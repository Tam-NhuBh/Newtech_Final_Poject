// userActions.js
export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const logout = () => (dispatch) => {
  // Gọi API hoặc thực hiện các bước cần thiết để logout ở phía server (nếu cần)
  // Ví dụ: axios.post('/api/logout');
  
  // Xóa thông tin người dùng từ localStorage
  localStorage.removeItem('user');

  // Đưa action LOGOUT_SUCCESS vào Redux
  dispatch({ type: 'LOGOUT_SUCCESS' });

  // Chuyển hướng sau khi logout (nếu cần)

};
