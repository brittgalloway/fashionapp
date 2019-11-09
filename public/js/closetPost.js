var submitBtn = $("#submit");
var deleteBtn = $("#delete");

var closetAPI = {
  saveOutfit: function(outfits) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/closet",
      data: JSON.stringify(outfits)
    });
  },
  getOutfits: function() {
    return $.ajax({
      url: "api/closet",
      type: "GET"
    });
  },
  getOneOutfit: function(id) {
    return $.ajax({
      url: "api/closet" + id,
      type: "GET"
    });
  },
  deleteOutfit: function(id) {
    return $.ajax({
      url: "api/closet/" + id,
      type: "DELETE"
    });
  }
};

// refreshOutfits gets new outfits from the db and repopulates the list

refreshOutfits = function() {
  closetAPI.getOutfits().then(function(data) {
    //whatever handlebars are set for closet
    //   var $examples = data.map(function(example) {
    //     var $a = $("<a>")
    //       .text(comment.text)
    //       .attr("href", "/comment/" + comment.id);
    //     var $li = $("<li>")
    //       .attr({
    //         class: "list-group-item",
    //         "data-id": example.id
    //       })
    //       .append($a);
    //     var $button = $("<button>")
    //       .addClass("btn btn-danger float-right delete")
    //       .text("ｘ");
    //     $li.append($button);
    //     return $li;
    //   });
    //   $exampleList.empty();
    //   $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new outfit
// Save the new outfit to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var outfitsave = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(outfitsave.text && outfitsave.description)) {
    alert("You must save your outfit!");
    return;
  }

  closetAPI.saveOutfit(outfitsave).then(function() {
    refreshOutfits();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an outfit's delete button is clicked
// Remove the outfit from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  closetAPI.deleteOutfit(idToDelete).then(function() {
    refreshOutfits();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$deleteBtn.on("click", ".delete", handleDeleteBtnClick);
