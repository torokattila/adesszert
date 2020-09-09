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
        ingredients: ['étcsokoládé', 'tej', 'tejszín', 'holland kakaópor', 'tojás', 'cukor', 'só'],
        allergens: ['tojás', 'tejtermékek', 'szójalecitin'],
        image: ""
    },
    {
        id: 2,
        name: "Túrórudi brownie",
        ingredients: ['étcsokoládé', 'vaj', 'tejszín', 'holland kakaópor', 'tojás', 'cukor', 'só', 'túró', 'vanília', 'zselatin', 'citromhéj', 'túrórudi'],
        allergens: ['tojás', 'tejtermékek', 'szójalecitin'],
        image: ""
    },
    {
        id: 3,
        name: "Sóskaramellás brownie",
        ingredients: ['étcsokoládé', 'vaj', 'tejszín', 'holland kakaópor', 'tojás', 'cukor', 'só', 'pörkölt mogyoró'],
        allergens: ['tojás', 'tejtermékek', 'szójalecitin', 'diófélék'],
        image: ""
    },
    {
        id: 4,
        name: "Oreos brownie fehércsokoládéval (glutént tartalmaz)",
        ingredients: ['étcsokoláde', 'vaj', 'tejszín', 'holland kakaópor', 'tojás', 'cukor', 'só', 'oreo keksz', 'fehércsokoládé'],
        allergens: ['tojás', 'tejtermékek', 'szójalecitin', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', ],
        image: ""
    },
    {
        id: 5,
        name: "Gesztenyés brownie",
        ingredients: ['étcsokoládé', 'vaj', 'tejszín', 'holland kakaópor', 'tojás', 'cukor', 'só', 'gesztenyemassza', 'hideg krémpor'],
        allergens: ['tojás', 'tejtermékek', 'szójalecitin'],
        image: ""
    }
]

const cheesecakes = [
    {
        id: 6,
        name: "Sósmogyorós sajttorta",
        ingredients: ['zabkeksz', 'vaj', 'sós földimogyoró', 'mascarpone', 'tejföl', 'tejszín', 'cukor', 'vanília', 'kukoricakeményítő', 'tojás', 'só'],
        allergens: ['tojás', 'tejtermékek', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'diófélék'],
        image: ""
    },
    {
        id: 7,
        name: "Áfonyás \"New York\" sajttorta",
        ingredients: ['zabkeksz', 'vaj', 'mascarpone', 'tejföl', 'tejszín', 'cukor', 'vanília', 'kukoricakeményítő', 'tojás', 'áfonya'],
        allergens: ['tojás', 'tejtermékek', ' glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'diófélék'],
        image: ""
    },
    {
        id: 8,
        name: "Epres sajttorta",
        ingredients: ['zabkeksz', 'vaj', 'mascarpone', 'tejföl', 'tejszín', 'cukor', 'vanília', 'kukoricakeményítő', 'tojás', 'eper', 'agar-agar'],
        allergens: ['tojás', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tejtermékek', 'diófélék'],
        image: ""
    },
    {
        id: 9,
        name: "Oreos-csokis sajttorta",
        ingredients: ['oreo keksz', 'vaj', 'mascarpone', 'tejszín', 'cukor', 'vanília', 'étcsokoládé', 'zselatin', 'hideg krémpor'],
        allergens: ['szójalecitin', 'tejtermékek', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)'],
        image: ""
    },
    {
        id: 10,
        name: "Snickers sajttorta",
        ingredients: ['zabkeksz', 'vaj', 'sós földimogyoró', 'mascarpone', 'tejföl', 'tejszín', 'cukor', 'vanília', 'kukoricakeményítő', 'tojás', 'mogyoróvaj'],
        allergens: ['szójalecitin', 'tejtermékek', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'mogyorófélék', 'tojás'],
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
        name: "Fehércsokis joghurttorta (feketeribizlivel/passió gyümölccsel)",
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

const freeCakes = [
    {
        id: 32, 
        name: "Mákos guba torta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 33,
        name: "Túrótorta (kölesből)",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 34,
        name: "Raffaello (kókuszos vaníliás)",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 35,
        name: "Málnás-étcsokis \"sajttorta\"",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 36,
        name: "Csokis kókuszos \"sajttorta\"",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 37,
        name: "Citromkrémes \"sajttorta\"",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 38,
        name: "Málnás-mangós \"sajttorta\"",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 39,
        name: "Csupa csoki \"sajttorta\"",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 40,
        name: "Paleo brownie (magvakkal)",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    }
]

app.get('/', (req, res) => {
    res.render('cakes', {brownies: brownies, cheesecakes: cheesecakes, seasonalCheesecakes: seasonalCheesecakes, specialities: specialities, freeCakes: freeCakes});
})

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
})