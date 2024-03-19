// import { Component, inject } from '@angular/core';
// import {
//   MatFormField,
//   MatFormFieldModule,
//   MatLabel,
// } from '@angular/material/form-field';
// import { FormsModule, NgModel } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { Visitor } from '../../Visitor';
// import { VisitorService } from '../../service-visitor.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { MatInputModule } from '@angular/material/input';

// @Component({
//   selector: 'app-edit-visitor',
//   standalone: true,
//   imports: [
//     MatFormField,
//     MatLabel,
//     FormsModule,
//     MatFormFieldModule,
//     CommonModule,
//     MatInputModule,
//   ],
//   templateUrl: './edit-visitor.component.html',
//   styleUrl: './edit-visitor.component.css',
// })
// export class EditVisitorComponent {
//   editVisitor: Visitor = {
//     id: 0,
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//   };
//   visitorService = inject(VisitorService);
//   activatedRoute = inject(ActivatedRoute);
//   router = inject(Router);

//   ngOnInit() {
//     this.visitorService
//       .getVisitorById(this.activatedRoute.snapshot.params['id'])
//       .subscribe((result) => {
//         this.editVisitor = result;
//       });
//   }

//   toHome() {
//     this.router.navigateByUrl('home');
//   }
//   edit() {
//     // Call the VisitorService to update the visitor
//     this.visitorService.UpdateVisitor(this.editVisitor).subscribe(
//       (response) => {
//         console.log('Visitor updated successfully:', response);
//         this.router.navigateByUrl(`/visitors/${this.editVisitor.id}`);
//       },
//       (error) => {
//         console.error('Error updating visitor:', error);
//       }
//     );
//   }
// }
import { Component, inject } from '@angular/core';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Visitor } from '../../../Interfaces/Visitor';
import { VisitorService } from '../../../ReceptionSystemService/service-visitor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-visitor',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
  ],
  templateUrl: './edit-visitor.component.html',
  styleUrls: ['./edit-visitor.component.css'],
})
export class EditVisitorComponent {
  editVisitor: Visitor = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  };
  visitorService = inject(VisitorService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    this.visitorService
      .getVisitorById(this.activatedRoute.snapshot.params['id'])
      .subscribe((resultedItem) => {
        this.editVisitor = resultedItem;
      });
  }

  toHome() {
    this.router.navigateByUrl('home');
  }
  edit() {
    const visitorId = this.activatedRoute.snapshot.params['id'];

    this.visitorService
      .UpdateVisitor(visitorId, this.editVisitor)
      .subscribe((_) => {
        this.router.navigateByUrl('visitor');
      });
  }
}
