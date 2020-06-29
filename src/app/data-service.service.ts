import { element } from 'protractor';
import { PeriodicElement } from './entities/PeriodicElement';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventEmitter } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private _items: PeriodicElement[] = []

   ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen1', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium1', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithiu1', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Berylliu1', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron1', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon1', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen1', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen1', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine1', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon1', weight: 20.1797, symbol: 'Ne'},
];

 ELEMENT_DATA1: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithiu', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Berylliu', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
  dataChangedEmitter = new EventEmitter<PeriodicElement[]>();



  constructor() { }
  count = 0
  public  getItems(){
    // this.count +=1
    // if(this.count % 2 == 1){
    //   return this.ELEMENT_DATA1
    // }
    return this._items.slice();
  }

  public setItems(elements:PeriodicElement[]){
    this.count +=1
    if(this._items.length == 0){
      this._items = this.ELEMENT_DATA
    }
    if(this.count % 2 == 0){
      this._items = this.ELEMENT_DATA
      }else{
        this._items = this.ELEMENT_DATA1
      }
    this.dataChangedEmitter.emit(this._items)
  }
}
