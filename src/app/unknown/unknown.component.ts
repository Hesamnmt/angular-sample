import { UsersComponent } from './../users/users.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UnknownService } from '../unknown.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { TableDialogComponent } from '../table-dialog/table-dialog.component';


@Component({
  selector: 'app-unknown',
  templateUrl: './unknown.component.html',
  styleUrls: ['./unknown.component.css']
})
export class UnknownComponent implements OnInit {
  

  constructor(private unknownService : UnknownService , public dialog: MatDialog) { }
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'name', 'year', 'color', 'pantone_value'];
  unknownId !: number;
  data: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;



  ngOnInit(): void {
    this.unknownService.getUnknown().subscribe(response => {
      console.log(response);
      this.data = response;
      this.dataSource.data = [response.data];
      this.dataSource.paginator = this.paginator;
    });
  }
  onPageChange(event: any): void {
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(TableDialogComponent);
  //   // this.unknownService.getUnknown().subscribe(response => {
  //   //   console.log(response);
  //   //   this.data = response;
  //   //   this.dataSource.data = [response.data];
  //   //   this.dataSource.paginator = this.paginator;
  //   // });
  //     // dialogRef.afterClosed().subscribe(result => {
  //     //   this.data = result;
  //     //   console.log(this.data)
  //     // this.data.id = 
  //     // console.log(`Dialog result: ${result}`);
  //   // });

  //   const dialogConfig = new MatDialogConfig();

  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;

  //   this.dialog.open(TableDialogComponent, dialogConfig);
  // }
  openDialog() {

      const dialogConfig = new MatDialogConfig();


  
    
    const dialogRef = this.dialog.open(TableDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data));



      }
}
