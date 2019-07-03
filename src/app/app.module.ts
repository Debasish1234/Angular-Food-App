import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SlideShowComponent } from './dashboard/slide-show/slide-show.component';
import { RecipeListComponent } from './dashboard/recipe-list/recipe-list.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { EmailListComponent } from './admin/email-list/email-list.component';
import { MomentModule } from 'ngx-moment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatSelectModule,
  MatRadioModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';
import { from } from 'rxjs';
import { CustomiseProductComponent } from './dashboard/dialogs/customise-product/customise-product.component';
import { EmailComponent } from './dashboard/dialogs/email/email.component';
import { TrimPipe } from './pipe/trim-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SlideShowComponent,
    RecipeListComponent,
    HeaderComponent,
    FooterComponent,
    EmailListComponent,
    CustomiseProductComponent,
    EmailComponent,
    TrimPipe
  ],
  entryComponents: [
    CustomiseProductComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MomentModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
