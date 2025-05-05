import { Directive, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollProgress]'
})
export class ScrollProgressDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    const element = this.el.nativeElement;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementHeight = rect.height;

    // Configuración de animación
    const fadeStart = 0.5;  // Comenzar a desaparecer cuando el 20% del elemento aún es visible
    const fadeEnd = 0.9;    // Completamente invisible cuando el 80% ha salido de la pantalla
    const movementDistance = 30; // Distancia de desplazamiento horizontal

    // Calcular progreso normalizado (0 a 1)
    let rawProgress = (windowHeight - rect.top - 100) / (windowHeight + elementHeight);

    // Ajustar la curva para ocultación temprana
    let visibilityProgress;
    if (rawProgress < fadeStart) {
      // Fase de aparición (suave)
      visibilityProgress = easeOutQuad(rawProgress / fadeStart);
    } else if (rawProgress > fadeEnd) {
      // Fase de desaparición (completa)
      visibilityProgress = 0;
    } else {
      // Fase de transición (desaparición acelerada)
      visibilityProgress = easeInQuad(1 - ((rawProgress - fadeStart) / (fadeEnd - fadeStart)));
    }

    // Funciones de easing para transiciones suaves
    function easeOutQuad(t: number): number {
      return t * (2 - t);
    }

    function easeInQuad(t: number): number {
      return t * t;
    }

    // Aplicar estilos
    this.renderer.setStyle(element, 'opacity', visibilityProgress);
    this.renderer.setStyle(element, 'transform', `translateX(${(1 - visibilityProgress) * movementDistance}px)`);
    this.renderer.setStyle(element, 'pointer-events', visibilityProgress > 0.1 ? 'auto' : 'none');
  }
}