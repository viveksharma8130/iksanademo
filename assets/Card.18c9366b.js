import{c as l,b as m,g as H,a as o}from"./index.44d2206d.js";import{r as i,j as n}from"./index.61bb2f1c.js";const C=a=>i.exports.forwardRef((r,e)=>n("div",{...r,ref:e,className:l(r.className,a)})),p=i.exports.forwardRef(({bsPrefix:a,className:r,variant:e,as:d="img",...c},s)=>{const t=m(a,"card-img");return n(d,{ref:s,className:l(e?`${t}-${e}`:t,r),...c})});p.displayName="CardImg";const $=p,x=i.exports.forwardRef(({bsPrefix:a,className:r,as:e="div",...d},c)=>{const s=m(a,"card-header"),t=i.exports.useMemo(()=>({cardHeaderBsPrefix:s}),[s]);return n(H.Provider,{value:t,children:n(e,{ref:c,...d,className:l(r,s)})})});x.displayName="CardHeader";const b=x,h=C("h5"),I=C("h6"),u=o("card-body"),P=o("card-title",{Component:h}),B=o("card-subtitle",{Component:I}),w=o("card-link",{Component:"a"}),R=o("card-text",{Component:"p"}),S=o("card-footer"),T=o("card-img-overlay"),j={body:!1},f=i.exports.forwardRef(({bsPrefix:a,className:r,bg:e,text:d,border:c,body:s,children:t,as:y="div",...g},v)=>{const N=m(a,"card");return n(y,{ref:v,...g,className:l(r,N,e&&`bg-${e}`,d&&`text-${d}`,c&&`border-${c}`),children:s?n(u,{children:t}):t})});f.displayName="Card";f.defaultProps=j;const A=Object.assign(f,{Img:$,Title:P,Subtitle:B,Body:u,Link:w,Text:R,Header:b,Footer:S,ImgOverlay:T});export{A as C};
