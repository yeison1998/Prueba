import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateEditSuperHeroComponent } from './modal-create-edit-super-hero.component';

describe('ModalCreateEditSuperHeroComponent', () => {
  let component: ModalCreateEditSuperHeroComponent;
  let fixture: ComponentFixture<ModalCreateEditSuperHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCreateEditSuperHeroComponent]
    });
    fixture = TestBed.createComponent(ModalCreateEditSuperHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
