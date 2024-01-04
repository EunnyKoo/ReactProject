const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

const sandwiches = [
  { id: 1, title: 'Carrot Sandwich', cafeLocation: 'Cafe Rhubarb', summary: 'Indulge in the vibrant flavors of Cafe Rhubarb\'s Carrot Sandwich. This delectable creation features fresh carrots, tangy mustard, velvety hummus, and soft bread for a delightful culinary experience.', poster: '/sandwich-images/carrot-sandwich.jpeg', ingredients: ['carrot', 'mustard', 'hummus', 'bread'], rating: '4.5' },
  { id: 2, title: 'Hawaiian Jack Burger', cafeLocation: 'Elephant Burger',  summary: 'Experience the tropical delight of Elephant Burger\'s Hawaiian Jack Burger. Bursting with flavors, this burger combines succulent turkey, crisp lettuce, juicy tomato, and creamy mayo for an unforgettable taste.', poster: '/sandwich-images/hawaiianJack.jpeg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'], rating: '4.5' },
  { id: 3, title: 'Big Mac', cafeLocation: 'McDonalds',  summary: 'Savor the legendary taste of McDonald\'s with the Big Mac. A true classic, this burger boasts the perfect blend of turkey, crisp lettuce, juicy tomato, and creamy mayo, making it an all-time favorite.', poster: '/sandwich-images/BigMac.jpeg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'], rating: '4.7' },
  { id: 4, title: 'Fruit Sando', cafeLocation: 'Cafe Doje',  summary: 'Embark on a culinary journey with Cafe Doje\'s Fruit Sando. This Japanese-inspired fruit sandwich features a delightful combination of fresh fruits and creamy cheese, providing a unique and delicious taste.', poster: '/sandwich-images/FruitSando.jpeg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'], rating: '4.8' },
  { id: 5, title: 'Grilled Cheese', cafeLocation: 'Tappered Coffee', summary: 'Satisfy your cravings with Tappered Coffee\'s Grilled Cheese sandwich. A timeless classic, this sandwich is elevated with the addition of avocado sauce, creating a perfect blend of flavors.', poster: '/sandwich-images/GrilledCheese.jpeg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'], rating: '4.9' },
  { id: 6, title: 'Apple Peanut Butter Sandwich', cafeLocation: 'Cafe Oasis', summary: 'Delight your taste buds with Cafe Oasis\'s Apple Peanut Butter Sandwich. A harmonious combination of crisp apples and rich peanut butter, this sandwich is a treat for your senses.', poster: '/sandwich-images/apple.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'], rating: '5.0' },
  { id: 7, title: 'Apple Brie Cheese Sandwich', cafeLocation: 'Eun Koo Homemade', summary: 'Experience the gourmet delight of Eun Koo Homemade\'s Apple Brie Cheese Sandwich. This exquisite creation features the perfect balance of sweet apples and creamy brie cheese.', poster: '/sandwich-images/AppleBrie.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'], rating: '4.5' },
  { id: 8, title: 'Spanish Bocadillo', cafeLocation: 'Cafeteria', summary: 'Transport yourself to Spain with Cafeteria\'s Spanish Bocadillo. Immerse in the rich flavors of this sandwich, featuring a medley of ingredients that capture the essence of Spanish cuisine.', poster: '/sandwich-images/Bocadillo.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'], rating: '4.1' },
  { id: 9, title: 'Grilled Eggplant Sandwich', cafeLocation: 'Cafe Super', summary: 'Elevate your sandwich experience with Cafe Super\'s Grilled Eggplant Sandwich. A delightful blend of grilled eggplant and fresh ingredients, this sandwich is a culinary delight.', poster: '/sandwich-images/super.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'], rating: '4.2' },
  { id: 10, title: 'Churros Sandwich', cafeLocation: 'Convenience Store', summary: 'Indulge in a sweet and savory experience with Convenience Store\'s Churros Sandwich. This unique creation combines the beloved churros with a savory twist, creating a delightful fusion of flavors.', poster: '/sandwich-images/Churros.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'], rating: '3.9' },
  { id: 11, title: 'Rice Sandwich', cafeLocation: 'Eun Koo Homemade', summary: 'Experience a taste of Asia with Eun Koo Homemade\'s Rice Sandwich. This unique creation features a medley of ingredients sandwiched between layers of rice, creating a delightful and satisfying meal.', poster: '/sandwich-images/RiceSando.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'], rating: '3.7' },
  { id: 12, title: 'Reuben Sandwich', cafeLocation: 'Salt House', summary: 'Savor the classic flavors of Salt House\'s Reuben Sandwich. With a perfect blend of ingredients, this sandwich is a tribute to the timeless tradition of a delicious and hearty meal.', poster: '/sandwich-images/SaltHouse.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'], rating: '4.0' },
  { id: 13, title: 'Gatsu Sando', cafeLocation: 'Cafe Sando', summary: 'Embark on a gastronomic adventure with Cafe Sando\'s Gatsu Sando. This Japanese-inspired sandwich features a delightful combination of flavors, offering a unique and satisfying experience.', poster: '/sandwich-images/gatsuSando.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'], rating: '4.7' },
  { id: 14, title: 'Avocado Toast', cafeLocation: 'Delivery', summary: 'Indulge in the creamy goodness of Delivery\'s Avocado Toast sandwich. This classic creation is elevated with the addition of avocado, creating a delightful and nutritious meal.', poster: '/sandwich-images/avocado.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'], rating: '4.9' },
  { id: 15, title: 'Classic Burger', cafeLocation: 'Zion Burger', summary: 'Satisfy your burger cravings with Zion Burger\'s Classic Burger. A timeless favorite, this burger features a perfect blend of ingredients that capture the essence of classic burger goodness.', poster: '/sandwich-images/zion.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'], rating: '5.0' },
  { id: 16, title: 'Ham Cheese Bagel Sandwich', cafeLocation: 'Starbucks', summary: 'Start your day right with Starbucks\'s Ham Cheese Bagel Sandwich. This delightful combination of ham, cheese, and bagel creates a perfect harmony of flavors for a delicious breakfast.', poster: '/sandwich-images/Bagel.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'], rating: '4.1' },
  { id: 17, title: 'Guinness Burger', cafeLocation: 'Burger King', summary: 'Experience the rich and hearty flavors of Burger King\'s Guinness Burger. This unique creation captures the essence of a classic burger with the added richness of Guinness, creating a memorable dining experience.', poster: '/sandwich-images/Guiness.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'], rating: '4.2' },
  { id: 18, title: 'Egg Sandwich', cafeLocation: 'Cafe EggSand', summary: 'Elevate your breakfast with Cafe EggSand\'s Egg Sandwich. This delightful creation features a perfect blend of eggs and fresh ingredients, creating a satisfying and wholesome breakfast option.', poster: '/sandwich-images/Egg.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'], rating: '4.9' },
  { id: 19, title: 'Cheese Steak Sandwich', cafeLocation: 'Cafe illy', summary: 'Indulge in the savory goodness of Cafe illy\'s Cheese Steak Sandwich. This delectable creation features a perfect blend of cheese, steak, and fresh ingredients, creating a satisfying and flavorful meal.', poster: '/sandwich-images/Steak.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'], rating: '3.5' },
  { id: 20, title: 'Fig Sandwich', cafeLocation: 'Cafe NearMe', summary: 'Experience the unique and delightful flavors of Cafe NearMe\'s Fig Sandwich. This creation features a perfect blend of figs and fresh ingredients, creating a sandwich that is both sweet and savory.', poster: '/sandwich-images/Fig.jpg', ingredients: ['turkey', 'lettuce', 'tomato', 'mayo'], rating: '2.5' },
];

