import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { MarketplaceItemType } from '../types/Marketplace.type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _products: MarketplaceItemType[] = [
    {
      id: 1,
      title: 'Air Jordan 1 Mid',
      categorty: 'Sneackers',
      image:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/24750e81-85ed-4b0e-8cd8-becf0cd97b2f/air-jordan-1-mid-shoes-7wnzmw.png',
      description:
        'This offering of the Air Jordan 1 Mid comes constructed in a leather build featuring a White base with Tan overlays,',
      price: 179,
      isSelected: false,
    },
    {
      id: 2,
      title: 'Air Jordan 1 Mid Grey Fog/Black-White ',
      categorty: 'Sneackers',
      image:
        'https://media.stylerunner.com/cdn-cgi/image/fit=cover,q=90,f=jpeg,w=1000,h=1500/products/c5a44eb9/bq6472-015-phslh001-2000psd0.jpg',
      description:
        'This offering of the Air Jordan 1 Mid comes constructed in a leather build featuring a White base with Tan overlays,',
      price: 299,
      isSelected: false,
    },
    {
      id: 3,
      title: 'Jordan 1 Mid University',
      categorty: 'Sneackers',
      image:
        'https://dropoutmilano.com/cdn/shop/files/jordan-1-mid-university-blue-grey-dropout_700x700.png?v=1699879475',
      description:
        'Air Jordan continues to provide new twists on its beloved University Blue colorway, and this latest iteration is no different. Released in August.',
      price: 24.99,
      isSelected: false,
    },
    {
      id: 4,
      title: 'Adidas Ultraboost 21',
      categorty: 'Sneakers',
      image:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69866c2d85c94cf28558ac8300b2b828_9366/Ultraboost_21_Running_Shoes_Black_FY5390_01_standard.jpg',
      description:
        'Experience unparalleled comfort and performance with the latest Adidas Ultraboost 21. Designed for runners and fitness enthusiasts.',
      price: 129.99,
      isSelected: false,
    },
    {
      id: 5,
      title: 'Nike Air Max 97',
      categorty: 'Sneakers',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoXPh6kfEK4g1K1d6jTOYkRtBAgOHu7uuMC3D1nbVIVw&s',
      description:
        'Step into style and comfort with the iconic Nike Air Max 97. Featuring a sleek design and responsive cushioning for everyday wear.',
      price: 149.99,
      isSelected: false,
    },
    {
      id: 6,
      title: 'Puma RS-X3 Puzzle',
      categorty: 'Sneakers',
      image: 'https://i.ebayimg.com/images/g/pwsAAOSwVgFfD2at/s-l500.jpg',
      description:
        'Elevate your streetwear game with the Puma RS-X3 Puzzle. Bold design elements and comfortable fit make it a standout choice.',
      price: 89.99,
      isSelected: false,
    },
    {
      id: 7,
      title: 'Converse Chuck Taylor All Star',
      categorty: 'Sneakers',
      image:
        'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw919ee095/images/d_08/M7652_D_08X1.jpg?sw=406',
      description:
        'Classic meets modern with the Converse Chuck Taylor All Star. Timeless style and durable construction for everyday casual wear.',
      price: 59.99,
      isSelected: false,
    },
    {
      id: 8,
      title: 'Reebok Nano X CrossFit',
      categorty: 'Athletic Shoes',
      image:
        'https://static.runnea.co.uk/images/202210/reebok-nano-x-crossfit-trainers-400x400x80xX.png?1',
      description:
        'Dominate your CrossFit workouts in the Reebok Nano X. Engineered for performance, stability, and durability during intense training sessions.',
      price: 119.99,
      isSelected: false,
    },
    {
      id: 9,
      title: 'New Balance Fresh Foam 1080v11',
      categorty: 'Running Shoes',
      image:
        'https://www.runnersworld.com.au/cdn/shop/products/m1080b12_nb_02_i_480x480.webp?v=1665454945',
      description:
        'Experience plush comfort on your runs with the New Balance Fresh Foam 1080v11. Responsive cushioning for a smooth and supportive ride.',
      price: 134.99,
      isSelected: false,
    },
    {
      id: 10,
      title: 'Vans Old Skool',
      categorty: 'Skate Shoes',
      image:
        'https://images.vans.com/is/image/Vans/VN000D3H_Y28_HERO?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0',
      description:
        'Skate in style with the timeless Vans Old Skool. Durable construction and iconic design make it a go-to choice for skaters and streetwear enthusiasts.',
      price: 69.99,
      isSelected: false,
    },
    {
      id: 11,
      title: 'Under Armour HOVR Sonic 4',
      categorty: 'Running Shoes',
      image:
        'https://underarmour.scene7.com/is/image/Underarmour/3023543-002_DEFAULT?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688',
      description:
        'Unleash your speed with the Under Armour HOVR Sonic 4. Lightweight, responsive, and equipped with UA HOVR technology for a powerful run.',
      price: 109.99,
      isSelected: false,
    },
    {
      id: 12,
      title: 'Saucony Jazz Original Vintage',
      categorty: 'Sneakers',
      image: 'https://m.media-amazon.com/images/I/719vl0BP84L._AC_UL1500_.jpg',
      description:
        'Step back in time with the Saucony Jazz Original Vintage. Retro styling meets modern comfort for a casual and cool look.',
      price: 79.99,
      isSelected: false,
    },
    {
      id: 13,
      title: 'ASICS Gel-Kayano 27',
      categorty: 'Running Shoes',
      image:
        'https://images.asics.com/is/image/asics/1011A767_024_SR_RT_GLB?$sfcc-product$',
      description:
        'Conquer long-distance runs with the ASICS Gel-Kayano 27. Exceptional stability and cushioning for a smooth and supported ride.',
      price: 159.99,
      isSelected: false,
    },
  ];

  constructor() {}

  getProducts(): Observable<MarketplaceItemType[]> {
    return of(this._products);
  }

  markProductAsSelected(item: MarketplaceItemType) {
    item.isSelected = true;
  }

  markProductAsUnselected(item: MarketplaceItemType) {
    item.isSelected = false;
  }
}
