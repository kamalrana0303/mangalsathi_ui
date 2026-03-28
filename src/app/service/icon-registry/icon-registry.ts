import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconRegistry {
  readonly #matIconRegistry = inject(MatIconRegistry);
  readonly #domSanitizer = inject(DomSanitizer);

  register(iconName: string, path: string){
    this.#matIconRegistry.addSvgIcon(
      iconName,
      this.#domSanitizer.bypassSecurityTrustResourceUrl(path),
    );
  }
}
