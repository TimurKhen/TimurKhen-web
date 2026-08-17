import { Component, computed, input } from '@angular/core';
import { StatusShower } from './status-shower/status-shower';
import { HackatonData } from '../hackaton';

@Component({
  selector: 'app-hackaton',
  imports: [StatusShower],
  templateUrl: './hackaton.html',
  styleUrl: './hackaton.scss',
})
export class Hackaton {
  data = input.required<HackatonData>();

  name = computed(() => {
    return this.data().name;
  });

  image = computed(() => {
    return this.data().image;
  });

  status = computed(() => {
    return {
      status: this.data().status,
      color: this.data().color,
      icon: this.data().icon,
    };
  });
}
