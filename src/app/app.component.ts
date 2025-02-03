import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
import { ProfileComponent } from "./component/profile/profile.component";
import { DataComponent } from "./component/data/data.component";
import { FooterComponent } from "./component/footer/footer.component";
import { InfoComponent } from "./component/info/info.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, InfoComponent, DataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assi';
}
