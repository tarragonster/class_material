//Todo 1. Scroll to the top of the page with jQuery

// $("a[href='#top']").click(function() {
//   $("html, body").animate({ scrollTop: 0 }, "slow");
//   return false;
// });

//Todo 2. Disable the submit button until the visitor has clicked a check box

// $('#accept').click(function() {
//   if ($('#submitbtn').is(':disabled')) {
//     $('#submitbtn').removeAttr('disabled');
//   } else {
//     $('#submitbtn').attr('disabled', 'disabled'); }
// });

//Todo 3. Limit character input in the textarea including count

// var maxLength = 15;
// $('textarea').keyup(function() {
//   var textlen = maxLength - $(this).val().length;
//   $('#rchars').text(textlen);
// });

// Todo 4. Create a div using jQuery with style tag

// function new_div() {
//   $(document).ready(function() {
//     var test = {
//       id: "div",
//       class: "divclass",
//       css: { "color": "Green"
//       }
//     };
//     var $div = $("<div>", test);
//     $div.html("New Division");
//     $("body").append($div);
//   });
// }

// Todo 5.  Select values from a JSON object using jQuery
//
// var colors = { "color1": "Red", "color2": "Green", 'color3': "Blue" };
// $.each(colors, function(key, value) {
//   $('#divSelect').append(
//     $("<option/>", { value: key, text: value })
//   );
// });

// Todo 6. Find all h1 elements that are children of a div element and apply a background to them

// <body>
// <h1>abc</h1>
// <div>
// <h1>div-1</h1>
// <h1>div-2</h1>
// </div>
// <h1>xyz</h1>
// </body>
//
// $( "div > h1" ).css("background", "#0686c9");

// Todo 7. Set the background color of a page to red

// $('body').css( "background", "red" );

// Todo 8. Hide all the input elements within a form

// <body>
// <form  name='demo_form'>
//   First name: <input type="text" name="fname"><br>
//   Last name: <input type="text" name="lname"><br>
//   <input type="submit" value="Submit">
// </form>
// </body>
//
// $( demo_form.elements ).hide();

// Todo 9. Find the specific option tag text value of a selected option.

// <body>
// <select id="myselect">
//   <option value="1">Option-1</option>
//   <option value="2">Option-2</option>
//   <option value="3">Option-3</option>
// </select>
// </body>
//
// var txt = $("#myselect option[value=2]").text(); console.log(txt);

// Todo 10.  Check/uncheck a checkbox input or radio button?
//
// <body>
// <form action="">
//   <input type="radio" name="sex" value="male" checked>Male<br>
// <input type="radio" name="sex" value="female">Female
//   </form>
//   </body>
//
// $('input:radio[value=female]').prop("checked", true );

// Todo 11. Write jQuery code to append a div element (and all of its contents) dynamically to the body element.
// <div>
// <h1>JQuery Core</h1>
// </div>
//
// $( "<div><h1>JQuery Core</h1></div>" ).appendTo( "body" );

// Todo 12. Write a jQuery Code to get a single element from a selection
//
// <body>
// <ui>
// <li>Html Tutorial</li>
// <li>Mongodb Tutorial</li>
// <li>Python Tutorial</li>
// </body>
//
// var listItems = $( 'li' );
// var rawListItem = listItems[1];
// var html = rawListItem.text();
// console.log(html);


// Todo 13.  Attach a click event to the <p> element
//
// <body>
// <p>Click me!</p>
// <div id="result"></div>
// </body>
//
// $("p").on("click", function(){
//   $( "<p>This is a click Event</p>").appendTo( "#result" );
//
//   $("#result").append("<p>This is a click Event</p>")
// });

// Todo 14.   Append a <p> element with a text message when an <input> field is changed
//
// <form  name='demo_form'>
//   First name: <input type="text" name="fname"><br>
//   Last name: <input type="text" name="lname"><br>
//   <input type="submit" value="Submit">
//   </form>
//   </body>
//
// $( "input[name='fname']").change(function() {
//   $( "<p>The text has changed.</p>" ).appendTo( "body" );
//   $('body').append( "<p>The text has changed.</p>");
// });

// Todo 15. Hide all headings on a page when they are clicked.
//
// <body>
// <h1>Heading-1</h1>
// <h2>Heading-2</h2>
// <h3>Heading-3</h3>>
// </body>
//
// $("h1,h2,h3" ).click(function() { $( this ).slideUp(); });

// Todo 16. Add toggle class onclick to change background color.
//
// <body>
// <p>Click here to change the background color.</p>
// </body>
//
// p {
//   background: blue;
//   color: white;
// }
// p.dbl {
//   background: yellow;
//   color: black;
// }
//
// var pdbl = $( "p:first" );
// pdbl.dblclick(function() {
//   pdbl.toggleClass( "dbl" );
// });

// Todo 17.  Click a header to add another.
//
// <h1>Click me to add another!</h1>
//
// $("body").delegate( "h1", "click", function() {
//   $(this).after( "<h1>Another header!</h1>" );
// });

// Todo 18.   Change the background color of the <div> element of the following code on clicking the button.
//
// <body>
// <div style="background-color:yellow">
//   <p>Click the button to change the background color of this paragraph.</p>
// <button>Click me!</button>
// </div>
// </body>
//
// $("div").on( "click", function( event ) {
//   $(event).css( "background-color", "green");
// });

// Todo 19.  Stop people from writing in first text input box (user ID)
//
// <body>
// <p>User ID : <input type="text" id='field1'></p>
// <p>Password : <input type="password" id='field2'>
// </body>
//
// $( "input[type=text]" ).focus(function() {
//   $( this ).blur();
// });

// Todo 19.  Stop people from writing in first text input box (user ID)

// <body>
// <button>Display event.result</button>
// <p></p>
// </body>

// $( "button" ).click(function( event ) {
//   return "Hello";
// });
// $( "button" ).click(function( event ) {
//   $( "p" ).html( event.result );
// });

// Todo 20. Display the tag's name on click

// <body>
// <h1>Heading1</h1>
// <h2>Heading2</h2>
// <p>Paragraph</p>
// <button>Button</button>
// <div id="log"></div>
// </body>

// $( "body" ).click(function( event ) {
//   $( "#log" ).html( "Clicked a " + event.target.nodeName );
// });

// Todo 20. Set the focus to the second box.

// <body>
// <p>First Name: <input type="text" id='field1'></p>
// <p>Last Name: <input type="password" id='field2'></p>
// </body>

// $( document ).ready(function() {
//   $( "#field2" ).focus();
// });
