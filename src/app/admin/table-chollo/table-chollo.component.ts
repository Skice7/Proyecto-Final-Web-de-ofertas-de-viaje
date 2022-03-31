import { Component,AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRestService } from 'src/app/Services/api-rest.service';
import { Viaje } from 'src/app/Services/models/viaje.model';

declare const $: any;

@Component({
  selector: 'app-table-chollo',
  templateUrl: './table-chollo.component.html',
  styleUrls: ['./table-chollo.component.css']
})
export class TableCholloComponent implements  OnInit {

  id: any;
  viaje:Viaje = new Viaje();
  chollo: any = null;
  peticionChollo = false;

  constructor(private api:ApiRestService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
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

    eliminar(id: string):void{
      console.log(id);
      this.api.deleteChollo(id).subscribe(
        res=> this.api.getListaChollos().subscribe(
          Response=>this.chollo=Response
          )
      );
    }
  }



