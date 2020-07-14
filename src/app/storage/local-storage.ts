import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorage {
  public load<T>(key: string): T {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : undefined;
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public save<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
