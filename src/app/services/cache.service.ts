import { Injectable } from '@angular/core';
import {HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CacheService {
    private request: any ={};
    constructor() { }

    casheRequest(requestUrl: string, response: HttpResponse<any>):void{
        this.request[requestUrl]=response;
    }

    getCashe(request: string):HttpResponse<any>|null{
        return this.request[request];
    }
    invalidateCash(request: string): void{
        this.request[request];
    }
    clearCashe(): void{
        this.request={};
    }


}
