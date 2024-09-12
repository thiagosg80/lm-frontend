import { Component, Input } from '@angular/core';
import { Message } from '../../../model/message';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-system-speech',
  standalone: true,

  imports: [
    MatIconModule
  ],

  templateUrl: './system-speech.component.html',
  styleUrl: './system-speech.component.scss'
})
export class SystemSpeechComponent {
  @Input() message: Message = new Message;
}
