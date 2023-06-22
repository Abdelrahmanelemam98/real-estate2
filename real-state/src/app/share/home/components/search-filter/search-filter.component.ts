import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';

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
   
// const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/countries/EG/places?limit=100&offset=0";
// const options = {
//       headers: {
//         "X-RapidAPI-Key": "YOUR_API_KEY"
//       }
//     };
// fetch(url, options)
// .then(response => response.json())
// .then(data => {
//   // Process the data here
//   console.log(data);
// })
// .catch(error => console.error(error));


  }
  constructor(private myService:PropertyService) {
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
   }

  
  

}


