import {Component, inject, OnInit} from '@angular/core';
import { MxNav } from './lib/mx/mx-nav/mx-nav';
import { Bridge } from './service/bridge/bridge';
import{Action} from './shared/action/action';
import { ActionType } from './lib/type/action.type';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MxNav, RouterOutlet,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private bridge: Bridge = inject(Bridge);
  constructor() {
    this.bridge.setPortal(Action,{fragments:[{name: 'Home', url: '/home'}, {name: 'About', url: '/about'}, {name: 'Contact', url: '/contact'}], activeLink: {name: 'Home', url: '/home'}} as ActionType);
  }
  ngOnInit() {
  }
}