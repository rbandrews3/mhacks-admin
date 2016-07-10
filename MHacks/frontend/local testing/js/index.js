var grid = document.querySelector('.grid');
var mason = new Packery( grid, {
  columnWidth: 160,
  isFitWidth: true
});

/* 
 * Do we want to limit it so that only one tile can be expanded?
 * i.e. contract the previously expanded tile while expanding the new one?
 */
grid.addEventListener( 'click', function( event ) {
  // don't proceed if item was not clicked on
  if ( !matchesSelector( event.target, '.grid-item' ) ) {
    return;
  }
  if ( $(event.target).data("expandable") != 1 ) {
      return;
  }
  // change size of item via class
  event.target.classList.toggle('grid-item--gigante');
  // trigger layout
  setTimeout(function(){
      mason.layout();
  }, 400);
});

mason.on( 'layoutComplete', function( laidOutItems ) {
  console.log( 'Masonry layout complete with ' + laidOutItems.length + ' items' );
});

$(window).resize(function(){
    setTimeout(function(){
        console.log("done with delay");
        mason.layout();
    }, 400);
});