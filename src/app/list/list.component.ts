import {Component, OnInit} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { PetsDataService } from '../pets-data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  faTimes = faTimes;
  petsDataList: object[];
  modifiedList: object[];
  constructor(private petsService: PetsDataService) { }
  deleteItem(item: object): void {
    this.petsService.deletePet(item['id']).subscribe(() => {
      this.petsDataList = this.petsDataList.filter(pet => pet['id'] !== item['id']);
      this.modifiedList = this.modifiedList.filter(pet => pet['id'] !== item['id']);
    });
  }
  search() {
    this.modifiedList = this.petsService.searchPets(this.petsDataList);
  }
  changeName(e, item) {
    item.petName = e.target.textContent;
    this.petsService.changeName(item).subscribe();
  }
  changeOrderBy() {
    this.petsService.sortPets(this.modifiedList);
  }
  changeOrderType() {
    this.petsService.sortPets(this.modifiedList);
  }

  ngOnInit() {
    this.petsService.getAllPets().subscribe((data: object[]) => {
      this.petsDataList = data;
      this.modifiedList = this.petsDataList;
    });
  }

}
