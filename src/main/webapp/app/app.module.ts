import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { UtilidaeappSharedModule } from 'app/shared/shared.module';
import { UtilidaeappCoreModule } from 'app/core/core.module';
import { UtilidaeappAppRoutingModule } from './app-routing.module';
import { UtilidaeappHomeModule } from './home/home.module';
import { UtilidaeappEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    UtilidaeappSharedModule,
    UtilidaeappCoreModule,
    UtilidaeappHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    UtilidaeappEntityModule,
    UtilidaeappAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class UtilidaeappAppModule {}
