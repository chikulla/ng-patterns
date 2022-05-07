import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopIndexComponent } from './top-index.component';

describe('TopIndexComponent', () => {
  let component: TopIndexComponent;
  let fixture: ComponentFixture<TopIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
