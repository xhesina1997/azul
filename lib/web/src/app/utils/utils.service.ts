import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
// import {GatewayService} from "../api/gateway.service";

@Injectable(
{
  providedIn: 'root'
}
)
export class UtilsService {

  public gatewayIsActive = true;
  public static themeKey: string;

  constructor(
  ) {
  }

  static getLocationHost() {
    if (environment.isHostedOnNodeJsServer) {
      return environment.apiGatewayHost
    }
    return location.host;
  }

  static getApiUrl() {
    let host = "localhost";
    if(environment.isHostedOnNodeJsServer) {
      host = environment.apiGatewayHost
    }else{
      host = location.host;
    }
    return 'http://' + host + "/";
  }

  // static getGatewayUrl() {
  //   return 'http://' + GatewayService.activeGateway.address + "/";
  // }

  static getGatewayHost() {
    let host = "localhost";
    if(environment.isHostedOnNodeJsServer) {
      host = environment.apiGatewayHost
    }else{
      host = location.host;
    }
    return  host;
  }

  static async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }

  static mergeData(destination: Object, source: Object) {
    Object.keys(source).forEach(key => {
      destination[key] = source[key];
    })
  }

  objFromString(obj, str){
    var arr = str.split('.');
    arr.forEach(el => {
      obj = obj[el];
    });
    return obj;
  }

   stopEventPropagation(event){
    event.stopPropagation();
    event.preventDefault();
  }

  getErrorMessage(error) {
    let errorBody:any = JSON.parse(error.error);
    let errorMessage: string = errorBody.error + "! " + errorBody.message + "!";
    errorMessage = errorMessage.replace("Service issue: / by zero!", "");
    return errorMessage;
  }




}


