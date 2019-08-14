import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './company/company.module';
import { HttpClientModule} from '@angular/common/http';
import { ActorModule } from './actor/actor.module';
import { UserModule } from './user/user.module';
import { BoughtModule } from './bought/bought.module';
import { MovieModule } from './movie/movie.module';
import { MovietypeModule } from './movietype/movietype.module';
import { EngagementModule } from './engagement/engagement.module';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { FooterComponent } from './templates/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule,
    HttpClientModule,
    ActorModule,
    UserModule,
    BoughtModule,
    UserModule,
    MovieModule,
    MovietypeModule,
    EngagementModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
