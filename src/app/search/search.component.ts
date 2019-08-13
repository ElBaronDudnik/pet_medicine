import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {PetsDataService} from '../pets-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  faAngleDown = faAngleDown;
  toggleDropdown: boolean;
  @Output() changeOrderType = new EventEmitter();
  @Output() changeOrderBy = new EventEmitter();
  @Output() searchEvent = new EventEmitter();
  orderType: string;
  orderBy: string;
  handleQuery(str: string): void {
    this.petsService.changeSearchString(str);
    this.searchEvent.emit(str);
  }
  toggle() {
    this.toggleDropdown = !this.toggleDropdown;
  }
  toggleOrderType(str: string) {
    this.orderType = str;
    this.petsService.changeOrderType(str);
    this.changeOrderType.emit();
  }
  toggleOrderBy(str: string) {
    this.orderBy = str;
    this.petsService.changeOrderBy(str);
    this.changeOrderBy.emit();
  }
  constructor(private petsService: PetsDataService) { }

  ngOnInit() {
  }


}
