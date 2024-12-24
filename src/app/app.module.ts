import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';

// material modules
import {MatToolbarModule} from '@angular/material/toolbar';
import { ConverterUiComponent } from './converter-ui/converter-ui.component';
import { CategoryComponent } from './converter-ui/category/category.component';
import { ConverterComponent } from './converter-ui/converter/converter.component';
import { ConversionInputComponent } from './converter-ui/converter/conversion-input/conversion-input.component';
import { ConversionOutputComponent } from './converter-ui/converter/conversion-output/conversion-output.component';
import {MatGridListModule} from '@angular/material/grid-list';
//import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from './converter-ui/icon/icon.component';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ConverterUiComponent,
    CategoryComponent,
    ConverterComponent,
    ConversionInputComponent,
    ConversionOutputComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule, 
    MatInputModule, 
    //FormsModule
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
