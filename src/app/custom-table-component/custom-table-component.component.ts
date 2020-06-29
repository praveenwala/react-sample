import { DataServiceService } from './../data-service.service';
import { PeriodicElement } from './../entities/PeriodicElement';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, AbstractControl} from '@angular/forms'





@Component({
  selector: 'app-custom-table-component',
  templateUrl: './custom-table-component.component.html',
  styleUrls: ['./custom-table-component.component.css']
})
export class CustomTableComponentComponent implements OnInit {

  @Input() tableMainData: PeriodicElement[];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(this.tableMainData);
  readonly formControl: AbstractControl;

  constructor(formBuilder: FormBuilder,private dataserveice: DataServiceService) {
    

    this.formControl = formBuilder.group({
      name: '',
      position: '',
      symbol: '',
    })
    
  }

  ngOnInit(): void {
    
    this.dataSource.filterPredicate = ((data, filter) => {
      const a = !filter.position || data.position === filter.position;
      const b = !filter.name || data.name.toLowerCase().includes(filter.name);
      const c = !filter.symbol || data.symbol === filter.symbol;
      return a && b && c;
    }) as (PeriodicElement, string) => boolean;

    this.formControl.valueChanges.subscribe(value => {
      console.log("Value--"+value)
      const filter = {...value, name: value.name.trim().toLowerCase()} as string;
      console.log("Filter--"+filter);
      this.dataSource.filter = filter;
    });

    this.dataserveice.dataChangedEmitter.subscribe((data:PeriodicElement[]) => {
      this.dataSource = new MatTableDataSource(data);
    })
  }



}
