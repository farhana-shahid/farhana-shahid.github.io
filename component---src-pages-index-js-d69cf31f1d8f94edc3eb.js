/*! For license information please see component---src-pages-index-js-d69cf31f1d8f94edc3eb.js.LICENSE.txt */
(self.webpackChunkfarhana_shahid_github_io=self.webpackChunkfarhana_shahid_github_io||[]).push([[678],{5900:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)){if(a.length){var s=r.apply(null,a);s&&e.push(s)}}else if("object"===l){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},4266:function(e,t,a){"use strict";var n=a(4836);t.Z=void 0;var r=n(a(434)),l=n(a(8416)),s=n(a(9213)),o=n(a(6690)),i=n(a(4993)),c=n(a(3808)),m=n(a(6115)),u=n(a(9728)),f=n(a(1655)),p=n(a(5697)),d=n(a(7294)),h=n(a(5900)),E=n(a(2470));var b=function(e){function t(e){var a;return(0,o.default)(this,t),(a=(0,i.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,m.default)(a)),a}return(0,f.default)(t,e),(0,u.default)(t,null,[{key:"propTypes",get:function(){return{items:p.default.arrayOf(p.default.string).isRequired,currentClassName:p.default.string.isRequired,scrolledPastClassName:p.default.string,style:p.default.object,componentTag:p.default.oneOfType([p.default.string,p.default.elementType]),offset:p.default.number,rootEl:p.default.string,onUpdate:p.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,u.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],n=0,r=e.length;n<r;n++)a[n]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],n=[],r=e||this.state.targetItems,l=!1,o=0,i=r.length;o<i;o++){var c=r[o],m=!l&&this._isInView(c);m?(l=!0,t.push(c)):a.push(c);var u=o===i-1,f=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!m&&u&&f&&(a.pop(),a.push.apply(a,(0,s.default)(t)),t=[c],n=this._fillArray(n,!1),m=!0),n.push(m)}return{inView:t,outView:a,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,n=a.rootEl,r=a.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var l=e.getBoundingClientRect(),s=n?t.height:window.innerHeight,o=this._getScrollDimension().scrollTop,i=o+s,c=n?l.top+o-t.top+r:l.top+o+r,m=c+e.offsetHeight;return c<i&&m>o}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,n=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,E.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,n=a.children,s=a.className,o=a.scrolledPastClassName,i=a.style,c=0,m=d.default.Children.map(n,(function(t,a){var n;if(!t)return null;var s=t.type,i=o&&e.state.isScrolledPast[a],m=(0,h.default)((n={},(0,l.default)(n,"".concat(t.props.className),t.props.className),(0,l.default)(n,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,l.default)(n,"".concat(e.props.scrolledPastClassName),i),n));return d.default.createElement(s,(0,r.default)({},t.props,{className:m,key:c++}),t.props.children)})),u=(0,h.default)((0,l.default)({},"".concat(s),s));return d.default.createElement(t,{className:u,style:i},m)}}]),t}(d.default.Component);t.Z=b},2470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){var t,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var r=+new Date;!!t&&r<t+n?(clearTimeout(a),a=setTimeout((function(){t=r,e()}),n)):(t=r,e())}};t.default=a},9634:function(e){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,n=e.HTMLElement||e.Element,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||o,scrollIntoView:n.prototype.scrollIntoView},l=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,s=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?d.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(i(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==i(arguments[0])){var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==i(arguments[0])){var a=f(this),n=a.getBoundingClientRect(),l=this.getBoundingClientRect();a!==t.body?(d.call(this,a,a.scrollLeft+l.left-n.left,a.scrollTop+l.top-n.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function o(e,t){this.scrollLeft=e,this.scrollTop=t}function i(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+s<e.scrollHeight:"X"===t?e.clientWidth+s<e.scrollWidth:void 0}function m(t,a){var n=e.getComputedStyle(t,null)["overflow"+a];return"auto"===n||"scroll"===n}function u(e){var t=c(e,"Y")&&m(e,"Y"),a=c(e,"X")&&m(e,"X");return t||a}function f(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function p(t){var a,n,r,s,o=(l()-t.startTime)/468;s=o=o>1?1:o,a=.5*(1-Math.cos(Math.PI*s)),n=t.startX+(t.x-t.startX)*a,r=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,n,r),n===t.x&&r===t.y||e.requestAnimationFrame(p.bind(e,t))}function d(a,n,s){var i,c,m,u,f=l();a===t.body?(i=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,u=r.scroll):(i=a,c=a.scrollLeft,m=a.scrollTop,u=o),p({scrollable:i,method:u,startTime:f,startX:c,startY:m,x:n,y:s})}}}}()},8514:function(e){e.exports={siteTitle:"Farhana Shahid",manifestName:"Resume",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",firstName:"Farhana ",lastName:"Shahid",socialLinks:[{icon:"fa fa-envelope",name:"Email",url:"mailto:fs468@cornell.edu"},{icon:"ai ai-google-scholar",name:"Google Scholar",url:"https://scholar.google.com/citations?user=mYk4EZsAAAAJ"},{icon:"fab fa-linkedin-in",name:"Linked In",url:"https://www.linkedin.com/in/farhana-shahid"},{icon:"fab fa-twitter",name:"Twitter",url:"https://twitter.com/FarhanaShahid_"},{icon:"fab fa-github",name:"Github",url:"https://github.com/farhana-shahid"},{icon:"fab fa-goodreads-g",name:"Goodreads",url:"https://www.goodreads.com/user/show/52763346-farhana"}],book:"Books",music:"Music",travel:"Travel",job:"Research"}},4926:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),r=a(5444),l=a(1646),s=a(1721),o=a(4266);var i=a(9634),c=a.n(i),m=function(e){return e.children},u=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}(0,s.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){c().polyfill()},a.handleClick=function(e){e.preventDefault();var t=0,a=!0,n=this.props,r=n.type,l=n.element,s=n.offset,o=n.timeout;if(r&&l)switch(r){case"class":a=!!(t=document.getElementsByClassName(l)[0]);break;case"id":a=!!(t=document.getElementById(l))}a?this.scrollTo(t,s,o):console.log("Element not found: "+l)},a.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:n+t,left:0,behavior:"smooth"})}),a):window.scroll({top:n+t,left:0,behavior:"smooth"})},a.render=function(){return n.createElement(m,null,"object"==typeof this.props.children?n.cloneElement(this.props.children,{onClick:this.handleClick}):n.createElement("span",{role:"button",tabIndex:0,onClick:this.handleClick,onKeyDown:this.handleClick},this.props.children))},t}(n.Component),f=a.p+"static/avatar3-896688793e322d2558ab5853b00ef60d.jpg",p=a(8514),d=a.n(p),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={tabs:[{id:"about",content:"About",href:"about"},{id:"publication",content:"Publications",href:"publication"},{id:"research",content:"Research",href:"research"},{id:"teaching",content:"Teaching",href:"teaching"}]},a}return(0,s.Z)(t,e),t.prototype.render=function(){var e=this.state.tabs;return n.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},n.createElement("a",{className:"navbar-brand",href:"#page-top"},n.createElement("span",{className:"d-block d-lg-none"},d().firstName," ",d().lastName),n.createElement("span",{className:"d-none d-lg-block"},n.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:f,alt:""}))),n.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.createElement("span",{className:"navbar-toggler-icon"})),n.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.createElement(o.Z,{items:e.map((function(e){return e.href})),currentClassName:"active",offset:-300,className:"navbar-nav"},e.map((function(e,t){var a=e.id,l=e.href,s=e.content;return"cv"===a?n.createElement("li",{className:"nav-item",key:l},n.createElement("a",{className:"nav-link",href:(0,r.withPrefix)("/files/FSH Resume.pdf"),target:"_blank",rel:"noopener noreferrer"},s)):n.createElement("li",{className:"nav-item",key:l},n.createElement(u,{type:"id",element:l},n.createElement("a",{className:"nav-link",href:"#"+l},s)))})))))},t}(n.Component),E=a.p+"static/rohingyacamp-244cee3dc943ce000d4e3d0da755dc18.jpg",b=a.p+"static/FBPost-media-ac0e9bfcc20182e1bf1dfd549b25462b.png",g=function(e){e.data;return n.createElement(l.Z,null,n.createElement(h,null),n.createElement("div",{className:"container-fluid p-0"},n.createElement("section",{className:"resume-section p-lg-5 p-md-4 d-flex align-items-center",id:"about"},n.createElement("div",{className:"w-100"},n.createElement("h1",{className:"mb-0"},d().firstName,n.createElement("span",{className:"text-primary"},d().lastName)),n.createElement("div",{className:"subheading mb-5"},d().job," + ",d().book," + ",d().music," + ",d().travel," = 🙆🏽‍♀️"),n.createElement("div",{className:"intro-container"},n.createElement("div",{className:"introduction"},n.createElement("p",{className:"lead"},"Hi, I am Farhana (she/ her) from Bangladesh! I rethink the design and use of social media technologies to address the needs of traditionally underserved and marginalized communities in the Global South.",n.createElement("br",null),n.createElement("br",null),"Currently I am in the second year of my PhD in"," ",n.createElement("a",{href:"https://infosci.cornell.edu/",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Cornell Information Science"))," ","working with Professor"," ",n.createElement("a",{href:"https://www.adityavashistha.com/",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Aditya Vashistha")),". My research focuses on the impact of existing technologies on underserved communities and aims to incorporate their voices in design. My goal is not only to solve problems. Rather I aspire to bring solutions that are"," ",n.createElement("span",{className:"sym-icon"},"accessible, adaptable,")," and"," ",n.createElement("span",{className:"sym-icon"},"acceptable")," to the communities with and for whom I am working.",n.createElement("br",null),n.createElement("br",null),"Before coming to the USA, I obtained both my BSc and MSc degrees in Computer Science and Engineering from"," ",n.createElement("a",{href:"https://cse.buet.ac.bd/",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"BUET")),", where I worked with Professor"," ",n.createElement("a",{href:"https://sites.google.com/site/abmalimalislam/home",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"A. B. M. Alim Al Islam."))," ","I also spent around four wonderful years as a lecturer of CSE at"," ",n.createElement("a",{href:"https://www.bracu.ac.bd/",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Brac University"))," ","and"," ",n.createElement("a",{href:"https://www.easternuni.edu.bd/",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Eastern University,"))," ","where I closely worked with undergraduate students.",n.createElement("br",null),n.createElement("br",null),"Apart from research, I am very much drawn to books, concerts, long walks, full moons, and solo travels. And I am trying to embrace 2Q22 with kindness, empathy, and self-care.",n.createElement("br",null),n.createElement("br",null),n.createElement("a",{href:(0,r.withPrefix)("/files/FSH CV.pdf"),target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},n.createElement("b",null,"Download CV")))," "),n.createElement("div",{className:"social-icons"},d().socialLinks.map((function(e){var t=e.icon,a=e.url;return n.createElement("a",{key:a,href:a,target:"_blank",rel:"noopener noreferrer"},n.createElement("i",{className:t}))})))),n.createElement("div",{className:"news"},n.createElement("span",{className:"recNews"},n.createElement("b",null,"Recent News")),n.createElement("ul",{class:"fa-ul"},n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-chalkboard-teacher"})),n.createElement("b",null,"May 22"),": Presented our paper on users' perceptions of fake videos in CHI!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-hands-helping"})),n.createElement("b",null,"May 22"),": Volunteered at CHI!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-pen-square"})),n.createElement("b",null,"Feb 22"),": Paper on perceptions and attitudes around fake videos accepted at CHI!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-award"})),n.createElement("b",null,"Feb 22"),": Selected as a Finalist in ",n.createElement("span",{className:"sym-icon"},n.createElement("b",null,"Meta PhD Research Fellowship ")),"under Social Media, People, and Society category!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-pen-square"})),n.createElement("b",null,"Dec 21"),": Paper on source effect on the perceptions of fake news accepted at CSCW!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-hands-helping"})),n.createElement("b",null,"Oct 21"),": Volunteered at CSCW!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-hands-helping"})),n.createElement("b",null,"Sep 21"),": Volunteered at UbiComp!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-user-graduate"})),n.createElement("b",null,"Jun 21"),": Started PhD at Cornell University!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-graduation-cap"})),n.createElement("b",null,"May 21"),": Defended MSc thesis at BUET!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-hands-helping"})),n.createElement("b",null,"May 21"),": Volunteered at CHI!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-chalkboard-teacher"})),n.createElement("b",null,"Oct 20"),": Presented our paper on dengue epidemic in Bangladesh at CSCW!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-award"})),n.createElement("b",null,"Oct 20"),": Our work on 2019 Dengue epidemic in Bangladesh won"," ",n.createElement("span",{className:"sym-icon"},n.createElement("b",null,"CSCW Honorable Mention Award")),"!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-award"})),n.createElement("b",null,"Sep 20"),": Our work on PTSD among Rohingya refugees won"," ",n.createElement("span",{className:"sym-icon"},n.createElement("b",null,"IMWUT Distinguished Paper Award")),"!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-chalkboard-teacher"})),n.createElement("b",null,"Sep 20"),": Presented our paper on PTSD and free-hand sketches at UbiComp!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-pen-square"})),n.createElement("b",null,"Jul 20"),": Paper on PTSD and free-hand sketches accepted at IMWUT!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-pen-square"})),n.createElement("b",null,"Apr 20"),": Paper on dengue epidemic accepted at CSCW!")))))),n.createElement("hr",{className:"m-0"}),n.createElement("section",{className:"resume-section p-lg-5 p-md-4 d-flex justify-content-center",id:"publication"},n.createElement("div",{className:"w-100"},n.createElement("h2",{className:"mb-5"},"Publications"),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-3"},n.createElement("div",{className:"resume-content"},n.createElement("h3",{className:"mb-0"},"2022"),n.createElement("ul",{className:"papers"},n.createElement("li",{className:"paper"},n.createElement("a",{href:"https://dl.acm.org/doi/10.1145/3491102.3517646",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},'"It Matches My Worldview": Examining Perceptions and Attitudes Around Fake Videos.')),n.createElement("br",null),n.createElement("span",{className:"authorMe"},"Farhana Shahid"),", Srujana Kamath, Annie Sidotam, Vivian Jiang, Alexa Batino, and Aditya Vashistha. In"," ",n.createElement("span",{className:"publishedwhere"}," ","CHI Conference on Human Factors in Computing Systems (CHI 2022).")," [",n.createElement("a",{href:(0,r.withPrefix)("/files/chi22_fake_video.pdf"),target:"_blank",rel:"noopener noreferrer"},"PDF"),"][",n.createElement("a",{href:(0,r.withPrefix)("/files/chi22_deepfake.pptx"),target:"_blank",rel:"noopener noreferrer"},"CHI'22 Presentation"),"] [",n.createElement("a",{href:"https://youtu.be/m5rI7HE2Rrk",target:"_blank",rel:"noopener noreferrer"},"Video"),"]",n.createElement("br",null)),n.createElement("br",null),n.createElement("li",{className:"paper"},n.createElement("a",{href:"https://dl.acm.org/doi/10.1145/3512936",target:"_blank",rel:"noopener\r noreferrer"},n.createElement("span",{className:"sym-icon"},"Examining Source Effects on Perceptions of Fake News in Rural India.")),n.createElement("br",null),n.createElement("span",{className:"authorMe"},"Farhana Shahid"),", Shrirang Mare, and Aditya Vashistha. In"," ",n.createElement("span",{className:"publishedwhere"}," ","Proceedings of the ACM on Human-Computer Interaction"),": Vol. 6, Issue CSCW1, Article 89. [",n.createElement("a",{href:(0,r.withPrefix)("/files/Source_Effect_CSCW.pdf"),target:"_blank",rel:"noopener noreferrer"},"PDF"),"]",n.createElement("br",null))))),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-3"},n.createElement("div",{className:"resume-content"},n.createElement("h3",{className:"mb-0"},"2021"),n.createElement("ul",{className:"papers"},n.createElement("li",{className:"paper"},n.createElement("a",{href:(0,r.withPrefix)("/files/FSH_MSc_Thesis.pdf"),target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Leveraging Features from EEG and Free-Hand Sketches for Effective Diagnosis of Post-Traumatic Stress Disorder.")),n.createElement("br",null),n.createElement("span",{className:"authorMe"},"Farhana Shahid"),". M.Sc. Engg. Thesis, Department of Computer Science and Engineering, BUET.")))),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-3"},n.createElement("div",{className:"resume-content"},n.createElement("h3",{className:"mb-0"},"2020"),n.createElement("ul",{className:"papers"},n.createElement("li",{className:"paper"},n.createElement("a",{href:"https://dl.acm.org/doi/10.1145/3411835",target:"_blank",rel:"noopener\r noreferrer"},n.createElement("span",{className:"sym-icon"},"Leveraging Free-Hand Sketches for Potential Screening of PTSD.")),n.createElement("br",null),n.createElement("span",{className:"authorMe"},"Farhana Shahid"),", Wasifur Rahman, M. Saifur Rahman, Sharmin Akther Purabi, Ayesha Seddiqa, Moin Mostakim, Farhan Feroz, Tanjir Rashid Soron, Fahmida Hossain, Nabila Khan, Anika Binte Islam, Nipi Paul, Ehsan Hoque, and A. B. M. Alim Al Islam. In"," ",n.createElement("span",{className:"publishedwhere"}," ","Proceedings of the ACM on Interactive Mobile, Wearable and Ubiquitous Technologies (IMWUT' 20)"),": Vol. 4, No. 3, Article 94. [",n.createElement("a",{href:(0,r.withPrefix)("/files/Sketch_Camera_Ready.pdf"),target:"_blank",rel:"noopener noreferrer"},"PDF"),"] [",n.createElement("a",{href:(0,r.withPrefix)("/files/UbiComp20_Sketch.pptx"),target:"_blank",rel:"noopener noreferrer"},"UbiComp'20 Presentation"),"] [",n.createElement("a",{href:"https://youtu.be/-L8GdW69AFU",target:"_blank",rel:"noopener noreferrer"},"Video"),"]"),n.createElement("br",null),n.createElement("li",{className:"paper"},n.createElement("a",{href:"https://dl.acm.org/doi/10.1145/3392875",target:"_blank",rel:"noopener\r noreferrer"},n.createElement("span",{className:"sym-icon"},"Learning from Tweets: Opportunities and Challenges to Inform Policy Making During Dengue Epidemic.")),n.createElement("br",null),n.createElement("span",{className:"authorMe"},"Farhana Shahid"),", Shahinul Hoque Ony, Takrim Rahman Albi, Sriram Chellappan, Aditya Vashistha, and A. B. M. Alim Al Islam. In"," ",n.createElement("span",{className:"publishedwhere"}," ","Proceedings of the ACM on Human-Computer Interaction"),": Vol. 4, Issue CSCW1, Article 65. ",n.createElement("br",null),"[",n.createElement("a",{href:(0,r.withPrefix)("/files/cscw_dengue_2020.pdf"),target:"_blank",rel:"noopener noreferrer"},"PDF"),"] [",n.createElement("a",{href:(0,r.withPrefix)("/files/CSCW20_Presentation.pptx"),target:"_blank",rel:"noopener noreferrer"},"CSCW'20 Presentation"),"] [",n.createElement("a",{href:"https://youtu.be/Oe0fD_LwpyY",target:"_blank",rel:"noopener noreferrer"},"Video"),"]"),n.createElement("span",{class:"sym-icon"},n.createElement("i",{class:"fas fa-award"}),n.createElement("b",null," CSCW Honorable Mention Award"))))),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between"},n.createElement("div",{className:"resume-content"},n.createElement("h3",{className:"mb-0"},"2019"),n.createElement("ul",{className:"papers"},n.createElement("li",{className:"paper"},n.createElement("a",{href:"https://dl.acm.org/doi/10.1145/3351259",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Two Tell-tale Perspectives of PTSD: Neurobiological Abnormalities and Bayesian Regulatory Network of the Underlying Disorder in a Refugee Context.")),n.createElement("br",null),n.createElement("span",{className:"authorMe"},"Farhana Shahid"),", Wasifur Rahman, Anika Binte Islam, Nipi Paul, Nabila Khan, Mohammad Saifur Rahman, Md Munirul Haque, and A. B. M. Alim Al Islam. In"," ",n.createElement("span",{className:"publishedwhere"},"Proceedings of the ACM on Interactive Mobile, Wearable and Ubiquitous Technologies (IMWUT' 19)"),": Vol. 3, No. 3, Article 101. [",n.createElement("a",{href:(0,r.withPrefix)("/files/FSH_IMWUT19.pdf"),target:"_blank",rel:"noopener noreferrer"},"PDF"),"] [",n.createElement("a",{href:(0,r.withPrefix)("/files/UbiComp19_PTSD.pptx"),target:"_blank",rel:"noopener noreferrer"},"UbiComp'19 Presentation"),"]"),n.createElement("span",{class:"sym-icon"},n.createElement("i",{class:"fas fa-award"}),n.createElement("b",null," IMWUT Distinguished Paper Award"))))))),n.createElement("hr",{className:"m-0"}),n.createElement("section",{className:"resume-section p-lg-5 p-md-4 d-flex align-items-center",id:"research"},n.createElement("div",{className:"w-100"},n.createElement("h2",{className:"mb-5"},"Research"),n.createElement("h3",{className:"mb-3"},"Appointments"),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.createElement("div",{className:"resume-content"},n.createElement("h4",{className:"mb-0"},"Graduate Research Assistant"),n.createElement("div",{className:"subheading mb-1"},"Department of Information Science, Cornell University")),n.createElement("div",{className:"resume-date text-md-right"},n.createElement("span",{className:"text-primary"},"Summer 2022, Spring 2022, Summer 2021"))),n.createElement("h3",{className:"mb-3"},"Projects"),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.createElement("div",{className:"resume-content"},n.createElement("h4",{className:"mb-3"},"Misinformation in the Global South"),n.createElement("div",{className:"paper-container"},n.createElement("div",{className:"paper-body"},n.createElement("p",{className:"paper"},"Following the widespread growth of social media platforms in the Global North, these services are now aiming at the billions of new users emerging from the Global South. Many of these first generation Internet users are often low-literate, lack technological know-hows, and are exposed to global platforms that do not usually incorporate local values and sensibilities in their design. All these make them more susceptible to the harms of online misinformation and fake news. However, there is little focus on how users from the Global South perceive and interact with different modalities (i.e., text, image, video, or audio) of misinformation. In this regard, we study what factors influence users' perceptions and mental models of misinformation and explore how to incorporate responsible design practices on social media to better help these users deal with online misinformation and fake news.",n.createElement("br",null),"Publications:"," ",n.createElement("a",{href:(0,r.withPrefix)("/files/Source_Effect_CSCW.pdf"),target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"CSCW 2022")),",",n.createElement("a",{href:(0,r.withPrefix)("/files/chi22_fake_video.pdf"),target:"_blank",rel:"noopener noreferrer"}," ",n.createElement("span",{className:"sym-icon"},"CHI 2022")))),n.createElement("div",{className:"paper-image"},n.createElement("img",{className:"img-fluid",src:b,alt:"A simulated Facebook post from actor Priyanka Chopra saying Delhi Chief Minister Arvvind Kejriwal \r has said that the number of coronavirus-related deaths has declined."}),n.createElement("p",{className:"img-caption"},"Controlled experiment to see how various sources (e.g., news media) affect users' trust in online news."))))),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.createElement("div",{className:"resume-content"},n.createElement("h4",{className:"mb-3"},"PTSD within Low-Resource Communities"),n.createElement("div",{className:"paper-container"},n.createElement("div",{className:"paper-body"},n.createElement("p",{className:"paper"},"Critical lack of trained mental health professionals, communication and cultural barriers, social stigma around mental health in low-rosurce communities expose the traumatized individuals to greater health risks. Traditional diagnostic tools of PTSD often suffer from under-utilization due to various issues associated with human-human interactions while applying them within resource-scarce populations. In this regard, we aim to explore alternative methods to potentially screen for PTSD using various low-cost, off-the-shelf tools, e.g., portable EEG headsets and free-hand sketches using simple pencil and paper. Findings from our field work involving refugees and slum-dwellers enable us to identify scopes for improvement in screening the potential cases of PTSD within low-rosurce communities.",n.createElement("br",null),"Publications:"," ",n.createElement("a",{href:(0,r.withPrefix)("/files/FSH_IMWUT19.pdf"),target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"IMWUT 2019")),",",n.createElement("a",{href:(0,r.withPrefix)("/files/Sketch_Camera_Ready.pdf"),target:"_blank",rel:"noopener noreferrer"}," ",n.createElement("span",{className:"sym-icon"},"IMWUT 2020")))),n.createElement("div",{className:"paper-image"},n.createElement("img",{className:"img-fluid",src:E,alt:"Some female Rohingya refugees are waiting in a room for interview in the camp area"}),n.createElement("p",{className:"img-caption"},"Kutupalong Rohingya refugee camp, Cox's Bazar, Bangladesh"))))))),n.createElement("hr",{className:"m-0"}),n.createElement("section",{className:"resume-section p-lg-5 p-md-4 d-flex align-items-center",id:"teaching"},n.createElement("div",{className:"w-100"},n.createElement("h2",{className:"mb-5"},"Teaching"),n.createElement("h3",{className:"mb-3"},"Appointments"),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.createElement("div",{className:"resume-content"},n.createElement("h4",{className:"mb-0"},"Graduate Teaching Assistant"),n.createElement("div",{className:"subheading mb-1"},"Department of Information Science, Cornell University")),n.createElement("div",{className:"resume-date text-md-right"},n.createElement("span",{className:"text-primary"},"Aug 2021 - Dec 2021"))),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.createElement("div",{className:"resume-content"},n.createElement("h4",{className:"mb-0"},"Lecturer"),n.createElement("div",{className:"subheading mb-1"},"Department of Computer Science and Engineering, Brac University")),n.createElement("div",{className:"resume-date text-md-right"},n.createElement("span",{className:"text-primary"},"May 2018 - May 2021"))),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.createElement("div",{className:"resume-content"},n.createElement("h4",{className:"mb-0"},"Lecturer"),n.createElement("div",{className:"subheading mb-1"},"Department of Computer Science and Engineering, Eastern University")),n.createElement("div",{className:"resume-date text-md-right"},n.createElement("span",{className:"text-primary"},"September 2017 - April 2018"))),n.createElement("h3",{className:"mb-3"},"Courses Taught"),n.createElement("ul",{className:"fa-ul mb-0"},n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Computing and Global Development (Fall 2021)"),n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Computer Graphics (Spring 2021, Fall 2020, Summer 2020, Spring 2020, Fall 2019, Summer 2019, Spring 2019, Spring 2018)"),n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Pattern Recognition (Fall 2020, Summer 2020)"),n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Artificial Intelligence (Spring 2020, Fall 2019)"),n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Object Oriented Programming (Fall 2019, Summer 2019, Spring 2019, Fall 2018, Summer 2018)"),n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Digital Logic Design (Spring 2020, Summer 2018)"),n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Algorithms (Summer 2019, Fall 2019, Summer 2018)"),n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Data Structures (Summer 2019, Summer 2018)"),n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Operating Systems (Spring 2018, Fall 2017)"),n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Mathematical Analysis for Computer Science (Fall 2017)")),n.createElement("br",null)))))}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,a){var n=a(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},6690:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},9728:function(e){function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.__esModule=!0,e.exports.default=e.exports},3808:function(e){function t(a){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(a)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},1655:function(e,t,a){var n=a(6015);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},4993:function(e,t,a){var n=a(8698).default,r=a(6115);e.exports=function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9213:function(e,t,a){var n=a(3405),r=a(9498),l=a(6116),s=a(2281);e.exports=function(e){return n(e)||r(e)||l(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(a){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(a)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,a){var n=a(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-js-d69cf31f1d8f94edc3eb.js.map