

import { Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import { EmpleadoService } from "src/services/empleado.service";

@Component({
   selector:"agregar-empleado",
   templateUrl:"agregarEmpleado.component.html",
   styleUrls:["agregarEmpleado.component.css"]
})


export class AgregarEmpleado implements OnInit{
    
    nombre:string='';
    apellido:string='';
    email:string='';
    avatar:string='';
    indice:number=0;
    tituloBoton:string='Agregar';

    constructor(private serviceEmpleado:EmpleadoService, private router: Router,
                private activarRoute: ActivatedRoute,
                private toastr: ToastrService){

    }
    
    ngOnInit(): void {
      this.indice = this.activarRoute.snapshot.params['id'];
      console.log("EL ID SELECCIONADO PARA EDITAR ES: "+this.indice)
      if (this.indice!==undefined){
        this.editarEmpleado()
        this.tituloBoton="Modificar"
      }
    }

    editarEmpleado(){
      this.serviceEmpleado.buscarUnSoloEmpleado(this.indice).subscribe(data => 
         {
            console.log("Mi componente agregar recibe este Empleado conseguido:")
            console.log(data)
            this.nombre=data.nombre;
            this.apellido=data.apellido;
            this.email=data.email;
            this.avatar=data.avatar;      
         }
      )
    }

    onSubmit(){

      let objeto= {
         email:this.email,
         nombre:this.nombre,
         apellido:this.apellido,   
         avatar:this.avatar
      }

      if ( this.tituloBoton==="Agregar"){

         this.serviceEmpleado.addEmpleados(objeto).subscribe(data =>{  
            this.toastr.success('El empleado fue registrado con exito!!!','Empleado registrado',{
            positionClass:'toast-bottom-right' 
            })

           console.log("Mi componente agregar empleado recibe este Empleado agregado:")
           console.log(data)
           this.router.navigate(['/rutaListadoEmpleado'])
         })
      }else{

         this.serviceEmpleado.updateEmpleado(this.indice,objeto).subscribe(data =>{
            this.toastr.info('El empleado fue actualizado con exito!!!','Empleado actualizado',{
               positionClass:'toast-bottom-right' 
            })
            console.log("Mi componente agregar empleado recibe este Empleado actualizado:")
            console.log(data)
            this.router.navigate(['/rutaListadoEmpleado'])
         }) 

      } 

    
       
    }


}

