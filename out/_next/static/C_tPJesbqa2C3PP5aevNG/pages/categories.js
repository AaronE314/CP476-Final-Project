(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6C0u":function(e,t,a){"use strict";var s=a("rePB"),r=a("1OyB"),n=a("vuIU"),i=a("JX7q"),o=a("md7G"),l=a("foSv"),c=a("Ji7U"),u=a("q1tI"),p=a.n(u),h=a("xZaG"),d=a.n(h),f=a("YFqc"),x=a.n(f),m=a("C/Fq"),y=a("cSx5"),g=p.a.createElement;function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var w=function(e){Object(c.a)(s,e);var t,a=(t=s,function(){var e,a=Object(l.a)(t);if(v()){var s=Object(l.a)(this).constructor;e=Reflect.construct(a,arguments,s)}else e=a.apply(this,arguments);return Object(o.a)(this,e)});function s(e){var t;return Object(r.a)(this,s),(t=a.call(this,e)).state={wishlisted:!1},t.getAdjustedPrice=t.getAdjustedPrice.bind(Object(i.a)(t)),t.hoverOn=t.hoverOn.bind(Object(i.a)(t)),t.hoverOff=t.hoverOff.bind(Object(i.a)(t)),t.updateWishlist=t.updateWishlist.bind(Object(i.a)(t)),t}return Object(n.a)(s,[{key:"getAdjustedPrice",value:function(){return Math.round(this.props.value.price*(1-this.props.value.discount)*100)/100}},{key:"hoverOn",value:function(e){this.setState(j({},this.props.value,{displayImageIndex:e,displayColorIndex:e}))}},{key:"hoverOff",value:function(){this.setState(j({},this.props.value,{displayImageIndex:0,displayColorIndex:0}))}},{key:"updateWishlist",value:function(){Object(y.i)(this.props.value,this.state.wishlisted),this.setState(j({},this.state,{wishlisted:!this.state.wishlisted}))}},{key:"componentDidMount",value:function(){this.state.wishlisted=Object(m.b)(this.props.value)}},{key:"render",value:function(){var e=this,t="#FFF500";return t=window.getComputedStyle(document.documentElement).getPropertyValue("--highlightColor"),g("div",{className:d.a.DisplayItem},g("div",{className:d.a.DisplayImage,id:"displayTemp",style:{background:this.props.value.colours[this.props.value.displayImageIndex].hex}},g(x.a,{as:"".concat("/CP476-Final-Project","/productDetail"),href:{pathname:"/productDetail",query:{id:this.props.value.productID}}},g("img",{className:d.a.img,src:"data:image/png;base64, ".concat(this.props.value.displayImg),id:"displayImage"})),g("img",{onClick:this.updateWishlist,className:d.a.DisplayWishlist,src:"/images/heart.svg"}),this.state.wishlisted||Object(m.b)(this.props.value)?g("svg",{className:d.a.DisplayWishlistInner,width:"22",height:"20",viewBox:"0 0 22 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g("path",{d:"M15.95 0C14.036 0 12.199 0.882834 11 2.27793C9.80099 0.882834 7.96399 0 6.04999 0C2.66199 0 -1.37687e-05 2.6376 -1.37687e-05 5.99455C-1.37687e-05 10.1144 3.73999 13.4714 9.40499 18.5722L11 20L12.595 18.5613C18.26 13.4714 22 10.1144 22 5.99455C22 2.6376 19.338 0 15.95 0Z",fill:t})):null),g("div",{className:d.a.DisplayInfo},g("p",null,this.props.value.productName),this.props.value.discount>0?g("p",{className:d.a.DisplayDiscount,style:{background:t}},"$",this.getAdjustedPrice()):null,this.props.value.discount>0?g("p",{className:d.a.DisplayOldPrice},"$",this.props.value.price.toFixed(2)):g("p",null,"$",this.props.value.price.toFixed(2)),g("div",{className:d.a.DisplayColorContainer},this.props.value.colours.map((function(t,a){return g("div",{key:a,className:d.a.DisplayColorOption,style:{background:t.hex},onMouseOver:function(){e.hoverOn(a)},onMouseOut:function(){e.hoverOff()}})})))))}}]),s}(p.a.Component);t.a=w},Q0bE:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return r})),a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return o}));var s=function(e){return e.replace(/\D/g,"").match(/^\d{10}$/)},r=function(e){return e.match(/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/)},n=function(e){var t="",a=(e=e.replace(/\D/g,"").substring(0,10)).substring(0,3),s=e.substring(3,6),r=e.substring(6,10);return e.length>6?t="(".concat(a,") ").concat(s,"-").concat(r):e.length>3?t="(".concat(a,") ").concat(s):e.length>0&&(t="(".concat(a)),t},i=function(e){if(void 0!==e){return null!==e.match(/^[0-9]+$/)}return!0},o=function(e){if(void 0!==e){return null!==e.match(/^[a-zA-Z ]+$/)}return!0}},j49Z:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories",function(){return a("mAMT")}])},mAMT:function(e,t,a){"use strict";a.r(t),a.d(t,"Categories",(function(){return F}));var s=a("KQm4"),r=a("o0o1"),n=a.n(r);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],s=!0,r=!1,n=void 0;try{for(var i,o=e[Symbol.iterator]();!(s=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);s=!0);}catch(l){r=!0,n=l}finally{try{s||null==o.return||o.return()}finally{if(r)throw n}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o=a("1OyB"),l=a("vuIU"),c=a("JX7q"),u=a("md7G"),p=a("foSv"),h=a("Ji7U"),d=a("rePB"),f=a("MX0m"),x=a.n(f),m=a("q1tI"),y=a.n(m),g=a("R9S9"),b=a("YFqc"),j=a.n(b),v=a("6C0u"),w=a("nOHt"),O=a("cfAs"),k=a("Q0bE"),C=a("C/Fq"),D=a("2O3R"),N=y.a.createElement;function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function I(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var F=function(e){Object(h.a)(r,e);var t,a=(t=r,function(){var e,a=Object(p.a)(t);if(I()){var s=Object(p.a)(this).constructor;e=Reflect.construct(a,arguments,s)}else e=a.apply(this,arguments);return Object(u.a)(this,e)});function r(e){var t;Object(o.a)(this,r),t=a.call(this,e),Object(d.a)(Object(c.a)(t),"applyFilters",(function(e){return e.filter((function(e){var a=!1,s=!1;return 0===t.state.activeFilters.size||(t.state.activeFilters.forEach((function(t){void 0!==t.low?a=a||e.price>t.low&&e.price<t.high:s=s||e.sizes&&e.sizes.includes(t.text)})),a||s)}))})),Object(d.a)(Object(c.a)(t),"maxShown",(function(e,t,a){return console.log(e,t),e>815?2*a*Math.floor((t-80-96)/533)*Math.floor((e-244)/343):8})),Object(d.a)(Object(c.a)(t),"handleResize",(function(){t.setState({width:window.innerWidth,numberShown:t.maxShown(window.innerWidth,window.innerHeight,t.state.showMore)})})),Object(d.a)(Object(c.a)(t),"handleChange",(function(e){var a=i(e.target.value.split(" "),2),s=a[0],r=a[1],n=t.state.products.sort(Object(C.a)(s,"true"===r));t.setState(S({},t.state,{sortBy:e.target.value,products:n}))})),Object(d.a)(Object(c.a)(t),"handleFilterChange",(function(e,a){var s="price"===e?t.state.priceFilers[a]:t.state.sizeFilters[a];t.state.activeFilters.add(s),t.setState(S({},t.state))})),Object(d.a)(Object(c.a)(t),"removeFilter",(function(e){t.state.activeFilters.delete(e),t.setState(S({},t.state))}));var s=t.props.router;return t.state={arivals:[{name:"View All",link:"/categories",filter:"new"}],category:[{name:"View All",link:"/categories",filter:""},{name:"Shirts",link:"/categories",filter:"shirts"},{name:"T-shirts",link:"/categories",filter:"t-shirts"},{name:"Sweaters & Cardigans",link:"/categories",filter:"sweaters"},{name:"Pants",link:"/categories",filter:"pants"},{name:"Jeans",link:"/categories",filter:"jeans"},{name:"Joggers",link:"/categories",filter:"joggers"}],showMore:1,query:s.query,products:[],loading:!0,sortBy:"rec",activeFilters:new Set,priceFilers:[{low:0,high:10,text:"$0 - $10"},{low:11,high:20,text:"$11 - $20"},{low:21,high:30,text:"$21 - $30"},{low:31,high:40,text:"$31 - $40"},{low:41,high:50,text:"$41 - $50"},{low:51,high:1e7,text:"$51+"}],sizeFilters:[{text:"S"},{text:"M"},{text:"L"},{text:"XL"},{text:"XXL"}]},t.showMore=t.showMore.bind(Object(c.a)(t)),t}return Object(l.a)(r,[{key:"getTitle",value:function(){var e=this.props.router,t=e.query.mainCategory;return e.query.subCategory&&(t+=" "+e.query.subCategory),t}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"componentDidMount",value:function(){var e,t,a,s,r,i;return n.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(this.handleResize(),window.addEventListener("resize",this.handleResize),e=this.props.router,t=e.query.mainCategory,e.query.subCategory&&(a=e.query.subCategory),s=e.query.search?unescape(e.query.search):void 0,void 0===t&&void 0===a||!Object(k.b)(t)||!Object(k.b)(a)){o.next=14;break}return console.log("query by category"),o.next=10,n.a.awrap(Object(O.g)(t,a));case 10:r=o.sent,this.setState(S({},this.state,{products:r,loading:!1})),o.next=22;break;case 14:if(!Object(k.b)(s)){o.next=21;break}return o.next=17,n.a.awrap(Object(O.h)(s));case 17:i=o.sent,this.setState(S({},this.state,{products:i,loading:!1})),o.next=22;break;case 21:this.setState(S({},this.state,{products:[],loading:!1}));case 22:case"end":return o.stop()}}),null,this,null,Promise)}},{key:"componentDidUpdate",value:function(e,t){var a,s,r,i,o,l;return n.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=this.props.router,s=a.query.mainCategory,a.query.subCategory&&(r=a.query.subCategory),s===e.router.query.mainCategory&&r===e.router.query.subCategory&&a.query.search===e.router.query.search){t.next=22;break}if(console.log("gender = "+Object(k.b)(s)),console.log("subCategory = "+Object(k.b)(r)),i=a.query.search?unescape(a.query.search):void 0,void 0===s&&void 0===r||!Object(k.b)(s)||!Object(k.b)(r)){t.next=16;break}return console.log("a"),t.next=11,n.a.awrap(Object(O.g)(s,r));case 11:o=t.sent,this.state.products.length=0,this.setState(S({},this.state,{products:o,loading:!1})),t.next=22;break;case 16:if(!Object(k.b)(i)){t.next=22;break}return console.log("b"),t.next=20,n.a.awrap(Object(O.h)(i));case 20:l=t.sent,this.setState(S({},this.state,{products:l,loading:!1}));case 22:case"end":return t.stop()}}),null,this,null,Promise)}},{key:"getLink",value:function(e){var t=this.props.router,a=e.link;return""!==e.filter?"".concat(a,"?mainCategory=").concat(t.query.mainCategory,"&subCategory=").concat(e.filter):"".concat(a,"?mainCategory=").concat(t.query.mainCategory)}},{key:"showMore",value:function(){this.setState(S({},this.state,{showMore:this.state.showMore+1,numberShown:this.maxShown(window.innerWidth,window.innerHeight,this.state.showMore+1)}))}},{key:"render",value:function(){var e=this,t=this.applyFilters(this.state.products);return N(g.a,null,N("div",{className:"jsx-2646735618 sidenav"},N("div",{className:"jsx-2646735618"},N("h4",{className:"jsx-2646735618"},"New Arrivals"),N("ul",{className:"jsx-2646735618"},this.state.arivals.map((function(t,a){return N("li",{key:a,className:"jsx-2646735618"},N(j.a,{as:"".concat("/CP476-Final-Project").concat(e.getLink(t)),href:e.getLink(t),passHref:!0},N("a",{className:"jsx-2646735618 hoverColor"},t.name)))})))),N("div",{className:"jsx-2646735618"},N("h4",{className:"jsx-2646735618"},"Shop by Category"),N("ul",{className:"jsx-2646735618"},this.state.category.map((function(t,a){return N("li",{key:a,className:"jsx-2646735618"},N(j.a,{as:"".concat("/CP476-Final-Project").concat(e.getLink(t)),href:e.getLink(t),passHref:!0},N("a",{className:"jsx-2646735618 hoverColor"},t.name)))}))))),N("div",{className:"jsx-2646735618 mainContent"},N("h1",{className:"jsx-2646735618"},this.getTitle()),N("div",{className:"jsx-2646735618 filterby"},N("label",{className:"jsx-2646735618"},"Filter By"),N("select",{onChange:function(t){return e.handleFilterChange("price",t.target.value)},value:"default",className:"jsx-2646735618 price"},N("option",{defaultValue:!0,value:"default",className:"jsx-2646735618"},"Price"),this.state.priceFilers.map((function(e,t){return N("option",{key:t,value:t,className:"jsx-2646735618"},e.text)})),";"),N("select",{onChange:function(t){return e.handleFilterChange("title",t.target.value)},value:"default",className:"jsx-2646735618 title"},N("option",{defaultValue:!0,value:"default",className:"jsx-2646735618"},"Size"),this.state.sizeFilters.map((function(e,t){return N("option",{key:t,value:t,className:"jsx-2646735618"},e.text)})),";"),N("div",{className:"jsx-2646735618 filterPannels"},N(D.a,{typeName:null},Object(s.a)(this.state.activeFilters).map((function(t,a){return N("div",{key:t.text,className:"jsx-2646735618 filterPannel"},N("span",{className:"jsx-2646735618"},"".concat(t.text)),N("img",{onClick:function(a){return e.removeFilter(t)},src:"/images/close.svg",className:"jsx-2646735618"}))}))))),N("div",{className:"jsx-2646735618 sortBy"},N("label",{className:"jsx-2646735618"},"Sort By"),N("input",{defaultChecked:!0,id:"recommended",value:"rec true",type:"radio",name:"sortBy",onChange:this.handleChange,className:"jsx-2646735618"}),N("label",{htmlFor:"recommended",className:"jsx-2646735618"},"Recommended"),N("input",{id:"newest",type:"radio",value:"new true",name:"sortBy",onChange:this.handleChange,className:"jsx-2646735618"}),N("label",{htmlFor:"newest",className:"jsx-2646735618"},"Newest"),N("input",{id:"lowest",type:"radio",value:"price true",name:"sortBy",onChange:this.handleChange,className:"jsx-2646735618"}),N("label",{htmlFor:"lowest",className:"jsx-2646735618"},"Lowest Price"),N("input",{id:"highest",type:"radio",value:"price false",name:"sortBy",onChange:this.handleChange,className:"jsx-2646735618"}),N("label",{htmlFor:"highest",className:"jsx-2646735618"},"Highest Price")),t.length>0?N("div",{className:"jsx-2646735618 products"},t.slice(0,this.state.numberShown).map((function(e,t){return N(v.a,{key:t,value:e})}))):N("p",{className:"jsx-2646735618 message"},this.state.loading?"Loading...":"No products match the query"),t.length>this.state.numberShown?N("button",{onClick:this.showMore,className:"jsx-2646735618 loadMore"},"LOAD MORE"):null),N(x.a,{id:"2646735618"},[".sidenav.jsx-2646735618{height:calc(100% - 80px - 16px + var(--footerHeight));top:80px;width:180px;position:absolute;z-index:1;left:0px;background:var(--backgroundColor);overflow-x:hidden;padding-left:32px;padding-top:16px;}",".mainContent.jsx-2646735618{position:relative;min-height:100%;padding-top:16px;width:calc(100% - 244px);margin-left:244px;}",".products.jsx-2646735618{display:grid;grid-row-gap:8px;grid-column-gap:32px;grid-template-columns:repeat(auto-fill,minmax(343px,1fr));overflow:hidden;}",".message.jsx-2646735618{text-align:center;width:100%;}",".filterby.jsx-2646735618 label.jsx-2646735618{margin-right:24px;}",".filterby.jsx-2646735618 select.jsx-2646735618,.filterby.jsx-2646735618 option.jsx-2646735618{font-family:'Open Sans';font-weight:normal;font-size:14px;min-width:50px;}",".filterby.jsx-2646735618 select.jsx-2646735618{border:0px;outline:0px;}",".filterby.jsx-2646735618 option.jsx-2646735618{border:1px solid black;outline:none;}",".hoverColor.jsx-2646735618:hover{background-color:var(--highlightColor);}",".filterPannels.jsx-2646735618{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:57px;}",".filterPannel.jsx-2646735618{position:relative;width:110px;height:32px;border:0.5px solid black;margin:12px 8px 12px 0;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}",".filterPannel.jsx-2646735618 span.jsx-2646735618{position:absolute;left:12px;font-family:'Open Sans';font-style:normal;font-weight:normal;font-size:14px;line-height:19px;top:6px;}",".filterPannel.jsx-2646735618 img.jsx-2646735618{position:absolute;right:12px;top:8px;cursor:pointer;}",".sortBy.jsx-2646735618{position:relative;margin:24px 0;}",".sortBy.jsx-2646735618 label.jsx-2646735618{margin-right:24px;}",".sortBy.jsx-2646735618 label.jsx-2646735618:not(:first-child){font-family:'Open Sans';font-weight:normal;font-size:14px;}",".loadMore.jsx-2646735618{border:none;width:294px;height:32px;margin:32px 0;padding:0;left:calc(50% - 294px/2);background:var(--highlightColor);position:relative;}",".loadMore.jsx-2646735618:hover{-webkit-filter:brightness(95%);filter:brightness(95%);cursor:pointer;}",'[type="radio"]:checked.jsx-2646735618,[type="radio"]:not(:checked).jsx-2646735618{position:absolute;left:-9999px;}','[type="radio"]:checked.jsx-2646735618+label.jsx-2646735618,[type="radio"]:not(:checked).jsx-2646735618+label.jsx-2646735618{position:relative;padding-left:28px;cursor:pointer;line-height:20px;display:inline-block;color:var(--foregroundColor);}','[type="radio"]:checked.jsx-2646735618+label.jsx-2646735618:before,[type="radio"]:not(:checked).jsx-2646735618+label.jsx-2646735618:before{content:\'\';position:absolute;left:0;top:0;width:18px;height:18px;border:1px solid var(--foregroundColor);border-radius:100%;background:var(--backgroundColor);}','[type="radio"]:checked.jsx-2646735618+label.jsx-2646735618:after,[type="radio"]:not(:checked).jsx-2646735618+label.jsx-2646735618:after{content:\'\';width:18px;height:18px;background:var(--highlightColor);position:absolute;top:1px;left:1px;border-radius:100%;-webkit-transition:all 0.2s ease;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;}','[type="radio"]:not(:checked).jsx-2646735618+label.jsx-2646735618:after{opacity:0;-webkit-transform:scale(0);-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}','[type="radio"]:checked.jsx-2646735618+label.jsx-2646735618:after{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}',"h1.jsx-2646735618{font-size:32px;line-height:37px;font-weight:bold;text-transform:uppercase;margin:0;margin-bottom:32px;}",'h4.jsx-2646735618{font-family:"Open Sans";margin-top:0;font-weight:bold;}',"ul.jsx-2646735618{list-style:none;padding:0;}","ul.jsx-2646735618 li.jsx-2646735618{margin-top:12px;}",'ul.jsx-2646735618 li.jsx-2646735618 a.jsx-2646735618{font-family:"Open Sans";font-weight:normal;font-size:14px;}',"@media only screen and (max-width:1000px){.sidenav.jsx-2646735618{left:-230px;}.mainContent.jsx-2646735618{margin-left:32px;width:calc(100% - (2 * 32px));}}","@media only screen and (max-width:815px){.products.jsx-2646735618{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}","@media only screen and (max-width:610px){.mainContent.jsx-2646735618{margin-top:32px;}}"]))}}]),r}(y.a.Component);t.default=Object(w.withRouter)(F)},xZaG:function(e,t,a){e.exports={DisplayItem:"ItemDisplayBox_DisplayItem__3HrLc",DisplayImage:"ItemDisplayBox_DisplayImage__aYYx5",img:"ItemDisplayBox_img__15QAV",DisplayWishlist:"ItemDisplayBox_DisplayWishlist__3WB3c",DisplayWishlistInner:"ItemDisplayBox_DisplayWishlistInner__5KaO4",DisplayInfo:"ItemDisplayBox_DisplayInfo__1D9OR",DisplayDiscount:"ItemDisplayBox_DisplayDiscount__1-o0G",DisplayOldPrice:"ItemDisplayBox_DisplayOldPrice__20-3w",DisplayColorContainer:"ItemDisplayBox_DisplayColorContainer__1zv0I",DisplayColorOption:"ItemDisplayBox_DisplayColorOption__3Fjyu",mainContent:"ItemDisplayBox_mainContent__RrHFh"}}},[["j49Z",0,2,1,3,4]]]);