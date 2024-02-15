import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SuperHero } from '../../models/super-hero';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuperHeroService } from '../../services/super-hero.service';

@Component({
  selector: 'app-modal-create-edit-super-hero',
  templateUrl: './modal-create-edit-super-hero.component.html',
  styleUrls: ['./modal-create-edit-super-hero.component.css']
})
export class ModalCreateEditSuperHeroComponent implements OnInit {

  formSuperHeroes: FormGroup;
  title: string = 'Crear héroe';
  constructor(@Inject(MAT_DIALOG_DATA) public data: SuperHero, private dialogRef: MatDialogRef<ModalCreateEditSuperHeroComponent>, private fb: FormBuilder,
    private _superHeroService: SuperHeroService) {
    this.setFormSuperHeroes();
  }

  ngOnInit(): void {
    this.setData();
  }

  setFormSuperHeroes(): void {
    this.formSuperHeroes = this.fb.group({
      id: null,
      description: ['', Validators.maxLength(100)],
      age: [null, Validators.compose([Validators.required, Validators.maxLength(3)])],
      name: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      lastName: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      villainOrHero: ['', Validators.compose([Validators.required])],
      img: ''
    });
  }

  save(): void {
    if (this.id?.value) {
      this.update();
    } else {
      this.create();
    }
  }

  create(): void {
    const random = 60 + Math.random() * (100 + 602);
    this.id?.setValue(Math.floor(random).toString());
    this.name?.setValue(this.name.value.toUpperCase());
    this._superHeroService.createHero(this.formSuperHeroes.value).subscribe({
      next: () => {
        this.close(true);
      }
    });
  }

  update(): void {
    this.name?.setValue(this.name.value.toUpperCase());
    this._superHeroService.updateHero(this.id?.value, this.formSuperHeroes.value).subscribe({
      next: () => {
        this.close(true);
      }
    });
  }

  setData(): void {
    if (this.data) {
      this.title = 'Editar';
      this.formSuperHeroes.setValue(this.data);
    }
  }

  close(isModified: boolean): void {
    this.dialogRef.close(isModified);
  }

  get id(): AbstractControl | null { return this.formSuperHeroes.get('id') }
  get age(): AbstractControl | null { return this.formSuperHeroes.get('age') }
  get name(): AbstractControl | null { return this.formSuperHeroes.get('name') }
  get lastName(): AbstractControl | null { return this.formSuperHeroes.get('lastName') }
  get description(): AbstractControl | null { return this.formSuperHeroes.get('description') }
  get villainOrHero(): AbstractControl | null { return this.formSuperHeroes.get('villainOrHero') }
}
