import { SYSTEM_CONFIG } from "../utils/SystemConfig";
import axios from "axios";
import { getAccessToken } from "../utils/StorageHelper";

export default function api(
    method,
    service,
    header,
    endPoint,
    token,
    body,
    params,
    extraConfig = {} 
) {
    let baseURL = service === "auth" ? SYSTEM_CONFIG.authUrl : SYSTEM_CONFIG.baseUrl;
    let customURL = addParamsToURL(baseURL + endPoint, params);

    let headers = getHeaders(token, header === null ? {} : header)
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: customURL,
            data: body,
            headers: headers.headers,
            ...extraConfig
        })
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
    });
}
const addParamsToURL = (baseURL, params) => {
    if (!params) return baseURL;

    const queryParams = new URLSearchParams(params).toString();
    return `${baseURL}?${queryParams}`;
};

const getHeaders = (token, adHeaders) => {
    const baseHeaders = {
      Accept: "application/json",
      ...adHeaders, // If multipart/form-data is passed here, keep it
    };
  
    // Only set default JSON header if not explicitly set
    if (!baseHeaders["Content-Type"]) {
      baseHeaders["Content-Type"] = "application/json";
    }
  
    if (token) {
      return {
        headers: {
          ...baseHeaders,
          Authorization: `Bearer ${getAccessToken()}`,
        },
      };
    } else {
      return {
        headers: baseHeaders,
      };
    }
  };
  