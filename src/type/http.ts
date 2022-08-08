type GetItemListQuery = {
  userId: string | null;
};

type GetItemDetailQuery = {
  itemId: string | null;
};

type RequestConfig = {
  method: RequestMethod;
  mode: RequestMode;
  body?: string;
};

type RequestMethod = "GET" | "POST" | "DELETE" | "PUT";

export type {
  GetItemDetailQuery,
  GetItemListQuery,
  RequestConfig,
  RequestMethod,
};
