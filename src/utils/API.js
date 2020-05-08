import axios from "axios";

export default {
  search: function() {
    return axios.get("https://randomuser.me/api/?results=500&seed=skadoosh&noinfo");
  }
};
