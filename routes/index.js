// routes/index.js

module.exports = function(app){

    app.get('/api/books', function(req, res){
        res.end();
    });

    app.get('/api/books/:book_id', function(req, res){
        res.end();
    });

    app.get('api/books/author/:auther', function(req, res){
        res.end();
    })

    app.post('api/books', function(req, res){
        res.end();
    });

    app.put('/api/books/:book_id', function(req, res){
        res.end();
    });
    
    app.delete('/api/boks/:book_id', function(req, res){
        res.end();
    });
}