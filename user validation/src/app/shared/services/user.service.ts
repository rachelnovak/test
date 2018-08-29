import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { observable } from '../../../../node_modules/rxjs';

@Injectable()
export class UserService {
    basicUrl = "http://localhost:3500/api";
    userList: User[];

    constructor(private httpClient: HttpClient) { }
  

    getUsers(setUserList:(res)=>void):void{
        let url: string = this.basicUrl + "/getList";
        this.httpClient.get<any[]>(url)
          .subscribe(res => {
            this.userList = res;
            setUserList(this.userList);
          });
    }

    addUser(user: User): void {
        let url: string = this.basicUrl + "/addUser";
        this.httpClient.post<User>(url, user).subscribe(res => {
            console.log(res);
            alert("the user added: "+JSON.stringify(res));
        }, error => {
            alert("error:" + JSON.stringify(error));
        })
    }




}