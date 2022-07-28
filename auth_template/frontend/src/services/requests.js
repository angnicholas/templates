import api from "./auth.interceptor";

export async function getProtected(){
  await api
    .get("/protected")
    .then((res) => {
      return res
    })
    .catch((err) => console.log(err));
}