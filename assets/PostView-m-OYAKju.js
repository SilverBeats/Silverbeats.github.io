import{_ as o,l as e,m as t,c as a,w as n,E as s,o as r,a as d}from"./index-BQykrwMT.js";/* empty css                */import{_ as c}from"./MarkdownComponent-D-Kyuumf.js";const l=o({name:"PostView",components:{MarkdownComponent:c},data:()=>({content:""}),beforeMount(){let o=this.$route.query.fileName;"md"!==o.split(".").pop()&&(o+=".md"),e(`/posts/${o}`).then((o=>{this.content=o})).catch((o=>{t("File load error !","error")}))}},[["render",function(o,e,t,l,m,p){const i=c,u=s;return r(),a(u,{shadow:"hover"},{default:n((()=>[d(i,{value:m.content},null,8,["value"])])),_:1})}],["__scopeId","data-v-db8c3327"]]);export{l as default};