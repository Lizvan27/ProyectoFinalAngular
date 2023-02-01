import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CantiProductComponent } from '../canti-product/canti-product.component';

export interface DatoCanti {
  cantidad: number;
}

@Component({
  selector: 'app-productos-detalles',
  templateUrl: './productos-detalles.component.html',
  styleUrls: ['./productos-detalles.component.css']
})
export class ProductosDetallesComponent {
  cantidad: number = 0;

  constructor(public dialog: MatDialog){}


  ver():void{
    let dialogRef = this.dialog.open(CantiProductComponent, {
      data: {cantidad: this.cantidad}
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log('Ingreso cantidad'),
      this.cantidad = res;
    })
  }
}
