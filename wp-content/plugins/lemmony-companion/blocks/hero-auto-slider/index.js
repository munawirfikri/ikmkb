(()=>{"use strict";const e=window.wp.element,t=window.wp.blocks,l=window.wp.blockEditor,a=window.wp.i18n,s=window.wp.components,r=JSON.parse('{"u2":"lemmony-companion/hero-auto-slider"}');(0,t.registerBlockType)(r.u2,{icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},(0,e.createElement)("path",{d:"M7.11,30.501c-0.596,0-1.187-0.157-1.727-0.469c-1.085-0.627-1.733-1.749-1.733-3.003V4.972 c0-1.254,0.648-2.376,1.734-3.003s2.382-0.627,3.467,0l17.779,11.037c1.077,0.628,1.719,1.747,1.719,2.995 c0,1.253-0.648,2.375-1.733,3.002L8.879,30.016C8.319,30.34,7.713,30.501,7.11,30.501z M7.126,3.5 c-0.252,0-0.509,0.066-0.742,0.201C5.925,3.966,5.65,4.441,5.65,4.972v22.057c0,0.53,0.274,1.006,0.734,1.271 c0.459,0.266,1.009,0.266,1.468,0l17.737-11.013c0.486-0.281,0.761-0.756,0.761-1.287c0-0.531-0.274-1.006-0.733-1.271 c-0.01-0.005-0.019-0.011-0.027-0.017L7.824,3.685C7.612,3.562,7.371,3.5,7.126,3.5z"})),edit:t=>{const{images:r}=t,c=t.attributes.images.length>0,i=t.attributes.images.length;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",(0,l.useBlockProps)(),c&&(0,e.createElement)("section",{class:"lemmony-splide splide","data-total":i},(0,e.createElement)("div",{class:"splide__track"},(0,e.createElement)("ul",{class:"splide__list"},t.attributes.images.map(((t,l)=>(0,e.createElement)("li",{class:"splide__slide"},(0,e.createElement)("img",{key:l,src:t.url})))))),(0,e.createElement)("div",{class:"splide__progress"},(0,e.createElement)("div",{class:"splide__progress__bar"}))),!c&&(0,e.createElement)(l.MediaPlaceholder,{multiple:!0,gallery:!0,icon:(0,e.createElement)(l.BlockIcon,{icon:"format-gallery"}),labels:{title:"Scrollable Gallery",instructions:"Create an awesome scrollable gallery."},onSelect:e=>t.setAttributes({images:e})})),(0,e.createElement)(l.BlockControls,null,(0,e.createElement)(s.ToolbarGroup,null,(0,e.createElement)(l.MediaUploadCheck,null,(0,e.createElement)(l.MediaUpload,{allowedTypes:["image"],multiple:!0,gallery:!0,value:t.attributes.images.map((e=>e.id)),onSelect:e=>t.setAttributes({images:e}),addToGallery:!0,render:t=>{let{open:l}=t;return(0,e.createElement)(s.ToolbarButton,{onClick:l},(0,a.__)("Edit Gallery","scrollable-gallery"))}})))))},save:t=>{let a=l.useBlockProps.save({className:"scrollable-gallery",style:{"--total-container-transform":(16*(t.attributes.images.length+1)).toString().concat("vw")}});const s=t.attributes.images.length>0,r=t.attributes.images.length;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",a,s&&(0,e.createElement)("section",{class:"lemmony-splide splide","data-total":r},(0,e.createElement)("div",{class:"splide__track"},(0,e.createElement)("ul",{class:"splide__list"},t.attributes.images.map(((t,l)=>(0,e.createElement)("li",{class:"splide__slide"},(0,e.createElement)("img",{key:l,src:t.url,alt:t.caption?t.caption:t.alt})))))),(0,e.createElement)("div",{class:"splide__progress"},(0,e.createElement)("div",{class:"splide__progress__bar"})))))},deprecated:[{attributes:{images:{type:"array",default:[]}},save:function(t){let a=l.useBlockProps.save({className:"scrollable-gallery",style:{"--total-container-transform":(16*(t.attributes.images.length+1)).toString().concat("vw")}});const s=t.attributes.images.length>0,r=t.attributes.images.length;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",a,s&&(0,e.createElement)("section",{class:"lemmony-splide splide","data-total":r},(0,e.createElement)("div",{class:"splide__track"},(0,e.createElement)("ul",{class:"splide__list"},t.attributes.images.map(((t,l)=>(0,e.createElement)("li",{class:"splide__slide"},(0,e.createElement)("img",{key:l,src:t.url})))))),(0,e.createElement)("div",{class:"splide__progress"},(0,e.createElement)("div",{class:"splide__progress__bar"})))))}}]})})();