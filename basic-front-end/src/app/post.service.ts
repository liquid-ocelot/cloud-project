import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }


  async getPost(){
    return await this.http.get("http://back-end.localhost/post").toPromise() as {id: number, title:string, body:string, published:boolean}[]
  }

  async postPost(title:string, body: string){
    return await this.http.post("http://back-end.localhost/post",{title: title, body:body}).toPromise()
  }

}
