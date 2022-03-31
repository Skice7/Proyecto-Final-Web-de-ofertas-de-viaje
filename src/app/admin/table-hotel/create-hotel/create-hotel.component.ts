import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { ApiRestService } from 'src/app/Services/api-rest.service';
import { Hotel } from 'src/app/Services/models/hotel.model';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {

  hotel:Hotel = new Hotel();

  constructor(private ApiRestService:ApiRestService,private router:Router,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  create():void{
    console.log(this.hotel);
    this.ApiRestService.addHotel(this.hotel).subscribe(
      res=> this.router.navigate(['admin/table-hotel/'])
    );
  }


}
