import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'foodApp';
  currentPath: String;
  showMenu: boolean;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    this.router.events.subscribe((val): any => {
      this.currentPath = this.location.path();
       if (this.currentPath === '/email-list') {
          this.showMenu = true;
       }else{
        this.showMenu = false;
       }
    });



    window.onscroll = _ => {
      console.log('DDDDD');
    };
  }
}
