const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const cors = require('cors')({
  origin: true
});

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  cors(request, response, () => {
    response.status(200).send({test: 'Hello'});
  })
});


exports.menu = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  cors(request, response, () => {
    var json = {
      error: 'invalid code'
    }
    switch (request.url.split('/')[1]) {
      case 'SchuA':
        json = {
          code: 'SchuA',
          name: 'In n out burgers',
          color: '#ab131b',
          logo: 'http://www.in-n-out.com/images/logo.png',
          sections: ['burgers', 'fries', 'beverages', 'shakes'],
          products: [
            {
              name: 'Double double',
              img: 'http://www.in-n-out.com/images/menu_v2/double_double_meal.png?v=1.2.1',
              price: '8.99',
              description: 'Double level cheeseburguer, with fries and a beverage',
              section: 'burgers'
            },
            {
              name: 'Chesseburger',
              img: 'http://www.in-n-out.com/images/menu_v2/cheeseburger_meal.png?v=1.2',
              price: '6.79',
              description: 'Cheeseburguer, with fries and a beverage',
              section: 'burgers'
            },
            {
              name: 'Fries',
              img: 'http://www.in-n-out.com/images/menu_v2/fries/fries.jpg',
              price: '7.79',
              description: 'Fresh, hand-cut potatoes prepared in 100% sunflower oil',
              section: 'fries'
            },
            {
              name: 'Beverages',
              img: 'http://www.in-n-out.com/images/menu_v2/fries/fries.jpg',
              price: '7.79',
              description: 'Refreshing selections include Coca-Cola® Classic, Diet Coke®, 7UP®, Dr. Pepper®, Root Beer, Lemonade, Minute Maid Light™ Lemonade, Iced Tea, Milk, Coffee and Hot Cocoa',
              section: 'beverages'
            },
            {
              name: 'Shakes',
              img: 'http://www.in-n-out.com/images/menu_v2/drinks/shakes.png',
              price: '6.79',
              description: 'Chocolate, strawberry or vanilla made with real ice cream',
              section: 'burgers'
            },
          ]
        }
        break
      case 'a6TMr':
        json = {
          code: 'a6TMr',
          name: 'Papa John´s',
          color: '#ab131b',
          logo: 'https://www.papajohns.com/static-assets/ltc/img/logo-small.svg',
          sections: ['pizza', 'sides', 'desserts', 'drinks', 'extras'],
          products: [
            {
              name: 'Pepperoni',
              img: 'https://www.papajohns.com/static-assets/a/images/web/product/pizzas/std_double_pep-compressed.jpg',
              price: '10.99',
              description: 'Premium pepperoni, real cheese made from mozzarella and your choice of crust.',
              section: 'pizza'
            },
            {
              name: 'Sausage',
              img: 'https://www.papajohns.com/static-assets/a/images/web/product/pizzas/std_1topSausage-compressed.jpg',
              price: '11.99',
              description: 'Sausage and real cheese made from mozzarella with your choice of crust.',
              section: 'pizza'
            },
            {
              name: 'Cheese Pizza',
              img: 'https://www.papajohns.com/static-assets/a/images/web/product/pizzas/std_1topCheese_m-compressed.jpg',
              price: '10.19',
              description: 'Real cheese made from mozzarella, pizza sauce and your choice of crust.',
              section: 'pizza'
            },
            {
              name: 'Pepperoni, Sausage',
              img: 'https://www.papajohns.com/static-assets/a/images/web/product/pizzas/std_JohnsFav-compressed.jpg',
              price: '13.99',
              description: 'Pepperoni, sausage, a six-cheese blend and Italian seasoning.',
              section: 'pizza'
            },
            {
              name: 'Garlic Knots',
              img: 'https://www.papajohns.com/static-assets/a/images/web/product/sides/garlic-knots-compressed.jpg',
              price: '7.29',
              description: '8 Knots made with fresh dough and garlic parmesan seasoning are served with pizza sauce.',
              section: 'sides'
            },
            {
              name: 'Garlic Parmesan Breadsticks',
              img: 'https://www.papajohns.com/static-assets/a/images/web/product/sides/std_ParmBreadsticks-compressed.jpg',
              price: '4.99',
              description: 'Fresh-baked and brushed with garlic sauce and seasonings.',
              section: 'sides'
            },
            {
              name: 'Cheesesticks',
              img: 'https://www.papajohns.com/static-assets/a/images/web/product/sides/std_Cheesesticks-compressed.jpg',
              price: '5.99',
              description: 'Fresh dough covered in garlic sauce and topped with mozzarella',
              section: 'sides'
            },
            {
              name: 'Original Breadsticks',
              img: 'https://www.papajohns.com/static-assets/a/images/web/product/sides/std_Breadsticks-compressed.jpg',
              price: '6.29',
              description: 'Fresh baked and served with your choice of dipping sauce.',
              section: 'sides'
            },
            {
              name: 'Cinnamon Pull Aparts',
              img: 'https://www.papajohns.com/static-assets/a/images/web/product/sides/cinnamon-pull-aparts-compressed.jpg',
              price: '5.99',
              description: 'Bite-sized sweet roll dough covered in cinnamon and sugar, topped with cinnamon crumbles then baked and drizzled with cream cheese icing.',
              section: 'desserts'
            },
            {
              name: 'Chocolate Chip Cookie',
              img: 'https://www.papajohns.com/static-assets/a/images/web/product/desserts/double-chocolate-chip-brownie-compressed.jpg',
              price: '5.99',
              description: 'Filled with chocolate chips, cut into 9 squares and served warm.',
              section: 'desserts'
            },
            {
              name: 'Pepsi',
              img: 'https://www.papajohns.com/static-assets/a/images/web/product/beverages/std_Pepsi-compressed.jpg',
              price: '4.99',
              description: 'Premium pepperoni, real cheese made from mozzarella and your choice of crust.',
              section: 'drinks'
            },
            {
              name: 'Aquafina',
              img: 'https://www.papajohns.com/static-assets/a/images/web/product/beverages/std_aquafina-compressed.jpg',
              price: '4.99',
              description: '',
              section: 'drinks'
            },
            {
              name: 'Diet Mountain Dew',
              img: 'https://www.papajohns.com/static-assets/a/images/web/product/beverages/2ltr-20oz-diet-mtn-dew-compressed.jpg',
              price: '4.99',
              description: '',
              section: 'drinks'
            },
            {
              name: 'Special Garlic Sauce',
              img: 'https://www.papajohns.com/static-assets/a/images/web/product/extras/std_GarDipSauce-compressed.jpg',
              price: '1.99',
              description: 'Special Garlic Dipping Sauce Cup',
              section: 'extras'
            },
            {
              name: 'Ranch Sauce',
              img: 'https://www.papajohns.com/static-assets/a/images/web/product/extras/std_RanchDipSauce-compressed.jpg',
              price: '1.99',
              description: 'Ranch Dipping Sauce Cup',
              section: 'extras'
            },
            {
              name: 'Buffalo Sauce',
              img: 'https://www.papajohns.com/static-assets/a/images/web/product/extras/std_Buffalo_DipSauce-compressed.jpg',
              price: '1.99',
              description: 'Buffalo Dipping Sauce Cup',
              section: 'extras'
            }
          ]
        }
        break
    }
    response.status(200).send(json);
  })
});
