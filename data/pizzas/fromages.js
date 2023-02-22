module.exports = [
  {
    name: 'Fromagère',
    description: 'Tomate ou crème fraîche, 3 fromages, mozzarella',
    prices: {
      petite: 6.5,
      moyenne: 11.5,
      grande: 13.5
    }
  },
  {
    name: 'Savoyarde',
    description: 'Crème fraîche, pommes de terre, raclette, reblochon, lardons, mozzarella',
    prices: {
      petite: 6.5,
      moyenne: 12.5,
      grande: 14.5
    }
  },
  {
    name: 'Chèvre',
    description: 'Tomate ou crème fraîche, mozzarella',
    prices: {
      petite: 6,
      moyenne: 10.0,
      grande: 12.0
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
