import { Component, OnInit } from '@angular/core';
import { TarjetaService } from '../../services/tarjeta.service';
import { Usuario } from '../../models/usuario';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  public usuariosLista;
  public config: any;
  private total: number = 0;

  constructor( private tarjetaService: TarjetaService ) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.total
    };
   }

  ngOnInit(): void {
    this.usuarios();
  }

  private usuarios() {
    this.tarjetaService.getUsuarios().subscribe(response => {
      this.usuariosLista = response;
    });
  }

  public pageChanged(event) {
    this.config.currentPage = event;
  }

 public onEdit(usuario: Usuario) {
  this.tarjetaService.selectedUser = Object.assign({}, usuario);
 }

}
