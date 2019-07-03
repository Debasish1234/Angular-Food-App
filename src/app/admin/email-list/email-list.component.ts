import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {
  emialList: any;
  constructor(
    public httpClient: HttpClient,
    public dataService: DataService,
  ) { }

  ngOnInit() {
    this.orderList();
  }
  orderList(){
    this.dataService.getEmail().subscribe(data =>{
      this.emialList = data;
    })
  }
}
