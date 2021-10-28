function elcreativeAuthPost() {
  firebase.auth().onAuthStateChanged(function(database) {
    var postId;
    var postObject;
    var postBoolean;
    var postRef;
    
   
    if (database) {
      if (postId = (postId = "id", postObject = {}, window.location.href.split("?").pop().split("&").map(function(url) {
        url = url.split("=");
        postObject[url[0]] = url[1];
      }), postId ? postObject[postId] || null : postObject)) {
        postBoolean = false;
        postRef = (database = firebase.database().ref('Users/' + database.uid)).child("userPost").child(postId);
        postRef.on("value", function(postItem) {
          var postData = postItem.val();
          if (postData) {
            postData["updatedAt-formatted"] = datetimeFormat(postData.updatedAt);
            var postContent = document.querySelector(".panel_content");
            postContent.innerHTML = postData.content;
            
            if (!postBoolean) {
              postBoolean = true;
              postRef.child("views").transaction(function(count) {
                return (count || 0) + 1;
              });
            };

            document.querySelector(".Blog .post_title").innerText = postData.title;
          } else {
            // window.location.href = "index.html";
          }
        });
        // $("#update").attr("href", "update-post.html?id=" + postId);
        // $("#delete").click(function() {
        //   postRef.remove();
        // });
      } else {
        // window.location.href = "index.html";
      }
    } else {
      window.location.href = authLoginPage;
    }
  });
}
