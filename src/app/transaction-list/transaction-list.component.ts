import { Component, OnInit } from '@angular/core';
import { TRANSACTIONS } from '../models/mockup-transactions'

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions = TRANSACTIONS;

  constructor() { }

  ngOnInit() {
  }

}
