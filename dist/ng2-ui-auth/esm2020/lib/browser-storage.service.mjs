import { Injectable } from '@angular/core';
import { StorageService } from './storage-service';
import { StorageType } from './storage-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "./config.service";
export class BrowserStorageService extends StorageService {
    constructor(config) {
        super();
        this.config = config;
        this.store = {};
        this.storageType = StorageType.MEMORY;
        if (!this.updateStorageType(config.options.storageType)) {
            console.warn(config.options.storageType + ' is not available.');
        }
    }
    updateStorageType(storageType) {
        const isStorageAvailable = this.checkIsStorageAvailable(storageType);
        if (!isStorageAvailable) {
            return false;
        }
        this.storageType = storageType;
        return true;
    }
    get(key) {
        switch (this.storageType) {
            case StorageType.COOKIE:
            case StorageType.SESSION_COOKIE:
                return this.getCookie(key);
            case StorageType.LOCAL_STORAGE:
            case StorageType.SESSION_STORAGE:
                return window[this.storageType].getItem(key);
            case StorageType.MEMORY:
                return this.store[key];
            case StorageType.NONE:
            default:
                return null;
        }
    }
    set(key, value, date) {
        switch (this.storageType) {
            case StorageType.COOKIE:
            case StorageType.SESSION_COOKIE:
                this.setCookie(key, value, this.storageType === StorageType.COOKIE ? date : '');
                break;
            case StorageType.LOCAL_STORAGE:
            case StorageType.SESSION_STORAGE:
                window[this.storageType].setItem(key, value);
                break;
            case StorageType.MEMORY:
                this.store[key] = value;
                break;
            case StorageType.NONE:
            default:
                break;
        }
    }
    remove(key) {
        switch (this.storageType) {
            case StorageType.COOKIE:
            case StorageType.SESSION_COOKIE:
                this.removeCookie(key);
                break;
            case StorageType.LOCAL_STORAGE:
            case StorageType.SESSION_STORAGE:
                window[this.storageType].removeItem(key);
                break;
            case StorageType.MEMORY:
                delete this.store[key];
                break;
            case StorageType.NONE:
            default:
                break;
        }
    }
    checkIsStorageAvailable(storageType) {
        switch (storageType) {
            case StorageType.COOKIE:
            case StorageType.SESSION_COOKIE:
                return this.isCookieStorageAvailable();
            case StorageType.LOCAL_STORAGE:
            case StorageType.SESSION_STORAGE:
                return this.isWindowStorageAvailable(storageType);
            case StorageType.NONE:
            case StorageType.MEMORY:
                return true;
            default:
                return false;
        }
    }
    isWindowStorageAvailable(storageType) {
        try {
            const supported = window && storageType in window && window[storageType] !== null;
            if (supported) {
                const key = Math.random()
                    .toString(36)
                    .substring(7);
                window[storageType].setItem(key, '');
                window[storageType].removeItem(key);
            }
            return supported;
        }
        catch (e) {
            return false;
        }
    }
    isCookieStorageAvailable() {
        try {
            const supported = document && 'cookie' in document;
            if (supported) {
                const key = Math.random()
                    .toString(36)
                    .substring(7);
                this.setCookie(key, 'test', new Date(Date.now() + 60 * 1000).toUTCString());
                const value = this.getCookie(key);
                this.removeCookie(key);
                return value === 'test';
            }
            return false;
        }
        catch (e) {
            return false;
        }
    }
    setCookie(key, value, expires = '', path = '/') {
        document.cookie = `${key}=${value}${expires ? `; expires=${expires}` : ''}; path=${path}`;
    }
    removeCookie(key, path = '/') {
        this.setCookie(key, '', new Date(0).toUTCString(), path);
    }
    getCookie(key) {
        return document.cookie.replace(new RegExp(`(?:(?:^|.*;\\s*)${key}\\s*\\=\\s*([^;]*).*$)|^.*$`), '$1');
    }
}
BrowserStorageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: BrowserStorageService, deps: [{ token: i1.ConfigService }], target: i0.ɵɵFactoryTarget.Injectable });
BrowserStorageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: BrowserStorageService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: BrowserStorageService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ConfigService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1zdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItdWktYXV0aC9zcmMvbGliL2Jyb3dzZXItc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBSWxELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxjQUFjO0lBSXZELFlBQW9CLE1BQXFCO1FBQ3ZDLEtBQUssRUFBRSxDQUFDO1FBRFUsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUhqQyxVQUFLLEdBQThCLEVBQUUsQ0FBQztRQUN0QyxnQkFBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFJdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUMsQ0FBQztTQUNqRTtJQUNILENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxXQUF3QjtRQUMvQyxNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDdkIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLEdBQUcsQ0FBQyxHQUFXO1FBQ3BCLFFBQVEsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4QixLQUFLLFdBQVcsQ0FBQyxNQUFN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QUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFTyxTQUFTLENBQUMsR0FBVyxFQUFFLEtBQWEsRUFBRSxPQUFPLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxHQUFHO1FBQ3BFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDO0lBQzVGLENBQUM7SUFFTyxZQUFZLENBQUMsR0FBVyxFQUFFLElBQUksR0FBRyxHQUFHO1FBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU8sU0FBUyxDQUFDLEdBQVc7UUFDM0IsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsR0FBRyw2QkFBNkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hHLENBQUM7O21IQXpJVSxxQkFBcUI7dUhBQXJCLHFCQUFxQjs0RkFBckIscUJBQXFCO2tCQURqQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3N0b3JhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yYWdlVHlwZSB9IGZyb20gJy4vc3RvcmFnZS10eXBlLmVudW0nO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJvd3NlclN0b3JhZ2VTZXJ2aWNlIGV4dGVuZHMgU3RvcmFnZVNlcnZpY2Uge1xuICBwcml2YXRlIHN0b3JlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIHByaXZhdGUgc3RvcmFnZVR5cGUgPSBTdG9yYWdlVHlwZS5NRU1PUlk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghdGhpcy51cGRhdGVTdG9yYWdlVHlwZShjb25maWcub3B0aW9ucy5zdG9yYWdlVHlwZSkpIHtcbiAgICAgIGNvbnNvbGUud2Fybihjb25maWcub3B0aW9ucy5zdG9yYWdlVHlwZSArICcgaXMgbm90IGF2YWlsYWJsZS4nKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlU3RvcmFnZVR5cGUoc3RvcmFnZVR5cGU6IFN0b3JhZ2VUeXBlKSB7XG4gICAgY29uc3QgaXNTdG9yYWdlQXZhaWxhYmxlID0gdGhpcy5jaGVja0lzU3RvcmFnZUF2YWlsYWJsZShzdG9yYWdlVHlwZSk7XG4gICAgaWYgKCFpc1N0b3JhZ2VBdmFpbGFibGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zdG9yYWdlVHlwZSA9IHN0b3JhZ2VUeXBlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHVibGljIGdldChrZXk6IHN0cmluZykge1xuICAgIHN3aXRjaCAodGhpcy5zdG9yYWdlVHlwZSkge1xuICAgICAgY2FzZSBTdG9yYWdlVHlwZS5DT09LSUU6XG4gICAgICBjYXNlIFN0b3JhZ2VUeXBlLlNFU1NJT05fQ09PS0lFOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb29raWUoa2V5KTtcbiAgICAgIGNhc2UgU3RvcmFnZVR5cGUuTE9DQUxfU1RPUkFHRTpcbiAgICAgIGNhc2UgU3RvcmFnZVR5cGUuU0VTU0lPTl9TVE9SQUdFOlxuICAgICAgICByZXR1cm4gd2luZG93W3RoaXMuc3RvcmFnZVR5cGVdLmdldEl0ZW0oa2V5KTtcbiAgICAgIGNhc2UgU3RvcmFnZVR5cGUuTUVNT1JZOlxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVtrZXldO1xuICAgICAgY2FzZSBTdG9yYWdlVHlwZS5OT05FOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZGF0ZTogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0b3JhZ2VUeXBlKSB7XG4gICAgICBjYXNlIFN0b3JhZ2VUeXBlLkNPT0tJRTpcbiAgICAgIGNhc2UgU3RvcmFnZVR5cGUuU0VTU0lPTl9DT09LSUU6XG4gICAgICAgIHRoaXMuc2V0Q29va2llKGtleSwgdmFsdWUsIHRoaXMuc3RvcmFnZVR5cGUgPT09IFN0b3JhZ2VUeXBlLkNPT0tJRSA/IGRhdGUgOiAnJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTdG9yYWdlVHlwZS5MT0NBTF9TVE9SQUdFOlxuICAgICAgY2FzZSBTdG9yYWdlVHlwZS5TRVNTSU9OX1NUT1JBR0U6XG4gICAgICAgIHdpbmRvd1t0aGlzLnN0b3JhZ2VUeXBlXS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU3RvcmFnZVR5cGUuTUVNT1JZOlxuICAgICAgICB0aGlzLnN0b3JlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFN0b3JhZ2VUeXBlLk5PTkU6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKGtleTogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0b3JhZ2VUeXBlKSB7XG4gICAgICBjYXNlIFN0b3JhZ2VUeXBlLkNPT0tJRTpcbiAgICAgIGNhc2UgU3RvcmFnZVR5cGUuU0VTU0lPTl9DT09LSUU6XG4gICAgICAgIHRoaXMucmVtb3ZlQ29va2llKGtleSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTdG9yYWdlVHlwZS5MT0NBTF9TVE9SQUdFOlxuICAgICAgY2FzZSBTdG9yYWdlVHlwZS5TRVNTSU9OX1NUT1JBR0U6XG4gICAgICAgIHdpbmRvd1t0aGlzLnN0b3JhZ2VUeXBlXS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTdG9yYWdlVHlwZS5NRU1PUlk6XG4gICAgICAgIGRlbGV0ZSB0aGlzLnN0b3JlW2tleV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTdG9yYWdlVHlwZS5OT05FOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0lzU3RvcmFnZUF2YWlsYWJsZShzdG9yYWdlVHlwZTogU3RvcmFnZVR5cGUpIHtcbiAgICBzd2l0Y2ggKHN0b3JhZ2VUeXBlKSB7XG4gICAgICBjYXNlIFN0b3JhZ2VUeXBlLkNPT0tJRTpcbiAgICAgIGNhc2UgU3RvcmFnZVR5cGUuU0VTU0lPTl9DT09LSUU6XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ29va2llU3RvcmFnZUF2YWlsYWJsZSgpO1xuICAgICAgY2FzZSBTdG9yYWdlVHlwZS5MT0NBTF9TVE9SQUdFOlxuICAgICAgY2FzZSBTdG9yYWdlVHlwZS5TRVNTSU9OX1NUT1JBR0U6XG4gICAgICAgIHJldHVybiB0aGlzLmlzV2luZG93U3RvcmFnZUF2YWlsYWJsZShzdG9yYWdlVHlwZSk7XG4gICAgICBjYXNlIFN0b3JhZ2VUeXBlLk5PTkU6XG4gICAgICBjYXNlIFN0b3JhZ2VUeXBlLk1FTU9SWTpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc1dpbmRvd1N0b3JhZ2VBdmFpbGFibGUoc3RvcmFnZVR5cGU6IFN0b3JhZ2VUeXBlLlNFU1NJT05fU1RPUkFHRSB8IFN0b3JhZ2VUeXBlLkxPQ0FMX1NUT1JBR0UpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3VwcG9ydGVkID0gd2luZG93ICYmIHN0b3JhZ2VUeXBlIGluIHdpbmRvdyAmJiB3aW5kb3dbc3RvcmFnZVR5cGVdICE9PSBudWxsO1xuXG4gICAgICBpZiAoc3VwcG9ydGVkKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IE1hdGgucmFuZG9tKClcbiAgICAgICAgICAudG9TdHJpbmcoMzYpXG4gICAgICAgICAgLnN1YnN0cmluZyg3KTtcbiAgICAgICAgd2luZG93W3N0b3JhZ2VUeXBlXS5zZXRJdGVtKGtleSwgJycpO1xuICAgICAgICB3aW5kb3dbc3RvcmFnZVR5cGVdLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1cHBvcnRlZDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0Nvb2tpZVN0b3JhZ2VBdmFpbGFibGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN1cHBvcnRlZCA9IGRvY3VtZW50ICYmICdjb29raWUnIGluIGRvY3VtZW50O1xuXG4gICAgICBpZiAoc3VwcG9ydGVkKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IE1hdGgucmFuZG9tKClcbiAgICAgICAgICAudG9TdHJpbmcoMzYpXG4gICAgICAgICAgLnN1YnN0cmluZyg3KTtcbiAgICAgICAgdGhpcy5zZXRDb29raWUoa2V5LCAndGVzdCcsIG5ldyBEYXRlKERhdGUubm93KCkgKyA2MCAqIDEwMDApLnRvVVRDU3RyaW5nKCkpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0Q29va2llKGtleSk7XG4gICAgICAgIHRoaXMucmVtb3ZlQ29va2llKGtleSk7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gJ3Rlc3QnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldENvb2tpZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlcyA9ICcnLCBwYXRoID0gJy8nKSB7XG4gICAgZG9jdW1lbnQuY29va2llID0gYCR7a2V5fT0ke3ZhbHVlfSR7ZXhwaXJlcyA/IGA7IGV4cGlyZXM9JHtleHBpcmVzfWAgOiAnJ307IHBhdGg9JHtwYXRofWA7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUNvb2tpZShrZXk6IHN0cmluZywgcGF0aCA9ICcvJykge1xuICAgIHRoaXMuc2V0Q29va2llKGtleSwgJycsIG5ldyBEYXRlKDApLnRvVVRDU3RyaW5nKCksIHBhdGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb29raWUoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY29va2llLnJlcGxhY2UobmV3IFJlZ0V4cChgKD86KD86XnwuKjtcXFxccyopJHtrZXl9XFxcXHMqXFxcXD1cXFxccyooW147XSopLiokKXxeLiokYCksICckMScpO1xuICB9XG59XG4iXX0=