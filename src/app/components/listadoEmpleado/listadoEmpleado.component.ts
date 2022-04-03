import { Component,  OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { Empleado } from "src/app/models/empleado";
import { EmpleadoService } from "src/services/empleado.service";



@Component({
  selector:"listado-empleados",
  templateUrl:"listadoEmpleado.component.html",
  styleUrls:["listadoEmpleado.component.css"]
})

export class ListadoEmpleado implements OnInit{
    
    empleados:Empleado[]=[];
    mensaje:boolean=false;
    usuario: string='';

    constructor(private empleadoService: EmpleadoService,
                private toastr: ToastrService ){ } 
   
   
    ngOnInit(): void {      
      this.getEmpleados()
      console.log("Mi lista de Empleados es: ")

    }

    getEmpleados(){
        //this.empleados=[];
        this.empleadoService.getEmpleados().subscribe(datos =>{
          console.log("Estoy en mi componente get - me han devuelto esto: ")   
          console.log(datos)
          //this.usuario=datos.usuario;  //Accediendo a un dato de mi json
          //console.log("usuario:"+ datos.usuario)

          //console.log("OJO SOLO EL ARREGLO: "+datos.data[0].nombre) //Accediendo al arreglo de mi json

          this.empleados=datos;

        // datos.map((item:any) => {  
                              /*  let e = new Empleado(
                                  item.id,
                                  item.email,
                                  item.nombre,
                                  item.apellido,
                                  item.avatar)*/

        //this.empleados.push(item);
         
        // })

        })

    }

    addEmpleado(e: Empleado){

      this.empleadoService.addEmpleados(e).subscribe(data =>
        {
          this.empleados.push(data)  
          console.log("Estoy en mi componente add - me han devuelto esto: ")          
          console.log(data)
          this.getEmpleados()
        }
      )
    }


    deleteEmpleado(id:number | undefined){

      this.empleadoService.deleteEmpleado(id).subscribe(data=>
        {
          this.toastr.error('El empleado fue eliminado con exito!!!','Empleado eliminado',{
            positionClass:'toast-bottom-right' 
          })

          console.log("Estoy en mi componente listado empleado - me han devuelto esto: ")  
          console.log(data)
          this.getEmpleados()
        }
     )
    }




} 