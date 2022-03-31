import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRestService } from 'src/app/Services/api-rest.service';
import { Viaje } from 'src/app/Services/models/viaje.model';

@Component({
  selector: 'app-create-chollo',
  templateUrl: './create-chollo.component.html',
  styleUrls: ['./create-chollo.component.css']
})
export class CreateCholloComponent implements OnInit {

  viaje:Viaje = new Viaje();

  constructor(private ApiRestService:ApiRestService,private router:Router,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  create():void{
    console.log(this.viaje);
    this.ApiRestService.addChollo(this.viaje).subscribe(
      res=> this.router.navigate(['admin/table-chollo/'])
    );
  }

}
