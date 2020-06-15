(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{NC8T:function(e,t,a){"use strict";var n=a("UutA"),l=a("oXiK"),r=a("aOgs"),o=a("q1tI"),i=a.n(o),c=a("8gyx"),b=a("VhsB"),s=a("nkI/"),p=a("bWhc"),m=a("og4h"),d=a("sqpL"),u=Object(n.f)(l.Box).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function O(e){var t=e.items,a=e.depth;return i.a.createElement(u,{as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(l.Box,{as:"li",key:e.url,pl:a>0?3:0},i.a.createElement(l.Link,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(O,{items:e.items,depth:a+1}):null)})))}O.defaultProps={depth:0};var g=O,j=Object(n.f)(l.Flex).withConfig({displayName:"layout___StyledFlex",componentId:"sc-15zk0ku-0"})({zIndex:0}),f=Object(n.f)(l.Grid).withConfig({displayName:"layout___StyledGrid",componentId:"sc-15zk0ku-1"})({alignItems:"start",alignSelf:"start"}),h=Object(n.f)(l.BorderBox).withConfig({displayName:"layout___StyledBorderBox",componentId:"sc-15zk0ku-2"})({gridArea:"heading"}),N=Object(n.f)(l.Position).withConfig({displayName:"layout___StyledPosition",componentId:"sc-15zk0ku-3"})({gridArea:"table-of-contents",overflow:"auto"}),y=Object(n.f)(l.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-15zk0ku-4"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=a.frontmatter,o=n.title,u=n.description,O=n.status,v=n.source,k=n.additionalContributors,x=void 0===k?[]:k;return i.a.createElement(l.Flex,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(c.a,{title:o,description:u}),i.a.createElement(b.b,null),i.a.createElement(j,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(l.Box,{display:["none",null,null,"block"]},i.a.createElement(p.a,null)),i.a.createElement(f,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(h,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(l.Heading,null,o)),a.tableOfContents.items?i.a.createElement(N,{display:["none",null,"block"],position:"sticky",top:b.a+24,maxHeight:"calc(100vh - "+b.a+"px - 24px)"},i.a.createElement(l.Text,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(g,{items:a.tableOfContents.items})):null,i.a.createElement(y,null,O||v?i.a.createElement(l.Flex,{mb:3,alignItems:"center"},O?i.a.createElement(d.a,{status:O}):null,i.a.createElement(l.Box,{mx:"auto"}),v?i.a.createElement(m.a,{href:v}):null):null,a.tableOfContents.items?i.a.createElement(l.Box,{display:["block",null,"none"],mb:3},i.a.createElement(l.Details,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.Text,{as:"summary",fontWeight:"bold"},i.a.createElement(l.StyledOcticon,{icon:t?r.b:r.c,mr:2}),"Table of contents"),i.a.createElement(l.Box,{pt:1},i.a.createElement(g,{items:a.tableOfContents.items})))}))):null,t,i.a.createElement(s.a,{editUrl:a.editUrl,contributors:a.contributors.concat(x.map((function(e){return{login:e}})))})))))}},OfxG:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return c}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("q1tI");var n=a("7ljp"),l=a("NC8T");var r={},o={_frontmatter:r},i=l.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(n.b)(i,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Use the TabNav component to style navigation with a tab-based selected state, typically used for navigation placed at the top of the page."),Object(n.b)("p",null,"To use TabNav with ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/ReactTraining/react-router"}),"react-router")," or\n",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/package/react-router-dom"}),"react-router-dom"),", pass\n",Object(n.b)("inlineCode",{parentName:"p"},"as={NavLink}")," and omit the ",Object(n.b)("inlineCode",{parentName:"p"},"selected")," prop.\nThis ensures that the NavLink gets ",Object(n.b)("inlineCode",{parentName:"p"},"activeClassName='selected'")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Attention:")," Make sure to properly label your ",Object(n.b)("inlineCode",{parentName:"p"},"TabNav")," with an ",Object(n.b)("inlineCode",{parentName:"p"},"aria-label")," to provide context about the type of navigation contained in ",Object(n.b)("inlineCode",{parentName:"p"},"TabNav"),"."),Object(n.b)("h2",null,"Default example"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<TabNav aria-label="Main">\n  <TabNav.Link href="#home" selected>\n    Home\n  </TabNav.Link>\n  <TabNav.Link href="#documentation">Documentation</TabNav.Link>\n  <TabNav.Link href="#support">Support</TabNav.Link>\n</TabNav>\n')),Object(n.b)("h2",null,"System props"),Object(n.b)("p",null,"TabNav and TabNav.Link components get ",Object(n.b)("inlineCode",{parentName:"p"},"COMMON")," system props. Read our ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/components/staging/preview-deploys/system-props"}),"System Props")," doc page for a full list of available props."),Object(n.b)("h2",null,"Component props"),Object(n.b)("h3",null,"TabNav"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Prop name"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"aria-label"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Used to set the ",Object(n.b)("inlineCode",{parentName:"td"},"aria-label")," on the top level ",Object(n.b)("inlineCode",{parentName:"td"},"<nav>")," element.")))),Object(n.b)("h3",null,"TabNav.Link"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Prop name"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"as"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"sets the HTML tag for the component")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"href"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"URL to be used for the Link")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"selected"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Boolean"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Used to style the link as selected or unselected")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-tab-nav-md-377e32f019a5a84bebca.js.map