import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  findAll() {
    // Retorna uma lista fixa com as categorias principais do design.
    return [
      { id: 1, name: 'Dining', imageUrl: 'url-para-imagem-dining' },
      { id: 2, name: 'Living', imageUrl: 'url-para-imagem-living' },
      { id: 3, name: 'Bedroom', imageUrl: 'url-para-imagem-bedroom' },
    ];
  }
}
