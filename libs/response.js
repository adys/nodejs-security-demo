export function success(body) {
  return buildResponse(200, body);
}

export function failure(body) {
  return buildResponse(500, body);
}

function buildResponse(statusCode, body) {
  const res = {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(body),
  };

  return res;
}

export function response(
  body = {},
  httpCode = 200,
  internalCode = 0,
  retryable = true
) {
  if (httpCode >= 200 && httpCode < 300) {
    return buildResponse(httpCode, body);
  } else {
    body["error"] = {
      internalCode: internalCode,
      retryable: retryable,
    };
    return buildResponse(httpCode, body);
  }
}
