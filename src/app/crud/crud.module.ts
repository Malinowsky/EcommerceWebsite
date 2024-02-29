import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CRUDRoutingModule } from './crud-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { CRUDService } from './services/crud.service';

@NgModule({
  imports: [
    CommonModule,
    CRUDRoutingModule,
    AgGridModule,
    HttpClientModule,
  ],
  providers: [CRUDService]
})
export class CRUDModule { }
