window.addEventListener('load', function() {

  var radiobuttons = document.querySelectorAll('input[type=radio]');

  for(var i = 0; i < radiobuttons.length; i++ ) {
    var rb = radiobuttons[i];

    console.log(rb.tagName + " " + rb.id)

    rb.addEventListener('change', updateRadioGroup);
    rb.addEventListener('focus', focusRadioButton);
    rb.addEventListener('blur', blurRadioButton);
  }

});


/*
* @function setRadioButton
*
* @desc Toogles the state of a radio button
*
* @param   {Object}  event  -  Standard W3C event object
*
*/

function setRadioButton(node, state) {
  var image = node.getElementsByTagName('img')[0]

  if (state == 'true') {
    node.setAttribute('aria-checked', 'true')
    image.src = './images/radio-checked.gif'
  }
  else {
    node.setAttribute('aria-checked', 'false')
    image.src = './images/radio-unchecked.gif'
    
  }  
}

/*
* @function updateRadioGroup
*
* @desc 
*
* @param   {Object}   node  -  DOM node of updated group radio buttons
*/
function updateRadioGroup(event) {
  var type = event.type;
  
  if (type === 'click' || (type === 'keydown' && (event.keyCode === 13 || event.keyCode === 32))) {
    // If either enter or space is pressed, execute the funtion

    var node = event.currentTarget;

    console.log(node.tagName + " " + node.id);

    var radiobuttons = node.parentNode.querySelectorAll('[role=radio]');

    var state = 'false';
    var count = 0;

    for (var i = 0; i < radiobuttons.length; i++) {
      if (radiobuttons[i] === node) setRadioButton(node, "true");
      else setRadioButton(radiobuttons[i], "false");
    } 


    event.preventDefault();
    event.stopPropagation();
  }
}

/*
* @function focusRadioButton
*
* @desc Adds focus styling to label element encapsulating standard checkbox
*
* @param   {Object}  event  -  Standard W3C event object
*/

function focusRadioButton(event) {
  event.currentTarget.className += ' focus' ;
}

/*
* @function blurRadioButton
*
* @desc Adds focus styling to the label element encapsulating standard checkbox
*
* @param   {Object}  event  -  Standard W3C event object
*/

function blurRadioButton(event) {
  event.currentTarget.className = event.currentTarget.className.replace(' focus','');
}
