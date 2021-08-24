import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import {HttpClientModule} from '@angular/common/http';
import { CommonComponent } from './common/common.component'
import { CardComponent } from 'src/card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    CommonComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
