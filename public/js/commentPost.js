// Get references to page elements
var $outfitText = $("#outfit-text");
var $outfitDescription = $("#outfit-description");
var $submitBtn = $("#submit");
var $deleteBtn = $("#delete");
var $commentList = $("#comment-list");

// The API object contains methods for each kind of request we'll make
var commentAPI = {
  saveComment: function(comments) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/comments",
      data: JSON.stringify(comments)
    });
  },
  getComments: function() {
    return $.ajax({
      url: "api/comments",
      type: "GET"
    });
  },
  deleteComments: function(id) {
    return $.ajax({
      url: "api/comments/" + id,
      type: "DELETE"
    });
  }
};

// refreshComments gets new comments from the db and repopulates the list
var refreshComments = function() {
  commentAPI.getComments().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(comment.text)
        .attr("href", "/comment/" + comment.id);

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

//CHANGE CODE AS YOU SEE FIT HANDLEBAR WISE
var handleFormSubmit = function(event) {
  event.preventDefault();

  var comment = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(comment.text && comment.description)) {
    alert("You must enter a comment!");
    return;
  }

  commentAPI.saveComment(comment).then(function() {
    refreshComments();
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

  commentAPI.deleteComment(idToDelete).then(function() {
    refreshComments();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$deleteBtn.on("click", ".delete", handleDeleteBtnClick);
