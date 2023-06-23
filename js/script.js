$(document).ready(function(){
    
    // DRAGGABLE
    $( "#dragg" ).draggable();

    // ACCOURDIAN
    $( "#accordion" ).accordion({
        collapsible:true  
    });
    // sortable drag
    $( "#sortable" ).sortable({
      
      });
    $( "#draggable" ).draggable({
        connectToSortable: "#sortable",
        helper: "clone",     
        revert: "invalid"
      });

      $( "ul, li" ).disableSelection();
     
    //   droppable
    $( "#draggab, #draggable-nonvalid" ).draggable();
    $( "#droppable" ).droppable({
      accept: "#draggable",
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
    // resiable
    $( "#resizable" ).resizable();
    // selectable
    $( "#selectable" ).selectable();
    // sortable
    $( "#sortable1, #sortable2" ).sortable({
        connectWith: ".connectedSortable"
      }).disableSelection();
    //   autocomplete
      var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
      $( "#tags" ).autocomplete({
        source: availableTags
      });
    //   datepicker
    $( "#datepicker" ).datepicker();
    // dialog
    $( "#dialog" ).dialog();
    // tabs
    $( "#tabs" ).tabs();
    // tooltip
    $( document ).tooltip();
    
    // addClass start

    $( "#button1" ).on( "click", function() {
      $( "#effect1" ).addClass( "newClass", 1000, callback );
    });
    function callback() {
      setTimeout(function() {
        $( "#effect1" ).removeClass( "newClass" );
      }, 1500 );
    }
    // colorchang
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });

    // Toggle Class
    $( "#button2" ).on( "click", function() {
      $( "#effect2" ).toggleClass( "newClass", 1000 );
    });
    // menu
    $( "#menu" ).menu();
    // ProgressEvent
    var progressbar = $( "#progressbar" ),
    progressLabel = $( ".progress-label" );

  progressbar.progressbar({
    value: false,
    change: function() {
      progressLabel.text( progressbar.progressbar( "value" ) + "%" );
    },
    complete: function() {
      progressLabel.text( "Complete!" );
    }
  });

  function progress() {
    var val = progressbar.progressbar( "value" ) || 0;

    progressbar.progressbar( "value", val + 2 );

    if ( val < 99 ) {
      setTimeout( progress, 80 );
    }
  }

  setTimeout( progress, 9000 )
      // selectmenu
      var circle = $( "#circle" );
 
      $( "#radius" ).selectmenu({
        change: function( event, data ) {
          circle.css({
            width: data.item.value,
            height: data.item.value
          });
        }
       });
   
      $( "#color" ).selectmenu({
         change: function( event, data ) {
           circle.css( "background", data.item.value );
         }
       });
      //  slider
      $( "#slider-range-max" ).slider({
        range: "max",
        min: 1,
        max: 10,
        value: 2,
        slide: function( event, ui ) {
          $( "#amount" ).val( ui.value );
        }
      });
      $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
      // spinner
      $( "#currency" ).on( "change", function() {
        $( "#spinner" ).spinner( "option", "culture", $( this ).val() );
      });
   
      $( "#spinner" ).spinner({
        min: 5,
        max: 2500,
        step: 25,
        start: 1000,
        numberFormat: "C"
      });
      // dialog
      $( "#dialog-message" ).dialog({
        modal: true,
        buttons: {
          Ok: function() {
            $( this ).dialog( "close" );
          }
        }
      });
          // position
      function position() {
        $( ".positionable" ).position({
          of: $( "#parent" ),
          my: $( "#my_horizontal" ).val() + " " + $( "#my_vertical" ).val(),
          at: $( "#at_horizontal" ).val() + " " + $( "#at_vertical" ).val(),
          collision: $( "#collision_horizontal" ).val() + " " + $( "#collision_vertical" ).val()
        });
      }
   
      $( ".positionable" ).css( "opacity", 0.5 );
   
      $( "select, input" ).on( "click keyup change", position );
   
      $( "#parent" ).draggable({
        drag: position
      });
   
      position();


});