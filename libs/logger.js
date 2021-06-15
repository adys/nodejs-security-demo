import log from "lambda-log";

if (process.env.appDebug === "true") {
  log.options.debug = true;
}

export default log;
