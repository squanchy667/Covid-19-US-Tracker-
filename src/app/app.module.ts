import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatCardModule } from '@angular/material/card';  
import { MatSelectModule } from '@angular/material/select';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { LayoutModule } from '@angular/cdk/layout';
import { UsMapModule } from 'angular-us-map';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'angular-universal-demo'}),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: MenuComponent, pathMatch: 'full'}]),
    HttpClientModule,
    MatCardModule,  
    MatSelectModule,
    UsMapModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
