define([
   'backbone',
   'models/m.yao'
],

function (Backbone, Yao) {
   var defaults =
      {
         name: 'YIN YAO',
         code: "0",
         clazz: 'yin'
      };

   var createYin = function (options) {
      options || (options = {});
      return new Yao(_.extend(defaults, options));
   };

   return createYin;
});
