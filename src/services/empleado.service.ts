import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Empleado } from "src/app/models/empleado";

@Injectable({
    providedIn: "root"
  })

export class EmpleadoService{

   constructor(private http: HttpClient){

   } 

    getEmpleados():Observable<Empleado[]>{
       // return this.http.get('https://reqres.in/api/users')     //ACA ESTOY ACCEDIENDO DIRECTAMENTE A LA API
       return this.http.get<Empleado[]>('http://localhost:3001/users')
    }

    addEmpleados(e:Empleado):Observable<Empleado>{

        const headers = {'Content-Type': 'application/json'}
        
        console.log("Estoy en mi servicio addEmpleados(post): ")
        console.log("Imprimo empleado como objeto: "+e)
        const body = JSON.stringify(e)  
        console.log("Imprimo empleado como Json: "+ body )        

        return this.http.post<Empleado>('http://localhost:3001/users',body,{'headers':headers})

    }

    updateEmpleado(id:number,e:Empleado):Observable<Empleado>{

      return this.http.put<Empleado>(`http://localhost:3001/users/${id}`,e)
    }

    
    deleteEmpleado(id:number | undefined):Observable<Empleado>{

      return this.http.delete<Empleado>(`http://localhost:3001/users/${id}`)
    }

    buscarUnSoloEmpleado(id:number):Observable<Empleado>{
      return this.http.get<Empleado>(`http://localhost:3001/users/${id}`)
    }

}