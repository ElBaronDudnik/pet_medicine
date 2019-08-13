import { Injectable, OnInit } from '@angular/core';
import { PetsInterface } from './pets';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PetsDataService {
  orderType = 'petName';
  orderBy = 'acs';
  searchString = '';

  constructor(private apiService: ApiService) { }

  getAllPets() {
    return this.apiService.getAllPets();
  }

  addPet(addItem: PetsInterface) {
    return this.apiService.addPet(addItem);
  }

  deletePet(petId: number) {
    return this.apiService.deletePet(petId)
  }

  searchPets(petsList) {
    return petsList.filter(pet => {
      return (
        pet['petName'].toLowerCase().includes(this.searchString.toLowerCase()) ||
        pet['ownerName'].toLowerCase().includes(this.searchString.toLowerCase()) ||
        pet['aptNotes'].toLowerCase().includes(this.searchString.toLowerCase())
      );
    });
  }
  changeSearchString(str) {
    this.searchString = str;
  }

  changeName(changedItem: object) {
    return this.apiService.changePetName(changedItem);
  }

  changeOrderType(str: string) {
    this.orderType = str;
  }

  changeOrderBy(str: string) {
    this.orderBy = str;
  }

  sortPets(petsList) {
    petsList.sort((a, b) => {
      let order: number;
      if (this.orderBy === 'acs'){
        order = 1;
      } else {
        order = -1;
      }

      if (a[this.orderType] > b[this.orderType]) {
        return 1 * order;
      } else {
        return -1 * order;
      }
    });
  }

}
