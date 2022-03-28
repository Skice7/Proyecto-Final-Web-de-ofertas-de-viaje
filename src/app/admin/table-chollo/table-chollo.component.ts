import { Component,AfterViewInit, OnInit, ViewChild } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-table-chollo',
  templateUrl: './table-chollo.component.html',
  styleUrls: ['./table-chollo.component.css']
})
export class TableCholloComponent implements  OnInit, AfterViewInit {

  @ViewChild('dTable',{static : false}) dataTable: any;

  ngAfterViewInit(): void {


    $(this.dataTable.nativeElement).DataTable();
  }

  ngOnInit(): void {


  }
}


