 let div = 100 , timer = 0 ; let cx1 , cx2 , cy1 , cy2 ; let y= [div];let y2= [div]; 
 function setup ( ) {
 createCanvas( 2000 , 1000 ) ;
 cx1= width/ 6 ; cy1= height/ 2 ; cx2= ( width/ 6 ) * 5 ; cy2= height/ 2 ; 
 for ( let i = 0 ; i< div; i++ ) { y[ i] = 500 ; y2[ i] = 500 ; } 
 
 }
 let task_done = false;
let last_done = 0;

 
 function draw(){
   const delay = 100 //ms
  if(!task_done) {
    /* do something */
    dos();
    task_done = true;
    last_done = millis();
  }
  else {
    if(millis() - last_done > delay) {
      task_done = false;
    }
  }
  
  
 }
 function dos ( ) {
 background( 255 ) ;
 circle( cx1, cy1, height/ 10 ) ; circle( cx2, cy2, height/ 10 ) ; for ( let i = 0 ; i< ( div- 2 ) ; i++ ) { line( ( ( cx2- cx1) / div) * ( i) + cx1, y[ i] + y2[ i] - 500 , ( ( cx2- cx1) / div) * ( i+ 1 ) + cx1, y[ i+ 1 ] + y2[ i+ 1 ] - 500 ) ; } line( ( ( cx2- cx1) / div) * ( div- 2 ) + cx1, y[ div- 2 ] + y2[ div- 2 ] - 500 , cx2, y[ div- 1 ] + y2[ div- 1 ] - 500 ) ; for ( let i = ( div- 2 ) ; i>= 1 ; i-- ) { y[ i] += y[ i- 1 ] - y[ i] ; } for ( let i = 1 ; i<= ( div- 2 ) ; i++ ) { y2[ i] += y2[ i+ 1 ] - y2[ i] ; }  } function mouseDragged ( ) { if ( mouseX<= cx1+ ( height/ 6 ) && mouseX>= cx1- ( height/ 6 ) && mouseY<= cy1+ ( height/ 6 ) && mouseY>= cy1- ( height/ 6 ) ) { cy1= mouseY; y[ 0 ] = mouseY; } if ( mouseX<= cx2+ ( height/ 6 ) && mouseX>= cx2- ( height/ 6 ) && mouseY<= cy2+ ( height/ 6 ) && mouseY>= cy2- ( height/ 6 ) ) { cy2= mouseY; y2[ div- 1 ] = mouseY; } } 
