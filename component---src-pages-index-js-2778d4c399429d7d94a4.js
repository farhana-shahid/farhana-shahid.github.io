/*! For license information please see component---src-pages-index-js-2778d4c399429d7d94a4.js.LICENSE.txt */
(self.webpackChunkfarhana_shahid_github_io=self.webpackChunkfarhana_shahid_github_io||[]).push([[678],{5900:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)){if(a.length){var o=r.apply(null,a);o&&e.push(o)}}else if("object"===l){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},4266:function(e,t,a){"use strict";var n=a(4836);t.Z=void 0;var r=n(a(434)),l=n(a(8416)),o=n(a(9213)),s=n(a(6690)),i=n(a(4993)),c=n(a(3808)),m=n(a(6115)),u=n(a(9728)),f=n(a(1655)),p=n(a(5697)),d=n(a(7294)),h=n(a(5900)),E=n(a(2470));var b=function(e){function t(e){var a;return(0,s.default)(this,t),(a=(0,i.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,m.default)(a)),a}return(0,f.default)(t,e),(0,u.default)(t,null,[{key:"propTypes",get:function(){return{items:p.default.arrayOf(p.default.string).isRequired,currentClassName:p.default.string.isRequired,scrolledPastClassName:p.default.string,style:p.default.object,componentTag:p.default.oneOfType([p.default.string,p.default.elementType]),offset:p.default.number,rootEl:p.default.string,onUpdate:p.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,u.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],n=0,r=e.length;n<r;n++)a[n]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],n=[],r=e||this.state.targetItems,l=!1,s=0,i=r.length;s<i;s++){var c=r[s],m=!l&&this._isInView(c);m?(l=!0,t.push(c)):a.push(c);var u=s===i-1,f=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!m&&u&&f&&(a.pop(),a.push.apply(a,(0,o.default)(t)),t=[c],n=this._fillArray(n,!1),m=!0),n.push(m)}return{inView:t,outView:a,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,n=a.rootEl,r=a.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var l=e.getBoundingClientRect(),o=n?t.height:window.innerHeight,s=this._getScrollDimension().scrollTop,i=s+o,c=n?l.top+s-t.top+r:l.top+s+r,m=c+e.offsetHeight;return c<i&&m>s}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,n=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,E.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,n=a.children,o=a.className,s=a.scrolledPastClassName,i=a.style,c=0,m=d.default.Children.map(n,(function(t,a){var n;if(!t)return null;var o=t.type,i=s&&e.state.isScrolledPast[a],m=(0,h.default)((n={},(0,l.default)(n,"".concat(t.props.className),t.props.className),(0,l.default)(n,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,l.default)(n,"".concat(e.props.scrolledPastClassName),i),n));return d.default.createElement(o,(0,r.default)({},t.props,{className:m,key:c++}),t.props.children)})),u=(0,h.default)((0,l.default)({},"".concat(o),o));return d.default.createElement(t,{className:u,style:i},m)}}]),t}(d.default.Component);t.Z=b},2470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){var t,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var r=+new Date;!!t&&r<t+n?(clearTimeout(a),a=setTimeout((function(){t=r,e()}),n)):(t=r,e())}};t.default=a},9634:function(e){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,n=e.HTMLElement||e.Element,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||s,scrollIntoView:n.prototype.scrollIntoView},l=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,o=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?d.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(i(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==i(arguments[0])){var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==i(arguments[0])){var a=f(this),n=a.getBoundingClientRect(),l=this.getBoundingClientRect();a!==t.body?(d.call(this,a,a.scrollLeft+l.left-n.left,a.scrollTop+l.top-n.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function i(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+o<e.scrollHeight:"X"===t?e.clientWidth+o<e.scrollWidth:void 0}function m(t,a){var n=e.getComputedStyle(t,null)["overflow"+a];return"auto"===n||"scroll"===n}function u(e){var t=c(e,"Y")&&m(e,"Y"),a=c(e,"X")&&m(e,"X");return t||a}function f(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function p(t){var a,n,r,o,s=(l()-t.startTime)/468;o=s=s>1?1:s,a=.5*(1-Math.cos(Math.PI*o)),n=t.startX+(t.x-t.startX)*a,r=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,n,r),n===t.x&&r===t.y||e.requestAnimationFrame(p.bind(e,t))}function d(a,n,o){var i,c,m,u,f=l();a===t.body?(i=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,u=r.scroll):(i=a,c=a.scrollLeft,m=a.scrollTop,u=s),p({scrollable:i,method:u,startTime:f,startX:c,startY:m,x:n,y:o})}}}}()},8514:function(e){e.exports={siteTitle:"Farhana Shahid",manifestName:"Resume",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",firstName:"Farhana ",lastName:"Shahid",socialLinks:[{icon:"fa fa-envelope",name:"Email",url:"mailto:fs468@cornell.edu"},{icon:"ai ai-google-scholar",name:"Google Scholar",url:"https://scholar.google.com/citations?user=mYk4EZsAAAAJ"},{icon:"fab fa-linkedin-in",name:"Linked In",url:"https://www.linkedin.com/in/farhana-shahid"},{icon:"fab fa-twitter",name:"Twitter",url:"https://twitter.com/FarhanaShahid_"},{icon:"fab fa-goodreads-g",name:"Goodreads",url:"https://www.goodreads.com/user/show/52763346-farhana"}],book:"Books",music:"Music",travel:"Travel",job:"Research"}},8131:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var n=a(7294),r=a(5444),l=a(1646);function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=a(1721),i=a(4266),c=a(9634),m=a.n(c);const u=e=>e.children;var f=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(o(t)),t}(0,s.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){m().polyfill()},a.handleClick=function(e){e.preventDefault();let t=0,a=!0;const{type:n,element:r,offset:l,timeout:o}=this.props;if(n&&r)switch(n){case"class":t=document.getElementsByClassName(r)[0],a=!!t;break;case"id":t=document.getElementById(r),a=!!t}a?this.scrollTo(t,l,o):console.log(`Element not found: ${r}`)},a.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);const n=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((()=>{window.scroll({top:n+t,left:0,behavior:"smooth"})}),a):window.scroll({top:n+t,left:0,behavior:"smooth"})},a.render=function(){return n.createElement(u,null,"object"==typeof this.props.children?n.cloneElement(this.props.children,{onClick:this.handleClick}):n.createElement("span",{role:"button",tabIndex:0,onClick:this.handleClick,onKeyDown:this.handleClick},this.props.children))},t}(n.Component),p=a.p+"static/avatar4-bad41d1fb8f0c8a776cbf9cb3ac787b7.jpg",d=a(8514),h=a.n(d);var E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={tabs:[{id:"about",content:"About",href:"about"},{id:"publication",content:"Publications",href:"publication"},{id:"teaching",content:"Teaching",href:"teaching"},{id:"cv",content:"CV",href:"cv"}],isCollapsed:!0},a.toggleNavbar=a.toggleNavbar.bind(o(a)),a}(0,s.Z)(t,e);var a=t.prototype;return a.toggleNavbar=function(){this.setState({isCollapsed:!this.state.isCollapsed})},a.render=function(){const{tabs:e,isCollapsed:t}=this.state;return n.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},n.createElement("a",{className:"navbar-brand",href:"#page-top"},n.createElement("span",{className:"d-block d-lg-none"},h().firstName," ",h().lastName),n.createElement("span",{className:"d-none d-lg-block"},n.createElement("img",{className:"img-fluid img-profile thumbnail mx-auto mb-2",src:p,alt:"A smiling headshot of me"}))),n.createElement("button",{className:"navbar-toggler navbar-toggler-right "+(t?"collapsed":""),type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.toggleNavbar},n.createElement("span",{className:"navbar-toggler-icon"})),n.createElement("div",{className:"collapse navbar-collapse "+(t?"":"show"),id:"navbarSupportedContent"},n.createElement(i.Z,{items:e.map((e=>e.href)),currentClassName:"active",offset:-300,className:"navbar-nav"},e.map(((e,t)=>{const{id:a,href:l,content:o}=e;return"cv"===a?n.createElement("li",{className:"nav-item",key:l},n.createElement("a",{className:"nav-link",href:(0,r.withPrefix)("/files/FSH CV.pdf"),target:"_blank",rel:"noopener noreferrer"},o)):n.createElement("li",{className:"nav-item",key:l},n.createElement(f,{type:"id",element:l},n.createElement("a",{className:"nav-link",href:`#${l}`},o)))})))))},t}(n.Component);var b=e=>{let{data:t}=e;return n.createElement(l.Z,null,n.createElement(E,null),n.createElement("div",{className:"container-fluid p-0"},n.createElement("section",{className:"resume-section p-lg-5 p-md-4 d-flex align-items-center",id:"about"},n.createElement("div",{className:"w-100"},n.createElement("span",{className:"d-block d-lg-none"},n.createElement("img",{className:"img-fluid img-profile thumbnail mx-auto mb-2 border border-secondary",src:p,width:"30%","border-width":"100px",alt:"A smiling headshot of me"})),n.createElement("h2",{className:"mb-0"},h().firstName,n.createElement("span",{className:"text-primary"},h().lastName)),n.createElement("div",{className:"subheading mb-5"},"SHE/ HER/ HERS🙆🏽‍♀️"),n.createElement("div",{className:"intro-container"},n.createElement("div",{className:"introduction"},n.createElement("p",{className:"lead"},"I am a Human-Computer Interaction (HCI) researcher working at the intersection of online governance, trust and safety issues in the Majority World (i.e., Global South). My research examines:",n.createElement("ul",{className:"dissList"},n.createElement("li",null,"the ",n.createElement("b",null,"unique")," drivers of fake news and deepfakes in the Majority World"),n.createElement("li",null,n.createElement("b",null,"colonial biases")," and ",n.createElement("b",null,"systemic failures")," of moderation systems in the Majority World"),n.createElement("li",null,n.createElement("b",null,"culturally-aware")," approaches to address harmful content in the Majority World")),"I am a fourth year PhD candidate in",n.createElement("a",{href:"https://infosci.cornell.edu/",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"}," Cornell Information Science")),", ","advised by Professor"," ",n.createElement("a",{href:"https://www.adityavashistha.com/",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Aditya Vashistha")),". I completed my Bachelors and Masters in Computer Science and Engineering from",n.createElement("a",{href:"https://cse.buet.ac.bd/",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"}," BUET")),", advised by Professor"," ",n.createElement("a",{href:"https://sites.google.com/site/abmalimalislam/home",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"A. B. M. Alim Al Islam."))," ","I also worked as a lecturer of Computer Science at"," ",n.createElement("a",{href:"https://www.bracu.ac.bd/",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Brac University"))," ","and"," ",n.createElement("a",{href:"https://www.easternuni.edu.bd/",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Eastern University."))," ",n.createElement("br",null),n.createElement("br",null),"Apart from research, I am very much drawn to books, concerts, jigsaw puzzles, long walks, and full moons."),n.createElement("div",{className:"social-icons"},h().socialLinks.map((e=>{const{icon:t,url:a}=e;return n.createElement("a",{key:a,href:a,target:"_blank",rel:"noopener noreferrer"},n.createElement("i",{className:t}))})))),n.createElement("div",{className:"news"},n.createElement("span",{className:"recNews"},n.createElement("b",null,"Recent News")),n.createElement("ul",{class:"fa-ul"},n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-chalkboard-teacher"})),n.createElement("b",null,"Nov 24"),": Presented my work at doctoral consortium in CSCW 2024!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-newspaper"})),n.createElement("b",null,"Sep 24"),": Paper accepted to CSCW 2025!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-handshake"})),n.createElement("b",null,"Jun 24"),": Summer research intern at Center for Democracy and Technology!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-award"})),n.createElement("b",null,"May 24"),": Received ",n.createElement("b",null,"Outstanding PhD Service")," and ",n.createElement("b",null,"Outstanding Teaching Awards"),"!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-users"})),n.createElement("b",null,"May 24"),": Participated in Doctoral Consortium at Northeast HCI!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-newspaper"})),n.createElement("b",null,"Apr 24"),": Paper accepted to CSCW 2024!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-award"})),n.createElement("b",null,"Apr 24"),": Won the ",n.createElement("b",null,"Best Student Paper Award "),"at Social Media and Society in India Symposium!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-microphone"})),n.createElement("b",null,"Apr 24"),": Gave a talk in Social Computing Research Lab at University of Michigan!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-pen-square"})),n.createElement("b",null,"Mar 24"),": Received 2 special recognitions for reviewing @CSCW."),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-microphone"})),n.createElement("b",null,"Feb 24"),": Gave a guest lecture in Antisocial Computing class at UC San Diego!"),n.createElement("li",null,n.createElement("span",{class:"fa-li"},n.createElement("i",{class:"fas fa-microphone"})),n.createElement("b",null,"Jan 24"),": Gave a talk in HCI Graduate Seminar at UC Berkeley!")))))),n.createElement("hr",{className:"m-0"}),n.createElement("section",{className:"resume-section p-lg-5 p-md-4 d-flex justify-content-center",id:"publication"},n.createElement("div",{className:"w-100"},n.createElement("h2",{className:"mb-5"},"Publications"),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-3"},n.createElement("div",{className:"resume-content"},n.createElement("h3",{className:"mb-0"},"2025"),n.createElement("ul",{className:"papers"},n.createElement("li",{className:"paper"},n.createElement("span",{className:"sym-icon"},"'One Style Does Not Regulate All': Moderation Practices in Public and Private WhatsApp Groups"),n.createElement("br",null),n.createElement("span",{className:"authorMe"},"Farhana Shahid"),", Dhruv Agarwal, and Aditya Vashistha.",n.createElement("br",null),"Proceedings of the ACM on Human-Computer Interaction (CSCW 2025) [",n.createElement("a",{href:(0,r.withPrefix)("https://arxiv.org/pdf/2401.08091"),target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"PDF")),"]",n.createElement("br",null),n.createElement("span",{class:"sym-icon"},n.createElement("i",{class:"fas fa-award"}),n.createElement("b",null," Best Student Paper (International Conference on Social Media and Society in India)"))),n.createElement("br",null)))),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-3"},n.createElement("div",{className:"resume-content"},n.createElement("h3",{className:"mb-0"},"2024"),n.createElement("ul",{className:"papers"},n.createElement("li",{className:"paper"},n.createElement("a",{href:"https://cdt.org/insights/colonialism-in-content-moderation-research-the-struggles-of-scholars-in-the-majority-world/",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Colonialism in Content Moderation Research: The Struggles of Scholars in the Majority World")),n.createElement("br",null),n.createElement("span",{className:"authorMe"},"Farhana Shahid"),n.createElement("br",null)," Center for Democracy and Technology"),n.createElement("br",null),n.createElement("li",{className:"paper"},n.createElement("a",{href:"https://dl.acm.org/doi/10.1145/3687030",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Conversational Agents to Facilitate Deliberation on Harmful Content in WhatsApp Groups.")),n.createElement("br",null),"Dhruv Agarwal, ",n.createElement("span",{className:"authorMe"},"Farhana Shahid"),", and Aditya Vashistha.",n.createElement("br",null),"Proceedings of the ACM on Human-Computer Interaction (CSCW 2024) [",n.createElement("a",{href:(0,r.withPrefix)("https://arxiv.org/pdf/2405.20254"),target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"PDF")),"]",n.createElement("br",null)),n.createElement("br",null)))),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-3"},n.createElement("div",{className:"resume-content"},n.createElement("h3",{className:"mb-0"},"2023"),n.createElement("ul",{className:"papers"},n.createElement("li",{className:"paper"},n.createElement("a",{href:"https://doi.org/10.1145/3544548.3581538",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Decolonizing Content Moderation: Does Uniform Global Community Standard Resemble Utopian Equality or Western Power Hegemony?")),n.createElement("br",null),n.createElement("span",{className:"authorMe"},"Farhana Shahid")," and Aditya Vashistha.",n.createElement("br",null),"ACM Conference on Human Factors in Computing Systems (CHI 2023) [",n.createElement("a",{href:(0,r.withPrefix)("/files/chi23-decolonial-moderation.pdf"),target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"PDF")),"][",n.createElement("a",{href:(0,r.withPrefix)("/files/chi23_decolonial_moderation.pdf"),target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Slides")),"] [",n.createElement("a",{href:"https://youtu.be/Mb14Rkx8xyU",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Video")),"]",n.createElement("br",null)),n.createElement("br",null)))),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-3"},n.createElement("div",{className:"resume-content"},n.createElement("h3",{className:"mb-0"},"2022"),n.createElement("ul",{className:"papers"},n.createElement("li",{className:"paper"},n.createElement("a",{href:"https://dl.acm.org/doi/10.1145/3491102.3517646",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},'"It Matches My Worldview": Examining Perceptions and Attitudes Around Fake Videos.')),n.createElement("br",null),n.createElement("span",{className:"authorMe"},"Farhana Shahid"),", Srujana Kamath, Annie Sidotam, Vivian Jiang, Alexa Batino, and Aditya Vashistha.",n.createElement("br",null)," ACM Conference on Human Factors in Computing Systems (CHI 2022) [",n.createElement("a",{href:(0,r.withPrefix)("/files/chi22_fake_video.pdf"),target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"PDF")),"][",n.createElement("a",{href:(0,r.withPrefix)("/files/chi22_deepfake.pdf"),target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Slides")),"] [",n.createElement("a",{href:"https://youtu.be/m5rI7HE2Rrk",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Video")),"]",n.createElement("br",null)),n.createElement("br",null),n.createElement("li",{className:"paper"},n.createElement("a",{href:"https://dl.acm.org/doi/10.1145/3512936",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Examining Source Effects on Perceptions of Fake News in Rural India.")),n.createElement("br",null),n.createElement("span",{className:"authorMe"},"Farhana Shahid"),", Shrirang Mare, and Aditya Vashistha. ",n.createElement("br",null),"Proceedings of the ACM on Human-Computer Interaction (CSCW 2022) [",n.createElement("a",{href:(0,r.withPrefix)("/files/Source_Effect_CSCW.pdf"),target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"PDF")),"] [",n.createElement("a",{href:(0,r.withPrefix)("/files/source_effect_cscw22.pdf"),target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Slides")),"] [",n.createElement("a",{href:"https://youtu.be/yd3o2SlvSoI",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Video")),"]",n.createElement("br",null))))),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-3"},n.createElement("div",{className:"resume-content"},n.createElement("h3",{className:"mb-0"},"2021"),n.createElement("ul",{className:"papers"},n.createElement("li",{className:"paper"},n.createElement("a",{href:(0,r.withPrefix)("/files/FSH_MSc_Thesis.pdf"),target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Leveraging Features from EEG and Free-Hand Sketches for Effective Diagnosis of Post-Traumatic Stress Disorder.")),n.createElement("br",null),n.createElement("span",{className:"authorMe"},"Farhana Shahid"),". M.Sc. Engg. Thesis, Department of Computer Science and Engineering, BUET.")))),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-3"},n.createElement("div",{className:"resume-content"},n.createElement("h3",{className:"mb-0"},"2020"),n.createElement("ul",{className:"papers"},n.createElement("li",{className:"paper"},n.createElement("a",{href:"https://dl.acm.org/doi/10.1145/3411835",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Leveraging Free-Hand Sketches for Potential Screening of PTSD.")),n.createElement("br",null),n.createElement("span",{className:"authorMe"},"Farhana Shahid"),", Wasifur Rahman, M. Saifur Rahman, Sharmin Akther Purabi, Ayesha Seddiqa, Moin Mostakim, Farhan Feroz, Tanjir Rashid Soron, Fahmida Hossain, Nabila Khan, Anika Binte Islam, Nipi Paul, Ehsan Hoque, and A. B. M. Alim Al Islam.",n.createElement("br",null),"Proceedings of the ACM on Interactive Mobile, Wearable and Ubiquitous Technologies (UBICOMP 2020) [",n.createElement("a",{href:(0,r.withPrefix)("/files/Sketch_Camera_Ready.pdf"),target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"PDF")),"] [",n.createElement("a",{href:(0,r.withPrefix)("/files/UbiComp20_Sketch.pdf"),target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Slides")),"] [",n.createElement("a",{href:"https://youtu.be/-L8GdW69AFU",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Video")),"]"),n.createElement("br",null),n.createElement("li",{className:"paper"},n.createElement("a",{href:"https://dl.acm.org/doi/10.1145/3392875",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Learning from Tweets: Opportunities and Challenges to Inform Policy Making During Dengue Epidemic.")),n.createElement("br",null),n.createElement("span",{className:"authorMe"},"Farhana Shahid"),", Shahinul Hoque Ony, Takrim Rahman Albi, Sriram Chellappan, Aditya Vashistha, and A. B. M. Alim Al Islam. ",n.createElement("br",null),"Proceedings of the ACM on Human-Computer Interaction (CSCW 2020) [",n.createElement("a",{href:(0,r.withPrefix)("/files/cscw_dengue_2020.pdf"),target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"PDF")),"] [",n.createElement("a",{href:(0,r.withPrefix)("/files/CSCW20_Presentation.pdf"),target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Slides")),"] [",n.createElement("a",{href:"https://youtu.be/Oe0fD_LwpyY",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Video")),"]"),n.createElement("span",{class:"sym-icon"},n.createElement("i",{class:"fas fa-award"}),n.createElement("b",null," CSCW Honorable Mention Award"))))),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between"},n.createElement("div",{className:"resume-content"},n.createElement("h3",{className:"mb-0"},"2019"),n.createElement("ul",{className:"papers"},n.createElement("li",{className:"paper"},n.createElement("a",{href:"https://dl.acm.org/doi/10.1145/3351259",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Two Tell-tale Perspectives of PTSD: Neurobiological Abnormalities and Bayesian Regulatory Network of the Underlying Disorder in a Refugee Context.")),n.createElement("br",null),n.createElement("span",{className:"authorMe"},"Farhana Shahid "),", Wasifur Rahman, Anika Binte Islam, Nipi Paul, Nabila Khan, Mohammad Saifur Rahman, Md Munirul Haque, and A. B. M. Alim Al Islam.",n.createElement("br",null),"Proceedings of the ACM on Interactive Mobile, Wearable and Ubiquitous Technologies (UBICOMP 2019)[",n.createElement("a",{href:(0,r.withPrefix)("/files/FSH_IMWUT19.pdf"),target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"PDF")),"] [",n.createElement("a",{href:(0,r.withPrefix)("/files/UbiComp19_PTSD.pdf"),target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"sym-icon"},"Slides")),"]"),n.createElement("span",{class:"sym-icon"},n.createElement("i",{class:"fas fa-award"}),n.createElement("b",null," IMWUT Distinguished Paper Award"))))))),n.createElement("hr",{className:"m-0"}),n.createElement("section",{className:"resume-section p-lg-5 p-md-4 d-flex align-items-center",id:"teaching"},n.createElement("div",{className:"w-100"},n.createElement("h2",{className:"mb-5"},"Teaching"),n.createElement("h3",{className:"mb-3"},"Appointments"),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.createElement("div",{className:"resume-content"},n.createElement("h4",{className:"mb-0"},"Graduate Teaching Assistant"),n.createElement("div",{className:"subheading mb-1"},"Department of Information Science, Cornell University")),n.createElement("div",{className:"resume-date text-md-right"},n.createElement("span",{className:"text-primary"},"Aug 2021 - Present"))),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.createElement("div",{className:"resume-content"},n.createElement("h4",{className:"mb-0"},"Lecturer"),n.createElement("div",{className:"subheading mb-1"},"Department of Computer Science and Engineering, Brac University")),n.createElement("div",{className:"resume-date text-md-right"},n.createElement("span",{className:"text-primary"},"May 2018 - May 2021"))),n.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.createElement("div",{className:"resume-content"},n.createElement("h4",{className:"mb-0"},"Lecturer"),n.createElement("div",{className:"subheading mb-1"},"Department of Computer Science and Engineering, Eastern University")),n.createElement("div",{className:"resume-date text-md-right"},n.createElement("span",{className:"text-primary"},"September 2017 - April 2018"))),n.createElement("h3",{className:"mb-3"},"Courses Taught"),n.createElement("ul",{className:"fa-ul p.lead"},n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Computer Graphics (Spring 2021, Fall 2020, Summer 2020, Spring 2020, Fall 2019, Summer 2019, Spring 2019, Spring 2018)"),n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Pattern Recognition (Fall 2020, Summer 2020)"),n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Artificial Intelligence (Spring 2020, Fall 2019)"),n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Object Oriented Programming (Fall 2019, Summer 2019, Spring 2019, Fall 2018, Summer 2018)"),n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Digital Logic Design (Spring 2020, Summer 2018)"),n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Algorithms (Summer 2019, Fall 2019, Summer 2018)"),n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Data Structures (Summer 2019, Summer 2018)"),n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Operating Systems (Spring 2018, Fall 2017)"),n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Mathematical Analysis for Computer Science (Fall 2017)")),n.createElement("br",null),n.createElement("h3",{className:"mb-3"},"Courses Assisted"),n.createElement("ul",{className:"fa-ul mb-0"},n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Technology for Underserved Communities (Spring 2023)"),n.createElement("li",null,n.createElement("i",{className:"fa-li fa fa-check"}),"Computing and Global Development (Fall 2024, Spring 2024, Fall 2022, Fall 2021)")),n.createElement("br",null)))))}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,a){var n=a(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},6690:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},9728:function(e){function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.__esModule=!0,e.exports.default=e.exports},3808:function(e){function t(a){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(a)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},1655:function(e,t,a){var n=a(6015);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},4993:function(e,t,a){var n=a(8698).default,r=a(6115);e.exports=function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9213:function(e,t,a){var n=a(3405),r=a(9498),l=a(6116),o=a(2281);e.exports=function(e){return n(e)||r(e)||l(e)||o()},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(a){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(a)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,a){var n=a(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-js-2778d4c399429d7d94a4.js.map