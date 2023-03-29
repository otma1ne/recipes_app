import axios from "axios";
import { x_api_key, x_api_host } from "../const";

const apiClient = axios.create({
  baseURL: "https://tasty.p.rapidapi.com/recipes",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-RapidAPI-Key": x_api_key,
    "X-RapidAPI-Host": x_api_host,
  },
});

export default {
  getRecipes() {
    return apiClient.get("/list");
  },
  getRecipe(id) {
    return apiClient.get(`/get-more-info`, { params: { id } });
  },
};
