export interface CoffeType {
  image: string
  name: string
  description: string
  specifications: string[]
  price: string
  quantity: number
}

export const coffes: CoffeType[] = [
  {
    image: 'public/assets/expresso-tradicional.png',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    specifications: ['Tradicional'],
    price: '4,90',
    quantity: 1,
  },
  {
    image: 'public/assets/expresso-americano.png',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    specifications: ['Tradicional'],
    price: '4,90',
    quantity: 1,
  },
  {
    image: 'public/assets/expresso-cremoso.png',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    specifications: ['Tradicional'],
    price: '4,90',
    quantity: 1,
  },
  {
    image: 'public/assets/expresso-gelado.png',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    specifications: ['Tradicional', 'Gelado'],
    price: '4,90',
    quantity: 1,
  },
  {
    image: 'public/assets/cafe-leite.png',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    specifications: ['Tradicional', 'Com leite'],
    price: '7,90',
    quantity: 1,
  },
  {
    image: 'public/assets/latte.png',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    specifications: ['Tradicional', 'Com leite'],
    price: '8,90',
    quantity: 1,
  },
  {
    image: 'public/assets/capuccino.png',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    specifications: ['Tradicional', 'Com leite'],
    price: '9,90',
    quantity: 1,
  },
  {
    image: 'public/assets/macchiato.png',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    specifications: ['Tradicional', 'Com leite'],
    price: '8,90',
    quantity: 1,
  },
  {
    image: 'public/assets/mocaccino.png',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    specifications: ['Tradicional', 'Com leite'],
    price: '10,90',
    quantity: 1,
  },
  {
    image: 'public/assets/chocolate-quente.png',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    specifications: ['Tradicional', 'Com leite'],
    price: '10,90',
    quantity: 1,
  },
  {
    image: 'public/assets/cubano.png',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    specifications: ['Especial', 'Alcoólico', 'Gelado'],
    price: '13,90',
    quantity: 1,
  },
  {
    image: 'public/assets/havaiano.png',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    specifications: ['Especial'],
    price: '10,90',
    quantity: 1,
  },
  {
    image: 'public/assets/arabe.png',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    specifications: ['Especial'],
    price: '11,90',
    quantity: 1,
  },
  {
    image: 'public/assets/irlandes.png',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    specifications: ['Especial', 'Alcoólico'],
    price: '14,90',
    quantity: 1,
  },
]
