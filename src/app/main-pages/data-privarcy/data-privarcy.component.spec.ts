import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPrivarcyComponent } from './data-privarcy.component';

describe('DataPrivarcyComponent', () => {
  let component: DataPrivarcyComponent;
  let fixture: ComponentFixture<DataPrivarcyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataPrivarcyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataPrivarcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
