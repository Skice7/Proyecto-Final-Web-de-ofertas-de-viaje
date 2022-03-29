import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const Api = 'https://web-ofertas-de-viaje.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http : HttpClient) { }

  // Chollos

  getListaChollos() : Observable <object> {
    return this.http.get<object>(`${Api}/api/Chollos`);
  }

  getChollo(id : any): Observable <object> {
    return this.http.get<object>(`${Api}/api/Chollos/${id}`);
  }

  addChollo( data : any): Observable <object> {
    return this.http.post<object>(`${Api}/api/Chollos`, data);
  }

  editChollo(id : any , data : any): Observable <object> {
    return this.http.put<object>(`${Api}/api/Chollos/${id}`, data);
  }

  deleteChollo(id : any): Observable <object> {
    return this.http.delete<object>(`${Api}/api/Chollos/${id}`);
  }

  // Hoteles
  getListaHoteles() : Observable <object> {
    return this.http.get<object>(`${Api}/api/Hoteles`);
  }

  getHotel(id : any) : Observable <object> {
    return this.http.get<object>(`${Api}/api/Hoteles/${id}`);
  }

  addHotel( data : any): Observable <object> {
    return this.http.post<object>(`${Api}/api/Hoteles`, data);
  }

  editHotel(id : any , data : any): Observable <object> {
    return this.http.put<object>(`${Api}/api/Hoteles/${id}`, data);
  }

  deleteHotel(id : any): Observable <object> {
    return this.http.delete<object>(`${Api}/api/Hoteles/${id}`);
  }


  //Hotel Chollo

  getlistaHotel_chollo() : Observable <object> {
    return this.http.get<object>(`${Api}/api/Hotel_chollo`);
  }

  getHotel_chollo(id : any) : Observable <object> {
    return this.http.get<object>(`${Api}/api/Hotel_chollo/${id}`);
  }

  addHotel_chollo( data : any): Observable <object> {
    return this.http.post<object>(`${Api}/api/Hotel_chollo`, data);
  }

  editHotel_chollo(id : any , data : any): Observable <object> {
    return this.http.put<object>(`${Api}/api/Hotel_chollo/${id}`, data);
  }

  deleteHotel_chollo(id : any): Observable <object> {
    return this.http.delete<object>(`${Api}/api/Hotel_chollo/${id}`);
  }

  // Users

  getlistaUsers() : Observable <object> {
    return this.http.get<object>(`${Api}/users/`);
  }

  getUsers(username : any) : Observable <object> {
    return this.http.get<object>(`${Api}/users/${username}`);
  }

  addUsers( data : any): Observable <object> {
    return this.http.post<object>(`${Api}/users/`, data);
  }
/* agregar funcion en spring
  editUsers(id : any , data : any): Observable <object> {
    return this.http.put<object>(`${Api}/users/${id}`, data);
  }*/

  deleteUsers(id : any): Observable <object> {
    return this.http.delete<object>(`${Api}/users/${id}`);
  }

}
