
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
    $(".eatburger").on("click", function(event) {
      event.preventDefault();
    //id equal to buttons data field of id (data-id)
      let id = $(this).data("id");
      let devoured = {
        devoured: 1
      };
      //find burger by id within db
      $.ajax("/api/burger_eats/:" + id, {
        type: "PUT",
        data: devoured
      })
      //console.log then reload page
      .then(function() {
        console.log("Burger devoured");
        location.reload();
      });
    });

  });