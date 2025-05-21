import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivarcyPolicyComponent } from './privarcy-policy.component';

describe('PrivarcyPolicyComponent', () => {
  let component: PrivarcyPolicyComponent;
  let fixture: ComponentFixture<PrivarcyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivarcyPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivarcyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
