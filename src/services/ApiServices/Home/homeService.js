import http from "../../httpServices/httpServices";
import config from "../../config.json";

const endpoint = config.apiEndpoint + "/pin-api/search";

export async function getAllPins(req) {
  const { data } = await http.get(endpoint, req);
  return data;
}
