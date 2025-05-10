import api from "../AxiosServices";

export async function LoginUser(body) {
    return new Promise((resolve, reject) => {
      api("post", "auth", null, "/login", false, body)
        .then((res) => {
            console.log("token",res)
          resolve(res);
        })
        .catch((err) => {
          reject(new Error(err));
        });
    });
  }