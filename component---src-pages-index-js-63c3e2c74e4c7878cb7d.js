(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7W2i":function(e,t,a){var r=a("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Fxm3:function(e,t,a){"use strict";a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){var t,a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var n=+new Date;!!t&&n<t+r?(clearTimeout(a),a=setTimeout((function(){t=n,e()}),r)):(t=n,e())}};t.default=r},Ijbi:function(e,t,a){var r=a("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(t)}e.exports=a},RIqP:function(e,t,a){var r=a("Ijbi"),n=a("EbDI"),l=a("ZhPi"),o=a("Bnag");e.exports=function(e){return r(e)||n(e)||l(e)||o()}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),o=a("7oih"),i=a("YIkO"),s=a.n(i),c=a("dwco"),m=a.n(c);var u=function(e){return e.children},f=function(e){var t,a;function r(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=r.prototype;return l.componentDidMount=function(){m.a.polyfill()},l.handleClick=function(e){e.preventDefault();var t=0,a=!0,r=this.props,n=r.type,l=r.element,o=r.offset,i=r.timeout;if(n&&l)switch(n){case"class":a=!!(t=document.getElementsByClassName(l)[0]);break;case"id":a=!!(t=document.getElementById(l))}a?this.scrollTo(t,o,i):console.log("Element not found: "+l)},l.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var r=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:r+t,left:0,behavior:"smooth"})}),a):window.scroll({top:r+t,left:0,behavior:"smooth"})},l.render=function(){return n.a.createElement(u,null,"object"==typeof this.props.children?n.a.cloneElement(this.props.children,{onClick:this.handleClick}):n.a.createElement("span",{onClick:this.handleClick},this.props.children))},r}(n.a.Component),p=a("TUGy"),h=a.n(p),d=a("obyI"),g=a.n(d);var b=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={tabs:[{id:"about",content:"About",href:"about"},{id:"publication",content:"Publications",href:"publication"},{id:"research",content:"Research",href:"research"},{id:"teaching",content:"Teaching",href:"teaching"},{id:"contact",content:"Contact",href:"contact"},{id:"resume",content:"Resume",href:"/static/FSH Resume.pdf"}]},a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.state.tabs;return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},n.a.createElement("a",{className:"navbar-brand",href:"#page-top"},n.a.createElement("span",{className:"d-block d-lg-none"},g.a.firstName," ",g.a.lastName),n.a.createElement("span",{className:"d-none d-lg-block"},n.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:h.a,alt:""}))),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement(s.a,{items:e.map((function(e){return e.href})),currentClassName:"active",offset:-300,className:"navbar-nav"},e.map((function(e,t){var a=e.id,r=e.href,o=e.content;return"resume"===a?n.a.createElement("li",{className:"nav-item",key:r},n.a.createElement("a",{className:"nav-link",href:Object(l.withPrefix)("/files/FSH Resume.pdf"),target:"_blank",rel:"noopener noreferrer"},o)):n.a.createElement("li",{className:"nav-item",key:r},n.a.createElement(f,{type:"id",element:r},n.a.createElement("a",{className:"nav-link",href:"#"+r},o)))})))))},r}(r.Component),E=a("uZNR"),v=a.n(E);t.default=function(e){e.data;return n.a.createElement(o.a,null,n.a.createElement(b,null),n.a.createElement("div",{className:"container-fluid p-0"},n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h1",{className:"mb-0"},g.a.firstName,n.a.createElement("span",{className:"text-primary"},g.a.lastName)),n.a.createElement("div",{className:"subheading mb-5"},g.a.address," · ",g.a.phone," · ",g.a.email," . ","She/ Her/ Hers"),n.a.createElement("div",null,n.a.createElement("table",null,n.a.createElement("td",{width:"71%"},n.a.createElement("p",{className:"lead mb-5"},"I am an incoming PhD student in ",n.a.createElement("a",{href:"https://infosci.cornell.edu/",target:"_blank",rel:"noopener noreferrer"},"Cornell Information Science")," working with Professor ",n.a.createElement("a",{href:"https://www.adityavashistha.com/",target:"_blank",rel:"noopener noreferrer"},"Aditya Vashistha"),". Before the PhD journey gets into full swing, I am preparing for my thesis defense at ",n.a.createElement("a",{href:"https://www.buet.ac.bd/web/",target:"_blank",rel:"noopener noreferrer"},"BUET"),", where I am a second year M.Sc. student in the ",n.a.createElement("a",{href:"https://cse.buet.ac.bd/",target:"_blank",rel:"noopener noreferrer"},"Department of Computer Science and Engineering (CSE)")," working with Professor ",n.a.createElement("a",{href:"https://sites.google.com/site/abmalimalislam/home",target:"_blank",rel:"noopener noreferrer"},"A. B. M. Alim Al Islam"),". Additionally, I am working as a full-time lecturer of CSE at ",n.a.createElement("a",{href:"https://www.bracu.ac.bd/",target:"_blank",rel:"noopener noreferrer"},"Brac University"),".",n.a.createElement("br",null),n.a.createElement("br",null),"My research focuses on the design, use, and adaptation of existing technologies to meet the needs of resource-stricken communities and forcibly-displaced populations to uphold their rights to health and digital inclusion. Broadly speaking, my research falls at the intersection of Human-Computer Interaction, Data Science, and Applied Machine Learning. My goal is not only to solve problems. Rather I aspire to bring solutions that are accessible, adaptable, and acceptable to the communities I am working for.",n.a.createElement("br",null),n.a.createElement("br",null),"Now, in between pondering over the research questions, I often go down the rabbit hole of books. My favorite genre is non-fiction. However, fiction always helps mediate between ",n.a.createElement("i",null,'"Is this the real life? Is this just fantasy?"'))),n.a.createElement("td",{width:"3%"}),n.a.createElement("td",{width:"26%"},n.a.createElement("div",{className:"news"},n.a.createElement("span",{className:"recNews"},n.a.createElement("b",null,"Recent News")),n.a.createElement("ul",{class:"fa-ul"},n.a.createElement("li",null,n.a.createElement("span",{class:"fa-li"},n.a.createElement("i",{class:"fas fa-award"})),"Sep 20: Our work on PTSD among Rohingya refugees won IMWUT Distinguished Paper Award!"),n.a.createElement("li",null,n.a.createElement("span",{class:"fa-li"},n.a.createElement("i",{class:"fas fa-chalkboard-teacher"})),"Sep 20: Presented our paper on PTSD and free-hand sketches at UbiComp!"),n.a.createElement("li",null,n.a.createElement("span",{class:"fa-li"},n.a.createElement("i",{class:"fas fa-pen-square"})),"Jul 20: Paper on PTSD and free-hand sketches accepted at IMWUT!"),n.a.createElement("li",null,n.a.createElement("span",{class:"fa-li"},n.a.createElement("i",{class:"fas fa-pen-square"})),"Apr 20: Paper on dengue epidemic accepted at CSCW!")))))),n.a.createElement("div",{className:"social-icons"},g.a.socialLinks.map((function(e){var t=e.icon,a=e.url;return n.a.createElement("a",{key:a,href:a,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:t}))}))))),n.a.createElement("hr",{className:"m-0"}),n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"publication"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h2",{className:"mb-5"},"Publications"),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"2020"),n.a.createElement("ul",{className:"papers"},n.a.createElement("li",{className:"paper"},n.a.createElement("span",{className:"authorMe"},"Farhana Shahid"),", Wasifur Rahman, M. Saifur Rahman, Sharmin Akther Purabi, Ayesha Seddiqa, Moin Mostakim, Farhan Feroz, Tanjir Rashid Soron, Fahmida Hossain, Nabila Khan, Anika Binte Islam, Nipi Paul, Ehsan Hoque, and A. B. M. Alim Al Islam. 2020. ",n.a.createElement("a",{href:"https://dl.acm.org/doi/10.1145/3411835",target:"_blank",rel:"noopener \r noreferrer"},"Leveraging Free-Hand Sketches for Potential Screening of PTSD"),". In",n.a.createElement("span",{className:"publishedwhere"}," Proceedings of the ACM on Interactive Mobile, Wearable and Ubiquitous Technologies (IMWUT' 20)"),". Vol. 4, No. 3, Article 94 (September 2020). [",n.a.createElement("a",{href:Object(l.withPrefix)("/files/Sketch_Camera_Ready.pdf"),target:"_blank",rel:"noopener noreferrer"},"PDF"),"] [",n.a.createElement("a",{href:Object(l.withPrefix)("/files/UbiComp20_Sketch.pptx"),target:"_blank",rel:"noopener noreferrer"},"UbiComp'20 Presentation"),"]"),n.a.createElement("br",null),n.a.createElement("li",{className:"paper"},n.a.createElement("span",{className:"authorMe"},"Farhana Shahid"),", Shahinul Hoque Ony, Takrim Rahman Albi, Sriram Chellappan, Aditya Vashistha, and A. B. M. Alim Al Islam. 2020. ",n.a.createElement("a",{href:"https://dl.acm.org/doi/10.1145/3392875",target:"_blank",rel:"noopener \r noreferrer"},"Learning from Tweets: Opportunities and Challenges to Inform Policy Making During Dengue Epidemic.")," In",n.a.createElement("span",{className:"publishedwhere"}," Proceedings of the ACM on Human-Computer Interaction"),". Vol. 4, Issue CSCW1, Article 65 (May 2020). [",n.a.createElement("a",{href:Object(l.withPrefix)("/files/cscw_dengue_2020.pdf"),target:"_blank",rel:"noopener noreferrer"},"PDF"),"]")))),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"2019"),n.a.createElement("ul",{className:"papers"},n.a.createElement("li",{className:"paper"},n.a.createElement("span",{className:"authorMe"},"Farhana Shahid"),", Wasifur Rahman, Anika Binte Islam, Nipi Paul, Nabila Khan, Mohammad Saifur Rahman, Md Munirul Haque, and A. B. M. Alim Al Islam. 2019. ",n.a.createElement("a",{href:"https://dl.acm.org/doi/10.1145/3351259",target:"_blank",rel:"noopener noreferrer"},"Two Tell-tale Perspectives of PTSD: Neurobiological Abnormalities and Bayesian Regulatory Network of the Underlying Disorder in a Refugee Context.")," In ",n.a.createElement("span",{className:"publishedwhere"},"Proceedings of the ACM on Interactive Mobile, Wearable and Ubiquitous Technologies (IMWUT' 19)"),". Vol. 3, No. 3, Article 101 (September 2019). [",n.a.createElement("a",{href:Object(l.withPrefix)("/files/FSH_IMWUT19.pdf"),target:"_blank",rel:"noopener noreferrer"},"PDF"),"] [",n.a.createElement("a",{href:Object(l.withPrefix)("/files/UbiComp19_PTSD.pptx"),target:"_blank",rel:"noopener noreferrer"},"UbiComp'19 Presentation"),"]"),n.a.createElement("span",{class:"sym-icon"},n.a.createElement("i",{class:"fas fa-award"}),n.a.createElement("b",null," IMWUT Distinguished Paper Award"))))))),n.a.createElement("hr",{className:"m-0"}),n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"research"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h2",{className:"mb-5"},"Research"),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"PTSD within Low-Resource Communities"),n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{width:"57%"},n.a.createElement("p",{className:"paper"},"The critical lack of trained mental health professionals, communication and cultural barriers, and social stigma around mental health in low-rosurce communities expose the traumatized individuals to greater health risks. Traditional diagnostic tools of PTSD often suffer from under-utilization due to various issues associated with human-human interactions while applying them within resource-scarce populations. In this regard, we aim to explore alternative methods to potentially screen for PTSD using various low-cost, off-the-shelf tools, e.g., portable EEG headsets and free-hand sketches using simple pencil and paper. The findings from our field-level work involving refugees and slum-dwellers enable us to identify scopes for improvement in screening the potential cases of PTSD within low-rosurce communities.",n.a.createElement("br",null),"Publications: ",n.a.createElement("a",{href:Object(l.withPrefix)("/files/FSH_IMWUT19.pdf"),target:"_blank",rel:"noopener noreferrer"},"IMWUT 2019"),",",n.a.createElement("a",{href:Object(l.withPrefix)("/files/Sketch_Camera_Ready.pdf"),target:"_blank",rel:"noopener noreferrer"}," IMWUT 2020"))),n.a.createElement("td",{width:"3%"}),n.a.createElement("td",{width:"38%"},n.a.createElement("img",{className:"img-fluid",src:v.a,alt:"Some female Rohingya refugees are waiting in a room for interview in the camp area"}),"Kutupalong Rohingya refugee camp, Cox's Bazar, Bangladesh"))))))),n.a.createElement("hr",{className:"m-0"}),n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"teaching"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h2",{className:"mb-5"},"Teaching"),n.a.createElement("h3",{className:"mb-5"},"Appointments"),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h4",{className:"mb-0"},"Lecturer"),n.a.createElement("div",{className:"subheading mb-3"},"Department of Computer Science and Engineering, Brac University")),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"May 2018 - Present"))),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h4",{className:"mb-0"},"Lecturer"),n.a.createElement("div",{className:"subheading mb-3"},"Department of Computer Science and Engineering, Eastern University")),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"September 2017 - April 2018"))),n.a.createElement("h3",{className:"mb-5"},"Courses Taught"),n.a.createElement("h4",{className:"mb-0"},"Theory"),n.a.createElement("ul",{className:"fa-ul mb-0"},n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Computer Graphics (Summer 2020, Spring 2020, Fall 2019, Summer 2019, Spring 2018)"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Pattern Recognition (Summer 2020)"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Digital Logic Design (Spring 2020, Summer 2018)"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Programming Language I (Fall 2019, Spring 2019, Fall 2018)"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Programming Language II (Spring 2019, Fall 2018)"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Data Structures (Summer 2019)"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Operating Systems (Spring 2018, Fall 2017)"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Mathematical Analysis for Computer Science (Fall 2017)")),n.a.createElement("br",null),n.a.createElement("h4",{className:"mb-0"},"Lab"),n.a.createElement("ul",{className:"fa-ul mb-0"},n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Computer Graphics (Spring 2020, Fall 2019, Fall 2018,  Spring 2019, Summer 2018)"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Artificial Intelligence (Spring 2020, Fall 2019)"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Object Oriented Programming (Fall 2019, Summer 2019, Spring 2019)"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Programming Language I (Summer 2019, Spring 2019, Summer 2018)"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Algorithms (Summer 2019, Fall 2019, Summer 2018)"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Digital Logic Design (Summer 2019)"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Data Structures (Summer 2018)"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Operating Systems (Spring 2018, Fall 2017)")))),n.a.createElement("hr",{className:"m-0"}),n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"contact"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h2",{className:"mb-5"},"Contact"),n.a.createElement("p",{className:"paper"},"Brac University ",n.a.createElement("br",null),"UB80815 ",n.a.createElement("br",null),"46 Mohakhali, C/A ",n.a.createElement("br",null),"Dhaka - 1212 ",n.a.createElement("br",null),"Bangladesh ",n.a.createElement("br",null),"email: ",n.a.createElement("a",{href:"mailto:"+g.a.email},"farhana.shahid@bracu.ac.bd"),n.a.createElement("br",null))))))}},SksO:function(e,t){function a(t,r){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,r)}e.exports=a},TSYQ:function(e,t,a){var r;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)&&r.length){var o=n.apply(null,r);o&&e.push(o)}else if("object"===l)for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},TUGy:function(e,t,a){e.exports=a.p+"static/avatar-78b9450b507de781be7d7cd4ee4bf858.png"},W8MJ:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}},YIkO:function(e,t,a){"use strict";a("V+eJ"),a("dZ+Y"),a("bWfx"),a("2Spj"),a("LK8F"),a("HAE/");var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("pVnL")),l=r(a("lSNA")),o=r(a("RIqP")),i=r(a("lwsE")),s=r(a("a1gu")),c=r(a("Nsbk")),m=r(a("PJYZ")),u=r(a("W8MJ")),f=r(a("7W2i")),p=r(a("17x9")),h=r(a("q1tI")),d=r(a("TSYQ")),g=r(a("Fxm3"));var b=function(e){function t(e){var a;return(0,i.default)(this,t),(a=(0,s.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,m.default)(a)),a}return(0,f.default)(t,e),(0,u.default)(t,null,[{key:"propTypes",get:function(){return{items:p.default.arrayOf(p.default.string).isRequired,currentClassName:p.default.string.isRequired,scrolledPastClassName:p.default.string,style:p.default.object,componentTag:p.default.oneOfType([p.default.string,p.default.element]),offset:p.default.number,rootEl:p.default.string,onUpdate:p.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,u.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],r=0,n=e.length;r<n;r++)a[r]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],r=[],n=e||this.state.targetItems,l=!1,i=0,s=n.length;i<s;i++){var c=n[i],m=!l&&this._isInView(c);m?(l=!0,t.push(c)):a.push(c);var u=i===s-1,f=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!m&&u&&f&&(a.pop(),a.push.apply(a,(0,o.default)(t)),t=[c],r=this._fillArray(r,!1),m=!0),r.push(m)}return{inView:t,outView:a,viewStatusList:r,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(r)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,r=a.rootEl,n=a.offset;r&&(t=document.querySelector(r).getBoundingClientRect());var l=e.getBoundingClientRect(),o=r?t.height:window.innerHeight,i=this._getScrollDimension().scrollTop,s=i+o,c=r?l.top+i-t.top+n:l.top+i+n,m=c+e.offsetHeight;return c<s&&m>i}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,r=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=r}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),r=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(r)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,g.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,r=a.children,o=a.className,i=a.scrolledPastClassName,s=a.style,c=0,m=h.default.Children.map(r,(function(t,a){var r;if(!t)return null;var o=t.type,s=i&&e.state.isScrolledPast[a],m=(0,d.default)((r={},(0,l.default)(r,"".concat(t.props.className),t.props.className),(0,l.default)(r,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,l.default)(r,"".concat(e.props.scrolledPastClassName),s),r));return h.default.createElement(o,(0,n.default)({},t.props,{className:m,key:c++}),t.props.children)})),u=(0,d.default)((0,l.default)({},"".concat(o),o));return h.default.createElement(t,{className:u,style:s},m)}}]),t}(h.default.Component);t.default=b},ZhPi:function(e,t,a){var r=a("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}},a1gu:function(e,t,a){var r=a("cDf5"),n=a("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?n(e):t}},cDf5:function(e,t){function a(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=a=function(e){return typeof e}:e.exports=a=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(t)}e.exports=a},dwco:function(e,t,a){a("Oyvg"),a("eM6i"),a("2Spj"),function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,r=e.HTMLElement||e.Element,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:r.prototype.scroll||i,scrollIntoView:r.prototype.scrollIntoView},l=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,o=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?h.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var a=f(this),r=a.getBoundingClientRect(),l=this.getBoundingClientRect();a!==t.body?(h.call(this,a,a.scrollLeft+l.left-r.left,a.scrollTop+l.top-r.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+o<e.scrollHeight:"X"===t?e.clientWidth+o<e.scrollWidth:void 0}function m(t,a){var r=e.getComputedStyle(t,null)["overflow"+a];return"auto"===r||"scroll"===r}function u(e){var t=c(e,"Y")&&m(e,"Y"),a=c(e,"X")&&m(e,"X");return t||a}function f(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function p(t){var a,r,n,o,i=(l()-t.startTime)/468;o=i=i>1?1:i,a=.5*(1-Math.cos(Math.PI*o)),r=t.startX+(t.x-t.startX)*a,n=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,r,n),r===t.x&&n===t.y||e.requestAnimationFrame(p.bind(e,t))}function h(a,r,o){var s,c,m,u,f=l();a===t.body?(s=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,u=n.scroll):(s=a,c=a.scrollLeft,m=a.scrollTop,u=i),p({scrollable:s,method:u,startTime:f,startX:c,startY:m,x:r,y:o})}}}}()},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},obyI:function(e,t){e.exports={siteTitle:"Farhana Shahid",manifestName:"Resume",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",firstName:"Farhana ",lastName:"Shahid",socialLinks:[{icon:"fab fa-github",name:"Github",url:"https://github.com/farhana-shahid"},{icon:"ai ai-google-scholar",name:"Google Scholar",url:"https://scholar.google.com/citations?user=mYk4EZsAAAAJ"},{icon:"fab fa-twitter",name:"Twitter",url:"https://twitter.com/fsh_shahid"},{icon:"fab fa-goodreads-g",name:"Goodreads",url:"https://www.goodreads.com/user/show/52763346-farhana"}],email:"Booklover",phone:"Teacher",address:"Researcher"}},uZNR:function(e,t,a){e.exports=a.p+"static/rohingyacamp-7cd2943ced5770b53aab742b664a9b09.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-63c3e2c74e4c7878cb7d.js.map