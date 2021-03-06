import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Task} from '../interfaces/task'

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private api = 'https://ghibliapi.herokuapp.com';

  constructor(private http: HttpClient) { }

  getAllTasks(){
    const path =`${this.api}/films`;
    return this.http.get<Task[]>(path);
    }
}



