const test = require( 'tape' );

test( 'first test', (t) => {
  const actual = 5;
  t.equal( actual, 5, ' should return 5 ' );
  t.end( );
})
;
