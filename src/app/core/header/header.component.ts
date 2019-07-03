import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   // this.onShow();
  }
  onShow(){
    var element = document.getElementById("navbarSupportedContent");
    element.classList.toggle("showMenu");
  }
}
