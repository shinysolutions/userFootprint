var tt = setInterval(function(){
  if ($('#ui\\.appIframe Iframe').attr('height') !== undefined) {
    $('#ui\\.appIframe Iframe').attr('height', $(window).height()-46);
    console.log($('#ui\\.appIframe Iframe').attr('height'));
    clearInterval(tt);
  } 
},50);


// Action tracking;
// class is 'shiny-bound-input';
$(document).on("change", ".shiny-bound-input:not([id='tracking'])", function(evt) {
  var e = $(evt.target);
  var tagName = e.context.tagName;
  // SELECT
  if (tagName == "SELECT") {
    var A = {};
    A.id = e.context.id;
    A.type = e.context.type;
    var so = e.context.selectedOptions;
    var S = [];
    for (var i=0; i<so.length; i++) {
      var s = {};
      s[so[i].innerHTML] = so[i].value;
      S.push(s);
    }
    A.selected = S;
    var target = $("#tracking");
    target.val(JSON.stringify(A));
    target.trigger("change");  		
  }
  // INPUT
  if (tagName == "INPUT") {	
    var A = {};
    var type = e.context.type;
    //radioButtons, numericInput, passwordInput;
    if (["radio", "number", "password"].indexOf(type) >= 0) {
      if (type == "radio") {A.name = e.context.name;}
      A.id = e.context.id;
      A.value = e.context.value;
      A.label = e.siblings()[0].innerHTML;
      var target = $("#tracking");
      target.val(JSON.stringify(A));
      target.trigger("change");	      
    }
    //fileInput;
    if (type == "file") {
      A.id = e.context.name;
      files = [];		
      for (var i=0; i<e.context.files.length; i++) {
        files.push(JSON.stringify(e.context.files[i]));
      }
      A.files = files;
      var target = $("#tracking");
      target.val(JSON.stringify(A));
      target.trigger("change");	      
    }			
    //checkboxInput, checkboxGroupInput;
    if (type == "checkbox") {
      A.id = e[0].id;
      A.checked = e[0].checked;
      A.label = e.siblings()[0].innerHTML;
      var target = $("#tracking");
      target.val(JSON.stringify(A));
      target.trigger("change");	
    }
  }
});

// For type equal 'text' INPUT;
$(document).on("change", ".shiny-bound-input:not([id='tracking'])", function(evt) {
  var e = $(evt.target);
  var tagName = e.context.tagName;
  if (tagName == "INPUT") {
    var type = e.context.type;
    if (type == "text" && e.context.id != "svg") {
      var v = e.context.value;
      setTimeout(function(){
        var e = $(evt.target);
        if (e.context.value == v) {
          var A = {};
          A.value = e.context.value;
          var id = e.context.id;
          var label = e.siblings()[0].innerHTML;
          if (id === "") {
            var id = e.parent()[0].id;
            if (id === "") {
              var id = e.parent().parent()[0].id;
              var label = e.parent().siblings()[0].innerHTML
              if (e.siblings()[1].tagName == "SPAN") {
                A.dateType = "end";
              } else {
                A.dateType = "start";
              }
            }
          }
          A.id = id;
          A.label = label;
          var target = $("#tracking");
          target.val(JSON.stringify(A));
          target.trigger("change");
        }
      }, 500);
    }			
  }
});

// actionButton;
$(document).on("click", function(evt) {
  var e = $(evt.target);
  var tagName = e.context.tagName;
  if (["A", "BUTTON"].indexOf(tagName) >= 0) {
    var A = {};
    A.id = e.context.id;
    A.label = e.context.innerText;
    var target = $("#tracking");
    target.val(JSON.stringify(A));
    target.trigger("change");		
  }
});

// submitButton;
$(':submit').on("click", function(evt) {
  var e = $(evt.target); 
  if (e.context.tagName == "BUTTON") {
    var A = {};
    A.label = e.context.innerText;
    var target = $("#tracking");
    target.val(JSON.stringify(A));
    target.trigger("change");
  }
});

