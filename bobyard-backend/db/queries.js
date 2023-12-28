const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'hkim', // CHANGE TO YOUR POSTGRES USERNAME
    host: 'localhost',
    database: 'bobyard', // CHANGE TO YOUR POSTGRES DB NAME
    password: 'august27', // CHANGE TO YOUR POSTGRES USER PASSWORD
    port: 5432,
});

// MAKE SURE THE TABLE NAME MATCHES THE NAME OF THE TABLE ON IN YOUR SPECIFIC DB
// THE TABLE NAME I USED IS comments

const seedDb = async (comments) => {
    // makes sure the seeding data is not duplicated inside table
    await pool.query('TRUNCATE comments', (error, results) => {
        if (error) {
            console.log('failed to truncate table', error);
            throw error;
        }
        console.log('successfully truncated table');
    });

    for (const comment of comments) {
        console.log(`inserting ${comment} into table`);
        await pool.query(
            'INSERT INTO comments (id, parent, author, text, date, likes, image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [parseInt(comment.id  || '-1'), parseInt(comment.parent || '-1'), comment.author, comment.text, comment.date, comment.likes, comment.image],
            (error, results) => {
                if (error) {
                    console.log('failed to insert comment', comment, error);
                    throw error;
                }
                console.log(`successfully inserted comment ${comment} into table`);
            }
        )
    }
};

const getAllComments = (req, res) => {
    pool.query('SELECT * FROM comments ORDER BY id ASC', (error, results) => {
        if (error) {
            console.log('failed to get all comments', error);
            throw error;
        }
        res.json(results.rows);
    });
};

const createComment = (req, res) => {
    const { text, image } = req.body;

    pool.query('INSERT INTO comments (author, text, image) VALUES ($1, $2, $3) RETURNING *', ['admin', text, image], (error, results) => {
        if (error) {
            console.log('failed to create comment', error);
            throw error;
        }
        res.status(201).send(`Comment added with ID: ${results.rows[0].id}`);
    })
};

const updateComment = (req, res) => {
    const id = parseInt(req.params.id);
    const { text } = req.body;

    pool.query('UPDATE comments SET text = $1 WHERE id = $2 RETURNING *', [text, id], (error, results) => {
        if (error) {
            console.log('failed to update comment', error);
        }
        res.status(200).send(`Comment updated with ID: ${results.rows[0].id}`);
    });
};

const deleteComment = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM comments WHERE id = $1 RETURNING *', [id], (error, results) => {
        if (error) {
            console.log('failed to delete comment', error);
        }
        console.log(`Comment deleted with ID ${results.rows[0].id}`);
        res.status(200).send(`Comment deleted with ID ${results.rows[0].id}`);
    })
}

module.exports = {
    seedDb,
    getAllComments,
    createComment,
    updateComment,
    deleteComment,
}