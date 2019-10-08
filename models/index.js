const mongoose = require( "mongoose" );
const { Schema } = mongoose;

const natterbaseSchema = new Schema( {
  type: { type: String },
  crux: { type: String },
  color: { type: String },
  title: { type: String }
} );

const Natterbase = mongoose.model( "Natterbase", natterbaseSchema)

exports.Natterbase = Natterbase

// ‘durban’, ‘Indices’, ‘green’, ‘Indict the idiot'