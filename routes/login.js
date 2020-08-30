const { Router } = require('express');
const router = Router();
const { Offer } = require("../database");

router.get('/login',(req,res) => {
    console.log(req.session,'BEFORE RENDERING')
    if (!req.session.message) {
        req.session.message = [];
    }
    Offer.getMain_info_home().then(item => {
        res.render("login", {
            title: "Login",
            display: 'display_none',
            error: req.session.error,
            main_info__home: item[0],
            isAuth: req.session.isAuth,
            messages: req.session.message
        });
    });
    if (req.session.error) {
        req.session.error = '';
    }
    console.log(req.session,'AFTER RENDERING')
});


router.post("/login", (req, res) => {

    Offer.getAdmins().then(users => {
        console.log(users);
        let client = users.filter(item => {
            if (item.login == req.body.login) {
                return item;
            }
        });
        // if exist
        if(client.length > 0){
            
            if(client[0].password == req.body.password){
                console.log('i exist');
                req.session.isAuth = true;
                let message_succes = {
                    text: 'Welcome '+client[0].name+'',
                    id: Date.now()
                };
                req.session.message.length = 0;
                req.session.message.push(message_succes);
                res.redirect("/admin");
                console.log('-------',req.session);
            }
            else{
                console.log('i do not exist')
                req.session.isAuth = false;
                console.log('-------',req.session);
                req.session.error = 'Wrong password';
                res.redirect('/login');
            }
        }
        // if not-exist
        else{
            console.log('unavailable');
            req.session.error = 'Wrong username';
            res.redirect("/login");
        }
        console.log('------',req.session)
        // res.redirect('/login');
    })
});

module.exports = router;