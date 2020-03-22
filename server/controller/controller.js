const User = require('../models/model.js').User;
module.exports = {
    index: function(req,res){
    },
    new: function(req,res){
        
    },
    
    create:function(req,res){
        let user = new User()
        user.name = req.body.name;
        user.email = req.body.email;
        user.dob = req.body.dob;
        user.password = req.body.password;
        user.conf_password = req.body.conf_password;
        user.save()
            .then(user=>{
                console.log(user);
                res.json(user);
            })
            .catch(err => {
                bad=[];
                // adjust the code below as needed to create a flash message with the tag and content you would like
                for (var key in err.errors) {
                    bad.push(err.errors[key].message);
                }
                res.json(bad);
            })
    },
    show:function(req,res){
        
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