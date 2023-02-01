import { AgregarProductComponent } from './components/agregar-product/agregar-product.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosDetallesComponent } from './components/productos-detalles/productos-detalles.component';

const routes: Routes = [
  {path: '', component:HomeComponent, canActivate:[LoginComponent]},
  {path: 'productos', component:ProductosComponent,
    /*children: [
      {path:'detalleProduct', component:ProductosDetallesComponent}
    ]*/},
  {path: 'detalleProduct', component:ProductosDetallesComponent},
  {path: 'registro', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'nuevoProducto', component:AgregarProductComponent},
  {path:'', pathMatch:'full', redirectTo:'/login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
