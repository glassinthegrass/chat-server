const express = require("express");
const msgCtrl = require("./controllers/msgCtrl");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const url = "/api/messages";
app.post(url, msgCtrl.create);
app.get(url,msgCtrl.read);
app.put(`${url}/:id`, msgCtrl.update);
app.delete(`${url}/:id`, msgCtrl.delete);

const port = 3001;
app.listen(port, () => {
  console.log(`hi ${port}`);
});