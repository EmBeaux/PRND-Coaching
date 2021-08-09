import axios from "axios";

type Methods =
  | 'get'
  | 'delete'
  |'post'
  | 'put'

export const apiCall = async (method: Methods, record: String, id?: String) => {
    let url = `/${record}`
    if (id) {
        url += `/${id}`
    }
debugger;
    return await axios.create({ baseURL: process.env.API_URL}).request({ url, method })
}