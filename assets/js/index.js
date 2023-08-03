$(document).ready(function () {

   // Get posts for blog posts
   var settings = {
      "url": "https://public-api.wordpress.com/rest/v1.1/sites/joeyzielinski.wordpress.com/posts/?pretty=true",
      "method": "GET",
      "timeout": 0,
   };

   // loop through the response and create the template with Mustache JS
   $.ajax(settings).done(function (response)
   {
      var post_template = '{{#posts}}'+
      '<div class="mdl-card on-the-road-again mdl-cell mdl-cell--12-col">'+
         '<div class="mdl-card__media mdl-color-text--grey-50">'+
            '<h3><a href="">{{post.title}}</a></h3>'+
      '</div>'+
            '<div class="mdl-color-text--grey-600 mdl-card__supporting-text">{{{excerpt}}}</div>'+
            '<div class="mdl-card__supporting-text meta mdl-color-text--grey-600">'+
               '<div class="minilogo"></div>'+
            '<div>'+
               '<strong>{{author.name}}</strong>'+
               '<span>{{date}}</span>'+
            '</div>'+
         '</div>'+
      '</div>' +
      '{{/posts}}';

      var post_template_output = Mustache.render(post_template,response);
      document.getElementById('blog_posts').innerHTML = post_template_output;

   });
});