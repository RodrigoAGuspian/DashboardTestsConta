import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';


import pruebasConfig from '../../assets/pruebas-config.json';

interface PruebasConfig {
  [key: string]: {
    titulo: string;
    documento: string;
  };
}




@Component({
  selector: 'app-plan-viewer',
  standalone: true,
  imports: [
    CommonModule,
    MarkdownModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MatTabsModule
  ],
  templateUrl: './plan-viewer.html',
  styleUrls: ['./plan-viewer.scss']
})

export class PlanViewerComponent implements OnInit, OnDestroy {

  
  pconfig = pruebasConfig;
  
  markdownPath = '';
  tituloDocumento = '';
  private routeSub?: Subscription;
  ejemplos: { nombre: string; path: string }[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe((params: ParamMap) => {
    const tipo = params.get('tipo') as keyof typeof this.pconfig;
    const entry = this.pconfig[tipo];

    if (entry) {
      this.markdownPath = entry.documento;
      this.tituloDocumento = entry.titulo;

      // Cargar ejemplos dinámicamente
      this.ejemplos = Object.entries(entry.ejemplos || {}).map(([nombre, path]) => ({
        nombre: nombre.charAt(0).toUpperCase() + nombre.slice(1), // "angular" → "Angular"
        path
      }));
    } else {
      this.markdownPath = '';
      this.tituloDocumento = '';
      this.ejemplos = [];
    }
  });
  }

  descargarDocumento(): void {
    const link = document.createElement('a');
    link.href = this.markdownPath;
    link.download = this.markdownPath.split('/').pop() || 'documento.md';
    link.click();
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }
}
