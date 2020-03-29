const User = require('../models/model.js').User;
var bcrypt = require('bcrypt');

module.exports = {
    index: function(req,res){
    },
    new: function(req,res){
        
    },
    
    create:function(req,res){
            
        
        if(req.body.password != req.body.conf_password){
            bad=[];
            bad.push("Password must match")
            res.json(bad)
                    
        }
        else{
            bcrypt.hash(req.body.password, 10)
                .then(pw=>{
                    let user = new User()
                    user.name = req.body.name;
                    user.email = req.body.email;
                    user.dob = req.body.dob;
                    user.password = pw;
                    user.conf_password = pw;
                    user.save()
                    .then(user=>{
                        console.log(user)
                        res.json(user)
                    })
                    .catch(err => {
                        bad=[];
                        // adjust the code below as needed to create a flash message with the tag and content you would like
                        for (var key in err.errors) {
                            bad.push(err.errors[key].message);
                        }
                        res.json(bad);
                    })
                })
        }
        

    },
    session:function(req,res){
        console.log(req.body.password)
        bcrypt.compare('req.body.password','User.findOne({email:req.body.email})')
            .then(user=>{
                console.log(user)
                res.json(user);
            })
            .catch(err=>{
                res.json(err);
            })
    },
    edit:function(req,res){

    },
    update:function(req,res){

    },
    delete: function(req,res){
        
    },
    delete_id: function(req,res){
        
        
    }
    

}