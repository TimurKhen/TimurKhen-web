import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HackatonData } from '../hackaton';
import { TechnologyShower } from '../../technology-shower/technology-shower';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-hackaton',
  imports: [MatIconModule, TechnologyShower],
  templateUrl: './hackaton.html',
  styleUrl: './hackaton.scss',
})
export class Hackaton {
  data = input.required<HackatonData>();

  name = computed(() => this.data().name);
  image = computed(() => this.data().image);
  placementTag = computed(() => this.data().placementTag);
  placementType = computed(() => this.data().placementType);
  icon = computed(() => this.data().icon);
  description = computed(() => this.data().description);
  solutionSummary = computed(() => this.data().solutionSummary);
  technologies = computed(() => this.data().technologies);
  metrics = computed(() => this.data().metrics);
}
