import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-testimonial-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-three.component.html',
  styleUrl: './testimonial-three.component.scss'
})
export class TestimonialThreeComponent {

  // thumb nav data
  slider_thumb_nav = [
    '/assets/img/users/MamMae.jpg',
    '/assets/img/users/MamChona.jpg',
    '/assets/img/users/SirPel.jpg',
    // '/assets/img/users/user-4.jpg',
    // '/assets/img/users/user-5.jpg',
    // '/assets/img/users/user-6.jpg',
  ];
  // testimonial_data
  testimonial_data = [
    {
      desc: "“ I have had the pleasure of mentoring Rechah Joy D. Ortega and can confidently say that her skills as a best seller tracker are exceptional. Her dedication, attention to detail, and analytical abilities have consistently delivered outstanding results. Rechah Joy D. Ortega has a keen eye for market trends and a strategic approach that has significantly contributed to our success. I highly recommend Rechah Joy D. Ortega for their expertise and commitment to excellence.”",
      name: "Mary Ann F. Ortega",
      designation: "Mentor",
    },
    {
      desc: "“ I had the pleasure of teaching Rechah Joy D. Ortega in the Technical Documentation for IT course, and I was consistently impressed by her analytical skills and dedication. As a fresh graduate, she has demonstrated exceptional talent in data analysis, earning an award for her outstanding performance. Her ability to interpret complex data and present it clearly is remarkable. I am confident that she will excel as a data analyst and bring valuable insights to any team.  ”",
      name: "Chona L. Eguillon",
      designation: "Technical Documentation for IT Instructor",
    },
    {
      desc: "“ I had the pleasure of teaching Rechah Joy D. Ortega in the IT Social and Professional Issues course. Her consistently demonstrated exceptional analytical skills and a deep understanding of the subject matter. Her dedication and hard work earned them an award for outstanding performance. As a fresh graduate, Rechah Joy D. Ortega has shown remarkable potential as a data analyst, with the ability to interpret complex data and provide valuable insights. I am confident that Rechah Joy D. Ortega will excel in their career and make significant contributions to any team. ”",
      name: "Eric A. Pelorin",
      designation: "IT Social and Professional Issues Intructor",
    },
    // {
    //   desc: "“  Humour randomised look embarrassing There are many variations passages Lorem Ipsum available but the majority suffered alteration in some form by injected hidden in middle text ”",
    //   name: "Gomz Itsa",
    //   designation: "Designer",
    // },
    // {
    //   desc: "“ Injected humour randomised look embarrassing There are many variations passages Lorem Ipsum available but the majority suffered alteration in some form by  hidden in middle text ”",
    //   name: "Unika Kala",
    //   designation: "UI/UX Designer",
    // },
    // {
    //   desc: "“ Lorem Ipsum available but the majority suffered there are many variations passages alteration in some form by injected humour randomised look embarrassing hidden in middle text ”",
    //   name: "Helen Klintong",
    //   designation: "SEO Expert",
    // },
  ];

  ngOnInit(){
    const swiper = new Swiper(".testimonial__slider-nav", {
      spaceBetween: 0,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });
     new Swiper(".testimonial__slider-active-2", {
      slidesPerView: 1,
      spaceBetween: 0,
      thumbs: {
        swiper: swiper,
      },
      navigation: {
        nextEl: ".testimonial-2-button-next",
        prevEl: ".testimonial-2-button-prev"
      },
      autoplay: {
        delay: 8000,
      }
    });
  }
}
