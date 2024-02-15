import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SuperHeroService } from '../../services/super-hero.service';
import { SuperHero } from '../../models/super-hero';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateEditSuperHeroComponent } from '../modal-create-edit-super-hero/modal-create-edit-super-hero.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.css']
})
export class SuperHeroComponent implements OnInit {

  listHeros: SuperHero[] = [];
  listFilterHeros: SuperHero[] = [];
  p: number = 1;
  showFilter: boolean = true;
  constructor(private spinner: NgxSpinnerService, private _superHeroService: SuperHeroService, public dialog: MatDialog, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getIdParam();
  }

  getIdParam(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if (!id) {
      this.getHeros();
    } else {
      this.getHeroById(id);
    }
  }

  getHeroById(heroId: string): void {
    this._superHeroService.getHeroyId(heroId).subscribe({
      next: (res) => {
        this.listHeros.push(res);
        this.showFilter = false;
      }
    });
  }

  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.listHeros = this.listFilterHeros.filter(hero => hero.name.toLowerCase().includes(value.toLowerCase()));
  }

  openDialog(hero: SuperHero | null) {
    const dialogRef = this.dialog.open(ModalCreateEditSuperHeroComponent, {
      data: hero
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getHeros();
      }
    });
  }

  getHeros(): void {
    this._superHeroService.getHeros().subscribe({
      next: (res) => {
        this.listHeros = res;
        this.listFilterHeros = res;
      }
    });
  }

  deleteHero(hero: SuperHero): void {
    Swal.fire({
      title: `¿ Estas seguro de eliminar al héroe ${hero.name} ?`,
      text: "No podrás revertir el cambios",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this._superHeroService.deleteHero(hero.id).subscribe({
          next: () => {
            this.getHeros();
          }
        });
        Swal.fire({
          title: "Eliminado!",
          text: "El heroe se ha eliminado con exito !.",
          icon: "success"
        });
      }
    });
  }

  test() {
    this.spinner.show();
  }
}
