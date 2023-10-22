import express from 'express';

const app = express();
const port = 3000;

const personalArray = [];
const businessArray = [];

const οκ = 'Η υπόμνηση αποθηκεύτηκε';
const πρόβλημα = 'Επιλέξτε τουλάχιστον μία λίστα υπομνήσεων. (Πχ. Επιχειρείν.)';

app.use(express.static('./public'))

app.use(express.urlencoded({ extended: true }));

const saveToDoInList = (req, res, next) => {
  if (req.body.personal) {
    personalArray.push(req.body.reminder);
    console.log('Προσωπική', personalArray);
  }
  if (req.body.business) {
    businessArray.push(req.body.reminder);
    console.log(businessArray);
  }
  next();
};

app.use(saveToDoInList);

app.get('/', (req, res) => {
  res.render('index.ejs');
});
app.post('/submit', (req, res) => {
  const {reminder, personal, business} = req.body;

  if (reminder && personal && business) {
    res.render('index.ejs', { οκ });
  } else if (reminder && personal) {
    res.render('index.ejs', { οκ });
    console.log("Γαμώ τους ιμάμηδες", personalArray);
  } else if (reminder && business) {
    res.render('index.ejs', { οκ });
  } else {
    res.render('index.ejs', { πρόβλημα });
  }

  console.log('BODY', req.body);
});
app.get('/personal', (req, res) => {
  res.render('personal.ejs', { personalArray });
});
app.get('/business', (req, res) => {
  res.render('business.ejs', { businessArray });
});

app.listen(port, () => {
  console.log(`Ο διακομιστής ακούει στην πύλη ${port}`);
});
