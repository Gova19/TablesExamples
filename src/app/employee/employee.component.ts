import { Component ,OnInit,ViewChild} from '@angular/core';
import {MatTableDataSource,Sort} from '@angular/material';
import {MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

export interface Employee {
  id: number;
  age: number;
  name: string;
  email: string;
  salary: number;
}
const dataSource: Employee[] = [
  {name: 'Name_1', id: 159, age: 6, salary: 24, email: '123@a.com'},
  {name: 'Name_2', id: 237, age: 9, salary: 37, email: '134@a.com'},
  {name: 'Name_3', id: 262, age: 16, salary: 24, email: '124@a.com'},
  {name: 'Name_4', id: 305, age: 4, salary: 67, email: '126@a.com'},
  {name: 'Name_5', id: 356, age: 16, salary: 49, email: '128@a.com'},
];
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static:true}) sort: MatSort;
  displayedColumns = ['name', 'id', 'age', 'email','salary'];

  dataSource = new MatTableDataSource(dataSource);
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
