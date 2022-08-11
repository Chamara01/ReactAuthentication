
import { handleResponse } from "../Helpers/fetch-helpers";
import { requestBase } from "../Helpers/fetch-helpers";

const apiBase = "baseurl";

class WeatherForecastService {
  getForecasts() {
    debugger
    let request = Object.assign({}, requestBase, { method: "GET" });
    let url = `${apiBase}`;

    return fetch(url, request).then(handleResponse);
  }

  getProtectedForecast() {
    debugger
    let request = Object.assign({}, requestBase, { method: "GET" });
    debugger
    let url = `${apiBase}/5`;

    return fetch(url, request).then(handleResponse);
  }
}

const instance = Object.freeze(new WeatherForecastService());
export { instance as WeatherForecastService };