const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const sandwiches = [
  //id, title, cafeLocation, summary, poster, ingredients
  { id: 1, title: 'Carrot Sandwich', cafeLocation:'Cafe Rhubarb', summary:'Carrot sandwich made by cafe Rhubarb', poster:'/sandwich-images/carrot-sandwich.jpeg', ingredients: ['carrot', 'mustard', 'hummus', 'bread'] },
  { id: 2, title: 'Hawaiian Jack Burger', cafeLocation:'Elephant Burger',  summary:'Hawwain Jack Burger is super delicious', poster:'/sandwich-images/hawaiianJack.jpeg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'] },
  { id: 3, title: 'BicMac', cafeLocation:'McDonalds',  summary:'The best burger in McDonalds is obviously BicMacs.', poster:'/sandwich-images/BigMac.jpeg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'] },
  { id: 4, title: 'Fruit Sando', cafeLocation:'Cafe Doje',  summary:'The Fruit Sando is Japanese styled fruit sandwich with cheese cream inside.', poster:'/sandwich-images/FruitSando.jpeg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'] },
  { id: 5, title: 'Grilled Cheese', cafeLocation:'Tappered Coffee', summary:'Grilled cheese sandwich is a classic sandwich and it tastes even better with some avocado sauce!', poster:'/sandwich-images/GrilledCheese.jpeg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'] },
  { id: 6, title: 'Apple Penut Butter Sandwich', cafeLocation:'Cafe Oasis', summary:'맛있는 샌드위치', poster:'/sandwich-images/apple.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'] },
  { id: 7, title: 'Vegetarian Delight', cafeLocation:'Cafe Rhubarb', summary:'맛있는 샌드위치', poster:'/sandwich-images/AppleBrie.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'] },
  { id: 8, title: 'Vegetarian Delight', cafeLocation:'Cafe Rhubarb', summary:'맛있는 샌드위치', poster:'/sandwich-images/Bocadillo.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'] },
  { id: 9, title: 'Vegetarian Delight', cafeLocation:'Cafe Rhubarb', summary:'맛있는 샌드위치', poster:'/sandwich-images/super.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'] },
  { id: 10, title: 'Vegetarian Delight', cafeLocation:'Cafe Rhubarb', summary:'맛있는 샌드위치', poster:'/sandwich-images/Churros.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'] },
  { id: 11, title: 'Vegetarian Delight', cafeLocation:'Cafe Rhubarb', summary:'맛있는 샌드위치', poster:'/sandwich-images/RiceSando.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'] },
  { id: 12, title: 'Vegetarian Delight', cafeLocation:'Cafe Rhubarb', summary:'맛있는 샌드위치', poster:'/sandwich-images/SaltHouse.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'] },
  { id: 13, title: 'Vegetarian Delight', cafeLocation:'Cafe Rhubarb', summary:'맛있는 샌드위치', poster:'/sandwich-images/gatsuSando.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'] },
  { id: 14, title: 'Vegetarian Delight', cafeLocation:'Cafe Rhubarb', summary:'맛있는 샌드위치', poster:'/sandwich-images/avocado.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'] },
  { id: 15, title: 'Vegetarian Delight', cafeLocation:'Cafe Rhubarb', summary:'맛있는 샌드위치', poster:'/sandwich-images/zion.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'] },
  { id: 16, title: 'Vegetarian Delight', cafeLocation:'Cafe Rhubarb', summary:'맛있는 샌드위치', poster:'/sandwich-images/Bagel.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'] },
  { id: 17, title: 'Vegetarian Delight', cafeLocation:'Cafe Rhubarb', summary:'맛있는 샌드위치', poster:'/sandwich-images/Guiness.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'] },
  { id: 18, title: 'Vegetarian Delight', cafeLocation:'Cafe Rhubarb', summary:'맛있는 샌드위치', poster:'/sandwich-images/Egg.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'] },
  { id: 19, title: 'Vegetarian Delight', cafeLocation:'Cafe Rhubarb', summary:'맛있는 샌드위치', poster:'/sandwich-images/Steak.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'] },
  { id: 20, title: 'Vegetarian Delight', cafeLocation:'Cafe Rhubarb', summary:'맛있는 샌드위치', poster:'/sandwich-images/Fig.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'] },
];

app.get('/sandwiches', (req, res) => {
  res.json(sandwiches); 
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
