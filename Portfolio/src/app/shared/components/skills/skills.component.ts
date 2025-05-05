import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {

  ngOnInit() {

  }

  skills = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'Angular' },
    { name: 'MySQL' },
    { name: 'Bootstrap' },
    { name: 'Java' },
    { name: 'Spring Boot' },
  ];

}
