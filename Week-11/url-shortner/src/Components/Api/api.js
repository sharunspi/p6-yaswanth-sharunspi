import client from "./client";

export const createShortUrl = (url) => {
  return client.get("/shorten?url=" + url);
};
