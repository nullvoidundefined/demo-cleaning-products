import { HTTP } from "../../../constant";
import { sendHTTPRequest } from "../../http/sendHTTPRequest/sendHTTPRequest";

const addItemToBundle = (itemId: string, userId: string) => {
    const requestUrl = `/bundle/addItem`;
    const data = {
        itemId,
        userId
    }
    return sendHTTPRequest(requestUrl, HTTP.METHOD.PUT, data);
}

export { addItemToBundle }