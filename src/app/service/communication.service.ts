import { inject, Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Message } from '../model/message';
import { Sender } from '../enum/sender';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private httpClient: HttpClient = inject(HttpClient);

  getResponse(input: string): Observable<Message> {
    const URL = environment.apiDomain.concat('chat/stream_log');
    const BODY = {input: input, config: {}};

    return this.httpClient.post(URL, BODY).pipe(switchMap((i) => this.getHandleResponse(i)));
  }

  private getHandleResponse(input: any): Observable<Message> {
    console.log(input);
    return new Observable(observer => {
      const RESPONSE = new Message;
      RESPONSE.sender = Sender.SYSTEM;
      RESPONSE.text = 'Sent system text';
      observer.next(RESPONSE);
    });
  }
}
