import axios from "axios";
const server_url = "http://localhost:5000/api/v1/subreddit";
const HOME = "home";

export let api = axios.create({
  baseURL: server_url,
});

export const getHome = () => {
  const request = api.get(HOME);
  return request;
};
export const getSubreddit = (sub_id) => {
  const request = api.get(sub_id);
  return request;
};
export const addNewPost = (sub_id, post) => {
  console.log(sub_id);
  const request = api.post(sub_id, { ...post });
  return request;
};
