import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activeChartType: string | undefined;
  
  handPointVisible(chartType: string){
    const element = document.getElementById(chartType);
    const allElements = document.getElementsByClassName("fa-hand-point-right");
    const navLinks = document.getElementsByClassName("nav-link");

    for (let i = 0; i < navLinks.length; i++) {
      const navLink = navLinks[i] as HTMLElement;
      navLink.classList.remove("active");
    }

    for (let i = 0; i < allElements.length; i++) {
      const element = allElements[i] as HTMLElement;
      element.style.display = "none";
    }

    if(element){
      element.style.display ="inline-block";
      this.activeChartType = chartType;
    }
  }

}
