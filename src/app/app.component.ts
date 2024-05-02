import { Component } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import { cilLockLocked } from '@coreui/icons';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor (
    public iconSet: IconSetService
  ) {
    iconSet.icons = { cilLockLocked }
  }
  title = 'sist-herramientas-web';
}
