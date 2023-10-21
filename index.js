import express from "express";

const app = express();
const port = 3000;

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.render('index.ejs')
})
app.get('/submit', (req, res) => {
  res.render('index.ejs')
})
app.get('/personal', (req, res) => {
  res.render('personal.ejs', {personal})
})
app.get('/business', (req, res) => {
  res.render('business.ejs', {business})
})

app.listen(port, () => {
  console.log(`Ο διακομιστής ακούει στην πύλη ${port}`);
});


const personal = [
  
]
const business = [

]