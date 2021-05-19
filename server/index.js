const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const db = require('../database/index.js');
const fakeData = require('../fakeData/fakeData.js');
const faker = require('faker');

app.use(express.static('client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/addtocart', (req, res) => {
  for (let i = 1; i < 101; i++) {
    let dummyData = {
      itemId: i,
      brandName: faker.company.companyName(),
      numberOfSales: faker.datatype.number(),
      reviewAvg: Math.floor(Math.random() * 6),
      itemName: faker.commerce.productName(),
      price: faker.commerce.price(),
      specifications: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
      inventoryCount: faker.datatype.number(),
      itemDetails: faker.commerce.productMaterial(),
      itemDescription: faker.commerce.productDescription()
    };
    db.save(dummyData, (err, data) => {
      console.log('SERVER - Saved to DB...');
    });
  }
  // let query = {};
  // db.find(query, (err, data) => {
  //   if (err) {
  //     res.status(400).send(err);
  //   } else {
  //     console.log('SERVER GET DATA:', data[1]);
  //     res.status(200).send(data[1]);
  //   }
  // });
});

app.post('/addtocart', (req, res) => {
  let query = {};
  db.find(query, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log('SERVER POST DATA:', data[0]);
      res.status(200).send(data[0]);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening to Port: ${port}`);
});

//Server Design by Devon Poston