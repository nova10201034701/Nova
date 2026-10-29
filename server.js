
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

console.log("App directory:", __dirname);
console.log("Files:", fs.readdirSync(__dirname));

app.get("/", (req, res) => {
    const filePath = path.join(__dirname, "inbox.html");

    if (fs.existsSync(filePath)) {
        return res.sendFile(filePath);
    }

    res.status(404).send("inbox.html پیدا نشد؛ مسیر فایل را بررسی کن.");
});

app.get("/inbox.html", (req, res) => {
    const filePath = path.join(__dirname, "inbox.html");

    if (fs.existsSync(filePath)) {
        return res.sendFile(filePath);
    }

    res.status(404).send("فایل inbox.html در پوشه برنامه وجود ندارد.");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Nova VPN running on port ${PORT}`);
});

