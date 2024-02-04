import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylesService {

  constructor() { }

  getColorClass(color: string): string {
    switch (color) {
      case 'red':
        return 'text-danger';
      case 'blue':
        return 'text-primary';
      default:
        return '';
    }
  }
}
