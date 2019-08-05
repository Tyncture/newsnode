import Axios from "axios";

const API_URL = "https://hacker-news.firebaseio.com/v0";

async function requestPath(path: string, method: "GET" | "POST", body?: {}) {
  try {
    const response = await Axios.request({
      method,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(body),
      url: `${API_URL}${path}`,
    });
    return response.data;
  } catch (e) {
    throw e;
  }
}

async function getPath(path: string) {
  return await requestPath(path, "GET");
}

async function postPath(path: string, body?: {}) {
  return await requestPath(path, "POST", body);
}

const HNApi = {
  requestPath,
  getPath,
  postPath,
}

export default HNApi;