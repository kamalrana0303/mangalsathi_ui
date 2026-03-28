import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MxNavList } from './mx-nav-list';

describe('MxNavList', () => {
  let component: MxNavList;
  let fixture: ComponentFixture<MxNavList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MxNavList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MxNavList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
