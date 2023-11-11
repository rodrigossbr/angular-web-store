import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderListOptionsComponent } from './header-list-options.component';

describe('HeaderListOptionsComponent', () => {
  let component: HeaderListOptionsComponent;
  let fixture: ComponentFixture<HeaderListOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderListOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderListOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
