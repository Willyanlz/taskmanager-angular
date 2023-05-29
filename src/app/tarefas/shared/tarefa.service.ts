import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Tarefa, ResponseTarefas } from './';
import { Observable } from 'rxjs';

@Injectable()
export class TarefaService {

  // private readonly URL = "http://localhost:8080/api/tarefas"
  // private readonly URL = "http://192.168.15.70:8080/api/tarefas" // url para testar em outras maquinas localmente
     private readonly URL = "https://taskmanager-api-production-1e24.up.railway.app/api/tarefas" 

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Tarefa[]>{
  	return this.http.get<Tarefa[]>(this.URL);
  }

  cadastrar(nome: Tarefa): Observable<Tarefa[]> {
  	return this.http.post<any>(this.URL, nome);
  }
  
  remover(id: number): Observable<any> {
    return this.http.delete<any>(this.URL+ `/${id}`);
  }
  
  atualizarNome(id: number, nome: string): Observable<any> {
    const body = { nome: nome };
    return this.http.put<any>(this.URL + `/${id}`, body);
  }

  alterarStatus(id: number): Observable<Tarefa[]> {
    return this.http.patch<any>(this.URL+ `/${id}`, '');
  }

  getById(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(this.URL + `/${id}`);
  }

}
