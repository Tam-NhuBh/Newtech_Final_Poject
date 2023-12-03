
import axiosClient from "./axiosClient";

const loginApi = {
    loginGoogle() {
    const url = "auth/google/callback";
    return axiosClient.get(url);
  }
};
export default loginApi;
