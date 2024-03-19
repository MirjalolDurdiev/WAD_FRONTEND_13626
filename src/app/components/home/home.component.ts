import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // // all small modifications are commented and
  // // @Input was taken down because there is no nedd for it anymore
  // todoService=inject(ServiceTodoService); // injction of created service
  // router = inject(Router)
  // items:ToDo[]=[]; // preparing the variable for to work
  // // ngOnInit() function initiated when page is loaded
  // ngOnInit(){
  //   // line below is to get the requests from api
  //   this.todoService.getAllToDoItems().subscribe((result)=>{this.items = result});
  // }
  router = inject(Router);

  onReceptionClicked() {
    this.router.navigateByUrl('/reception');
  }
  onVisitorClicked() {
    this.router.navigateByUrl('/visitor');
  }
}
