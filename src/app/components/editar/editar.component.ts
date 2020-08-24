import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TarjetaService } from '../../services/tarjeta.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  constructor(public tarjetaService: TarjetaService, public toast: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(productForm: NgForm) {
    let insertBody = {
      nombres: productForm.value.nombres,
      apellidos: productForm.value.apellidos,
      identificacion: productForm.value.identificacion,
      numeroTarjeta: productForm.value.numeroTarjeta,
    };
    this.tarjetaService.updateUser(insertBody).subscribe(res => {
      productForm.reset();
      this.toast.success('Operación exitosa', 'Usuario actualizado correctamente')
    });
  }

}
