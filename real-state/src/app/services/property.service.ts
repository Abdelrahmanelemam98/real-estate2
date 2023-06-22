import { Injectable } from '@angular/core';
import {Property} from './../models/property'
import { TypeEnum } from '../models/typeEnum';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {


  constructor() {}

  getAll() : Property[]{
    const r =[
      new Property(1,'Home',TypeEnum.Bed,'Big Home',100,['photo'],'Domyat','ezba','fnar',true,12,'Mohamed Hassan','image'),
      new Property(1,'Home',TypeEnum.Bed,'Big Home',100,['photo'],'Domyat','ezba','fnar',true,12,'Mohamed Hassan','image'),
      new Property(1,'Home',TypeEnum.Bed,'Big Home',100,['photo'],'Domyat','ezba','fnar',true,12,'Mohamed Hassan','image'),
      new Property(1,'Home',TypeEnum.Bed,'Big Home',100,['photo'],'Domyat','ezba','fnar',true,12,'Mohamed Hassan','image'),
      new Property(1,'Home',TypeEnum.Bed,'Big Home',100,['photo'],'Domyat','ezba','fnar',true,12,'Mohamed Hassan','image'),
      new Property(1,'Home',TypeEnum.Bed,'Big Home',100,['photo'],'Domyat','ezba','fnar',true,12,'Mohamed Hassan','image'),
      new Property(1,'Home',TypeEnum.Bed,'Big Home',100,['photo'],'Domyat','ezba','fnar',true,12,'Mohamed Hassan','image'),
      new Property(1,'Home',TypeEnum.Bed,'Big Home',100,['photo'],'Domyat','ezba','fnar',true,12,'Mohamed Hassan','image'),
      new Property(1,'Home',TypeEnum.Bed,'Big Home',100,['photo'],'Domyat','ezba','fnar',true,12,'Mohamed Hassan','image'),
      new Property(1,'Home',TypeEnum.Bed,'Big Home',100,['photo'],'Domyat','ezba','fnar',true,12,'Mohamed Hassan','image'),
      new Property(1,'Home',TypeEnum.Bed,'Big Home',100,['photo'],'Domyat','ezba','fnar',true,12,'Mohamed Hassan','image'),
      new Property(1,'Home',TypeEnum.Bed,'Big Home',100,['photo'],'Domyat','ezba','fnar',true,12,'Mohamed Hassan','image'),
      new Property(1,'Home',TypeEnum.Bed,'Big Home',100,['photo'],'Domyat','ezba','fnar',true,12,'Mohamed Hassan','image'),
      new Property(1,'Home',TypeEnum.Bed,'Big Home',100,['photo'],'Domyat','ezba','fnar',true,12,'Mohamed Hassan','image'),
      new Property(1,'Home',TypeEnum.Bed,'Big Home',100,['photo'],'Domyat','ezba','fnar',true,12,'Mohamed Hassan','image')
    ]
    return r
    //return this.http.get<Property[]>(this.baseUrl)
  }
}
