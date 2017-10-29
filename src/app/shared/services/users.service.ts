import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { User } from "../models/user.model";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class UsersService {
  constructor(private http: Http) {}

  getUserByEmail(email: string): Observable<User> {
    return this.http
      .get(`http://localhost:3000/users?email=${email}`)
      .map((response: Response) => response.json())
      .map((user: User[]) => (user[0] ? user[0] : undefined));
  }

  createNewUser(user: User): Observable<User> {
    return this.http
      .post("http://localhost:3000/users", user)
      .map((response: Response) => response.json());
  }
}
