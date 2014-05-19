(function() {
  Bootstrap.BsFlipSwitch = Ember.Component.extend({
    classNames: ['onoffswitch'],
    classNameBindings: ['checked:onoffswitch-checked'],
    layoutName: 'components/bs-flip-switch',
    disabled: false,
    didInsertElement: function() {
      if (!this.get('disabled')) {
        return $('.onoffswitch-label').click(function() {
          return $(this).parent().toggleClass('onoffswitch-checked');
        });
      }
    },
    checkboxId: (function() {
      return "cb-" + (this.get('elementId'));
    }).property()
  });

  Ember.Handlebars.helper('bs-flip-switch', Bootstrap.BsFlipSwitch);

}).call(this);

this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["components/bs-flip-switch"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  hashContexts = {'id': depth0,'name': depth0,'class': depth0,'checkedBinding': depth0,'disabledBinding': depth0};
  hashTypes = {'id': "ID",'name': "STRING",'class': "STRING",'checkedBinding': "ID",'disabledBinding': "ID"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'id': ("controller.checkboxId"),
    'name': ("onoffswitch"),
    'class': ("onoffswitch-checkbox"),
    'checkedBinding': ("checked"),
    'disabledBinding': ("disabled")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n<label class=\"onoffswitch-label\" ");
  hashContexts = {'for': depth0};
  hashTypes = {'for': "STRING"};
  options = {hash:{
    'for': ("controller.checkboxId")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n    <div class=\"onoffswitch-inner\"></div>\n    <div class=\"onoffswitch-switch\"></div>\n</label>");
  return buffer;
  
});