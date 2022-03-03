// This is for access to storage
import { signoutSuccess } from "@redux/actions";
import "@redux/index";
import { RootState } from "@redux/reducers";
import { storage } from "../../App";

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response: Response) {
  return response.status === 204 ? "" : response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  if (response.status === 401) {
    storage.dispatch(signoutSuccess());
    throw new Error("Unauthorized access");
  }

  const error = new Error(response.statusText);
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request<T>(url: RequestInfo, options: RequestInit, isJSON = true): Promise<T> {
  return fetch(url, options)
    .then(checkStatus)
    .then(isJSON ? parseJSON : (response) => response.text());
}

export function getOptionsWithoutToken(method = "GET"): object {
  return {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
}

export function getOptions(method = "GET"): RequestInit {
  const { auth }: RootState = storage.getState();
  return {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: auth.tokenUser ?? "",
    },
  };
}

export function postOptionsWithoutToken(body: object = {}, method: string = "POST"): RequestInit {
  return {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
}

export function postOptions(body: object = {}, method: string = "POST"): RequestInit {
  const { auth }: RootState = storage.getState();
  return {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: auth.tokenUser ?? "",
    },
    body: JSON.stringify(body),
  };
}

export function putOptions(body: object = {}, method: string = "PUT"): RequestInit {
  const { auth }: RootState = storage.getState();
  return {
    method,
    headers: {
      Accept: "application/json",
      Authorization: auth.tokenUser ?? "",
    },
    body: JSON.stringify(body),
  };
}

export function patchOptions(body: object = {}, method: string = "PATCH"): RequestInit {
  const { auth }: RootState = storage.getState();
  return {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: auth.tokenUser ?? "",
    },
    body: JSON.stringify(body),
  };
}

export function deleteOptions(body: object, method: string = "DELETE"): RequestInit {
  const { auth }: RootState = storage.getState();
  return {
    method,
    headers: {
      Accept: "application/json",
      Authorization: auth.tokenUser ?? "",
    },
    body: JSON.stringify(body),
  };
}

export async function showMessageError(err: Error | unknown): Promise<void> {
  // eslint-disable-next-line no-console
  console.log(err);
}
