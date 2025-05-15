import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  imports: [],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css'
})
export class ProfileInfoComponent {




  downloadPdf() {
    const link = document.createElement('a');
    link.href = 'assets/CV-Mikel.pdf';
    link.download = 'CV-Mikel.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
