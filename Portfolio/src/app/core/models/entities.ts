export interface Project {
    id: number;
    nombre: string;
    descripcion: string;
    imagenes: Image[];
}

export interface Image {
    src: string;
    alt: string;
}