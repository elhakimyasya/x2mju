var config = {
  apiKey: "AIzaSyCmWRraw2UZWfp_C6p3a4QYhci5LmhtSfY",
  authDomain: "elc-academy.firebaseapp.com",
  databaseURL: "https://elc-academy-default-rtdb.firebaseio.com/",
  storageBucket: "elc-academy.appspot.com"
};


function login() {
  firebase.auth().onAuthStateChanged(function(event) {
    if (event) {
      window.location.href = authProfilePage;
    }
  });
  var config = {
    signInSuccessUrl : false,
    signInOptions : [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    tosUrl : false
  };
  (new firebaseui.auth.AuthUI(firebase.auth())).start("#firebaseui-auth-container", config);
};

function profile() {
  firebase.auth().onAuthStateChanged(function(db) {
    var settings;
    var controller;
    var n;
    if (db) {
      document.getElementById("logout").onclick = function() {
        firebase.auth().signOut();
      };
      n = "";
      settings = (controller = firebase.database().ref(db.displayName)).child("Posts");
      controller = controller.child("Files");

      n = '<div class="__avatar"><img src="' + db.photoURL + '"/></div><div class="__info"><div class="__name"><span>' + db.displayName + '</span></div><span></span><span class="__email">' + db.email + "</span></div></div>";

      document.querySelector(".__profile_container").classList.remove("__loading"), document.querySelector(".__profile_container").innerHTML = n;

      localStorage.setItem("auth_image", "db.photoURL");

      // settings.limitToLast(5).once("value", function(wrappersTemplates) {
      //   var out = "";
      //   wrappersTemplates.forEach(function($s) {
      //     entry = $s.val();
      //     out = '<div class="__article"><a href="my-posts.html?id=' + $s.getKey() + '" title="' + entry.title + '"><div class="panel-heading">' + excerpt(entry.title, 140) + '</div><div class="panel-body"><small>' + datetimeFormat(entry.updatedAt) + '</small></div></a><small class="' + entry.status + '">' + entry.status + "</small></div>" + out;
      //   });
      //   $("#__entries.__post").removeClass("__loading");
      //   $("#__entries.__post .__panel_content").prepend(out).find(".__loading").remove();
      // });
      // controller.once("value", function(wrappersTemplates) {
      //   var out = "";
      //   wrappersTemplates.forEach(function(postDataObj) {
      //     out = '<div class="__article"><div class="panel-heading">' + postDataObj.key + '</div><a href="' + postDataObj.val() + '" title="' + postDataObj.key + '" target="_blank" rel="nofollow noopener noreferer"><small>Download</small></a></div>' + out;
      //   });
      //   $("#__entries.__files").removeClass("__loading");
      //   $("#__entries.__files .__panel_content").prepend(out).find(".__loading").remove();
      // });
    } else {
      window.location.href = authLoginPage;
    }
  });
};

firebase.initializeApp(config);
