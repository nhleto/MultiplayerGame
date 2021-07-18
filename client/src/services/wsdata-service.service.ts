import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
// import { environment } from '../../environments/environment';
import { catchError, tap, switchAll } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';
export const WS_ENDPOINT = environment.wsEndpoint;

@Injectable({
  providedIn: 'root'
})
export class WSDataServiceService {

  constructor() { }
}
