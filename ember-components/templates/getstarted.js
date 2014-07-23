Ember.TEMPLATES['getstarted'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Components Page");
  }

  data.buffer.push("<h1>Getting Started</h1>\n\n<ol>\n    <li>\n        <p>Installing via <i>bower</i> is the simplest form:</p>\n        <pre><code class=\"bash\">bower install ember-components</code></pre>\n    </li>\n    <li>\n    <p><i>recommended (but not required): </i>Include Bootstrap for styling as most components are already styled for Bootstrap.</p>\n        <pre><code class=\"html\">&lt;link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css\" rel=\"stylesheet\"&gt;</code></pre>\n    </li>\n    <li>\n        <p>Include Ember Component</p>\n        <pre><code class=\"html\">&lt;script src=\"bower_components/ember-components/dist/globals/main.js\"&gt;</script></code></pre>\n    </li>\n</ol>\n\n<p>Of course you need jquery, ember.js and handlebars included in your project too.</p>\n\n\n<p>Want to see some code? check out the ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "component", options) : helperMissing.call(depth0, "link-to", "component", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n\n");
  return buffer;
  
});
