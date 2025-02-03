import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule


@Component({
  selector: 'app-footer',
  imports: [MatTableModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
image="../../../assets/images/download.jpg";
}
