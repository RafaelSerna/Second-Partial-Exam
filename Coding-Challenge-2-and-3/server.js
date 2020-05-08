const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const jsonParser = bodyParser.json();
const { DATABASE_URL, PORT } = require( './config' );
const { Sports } = require('./models/sport-model');

const app = express();

/* Your code goes here */
app.delete('/sports/delete:id', (req, res) => {
    let sportId = req.id;
    if (!sportId) {
        res.statusMessage = "ID not sent";
        return res.status(406).end();
    }
    if (sportId != id) {
        res.statusMessage = "IDs don't match";
        return res.status(409).end();
    }
    Sports
        .deleteSport(id)
        .then(result => {
            return res.status(204).end();
        })
        .catch(err => {
            return res.status(404).end();
        })
})


app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});