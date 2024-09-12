import { Component, Input, IterableDiffers, OnChanges, SimpleChanges } from '@angular/core';
import { Message } from '../model/message';
import { Sender } from '../enum/sender';
import { ClientSpeechComponent } from './speech/client-speech/client-speech.component';
import { SystemSpeechComponent } from './speech/system-speech/system-speech.component';

@Component({
  selector: 'app-conversation',
  standalone: true,

  imports: [
    ClientSpeechComponent,
    SystemSpeechComponent
  ],

  templateUrl: './conversation.component.html'
})
export class ConversationComponent {
  SENDER_CLIENT: string = Sender.CLIENT;
  SENDER_SYSTEM: string = Sender.SYSTEM;
  iterableDiffer!: any;

  constructor(private iterableDiffers: IterableDiffers) {
    this.iterableDiffer = iterableDiffers.find([]).create();
  }

  @Input() messages: Array<Message> = [];

  ngDoCheck(): void {
    this.iterableDiffer.diff(this.messages);
  }
}
