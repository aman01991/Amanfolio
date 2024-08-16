import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public isMobile = false;

  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer.observe(['(min-width: 800px)']).subscribe((res) => {
      this.isMobile = res.matches;
    });
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


  redirectToProject = () => {
    window.location.href = '#projects';
  };

  redirectToAbout = () => {
    window.location.href = '#about';
  };
}
