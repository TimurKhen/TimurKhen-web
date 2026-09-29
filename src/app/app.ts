import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Stack } from './stack/stack';
import { Projects } from './projects/projects';
import { Hackatons } from './hackatons/hackatons';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [Stack, Projects, Hackatons],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
