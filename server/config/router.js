const user = require('../controller/controller.js');
module.exports = function(app){
    app.get('/movies',(req,res)=>{
        user.index(req,res);
    })
    app.post('/users',(req,res)=>{
        user.create(req,res);
    })
    app.post('/review/:id',(req,res)=>{
        user.create_review(req,res);
    })
    app.get('/users/:id',(req,res)=>{
        user.show(req,res);
    })
    app.get('/users/:id/edit',(req,res)=>{
        user.show(req,res);
    })
    app.put('/users/:id',(req,res)=>{
        user.update(req,res);
    })
    app.delete('/user/:id',(req,res)=>{
        user.delete(req,res);
    })
    app.delete('/review/:user_id/:review_id',(req,res)=>{

        movie.delete_id(req,res);
    })

}