import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Hackaton } from './hackaton/hackaton';
import { HackatonData } from './hackaton';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-hackatons',
  imports: [Hackaton, MatIconModule],
  templateUrl: './hackatons.html',
  styleUrl: './hackatons.scss',
})
export class Hackatons {
  readonly hackatons = signal<HackatonData[]>([
    {
      id: 'technostrelka-2026',
      name: 'Technostrelka',
      edition: '2026 International Edition',
      subtitle: 'International IT & Applied Engineering Hackathon',
      organizer: 'Technostrelka Global Consortium',
      image: 'technostrelka.svg',
      status: '3rd Place Award',
      placementTag: '🏆 3rd Place Laureate · International Podium',
      placementType: 'podium',
      color: 'linear-gradient(135deg, rgba(226, 180, 125, 0.25), rgba(217, 119, 87, 0.15))',
      icon: '3place.webp',
      year: '2026',
      track: 'Full-Stack Web & Applied Digital Systems',
      role: 'Lead Frontend Developer',
      description:
        'An intensive continuous development marathon competing against premier engineering teams worldwide. Designed, engineered, and pitched a complete full-stack web application within a strict 72-hour window, evaluated on architecture robustness, UX elegance, and practical viability.',
      solutionSummary:
        'Architected a reactive Angular client with real-time state synchronization and fluid mobile-first ergonomics, earning a coveted 3rd place bronze podium distinction.',
      achievements: [
        'Awarded 3rd Place Bronze Medal on the international competitive podium',
        'Engineered production-grade prototype under non-stop 72-hour sprint constraints',
        'Designed responsive UI architecture with zero external dependency bloat',
        'Presented live executive pitch to enterprise jury and industry architects',
      ],
      technologies: ['Angular', 'TypeScript', 'SCSS', 'REST API', 'Reactive Streams'],
      metrics: [
        { label: 'Sprint Duration', value: '72 Hours' },
        { label: 'Award', value: '3rd Place' },
        { label: 'Scope', value: 'International' },
      ],
    },
    {
      id: 'prod-2026',
      name: 'PROD Olympiad',
      edition: '2026 National Final',
      subtitle: 'National Industrial Programming Olympiad & Championship',
      organizer: 'Central University & Tinkoff / HSE',
      image: 'prod.svg',
      status: 'National Finalist',
      placementTag: '🎯 National Finalist · Top Engineering Teams',
      placementType: 'finalist',
      color: 'linear-gradient(135deg, rgba(238, 216, 203, 0.2), rgba(217, 119, 87, 0.1))',
      icon: null,
      year: '2026',
      track: 'Industrial Software Engineering & High-Concurrency Systems',
      role: 'Frontend & Architecture Specialist',
      description:
        'The country’s premier competition in industrial programming, challenging elite developers to construct robust software adhering to enterprise reliability, rigorous code quality gates, and algorithmic precision.',
      solutionSummary:
        'Qualified through multiple competitive rounds to represent the top tier of national engineering talent at the in-person finals, building high-throughput frontend workflows.',
      achievements: [
        'Recognized as National Finalist among thousands of competitive applicants',
        'Passed automated CI/CD code quality benchmarks and strict AOT test suites',
        'Tackled complex algorithmic state management with predictable runtime complexity',
        'Collaborated on high-velocity team branch git workflows under tight deadlines',
      ],
      technologies: ['Angular', 'TypeScript', 'Industrial CI/CD', 'Algorithms', 'AOT Testing'],
      metrics: [
        { label: 'Standing', value: 'Finalist' },
        { label: 'Organizers', value: 'Tinkoff & CU' },
        { label: 'Focus', value: 'Industrial QA' },
      ],
    },
    {
      id: 'sber-solution',
      name: 'Sber Digital Solutions',
      edition: '2025–2026 Corporate Track',
      subtitle: 'Enterprise Innovation & Case Distribution Hackathon',
      organizer: 'Sber Ecosystem Challenge',
      image: 'prod.svg',
      status: 'Solution Nominee',
      placementTag: '⚡ Solution Nominee · Corporate Track',
      placementType: 'special',
      color: 'linear-gradient(135deg, rgba(200, 200, 200, 0.15), rgba(46, 43, 38, 0.4))',
      icon: null,
      year: '2025–2026',
      track: 'Corporate Decision Tools & Operational Optimization',
      role: 'Full-Stack Frontend Developer',
      description:
        'Delivered a streamlined web portal enabling enterprise innovation teams to benchmark technological viability, automate business case assessment, and collect distributed team feedback.',
      solutionSummary:
        'Engineered the complete frontend client within 48 hours, including interactive weighted decision matrices and Docker-ready distribution.',
      achievements: [
        'Nominated corporate MVP solution for operational innovation management',
        'Constructed interactive multi-criteria weighted ranking matrix',
        'Integrated containerized Docker runtime for seamless judge reproducibility',
      ],
      technologies: ['Angular', 'TypeScript', 'Docker', 'SCSS', 'REST API'],
      metrics: [
        { label: 'Sprint', value: '48 Hours' },
        { label: 'Deliverable', value: 'Working MVP' },
        { label: 'Stack', value: 'Angular + Docker' },
      ],
    },
  ]);
}
