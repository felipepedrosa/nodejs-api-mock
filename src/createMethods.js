import { Router } from "express";

const router = Router();

export function createRoutes(routes) {
  if (!routes) throw Error("Endopoint list is required!");

  routes.forEach((route) => {
    route.methods.forEach((httpMethod) => {
      const { responseHeaders, responseStatus, responseBody, responseDelay } =
        httpMethod;

      router[httpMethod.type.toLowerCase()](
        route.url,
        (request, httpResponse) =>
          configureResponse(
            httpResponse,
            responseHeaders,
            responseStatus,
            responseBody,
            responseDelay
          )
      );
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
