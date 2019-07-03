import { ViewContainerRef, Input, ElementRef, Renderer, Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import * as moment from 'moment';
@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {
  emailId: string;
  model: any = {};
  myDate: Date;
  myDate1: Date;
  session: any;

  constructor(
    public httpClient: HttpClient,
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.utcTime();
  }
  utcTime(): void {
    setInterval(() => {         //replaced function() by ()=>
      this.myDate = new Date();
      this.myDate1 = new Date();
      this.myDate1.setHours(this.myDate.getHours() + 8);
    }, 1000);
  }



  // //Create New Test Case
  // onSubmit(f: NgForm) {
  //   //Create test from Services
  //   console.log('Working');
  //   //this.emailId = 'debasish.mori@gmail.com';
  //   this.dataService.setEmail(this.model.emailId)
  //     .subscribe(
  //       res => {
  //         f.reset();
  //       },
  //       error => {
  //         console.log("Timeout ......");
  //       });
  // }

}
