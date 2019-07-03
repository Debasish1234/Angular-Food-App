import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.sass']
})
export class EmailComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public httpClient: HttpClient,
    public dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  model: any = {};
  dateTime: any;
  price: string;
  mealType: string;
  name: string;
  ngOnInit() {
    console.log(this.data);
  }
  onSubmit(f: NgForm) {
    console.log('Enter');
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.dateTime = date+' '+time;
    this.dataService.setEmail(this.model.email, this.dateTime, this.data.price,  this.data.mealType, this.data.name)
      .subscribe(
        (res: any) => {
          this.dialog.closeAll();
        },
        error => {
          console.log("Timeout ......");
        });
  }
}
