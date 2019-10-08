const app = require( "../server" );
const chai = require( "chai" );
const request = require( "supertest" );
const chaHttp = require( "chai-http" );
const { Natterbase } = require( "../models" );

const { expect } = chai;
chai.use( chaHttp );

describe( "Natterbase route", () => {
  let data;

  describe( "natterbase post", () => {
    it( "should make a new post", ( done ) => {
      request( app )
        .post( '/api/v1/create' )
        .send( {
          type: "durban",
          crux: "Indices",
          color: "Green",
          title: "Indicted idiot"
        } )
        .end( ( err, res ) => {
          data = res.body
          expect( res.status ).to.eq( 200 );
          expect( res.body.type ).to.eq( 'Durban' );
          done()
        } )
    } )
    
    describe( "Should delete a natterbase", () => {
      it( "Delete a natterbase", ( done ) => {
        request( app )
          .delete( `/api/v1/delete/${ data.type}` )
          .end( ( err, res ) => {
            expect( res.status ).to.eq( 200 );
            expect( res.body ).to.be.an( "object" );
            done()
          })
      } )
    })
    
  })
} )
