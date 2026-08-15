import { Component, input, OnInit, signal } from '@angular/core';

interface items {
  name: string;
  url: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {
  items = input<items[]>([
    {
      name: 'KPTube',
      url: 'https://github.com/TimurKhen/kpTubeFront',
    },
    {
      name: 'Krutoy Toose',
      url: 'https://github.com/TimurKhen/krutoy-toose',
    },
    {
      name: 'GZGS',
      url: 'https://github.com/TimurKhen/GZGS-frontend',
    },
    {
      name: 'FabricOfSolutions',
      url: 'https://github.com/TimurKhen/sber-solution',
    },
  ]);
  direction = input<'left' | 'right'>('left');
  speed = input<'slow' | 'fast'>('fast');

  isAnimated = signal<boolean>(false);

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        this.isAnimated.set(true);
      }
    }
  }
}
