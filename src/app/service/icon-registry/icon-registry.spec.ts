import { TestBed } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { IconRegistry } from './icon-registry';

describe('IconRegistry', () => {
  let service: IconRegistry;

  beforeEach(() => {
    const matIconRegistrySpy = jasmine.createSpyObj('MatIconRegistry', [
      'addSvgIcon',
    ]);
    const domSanitizerSpy = jasmine.createSpyObj('DomSanitizer', [
      'bypassSecurityTrustResourceUrl',
    ]);
    domSanitizerSpy.bypassSecurityTrustResourceUrl.and.returnValue('SAFE_URL');

    TestBed.configureTestingModule({
      providers: [
        { provide: MatIconRegistry, useValue: matIconRegistrySpy },
        { provide: DomSanitizer, useValue: domSanitizerSpy },
      ],
    });
    service = TestBed.inject(IconRegistry);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('register should call MatIconRegistry.addSvgIcon with sanitized URL', () => {
    const matIconRegistry = TestBed.inject(
      MatIconRegistry,
    ) as jasmine.SpyObj<MatIconRegistry>;
    const domSanitizer = TestBed.inject(
      DomSanitizer,
    ) as jasmine.SpyObj<DomSanitizer>;

    service.register('menu', '/svg/menu.svg');

    expect(domSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith(
      '/svg/menu.svg',
    );
    expect(matIconRegistry.addSvgIcon).toHaveBeenCalledWith('menu', 'SAFE_URL');
  });
});
