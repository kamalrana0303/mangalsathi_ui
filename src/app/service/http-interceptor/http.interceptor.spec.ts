import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from '../../environment';
import { withCredentialsInterceptor } from './http.interceptor';

describe('withCredentialsInterceptor', () => {
  it('should not modify URLs under /svg/ or /assets/', (done) => {
    const request = new HttpRequest('GET', '/svg/menu.svg');

    const next: HttpHandlerFn = (req: HttpRequest<unknown>) => {
      expect(req.url).toBe('/svg/menu.svg');
      expect(req.withCredentials).toBeUndefined();
      return of({} as HttpEvent<unknown>);
    };

    withCredentialsInterceptor(request, next).subscribe(() => done());
  });

  it('should prepend backendBaseUrl for non-asset URLs', (done) => {
    const request = new HttpRequest('GET', '/api/users');

    const next: HttpHandlerFn = (req: HttpRequest<unknown>) => {
      expect(req.url).toBe(environment.backendBaseUrl + '/api/users');
      expect(req.withCredentials).toBe(true);
      return of({} as HttpEvent<unknown>);
    };

    withCredentialsInterceptor(request, next).subscribe(() => done());
  });
});
