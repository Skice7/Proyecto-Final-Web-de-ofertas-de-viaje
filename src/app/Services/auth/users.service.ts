import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const AUTH_API = 'https://web-ofertas-de-viaje.herokuapp.com/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getById(id: string) {
    return this.http.get(
      `https://web-ofertas-de-viaje.herokuapp.com/users/${id}`
    );
  }

  update(id: any, data: any) {
    return this.http.put(
      `${`https://web-ofertas-de-viaje.herokuapp.com/users`}/${id}`,
      data
    );
  }
}
