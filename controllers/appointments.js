const express = require('express');
const router = express.Router();
const appointmentsList = require('../models/appointments');
const axios = require('axios')
const api_helper = require('./api_helper');
const verifyToken = require('./tokenValidator');


//GET HTTP method to /appointments
router.get('/',(req,res) => {
    appointmentsList.getAllLists((err, lists) => {
        if (err) {
            res.json({success: false, message: `Failed to load all lists. Error: ${err}`});
        } else {
            res.write(JSON.stringify({success: true, lists:lists},null,2));
            res.end();
        }
    })
});

router.get('/patient', verifyToken,(req,res) => {    
    api_helper.make_API_call('http://localhost:3001/vr/api/appointment/patient/' + req.userId)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    });
});
//POST HTTP method to /appointments

router.post('/createappointment', (req,res,next) => {
        let newList = new appointmentsList({
            doctorId: req.body.doctorId ,
            date: req.body.date,
            patientId: req.body.patientId || null,
            appointmentStatus: req.body.appointmentStatus
        });
        appointmentsList.addList(newList, (err, list) => {
            if (err) {
                res.json({success: false, message: `failed to create a new list. Error: ${err}`})
            } else {
                res.json({success: true, message: 'Added new list'});
            }
        })
    });


//DELETE HTTP method to /doctors. Here, we pass in a params which is the object dni.
router.delete('/', (req,res,next) => {
    
    let id;
    let dni = parseInt(req.body.dni);
    appointmentsList.findOne({dni: dni}, function (err, obj) {
        id = obj.id;  
        //Call the model method deleteListById
        appointmentsList.deleteListById(id,(err,list) => {
            if(err) {
                res.json({success:false, message: `Failed to delete the list. Error: ${err}`});
            }
            else if(list) {
                res.json({success:true, message: "Deleted successfully"});
            }
            else
                res.json({success:false});
        })
    });
    
  });

 

module.exports = router;