import Axios from "axios";

const API_URL = "https://hacker-news.firebaseio.com/v0";

async function requestPath(
  path: string,
  method: "GET" | "POST" | "PUT" | "PATCH",
  body?: {},
): Promise<{ [k: string]: any }> {
  const response = await Axios.request({
    method,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(body),
    url: `${API_URL}${path}`,
  });
  return response.data;
  // Axios will reject promise if non 200 OK response
  // Error handling is delegated to the implementor
}

async function getPath(path: string): Promise<{ [k: string]: any }> {
  return await requestPath(path, "GET");
}

async function postPath(
  path: string,
  body?: {},
): Promise<{ [k: string]: any }> {
  return await requestPath(path, "POST", body);
}

const HNApi = {
  requestPath,
  getPath,
  postPath,
};

export default HNApi;
