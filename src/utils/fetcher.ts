import axios from "axios";

export const api = axios.create({ baseURL: "/api" });	

export const fetcher = (url: string) => api(url).then((result) => result.data);
