import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SideNavService } from '../../../core/services/side-nav.service';
import { RouterModule } from '@angular/router';
import { NAV_MENU_ITEMS } from '../../../core/config/nav-menu-items';

@Component({
  selector: 'rj-header',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public sideNavService = inject(SideNavService);

  public menuItems = NAV_MENU_ITEMS;
}
