import { Injectable, signal } from '@angular/core';

@Injectable()
export class Login {
  #state = signal<LoginState>({
    loggedIn: false
  });
  loggedIn$ = this.#state().loggedIn;

  pLoggedIn(loggedIn: boolean) {
    this.#state.update(state => ({ ...state, loggedIn: loggedIn }));
  }
  
}

export interface LoginState{
  loggedIn: boolean;
}
