import axios from "axios";

export const Api = axios.create({
  baseURL: "http://localhost:9000",
});

export const apiRequest = async ({
  type = "GET",
  url,
  postData,
  headerList,
}) => {
  switch (type) {
    case "GET":
      return Api.get(url, { headers: headerList }).then((r) => r.data);

    case "POST":
      return Api.post(url, postData, { headers: headerList }).then(
        (r) => r.data
      );

    case "PATCH":
      return Api.patch(url, postData, { headers: headerList }).then(
        (r) => r.data
      );

    case "DELETE":
      return Api.delete(url, { headers: headerList }).then((r) => r.data);

    default:
      throw new Error(
        'Unknown request type. Must match to: "GET", "POST", "PATCH" or "DELETE"'
      );
  }
};
