import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./shared.service";
import * as i2 from "./local.service";
import * as i3 from "./oauth.service";
export class AuthService {
    constructor(shared, local, oauth) {
        this.shared = shared;
        this.local = local;
        this.oauth = oauth;
    }
    login(user, url) {
        return this.local.login(user, url);
    }
    signup(user, url) {
        return this.local.signup(user, url);
    }
    logout() {
        return this.shared.logout();
    }
    authenticate(name, userData) {
        return this.oauth.authenticate(name, userData);
    }
    link(name, userData) {
        return this.oauth.authenticate(name, userData);
    }
    unlink(provider, url) {
        return this.oauth.unlink(provider, url);
    }
    isAuthenticated() {
        return this.shared.isAuthenticated();
    }
    getToken() {
        return this.shared.getToken();
    }
    setToken(token) {
        this.shared.setToken(token);
    }
    removeToken() {
        this.shared.removeToken();
    }
    getPayload() {
        return this.shared.getPayload();
    }
    setStorageType(type) {
        return this.shared.setStorageType(type);
    }
    getExpirationDate() {
        return this.shared.getExpirationDate();
    }
}
AuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AuthService, deps: [{ token: i1.SharedService }, { token: i2.LocalService }, { token: i3.OauthService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AuthService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.SharedService }, { type: i2.LocalService }, { type: i3.OauthService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXVpLWF1dGgvc3JjL2xpYi9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFRM0MsTUFBTSxPQUFPLFdBQVc7SUFDdEIsWUFBb0IsTUFBcUIsRUFBVSxLQUFtQixFQUFVLEtBQW1CO1FBQS9FLFdBQU0sR0FBTixNQUFNLENBQWU7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBYztJQUFHLENBQUM7SUFFaEcsS0FBSyxDQUFrQyxJQUFxQixFQUFFLEdBQVk7UUFDL0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBSSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLE1BQU0sQ0FBVSxJQUFxQixFQUFFLEdBQVk7UUFDeEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBSSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLE1BQU07UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLFlBQVksQ0FBa0MsSUFBWSxFQUFFLFFBQWM7UUFDL0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBSSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVNLElBQUksQ0FBa0MsSUFBWSxFQUFFLFFBQWM7UUFDdkUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBSSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVNLE1BQU0sQ0FBVSxRQUFnQixFQUFFLEdBQVk7UUFDbkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBSSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLGVBQWU7UUFDcEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxRQUFRLENBQUMsS0FBc0I7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRU0sY0FBYyxDQUFDLElBQWlCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLGlCQUFpQjtRQUN0QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzt5R0FyRFUsV0FBVzs2R0FBWCxXQUFXLGNBREMsTUFBTTs0RkFDbEIsV0FBVztrQkFEdkIsVUFBVTttQkFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuL2xvY2FsLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2F1dGhTZXJ2aWNlIH0gZnJvbSAnLi9vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFNoYXJlZFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2VUeXBlIH0gZnJvbSAnLi9zdG9yYWdlLXR5cGUuZW51bSc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzaGFyZWQ6IFNoYXJlZFNlcnZpY2UsIHByaXZhdGUgbG9jYWw6IExvY2FsU2VydmljZSwgcHJpdmF0ZSBvYXV0aDogT2F1dGhTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBsb2dpbjxUIGV4dGVuZHMgc3RyaW5nIHwgb2JqZWN0ID0gYW55Pih1c2VyOiBzdHJpbmcgfCBvYmplY3QsIHVybD86IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLmxvY2FsLmxvZ2luPFQ+KHVzZXIsIHVybCk7XG4gIH1cblxuICBwdWJsaWMgc2lnbnVwPFQgPSBhbnk+KHVzZXI6IHN0cmluZyB8IG9iamVjdCwgdXJsPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWwuc2lnbnVwPFQ+KHVzZXIsIHVybCk7XG4gIH1cblxuICBwdWJsaWMgbG9nb3V0KCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnNoYXJlZC5sb2dvdXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBhdXRoZW50aWNhdGU8VCBleHRlbmRzIG9iamVjdCB8IHN0cmluZyA9IGFueT4obmFtZTogc3RyaW5nLCB1c2VyRGF0YT86IGFueSk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLm9hdXRoLmF1dGhlbnRpY2F0ZTxUPihuYW1lLCB1c2VyRGF0YSk7XG4gIH1cblxuICBwdWJsaWMgbGluazxUIGV4dGVuZHMgb2JqZWN0IHwgc3RyaW5nID0gYW55PihuYW1lOiBzdHJpbmcsIHVzZXJEYXRhPzogYW55KTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMub2F1dGguYXV0aGVudGljYXRlPFQ+KG5hbWUsIHVzZXJEYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyB1bmxpbms8VCA9IGFueT4ocHJvdmlkZXI6IHN0cmluZywgdXJsPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMub2F1dGgudW5saW5rPFQ+KHByb3ZpZGVyLCB1cmwpO1xuICB9XG5cbiAgcHVibGljIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaGFyZWQuaXNBdXRoZW50aWNhdGVkKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VG9rZW4oKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhcmVkLmdldFRva2VuKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0VG9rZW4odG9rZW46IHN0cmluZyB8IG9iamVjdCk6IHZvaWQge1xuICAgIHRoaXMuc2hhcmVkLnNldFRva2VuKHRva2VuKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVUb2tlbigpOiB2b2lkIHtcbiAgICB0aGlzLnNoYXJlZC5yZW1vdmVUb2tlbigpO1xuICB9XG5cbiAgcHVibGljIGdldFBheWxvYWQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5zaGFyZWQuZ2V0UGF5bG9hZCgpO1xuICB9XG5cbiAgcHVibGljIHNldFN0b3JhZ2VUeXBlKHR5cGU6IFN0b3JhZ2VUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhcmVkLnNldFN0b3JhZ2VUeXBlKHR5cGUpO1xuICB9XG5cbiAgcHVibGljIGdldEV4cGlyYXRpb25EYXRlKCk6IERhdGUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFyZWQuZ2V0RXhwaXJhdGlvbkRhdGUoKTtcbiAgfVxufVxuIl19