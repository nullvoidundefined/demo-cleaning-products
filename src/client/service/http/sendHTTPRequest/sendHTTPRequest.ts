import axios, { AxiosResponse } from "axios";

import { RequestMethod } from "../../../../type";

const sendHTTPRequest = async (
  url: string,
  method: RequestMethod,
  data?: Record<string, any>
) => {
  const domain = "http://localhost:5000";
  const fullUrl = domain + url;

  return axios({
    data,
    method,
    url: fullUrl,
  })
    .then((response: AxiosResponse) => {
      if (response.status === 200 || response.status === 201)
        console.log("sendHTTPRequest: Success");
      return response.data;
    })
    .catch((error) => {
      console.log("sendHTTPRequest: Error", error);
      alert(error);
    });
};

export { sendHTTPRequest };
