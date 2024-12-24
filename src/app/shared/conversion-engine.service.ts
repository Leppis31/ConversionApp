import { Injectable } from '@angular/core';
import { ConversionDef } from './conversion-def.class';
import { ConverterCategoryDef } from './converter-category-def.class';

@Injectable({
  providedIn: 'root'
})
export class ConversionEngineService {
  weightDefs: ConversionDef[] = [
    new ConversionDef("kgs to libs", 2.20462262, 0, 0, "kg", "libs"),
    new ConversionDef("libs to kgs", 1/2.20462262, 0, 0, "libs", "kg"),
  ];
  temperatureDefs: ConversionDef[] = [
    new ConversionDef("Celsius to Farenheit", 9/5, 0, 32, "Celsius", "Farenheit"),
    new ConversionDef("Farenheit to Celsius", 5/9, -32, 0, "Farenheit", "Celsius"),
  ];
  distanceDef: ConversionDef[] = [
    new ConversionDef("kms to miles", 1/1.609344, 0, 0, "km", "ml"),
    new ConversionDef("miles to kms", 1.609344, 0, 0,"ml", "km"),
    new ConversionDef("meter to feets", 3.2808399, 0, 0, "m", "ft"),
  ];
  currencyDef: ConversionDef[] = [
    new ConversionDef("€ to $", 1.08, 0, 0, "€", "$"),
    new ConversionDef("$ to €", 1/1.08, 0, 0, "$", "€"),
  ];

  converterCategoryDefs: ConverterCategoryDef[] = [
    new ConverterCategoryDef("Weight","monitor_weight",this.weightDefs),
    new ConverterCategoryDef("Tempature","device_thermostat",this.temperatureDefs),
    new ConverterCategoryDef("Distance","social_distance",this.distanceDef),
    new ConverterCategoryDef("Currency","currency_exchange",this.currencyDef),
  ];
  constructor() { }

  getConverterCategoryDefs(){
    return this.converterCategoryDefs;
  }

  findCategoryIndex(name:string){
    for(let i = 0; this.converterCategoryDefs.length; i++){
      if(name == this.converterCategoryDefs[i].name)
        return i;
    }
    console.log("not found");
    return -1;
  }

  getConversionDefs(catName:string):ConversionDef[]{
    let idx = this.findCategoryIndex(catName);
    return this.converterCategoryDefs[idx].conversions;
  }

  getIcon(catName:string):string{
    let idx = this.findCategoryIndex(catName);
    return this.converterCategoryDefs[idx].icon;
  }

  findConversionIndex(catName:string, convName:string):number{
    if(catName=="") return -1;
    let catIdx = this.findCategoryIndex(catName);
    if(catIdx ==-1) return -1;
    let conversionDefs = this.converterCategoryDefs[catIdx].conversions;
    for(let i = 0; i<conversionDefs.length; i++){
      if(convName === conversionDefs[i].name){
        return i;
      }
    }
    console.log("not found");
    return -1;
  }

  getCurrentConverisonDef(catName:string, convName:string):ConversionDef|null{
    let catIdx = this.findCategoryIndex(catName);
    let convIdx = this.findConversionIndex(catName, convName);
    if(catIdx >= 0 && convIdx >= 0){
      return this.converterCategoryDefs[catIdx].conversions[convIdx]
    }
    return null;
  }
  convertValue(catName:string, convName:string, value:number):string{
    let currentConverter = this.getCurrentConverisonDef(catName, convName);
    if(currentConverter != null){
      let outValue= (((value + currentConverter.preOffset) * currentConverter.coeff + currentConverter.postOffset)).toFixed(4);
      return outValue;
    }
    return "";
  }
}
