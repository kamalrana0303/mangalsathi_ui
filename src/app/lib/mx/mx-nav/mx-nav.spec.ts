import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';

import { IconRegistry } from '../../../service/icon-registry/icon-registry';
import { Bridge } from '../../../service/bridge/bridge';

import { MxNav } from './mx-nav';

describe('MxNav', () => {
  let component: MxNav;
  let fixture: ComponentFixture<MxNav>;

  beforeEach(async () => {
    const iconRegistrySpy = jasmine.createSpyObj('IconRegistry', ['register']);
    const bridgeStub: Partial<Bridge> = {
      activePortal: () => signal(null),
    };

    await TestBed.configureTestingModule({
      imports: [MxNav],
      providers: [
        { provide: IconRegistry, useValue: iconRegistrySpy },
        { provide: Bridge, useValue: bridgeStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MxNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register menu icon in IconRegistry', () => {
    const iconRegistry = TestBed.inject(
      IconRegistry,
    ) as jasmine.SpyObj<IconRegistry>;
    expect(iconRegistry.register).toHaveBeenCalledWith(
      'menu',
      '/assets/svg/menu.svg',
    );
  });
});
