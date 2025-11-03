import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InnerPagesRoutingModule } from './inner-pages-routing.module';

// Import your contact component
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    InnerPagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ContactComponent,
    HttpClientModule
  ]
})
export class InnerPagesModule { }
