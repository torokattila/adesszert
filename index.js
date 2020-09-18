require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const PORT = (process.env.PORT || 3000);
const app = express();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'torcsiattila93@gmail.com',
        pass: 'ypvazushjiszrpbb'
    }
});

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
        name: "Málnás-citromkrémes sajttorta (hideg)",
        ingredients: ['zabkeksz', 'vaj', 'mascarpone', 'tejszín', 'cukor', 'zselatin', 'hideg krémpor', 'vanília', 'citrom', 'tojás', 'málna', 'agar-agar', 'pisztácia', 'fehércsoki'],
        allergens: ['Glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tejtermékek', 'diófélék'],
        image: ""
    }
]

const seasonalCheesecakes = [
    {
        id: 15,
        name: "Gesztenyés sajttorta",
        ingredients: ['zabkeksz', 'vaj', 'mascarpone', 'tejföl', 'tejszín', 'cukor', 'vanília', 'kukoricakeményítő', 'tojás', 'gesztenye', 'fehércsokoládé', 'étcsokoládé'],
        allergens: ['tojás', 'szójalecitin', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tejtermékek', 'diófélék'],
        image: ""
    },
    {
        id: 16,
        name: "Sütőtökös sajttorta",
        ingredients: ['zabkeksz', 'vaj', 'mascarpone', 'tejföl', 'tejszín', 'cukor', 'vanília', 'kukoricakeményítő', 'tojás', 'sütőtök', 'fahéj', 'mandula', 'hideg krémpor'],
        allergens: ['tojás', 'tejtermékek', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'diófélék'],
        image: ""
    },
    {
        id: 17,
        name: "Ferrero Rocher sajttorta",
        ingredients: ['zabkeksz', 'vaj', 'mascarpone', 'tejföl', 'tejszín', 'cukor', 'vanília', 'kukoricakeményítő', 'tojás', 'Ferrero Rocher csokoládé', 'étcsokoládé'],
        allergens: ['tojás', 'szójalecitin', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tejtermékek', 'diófélék'],
        image: ""
    },
    {
        id: 18,
        name: "Bounty sajttorta",
        ingredients: ['zabkeksz', 'vaj', 'mascarpone', 'tejföl', 'tejszín', 'kókuszreszelék', 'tojás', 'kukoricakeményítő', 'vanília', 'cukor', 'étcsokoládé'],
        allergens: ['tojás', 'szójalecitin', 'Glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tejtermékek', 'diófélék'],
        image: ""
    },
    {
        id: 19,
        name: "\"Gundel palacsintás\" sajttorta",
        ingredients: ['zabkeksz', 'vaj', 'palacsinta (tojás, liszt, víz, cukor, só)', 'mascarpone', 'tejszín', 'cukor', 'zselatin', 'hideg krémpor', 'vanília', 'citrom', 'tojás', 'mandula'],
        allergens: ['Glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tejtermékek', 'diófélék'],
        image: ""
    }, 
    {
        id: 20,
        name: "Toffifee sajttorta",
        ingredients: ['zabkeksz', 'vaj', 'sósmogyoró', 'cukor', 'mascarpone', 'tejszín', 'vanília', 'karamell (tejszín, cukor)', 'étcsokoládé', 'zselatin', 'hideg krémpor', 'toffifee csokoládé'],
        allergens: ['szójalecitin', 'tejtermékek', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'diófélék', 'mogyorófélék'],
        image: ""
    },
    {
        id: 21,
        name: "Körtés-karamellás sajttorta",
        ingredients: ['tojás', 'liszt', 'dió', 'cukor', 'méz', 'mascarpone', 'tejszín', 'vanília', 'zselatin', 'karamell', 'só', 'kukoricakeményítő', 'víz', 'körte'],
        allergens: ['tojás', 'tejtermékek', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'diófélék'],
        image: ""
    },
    {
        id: 22,
        name: "Oreo sajttorta",
        ingredients: ['oreo keksz', 'vaj', 'mascarpone', 'tejföl', 'tejszín', 'cukor', 'vanília', 'kukoricakeményítő', 'tojás', 'fehércsokoládé', 'étcsokoládé', ],
        allergens: ['szójalecitin', 'tejtermékek', 'glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tojás'],
        image: ""
    }
]

const pies = [
    {
        id: 23,
        name: "Rákóczi túrós pite",
        ingredients: ['búzaliszt', 'vaj', 'tojás', 'cukor', 'só', 'víz', 'túró', 'vanília', 'baracklekvár', 'citromhéj', 'tejszín', 'tejszínhab', 'habcsók (tojásfehérje, cukor)', 'mandula'],
        allergens: ['Glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tejtermékek', 'diófélék', 'tojás'],
        image: ""
    },
    {
        id: 24,
        name: "Meggyes-marcipános pite",
        ingredients: ['búzaliszt', 'vaj', 'tejföl', 'tojás', 'cukor', 'só', 'víz', 'meggy', 'kukoricakeményítő', 'fahéj', 'mandula', 'marcipán'],
        allergens: ['Glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tejtermékek', 'diófélék'],
        image: ""
    },
    {
        id: 25,
        name: "Almás pite",
        ingredients: ['búzaliszt', 'vaj', 'tejföl', 'tojás', 'cukor', 'só', 'víz', 'alma', 'kukoricakeményítő', 'fahéj', 'mandula', 'dió', 'citrom'],
        allergens: ['Glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tejtermékek', 'diófélék'],
        image: ""
    },
    {
        id: 26,
        name: "Meggyes pite",
        ingredients: ['búzaliszt', 'vaj', 'tejföl', 'tojás', 'cukor', 'só', 'víz', 'meggy', 'kukoricakeményítő', 'fahéj', 'mandula', 'citrom'],
        allergens: ['Glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tejtermékek', 'diófélék', 'tojás'],
        image: ""
    },
    {
        id: 27,
        name: "Citromkrémes pite",
        ingredients: ['búzaliszt', 'vaj', 'tejföl', 'tojás', 'cukor', 'só', 'víz', 'citromlé', 'tejszín', 'zselatin', 'pirított mandula'],
        allergens: ['Glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tejtermékek', 'szójalecitin', 'diófélék (mandula)'],
        image: ""
    }
]

const individual = [
    {
        id: 28,
        name: "Chilis-mangós fehércsokimousse",
        ingredients: ['étcsokoládé (54,5%)', 'vaj', 'tejszín', 'cukor', 'tojás', 'kakaópor', 'só', 'fehércsokoládé', 'vanília', 'agar-agar', 'mangó püré', 'chili'],
        allergens: ['szójalecitin', 'tejtermékek', 'tojás'],
        image: ""
    },
    {
        id:29,
        name: "Sült túrótorta (gluténmentes)",
        ingredients: ['étcsokoládé (54,5%)', 'vaj', 'tejszín', 'cukor', 'tojás', 'kakaópor', 'só', 'túró', 'vanília', 'kukoricakeményítő', 'erdei gyümölcs mix', 'agar-agar', 'víz'],
        allergens: ['szójalecitin', 'tejtermékek', 'tojás'],
        image: ""
    },
    {
        id: 30,
        name: "Sacher mousse (gluténmentes)",
        ingredients: ['étcsokoládé (54,5%)', 'vaj', 'tejszín', 'cukor', 'tojás', 'kakaópor', 'só', 'gluténmentes lisztkeverék', 'baracklekvár', 'agar-agar', 'víz'],
        allergens: ['szójalecitin', 'tejtermékek', 'tojás'],
        image: ""
    },
    {
        id: 31,
        name: "Csokoládé szelet",
        ingredients: ['tojás', 'só', 'cukor', 'liszt', 'holland kakaópor', 'étcsokoládé', 'vaj', 'tejszín', 'cukor', 'mascarpone'],
        allergens: ['szója (csokiban)', 'tejtermékek', 'tojás', 'búzaliszt'],
        price: "",
        image: ""
    },
    {
        id: 32,
        name: "Joghurttorta (feketeribizlivel/passió gyümölccsel)",
        ingredients: ['zabkeksz', 'vaj', 'joghurt', 'tejszín', 'cukor', 'zselatin', 'hideg krémpor', 'vanília', 'gyümölcspüré', 'agar-agar'],
        allergens: ['Glutént tartalmazó gabona (búza, rozs, árpa, zab, tönköly, kamut-búza vagy ezek hibrid változatai)', 'tejtermékek'],
        image: ""
    },
]

const freeCakes = [
    {
        id: 33, 
        name: "Brownie",
        ingredients: ['cukor és tejmentes csokoládé (54,5%-os)', '20%-os holland kakaópor', 'tojás', 'eritrit', 'kókusztej', 'kókuszzsír', 'dió', 'mandula'],
        allergens: ['szója (csokiban)', 'csonthéjasok (dió, mandula)', 'tojás'],
        image: ""
    },
    {
        id: 34,
        name: "Túrótorta (kölesből)",
        ingredients: ['cukor és tejmentes csokoládé (54,5%-os)', '20%-os holland kakaópor', 'tojás', 'eritrit', 'kókusztej', 'kókuszzsír', 'hántolt köles', 'kókusztejszín', 'gluténmentes kukoricakeményítő', 'vanília', 'citrom', 'erdei gyümölcs mix', 'agar-agar'],
        allergens: ['tojás', 'szója (csokiban)'],
        image: ""
    },
    {
        id: 35,
        name: "Sajttorta (kókusztejből)",
        ingredients: ['cukor és tejmentes csokoládé (54,5%-os)', '20%-os holland kakaópor', 'tojás', 'eritrit', 'kókusztej', 'kókuszzsír', 'kókusztejszín', 'gluténmentes kukoricakeményítő', 'vanília', 'málna'],
        allergens: ['szója (csokiban)', 'tojás'],
        image: ""
    },
    {
        id: 36,
        name: "Csupa csoki torta",
        ingredients: ['cukor és tejmentes csokoládé (54,5%-os)', '20%-os holland kakaópor', 'tojás', 'eritrit', 'kókusztej', 'kókuszzsír'],
        allergens: ['szója (csokiban)', 'tojás'],
        image: ""
    },
    {
        id: 37,
        name: "Morzsapite (vegán)",
        ingredients: ['gluténmentes lisztkeverék(rizsliszt, kukoricaliszt, kukoricakeményítő, burgonyapehely, burgonyakeményítő, dextróz, stabilizátor(guargumi), térfogatnövelő szer(E464, xantán gumi), psyllium rost, burgonya rost, lisztkezelő szer(aszkorbinsav), almarost)', 'laktózmentes (vegán) margarin', 'kókuszliszt', 'eritrit', 'kókusztej', 'meggy', 'kukoricakeményítő', 'fahéj', 'citrom'],
        allergens: ['fahéj'],
        image: ""
    },
    {
        id: 38,
        name: "Epres kókuszkrém szelet",
        ingredients: ['tojás', 'gluténmentes lisztkeverék (rizsliszt, kukoricaliszt, kukoricakeményítő, burgonyapehely, burgonyakeményítő, dextróz, stabilizátor(guar gumi), térfogatnövelő szer(E464, xantán gumi), psyllium rost, burgonya rost, lisztkezelő szer(aszkorbin sav), almarost)', 'kakaópor', 'só', 'eritrit', 'növényi mascarpone krém', 'kókusztej', 'agar-agar', 'zselatin', 'citromhéj', 'eper'],
        allergens: ['tojás'],
        image: ""
    },
    {
        id: 39,
        name: "Málnás túrótorta (totuból)",
        ingredients: ['cukor és tejmentes csokoládé (54,5%-os)', '20%-os holland kakaópor', 'tojás', 'eritrit', 'kókusztej', 'kókuszzsír', 'totu krém', 'totu (tojásfehérje)', 'kókusztejszín', 'vanília', 'citrom', 'agar-agar', 'málna'],
        allergens: ['tojás', 'szója (csokiban)'],
        image: ""
    }
]

app.get('/', (req, res) => {
    res.render('main');
});

app.get('/main', (req, res) => {
    res.render('main');
});

app.get('/cakes', (req, res) => {
    res.render('cakes', {brownies: brownies, cheesecakes: cheesecakes, seasonalCheesecakes: seasonalCheesecakes, pies: pies, individual: individual, freeCakes: freeCakes});
});

app.get('/order', (req, res) => {
    res.render('order');
});

app.get('/contact', (req, res) => {
    res.render('contact');
})

app.post('/contact', (req, res) => {
    const mailOptions = {
        from: 'torcsiattila93@gmail.com',
        to: 'torcsiattila94@gmail.com',
        subject: 'Érdeklődés',
        text: 'Név: ' + req.body.contact_input_name + '\n' 
        + 'Email címe: ' + req.body.contact_input_email + '\n' 
        + 'Üzenet: ' + '\n' + req.body.contact_textarea
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.redirect('/contact');
        }
    });
})

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
});
