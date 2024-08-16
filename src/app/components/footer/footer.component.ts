import { Component } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  tooltipPosition: TooltipPosition = 'after';

  rocketImage: any = document.getElementById('rocket') as HTMLImageElement;

  scrollToTopWithDelay(delay: number) {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, delay);
  }


  redirectToLinkdin = (): void => {
    window.open('https://www.linkedin.com/in/aman-kumar-546235225/', '-blank');
  };

  redirectToYoutube = () => {
    window.open('https://www.youtube.com/@amanshroff1890', '-blank');
  };

  redirectToFB = () => {
    window.open(environment.fbLink, '-blank');
  };

  redirectToGithub = () => {
    window.open('https://github.com/aman01991', '-blank');
  };

  redirectToInsta = () => {
    window.open('https://www.instagram.com/imamansharraff?igsh=MXdsNGc5azB0Nmk1NQ==', '-blank');
  };

}
