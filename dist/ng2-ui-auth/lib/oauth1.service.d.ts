import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOauth1Options } from './config-interfaces';
import { ConfigService } from './config.service';
import { IOauthService } from './oauth-service';
import { PopupService } from './popup.service';
import * as i0 from "@angular/core";
export declare class Oauth1Service implements IOauthService {
    private http;
    private popup;
    private config;
    constructor(http: HttpClient, popup: PopupService, config: ConfigService);
    open<T extends object | string = any>(oauthOptions: IOauth1Options, userData: object): Observable<T>;
    private exchangeForToken;
    static ɵfac: i0.ɵɵFactoryDeclaration<Oauth1Service, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<Oauth1Service>;
}
