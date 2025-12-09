import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'John Smith',
      position: 'Founder & CEO',
      description: '15+ years in pavement maintenance',
    },
    {
      name: 'Sarah Johnson',
      position: 'Operations Manager',
      description: 'Expert in logistics and scheduling',
    },
    {
      name: 'Mike Williams',
      position: 'Lead Technician',
      description: 'Certified sweeping specialist',
    },
  ];

  stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Lots Cleaned' },
    { number: '24/7', label: 'Service Available' },
  ];
}
