import { Component, inject, NgModule } from '@angular/core';
import { Reception } from '../../../Interfaces/Reception';
import { ReceptionService } from '../../../ReceptionSystemService/service-reception.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-create-reception',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule,
  ],
  templateUrl: './create-reception.component.html',
  styleUrl: './create-reception.component.css',
})
export class CreateReceptionComponent {
  createReception: Reception = {
    id: 0,
    visitorId: undefined,
    date: new Date(),
    status: 1,
  };

  receptionService = inject(ReceptionService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    if (this.activatedRoute.snapshot.params['id']) {
      this.receptionService
        .getReceptionById(+this.activatedRoute.snapshot.params['id'])
        .subscribe(
          (visitor) => {
            this.createReception = visitor;
          },
          (error) => {
            console.error('Error retrieving reception:', error);
          }
        );
    }
  }

  create() {
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
