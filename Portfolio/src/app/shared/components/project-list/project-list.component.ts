import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Image, Project } from '../../../core/models/entities';

@Component({
  selector: 'app-project-list',
  imports: [CommonModule, NgStyle],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {



  imagenesProjecto1: Image[] = [
    { src: 'assets/img/inicio.png', alt: 'Imagen 1' },
    { src: 'assets/img/tachado.PNG', alt: 'Imagen 2' },
    { src: 'assets/img/takeAway.PNG', alt: 'Imagen 3' },
    { src: 'assets/img/zonas.PNG', alt: 'Imagen 4' },]

  listaProyectos: Project[] = [
    {
      id: 1, nombre: 'Order Superfast',
      descripcion: 'Aplicacion para dispositivos moviles que permite a los empleados de una empresa de comida gestionar los pedidos de los clientes. \n\n Projecto realizado con android studio y java.',

      imagenes: [
        { src: 'assets/img/inicio.png', alt: 'Imagen 1' },
        { src: 'assets/img/tachado.PNG', alt: 'Imagen 2' },
        { src: 'assets/img/takeAway.PNG', alt: 'Imagen 3' },
        { src: 'assets/img/zonas.PNG', alt: 'Imagen 4' },]
    },
    { id: 2, nombre: 'Proyecto 2', descripcion: 'Descripción del proyecto 2', imagenes: [] },
    { id: 3, nombre: 'Proyecto 3', descripcion: 'Descripción del proyecto 3', imagenes: [] },

  ];

  proyectoSeleccionado: Project = this.listaProyectos[0];
  imagenesProjectoSeleccionado: Image[] = this.imagenesProjecto1;


  onProjectSelected(project: number) {
    console.log('Proyecto seleccionado:', project);
    switch (project) {
      case 0:
        this.imagenesProjectoSeleccionado = this.imagenesProjecto1;
        this.proyectoSeleccionado = this.listaProyectos[0];
        break;
      case 1:
        this.imagenesProjectoSeleccionado = this.imagenesProjecto1; // Cambia a las imágenes del proyecto 2
        this.proyectoSeleccionado = this.listaProyectos[1]; // Cambia a los detalles del proyecto 2
        break;
      case 2:
        this.imagenesProjectoSeleccionado = this.imagenesProjecto1; // Cambia a las imágenes del proyecto 3
        this.proyectoSeleccionado = this.listaProyectos[2]; // Cambia a los detalles del proyecto 3
        break;
      default:
        this.imagenesProjectoSeleccionado = this.imagenesProjecto1; // Cambia a las imágenes por defecto
        this.proyectoSeleccionado = this.listaProyectos[0]; // Cambia a los detalles por defecto
    }
  }
}
