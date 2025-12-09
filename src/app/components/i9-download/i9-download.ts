import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-i9-download',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './i9-download.html',
  styleUrls: ['./i9-download.css'],
})
export class I9DownloadComponent {
  downloadPDF() {
    // This will download the PDF from the assets folder
    const link = document.createElement('a');
    link.href = 'assets/forms/i-9.pdf';
    link.download = 'I-9-Employment-Form.pdf';
    link.click();
  }

  openPDF() {
    // This will open the PDF in a new tab
    window.open('assets/forms/i-9.pdf', '_blank');
  }
}
