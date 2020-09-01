const express = require( 'express' );
var cors = require( 'cors' );
const app = express();
app.use( cors() );

app.get( '/movies', ( req, res ) =>
{
    let movies = [
        {
            id: 1,
            title: "Movie 1"
        },
        {
            id: 2,
            title: "Movie 2"
        },
        {
            id: 3,
            title: "Movie 3"
        }
    ];
    return res.send( Object.values( movies ) );
} );

app.listen( 3001 );
