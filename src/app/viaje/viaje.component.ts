import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiRestService } from 'src/app/Services/api-rest.service';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent implements OnInit {

  id: any;
  chollo: any = null;
  peticionChollo = false;

  constructor(private api : ApiRestService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.api.getChollo(this.id).subscribe(
      data => {
        this.chollo = data;
      },
      error => {
        console.log(error);
      }
    );

  }

}
