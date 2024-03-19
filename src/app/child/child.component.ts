import { CommonModule, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, NgFor],
  template: `
    <input type="text" #data />
    <button (click)="addNewMessage(data.value); data.value = ''">Update</button>
  `,
})
export class AppChildComponent {
  constructor(private dataService: DataService) {}

  addNewMessage(newMessage: string) {
    this.dataService.addNewMessage(newMessage);
  }
}
