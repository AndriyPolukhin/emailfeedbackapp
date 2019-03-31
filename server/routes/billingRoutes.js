/* BILLING ROUTES  */

// DEPENDENCIES
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

// 1. ROUTES
module.exports = app => {
  // Stripe route post
  app.post("/api/stripe", async (req, res) => {
    // console.log(req.body);
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 dollars for 5 credits",
      source: req.body.id
    });
    console.log("===========CHARGE OBJECT STR==========");
    console.log(charge);
    console.log("===========CHARGE OBJECT END==========");
  });
};
