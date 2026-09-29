import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProjectFilterCategory, ProjectItem } from './project.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-projects',
  imports: [MatIconModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  host: {
    '(keydown.escape)': 'closeModal()',
  },
})
export class Projects {
  activeFilter = signal<ProjectFilterCategory>('all');
  selectedProject = signal<ProjectItem | null>(null);

  readonly allProjects = signal<ProjectItem[]>([
    {
      id: 'kptube',
      name: 'KPTube',
      subtitle: 'Video Streaming & Playback Client',
      category: 'web',
      categoryLabel: 'Web Application',
      description:
        'A high-performance streaming web application built with Angular and RxJS, featuring custom video playback controls, asynchronous playlist queues, and responsive feed architecture.',
      fullOverview:
        'KPTube was engineered to explore low-latency streaming interactions and fluid client-side media consumption. Designed from the ground up to eliminate playback stutter, it orchestrates multi-stream state transitions using reactive RxJS pipelines and clean component decomposition.',
      technicalArchitecture:
        'Utilizes an isolated HTML5 video wrapper directive that pipes player events directly into reactive behavior streams. Feed queries are debounced and rendered using optimized track-by loops, and playlist queue mutations maintain chronological playback continuity even on low-bandwidth connections.',
      highlights: [
        'Custom reactive video playback engine with keyboard controls & scrubbing',
        'Optimized media feed layout with lazy-loaded asset buffers',
        'RxJS state pipelines managing playlist queues & playback history',
        'Adaptive mobile & desktop touch navigation layouts',
      ],
      techStack: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'HTML5 Video API'],
      githubUrl: 'https://github.com/TimurKhen/kpTubeFront',
      role: 'Lead Frontend Engineer',
      year: '2024 – 2026',
      status: 'Active Repository',
      metrics: [
        { label: 'Architecture', value: 'Reactive RxJS' },
        { label: 'Bundle', value: 'Optimized AOT' },
        { label: 'Performance', value: '60 FPS UI' },
      ],
    },
    {
      id: 'sber-solution',
      name: 'FabricOfSolutions',
      subtitle: 'Corporate Innovation & Decision Matrix Portal',
      category: 'hackathon',
      categoryLabel: 'Hackathon & Enterprise',
      description:
        'An enterprise decision-support platform designed for the Sber corporate hackathon track, allowing distributed teams to aggregate business challenges and benchmark viability.',
      fullOverview:
        'Developed during an intensive competitive sprint, FabricOfSolutions delivers structured decision workflows for enterprise stakeholders. It bridges the gap between grassroots technical innovation and corporate steering committees by automating feasibility scoring.',
      technicalArchitecture:
        'Features a multi-criteria decision matrix with real-time weighted aggregation algorithms. The user interface provides role-tailored workspaces for analysts, contributors, and committee reviewers with immediate spreadsheet-style inline editing.',
      highlights: [
        'Interactive weighted decision matrix for automated feasibility scoring',
        'High-density data tables with client-side multi-column sorting',
        'Role-segregated viewports tailored for analysts and corporate sponsors',
        'Containerized production delivery pipeline configured with Docker',
      ],
      techStack: ['Angular', 'TypeScript', 'SCSS', 'REST API', 'Docker'],
      githubUrl: 'https://github.com/TimurKhen/sber-solution',
      role: 'Full-Stack Frontend Developer',
      year: '2025 – 2026',
      status: 'Hackathon Nominee',
      metrics: [
        { label: 'Sprint Duration', value: '48 Hours' },
        { label: 'Deployment', value: 'Dockerized' },
        { label: 'Workspaces', value: 'Role-Based' },
      ],
    },
    {
      id: 'krutoy-toose',
      name: 'Krutoy Toose',
      subtitle: 'Interactive Social Gathering & Event Coordinator',
      category: 'web',
      categoryLabel: 'Social Platform',
      description:
        'A dynamic event management application that streamlines collaborative party itineraries, real-time RSVP confirmations, and democratic activity voting.',
      fullOverview:
        'Krutoy Toose addresses the coordination friction of group gatherings. By replacing unstructured messaging chats with dedicated, interactive event hubs, attendees can view schedules, sign up for shared logistics items, and vote on activities in real time.',
      technicalArchitecture:
        'Lightweight component architecture prioritizing minimal client bundle size and rapid warm-start execution. Incorporates custom CSS transitions and responsive event itinerary rendering with offline-friendly local state caching.',
      highlights: [
        'Collaborative itinerary builder with dynamic time-slot scheduling',
        'Interactive attendee checklist & equipment allocation manager',
        'Democratic activity polling system with instant vote visualization',
        'Fluid touch interactions tuned for handheld mobile viewports',
      ],
      techStack: ['Angular', 'TypeScript', 'CSS3', 'HTML5'],
      githubUrl: 'https://github.com/TimurKhen/krutoy-toose',
      role: 'Creator & Frontend Architect',
      year: '2024',
      status: 'Production MVP',
      metrics: [
        { label: 'Design System', value: 'Custom CSS' },
        { label: 'Platform', value: 'Mobile-First' },
        { label: 'Reactivity', value: 'Instant Voting' },
      ],
    },
    {
      id: 'gzgs',
      name: 'GZGS',
      subtitle: 'Suburban Infrastructure & Regional Directory Portal',
      category: 'web',
      categoryLabel: 'Civic & Regional Tech',
      description:
        'A civic information portal connecting suburban communities with local infrastructure notices, regional service directories, and municipal utilities.',
      fullOverview:
        'GZGS (Город За Городом / City Outside City) serves suburban townships by aggregating localized service information, urgent utility announcements, municipal directories, and geographic points of interest into an accessible single-page web portal.',
      technicalArchitecture:
        'Built with a modular service registry pattern that decouples category endpoints from presentation cards. Implements strict WCAG accessibility guidelines, keyboard tab stops, and optimized image compression for rural network conditions.',
      highlights: [
        'Categorized regional utility directory with fast client search',
        'Real-time municipal advisory notices and maintenance bulletins',
        'Strict keyboard accessibility & screen-reader friendly typography',
        'Lightweight footprint tuned for low-bandwidth cellular networks',
      ],
      techStack: ['Angular', 'TypeScript', 'SCSS', 'REST API'],
      githubUrl: 'https://github.com/TimurKhen/GZGS-frontend',
      role: 'Frontend Developer',
      year: '2024 – 2025',
      status: 'Archived Release',
      metrics: [
        { label: 'Accessibility', value: 'WCAG AA' },
        { label: 'Network', value: 'Low-Bandwidth' },
        { label: 'Format', value: 'Regional SPA' },
      ],
    },
    {
      id: 'timurkhen-web',
      name: 'TimurKhen Web',
      subtitle: 'Zoneless Angular SSR Portfolio & Interactive System',
      category: 'tool',
      categoryLabel: 'Systems & Architecture',
      description:
        'The production architecture powering this portfolio: zoneless Angular Server-Side Rendering, physics-driven floating badge interactions, and an editorial Anthropic aesthetic.',
      fullOverview:
        'Engineered to showcase modern Angular paradigms with zero Zone.js overhead. Blends high-fidelity physics math for interactive floating pills, an Express server-side rendering pipeline, and custom editorial typography.',
      technicalArchitecture:
        'Employs Angular 21/22 zoneless signals for fine-grained reactive DOM reconciliation. The server-rendered HTML shell delivers instant first-contentful-paint, seamlessly hydraing client event listeners for responsive mouse-repulsion geometry.',
      highlights: [
        'Zoneless Angular runtime with signals-driven change detection',
        'Hybrid Server-Side Rendering (SSR) pipeline powered by Express',
        'Cursor repulsion physics math for floating social pill elements',
        'Anthropic-inspired editorial layout with custom serif typography',
      ],
      techStack: ['Angular', 'SSR', 'TypeScript', 'SCSS', 'Express'],
      githubUrl: 'https://github.com/TimurKhen/TimurKhen-web',
      role: 'Author & Maintainer',
      year: '2026',
      status: 'Current Platform',
      metrics: [
        { label: 'Runtime', value: 'Zoneless SSR' },
        { label: 'Design Tone', value: 'Anthropic Dark' },
        { label: 'Signals', value: '100% Native' },
      ],
    },
  ]);

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    const list = this.allProjects();
    if (filter === 'all') return list;
    return list.filter((p) => p.category === filter);
  });

  filterCounts = computed(() => {
    const list = this.allProjects();
    return {
      all: list.length,
      web: list.filter((p) => p.category === 'web').length,
      hackathon: list.filter((p) => p.category === 'hackathon').length,
      tool: list.filter((p) => p.category === 'tool').length,
    };
  });

  setFilter(filter: ProjectFilterCategory): void {
    this.activeFilter.set(filter);
  }

  openModal(project: ProjectItem): void {
    this.selectedProject.set(project);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(): void {
    this.selectedProject.set(null);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}
