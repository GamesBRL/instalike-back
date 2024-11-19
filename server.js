import express from "express";

const app = express();
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/api", (rec, res) => {
    res.status(200).send("Boas Vindas à imersão!");
});