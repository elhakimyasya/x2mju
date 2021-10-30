function elcreativeAuthPostCreate() {
  firebase.auth().onAuthStateChanged(function(database) {
    if (database) {
      tinymce.init({
        selector : "textarea",
        height : 500,
        branding : false,
        menubar : "file edit view insert format tools table",
        plugins : "link image preview toc codesample table wordcount code lists insertdatetime emoticons visualblocks",
        toolbar : "formatselect | bold italic underline strikethrough superscript subscript blockquote | link image |  alignleft aligncenter alignright alignjustify bullist numlist | table toc | codesample preview insertdatetime emoticons visualblocks code",
        toc_class : "elcTOC",
        toc_depth : 6,
        content_style : 'body { font-family: "Segoe UI"}',
        codesample_languages : [{
          text : "Command Line",
          value : "command hljs hl hljs"
        }, {
          text : "CSS",
          value : "css hljs hl css"
        }, {
          text : "C",
          value : "c hljs hl c"
        }, {
          text : "C++",
          value : "cpp hljs hl cpp"
        }, {
          text : "HTML/XML",
          value : "html hljs hl html xml"
        }, {
          text : "Java",
          value : "java hljs hl java"
        }, {
          text : "JavaScript",
          value : "javascript hljs hl javascript"
        }, {
          text : "JSON",
          value : "json hljs hl json"
        }, {
          text : "Markdown",
          value : "markdown hljs hl markdown"
        }, {
          text : "PHP",
          value : "php hljs hl php"
        }, {
          text : "Python",
          value : "python hljs hl python"
        }, {
          text : "TypeScript",
          value : "typescript hljs hl typescript"
        }],
        insertdatetime_formats : ["Updated: %A, %d %B %Y"],
        rel_list : [{
          title : "Internal Link",
          value : ""
        }, {
          title : "External Link",
          value : "noopener noreferer nofollow"
        }],
        extended_valid_elements : "img[src|loading=lazy|alt|title|width|height|align|onmouseover|onmouseout|name]",
        init_instance_callback : function(ed) {
        }
      });

      document.getElementById("auth_post_create").addEventListener("submit", function(postContent) {
        postContent.preventDefault();
        (postContent = {}).title = document.getElementById("auth_input_post_title").value;
        postContent.description = document.getElementById("auth_input_post_description").value;
        postContent.labels = document.getElementById("auth_input_post_label").value;
        postContent.content = tinymce.get("auth_input_post_content").getContent();
        postContent.created = (new Date).getTime();
        postContent.updated = postContent.created;
        postContent.views = 0;
        postContent.status = "Pending";

        var refUid = firebase.database().ref('Users/' + database.uid).child("userPost");
        refUid.push(postContent).then(function(y) {
          window.location.href = authUserPostPage + "?id=" + y.getKey();
        }).catch(function(z) {
          console.error(z);
        }), false
      });
    } else {
      if (confirm('You need to login to access this page. Do you want to log in?')) {
        window.location.href = authLoginPage;
      } else {
        window.location.href = "/";
      }
    }
  });
};
