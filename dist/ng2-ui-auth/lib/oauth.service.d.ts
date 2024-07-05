import { Observable } from 'rxjs';
import { PopupService } from './popup.service';
import { ConfigService } from './config.service';
import { SharedService } from './shared.service';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class OauthService {
    private http;
    private shared;
    private config;
    private popup;
    readonly depProviders: ({
        provide: typeof HttpClient;
        useValue: HttpClient;
    } | {
        provide: typeof PopupService;
        useValue: PopupService;
    } | {
        provide: typeof ConfigService;
        useValue: ConfigService;
    })[];
    readonly deps: (typeof ConfigService | typeof PopupService | typeof HttpClient)[];
    constructor(http: HttpClient, shared: SharedService, config: ConfigService, popup: PopupService);
    authenticate<T extends object | string>(name: string, userData?: any): Observable<T>;
    unlink<T>(provider: string, url?: string, method?: string): Observable<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OauthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OauthService>;
}
