import { TestBed } from '@angular/core/testing';

import { Login } from './login';

describe('Login', () => {
  let service: Login;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Login);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start logged out by default', () => {
    expect(service.loggedIn$).toBe(false);
  });

  it('setLoggedIn(true) should update state to logged in', () => {
    service.setLoggedIn(true);
    expect(service.loggedIn$).toBe(true);
  });

  it('setLoggedIn(false) should update state to logged out', () => {
    service.setLoggedIn(true);
    expect(service.loggedIn$).toBe(true);
    service.setLoggedIn(false);
    expect(service.loggedIn$).toBe(false);
  });
});
