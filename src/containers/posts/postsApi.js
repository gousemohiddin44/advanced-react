import client from "../../hooks/client";

const getPosts = () => client.get("/posts");

export default {
  getPosts
};