(window.webpackJsonp=window.webpackJsonp||[]).push([[17,10,12],{321:function(t,e,r){var content=r(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("43407cf6",content,!0,{sourceMap:!1})},322:function(t,e,r){"use strict";r.r(e);r(324);var n=r(45),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ripple"},[r("div",{staticClass:"ripple__circle"}),t._v(" "),r("div",{staticClass:"ripple__circle ripple__inner-circle"})])}],!1,null,"7c4c8765",null);e.default=component.exports},323:function(t,e,r){var content=r(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("3de5fecb",content,!0,{sourceMap:!1})},324:function(t,e,r){"use strict";r(321)},325:function(t,e,r){var n=r(53)(!1);n.push([t.i,".ripple[data-v-7c4c8765]{display:inline-block;position:absolute;width:64px;height:64px}.ripple__circle[data-v-7c4c8765]{position:absolute;border:4px solid #60d070;opacity:1;border-radius:50%;-webkit-animation:ripple-data-v-7c4c8765 1s cubic-bezier(0,.2,.8,1) infinite;animation:ripple-data-v-7c4c8765 1s cubic-bezier(0,.2,.8,1) infinite}.ripple__inner-circle[data-v-7c4c8765]{-webkit-animation-delay:-.5s;animation-delay:-.5s}@-webkit-keyframes ripple-data-v-7c4c8765{0%{top:28px;left:28px;width:0;height:0;opacity:1}to{top:-1px;left:-1px;width:58px;height:58px;opacity:0}}@keyframes ripple-data-v-7c4c8765{0%{top:28px;left:28px;width:0;height:0;opacity:1}to{top:-1px;left:-1px;width:58px;height:58px;opacity:0}}",""]),t.exports=n},326:function(t,e,r){"use strict";r.r(e);r(236);var n=r(322),c={name:"ImageComponent",props:{source:{type:String,required:!0},width:{type:Number},height:{type:Number}},components:{ImageSpinner:n.default}},l=(r(327),r(45)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{directives:[{name:"lazyload",rawName:"v-lazyload"}],staticClass:"image__wrapper"},[r("ImageSpinner",{staticClass:"image__spinner"}),t._v(" "),r("img",{staticClass:"card-img-top p-4 image__item image__custom",attrs:{"data-url":t.source,alt:"no picture available",height:t.height,width:t.width}})],1)}),[],!1,null,"32afa7d6",null);e.default=component.exports;installComponents(component,{ImageSpinner:r(322).default})},327:function(t,e,r){"use strict";r(323)},328:function(t,e,r){var n=r(53)(!1);n.push([t.i,".image__wrapper[data-v-32afa7d6]{display:flex;justify-content:center;align-items:center;border-radius:4px}.image__wrapper.loaded .image__item[data-v-32afa7d6]{visibility:visible;opacity:1;border:0}.image__wrapper.loaded .image__spinner[data-v-32afa7d6]{display:none;width:100%}.image__item[data-v-32afa7d6]{width:100%;border-radius:4px;transition:all .4s ease-in-out;opacity:0;visibility:hidden}.image__custom[data-v-32afa7d6]:hover{padding:.5rem!important}",""]),t.exports=n},332:function(t,e,r){"use strict";r.r(e);r(236);var n=r(326),c={name:"Products",props:{id:{type:Number,required:!0},image:{type:String,required:!0},title:{type:String,required:!0},price:{type:Number,required:!0}},components:{ImageComponent:n.default}},l=r(45),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-5"},[r("div",{staticClass:"card h-100",staticStyle:{width:"18rem"}},[r("NuxtLink",{staticClass:"nav-link",attrs:{to:"/Products/"+t.id}},[r("ImageComponent",{attrs:{source:t.image,height:240,width:180}})],1),t._v(" "),r("div",{staticClass:"card-body text-center"},[r("h5",{staticClass:"card-title text-center"},[t._v(t._s(t.title))])]),t._v(" "),r("div",{staticClass:"card-footer text-center"},[r("p",{staticClass:"card-text"},[t._v("Price: "+t._s(t.price)+"$")]),t._v(" "),r("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.$nuxt.$emit("open-modal")}}},[t._v("\n        Warenkorb legen\n      ")])])],1)])}),[],!1,null,"0c14a7ea",null);e.default=component.exports;installComponents(component,{ImageComponent:r(326).default})}}]);