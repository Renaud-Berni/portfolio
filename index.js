const express = require ('express');

const router = require ('./router');
const PORT = 3000;

const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','views');
app.use(router);

app.listen(PORT, () => {
    console.log(`My Portfolio is running on http://localhost:${PORT}`);
  })