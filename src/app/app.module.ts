import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MatIconModule, MatTableModule } from '@angular/material'
import { CdkTableModule } from '@angular/cdk/table'

import { AppComponent } from './app.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    MatIconModule,
    MatTableModule,
    CdkTableModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
