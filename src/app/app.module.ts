import { BrowserModule } from '@angular/platform-browser';
import { NgModule , Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LivreComponent } from './livre/livre.component';
import { LivresListComponent } from './livres-list/livres-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    LivresListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
