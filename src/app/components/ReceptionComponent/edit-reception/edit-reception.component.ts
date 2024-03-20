import { Component, Inject, Input } from '@angular/core';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReceptionService } from '../../../ReceptionSystemService/service-reception.service';
import { Reception } from '../../../Interfaces/Reception';

@Component({
  selector: 'app-edit-reception',
  standalone: true,
  imports: [MatFormField, MatFormFieldModule, MatLabel, MatDatepickerModule],
  templateUrl: './edit-reception.component.html',
  styleUrls: ['./edit-reception.component.css'],
})
export class EditReceptionComponent {}
