(this["webpackJsonprepository-react-create"]=this["webpackJsonprepository-react-create"]||[]).push([[0],{10:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__3zdQp",searchForm:"Searchbar_searchForm__jSrkr",searchFormButton:"Searchbar_searchFormButton__3p-Xd",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__1aeDb",searchFormInput:"Searchbar_searchFormInput__2lThX"}},16:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__i_kSs",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3IMxN"}},17:function(e,t,a){e.exports={overlay:"Modal_overlay__NKIsk",modal:"Modal_modal__4GKRQ"}},28:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__E9jrA"}},29:function(e,t,a){e.exports={button:"Button_button__TsVci"}},35:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(4),s=a.n(o),c=(a(35),a(36),a(9)),l=a.n(c),i=a(18),u=a(13),h=a(5),m=a(6),d=a(8),p=a(7),g=a(14),b=(a(38),a(27)),j=a.n(b),f="22909225-4bd408e854a1416d853656515",y="https://pixabay.com/api";function v(){return(v=Object(u.a)(l.a.mark((function e(t,a){var r,n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(y,"/?q=").concat(t,"&page=").concat(a,"&key=").concat(f,"&image_type=photo&orientation=horizontal&per_page=12"),e.next=3,j.a.get(r);case 3:return n=e.sent,o=n.data,e.abrupt("return",o.hits);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=function(e,t){return v.apply(this,arguments)},x=a(10),_=a.n(x),k=a(1),I=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleNameChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()&&(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""}))},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(k.jsx)("header",{className:_.a.searchbar,children:Object(k.jsxs)("form",{onSubmit:this.handleSubmit,className:_.a.searchForm,children:[Object(k.jsx)("button",{type:"submit",className:_.a.searchFormButton,children:Object(k.jsx)("span",{className:_.a.searchFormButtonLabel,children:"Search"})}),Object(k.jsx)("input",{className:_.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"searchQuery",value:this.state.searchQuery,onChange:this.handleNameChange})]})})}}]),a}(r.Component),S=a(28),C=a.n(S),w=a(16),F=a.n(w);function M(e){var t=e.image,a=e.tags,r=e.onImageClick;return Object(k.jsx)("li",{className:F.a.ImageGalleryItem,children:Object(k.jsx)("img",{src:t,alt:a,onClick:r,className:F.a.ImageGalleryItemImage})})}function N(e){var t=e.images,a=e.onImageClick;return Object(k.jsx)("ul",{className:C.a.imageGallery,children:t.map((function(e){var t=e.id,r=e.webformatURL,n=e.tags,o=e.largeImageURL;return Object(k.jsx)(M,{image:r,tags:n,onImageClick:function(){return a(o,n)}},t)}))})}var Q=a(29),B=a.n(Q);function G(e){var t=e.onClick;return Object(k.jsx)("button",{className:B.a.button,type:"button",onClick:t,children:"Load more"})}var L=a(17),T=a.n(L),A=document.querySelector("#modal-root"),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).onCloseModal=function(t){"Escape"===t.code&&e.props.onClose()},e.onCloseBackdrop=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onCloseModal)}},{key:"render",value:function(){var e=this.props,t=e.showModal,a=e.tags,r=this.onCloseBackdrop;return Object(o.createPortal)(Object(k.jsx)("div",{className:T.a.overlay,onClick:r,children:Object(k.jsx)("div",{className:T.a.modal,children:Object(k.jsx)("img",{src:t,alt:a})})}),A)}}]),a}(r.Component),D=a(30),U=a.n(D);function R(){return Object(k.jsx)("div",{children:Object(k.jsx)(U.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80,timeout:3e3,style:{textAlign:"center"}})})}var q=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:"",page:1,images:[],showModal:null,loading:!1,alt:null,error:null},e.handleFormSubmit=function(t){e.state.searchQuery!==t&&(e.resetState(),e.setState({searchQuery:t}))},e.loadMoBtn=function(){e.setState((function(e){return{page:e.page+1}}))},e.handleImageClick=function(t,a){e.setState({showModal:t,alt:a})},e.toggleModal=function(){e.setState({showModal:null})},e.resetState=function(){e.setState({searchQuery:"",page:1,images:[],showModal:null,loading:!1,alt:null,error:null})},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(u.a)(l.a.mark((function e(t,a){var r,n,o,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.searchQuery,n=this.state.searchQuery,o=a.page,s=this.state.page,r===n&&o===s){e.next=22;break}return e.prev=5,this.setState({loading:!0}),e.next=9,O(n,s);case 9:(c=e.sent).length||g.b.info("Check the correctness of the input",{theme:"colored"}),this.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(c))}})),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),this.setState({error:e.t0}),g.b.error(this.state.error.message,{theme:"colored"});case 18:return e.prev=18,a.images.length>10&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),this.setState({loading:!1}),e.finish(18);case 22:case"end":return e.stop()}}),e,this,[[5,14,18,22]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.images,a=e.alt,r=e.showModal,n=e.loading,o=this.handleFormSubmit,s=this.handleImageClick,c=this.toggleModal,l=this.loadMoBtn;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(I,{onSubmit:o}),Object(k.jsx)(N,{images:t,onImageClick:s}),this.state.showModal&&Object(k.jsx)(E,{showModal:r,tags:a,onClose:c}),t.length>0&&Object(k.jsx)(G,{onClick:l}),n&&Object(k.jsx)(R,{})]}),Object(k.jsx)(g.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}]),a}(r.Component);s.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(q,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.0921cfb9.chunk.js.map