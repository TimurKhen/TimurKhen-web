import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-status-shower',
  imports: [],
  templateUrl: './status-shower.html',
  styleUrl: './status-shower.scss',
})
export class StatusShower {
  data = input.required<{
    status: string;
    color: string | null;
    icon: string | null;
  }>();

  statusName = computed(() => this.data()?.status);
  iconInput = computed(() => this.data()?.icon);
  color = computed(() => {
    if (!this.data().color) {
      return 'linear-gradient(to bottom, rgba(254, 255, 196, 0.5), rgba(255, 236, 110, 0.5))';
    } else {
      return this.data().color;
    }
  });
}
