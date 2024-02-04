import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  FormControl ,ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { TestComponent } from './test/test.component';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UnknownComponent } from './unknown/unknown.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { TableDialogComponent } from './table-dialog/table-dialog.component';










@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    UsersComponent,
    TestComponent,
    UnknownComponent,
    TableDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatDividerModule,
    MatCardModule,
    CommonModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
