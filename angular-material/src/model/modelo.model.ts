import { map } from "rxjs";

export enum Colors {
    primary = 'primary',
    accent  = 'accent',
    warn    = 'warn',
    success = 'success',
    info    = 'info',
    warning = 'warning ',
}

export const descripcionComponent = 
    'componente usa por defecto el color primary, para hacer uso de los otros colores solo debe cambiar la propiedad `color=" " ` por cualquiera de los siguientes opciones : ';
    
    export declare type color2 = 'primary' | 'accent' | 'warn' | undefined;
