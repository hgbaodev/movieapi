import{r as S,c as ue,g as ge,t as se,u as de,f as fe,j as w}from"./index-e6061544.js";import{a as be}from"./MovieCard-f6bb2054.js";function me(q="",Y=1e3){const[j,F]=S.useState(q);return S.useEffect(()=>{const K=setTimeout(()=>{F(q)},Y);return()=>{clearTimeout(K)}},[Y,q]),j}var le={exports:{}};(function(q,Y){(function(j,F){q.exports=F(S)})(ue,j=>(()=>{var F={703:(l,g,v)=>{var t=v(414);function T(){}function B(){}B.resetWarningCache=T,l.exports=function(){function f(ie,A,$,G,oe,Q){if(Q!==t){var z=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw z.name="Invariant Violation",z}}function y(){return f}f.isRequired=f;var x={array:f,bigint:f,bool:f,func:f,number:f,object:f,string:f,symbol:f,any:f,arrayOf:y,element:f,elementType:f,instanceOf:y,node:f,objectOf:y,oneOf:y,oneOfType:y,shape:y,exact:y,checkPropTypes:B,resetWarningCache:T};return x.PropTypes=x,x}},697:(l,g,v)=>{l.exports=v(703)()},414:l=>{l.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:l=>{l.exports=j}},K={};function h(l){var g=K[l];if(g!==void 0)return g.exports;var v=K[l]={exports:{}};return F[l](v,v.exports,h),v.exports}h.n=l=>{var g=l&&l.__esModule?()=>l.default:()=>l;return h.d(g,{a:g}),g},h.d=(l,g)=>{for(var v in g)h.o(g,v)&&!h.o(l,v)&&Object.defineProperty(l,v,{enumerable:!0,get:g[v]})},h.o=(l,g)=>Object.prototype.hasOwnProperty.call(l,g),h.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var Z={};return(()=>{h.r(Z),h.d(Z,{default:()=>ce});var l=h(98),g=h.n(l),v=h(697),t=h.n(v);function T(){return T=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},T.apply(this,arguments)}var B=function(r){var s=r.pageClassName,o=r.pageLinkClassName,c=r.page,J=r.selected,U=r.activeClassName,O=r.activeLinkClassName,a=r.getEventListener,e=r.pageSelectedHandler,u=r.href,n=r.extraAriaContext,i=r.pageLabelBuilder,p=r.rel,b=r.ariaLabel||"Page "+c+(n?" "+n:""),C=null;return J&&(C="page",b=r.ariaLabel||"Page "+c+" is your current page",s=s!==void 0?s+" "+U:U,o!==void 0?O!==void 0&&(o=o+" "+O):o=O),g().createElement("li",{className:s},g().createElement("a",T({rel:p,role:u?void 0:"button",className:o,href:u,tabIndex:J?"-1":"0","aria-label":b,"aria-current":C,onKeyPress:e},a(e)),i(c)))};B.propTypes={pageSelectedHandler:t().func.isRequired,selected:t().bool.isRequired,pageClassName:t().string,pageLinkClassName:t().string,activeClassName:t().string,activeLinkClassName:t().string,extraAriaContext:t().string,href:t().string,ariaLabel:t().string,page:t().number.isRequired,getEventListener:t().func.isRequired,pageLabelBuilder:t().func.isRequired,rel:t().string};const f=B;function y(){return y=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},y.apply(this,arguments)}var x=function(r){var s=r.breakLabel,o=r.breakAriaLabel,c=r.breakClassName,J=r.breakLinkClassName,U=r.breakHandler,O=r.getEventListener,a=c||"break";return g().createElement("li",{className:a},g().createElement("a",y({className:J,role:"button",tabIndex:"0","aria-label":o,onKeyPress:U},O(U)),s))};x.propTypes={breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabel:t().string,breakClassName:t().string,breakLinkClassName:t().string,breakHandler:t().func.isRequired,getEventListener:t().func.isRequired};const ie=x;function A(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r??s}function $(r){return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},$(r)}function G(){return G=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},G.apply(this,arguments)}function oe(r,s){for(var o=0;o<s.length;o++){var c=s[o];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(r,c.key,c)}}function Q(r,s){return Q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,c){return o.__proto__=c,o},Q(r,s)}function z(r,s){if(s&&($(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return L(r)}function L(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ee(r){return ee=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(s){return s.__proto__||Object.getPrototypeOf(s)},ee(r)}function P(r,s,o){return s in r?Object.defineProperty(r,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[s]=o,r}var re=function(r){(function(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),e&&Q(a,e)})(O,r);var s,o,c,J,U=(c=O,J=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var a,e=ee(c);if(J){var u=ee(this).constructor;a=Reflect.construct(e,arguments,u)}else a=e.apply(this,arguments);return z(this,a)});function O(a){var e,u;return function(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}(this,O),P(L(e=U.call(this,a)),"handlePreviousPage",function(n){var i=e.state.selected;e.handleClick(n,null,i>0?i-1:void 0,{isPrevious:!0})}),P(L(e),"handleNextPage",function(n){var i=e.state.selected,p=e.props.pageCount;e.handleClick(n,null,i<p-1?i+1:void 0,{isNext:!0})}),P(L(e),"handlePageSelected",function(n,i){if(e.state.selected===n)return e.callActiveCallback(n),void e.handleClick(i,null,void 0,{isActive:!0});e.handleClick(i,null,n)}),P(L(e),"handlePageChange",function(n){e.state.selected!==n&&(e.setState({selected:n}),e.callCallback(n))}),P(L(e),"getEventListener",function(n){return P({},e.props.eventListener,n)}),P(L(e),"handleClick",function(n,i,p){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},C=b.isPrevious,R=C!==void 0&&C,V=b.isNext,X=V!==void 0&&V,W=b.isBreak,N=W!==void 0&&W,D=b.isActive,_=D!==void 0&&D;n.preventDefault?n.preventDefault():n.returnValue=!1;var I=e.state.selected,d=e.props.onClick,E=p;if(d){var k=d({index:i,selected:I,nextSelectedPage:p,event:n,isPrevious:R,isNext:X,isBreak:N,isActive:_});if(k===!1)return;Number.isInteger(k)&&(E=k)}E!==void 0&&e.handlePageChange(E)}),P(L(e),"handleBreakClick",function(n,i){var p=e.state.selected;e.handleClick(i,n,p<n?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),P(L(e),"callCallback",function(n){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:n})}),P(L(e),"callActiveCallback",function(n){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:n})}),P(L(e),"getElementPageRel",function(n){var i=e.state.selected,p=e.props,b=p.nextPageRel,C=p.prevPageRel,R=p.selectedPageRel;return i-1===n?C:i===n?R:i+1===n?b:void 0}),P(L(e),"pagination",function(){var n=[],i=e.props,p=i.pageRangeDisplayed,b=i.pageCount,C=i.marginPagesDisplayed,R=i.breakLabel,V=i.breakClassName,X=i.breakLinkClassName,W=i.breakAriaLabels,N=e.state.selected;if(b<=p)for(var D=0;D<b;D++)n.push(e.getPageElement(D));else{var _=p/2,I=p-_;N>b-p/2?_=p-(I=b-N):N<p/2&&(I=p-(_=N));var d,E,k=function(M){return e.getPageElement(M)},m=[];for(d=0;d<b;d++){var te=d+1;if(te<=C)m.push({type:"page",index:d,display:k(d)});else if(te>b-C)m.push({type:"page",index:d,display:k(d)});else if(d>=N-_&&d<=N+(N===0&&p>1?I-1:I))m.push({type:"page",index:d,display:k(d)});else if(R&&m.length>0&&m[m.length-1].display!==E&&(p>0||C>0)){var ne=d<N?W.backward:W.forward;E=g().createElement(ie,{key:d,breakAriaLabel:ne,breakLabel:R,breakClassName:V,breakLinkClassName:X,breakHandler:e.handleBreakClick.bind(null,d),getEventListener:e.getEventListener}),m.push({type:"break",index:d,display:E})}}m.forEach(function(M,H){var ae=M;M.type==="break"&&m[H-1]&&m[H-1].type==="page"&&m[H+1]&&m[H+1].type==="page"&&m[H+1].index-m[H-1].index<=2&&(ae={type:"page",index:M.index,display:k(M.index)}),n.push(ae.display)})}return n}),a.initialPage!==void 0&&a.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(a.initialPage,") and forcePage (").concat(a.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),u=a.initialPage?a.initialPage:a.forcePage?a.forcePage:0,e.state={selected:u},e}return s=O,(o=[{key:"componentDidMount",value:function(){var a=this.props,e=a.initialPage,u=a.disableInitialCallback,n=a.extraAriaContext,i=a.pageCount,p=a.forcePage;e===void 0||u||this.callCallback(e),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(i)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(i,"). Did you forget a Math.ceil()?")),e!==void 0&&e>i-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(i-1,").")),p!==void 0&&p>i-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(p," > ").concat(i-1,")."))}},{key:"componentDidUpdate",value:function(a){this.props.forcePage!==void 0&&this.props.forcePage!==a.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(a.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var a=this.state.selected,e=this.props,u=e.pageCount,n=a+e.pageRangeDisplayed;return n>=u?u-1:n}},{key:"getBackwardJump",value:function(){var a=this.state.selected-this.props.pageRangeDisplayed;return a<0?0:a}},{key:"getElementHref",value:function(a){var e=this.props,u=e.hrefBuilder,n=e.pageCount,i=e.hrefAllControls;if(u)return i||a>=0&&a<n?u(a+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(a){var e=a===this.state.selected;if(this.props.ariaLabelBuilder&&a>=0&&a<this.props.pageCount){var u=this.props.ariaLabelBuilder(a+1,e);return this.props.extraAriaContext&&!e&&(u=u+" "+this.props.extraAriaContext),u}}},{key:"getPageElement",value:function(a){var e=this.state.selected,u=this.props,n=u.pageClassName,i=u.pageLinkClassName,p=u.activeClassName,b=u.activeLinkClassName,C=u.extraAriaContext,R=u.pageLabelBuilder;return g().createElement(f,{key:a,pageSelectedHandler:this.handlePageSelected.bind(null,a),selected:e===a,rel:this.getElementPageRel(a),pageClassName:n,pageLinkClassName:i,activeClassName:p,activeLinkClassName:b,extraAriaContext:C,href:this.getElementHref(a),ariaLabel:this.ariaLabelBuilder(a),page:a+1,pageLabelBuilder:R,getEventListener:this.getEventListener})}},{key:"render",value:function(){var a=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&a!==void 0)return a&&a(this.props);var e=this.props,u=e.disabledClassName,n=e.disabledLinkClassName,i=e.pageCount,p=e.className,b=e.containerClassName,C=e.previousLabel,R=e.previousClassName,V=e.previousLinkClassName,X=e.previousAriaLabel,W=e.prevRel,N=e.nextLabel,D=e.nextClassName,_=e.nextLinkClassName,I=e.nextAriaLabel,d=e.nextRel,E=this.state.selected,k=E===0,m=E===i-1,te="".concat(A(R)).concat(k?" ".concat(A(u)):""),ne="".concat(A(D)).concat(m?" ".concat(A(u)):""),M="".concat(A(V)).concat(k?" ".concat(A(n)):""),H="".concat(A(_)).concat(m?" ".concat(A(n)):""),ae=k?"true":"false",pe=m?"true":"false";return g().createElement("ul",{className:p||b,role:"navigation","aria-label":"Pagination"},g().createElement("li",{className:te},g().createElement("a",G({className:M,href:this.getElementHref(E-1),tabIndex:k?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":ae,"aria-label":X,rel:W},this.getEventListener(this.handlePreviousPage)),C)),this.pagination(),g().createElement("li",{className:ne},g().createElement("a",G({className:H,href:this.getElementHref(E+1),tabIndex:m?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":pe,"aria-label":I,rel:d},this.getEventListener(this.handleNextPage)),N)))}}])&&oe(s.prototype,o),Object.defineProperty(s,"prototype",{writable:!1}),O}(l.Component);P(re,"propTypes",{pageCount:t().number.isRequired,pageRangeDisplayed:t().number,marginPagesDisplayed:t().number,previousLabel:t().node,previousAriaLabel:t().string,prevPageRel:t().string,prevRel:t().string,nextLabel:t().node,nextAriaLabel:t().string,nextPageRel:t().string,nextRel:t().string,breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabels:t().shape({forward:t().string,backward:t().string}),hrefBuilder:t().func,hrefAllControls:t().bool,onPageChange:t().func,onPageActive:t().func,onClick:t().func,initialPage:t().number,forcePage:t().number,disableInitialCallback:t().bool,containerClassName:t().string,className:t().string,pageClassName:t().string,pageLinkClassName:t().string,pageLabelBuilder:t().func,activeClassName:t().string,activeLinkClassName:t().string,previousClassName:t().string,nextClassName:t().string,previousLinkClassName:t().string,nextLinkClassName:t().string,disabledClassName:t().string,disabledLinkClassName:t().string,breakClassName:t().string,breakLinkClassName:t().string,extraAriaContext:t().string,ariaLabelBuilder:t().func,eventListener:t().string,renderOnZeroPageCount:t().func,selectedPageRel:t().string}),P(re,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(r){return r},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const ce=re})(),Z})())})(le);var ve=le.exports;const he=ge(ve),Ce=20,xe=()=>{const[q,Y]=S.useState(0),[j,F]=S.useState(1),[K,h]=S.useState(""),[Z,l]=S.useState(se.getMovieList("popular",j)),g=x=>{h(x.target.value)},v=me(K,1e3),{data:t,error:T}=de(Z,fe),B=!t&&!T;S.useEffect(()=>{l(v?se.getMovieSearch(v,j):se.getMovieList("popular",j))},[v,j]);const f=(t==null?void 0:t.results)||[];console.log(Z),S.useEffect(()=>{if(!(!t||!t.total_results))return Y(Math.ceil(t.total_results/Ce)),()=>{}},[t]);const y=x=>{F(x.selected+1)};return w.jsxs("div",{className:"py-10 page-container",children:[w.jsxs("div",{className:"flex mb-10",children:[w.jsx("div",{className:"flex-1",children:w.jsx("input",{type:"text",className:"w-full p-4 bg-slate-800 text-white outline-none",placeholder:"Type here to search....",onChange:g})}),w.jsx("button",{className:"p-4 bg-secondary text-white rounded-lg",children:w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})})]}),B&&w.jsx("div",{className:"w-10 h-10 rounded-full  border-4 border-secondary border-t-transparent border-t-4 mx-auto animate-spin"}),w.jsx("div",{className:"grid grid-cols-4 gap-10",children:!B&&f.length>0&&f.map(x=>w.jsx(be,{item:x},x.id))}),w.jsx("div",{className:"mt-10",children:w.jsx(he,{breakLabel:"...",nextLabel:">>",onPageChange:y,pageRangeDisplayed:5,pageCount:q,previousLabel:"<<",renderOnZeroPageCount:null,className:"pagination"})})]})};export{xe as default};
