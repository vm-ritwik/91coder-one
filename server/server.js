// ES5 - format
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express() // instance -> Class Object
const port = 4200
const MONGO_URL = 'mongodb+srv://ritwik:ritwik123@91coderstreet.1uw5b.mongodb.net/coderdb?retryWrites=true&w=majority';

const Problem = require("./models/problem");

// Express Framework -> http ->
// input -> req
// out -> res

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URL).then((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("DB is Connected");
    }
});

let data = {
    "nayanthara": {
        age: "42",
        roles: "Actress"
    },
    "amitabh": {
        age: 72,
        roles: "Actor"
    }
};

app.use(cookieParser());
app.use(express.static('client'))
app.use(bodyParser());

app.use(function (req, res, next) {
    console.log(`${req.originalUrl}`);
    return next();
});

// CRUD

// api -> input json, output json, http

function checkUserValidation(id, next) {
    if (id && id.toString() === "1") {
        return next(null, true);
    }
    return next("Unauthorized");
}

app.get(`/api/problems/list`, function (req, res) {
    checkUserValidation(req.query.id, function (err, ok) {
        if (ok) {
            let query = {};
            Problem.find(query, function (err, saved) {
                if (err) {
                    return res.status(500).json(err)
                } else {
                    return res.json({
                        message: "Problem List",
                        problems: saved
                    })
                }
            });
        } else {
            return res.status(401).json({
                message: err
            })
        }
    })
});

app.post(`/api/problems/create`, function (req, res) {
    checkUserValidation(req.query.id, function (err, ok) {
        if (ok) {
            const problem = new Problem(req.body.problem);
            problem.save(function (err, saved) {
                if (err) {
                    return res.status(500).json(err)
                } else {
                    return res.json({
                        message: "Problem Added",
                        problem: saved
                    })
                }
            });
        } else {
            return res.status(401).json({
                message: err
            })
        }
    })
});

app.post(`/api/problems/id/:problemId/update`, function (req, res) {
    checkUserValidation(req.query.id, function (err, ok) {
        if (ok) {
            let query = {}; // Explain in the next class , +,-,/,*
            query.id = { $eq : req.params.problemId };
            let update = req.body.problem;
            Problem.findOneAndUpdate(query, update, function (err, saved) {
                if (err) {
                    return res.status(500).json(err)
                } else {
                    return res.json({
                        message: "Problem Update",
                        problem: saved
                    })
                }
            });
        } else {
            return res.status(401).json({
                message: err
            })
        }
    })
});

app.post(`/api/problems/id/:problemId/remove`, function (req, res) {
    checkUserValidation(req.query.id, function (err, ok) {
        if (ok) {
            let query = {}; // Explain in the next class , +,-,/,*
            query.id = { $eq : req.params.problemId };
            Problem.findOneAndDelete(query,function (err, saved) {
                if (err) {
                    return res.status(500).json(err)
                } else {
                    return res.json({
                        message: "Problem Removed",
                        problem: saved
                    })
                }
            });
        } else {
            return res.status(401).json({
                message: err
            })
        }
    })
});

app.get(`/books/:name`, (req, res) => {
    Book.findOne({name: {$eq: req.params.name}}, function (err, saved) {
        if (err) {
            return res.json(err)
        } else {
            return res.json({
                book: saved
            })
        }
    });
});

app.post(`/books/:name/update`, (req, res) => {
    Book.updateOne({name: {$eq: req.params.name}}, req.body.book, function (err, saved) {
        if (err) {
            return res.json(err)
        } else {
            return res.json({
                book: saved
            })
        }
    });
});

app.post(`/books/:name/remove`, (req, res) => {
    Book.findOneAndRemove({name: {$eq: req.params.name}}, function (err, saved) {
        if (err) {
            return res.json(err)
        } else {
            return res.json({
                book: saved
            })
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
// 127.0.0.1
// First Party Modules -> Us as developers -> math.js

// Third Party Modules -> Other developers -> http

// server.listen(5000, function() {
//     var name = "Ritwik";
//     console.log('listening on *:5000');
// });

// Communication Layer -> HTTP(S)

// GET
// POST

// FE OR BE

// URI VS URL
// UNIFORM RESOURCE IDENTIFIER VS UNIFORM RESOURCE LOCATION
// -> HTTPS://ZILLSKILL.COM VS HTTPS://ZILLSKILL.COM/
// '/' -> ROOT OR BASE PATH

// METHOD://DOMAIN OR IP

// https://en.wikipedia.org/wiki/Nayanthara -> Server -> HTML (browser)
// https://en.wikipedia.org/wiki/Amitabh_Bachchan

// https://api.zs.com/users/:id/wallet-balance?type=Debit
// post -> {}

// HTTPS://EN.WIKIPEDIA.ORG/WIKI/USER/:USER/STUDENT/:STUDENTID/:PARAM3?

// Routing -> BE (express)
// Routing -> FE (react router)
// Routing -> FE (route controller)
// Limitation ?
// stream data -> video, audio
// Limit -> 128 chars
// OUTPUT -> JSON
// GET -> URL -> query=delete
//            1. URL PARAMETERS -> // studentid, bankid
//            2. URL QUERY PARAMETERS -> ?query=123&ritwik=12&n=12
//     -> COOKIES
//     -> Headers
//     -> IP

// module specific, version of the api, paths for identifications

// https://paytm.paytm.com/v1/wallet/user/:userid/balance
// https://paytm.paytm.com/v1/wallet/user/:userid/debit

// Data Processing -> 100 layers , 1 layers

// get based math game -> sum, multiply, divide and difference -> a,b ->

// CRUD Operations

// Manipulating Data

