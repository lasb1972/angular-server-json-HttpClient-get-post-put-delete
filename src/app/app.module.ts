import { NgModule } from '@angular/core';

//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

//Componentes
import { AppComponent } from './app.component';
import { ListadoEmpleado } from './components/listadoEmpleado/listadoEmpleado.component';
import { NavBarComponent } from './components/navBar/navBar.component';
import { FormsModule } from '@angular/forms';
import { AgregarEmpleado } from './components/agregarEmpleado/agregarEmpleado.component';

//Servicios
import { EmpleadoService } from 'src/services/empleado.service';
import { ToastrModule } from 'ngx-toastr';


const routes: Routes = [
  {path:"rutaListadoEmpleado",component:ListadoEmpleado},
  {path:"rutaAgregarEmpleado",component:AgregarEmpleado},
  {path:"editarEmpleado/:id",component:AgregarEmpleado}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListadoEmpleado,
    AgregarEmpleado
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
