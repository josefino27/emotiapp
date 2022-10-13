import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { exerciceInfo, RootObject,RootObject2, Clase } from '../interface/index';

const token = environment.token;
const apiUrl = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  
  constructor(public http: HttpClient) { }

  obtenerDatos() {
  
    return this.http.get<exerciceInfo>(`${apiUrl}/exerciseinfo/?limit=100&`,{
      params: {
        token: token
      }
    });
      }
    
  obtenerDatos2(){
  
    return this.http.get<RootObject2>('http://127.0.0.1:8000/api/clases');

      }
    

  

  obtenerDatosByCategory(emociones: number) {
  
    return this.http.get<RootObject>(`${apiUrl}/exercise/`,{
      params: {
        token: token, category: emociones
      }
    });
  }

  // necesitamos enviar usuario y contraseña de workoutger.de para acceder a este servicio
  // obtenerRutina() {
  //   return this.http.get<ObtenerRutina>("https://wger.de/api/v2/day/?format=json", {
  //     params: {
  
  //     }
  //   });
 //}
}
