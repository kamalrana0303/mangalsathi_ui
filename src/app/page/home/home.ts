import { Component, inject } from '@angular/core';
import { ActionType } from '../../type/action.type';
import { MenuBridge } from '../../service/menu-bridge/menu-bridge';
import { Action } from '../../component/action/action';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly #bridge: MenuBridge = inject(MenuBridge);
  constructor() {
    this.#bridge.setPortal(Action, {
      fragments: [{ name: 'Home', url: '/home' }],
      activeLink: { name: 'Home', url: '/home' },
    } as ActionType);
  }
}
