import { Component } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data',
  imports: [MatTableModule, MatPaginatorModule,MatIconModule,CommonModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent implements AfterViewInit {
  displayedColumns: string[] = ['client', 'appointmentDate', 'cancellationDate', 'responsible', 'localMinutes', 'internationalMinutes', 'amount'];
  dataSource = new MatTableDataSource<AppointmentData>(APPOINTMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface AppointmentData {
  client: string;
  appointmentDate: string;
  cancellationDate: string;
  responsible: string;
  localMinutes: number;
  internationalMinutes: number;
  amount: string;
}

// Updated ELEMENT_DATA to include new columns
const APPOINTMENT_DATA: AppointmentData[] = [
  { client: 'الشركة الألمانية للإبادة', appointmentDate: '01/12/2024', cancellationDate: '01/12/2024', responsible: 'عبد الرحيم إسماعيل ناصف', localMinutes: 122, internationalMinutes: 7654, amount: '61890 ح.م' },
  { client: 'الشركة الألمانية للإبادة', appointmentDate: '01/12/2024', cancellationDate: '01/12/2024', responsible: 'عبد الرحيم إسماعيل ناصف', localMinutes: 122, internationalMinutes: 7654, amount: '61890 ح.م' },
  { client: 'الشركة الألمانية للإبادة', appointmentDate: '01/12/2024', cancellationDate: '01/12/2024', responsible: 'عبد الرحيم إسماعيل ناصف', localMinutes: 122, internationalMinutes: 7654, amount: '61890 ح.م' },
  { client: 'الشركة الألمانية للإبادة', appointmentDate: '01/12/2024', cancellationDate: '01/12/2024', responsible: 'عبد الرحيم إسماعيل ناصف', localMinutes: 122, internationalMinutes: 7654, amount: '61890 ح.م' },
];
