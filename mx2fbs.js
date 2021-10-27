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

      localStorage.setItem("auth_image", "background-image:url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wCEAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAwBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/CABEIABwAHAMBIgACEQEDEQH/xAAaAAACAgMAAAAAAAAAAAAAAAAGCAAFAgcJ/9oACAEBAAAAAOsFRa5RRGCOApZDhmNJKiQP5//EABYBAQEBAAAAAAAAAAAAAAAAAAcFBv/aAAgBAhAAAABqnJee/8QAFwEAAwEAAAAAAAAAAAAAAAAABAUGB//aAAgBAxAAAADOzI9p/8QALhAAAQIFAgMGBwEAAAAAAAAAAQIDAAQFBhEHMQgSIRAUQWF1sxMVFyIzcYGR/9oACAEBAAE/ABFyX9RLQeZbqlWp9Pcf/Gl95KFL8wD4ecMzCJplLjakutuAKSpJylQOxBjOOzis03uR7WGenu4Ts/J1Dk7o6y0p1ISEgcnQHBBz088xw4WzVLQ0epMjVwtE42Fq+Es5UyhSiUoP6B28NoKQY161d+jNj/MkyonJl54S7DalcqOcgnKjvgAHbeKvxdX1U5suN1ZuUTnIbl5dASP9BJ/pjRHjDrlSu2n0i4G5eeZn3ky6ZltsNutKUcAkD7VDO/QGMZ8THHWc6W031FPtr7NJump9ueose4ITsI//xAAkEQABAwIFBQEAAAAAAAAAAAABAgMEACEFBhESMRNBUWFx8P/aAAgBAgEBPwDAsMZnSOk65sGhP30Nf1qkMpaeU2lW4JJAI7+6ybhEN2GXnmwpRJub8fazpAYiSUGOkJ3C4HHPiv/EAB8RAAEEAgIDAAAAAAAAAAAAAAECAwQRAAUSEwYxUf/aAAgBAwEBPwDZS1xmubaeRusYX2ISpYokA18zfzn25HWlZAoes8ckuSG1Bw3Rz//Z)" === localStorage.getItem("auth_image") ? db.photoURL : "background-image:url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wCEAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAwBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/CABEIABwAHAMBIgACEQEDEQH/xAAaAAACAgMAAAAAAAAAAAAAAAAGCAAFAgcJ/9oACAEBAAAAAOsFRa5RRGCOApZDhmNJKiQP5//EABYBAQEBAAAAAAAAAAAAAAAAAAcFBv/aAAgBAhAAAABqnJee/8QAFwEAAwEAAAAAAAAAAAAAAAAABAUGB//aAAgBAxAAAADOzI9p/8QALhAAAQIFAgMGBwEAAAAAAAAAAQIDAAQFBhEHMQgSIRAUQWF1sxMVFyIzcYGR/9oACAEBAAE/ABFyX9RLQeZbqlWp9Pcf/Gl95KFL8wD4ecMzCJplLjakutuAKSpJylQOxBjOOzis03uR7WGenu4Ts/J1Dk7o6y0p1ISEgcnQHBBz088xw4WzVLQ0epMjVwtE42Fq+Es5UyhSiUoP6B28NoKQY161d+jNj/MkyonJl54S7DalcqOcgnKjvgAHbeKvxdX1U5suN1ZuUTnIbl5dASP9BJ/pjRHjDrlSu2n0i4G5eeZn3ky6ZltsNutKUcAkD7VDO/QGMZ8THHWc6W031FPtr7NJump9ueose4ITsI//xAAkEQABAwIFBQEAAAAAAAAAAAABAgMEACEFBhESMRNBUWFx8P/aAAgBAgEBPwDAsMZnSOk65sGhP30Nf1qkMpaeU2lW4JJAI7+6ybhEN2GXnmwpRJub8fazpAYiSUGOkJ3C4HHPiv/EAB8RAAEEAgIDAAAAAAAAAAAAAAECAwQRAAUSEwYxUf/aAAgBAwEBPwDZS1xmubaeRusYX2ISpYokA18zfzn25HWlZAoes8ckuSG1Bw3Rz//Z)");

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
