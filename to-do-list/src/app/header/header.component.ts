import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  toggleTheme() {
    console.log("cliquei")
    if (this.themeService.isDarkTheme()) {
      console.log("entrou if")
      this.themeService.setLightTheme();
    } else {
      console.log("entrou else")
      this.themeService.setDarkTheme()
    }
  }

}
