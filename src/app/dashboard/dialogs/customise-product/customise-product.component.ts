import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { product } from '../../../interfaces/data';
import { EmailComponent } from '../email/email.component'
@Component({
  selector: 'app-customise-product',
  templateUrl: './customise-product.component.html',
  styleUrls: ['./customise-product.component.scss']
})
export class CustomiseProductComponent implements OnInit {
  id: number;
  itemName: any;
  itemPrice: string;
  image: string;
  mealType: string;
  ingredientsOil: any;
  ingredientsRice: any;
  ingredientsChilly: any;
  description: string;
  Utensils: any;
  constructor(
    public httpClient: HttpClient,
    public dataService: DataService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  product = new product();
  ngOnInit() {
    this.getItemRecipe(this.id, this.data.mealType)
  }
  //get Break fast Item deatils
  getItemRecipe(id, mealType): void {
    this.dataService.getItemRecipe(this.data.id, this.data.mealType).subscribe((res: any) => {
      console.log(res, 'RES');
      this.itemName = res.item.name;
      this.mealType = res.item.mealType;
      this.itemPrice = res.item.Price;
      this.image = res.item.imageName;
      this.description = res.item.Description;
      this.Utensils = res.Utensils;
      for (var i = 0; res.ingredients.length > i; i++) {
        this.ingredientsOil = res.ingredients[i].Oil;
        this.ingredientsRice = res.ingredients[i].Rice;
        this.ingredientsChilly = res.ingredients[i].Chilly;
      }
    })
  }


  //Add to cart
  addCart(): void{
    const dialogRef = this.dialog.open(EmailComponent, {
      width: window.innerWidth+'px',
      disableClose: true,
      data: {name:  this.itemName, price: this.itemPrice, mealType: this.mealType}
    });
   // dialogRef.close();
  }
}
