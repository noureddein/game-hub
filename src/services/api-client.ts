import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "cf3f90f4a42e40f9a1c85e656398015d",
    },
});
