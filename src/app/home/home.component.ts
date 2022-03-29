import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../Services/api-rest.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  chollo: any = null;
  peticionChollo = false;


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
