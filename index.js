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

const cheesecakes = [
    {
        id: 6,
        name: "Sósmogyorós sajttorta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 7,
        name: "Áfonyás \"New York\" cheesecake",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 8,
        name: "Epres sajttorta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 9,
        name: "Oreos sajttorta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 10,
        name: "Snickers sajttorta (mogyoróvajjal)",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 11,
        name: "Málnás-csokis sajttorta (gluténmentes)",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 12,
        name: "Meggyes-mákos sajttorta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 13,
        name: "Citromkrémes sajttorta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 14,
        name: "Fehércsokis joghurttorta (feketeribizlivel/passió gyümolccsel)",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    }
]

const seasonalCheesecakes = [
    {
        id: 15,
        name: "Gesztenyés sajttorta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 16,
        name: "Sütőtökös sajttorta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 17,
        name: "Ferrero Rocher sajttorta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 18,
        name: "Bounty sajttorta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 19,
        name: "Meggyes-marcipános sajttorta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    }, 
    {
        id: 20,
        name: "Toffifee sajttorta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    }
]

const specialities = [
    {
        id: 21,
        name: "Chilis-mangós fehércsokimousse",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 22,
        name: "Narancsos-passiós sajttorta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 23,
        name: "Sült túrótorta (gluténmentes)",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 24,
        name: "Marcipános meggyes pite",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 25,
        name: "Sacher mousse (gluténmentes)",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 26,
        name: "Triplacsoki mousse (gluténmentes)",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 27,
        name: "Körtés karamelltorta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 28,
        name: "Málnás sacher",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 29,
        name: "Eszterházy torta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 30,
        name: "Kinder MaxiKing torta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 31,
        name: "Oreo torta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    }
]

app.get('/', (req, res) => {
    res.render('main', {brownies: brownies, cheesecakes: cheesecakes, seasonalCheesecakes: seasonalCheesecakes, specialities: specialities});
})

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
})