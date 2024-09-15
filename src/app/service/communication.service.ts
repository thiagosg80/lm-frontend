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
    const QUERY_STRING: string = '?client_input='.concat(input);
    const URL: string = environment.apiDomain.concat('messages').concat(QUERY_STRING);

    return this.httpClient.get(URL).pipe(switchMap((i) => this.getHandleResponse(i)));
  }

  private getHandleResponse(input: any): Observable<Message> {
    return new Observable(observer => {
      const RESPONSE = new Message;
      RESPONSE.sender = Sender.SYSTEM;
      RESPONSE.text = input.text;
      observer.next(RESPONSE);
    });
  }
}
