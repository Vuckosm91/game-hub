import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "07ef4528232a43b4a8a558a29dc403b7",
  },
});