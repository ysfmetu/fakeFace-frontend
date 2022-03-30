import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
// @ts-ignore
import { CacheService } from '../service/cache.service';
// @ts-ignore
import { ServerConstant } from '../constant/server-constant';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

    constant: ServerConstant = new ServerConstant();
    private host: string = this.constant.host;

    constructor(private cacheService: CacheService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.method !== 'GET') {
            this.cacheService.clearCache();
            return next.handle(req);
        }

        if (req.url.includes(`${this.host}/user/resetPassword/`)) {
            return next.handle(req);
        }

        if (req.url.includes(`${this.host}/user/register`)) {
            return next.handle(req);
        }

        if (req.url.includes(`${this.host}/user/login`)) {
            return next.handle(req);
        }

        if (req.url.includes(`${this.host}/user/findByUsername/`)) {
            return next.handle(req);
        }

        const cachedResponse: HttpResponse<any> = this.cacheService.getCache(req.url);

        if (cachedResponse) {
            return of (cachedResponse);
        }

        return next.handle(req)
            .pipe(tap(event => {
                if (event instanceof HttpResponse) {
                    this.cacheService.cacheRequest(req.url, event);
                }}));

    }
}
