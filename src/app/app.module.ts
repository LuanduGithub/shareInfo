import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardInOutComponent } from './components-input-output/card/card.component';
import { FormInOutComponent } from './components-input-output/form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardSubjectComponent } from './components-subject/card/card.component';
import { FormSubjectComponent } from './components-subject/form/form.component';
import { CardSharedComponent } from './components-shared-service/card/card.component';
import { FormSharedComponent } from './components-shared-service/form/form.component';
import { CardEmitComponent } from './components-emit/card/card.component';
import { FormEmitComponent } from './components-emit/form/form.component';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardInOutComponent,
    FormInOutComponent,
    FormSubjectComponent,
    CardSubjectComponent,
    FormSharedComponent,
    CardSharedComponent,
    FormEmitComponent,
    CardEmitComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
