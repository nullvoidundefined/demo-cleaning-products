import { sendHTTPRequest } from "../../http/sendHTTPRequest/sendHTTPRequest";
import { HTTP } from "../../../constant";
import { Item } from "../../../../type";

const getItemList = (userId: string) => {
  const requestUrl = `/itemList/${userId}`;

  return sendHTTPRequest(requestUrl, HTTP.METHOD.GET);
};

export { getItemList };
