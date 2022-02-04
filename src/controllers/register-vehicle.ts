import { HttpRequest, HttpResponse } from "../interface/http-interface";

export class RegisterVehicle {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requriedProperties = ["name", "model", "year", "color"];

    for (const props of requriedProperties) {
      if (!httpRequest.body[props]) {
        return {
          statusCode: 400,
          body: new Error(`error in the: ${props}`),
        };
      }
    }
  }
}
