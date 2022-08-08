import { sendHTTPRequest } from "../../http/sendHTTPRequest/sendHTTPRequest";
import { HTTP } from "../../../constant";

const getUserById = async (userId: number) => {
  const userRequestUrl = `/user/${userId}`;

  try {
    const data = await sendHTTPRequest(userRequestUrl, HTTP.METHOD.GET);
    return data;
  } catch (error: any) {
    return error;
  }
};

export { getUserById };
