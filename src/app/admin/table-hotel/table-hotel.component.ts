
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-table',
  templateUrl: './table-hotel.component.html',
  styleUrls: ['./table-hotel.component.css']
})
export class TableHotelComponent implements OnInit, AfterViewInit {

@ViewChild('dTable',{static : false}) dataTable: any;

  ngAfterViewInit(): void {


    $(this.dataTable.nativeElement).DataTable();
  }

  ngOnInit(): void {


  }
}



