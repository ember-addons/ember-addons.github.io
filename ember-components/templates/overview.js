Ember.TEMPLATES['overview'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("See more");
  }

  data.buffer.push("<div class=\"jumbotron\">\n    <h1>Ember Components</h1>\n    <p>\n        <b>Ember Components</b> is a set of rich web components written in <i>Ember.js</i> that let you create astonishing UI.\n    </p>\n    <p style=\"font-size: 13px;\">\n        This project aims to be the successor of our <a href=\"https://github.com/ember-addons/bootstrap-for-ember\">Bootstrap for Ember</a> project as all components on this suite are not bound to any specific CSS framework.\n    </p>\n    <p>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-primary btn-lg"),
    'role': ("button")
  },hashTypes:{'class': "STRING",'role': "STRING"},hashContexts:{'class': depth0,'role': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "component", options) : helperMissing.call(depth0, "link-to", "component", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </p>\n</div>\n");
  return buffer;
  
});
