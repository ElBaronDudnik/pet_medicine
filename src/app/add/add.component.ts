import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { PetsDataService } from '../pets-data.service';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  showForm = false;
  constructor(private api: ApiService) { }

  ngOnInit() {

  }

  addPet(formInfo) {
    this.onSubmit(formInfo);
    this.api.addPet(this.onSubmit(formInfo)).subscribe(data => console.log(data));
    formInfo = [];
  }

  onSubmit(formInfo) {
    const tempItem: object = {
      petName: formInfo.petName,
      ownerName: formInfo.ownerName,
      aptDate: formInfo.aptDate + '' + formInfo.aptTime,
      aptNotes: formInfo.aptNotes,
    };
    this.showForm = !this.showForm;
    return formInfo;
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
