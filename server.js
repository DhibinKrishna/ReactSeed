const express = require('express');

const app = express();

app.use(express.json({extended: false}));
app.use('/api/meta', require('./routes/api/metadata'))

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));