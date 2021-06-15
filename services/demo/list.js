import { response } from "../../libs/response";
import log from "../../libs/logger";

export async function main(event, context) {

  log.debug("Demo");
  log.debug(event);
  return response("Hello World!");
}
