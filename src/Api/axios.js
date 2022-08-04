import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    contentType: "text/plain",
  },
};

const axiosApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  https: config,
});
export default axiosApi;
