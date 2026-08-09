import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Stack } from './stack/stack';
import { Projects } from './projects/projects';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Stack, Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['en', 'ru']);

    const browserLang = navigator.language.split('-')[0];

    const defaultLang = browserLang.match(/en|ru/) ? browserLang : 'en';

    this.translate.use(defaultLang);
  }
}
