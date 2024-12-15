import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-freelancer-skills',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './freelancer-skills.component.html',
  styleUrl: './freelancer-skills.component.scss'
})
export class FreelancerSkillsComponent {

  // skill data
  skill_data = [
    {
      skill_items: [
        { icon: '/assets/img/skill/skill-icon-1.png', num: 98, text: "%" },
        { icon: '/assets/img/skill/skill-icon-2.png', num: 86, text: "%" },
      ],
    },
    {
      skill_items: [
        { icon: '/assets/img/skill/skill-icon-3.png', num: 92, text: "%" },
        { icon: '/assets/img/skill/skill-icon-4.png', num: 73, text: "%" },
        { icon: '/assets/img/skill/skill-icon-5.png', num: 65, text: "%" },
      ],
    },
    {
      skill_items: [
        { icon: '/assets/img/skill/skill-icon-6.png', num: 50, text: "%" },
        { icon: '/assets/img/skill/skill-icon-7.png', num: 67, text: "%" },
      ],
    },
  ];

  // career data
  career_data = [
    {
      delay: "150",
      icon: '/assets/img/skill/company/word.png',
      title: "Proficient in MS Word Office",
      designation: "Solid understanding of its key features and funtions.",
    },
    {
      delay: "200",
      icon: '/assets/img/skill/company/excel.png',
      title: "Proficient in MS Excel",
      designation: "Solid understanding of its key features and funtions.",
    },
    {
      delay: "250",
      icon: '/assets/img/skill/company/collaboration.webp',
      title: "Team Collaboration",
      designation: "Ability to work effectively with others.",
    },
    {
      delay: "150",
      icon: '/assets/img/skill/company/datacollect.png',
      title: "Data Collection",
      designation: "Experienced in data gathering, organizing, and analyzing information.",
      year: "April 2008 - March 2012",
    },
    {
      delay: "250",
      icon: '/assets/img/skill/company/dbms.png.crdownload',
      title: "Database Management",
      designation: "Experienced in organizing, storing, and maintining data.",
    },
    // {
      
    // },
  ];
}
