// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors())

// Initialize the database
let db = new sqlite3.Database(':memory:');

// Read alliterations from the JSON file
const alliterations = JSON.parse(fs.readFileSync('alliterations.json', 'utf8'));

db.serialize(() => {
    db.run("CREATE TABLE alliterations (id INTEGER PRIMARY KEY, text TEXT)");

    let stmt = db.prepare("INSERT INTO alliterations (id, text) VALUES (?, ?)");
    alliterations.forEach(item => {
        stmt.run(item.id, item.text);
    });
    stmt.finalize();
});

// API to fetch a random entry
app.get('/api/random', (req, res) => {
    db.get("SELECT * FROM alliterations ORDER BY RANDOM() LIMIT 1", (err, row) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.json(row);
    });
});

// API to fetch an entry by ID and its previous and next IDs
app.get('/api/entry/:id', (req, res) => {
    const id = parseInt(req.params.id);
    db.get("SELECT * FROM alliterations WHERE id = ?", [id], (err, row) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        if (!row) {
            return res.status(404).send("Entry not found");
        }
        const entry = { ...row };
        db.get("SELECT id FROM alliterations ORDER BY id ASC LIMIT 1", [], (err, row) => {
            const firstId = row ? row.id : null;
            db.get("SELECT id FROM alliterations ORDER BY id DESC LIMIT 1", [], (err, row) => {
                const lastId = row ? row.id : null;
                let previousId, nextId;
                if (id === firstId) {
                    previousId = lastId;
                    nextId = id + 1;
                } else if (id === lastId) {
                    previousId = id - 1;
                    nextId = firstId;
                } else {
                    previousId = id - 1;
                    nextId = id + 1;
                }
                entry.previousId = previousId;
                entry.nextId = nextId;
                res.json(entry);
            });
        });
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
