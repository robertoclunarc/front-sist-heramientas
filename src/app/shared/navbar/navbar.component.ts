import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotondesplegableComponent } from './botondesplegable/botondesplegable.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BotondesplegableComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarComponent {

}
 