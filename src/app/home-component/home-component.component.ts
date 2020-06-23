import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { PeriodicElement } from '../custom-table-component/custom-table-component.component';



const ELEMENT_DATA: PeriodicElement[] = [
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

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  tableMainData = ELEMENT_DATA;
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
  }

}
