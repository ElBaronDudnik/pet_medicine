import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  public getAllPets() {
    return this.http
      .get(API_URL + '/pets');
  }

  public addPet(newPet) {
    return this.http
      .post(API_URL + '/pets', newPet);
  }

  public changePetName(changedPet) {
    const id = changedPet['id'];
    return this.http
      .put(API_URL + '/pets/' + id, changedPet);
  }

  public deletePet(id: number) {
    return this.http
      .delete(API_URL + '/pets/' + id);
  }



}
