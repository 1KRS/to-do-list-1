import express from "express";

const app = express();
const port = 3000;

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.render('index.ejs')
})
app.get('/personal', (req, res) => {
  res.render('personal.ejs')
})
app.get('/business', (req, res) => {
  res.render('business.ejs')
})



app.listen(port, () => {
  console.log(`Ο διακομιστής ακούει στην πύλη ${port}`);
});
