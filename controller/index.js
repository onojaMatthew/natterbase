const { Natterbase } = require( "../models" );

exports.createData = ( req, res ) => {
    const { type, crux, color, title } = req.body;

    if ( !type || !crux || !color || !title ) return res.status( 400 ).json( {
        error: "Incomplete data. Please enter all required in put"
    } );

    let natterbase = new Natterbase( {
        type, crux, color, title
    } );

    return natterbase.save( ( err, data ) => {
        if ( err || !data ) return res.status( 400 ).json( {
            error: `Could not create data ${ err.message }`
        } );
        return res.json( data );
    } );
}

// Gets all data from the database
exports.fetchAll = ( req, res ) => {
    Natterbase.find( {} ).then( data => {
        if ( !data ) return res.status( 400 ).error( {
            error: "Records empt"
        } );
        return res.json( data );
    } )
        .catch( err => {
            res.json( {
                error: err.message
            } );
        } );
}

// this function deletes an object from the database
exports.deleteData = ( req, res ) => {
    const { type } = req.params;

    // Checks if params is provided
    if ( !type ) return res.status( 400 ).json( {
        error: "Bad request. No param was provided"
    } );

    Natterbase.findOneAndRemove( { type } )
        .then( data => {
            if ( !data ) return res.status( 400 ).json( {
                error: "attribute not found"
            } );

            res.json( data );
        } )
        .catch( err => {
            res.status( 400 ).json( { error: err.message } );
        } );
}