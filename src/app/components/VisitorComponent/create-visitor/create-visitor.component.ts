import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { VisitorService } from '../../../ReceptionSystemService/service-visitor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Visitor } from '../../../Interfaces/Visitor';

@Component({
  selector: 'app-create-visitor',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
  ],
  templateUrl: './create-visitor.component.html',
  styleUrls: ['./create-visitor.component.css'],
})
export class CreateVisitorComponent {
  createVisitor: Visitor = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  };

  visitorService = inject(VisitorService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    if (this.activatedRoute.snapshot.params['id']) {
      this.visitorService
        .getVisitorById(+this.activatedRoute.snapshot.params['id'])
        .subscribe(
          (visitor) => {
            this.createVisitor = visitor;
          },
          (error) => {
            console.error('Error retrieving visitor:', error);
          }
        );
    }
  }

  create() {
    this.visitorService.create(this.createVisitor).subscribe(
      (result) => {
        alert('Visitor created');
        this.router.navigateByUrl('visitor');
      },
      (error) => {
        console.error('Error creating visitor:', error);
      }
    );
  }
}
