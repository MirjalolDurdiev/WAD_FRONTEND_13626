import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { VisitorService } from '../../../ReceptionSystemService/service-visitor.service';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
interface Visitor {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-visitor',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatCardModule],
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css'],
})
export class VisitorComponent {
  visitorService = inject(VisitorService);
  router = inject(Router);

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
    'actions',
  ];
  ngOnInit() {
    this.visitorService.getAllVisitors().subscribe((data) => {
      this.visitors = data;
    });
  }

  showDetails(id: number) {
    this.router.navigateByUrl('visitor/' + id);
  }
  editVisitor(id: number) {
    this.router.navigateByUrl(`visitor/${id}/edit`);
  }

  createVisitor() {
    this.router.navigateByUrl('visitor-create');
  }

  visitors: Visitor[] = [];

  deleteVisitor(id: number) {
    this.visitorService.DeleteVisitor(id).subscribe((_) => {
      this.visitors = this.visitors.filter((t) => t.id !== id);
    });
  }
}
