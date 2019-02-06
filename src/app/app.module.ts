import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import {HttpClientModule} from '@angular/common/http';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { UserDetailsComponent } from './user-details/user-details.component'
import{RoutingModule} from './routing/routing.module';
import { AboutComponent } from './about/about.component'
import{RouterModule,Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component'


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserFormComponent,
    HighlightDirective,
    DateCountPipe,
    UserDetailsComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
