import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceptionService } from '../../../ReceptionSystemService/service-reception.service';
import { Reception } from '../../../Interfaces/Reception';
import { MatCard, MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-reception',
  standalone: true,
  imports: [MatCard, MatCardModule, CommonModule],
  templateUrl: './details-reception.component.html',
  styleUrl: './details-reception.component.css',
})
export class DetailsReceptionComponent {
  detailedReception: Reception = {
    id: 0,
    visitorId: 0,
    visitor: null,
    date: null,
    status: null,
  };

  router = inject(Router);
  receptionService = inject(ReceptionService);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.receptionService
      .getReceptionById(this.activatedRoute.snapshot.params['id'])
      .subscribe((resultedItem) => {
        this.detailedReception = resultedItem;
        console.log('result', resultedItem);
      });
  }
}
