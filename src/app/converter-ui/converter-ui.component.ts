import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {ConversionEngineService} from '../shared/conversion-engine.service'
import { ConverterCategoryDef } from '../shared/converter-category-def.class';

@Component({
  selector: 'app-converter-ui',
  templateUrl: './converter-ui.component.html',
  styleUrl: './converter-ui.component.css'
})
export class ConverterUiComponent implements OnInit{
  parentForm!: FormGroup;
  constructor(private fb: FormBuilder, private connversionEngineService: ConversionEngineService){
  }
  ngOnInit(): void {
    let converterCategoryDefs = this.connversionEngineService.getConverterCategoryDefs();
      this.parentForm = this.fb.group({
        categoryValue: new FormControl(converterCategoryDefs[0].name),
        converterValue: new FormControl(converterCategoryDefs[0].conversions[0].name),
        conversionInput: new FormControl(""),
        conversionOutput: new FormControl(""),
      });
  }

  onSubmit(){
    console.log(`Submit: ${JSON.stringify(this.parentForm.value)}`)
  }
}
