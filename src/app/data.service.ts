import { Injectable, signal } from '@angular/core';
import { Data } from './models/data';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  [x: string]: any;
  data = signal<Data>({
    messages: [],
  });

  addNewMessage(newMessage: string) {
    this.data.update((d) => {
      d.messages.push(newMessage);
      return d;
    });
  }
}
