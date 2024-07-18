function newItem() {
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);
  
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      $("#list").append(li);
    }
  
    // Crossing out an item from the list of items
    function crossOut() {
      li.toggleClass("strike");
    }
  
	  li.on("dblclick", function crossOut() {
      li.toggleClass("strike");
    });
  
    // Adding the delete button
    let crossOutButton = $("<button></button>");
    crossOutButton.text("X");
    li.append(crossOutButton);
  
    function deleteListItem() {
      li.addClass("delete");
    }
  
    crossOutButton.on("click", deleteListItem);
  
    // Making the list sortable
    $("#list").sortable();
  }
  