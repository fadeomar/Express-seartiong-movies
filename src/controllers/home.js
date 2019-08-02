const path = require( 'path' ); 

exports.homepage = ( req, res ) => {
    res.sendFile(path.join(__dirname,'..', '..', 'public' , 'html', 'index.html'))
}