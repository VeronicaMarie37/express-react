// ./controllers/people-controller.js

const express = require('express')
const router = express.Router()
const {People} = require('../models/models')

///////////////////////////////
// ROUTES
////////////////////////////////

// PEOPLE INDEX ROUTE
router.get("/", async (req, res) => {
    try {
      // get all people
      res.json(await People.find({}));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
  
  // PEOPLE CREATE ROUTE
  router.post("/", async (req, res) => {
    try {
      // send all people
      res.json(await People.create(req.body));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
  
  // PEOPLE SHOW ROUTE
  router.get("/:id", async (req, res) => {
      try {
          // get people by ID
          res.json(await People.findById(req.params.id));
        } catch (error) {
          //send error
          res.status(400).json(error);
        }
  });
  
  // PEOPLE UPDATE ROUTE
  router.put("/:id", async (req, res) => {
    try {
      // update people by ID
      res.json(
        await People.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
  
  // PEOPLE DELETE ROUTE
  router.delete("/:id", async (req, res) => {
    try {
      // delete people by ID
      res.json(await People.findByIdAndRemove(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
  

module.exports = router

