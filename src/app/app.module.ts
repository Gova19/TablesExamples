import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule , MatPaginatorModule, MatInputModule,MatSortModule} from '@angular/material'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,MatPaginatorModule,MatInputModule,MatSortModule
  ],
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
