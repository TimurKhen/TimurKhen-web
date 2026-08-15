import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Stack } from './stack/stack';
import { Projects } from './projects/projects';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Stack, Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
