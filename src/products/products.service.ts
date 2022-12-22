import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const newProduct = new Product(
      Math.random().toString(),
      title,
      desc,
      price,
    );

    this.products.push(newProduct);

    console.log(newProduct);

    return newProduct.id;
  }

  getProducts() {
    return [...this.products];
  }

  getProduct(productId: string) {
    const product = { ...this.products.find((prod) => prod.id === productId) };

    if (!product) {
      throw new NotFoundException('Could Not find Product');
    }

    return { ...product };
  }
}
