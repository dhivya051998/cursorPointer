import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDivComponent } from './create-div/create-div.component';
import { InputService } from './input.service';
import { DialogComponent } from './dialog/dialog.component';
import { OutputComponent } from './output/output.component';
import { FormsModule } from '@angular/forms';
import { DataPipe } from './data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateDivComponent,
    DialogComponent,
    OutputComponent,
    DataPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