const comments = {
  "1": [
    { id: 1, text: "Looks so good" },
    { id: 2, text: "Amazing flavors!" },
  ],
  "2": [
    { id: 3, text: "Baam!"}
  ],
  "3": [
    { id: 4, text: "Baam!"}
  ],
  "4": [
    { id: 5, text: "Baam!"}
  ],
  "5": [
    { id: 6, text: "Baam!"}
  ],
  "6": [
    { id: 7, text: "Baam!"}
  ],
  "7": [
    { id: 8, text: "Baam!"}
  ],
  "8": [
    { id: 9, text: "Baam!"}
  ],
  "9": [
    { id: 10, text: "Baam!"}
  ],
  "10": [
    { id: 11, text: "Baam!"}
  ],
  "11": [
    { id: 12, text: "Baam!"}
  ],
  "12": [
    { id: 13, text: "Baam!"}
  ],
  "13": [
    { id: 14, text: "Baam!"}
  ],
  "14": [
    { id: 15, text: "Baam!"}
  ],
  "15": [
    { id: 16, text: "Baam!"}
  ],
  "16": [
    { id: 17, text: "Baam!"}
  ],
  "17": [
    { id: 18, text: "Baam!"}
  ],
  "18": [
    { id: 19, text: "Baam!"}
  ],
  "19": [
    { id: 20, text: "Baam!"}
  ],
};

