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
        name: "Oreos-csokis sajttorta (hideg)",
        ingredients: ['oreo keksz', 'vaj', 'mascarpone', 'tejszín', 'cukor', 'vanília', 'étcsokoládé', 'zselatin', 'hideg krémpor'],
        allergens: ['szójalecitin', 'tejtermékek', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)'],
        image: ""
    },
    {
        id: 10,
        name: "Snickers sajttorta",
        ingredients: ['zabkeksz', 'vaj', 'sós földimogyoró', 'mascarpone', 'tejföl', 'tejszín', 'cukor', 'vanília', 'kukoricakeményítő', 'tojás', 'mogyoróvaj'],
        allergens: ['szójalecitin', 'tejtermékek', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'mogyorófélék', 'tojás'],
        image: ""
    },
    {
        id: 11,
        name: "Málnás-csokis sajttorta (gluténmentes)",
        ingredients: ['étcsokoládé', 'vaj', 'tejszín', 'cukor', 'tojás', 'kakópor', 'mascarpone', 'tejföl', 'tejszín', 'vanília', 'kukoricakeményítő', 'málna'],
        allergens: ['szójalecitin', 'tejtermékek', 'tojás'],
        image: ""
    },
    {
        id: 12,
        name: "Meggyes-mákos sajttorta",
        ingredients: ['palacsinta (búzaliszt, tojás, cukor, víz, só, étolaj', 'mák', 'citromhéj', 'fahéj', 'cukor', 'víz', 'mascarpone', 'tejföl', 'tejszín', 'vanília', 'kukoricakeményítő', 'tojás', 'meggy', 'agar-agar'],
        allergens: ['tejtermékek', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tojás'],
        image: ""
    },
    {
        id: 13,
        name: "Citromkrémes sajttorta (hideg)",
        ingredients: ['zabkeksz', 'vaj', 'mascarpone', 'tejszín', 'cukor', 'zselatin', 'hideg krémpor', 'vanília', 'citrom', 'tojás', 'mandula'],
        allergens: [' Glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tejtermékek', 'diófélék (mandula)'],
        image: ""
    },
    {
        id: 14,
        name: "Joghurttorta (feketeribizlivel/passió gyümölccsel)",
        ingredients: ['zabkeksz', 'vaj', 'joghurt', 'tejszín', 'cukor', 'zselatin', 'hideg krémpor', 'vanília', 'gyümölcspüré', 'agar-agar'],
        allergens: ['Glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tejtermékek'],
        image: ""
    },
    {
        id: 15,
        name: "Málnás-citromkrémes sajttorta (hideg)",
        ingredients: ['zabkeksz', 'vaj', 'mascarpone', 'tejszín', 'cukor', 'zselatin', 'hideg krémpor', 'vanília', 'citrom', 'tojás', 'málna', 'agar-agar', 'pisztácia', 'fehércsoki'],
        allergens: ['Glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tejtermékek', 'diófélék'],
        image: ""
    }
]

const seasonalCheesecakes = [
    {
        id: 16,
        name: "Gesztenyés sajttorta",
        ingredients: ['zabkeksz', 'vaj', 'mascarpone', 'tejföl', 'tejszín', 'cukor', 'vanília', 'kukoricakeményítő', 'tojás', 'gesztenye', 'fehércsokoládé', 'étcsokoládé'],
        allergens: ['tojás', 'szójalecitin', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tejtermékek', 'diófélék'],
        image: ""
    },
    {
        id: 17,
        name: "Sütőtökös sajttorta",
        ingredients: ['zabkeksz', 'vaj', 'mascarpone', 'tejföl', 'tejszín', 'cukor', 'vanília', 'kukoricakeményítő', 'tojás', 'sütőtök', 'fahéj', 'mandula', 'hideg krémpor'],
        allergens: ['tojás', 'tejtermékek', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'diófélék'],
        image: ""
    },
    {
        id: 18,
        name: "Ferrero Rocher sajttorta",
        ingredients: ['zabkeksz', 'vaj', 'mascarpone', 'tejföl', 'tejszín', 'cukor', 'vanília', 'kukoricakeményítő', 'tojás', 'Ferrero Rocher csokoládé', 'étcsokoládé'],
        allergens: ['tojás', 'szójalecitin', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tejtermékek', 'diófélék'],
        image: ""
    },
    {
        id: 19,
        name: "Bounty sajttorta",
        ingredients: ['zabkeksz', 'vaj', 'mascarpone', 'tejföl', 'tejszín', 'kókuszreszelék', 'tojás', 'kukoricakeményítő', 'vanília', 'cukor', 'étcsokoládé'],
        allergens: ['tojás', 'szójalecitin', 'Glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tejtermékek', 'diófélék'],
        image: ""
    },
    {
        id: 20,
        name: "\"Gundel palacsintás\" sajttorta",
        ingredients: ['zabkeksz', 'vaj', 'palacsinta (tojás, liszt, víz, cukor, só)', 'mascarpone', 'tejszín', 'cukor', 'zselatin', 'hideg krémpor', 'vanília', 'citrom', 'tojás', 'mandula'],
        allergens: ['Glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tejtermékek', 'diófélék'],
        image: ""
    }, 
    {
        id: 21,
        name: "Toffifee sajttorta",
        ingredients: ['zabkeksz', 'vaj', 'sósmogyoró', 'cukor', 'mascarpone', 'tejszín', 'vanília', 'karamell (tejszín, cukor)', 'étcsokoládé', 'zselatin', 'hideg krémpor', 'toffifee csokoládé'],
        allergens: ['szójalecitin', 'tejtermékek', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'diófélék', 'mogyorófélék'],
        image: ""
    },
    {
        id: 22,
        name: "Körtés-karamellás sajttorta",
        ingredients: ['tojás', 'liszt', 'dió', 'cukor', 'méz', 'mascarpone', 'tejszín', 'vanília', 'zselatin', 'karamell', 'só', 'kukoricakeményítő', 'víz'],
        allergens: ['tojás', 'tejtermékek', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'diófélék'],
        image: ""
    },
    {
        id: 23,
        name: "Oreo sajttorta",
        ingredients: ['oreo keksz', 'vaj', 'mascarpone', 'tejföl', 'tejszín', 'cukor', 'vanília', 'kukoricakeményítő', 'tojás', 'fehércsokoládé', 'étcsokoládé', ],
        allergens: ['szójalecitin', 'tejtermékek', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tojás'],
        image: ""
    }
]

const specialities = [
    {
        id: 24,
        name: "Chilis-mangós fehércsokimousse",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 25,
        name: "Narancsos-passiós sajttorta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 26,
        name: "Sült túrótorta (gluténmentes)",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 27,
        name: "Marcipános meggyes pite",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 28,
        name: "Sacher mousse (gluténmentes)",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 29,
        name: "Triplacsoki mousse (gluténmentes)",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 30,
        name: "Málnás sacher",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 31,
        name: "Eszterházy torta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 32,
        name: "Kinder MaxiKing torta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    }
]

const freeCakes = [
    {
        id: 33, 
        name: "Mákos guba torta",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 34,
        name: "Túrótorta (kölesből)",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 35,
        name: "Raffaello (kókuszos vaníliás)",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 36,
        name: "Málnás-étcsokis \"sajttorta\"",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 37,
        name: "Csokis kókuszos \"sajttorta\"",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 38,
        name: "Citromkrémes \"sajttorta\"",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 39,
        name: "Málnás-mangós \"sajttorta\"",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 40,
        name: "Csupa csoki \"sajttorta\"",
        ingredients: "",
        allergens: "",
        price: "",
        image: ""
    },
    {
        id: 41,
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