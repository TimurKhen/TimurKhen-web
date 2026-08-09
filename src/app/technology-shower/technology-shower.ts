import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from '@angular/core';

export type SupportedTechnology =
  'Angular' | 'JS' | 'TS' | 'HTML' | 'CSS' | 'SCSS' | 'Python' | string;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-technology-shower',
  imports: [],
  templateUrl: './technology-shower.html',
  styleUrl: './technology-shower.scss',
  host: {
    '[class.open]': 'isOpen()',
    '[attr.aria-expanded]': 'isOpen()',
    role: 'button',
    tabindex: '0',
    '(keydown.space)': 'handleKeydown($event)',
    '(keydown.enter)': 'handleKeydown($event)',
  },
})
export class TechnologyShower {
  technology = input.required<SupportedTechnology>();
  canOpen = input<boolean>(true);
  canClose = input<boolean>(true);
  _isOpenInput = input<boolean>(false);
  customGradient = input<string | null>(null);
  size = input<'sm' | 'md' | 'lg' | 'xl'>('md');
  isBorderRounded = input<boolean>(true);
  isOpen = signal<boolean>(false);

  imageError = signal<boolean>(false);
  gradientStyle = computed(() => {
    const override = this.customGradient();
    if (override) return override;

    const tech = (this.technology() || '').toString().toLowerCase();

    switch (tech) {
      case 'angular':
        return 'linear-gradient(135deg, #F00B51 0%, #7300EA 100%)';
      case 'js':
        return 'linear-gradient(135deg, #F7DF1E 0%, #E5A900 100%)';
      case 'ts':
        return 'linear-gradient(135deg, #3178C6 0%, #194F88 100%)';
      case 'html':
        return 'linear-gradient(135deg, #E34F26 0%, #F16529 100%)';
      case 'css':
        return 'linear-gradient(135deg, #1572B6 0%, #29A9DF 100%)';
      case 'scss':
      case 'sass':
        return 'linear-gradient(135deg, #CF649A 0%, #902F62 100%)';
      case 'python':
        return 'linear-gradient(135deg, #3776AB 0%, #1E415E 100%)';
      default:
        return 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)';
    }
  });

  textColor = computed(() => {
    const tech = (this.technology() || '').toString().toLowerCase();
    if (tech === 'js' || tech === 'javascript') {
      return '#000000';
    }
    return '#FFFFFF';
  });

  initialLetter = computed(() => {
    const t = this.technology() || '';
    return t.charAt(0).toUpperCase();
  });

  constructor() {
    effect(() => {
      this.isOpen.set(this._isOpenInput());
    });
  }

  onMouseEnter(): void {
    if (this.canOpen()) {
      this.isOpen.set(true);
    }
  }

  onMouseLeave(): void {
    if (this.canClose()) {
      this.isOpen.set(false);
    }
  }

  handleImageError(): void {
    this.imageError.set(true);
  }

  handleKeydown(event: Event): void {
    event.preventDefault();
    if (this.isOpen()) {
      if (this.canClose()) {
        this.isOpen.set(false);
      }
    } else {
      if (this.canOpen()) {
        this.isOpen.set(true);
      }
    }
  }
}
