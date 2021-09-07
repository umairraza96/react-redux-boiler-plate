import axios from "axios";
import { API_URL } from "./index";
import { get } from "lodash";

export async function HTTP(method, uri, data, headers = null, params = null) {
  const url = `${API_URL}${uri}`.trim();
  let query = { method, url, headers: {} };

  if (headers !== null) query.headers = headers;
  if (params !== null) query.params = params;
  if (method === "post" || method === "put" || method === "delete" || method === "patch") query.data = data;

  // Api keys
  const jwt = localStorage.getItem("jwt");

  if (jwt) query.headers["Authorization"] = "Bearer " + localStorage.getItem("jwt");

  return new Promise(function (resolve, reject) {
    axios(query)
      .then((response) => {
        const { success, data, message, type } = get(response, "data", {});

        // Global server log
        console.log(`API Response: ${uri}`, { query, success, data, message, type });

        // Server response destructure
        if (API_URL.includes("Type your domain") || API_URL.includes("localhost")) resolve({ success, data, message, type });
        else resolve(response);
      })
      .catch((err) => {
        const {
          data: { success, data, message, type },
          status,
        } = get(err, "response", {});

        console.log(`API Error: ${uri}`, { query, err, success, data, message, type, status });

        if (message === "Network Error") window.alert(err.message);
        else if (type === "TOKEN_INVALID") {
          localStorage.removeItem("jwt");

          // Reload just to be safe
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else if (status === 401) localStorage.removeItem("jwt");
        reject(err);
      });
  });
}
