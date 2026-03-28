import { TestBed } from '@angular/core/testing';
import { ComponentPortal } from '@angular/cdk/portal';

import { MenuBridge } from './menu-bridge';
import { PORTAL_DATA } from '../../lib/type/portal-data.token';

describe('MenuBridge', () => {
  let service: MenuBridge;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuBridge);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('setPortal should register a ComponentPortal and expose activePortal correctly', () => {
    class DummyComponent {}

    const data = { foo: 'bar' };

    service.setPortal(DummyComponent, data);

    const active = service.activeMenuPortal() as unknown;
    expect(active).toBeTruthy();
    expect(active).toBeInstanceOf(ComponentPortal);

    const portalAny = active as any;
    expect(portalAny.component).toBe(DummyComponent);
    expect(portalAny.injector?.get(PORTAL_DATA)).toEqual(data);
  });
});
