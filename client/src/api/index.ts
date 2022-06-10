import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);

export const fetchCreatePost = (post: any) => axios.post(url, post);
