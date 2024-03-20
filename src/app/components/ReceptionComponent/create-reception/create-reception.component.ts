import { Component, inject, NgModule } from '@angular/core';
import { Reception } from '../../../Interfaces/Reception';
import { ReceptionService } from '../../../ReceptionSystemService/service-reception.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { Visitor } from '../../../Interfaces/Visitor';
import { VisitorService } from '../../../ReceptionSystemService/service-visitor.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-create-reception',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatInputModule,
  ],
  templateUrl: './create-reception.component.html',
  styleUrl: './create-reception.component.css',
  providers: [provideNativeDateAdapter()],
})
export class CreateReceptionComponent {
  createReception: Reception = {
    id: 0,
    visitorId: 0,
    date: new Date(),
    status: 1,
  };

  statusOptions = [
    { label: 'Pending', value: 1 },
    { label: 'Confirmed', value: 2 },
    { label: 'Completed', value: 3 },
    { label: 'Cancelled', value: 4 },
  ];

  errorObj: any;
  Visitors: Visitor[] = [];
  VisitorId: number | undefined = 0;

  receptionService = inject(ReceptionService);
  visitorService = inject(VisitorService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.visitorService.getAllVisitors().subscribe((data) => {
      this.Visitors = data;
    });
  }

  create() {
    this.createReception.visitorId = this.VisitorId;
    this.receptionService.create(this.createReception).subscribe(
      (result) => {
        alert('Reception created');
        this.router.navigateByUrl('reception');
      },
      (error) => {
        console.error('Error creating reception:', error);
      }
    );
  }
}
