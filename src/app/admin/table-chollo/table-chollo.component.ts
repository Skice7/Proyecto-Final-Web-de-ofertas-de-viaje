import { Component,AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { ApiRestService } from 'src/app/Services/api-rest.service';

declare const $: any;

@Component({
  selector: 'app-table-chollo',
  templateUrl: './table-chollo.component.html',
  styleUrls: ['./table-chollo.component.css']
})
export class TableCholloComponent implements  OnInit, AfterViewInit {

  chollo: any = null;
  peticionChollo = false;

  @ViewChild('dTable',{static : false}) dataTable: any;

  ngAfterViewInit(): void {


    $(this.dataTable.nativeElement).DataTable();
  }

  constructor(private api: ApiRestService) { }

  ngOnInit(): void {
    this.getChollos();
  }

  getChollos()
  {
    this.api.getListaChollos().subscribe(
      data => {
        this.peticionChollo = true;
        this.chollo = data;
      }
    )
    }
  }



