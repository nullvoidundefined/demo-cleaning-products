import axios from "axios";
import { HTTP } from "../../../constant";

import { sendHTTPRequest } from "./sendHTTPRequest";

jest.mock("axios");

describe("service/http/example", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return data if status code equals 200", async () => {
    const mockResponse = { status: 200, data: JSON.stringify("example data") };

    const mockAxios = axios as unknown as jest.Mock;
    mockAxios.mockResolvedValueOnce(mockResponse);

    const result = await sendHTTPRequest("/example", HTTP.METHOD.GET);

    expect(result).toEqual("example data");

    expect(axios).toBeCalledWith({
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_DOMAIN}/example`,
    });
  });
});
