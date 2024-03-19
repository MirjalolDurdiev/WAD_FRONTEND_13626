import { Component, Input, inject } from '@angular/core';
import { Visitor } from '../../../Interfaces/Visitor';
import { MatCard, MatCardModule } from '@angular/material/card';
import { VisitorService } from '../../../ReceptionSystemService/service-visitor.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-details-visitor',
  standalone: true,
  imports: [MatCard, MatCardModule],
  templateUrl: './details-visitor.component.html',
  styleUrl: './details-visitor.component.css',
})
export class DetailsVisitorComponent {
  detailedVisitor: Visitor = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  };

  router = inject(Router);
  visitorService = inject(VisitorService);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.visitorService
      .getVisitorById(this.activatedRoute.snapshot.params['id'])
      .subscribe((resultedItem) => {
        this.detailedVisitor = resultedItem;
      });
  }
}
