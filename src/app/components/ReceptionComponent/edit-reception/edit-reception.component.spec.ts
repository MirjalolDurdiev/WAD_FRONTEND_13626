import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReceptionComponent } from './edit-reception.component';

describe('EditReceptionComponent', () => {
  let component: EditReceptionComponent;
  let fixture: ComponentFixture<EditReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditReceptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
