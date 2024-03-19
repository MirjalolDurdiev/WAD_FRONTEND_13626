import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VisitorComponent } from './components/VisitorComponent/visitor/visitor.component';
import { ReceptionComponent } from './components/ReceptionComponent/reception/reception.component';
import { DetailsVisitorComponent } from './components/VisitorComponent/details-visitor/details-visitor.component';
import { EditVisitorComponent } from './components/VisitorComponent/edit-visitor/edit-visitor.component';
import { CreateVisitorComponent } from './components/VisitorComponent/create-visitor/create-visitor.component';
import { DetailsReceptionComponent } from './components/ReceptionComponent/details-reception/details-reception.component';
import { CreateReceptionComponent } from './components/ReceptionComponent/create-reception/create-reception.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'visitor',
    component: VisitorComponent,
  },
  {
    path: 'reception',
    component: ReceptionComponent,
  },
  {
    path: 'visitor/:id',
    component: DetailsVisitorComponent,
  },
  {
    path: 'reception/:id',
    component: DetailsReceptionComponent,
  },
  {
    path: 'visitor/:id/edit',
    component: EditVisitorComponent,
  },
  {
    path: 'visitor-create',
    component: CreateVisitorComponent,
  },
  {
    path: 'reception-create',
    component: CreateReceptionComponent,
  },
];
