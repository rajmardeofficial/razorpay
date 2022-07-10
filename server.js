const express = require("express");
const Razorpay = require("razorpay");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public")); 

let instance = new Razorpay({
  key_id: "Ithe aapli key id takavi",
  key_secret: "Ithe yenaar key secret",
}); 

app.get("/", (req, res) => {
  res.render("index");   
});

app.post("/createOrder", (req, res) => {
  // const { amount, currency } = req.body;
  let options = {
    amount: 5000, // amount in the smallest currency unit
    currency: "INR"
  };
  // console.log(amount, currency);
  instance.orders.create(options, function (err, order) {
    res.send(order);
  });
});

app.listen(port, "0.0.0.0", () =>
  console.log(`server started on port ${port}`)
);
