import { Component, inject, input, model, OnInit } from '@angular/core';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
} from '@angular/material/sidenav';
import { MatIconButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { IconRegistry } from '../../../service/icon-registry/icon-registry';
import { MenuBridge } from '../../../service/menu-bridge/menu-bridge';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'mx-nav',
  imports: [
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent,
    MatToolbar,
    MatIconButton,
    MatIconModule,
    CdkPortalOutlet
  ],
  templateUrl: './mx-nav.html',
  styleUrl: './mx-nav.scss',
})
export class MxNav implements OnInit {
  readonly #iconRegistry = inject(IconRegistry);
  readonly #menuBridge = inject(MenuBridge);
  br= inject(BreakpointObserver);
  menuBridge$ = this.#menuBridge.activeMenuPortal();
  mode = model.required<'over' | 'side' | 'push'>({ alias: 'mode' });
  

  constructor() {
    this.#iconRegistry.register('menu', '/assets/svg/menu.svg');
    this.br.observe([Breakpoints.Handset]).subscribe(result => {
      if (result.matches) {
        this.mode.update((mode)=> mode = 'over');
      } else {
        this.mode.update((mode)=> mode = 'side');
      }
    });
  }
  ngOnInit() {}
}
