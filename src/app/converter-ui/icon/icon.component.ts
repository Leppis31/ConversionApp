import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionEngineService } from '../../shared/conversion-engine.service';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent implements OnInit{
  @Input() parentForm!: FormGroup;
  icon = "monitor_weight";
  constructor(private conversionEngineService: ConversionEngineService){}
  
  ngOnInit(): void {
      this.parentForm.get('categoryValue')?.valueChanges.subscribe(()=>{
        let catName = this.parentForm.get('categoryValue')?.value;
        this.icon = this.conversionEngineService.getIcon(catName);
      });
  }
}
