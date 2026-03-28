import { Component, inject } from '@angular/core';
import { ActionType } from '../../lib/type/action.type';
import { MenuBridge } from '../../service/menu-bridge/menu-bridge';
import { Action } from '../../shared/action/action';

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
      fragments: [
        { name: 'Home', url: '/home' },
        { name: 'About', url: '/about' },
        { name: 'Contact', url: '/contact' },
      ],
      activeLink: { name: 'Home', url: '/home' },
    } as ActionType);
  }

}
