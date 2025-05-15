import { CommonModule, NgStyle } from '@angular/common';
import { Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { Image, Project } from '../../../core/models/entities';

@Component({
  selector: 'app-project-list',
  imports: [CommonModule, NgStyle],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {

  @ViewChild('carouselProjectImages') carouselProjectImages: ElementRef;
  renderer: Renderer2 = inject(Renderer2);

  imagenesProyecto1: Image[] = [
    { src: 'assets/img/inicio.png', alt: 'Imagen 1' },
    { src: 'assets/img/tachado.PNG', alt: 'Imagen 2' },
    { src: 'assets/img/takeAway.PNG', alt: 'Imagen 3' },
    { src: 'assets/img/zonas.PNG', alt: 'Imagen 4' },]

  listaProyectos: Project[] = [
    {
      id: 1, nombre: 'Order Superfast',
      descripcion: 'Esta aplicación móvil está diseñada para ayudar a los empleados de una empresa de comida a gestionar pedidos de clientes de manera eficiente. Permite visualizar, administrar y actualizar pedidos en tiempo real, asegurando un flujo de trabajo ágil dentro del negocio.\n\n Características principales: gestión de pedidos en tiempo real, interfaz intuitiva, alertas sobre nuevos pedidos o actualizaciones, uso de SQLite para almacenar información de manera eficiente\n\n Proyecto realizado con android studio y java.',

      imagenes: [
        { src: 'assets/img/inicio.png', alt: 'Imagen 1' },
        { src: 'assets/img/tachado.PNG', alt: 'Imagen 2' },
        { src: 'assets/img/takeAway.PNG', alt: 'Imagen 3' },
        { src: 'assets/img/zonas.PNG', alt: 'Imagen 4' },]
    },
    {
      id: 2, nombre: 'El Pisito', descripcion: 'El Pisito es un proyecto personal desarrollado para poner en práctica conocimientos en Spring Boot (backend), MySQL (base de datos) y Angular (frontend). La aplicación permite a las inmobiliarias gestionar sus propiedades de manera eficiente, facilitando la administración de inmuebles y su contenido visual. \n\n Caracteristicas principales: Autenticación de usuarios con diferentes roles, gestión de inmuebles, carga y eliminación de imágenes y/o archivos, base de datos MySQL y frontend en Angular para desarrollar una interfaz moderna y responsiva y así tener una experiencia fluida. \n\n Tecnologías utilizadas: para el backend se ha utilizado Spring Boot, Spring security y MySQL mientras que para el frontend se ha usado Angular, TypeScript y Bootstrap', imagenes: [
        { src: 'assets/img/home.PNG', alt: 'Imagen 1' },
        { src: 'assets/img/inmobiliaria-lista-inmuebles.PNG', alt: 'Imagen 2' },
        { src: 'assets/img/inmobiliaria-editor-imagenes-inmueble.PNG', alt: 'Imagen 3' },
        { src: 'assets/img/inmobiliaria-add-archivos-inmueble.PNG', alt: 'Imagen 4' },
        { src: 'assets/img/inmobiliaria-finder.PNG', alt: 'Imagen 5' },
        { src: 'assets/img/inmobiliaria-finder-example.PNG', alt: 'Imagen 6' },

      ]
    },


  ];

  //{ id: 3, nombre: 'Proyecto 3', descripcion: 'Descripción del proyecto 3', imagenes: [] },

  proyectoSeleccionado: Project = this.listaProyectos[0];
  imagenesProyectoSeleccionado: Image[] = this.imagenesProyecto1;


  onProjectSelected(project: number) {
    console.log('Proyecto seleccionado:', project);
    this.removeChilds();
    switch (project) {
      case 0:
        this.imagenesProyectoSeleccionado = this.listaProyectos[0].imagenes;
        this.proyectoSeleccionado = this.listaProyectos[0];
        break;
      case 1:
        this.imagenesProyectoSeleccionado = this.listaProyectos[1].imagenes; // Cambia a las imágenes del proyecto 2
        this.proyectoSeleccionado = this.listaProyectos[1]; // Cambia a los detalles del proyecto 2
        break;
      case 2:
        this.imagenesProyectoSeleccionado = this.listaProyectos[2].imagenes; // Cambia a las imágenes del proyecto 3
        this.proyectoSeleccionado = this.listaProyectos[2]; // Cambia a los detalles del proyecto 3
        break;
      default:
        this.imagenesProyectoSeleccionado = this.listaProyectos[0].imagenes; // Cambia a las imágenes por defecto
        this.proyectoSeleccionado = this.listaProyectos[0]; // Cambia a los detalles por defecto
    }
  }


  removeChilds() {
    let childs = this.carouselProjectImages.nativeElement.children;

    if (childs.length == 0) {
      return;
    }

    for (let i = 0; i < childs.length; i++) {
      this.renderer.removeClass(childs[i], 'active');
    }
    this.renderer.addClass(childs[0], 'active');
  }
}
