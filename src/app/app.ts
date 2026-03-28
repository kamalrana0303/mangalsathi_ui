import { Component, OnInit } from '@angular/core';
import { MxNav } from './lib/mx/mx-nav/mx-nav';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MxNav, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  constructor() {
    
  }
  ngOnInit() {}
}
