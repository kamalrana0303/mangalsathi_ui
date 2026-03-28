import { Component, inject, signal } from '@angular/core';
import { PORTAL_DATA } from '../../lib/type/portal-data.token';
import { ActionType } from '../../lib/type/action.type';
import { MxNavList } from "../../lib/mx/mx-nav-list/mx-nav-list";

@Component({
  selector: 'app-action',
  imports: [MxNavList],
  templateUrl: './action.html',
  styleUrl: './action.scss',
})
export class Action {
  readonly #data = signal(inject<ActionType>(PORTAL_DATA));
  fragments$ =  this.#data().fragments;
  activeLink$ =this.#data().activeLink;
}