const monthlySandos = [
  { id: 1, title: `Favourite Sandwich Moment`, name:'City Oasis', cafeLocation: 'city oasis, Magoknaru, Gangseo-gu, Seoul', summary: `The best sandwich moment of this month was having a sandwich and coffee while making this sandwich blog website. I wanted to make this blog for a really long time so it's like my dream coming true life moment!`, poster: '/sandwich-images/ef.jpg', },
  { id: 2, title: `Introducing Overseas Sando`, name:'Hong Kong Shake Shack', cafeLocation: 'Shop 4018, Podium Level 4, ifc mall, 8 Finance Street',  summary: `Located at Central Waterfront, ifc is one of Hong Kong's leading business and leisure destinations. With more than 200 stores featuring international premier brands, flagship stores and unique concept stores, ifc mall is the place to go for an extraordinary shopping, dining and entertainment experience. It is not only a hot tourist spot in Hong Kong, but also an iconic world-class shopping mall.`, poster: '/sandwich-images/hawaiianJack.jpeg', },
];

const mysql = require("mysql");

const conn = mysql.createPool({
	host: 'localhost',   
	user: 'user',                           
	password: '55555!',                     
	database: 'react_proj',                
})

app.post('/api/login', (req, res) => {
  const { id, password } = req.body;
  console.log('Received login request:', id, password);

  conn.query(
    'SELECT * FROM user WHERE id = ? AND password = ?', 
    [id, password],
    (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      if (rows.length > 0) {
        res.json({ authenticated: true });
      } else {
        res.json({ authenticated: false });
      }
    }
  );
});

app.post('/api/register', (req, res) => {
  const { id, nickname, password } = req.body;
  console.log('Received register request:', id, nickname, password);

  conn.query(
    'INSERT INTO user (id, nickname, password) VALUES (?, ?, ?)', 
    [id, nickname, password],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json({ registered: true });
    }
  );
});

app.get('/monthlySandos', (req, res) => {
  res.json(monthlySandos); 
});

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const commentList = comments[id] || [];
  res.json(commentList);
});

app.post('/comments/:id', (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  if (!comment || typeof comment !== 'string') {
    return res.status(400).json({ error: 'Invalid comment format' });
  }

  const commentData = {
    id: comments[id].length + 1,
    text: comment,
  };

  comments[id].push(commentData);

  res.json(commentData);
});


app.get('/sandwiches', (req, res) => {
  res.json(sandwiches); 
});

app.get('/sandwiches/:id', (req, res) => {
  console.log(req.params.id)
  res.json(sandwiches[Number(req.params.id)-1]); 
});


app.post('/send-email', (req, res) => {
  const { title, tags, content } = req.body;

  //user, pass 꼭 지우고 github에 추가할 것^^
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      
    },
  });

  const mailOptions = {
    from: 'eunny5959@gmail.com',
    to: 'eunny5959@gmail.com',
    subject: `New Sandwich Information: ${title}`,
    text: `Location: ${tags}\n\n${content}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email Sent');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});