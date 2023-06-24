import { Component } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';

import { PropertyService } from '../../../../services/property.service';
import { Property } from'../../../../../app/models/property';
import {TypeData} from '../../../../models/typeEnum';
import {Cities} from '../../../../models/cties';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
  providers: [PropertyService]
})
export class SearchFilterComponent {
  properties:Property[]=[];
  cities=Cities;
  type=TypeData;
  Category:string = "";
  City:string = "";
  ngOnInit() {


  }
  constructor(private myService:PropertyService,private router: Router) {
    this.properties = myService.getAll();
    console.log(this.properties);

  }

  modelChange(event: any) {
    this.Category=event.target.value;
   }

   modelChange2(event: any) {
   this.City=event.target.value;
   }
   clickEvent(event:any){
     console.log(this.City)
    console.log(this.Category)
    if(this.City != '' && this.Category !=''){

      this.router.navigate(['/property'], { queryParams: { city: this.City , category: this.Category} });
    }
  }




}


