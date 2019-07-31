import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) {
        // this.http.get("http://localhost:10386/api/PersonApi")
        //     .subscribe(res => console.log(res));

    }

    private address: string = "http://localhost:10386/api/";
    private addressEss: string = "http://extrassup.ssup.co.th/api/v1/";


    requestGet(path: string) {
       return this.http.get(`${this.address}${path}`, {
            headers:this.appendHeaders()
        })
        .pipe();
        //.subscribe(res => console.log(res));
    }

    requestPost(path: string, body: any) {
        return this.http.post(`${this.address}${path}`, body,{
            headers:this.appendHeaders()
        })
            .subscribe(res => console.log(res));
    }

    requestEssPost(path: string, body: any) {
        return this.http.post(`${this.addressEss}${path}`, body,{
            headers:this.appendHeaders()
        })
            .subscribe(res => console.log(res));
    }

    // เพิ่ม header
    private appendHeaders(accessToken=null) {
        const headers = {};
        if (accessToken) headers['Authorization'] = `Bearer ${accessToken}`;
        headers['Content-Type'] = 'application/json';
        return new HttpHeaders(headers);
    }


}