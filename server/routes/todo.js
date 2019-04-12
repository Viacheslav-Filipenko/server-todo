const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const validateInput = require('../utils/validation');

const db = new sqlite3.Database('todosDB.db', (err) => {
    if (err) {
        return console.err(err.message);
    }
});


router.get("/todo", (req, res, next) => {

    let sql = `SELECT * FROM todos_table`;

    db.all(sql, (err, rows) => {

        if (err) {
            res.status(500).end();
        }

        res.status(200).end(JSON.stringify(rows));
    });
});

router.post('/todo', (req, res, nex) => {

    let sql = `
    INSERT INTO todos_table (description, isDone, isMatched)
    VALUES (?, ?, ?)`;

    console.log("done");

    const description = validateInput(req.body.item.description);
    const isDone = validateInput(req.body.item.isDone);
    const isMatched = validateInput(req.body.item.isMatched);

    if (description && isDone && isMatched) {

        res.status(500).end();

    } else {
        db.run(sql, [description, isDone, isMatched], (err) => {
            if (err) {
                console.log(err.message);
                res.status(500).end();
            }
            res.status(200).end();
        });
    }
});

router.put('/todo', (req, res, next) => {

    let sql = `
    UPDATE todos_table
    SET description = ?, isDone = ?, isMatched = ?
    WHERE id = ?`;

    const description = validateInput(req.body.description);
    const isDone = validateInput(req.body.isDone);
    const isMatched = validateInput(req.body.isMatched);

    if (description && isDone && isMatched) {

        res.status(500).end();

    } else {
        db.run(sql, [description, isDone, isMatched], (err) => {
            if (err) {
                console.log(err.message);
                res.status(500).end();
            }
            res.status(200).end();
        });
    }

});

router.delete('/todo', (req, res, next) => {

    let sql = `
    DELETE FROM todos_table
    WHERE id = ?`;

    const id = req.body.id;

    db.run(sql, [id], (err) => {
        if (err) {
            console.log(err.message);
            res.status(500).end();
        }
        res.status(200).end();
    });

});


module.exports = router;