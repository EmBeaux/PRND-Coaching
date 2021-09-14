import axios from "axios";
import { GenericObject } from "../components/types/content-page.types";

type Methods =
  | 'get'
  | 'delete'
  | 'post'
  | 'put'

type ApiCallGenericReturn = <T>(method: Methods, record: String, query: GenericObject, data?: GenericObject) => Promise<T>;
export const apiCall: ApiCallGenericReturn = async (method: Methods, record: String, query: GenericObject,  data?: GenericObject) => {
    let url = `/${record}`
    if (query.id) {
        url += `/${query.id}`
    }

    if (query.params) {
        const queryString = Object.keys(query.params).map(key => key + '=' + query.params[key]).join('&');
        url += '?' + queryString;
    }

    return await axios.create({baseURL: process.env.API_URL}).request({ url, method, data: data, headers: { "credentials": "include", "withCredentials": true } })
}