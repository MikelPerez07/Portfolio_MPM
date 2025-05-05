import { Component } from '@angular/core';
import { SkillsComponent } from '../../../shared/components/skills/skills.component';
import { Scroll } from '@angular/router';
import { ScrollProgressDirective } from '../../../shared/directives/scroll-progress.directive';
import { ProjectListComponent } from '../../../shared/components/project-list/project-list.component';

@Component({
  selector: 'app-home',
  imports: [SkillsComponent, ScrollProgressDirective,ProjectListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {








  moveToSection(sectionId: string) {
    console.log('Moving to section:', sectionId);
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }
}
