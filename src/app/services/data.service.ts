import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ProductoInterface } from '../interfaces/producto-interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private fireStore: AngularFirestore){}

  getProduct(){
    
  }
}
