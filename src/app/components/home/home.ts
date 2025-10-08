import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-home',
  imports: [  CommonModule,
  MatCardModule,
  MatIconModule,
  MatChipsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent  {

}
