const express = require('express');
const app = express();
const path=require('path');

const data=require('./routes');
app.use('/hospitalDetails',data);
app.use(express.static(path.join(__dirname, '../api-frontend/build')));

app.get('*', async(request, response) => {
    response.sendFile(path.join(__dirname, '../api-frontend/build/index.html'));
});



app.listen(8765, () => {
    console.log("Express Connected!!!!Gopi");
});