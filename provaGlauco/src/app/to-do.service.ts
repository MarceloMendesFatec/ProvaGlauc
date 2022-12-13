import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interface } from 'readline';

@Injectable({
  providedIn: 'root'
})
export class ToDOService {

  constructor(private http: HttpClient) { }

  private todoUrl='https://jsonplaceholder.typicode.com/todos'



  getData():Observable<Interface[]>{
    return this.http.get<Interface[]>(this.todoUrl)
  }

   /* criacao de metodo assincrono
    para receber os dados da api por meio do
    metodo GET
    */
}
