import { Component, inject } from '@angular/core';
import { ReceptionService } from '../../../ReceptionSystemService/service-reception.service';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Visitor } from '../../../Interfaces/Visitor';

interface Reception {
  id: number;
  visitorId?: number;
  visitor?: Visitor | null;
  date: Date | null;
  status: number | null;
}

const Status = ['Pending', 'Confirmed', 'Completed', 'Cancelled'];

@Component({
  selector: 'app-reception',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatCardModule],
  templateUrl: './reception.component.html',
  styleUrl: './reception.component.css',
})
export class ReceptionComponent {
  receptionService = inject(ReceptionService);
  router = inject(Router);

  displayedColumns: string[] = ['id', 'date', 'status', 'actions'];
  ngOnInit() {
    this.receptionService.getAllReception().subscribe((data) => {
      this.receptions = data;
    });
  }
  getStatusText(statusValue: number): string {
    if (typeof statusValue === 'string') return statusValue;
    return Status[statusValue - 1];
  }

  showDetails(id: number) {
    this.router.navigateByUrl('reception/' + id);
  }
  editReception(id: number) {
    this.router.navigateByUrl(`reception/${id}/edit`);
  }

  createReception() {
    this.router.navigateByUrl('reception-create');
  }

  receptions: Reception[] = [];

  deleteReception(id: number) {
    this.receptionService.DeleteReception(id).subscribe((_) => {
      this.receptions = this.receptions.filter((t) => t.id !== id);
    });
  }
}
