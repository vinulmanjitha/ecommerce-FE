export const setAccessToken = (token) => {
    return localStorage.setItem("authToken", token);
  };
  
  export const getAccessToken = () => {
    return localStorage.getItem("authToken");
  };