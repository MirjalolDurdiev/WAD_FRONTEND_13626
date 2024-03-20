// // import { Component } from '@angular/core';
// // import { MatCard, MatCardModule } from '@angular/material/card';

// // @Component({
// //   selector: 'app-delete-visitor',
// //   standalone: true,
// //   imports: [MatCard, MatCardModule],
// //   templateUrl: './delete-visitor.component.html',
// //   styleUrl: './delete-visitor.component.css',
// // })
// // export class DeleteVisitorComponent {
// //   // deleteVisitor: Visitor = {
// //   //   id: 0,
// //   //   firstName: '',
// //   //   lastName: '',
// //   //   email: '',
// //   //   phoneNumber: '',
// //   // };
// //   // visitorService = inject(VisitorService);
// //   // activatedRoute = inject(ActivatedRoute);
// //   // router = inject(Router);
// //   // NgOnInit() {
// //   //   this.visitorService
// //   //     .getVisitorById(this.activatedRoute.snapshot.params['id'])
// //   //     .subscribe((result) => {
// //   //       this.deleteVisitor = result;
// //   //     });
// //   // }
// //   // onHomeButtonClick() {
// //   //   this.router.navigateByUrl('home');
// //   // }
// //   // onDeleteButtonClick(id: number) {
// //   //   this.visitorService.DeleteVisitor(this.deleteVisitor.id);
// //   //   alert('Deleted item with ID: ' + id);
// //   //   this.router.navigateByUrl('home');
// //   // }
// // }
// import { Component, Input, inject } from '@angular/core';
// import { MatSelectModule } from '@angular/material/select';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatButtonModule } from '@angular/material/button';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { provideNativeDateAdapter } from '@angular/material/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Movie, MovieCreate } from '../../../interfaces/movie.interface';
// import { ActivatedRoute, Router } from '@angular/router';
// import { MovieService } from '../../../services/movie.service';
// import { CategoryService } from '../../../services/category.service';
// import { Category } from '../../../interfaces/category.interface';
// import { Reception } from '../../../Interfaces/Reception';
// import { ReceptionService } from '../../../ReceptionSystemService/service-reception.service';
// import { VisitorService } from '../../../ReceptionSystemService/service-visitor.service';
// import { Visitor } from '../../../Interfaces/Visitor';

// @Component({
//   selector: 'app-m-create',
//   standalone: true,
//   imports: [
//     MatFormFieldModule,
//     MatInputModule,
//     MatSelectModule,
//     FormsModule,
//     ReactiveFormsModule,
//     MatButtonModule,
//     MatDatepickerModule,
//   ],
//   templateUrl: './m-create.component.html',
//   styleUrl: './m-create.component.scss',
//   providers: [provideNativeDateAdapter()],
// })
// export class MCreateComponent {
//   @Input()
//   movieDetail!: Movie;

//   @Input()
//   isEdit: boolean = false;

//   router = inject(Router);
//   visitorService = inject(VisitorService);
//   receptionService = inject(ReceptionService);
//   activatedRoute = inject(ActivatedRoute);

//   createReception: Reception = {
//     id: 0,
//     visitorId: undefined,
//     date: new Date(),
//     status: 1,
//   };
//   errorObj: any;
//   Visitor: Visitor[] = [];
//   VisitorId: number = 0;
//   Status:

//   ngOnInit() {
//     this..getCategories().subscribe((result) => {
//       this.categories = result;
//     });
//   }

//   ngOnChanges() {
//     this.createMovie = this.movieDetail;
//   }

//   clearForm() {
//     this.createMovie = {
//       title: '',
//       description: '',
//       releaseDate: '',
//       duration: null,
//       categoryId: null,
//     };
//   }

//   submitForm() {
//     this.createReception. = this.categoryId;
//     if (this.isEdit) {
//       this.movieService
//         .updateMovie(
//           this.activatedRoute.snapshot.params['id'],
//           this.createMovie
//         )
//         .subscribe(
//           (_) => {
//             alert('Movie Updated');
//             this.router.navigateByUrl('movie');
//           },
//           (error) => {
//             this.errorObj = error.error.errors;
//           }
//         );
//     } else {
//       this.movieService.createMovie(this.createMovie).subscribe(
//         (_) => {
//           alert('Movie created');
//           this.router.navigateByUrl('movie');
//         },
//         (error) => {
//           this.errorObj = error.error.errors;
//         }
//       );
//     }
//   }
// }
