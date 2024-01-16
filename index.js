const express = require('express');
var cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;

var corsOptions = {}

app.use(cors(corsOptions))
app.use(express.static('fonts'))

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));