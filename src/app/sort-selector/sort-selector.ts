import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  HostListener,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export type SortMethod = 'stars' | 'update';

export interface SortOption {
  id: SortMethod;
  label: string;
  icon: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-sort-selector',
  imports: [MatIconModule],
  templateUrl: './sort-selector.html',
  styleUrl: './sort-selector.scss',
  host: {
    class: 'sort-selector-host',
  },
})
export class SortSelector {
  selectedMethod = input<SortMethod>('stars');
  options = input<SortOption[]>([
    { id: 'stars', label: 'Stars', icon: 'star' },
    { id: 'update', label: 'History', icon: 'history' },
  ]);
  sortChange = output<SortMethod>();
  currentMethod = signal<SortMethod>('stars');
  isOpen = signal<boolean>(false);
  activeOption = computed(() => {
    const list = this.options();
    const current = this.currentMethod();
    return list.find((opt) => opt.id === current) || list[0];
  });
  private elementRef = inject(ElementRef);

  constructor() {
    effect(() => {
      this.currentMethod.set(this.selectedMethod());
    });
  }

  toggleOpen(): void {
    this.isOpen.update((v) => !v);
  }

  selectOption(method: SortMethod): void {
    this.currentMethod.set(method);
    this.sortChange.emit(method);
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }

  @HostListener('keydown.escape')
  onEscape(): void {
    this.isOpen.set(false);
  }
}
