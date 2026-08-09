import { Component, HostListener } from '@angular/core';
import { TechnologyShower } from '../technology-shower/technology-shower';

@Component({
  selector: 'app-stack',
  imports: [TechnologyShower],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
})
export class Stack {
  stack = ['Angular', 'JS', 'TS', 'HTML', 'CSS', 'SCSS', 'Python'];

  mouseX = 0;
  mouseY = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
    this.mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
  }

  getTransform(factor: number): string {
    let x = this.mouseX * factor * 40;
    let y = this.mouseY * factor * 40;

    const limit = 25;

    x = this.clamp(x, -limit, limit);
    y = this.clamp(y, -limit, limit);

    return `translate(${x}px, ${y}px)`;
  }

  private clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }
}
