import axios from "axios";

type Methods =
  | 'get'
  | 'delete'
  | 'post'
  | 'put'
interface GenericObject {
    [key: string]: any
}
type ApiCallGenericReturn = <T>(method: Methods, record: String, query: GenericObject) => Promise<{ data: T  }>;
export const apiCall: ApiCallGenericReturn = async (method: Methods, record: String, query: GenericObject) => {
    let url = `/${record}`
    if (query.id) {
        url += `/${query.id}`
    }

    if (query.params) {
        const queryString = Object.keys(query.params).map(key => key + '=' + query.params[key]).join('&');
        url += '?' + queryString;
    }

    return await axios.create({ baseURL: process.env.API_URL}).request({ url, method })
}