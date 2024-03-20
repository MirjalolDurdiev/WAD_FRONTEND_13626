import { Component } from '@angular/core';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
@Component({
  selector: 'app-edit-reception',
  standalone: true,
  imports: [MatFormField, MatFormFieldModule, MatLabel, MatDatepickerModule],
  templateUrl: './edit-reception.component.html',
  styleUrl: './edit-reception.component.css',
})
export class EditReceptionComponent {}
