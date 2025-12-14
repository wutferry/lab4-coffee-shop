let express = require('express');
let bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 1. GET All Coffees (เรียกดูเมนูกาแฟทั้งหมด)
app.get('/coffees', function (req, res) {
    res.send('เรียกดูเมนูกาแฟทั้งหมด');
});

// 2. GET Coffee by ID (เรียกดูเมนูกาแฟตาม ID)
app.get('/coffee/:id', function (req, res) {
    res.send('ดูเมนูกาแฟ ID: ' + req.params.id);
});

// 3. POST Create Coffee (เพิ่มเมนูกาแฟใหม่)
app.post('/coffee', function (req, res) {
    res.send('ทำการสร้างเมนูกาแฟ: ' + JSON.stringify(req.body));
});

// 4. PUT Edit Coffee (แก้ไขเมนูกาแฟ)
app.put('/coffee/:id', function (req, res) {
    res.send('ทำการแก้ไขเมนูกาแฟ ID: ' + req.params.id + ' : ' + JSON.stringify(req.body));
});

// 5. DELETE Coffee (ลบเมนูกาแฟ)
app.delete('/coffee/:id', function (req, res) {
    res.send('ทำการลบเมนูกาแฟ ID: ' + req.params.id + ' : ' + JSON.stringify(req.body));
});

let port = process.env.PORT || 8081;
app.listen(port, function () {
    console.log('Coffee Shop Server running on port ' + port);
});