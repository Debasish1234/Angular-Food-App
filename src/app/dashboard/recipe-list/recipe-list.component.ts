import { Component, OnInit } from '@angular/core';
import { CustomiseProductComponent } from '../dialogs/customise-product/customise-product.component'
import { MatDialog } from '@angular/material';
import { DataService } from '../../services/data.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import{ TrimPipe } from '../../pipe/trim-pipe.pipe';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipeBreakFast: any = [];
  recipeLunch: any = [];
  recipeDinner: any = [];
  constructor( 
    public dialog: MatDialog,
    public httpClient: HttpClient,
    public dataService: DataService) { }

  ngOnInit() {
    this.getBreakfast();
    this.getLunch();
    this.getDinner();
   // console.log(this.data);
  }
  customiseProduct(id: number, mealType: string) {
    const dialogRef = this.dialog.open(CustomiseProductComponent, {
      width: window.innerWidth+'px',
      panelClass: 'custom-dialog-container',
      disableClose: true,
      data: {id: id, mealType: mealType}
    });
}
//BreakFast API
getBreakfast() {
  this.dataService.getbreakFast().subscribe(res => {
    this.recipeBreakFast = res;
    //console.log(res);
  })
}

//Lunch API
getLunch() {
  this.dataService.getLunch().subscribe(res => {
    this.recipeLunch = res;
  })
}

//Dinner API
getDinner() {
  this.dataService.getdinner().subscribe(res => {
    this.recipeDinner = res;
  })
}
}
