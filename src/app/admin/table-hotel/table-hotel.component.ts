
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRestService } from 'src/app/Services/api-rest.service';
import { Hotel } from 'src/app/Services/models/hotel.model';

declare const $: any;

@Component({
  selector: 'app-table',
  templateUrl: './table-hotel.component.html',
  styleUrls: ['./table-hotel.component.css']
})
export class TableHotelComponent implements OnInit {

  id: any;
  hotel:Hotel = new Hotel();
  chollo: any = null;
  peticionHotel = false;

  constructor(private api:ApiRestService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getHoteles();
  }

  getHoteles()
  {
    this.api.getListaHoteles().subscribe(
      data => {
        this.peticionHotel= true;
        this.chollo = data;
      }
    )
    }

    eliminar(id: string):void{
      console.log(id);
      this.api.deleteHotel(id).subscribe(
        res=> this.api.getListaHoteles().subscribe(
          Response=>this.chollo=Response
          )
      );
    }
  }




