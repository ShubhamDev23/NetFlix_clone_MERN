import axios from "axios"

const baseurls=axios.create({
    baseURL:"http://api.themoviedb.org/3"
});
export default baseurls