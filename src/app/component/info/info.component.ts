import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ProfileComponent } from "../profile/profile.component";
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-info',
  imports: [ProfileComponent,MatIconModule,MatButtonModule, MatMenuModule, MatIconModule,],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  onMenuClick() {
    console.log('Menu icon clicked!');
    // Add your logic here (e.g., open a dropdown, modal, etc.)
  }
}
