import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TarjetaService } from '../../services/tarjeta.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
  styleUrls: ['./crear-registro.component.scss']
})
export class CrearRegistroComponent implements OnInit {

  public formSave: FormGroup;

  constructor(public tarjetaService: TarjetaService, private formBuilder: FormBuilder,
              private toastr: ToastrService) { 
                this.formSave = this.formBuilder.group({
                  nombres: [''],
                  apellidos: [''],
                  identificacion: [''],
                  numeroTarjeta: [''],
                });
              }

  ngOnInit(): void {
  }

  onReset() {
    this.formSave.reset();
  }

  public guardarRegistro() {
    let insertBody = {
      nombres: this.formSave.value.nombres,
      apellidos: this.formSave.value.apellidos,
      identificacion: this.formSave.value.identificacion,
      numeroTarjeta: this.formSave.value.numeroTarjeta,
    }
    this.tarjetaService.postUsuario(insertBody).subscribe(res => {
      this.onReset();
      this.toastr.success('Usuario agregado correctamente', 'Registro exitoso');
    });
  }

}
