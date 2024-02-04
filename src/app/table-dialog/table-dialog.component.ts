import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UnknownService } from '../unknown.service';


@Component({
  selector: 'app-table-dialog',
  templateUrl: './table-dialog.component.html',
  styleUrls: ['./table-dialog.component.css']
})
export class TableDialogComponent implements OnInit {
  data: any;
  constructor(private unknownService : UnknownService) {

}

  ngOnInit(): void {
    this.unknownService.getUnknown().subscribe(response => {
      console.log(response);
      this.data = response;
      });
  }

  close(){
  }

}
