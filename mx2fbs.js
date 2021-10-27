function elcreativeAuthLogin() {
  firebase.auth().onAuthStateChanged(function(location) {
    if (location) {
      window.location.href = authProfilePage;
      localStorage.setItem("auth_image", location.photoURL);
    } else {
      localStorage.removeItem("auth_image")
    }
  });
  var config = {
    signInSuccessUrl : false,
    signInOptions : [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    tosUrl : false
  };
  (new firebaseui.auth.AuthUI(firebase.auth())).start("#firebaseui-auth-container", config);
};

function elcreativeAuthProfile () {
  firebase.auth().onAuthStateChanged(function(rtdb) {
    var settings;
    var controller;
    var profileContent;
    var postContent;
    if (rtdb) {
      document.getElementById("auth_logout").onclick = function() {
        firebase.auth().signOut();
        localStorage.removeItem("auth_image")
      };
      profileContent = "";
      profileContent = '<div class="auth_profile"><div class="auth_avatar"><span class="lazyload shimmer" data-image="' + rtdb.photoURL + '"/></div><div class="auth_info"><div class="auth_name">' + rtdb.displayName + '</div><div class="auth_email">' + rtdb.email + "</div></div></div>";

      document.querySelector(".auth_profile_container").classList.remove("loading"), document.querySelector(".auth_profile_container").innerHTML = profileContent;

      postContent = "";
      postContent = '<div class="elcreative_tab" role="tablist"><div class="tab_button_container"><button id="tab_button_post" class="tab_button elcreative_ripple" aria-controls="tab_panel_post" type="button" data-toggle-target="#tab_panel_post" data-toggle-radio-group="tabsGroup_jWIl4" data-toggle-is-active role="tab" aria-selected="false" data-toggle-arrows data-toggle-class>Post</button><button id="tab_button_post1" class="tab_button elcreative_ripple" aria-controls="tab_panel_post1" type="button" data-toggle-target="#tab_panel_post1" data-toggle-radio-group="tabsGroup_jWIl4" data-toggle-is-active role="tab" aria-selected="false" data-toggle-arrows data-toggle-class>File Access</button></div><div id="tab_panel_post" class="tab_panel_post" role="tabpanel" aria-labelledby="tab_button_post" aria-hidden="true">Tab 1</div>  <div id="tab_panel_post1" class="tab_panel_post" role="tabpanel" aria-labelledby="tab_button_post" aria-hidden="true">Tab 2</div></div>';

      document.querySelector(".auth_post_container").classList.remove("loading"), document.querySelector(".auth_post_container").innerHTML = postContent;


      easyToggleState();

      var refUsers = firebase.database().ref().child('Users/' + rtdb.uid);
      refUsers.set({
        userData : {
          userEmail: rtdb.email,
          userName: rtdb.displayName,
          userPhotoUrl: rtdb.photoURL,
          userUID: rtdb.uid
        }
      });

      // settings = (controller = firebase.database().ref(rtdb.displayName)).child("Posts");
      // controller = controller.child("Files");
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

firebase.initializeApp(firebaseConfig);
