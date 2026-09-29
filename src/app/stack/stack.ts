import { Component, OnInit } from '@angular/core';
import { TechnologyShower } from '../technology-shower/technology-shower';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stack',
  imports: [TechnologyShower, MatIconModule],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
  host: {
    '(window:resize)': 'onResize()',
    '(document:mousemove)': 'onMouseMove($event)',
  },
})
export class Stack implements OnInit {
  isMobile = false;
  stack = ['Angular', 'JS', 'TS', 'HTML', 'CSS', 'SCSS', 'Docker'];

  mouseX = 0;
  mouseY = 0;

  ngOnInit() {
    this.checkScreenSize();
  }

  onResize() {
    this.checkScreenSize();
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isMobile && typeof window !== 'undefined') {
      this.mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      this.mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    }
  }

  getTransform(factor: number): string {
    if (!this.isMobile) {
      let x = this.mouseX * factor * 40;
      let y = this.mouseY * factor * 40;

      const limit = 25;
      x = this.clamp(x, -limit, limit);
      y = this.clamp(y, -limit, limit);

      return `translate(${x}px, ${y}px)`;
    }
    return `translate(0px, 0px)`;
  }

  private checkScreenSize() {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  private clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }
}
