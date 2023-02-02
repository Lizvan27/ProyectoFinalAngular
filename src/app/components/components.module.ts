import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ProductosDetallesComponent } from './productos-detalles/productos-detalles.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { CantiProductComponent } from './canti-product/canti-product.component';
import { CarruselProductComponent } from './carrusel-product/carrusel-product.component';
import { AgregarProductComponent } from './agregar-product/agregar-product.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ProductosComponent,
    ProductosDetallesComponent,
    CantiProductComponent,
    CarruselProductComponent,
    AgregarProductComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,

    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
    
  ],
  exports: [
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ProductosComponent,
    ProductosDetallesComponent,
    CantiProductComponent,
    CarruselProductComponent,
    AgregarProductComponent,
    LogoutComponent
  ]
})
export class ComponentsModule { }
