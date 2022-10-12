import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CenterComponent } from './center/center.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { DatabindingComponent } from './databinding/databinding.component';

@NgModule({
  // declarations : [components, directives , pipes]
  declarations: [
    AppComponent,
    HeaderComponent,
    CenterComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    DemoComponent,
    Demo2Component,
    DatabindingComponent,
  ],
  // imports : [modules]
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  // providers : [Injectables/services]
  providers: [],
  // components to load
  bootstrap: [AppComponent],
})
export class AppModule {}
