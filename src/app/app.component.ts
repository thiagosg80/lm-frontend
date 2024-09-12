import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Message } from './model/message';
import { Sender } from './enum/sender';
import { ConversationComponent } from './conversation/conversation.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    ConversationComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  clientInput: string = '';

  sendMessage(messageInput: string): void {
    if (messageInput) {
      this.sendMessageNullSafe(messageInput);
    }
  }

  @ViewChild('clientInputElement') clientInputElement!: ElementRef;
  @ViewChild('chatContainerElement') chatContainerElement!: ElementRef;

  private sendMessageNullSafe(messageInput: string): void {
    this.addMessage(messageInput, Sender.CLIENT);
    this.clientInput = '';
    this.clientInputElement.nativeElement.focus();
    const Y = this.chatContainerElement.nativeElement.scrollHeight;
    this.chatContainerElement.nativeElement.scrollTo(0, Y);
  }

  messages: Array<Message> = [];

  private addMessage(messageInput: string, sender: string): void {
    const MESSAGE = new Message;
    MESSAGE.sender = sender;
    MESSAGE.text = messageInput;
    this.messages.push(MESSAGE);
  }
}
