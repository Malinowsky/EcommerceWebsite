import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // AG Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { CRUDService } from '../services/crud.service';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    {
      field: 'p_name',
      headerName: 'Name',
      sortable: true,
      headerClass: 'header-cell',
    },
    {
      field: 'p_description',
      headerName: 'Desc',
      sortable: true,
      headerClass: 'header-cell',
    },
    {
      field: 'p_price',
      headerName: 'Price',
      sortable: true,
      headerClass: 'header-cell',
    },
    {
      field: '',
      headerName: 'Actions',
      headerClass: 'header-cell',
      width: 250,
      cellRenderer: this.actionRender,
    },
  ];
  rowData: any = [];
  gridOptions = {
    rowHeight: 50,
  };

  productList: any = [];
  productListSubscribe: any;
  constructor(private crudService: CRUDService) {}

  ngOnInit(): void {
    this.getProductList();
  }
  getProductList() {
    this.productListSubscribe = this.crudService
      .loadProducts()
      .subscribe((data) => {
        this.productList = data;
        this.rowData = data;
        console.log('data', data);
      });
  }

  actionRender(params: any) {
    let div = document.createElement('div');
    let htmlCode =
      '<button type ="button" class="btn btn-success">View</button>\n' +
      '<button type ="button" class="btn btn-danger">Delete</button>\n' +
      '<button type ="button" class="btn btn-warning">Edit</button>';
    div.innerHTML = htmlCode;
    return div;
  }
}
