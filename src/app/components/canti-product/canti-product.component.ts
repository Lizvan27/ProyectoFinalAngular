import { DatoCanti } from '../productos-detalles/productos-detalles.component';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-canti-product',
  templateUrl: './canti-product.component.html',
})
export class CantiProductComponent {

  constructor(
    public dialoRef: MatDialogRef<CantiProductComponent>,
    @Inject(MAT_DIALOG_DATA) public datos: DatoCanti
  ){}

  click():void{
    
  }
}
