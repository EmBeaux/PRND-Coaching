import axios from "axios"
import axiosCookieJarSupport from 'axios-cookiejar-support';
import tough from 'tough-cookie'

const instance = axios.create({
  jar: new tough.CookieJar(),
  baseURL: process.env.API_URL
});
console.log("hit")
axiosCookieJarSupport(instance);
instance.defaults.jar = new tough.CookieJar();

export default instance;