import { RequestMethod } from "../../type";

type HTTPConstant = {
  METHOD: Record<string, RequestMethod>;
};

const HTTP: HTTPConstant = {
  METHOD: {
    DELETE: "DELETE",
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
  }
};

export { HTTP };
