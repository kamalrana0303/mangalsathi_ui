import { Component, model } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Link } from '../../../type/action.type';

@Component({
  selector: 'mx-nav-list',
  imports: [MatListModule],
  templateUrl: './mx-nav-list.html',
  styleUrl: './mx-nav-list.scss',
})
export class MxNavList {
  fragments = model.required<Link[]>({ alias: 'fragments' });
  activeLink = model.required<Link>({ alias: 'activeLink' });
  action(link: Link) {
    this.activeLink.update((value) => ({ ...value, ...link }));
  }
}
