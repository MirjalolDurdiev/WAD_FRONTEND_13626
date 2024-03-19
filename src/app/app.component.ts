import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';

import { VisitorComponent } from './components/VisitorComponent/visitor/visitor.component';
import { ReceptionComponent } from './components/ReceptionComponent/reception/reception.component';
import { HomeComponent } from './components/home/home.component';
import { EditVisitorComponent } from './components/VisitorComponent/edit-visitor/edit-visitor.component';
import { DetailsVisitorComponent } from './components/VisitorComponent/details-visitor/details-visitor.component';
import { DeleteVisitorComponent } from './components/VisitorComponent/delete-visitor/delete-visitor.component';
import { CreateVisitorComponent } from './components/VisitorComponent/create-visitor/create-visitor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    VisitorComponent,
    ReceptionComponent,
    HomeComponent,
    EditVisitorComponent,
    DetailsVisitorComponent,
    DeleteVisitorComponent,
    EditVisitorComponent,
    CreateVisitorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
