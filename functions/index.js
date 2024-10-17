const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Q2O8lP6RKtmLvqjSpevzTGj0fIw0v88vl6CCjkpV3CjrEvmj5WSHwkfnErFpkrwZvzkMqurX1XitzkCtHrObfD300ucXVlhlg");

//App config
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("hello world"));
 app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    console.log(total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    });
    res.status(201).send({clientSecret: paymentIntent.client_secret});
});




exports.api = functions.https.onRequest(app);


