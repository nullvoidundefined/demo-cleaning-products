import { HTTP } from "../../../constant";
import { sendHTTPRequest } from "../../http/sendHTTPRequest/sendHTTPRequest";

const removeItemFromBundle = (itemId: string, userId: string) => {
  const requestUrl = `/bundle/removeItem`;
  const data = {
    itemId,
    userId,
  };
  return sendHTTPRequest(requestUrl, HTTP.METHOD.PUT, data);
};

export { removeItemFromBundle };
