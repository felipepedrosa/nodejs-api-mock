import { Router } from "express";

const router = Router();

export function createRoutes(endpointList) {
  if (!endpointList) throw Error("Endopoint list is required!");

  endpointList.forEach((endpoint) => {
    endpoint.methods.forEach((method) => {
      const { headers, status, responseBody, responseDelay } = method;

      switch (method.type.toLowerCase()) {
        case "get":
          router.get(endpoint.url, (request, response) =>
            configureResponse(
              response,
              headers,
              status,
              responseBody,
              responseDelay
            )
          );
          break;

        case "post":
          router.post(endpoint.url, (request, response) =>
            configureResponse(
              response,
              headers,
              status,
              responseBody,
              responseDelay
            )
          );
          break;

        case "patch":
          router.patch(endpoint.url, (request, response) =>
            configureResponse(
              response,
              headers,
              status,
              responseBody,
              responseDelay
            )
          );
          break;

        case "put":
          router.put(endpoint.url, (request, response) =>
            configureResponse(
              response,
              headers,
              status,
              responseBody,
              responseDelay
            )
          );
          break;

        case "delete":
          router.delete(endpoint.url, (request, response) =>
            configureResponse(
              response,
              headers,
              status,
              responseBody,
              responseDelay
            )
          );
          break;
        default:
          throw Error(`http method ${method.type} not implemented!`);
      }
    });
  });

  return router;
}

function configureResponse(
  httpResponse,
  headers,
  status = 200,
  body,
  responseDelay = 0
) {
  createHeaders(headers, httpResponse);

  setTimeout(() => {
    httpResponse.status(status).json(body);
  }, responseDelay);
}

function createHeaders(headers = [], httpResponse) {
  if (!headers || headers.length === 0) return;

  headers.forEach((header) => {
    httpResponse.setHeader(header.name, header.value);
  });
}
