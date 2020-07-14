import { Injectable } from '@angular/core';

@Injectable()
export class SerializationService {
  // tslint:disable-next-line:no-any
  public deserialize(str: string): any {
    return JSON.parse(str);
  }

  // tslint:disable-next-line:no-any
  public serialize(obj: any): string {
    return JSON.stringify(obj);
  }
}
