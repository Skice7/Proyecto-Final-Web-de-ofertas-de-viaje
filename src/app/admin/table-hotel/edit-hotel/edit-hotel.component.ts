import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRestService } from 'src/app/Services/api-rest.service';
import { Hotel } from 'src/app/Services/models/hotel.model';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css']
})
export class EditHotelComponent implements OnInit {


  id: any;
  hotel:Hotel = new Hotel();
  chollo: any = null;

  constructor(private api:ApiRestService,private router:Router,private route:ActivatedRoute) { }

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

    update(id: string):void{
      console.log(this.id);
      console.log(this.hotel);
      this.api.editChollo(this.id, this.hotel).subscribe(
        res=> this.router.navigate(['admin/table-hotel/'])
      );
    }


}
