import { sendHTTPRequest } from "../../http/sendHTTPRequest/sendHTTPRequest";
import { HTTP } from "../../../constant";

const getItemDetail = (itemId: string) => {
  const requestUrl = `/itemDetail/${itemId}`;

  return sendHTTPRequest(requestUrl, HTTP.METHOD.GET);
};

export { getItemDetail };
