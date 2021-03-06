
//shorthand on ready function
$(function() {
    //for the add new burger form
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
    //new burger is created with a name and default devoured set to zero(false)
      const newBurger = {
        burger_name: $("#newBurger").val().trim(),
        devoured: 0
      };
    //Post request to put new burger into db
      $.ajax("/api/burger_eats", {
        type: "POST",
        data: newBurger
      })
      //console.log if added then reload page
      .then(function() {
        console.log("Added new burger");
        location.reload();
      });
    });
    //Devour button has eatburger class and will change devoured to 1 (true)
    $("#eatbutton").on("click", function(event) {
      //prevent default so we don't reload page before changing devoured state 
      event.preventDefault();
    //id equal to buttons data field of id (data-id)
      let id = $(this).data("id");
      
      let devouredState = {
        devoured: 1
      };
      //find burger by id within db
      $.ajax("/api/burger_eats/" + id, {
        type: "PUT",
        data: devouredState
      })
      //console.log then reload page
      .then(function() {
        console.log("Burger devoured");
        location.reload();
      });
    });
    //throw away option if you wouldn't eat that burger
    $(".trashburger").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
      }).then(
        console.log("gross"),
        location.reload());
    });

  });

  