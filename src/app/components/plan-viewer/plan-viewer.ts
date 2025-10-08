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
    MatTooltipModule
  ],
  templateUrl: './plan-viewer.html',
  styleUrls: ['./plan-viewer.scss'] // 👈 corregido: plural y correcto
})
export class PlanViewerComponent implements OnInit, OnDestroy {
  markdownPath = '';
  tituloDocumento = '';
  private routeSub?: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Escucha los cambios de ruta para actualizar el documento dinámicamente
    this.routeSub = this.route.paramMap.subscribe((params: ParamMap) => {
      const tipo = params.get('tipo');
      const rutas: Record<string, string> = {
        unitarias: 'assets/plan_pruebas_unitarias.md',
        funcionales: 'assets/plan_pruebas_funcionales.md',
        e2e: 'assets/plan_pruebas_e2e.md',
        rendimiento: 'assets/plan_pruebas_rendimiento.md',
        seguridad: 'assets/plan_pruebas_seguridad.md',
        'carga-estres': 'assets/plan_pruebas_carga_estres.md'
      };

      this.markdownPath = rutas[tipo ?? ''] || '';
      this.tituloDocumento = `Plan de Pruebas ${tipo ? tipo.replace('-', ' ').toUpperCase() : ''}`;
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
