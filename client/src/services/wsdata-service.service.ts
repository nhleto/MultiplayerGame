import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from '../environments/environment';
import { catchError, tap, switchAll, map } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';
export const WS_ENDPOINT = environment.endpoint;

@Injectable({
    providedIn: 'root',
})
export class WSDataServiceService {
    private socket$!: WebSocketSubject<any>;

    constructor() {}

    public connect() {
        if (!this.socket$ || this.socket$.closed) {
            this.socket$ = this.getNewEndpoint();
            const position = this.socket$.pipe(
                map(data => {
                    
                })
            )
        }
    }

    sendPosition(msg: any) {

    }

    close() {
        this.socket$.complete();
    }

    private getNewEndpoint() {
        return webSocket(WS_ENDPOINT);
    }
}
