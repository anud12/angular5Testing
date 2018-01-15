import {Injectable} from '@angular/core';

@Injectable()
export class ComponentService {

  constructor() {
  }

  public getValue(): number {
    return 0;
  }

  public toUpperCase(argument: String): String {
    return argument.toUpperCase();
  }
}
