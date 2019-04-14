const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const validateInput = require('../utils/validation');
const Sql = require('../services/db')
const sql = new Sql();

const db = new sqlite3.Database('todosDB.db', (err) => {
    if (err) {
        return console.err(err.message);
    }
});

router.get("/", async (req, res, next) => {

    try {
        const data = await sql.select(db, ['*'], 'todos_table');
        senddata = JSON.stringify(data);
        res.status(200).render('index', {data: senddata});

    } catch (error) {
        console.log(error.message);
        res.status(400).end();
    }
});

router.post('/', async (req, res, nex) => {

    const description = validateInput(req.body.item.description);
    const isDone = validateInput(req.body.item.isDone);
    const isMatched = validateInput(req.body.item.isMatched);

    if (description && isDone && isMatched) {
        try {
            await sql.insert(db, [description, isDone, isMatched], {
                name: 'todos_tabel',
                columns: ['description', 'isDone', 'isMatched']
            });
            res.status(200).end();

        } catch (error) {
            console.log(error.message);
            res.status(400).end();
        }

    } else {
        res.status(400).end();
    }
});

router.put('/', async (req, res, next) => {

    const description = validateInput(req.body.description);
    const isDone = validateInput(req.body.isDone);
    const isMatched = validateInput(req.body.isMatched);

    if (description && isDone && isMatched) {
        try {
            await sql.update(db, id, [description, isDone, isMatched], {
                name: 'todos_tabel',
                columns: ['description', 'isDone', 'isMatched']
            })
            res.status(200).end();

        } catch (error) {
            console.log(error.message);
            res.status(400).end();
        }

    } else {
        res.status(400).end();
    }
});

router.delete('/', async (req, res, next) => {

    const id = validateInput(req.body.id);

    if (id) {
        try {
            await sql.delete(db, 'id', id, { name: 'todos_table' });
            res.status(200).end();

        } catch (error) {
            console.log(error.message);
            res.status(400).end();
        }

    } else {
        res.status(400).end();
    }
});


module.exports = router;