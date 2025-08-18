const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
require('dotenv').config();

const textOptimizerRoutes = require('./routes/summarizer.route');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Welcome to the Text Optimizer API!');
});

app.use('/api', textOptimizerRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
