const express = require('express');
const bodyParser = require('body-parser');
const PORT = (process.env.PORT || 3000);
const app = express();

app.use(express.static(__dirname + '/static'));
app.use(express.static('controller'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

const brownies = [
    {
        id: 1,
        name: "Klasszikus brownie",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 2,
        name: "Túrórudi brownie",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 3,
        name: "Sóskaramellás brownie",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 4,
        name: "Oreos brownie fehércsokival (glutént tartalmaz)",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 5,
        name: "Gesztenyés brownie",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    }
]

app.get('/', (req, res) => {
    res.render('main', {brownies: brownies});
})

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
})