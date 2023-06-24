import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PropertyService } from '../../../../services/property.service';
import { Property } from'../../../../models/property';
import {TypeData} from '../../../../models/typeEnum';
import {Cities} from '../../../../models/cties';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']

})
export class PropertyComponent {
properties:Property[]=[];
filteredData:Property[]=[ new Property(1,'Home','Bed','Big Home',100,1,1,200,['photo'],'Suez','bla','fnar',true,12,'Ethar ','image'),
];
  cities=Cities;
  type=TypeData;
  Category:string = TypeData[0];
  City:string = "";
  price=5000;
  NBed='';
  Nbath='';
  minArea='';
  maxArea='';

  wish: any[] = [];
  compare: any[] = [];

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.City = params['city'];
      this.Category = params['category'];
      console.log(params);
      console.log(this.Category);
      this.filteredData =this.properties.filter(item =>item.City.includes(this.City)&& item.PropertyType.toString()==this.Category.toString());
      console.log(this.properties);
      console.log(this.filteredData);
    });
  }
  constructor(private myService:PropertyService,private route: ActivatedRoute) {
    this.properties = myService.getAll();
    console.log(this.properties);
    // this.myService.getAll().subscribe(data=>{
    //   this.properties=data;
    //   this.filteredData=data;
    // })

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
      this.filteredData =
          this.properties.filter(item => item.City.includes(this.City)&&
                                  item.PropertyType.toString()==this.Category.toString() &&
                                  item.NoOfBathroom<=parseInt(this.Nbath) &&
                                  item.NoOfRooms<=parseInt(this.NBed) &&
                                  item.Area<=parseInt(this.maxArea) && item.Area>=parseInt(this.minArea)  &&
                                  item.PropertyPrice<=this.price);
      console.log(this.filteredData);
      console.log(this.City.toString())
    }
  }
  addToWishList(data: any) {
    console.log(data);
    if ('wish' in localStorage) {
      this.wish = JSON.parse(localStorage.getItem('wish')!);
      this.wish.push(data);
      localStorage.setItem('wish', JSON.stringify(this.wish));
    } else {
      this.wish.push(data);
      localStorage.setItem('wish', JSON.stringify(this.wish));
    }
  }
}
