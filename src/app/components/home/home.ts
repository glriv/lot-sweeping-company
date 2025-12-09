import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  services = [
    {
      title: 'Parking Lot Sweeping',
      description:
        'Professional sweeping services to keep your parking lots clean and presentable.',
      icon: '🧹',
    },
    {
      title: 'Construction Site Cleanup',
      description:
        'Post-construction sweeping and debris removal for commercial and residential sites.',
      icon: '🏗️',
    },
    {
      title: 'Street Sweeping',
      description:
        'Municipal and private street sweeping services for communities and businesses.',
      icon: '🛣️',
    },
    {
      title: 'Power Washing',
      description:
        'High-pressure cleaning services for concrete, asphalt, and other surfaces.',
      icon: '💦',
    },
  ];
}
