import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, NgFor],
  template: `
    <div *ngFor="let m of messages; let i = index" class="message-item">
      <li>{{ m }}</li>
      <a class="material-icons ml-2" (click)="deleteMessage(i)">close</a>
    </div>
  `,
  styles: [
    `
      .message-item {
        display: flex;
        align-items: center;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 8px;
      }

      .message-item span {
        flex: 1;
        margin-right: 10px;
      }

      .material-icons {
        cursor: pointer;
      }
    `,
  ],
})
export class ParentComponent {
  messages: string[] = [];
  constructor(private dataService: DataService) {
    this.messages = this.dataService.data().messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
    // You might want to update data service or API here to reflect changes
  }
}






