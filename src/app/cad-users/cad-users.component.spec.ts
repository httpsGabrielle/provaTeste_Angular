import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadUsersComponent } from './cad-users.component';

describe('CadUsersComponent', () => {
  let component: CadUsersComponent;
  let fixture: ComponentFixture<CadUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
