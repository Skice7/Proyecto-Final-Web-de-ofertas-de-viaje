
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ApiRestService } from 'src/app/Services/api-rest.service';

declare const $: any;

@Component({
  selector: 'app-table',
  templateUrl: './table-hotel.component.html',
  styleUrls: ['./table-hotel.component.css']
})
export class TableHotelComponent implements OnInit, AfterViewInit {

  hotel: any = null;
  peticionHotel = false;

@ViewChild('dTable',{static : false}) dataTable: any;

  ngAfterViewInit(): void {


    $(this.dataTable.nativeElement).DataTable();
  }

  constructor(private api: ApiRestService) { }

  ngOnInit(): void {
    this.getHotel();
  }
  getHotel()
  {
    this.api.getListaHoteles().subscribe(
      data => {
        this.peticionHotel = true;
        this.hotel = data;
      }
    )
    }


  }




