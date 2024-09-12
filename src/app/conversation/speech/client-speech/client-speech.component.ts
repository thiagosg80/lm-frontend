import { Component, Input, IterableDiffers } from '@angular/core';
import { Message } from '../../../model/message';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-client-speech',
  standalone: true,

  imports: [
    MatIconModule
  ],

  templateUrl: './client-speech.component.html',
  styleUrl: './client-speech.component.scss'
})
export class ClientSpeechComponent {
  @Input() message: Message = new Message;
}
