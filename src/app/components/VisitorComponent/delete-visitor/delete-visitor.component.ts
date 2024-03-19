import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-delete-visitor',
  standalone: true,
  imports: [MatCard, MatCardModule],
  templateUrl: './delete-visitor.component.html',
  styleUrl: './delete-visitor.component.css',
})
export class DeleteVisitorComponent {
  // deleteVisitor: Visitor = {
  //   id: 0,
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phoneNumber: '',
  // };
  // visitorService = inject(VisitorService);
  // activatedRoute = inject(ActivatedRoute);
  // router = inject(Router);
  // NgOnInit() {
  //   this.visitorService
  //     .getVisitorById(this.activatedRoute.snapshot.params['id'])
  //     .subscribe((result) => {
  //       this.deleteVisitor = result;
  //     });
  // }
  // onHomeButtonClick() {
  //   this.router.navigateByUrl('home');
  // }
  // onDeleteButtonClick(id: number) {
  //   this.visitorService.DeleteVisitor(this.deleteVisitor.id);
  //   alert('Deleted item with ID: ' + id);
  //   this.router.navigateByUrl('home');
  // }
}
