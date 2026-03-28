import { Injectable, Injector, signal, Type } from '@angular/core';
import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { PORTAL_DATA } from '../../type/portal-data.token';
@Injectable({
  providedIn: 'root',
})
export class MenuBridge {
  #activeMenuPortal = signal<Portal<any> | null>(null);
  setPortal<T, K>(component: Type<T>, data: K) {
    const injector = Injector.create({
      providers: [{ provide: PORTAL_DATA, useValue: data }],
    });
    this.#activeMenuPortal.set(new ComponentPortal(component, null, injector));
  }
  get activeMenuPortal() {
    return this.#activeMenuPortal.asReadonly;
  }
}
