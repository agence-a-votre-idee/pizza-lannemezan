module.exports = [
  {
    name: 'Fromagère',
    description: 'Tomate ou crème fraîche, 3 fromages, mozzarella',
    prices: {
      petite: 6.0,
      moyenne: 10.5,
      grande: 12.5
    }
  },
  {
    name: 'Savoyarde',
    description: 'Crème fraîche, pommes de terre, raclette, reblochon, lardons, mozzarella',
    prices: {
      petite: 6,
      moyenne: 11.5,
      grande: 13.5
    }
  },
  {
    name: 'Chèvre',
    description: 'Tomate ou crème fraîche, mozzarella',
    prices: {
      petite: 5.5,
      moyenne: 9.0,
      grande: 11.0
    },
    option: {
      name: 'Miel',
      prices: {
        petite: 0.5,
        moyenne: 0.5,
        grande: 0.5
      }
    }
  }
]
