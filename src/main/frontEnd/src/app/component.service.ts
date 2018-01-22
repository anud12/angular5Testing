import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class ComponentService {

  constructor(private httpClient: HttpClient) {
  }

  public getFromServer(): Observable<String> {
    return this.httpClient.get<any>("http://localhost:8080/")
      .map(value => {
        console.log(value);
        console.log(value.mesage)
        return value.mesage
      });
  }

  public toUpperCase(argument: String): String {
    return argument.toUpperCase();
  }
}
