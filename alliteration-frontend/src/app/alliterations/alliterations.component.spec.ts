import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlliterationsComponent } from './alliterations.component';

describe('AlliterationsComponent', () => {
  let component: AlliterationsComponent;
  let fixture: ComponentFixture<AlliterationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlliterationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlliterationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
