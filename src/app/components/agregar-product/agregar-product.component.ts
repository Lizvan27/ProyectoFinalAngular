import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-agregar-product',
  templateUrl: './agregar-product.component.html',
  styleUrls: ['./agregar-product.component.css']
})
export class AgregarProductComponent {

 columnas: string[] = ['nombre', 'descripcion', 'precio', 'stock']
 
 datos: Producto [] = [new Producto('leche','a 10% descuento', 6, 30)];

 ProductoSelect: Producto = new Producto('','',0,0);

 @ViewChild(MatTable) tabla1!: MatTable<Producto>;


 agregar(){
  this.datos.push(new Producto(this.ProductoSelect.nombre, this.ProductoSelect.descripcion, this.ProductoSelect.precio, this.ProductoSelect.stock));
  this.tabla1.renderRows();
  this.ProductoSelect = new Producto('','',0,0);

 }
}
export class Producto {
  constructor(public nombre:string,
    public descripcion:string,
    public precio: number,
    public stock:number){

  }
}
