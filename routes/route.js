const express = require("express");
const route = express.Router();

const Trainer = require("../model/trainers");
const Member = require("../model/members");
const Applicant = require("../model/applicants");

//adding member
route.post('/register', (req,res,next) => {
    //extract details
    let newMember = new Member({
        name: req.body.name,
        gender: req.body.gender,
        dob: req.body.dob,
        primeMob: req.body.primeMob,
        secMob: req.body.secMob,
        email: req.body.email,
        address: req.body.address,
        father: req.body.father,
        mother: req.body.mother,
        spouse: req.body.spouse,
        memType: req.body.memType,
        facilities: req.body.facilities,
    });
    //post the data to mongodb. This inserts the data into the collection 'MembersData'
    newMember.save((err,member) => {
        if(err) res.json(err)
        else {console.log("Member added!");
        res.render('successReg')
    }
});
});

//adding applicant
route.post('/apply', (req,res,next) => {
    //extract details
    let newApplicant = new Applicant({
        name: req.body.name,
        gender: req.body.gender,
        dob: req.body.dob,
        primeMob: req.body.primeMob,
        secMob: req.body.secMob,
        email: req.body.email,
        address: req.body.address,
        father: req.body.father,
        mother: req.body.mother,
        spouse: req.body.spouse,
        sport: req.body.sport
    });
    //post the data to mongodb. This inserts the data into the collection 'ApplicantsData'
    newApplicant.save((err,applicant) => {
        if(err) res.json({msg: 'Failed to add applicant', err:err})
        else {
            console.log("Applicant added!");
            res.render('successApply');
        } 
    });
});

//retrieving trainer details
route.post('/trainer', (req,res,next) => {
    //get from mongodb. This retrieves data from the collection 'TrainersData'
    Trainer.find({"sport": req.body.sport}, (err,trainer) => {
        if(err) res.json({msg:'No trainer found', err:err});
        //else res.json(trainer);
        else res.render('trainers', {t: trainer});
        // else console.log(trainer);
    })
});

module.exports = route;