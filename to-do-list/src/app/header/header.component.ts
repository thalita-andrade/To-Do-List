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
    this.themeService.isDarkTheme() ? this.themeService.setLightTheme() : this.themeService.setDarkTheme();
  }

}
