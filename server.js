var express = require( 'express' );
var app = express();
var http = require( 'http' ).Server( app );
var io = require( 'socket.io' )( http );
var fs = require('fs');
var ytSearch = require('youtube-search');

// Serve static files
app.use( express.static( __dirname + '/dist' ) );

//Establish socket.io connection
io.on( 'connection', function( socket ) {
  console.log( 'Client connected', socket.id );
  // Listen for search event
  socket.on( 'search videos', function( searchTerm ) {
    const opts = {
      maxResults: 10,
      key: 'AIzaSyBl7kRhB0f_ysnLAHQEnEPlIiOcfkvf-0A' // Key is provided for demonstration, typically would move to .env file
    };
    console.log('inside server', searchTerm)

    ytSearch(searchTerm, opts, function(err, results) {
      if(err) return console.log(err);
      else {
        socket.emit( 'search results', results );
        console.log( 'search results', results );
      }
    });
  });

});

// Listen on port 8080
var port = process.env.PORT || 8080;
http.listen( port, function() {
  console.log( 'Server listening on port', port );
});
