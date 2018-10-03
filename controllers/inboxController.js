const db = require('../models');

module.exports = {
    create: function(request, response) {

        console.log('POST /api/inbox --> inboxController.create called')
        //The data should be in request.headers.body
        console.log(request.headers.body)


        db.Inbox.create({
            body:request.headers.body
        })
            .then(dbModel => { 
                console.log(dbModel)
                response.json(dbModel)
            })
            .catch(err => response.status(422).json(err));


        

        //I must re-examine this whole structure with the controllers
        //and the models and whatnot.

        // console.log(db.Inbox.create())
        // db.Inbox
        //     .create(request.body)
        //     .then(dbModel => { 
        //         console.log(dbModel)
        //         response.json(dbModel)
        //     })
        //     .catch(err => response.status(422).json(err));
    }


};