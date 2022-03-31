import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRestService } from 'src/app/Services/api-rest.service';
import { Viaje } from 'src/app/Services/models/viaje.model';

@Component({
  selector: 'app-edit-chollo',
  templateUrl: './edit-chollo.component.html',
  styleUrls: ['./edit-chollo.component.css']
})
export class EditCholloComponent implements OnInit {

  id: any;
  viaje:Viaje = new Viaje();
  chollo: any = null;
  peticionChollo = false;

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
      console.log(this.viaje);
      this.api.editChollo(this.id, this.viaje).subscribe(
        res=> this.router.navigate(['admin/table-chollo/'])
      );
    }


}
