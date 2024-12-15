import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-area-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-area-two.component.html',
  styleUrl: './about-area-two.component.scss'
})
export class AboutAreaTwoComponent {

  counter_data = [
    { num: 4, text: '', title: ' Years Graduate', subtitle: 'Bachelor of Science in Information Technology' },
    { num: 7, text: '+', title: 'Seminars and Certificate', subtitle: 'From Tours and Seminars' },
    { num: 96, text: '%', title: 'Clients Rating', subtitle: '30+ testimonials' },
  ]

}
