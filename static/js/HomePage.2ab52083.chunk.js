(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{31:function(t,n,e){"use strict";e.d(n,"e",(function(){return a})),e.d(n,"a",(function(){return u})),e.d(n,"c",(function(){return s})),e.d(n,"b",(function(){return l})),e.d(n,"d",(function(){return f}));var r="https://api.themoviedb.org/3",c="3d673b2d8e40eafc68577fae5a6a1f4b",i="".concat(r,"/trending/all/day?api_key=").concat(c),o="".concat(r,"/search/movie?api_key=").concat(c,"&language=en-US&include_adult=false");function a(){var t="".concat(i,"&page=1}");return fetch(t).then((function(t){return t.json()}))}function u(t){return fetch("".concat(o,"&query=").concat(t,"&page=1")).then((function(t){return t.json()}))}function s(t){return fetch("".concat(r,"/movie/").concat(t,"?api_key=").concat(c,"&language=en-US")).then((function(t){return t.json()}))}function l(t){return fetch("".concat(r,"/movie/").concat(t,"/credits?api_key=").concat(c,"&language=en-US")).then((function(t){return t.json()}))}function f(t){return fetch("".concat(r,"/movie/").concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1")).then((function(t){return t.json()}))}},32:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function c(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,c=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(u){c=!0,i=u}finally{try{r||null==a.return||a.return()}finally{if(c)throw i}}return e}}(t,n)||function(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(n,"a",(function(){return c}))},33:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(2),c=e(8),i=(e(0),e(34)),o=e.n(i),a=e(1);function u(t){var n=t.listFilmsBySearch,e=Object(r.g)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("ul",{className:o.a.list,children:null===n||void 0===n?void 0:n.map((function(t){return t.original_title&&Object(a.jsx)("li",{children:Object(a.jsxs)(c.b,{className:o.a.item,to:{pathname:"/movies/".concat(t.id),state:{from:"/"===e.pathname?"/":"/movies"+e.search}},children:["- ",t.original_title]})},t.id)}))})})}},34:function(t,n,e){t.exports={list:"MoviesList_list__3l_mE",item:"MoviesList_item__2oC-c"}},35:function(t,n,e){t.exports={title:"HomePage_title__1Qt22"}},40:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return l}));var r=e(32),c=e(31),i=e(0),o=e(33),a=e(35),u=e.n(a),s=e(1);function l(){var t=Object(i.useState)([]),n=Object(r.a)(t,2),e=n[0],a=n[1];return Object(i.useEffect)((function(){return c.e(1).then((function(t){return t.results})).then(a).catch((function(t){return console.log(t)}))}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{className:u.a.title,children:" Trending today "}),Object(s.jsx)(o.a,{listFilmsBySearch:e})]})}}}]);
//# sourceMappingURL=HomePage.2ab52083.chunk.js.map