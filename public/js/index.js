// Get references to page elements
var $outfitText = $("#outfit-text");
var $outfitDescription = $("#outfit-description");
var $submitBtn = $("#submit");
var $outfitList = $("#outfit-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveOutfit: function(outfit) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(outfit)
    });
  },
  getOutfits: function() {
    return $.ajax({
      url: "api/outfits",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $outfitsList.empty();
    $outfitsList.append($outfits);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var outfit = {
    text: $outfitText.val().trim(),
    description: $outfitDescription.val().trim()
  };

  if (!(outfit.text && outfit.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(outfit).then(function() {
    refreshOutfits();
  });

  $outfitText.val("");
  $outfitDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteOutfit(idToDelete).then(function() {
    refreshOutfits();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$outfitList.on("click", ".delete", handleDeleteBtnClick);
