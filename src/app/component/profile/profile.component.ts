import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { DataComponent } from "../data/data.component";
import { CommonModule } from '@angular/common';
export interface PeriodicElement {
  s: string;
  l: string;
  n: string;

  name: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'فودافون مصر',s:'المملكه الاردنيه الهاشميه',l:'الشركه الالمانيه للاباده',n:'09'},

];
const E_DATA: PeriodicElement[] = [
  { name: '2024/12/29',s:'5000ج.م',l:'ج.م5000',n:'5000ج.م'},

];
@Component({
  selector: 'app-profile',
  imports: [ MatTableModule,CommonModule,MatIconModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  displayedColumns: string[] = ['demo-position', 'demo-name','demo-cus','demo-re'];
  dataSource = ELEMENT_DATA;
  displayed: string[] = ['demo-position', 'demo-name','demo-cus','demo-re'];
  dSource = E_DATA;
}
