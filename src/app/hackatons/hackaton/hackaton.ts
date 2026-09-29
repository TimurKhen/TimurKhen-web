import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HackatonData } from '../hackaton';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-hackaton',
  imports: [MatIconModule],
  templateUrl: './hackaton.html',
  styleUrl: './hackaton.scss',
})
export class Hackaton {
  data = input.required<HackatonData>();

  name = computed(() => this.data().name);
  edition = computed(() => this.data().edition);
  subtitle = computed(() => this.data().subtitle);
  organizer = computed(() => this.data().organizer);
  image = computed(() => this.data().image);
  status = computed(() => this.data().status);
  placementTag = computed(() => this.data().placementTag);
  placementType = computed(() => this.data().placementType);
  icon = computed(() => this.data().icon);
  year = computed(() => this.data().year);
  track = computed(() => this.data().track);
  role = computed(() => this.data().role);
  description = computed(() => this.data().description);
  solutionSummary = computed(() => this.data().solutionSummary);
  achievements = computed(() => this.data().achievements);
  technologies = computed(() => this.data().technologies);
  metrics = computed(() => this.data().metrics);
}
