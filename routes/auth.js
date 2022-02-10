const router = require('express').Router();
let login = require('../models/login');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const timestamp = require('time-stamp');

router.route('/registration').post((req,res) => {
    bcrypt.hash(req.body.CPassword, 10,function(err,hashedPass){
        if(err){
            res.json({
                error:err
            })
        }

  
    const password = hashedPass;
    const status = "Active";
    const userName = req.body.UserName;
    const userType = req.body.userType;
    const timeStamp = timestamp('YYYY/MM/DD:mm:ss')
    const authFunction = new login({userName, password, userType, timeStamp , status});

    authFunction.save()
        .then(() => res.json('User Registered!'))
        .catch(err => res.status(400).json('Error: '+err));
            })
});


router.route('/login').post((req, res, next) => {
        var userName = req.body.UserName;
        var password = req.body.password;
    
        login.findOne({$or: [{userName:userName}]}) 
        .then(systemLogin =>{
            if(systemLogin){
                    bcrypt.compare(password, systemLogin.password, function(err, result){
                        if(err){
                            res.json({
                                error:err
                            })
                        }
                        if(result){
                            login.find({userName:userName})
                            .then(userSearch => res.json({
                                      success:userSearch[0].userType,
                                    }))
                            .catch(err => res.status(400). res.json({
                                success:false,
                            })) 
                        }else{
                            res.json({ message: false})    
                        }
                    })
            }else{
                res.json({
                    message: false
                })
            }
        })
});
 
router.route('/updatePassword/:UserName').put((req, res)=>{
    var userName = req.params.UserName;
       
       bcrypt.hash(req.body.CPassword, 10,function(err,hashedPass){
        if(err){
            res.json({
                error:err
            })
          }
           const password = hashedPass;
           const updatePass={
               password
           }
       const update1 =  login.findOneAndUpdate({userName:userName},updatePass).then(() => {
               
        res.status(200).send({status :"Password updated"});
            
        }).catch((err) => {
            console.log(err);
            res.status(400).send({status: "Error with Updating Data",error: err.message});
        });
          
    })
});  


module.exports = router;