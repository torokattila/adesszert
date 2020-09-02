const express = require('express');
const bodyParser = require('body-parser');
const PORT = (process.env.PORT || 3000);
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.render('main');
})

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
})