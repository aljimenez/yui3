YUI.add("editor-tab",function(d,c){var b=function(){b.superclass.constructor.apply(this,arguments);},a="host";d.extend(b,d.Base,{_onNodeChange:function(g){var f="indent";if(g.changedType==="tab"){if(!g.changedNode.test("li, li *")){g.changedEvent.halt();g.preventDefault();if(g.changedEvent.shiftKey){f="outdent";}this.get(a).execCommand(f,"");}}},initializer:function(){this.get(a).on("nodeChange",d.bind(this._onNodeChange,this));}},{NAME:"editorTab",NS:"tab",ATTRS:{host:{value:false}}});d.namespace("Plugin");d.Plugin.EditorTab=b;},"@VERSION@",{"requires":["editor-base"]});