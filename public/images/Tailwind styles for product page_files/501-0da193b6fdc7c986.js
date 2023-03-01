"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{23119:function(e,n,t){t.d(n,{Y:function(){return w},k:function(){return g}});var r=t(14806),i=t(35250),a=t(19841),o=t(96424),c=t.n(o),s=t(48240),u=t(34303),l=t(79876);function f(){var e=(0,r.Z)(["relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center"]);return f=function(){return e},e}function d(){var e=(0,r.Z)(["\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ","\n  ","\n"]);return d=function(){return e},e}function h(){var e=(0,r.Z)(["bg-[#5436DA] rounded-sm text-white flex justify-center items-center relative tracking-widest"]);return h=function(){return e},e}function m(){var e=(0,r.Z)(["relative flex"]);return m=function(){return e},e}var p=u.Z.div(f()),x=u.Z.span(d(),function(e){return"warning"===e.$type&&"bg-orange-500 text-white"},function(e){return"danger"===e.$type&&"bg-red-500 text-white"}),g=function(e){var n=e.iconName,t=e.background,r=e.notice,a=l.nI;switch(n){case"globe":a=s.RsK;break;case"terminal":a=s.cDN;break;case"t":a=s.RUS;break;case"s":a=s.jRj;break;case"c":a=s.CFv;break;case"p":a=s.yG}return(0,i.jsxs)(p,{style:{backgroundColor:t},children:[(0,i.jsx)(l.ZP,{icon:a,size:"medium"}),r&&(0,i.jsx)(x,{$type:r,children:"!"})]})},v=u.Z.div(h()),b=u.Z.div(m()),w=function(e){var n=e.user,t=e.size,r=void 0===t?"small":t,o=e.notice,u=o&&(0,i.jsx)(x,{$type:o,children:"!"});if(null==n?void 0:n.picture)return(0,i.jsxs)(b,{children:[(0,i.jsx)(c(),{src:n.picture,alt:n.name,width:"small"===r?30:38,height:"small"===r?30:38,className:"rounded-sm"}),u]});var f=((null==n?void 0:n.name)||"").split(" ").map(function(e){return e[0]}).join("");return(0,i.jsxs)(v,{className:(0,a.Z)("small"===r?"h-8 w-8 text-xs":"h-10 w-10 text-lg"),children:[f||(0,i.jsx)(l.ZP,{icon:s.fzv,size:"medium"}),u]})}},35873:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(14806),i=t(35250),a=t(70079),o=t(48240),c=t(34303),s=t(60612),u=t(79876);function l(){var e=(0,r.Z)(["flex ml-auto gap-2"]);return l=function(){return e},e}function f(e){var n=e.text,t=e.onCopy,r=(0,a.useState)(!1),c=r[0],l=r[1],f=(0,s.Z)(),h=(0,a.useCallback)(function(){t(),l(!0),setTimeout(function(){f()&&l(!1)},2e3)},[f,t]);return(0,i.jsxs)(i.Fragment,{children:[!c&&(0,i.jsxs)(d,{onClick:h,children:[(0,i.jsx)(u.ZP,{icon:o.j4u}),n]}),c&&(0,i.jsxs)(d,{children:[(0,i.jsx)(u.ZP,{icon:o.UgA}),n&&"Copied!"]})]})}var d=c.Z.button(l())},77064:function(e,n,t){t.d(n,{$:function(){return m},u:function(){return h}});var r=t(31501),i=t(61079),a=t(14806),o=t(35250),c=t(19841),s=t(70079),u=t(65921),l=t(34303);function f(){var e=(0,a.Z)(['\nbefore:absolute before:w-2 before:h-2 before:visible before:content-[""] before:bg-gray-100 before:border-b before:border-r before:border-black/10\n',"\n","\n"]);return f=function(){return e},e}function d(){var e=(0,a.Z)(["absolute w-2 h-2 -z-10"]);return d=function(){return e},e}function h(e){var n=e.text,t=e.children;return(0,o.jsx)("div",{className:"tooltip-label flex items-center whitespace-pre-wrap py-1 px-2 text-center text-sm font-medium normal-case text-gray-700","data-content":n,children:t})}var m=function(e){var n=e.children,t=e.label,a=e.enterDelay,l=void 0===a?0:a,f=e.leaveDelay,d=void 0===f?50:f,h=e.placement,m=void 0===h?"bottom":h,p=e.offset,g=e.withArrow,v=e.interactive,b=void 0!==v&&v,w=e.wide,k=(0,s.useState)(!1),y=k[0],j=k[1],q=(0,s.useState)(null),F=q[0],Z=q[1],C=(0,s.useState)(null),S=C[0],N=C[1],T=(0,s.useState)(null),E=T[0],V=T[1],P=(0,u.D)(F,S,{placement:m,modifiers:[{name:"offset",options:{offset:void 0===p?[0,14]:p}},{name:"arrow",options:{element:E}},]}),z=P.styles,I=P.attributes,_=P.forceUpdate,M=(0,s.useRef)(),D=(0,s.useRef)(),$=(0,s.useCallback)(function(){null==_||_(),D.current&&clearTimeout(D.current),M.current=setTimeout(function(){return j(!0)},l)},[l,_]),R=(0,s.useCallback)(function(){M.current&&clearTimeout(M.current),D.current=setTimeout(function(){return j(!1)},d)},[d]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{ref:Z,onMouseEnter:$,onMouseLeave:R,children:n}),(0,o.jsxs)("div",(0,i.Z)((0,r.Z)({ref:N,style:z.popper},I.popper),{className:(0,c.Z)("relative z-10 m-0 rounded p-1 transition-opacity",y?"opacity-100":"pointer-events-none opacity-0",void 0!==w&&w?"max-w-sm":"max-w-xs","border border-black/10 bg-gray-100"),onMouseEnter:b?$:void 0,onMouseLeave:b?R:void 0,children:[t,(void 0===g||g)&&(0,o.jsx)(x,{ref:V,style:z.arrow,$placement:m})]}))]})},p=l.Z.div(f(),function(e){return"bottom"===e.$placement&&"before:rotate-45 before:-top-7 before:-translate-y-1/2 before:-translate-x-1/2"},function(e){return"top"===e.$placement&&"before:top-0 before:rotate-45"}),x=(0,l.Z)(p)(d())},75310:function(e,n,t){t.d(n,{Z:function(){return W}});var r=t(35250),i=t(19841),a=t(15762),o=t(24804),c=t(61110),s=t(55975),u=t(46050),l=t(29874),f=t(8449),d=t(15472);function h(e,n,t){}function m(e,n){}let p={tokenize:function(e,n,t){let r=this,i=this.events[this.events.length-1],a=i&&i[1].type===d.V.linePrefix?i[2].sliceSerialize(i[1],!0).length:0,o=[];return function(n){return n!==s.q.backslash&&h("expected `\\`",n),e.enter("mathFlow"),e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),function n(r){return(h("sequenceOpen",r),r===s.q.backslash||r===s.q.leftSquareBracket&&o[0]===s.q.backslash)?(e.consume(r),o.push(r),n):(e.exit("mathFlowFenceSequence"),o.length<2?t(r):(0,u.f)(e,c,d.V.whitespace)(r))}(n)};function c(n){return(h("metaOpen",n),n===s.q.eof||(0,l.Ch)(n))?m(n):(e.enter("mathFlowFenceMeta"),e.enter(d.V.chunkString,{contentType:f._.contentTypeString}),function n(r){return(h("meta",r),r===s.q.eof||(0,l.Ch)(r))?(e.exit(d.V.chunkString),e.exit("mathFlowFenceMeta"),m(r)):r===s.q.rightSquareBracket?t(r):(e.consume(r),n)}(n))}function m(t){return h("openAfter",t),e.exit("mathFlowFence"),r.interrupt?n(t):function n(t){return(h("contentStart",t),t===s.q.eof)?p(t):(0,l.Ch)(t)?e.attempt(x,e.attempt({tokenize:g,partial:!0},p,a?(0,u.f)(e,n,d.V.linePrefix,a+1):n),p)(t):(e.enter("mathFlowValue"),function t(r){return(h("contentContinue",r),r===s.q.eof||(0,l.Ch)(r))?(e.exit("mathFlowValue"),n(r)):(e.consume(r),t)}(t))}(t)}function p(t){return h("after",t),e.exit("mathFlow"),n(t)}function g(e,n,t){let r=[];return(0,u.f)(e,function(n){return h("closingPrefixAfter",n),e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),function n(a){return(h("closingSequence",a),a===s.q.backslash&&0===r.length||a===s.q.rightSquareBracket&&r[0]===s.q.backslash)?(e.consume(a),r.push(a),n):r<o?t(a):(e.exit("mathFlowFenceSequence"),(0,u.f)(e,i,d.V.whitespace)(a))}(n)},d.V.linePrefix,f._.tabSize);function i(r){return(h("closingSequenceEnd",r),r===s.q.eof||(0,l.Ch)(r))?(e.exit("mathFlowFence"),n(r)):t(r)}}},concrete:!0},x={tokenize:function(e,n,t){let r=this;return function(n){return e.enter(d.V.lineEnding),e.consume(n),e.exit(d.V.lineEnding),i};function i(e){return r.parser.lazy[r.now().line]?t(e):n(e)}},partial:!0},g={tokenize:function(e,n,t){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===d.V.linePrefix?i[2].sliceSerialize(i[1],!0).length:0,o=0;return function(n){return n!==s.q.dollarSign&&h("expected `$`",n),e.enter("mathFlow"),e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),function n(r){return(h("sequenceOpen",r),r===s.q.dollarSign)?(e.consume(r),o++,n):(e.exit("mathFlowFenceSequence"),o<2?t(r):(0,u.f)(e,c,d.V.whitespace)(r))}(n)};function c(n){return(h("metaOpen",n),n===s.q.eof||(0,l.Ch)(n))?m(n):(e.enter("mathFlowFenceMeta"),e.enter(d.V.chunkString,{contentType:f._.contentTypeString}),function n(r){return(h("meta",r),r===s.q.eof||(0,l.Ch)(r))?(e.exit(d.V.chunkString),e.exit("mathFlowFenceMeta"),m(r)):r===s.q.dollarSign?t(r):(e.consume(r),n)}(n))}function m(t){return h("openAfter",t),e.exit("mathFlowFence"),r.interrupt?n(t):function n(t){return(h("contentStart",t),t===s.q.eof)?p(t):(0,l.Ch)(t)?e.attempt(v,e.attempt({tokenize:x,partial:!0},p,a?(0,u.f)(e,n,d.V.linePrefix,a+1):n),p)(t):(e.enter("mathFlowValue"),function t(r){return(h("contentContinue",r),r===s.q.eof||(0,l.Ch)(r))?(e.exit("mathFlowValue"),n(r)):(e.consume(r),t)}(t))}(t)}function p(t){return h("after",t),e.exit("mathFlow"),n(t)}function x(e,n,t){let r=0;return(0,u.f)(e,function(n){return h("closingPrefixAfter",n),e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),function n(a){return(h("closingSequence",a),a===s.q.dollarSign)?(e.consume(a),r++,n):r<o?t(a):(e.exit("mathFlowFenceSequence"),(0,u.f)(e,i,d.V.whitespace)(a))}(n)},d.V.linePrefix,f._.tabSize);function i(r){return(h("closingSequenceEnd",r),r===s.q.eof||(0,l.Ch)(r))?(e.exit("mathFlowFence"),n(r)):t(r)}}},concrete:!0},v={tokenize:function(e,n,t){let r=this;return function(n){return(0,l.Ch)(n)&&h("expected eol",n),e.enter(d.V.lineEnding),e.consume(n),e.exit(d.V.lineEnding),i};function i(e){return r.parser.lazy[r.now().line]?t(e):n(e)}},partial:!0};function b(e){let n=e.length-4,t=3,r,i;if((e[t][1].type===d.V.lineEnding||"space"===e[t][1].type)&&(e[n][1].type===d.V.lineEnding||"space"===e[n][1].type)){for(r=t;++r<n;)if("mathTextData"===e[r][1].type){e[n][1].type="mathTextPadding",e[t][1].type="mathTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)void 0===i?r!==n&&e[r][1].type!==d.V.lineEnding&&(i=r):(r===n||e[r][1].type===d.V.lineEnding)&&(e[i][1].type="mathTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return e}function w(e){return e!==s.q.backslash||this.events[this.events.length-1][1].type===d.V.characterEscape}var k=t(93362),y=t(45369),j=t(42426),q=t(65028),F=t(31501),Z=t(61079),C=t(89874),S=t(88366),N=t(99847),T=t(14806),E=t(70079),V=t(34303),P=t(35873);function z(){var e=(0,T.Z)(["bg-black mb-4 rounded-md"]);return z=function(){return e},e}function I(){var e=(0,T.Z)(["flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"]);return I=function(){return e},e}function _(){var e=(0,T.Z)([""]);return _=function(){return e},e}function M(){var e=(0,T.Z)(["p-4 overflow-y-auto"]);return M=function(){return e},e}function D(){var e=(0,T.Z)(["!whitespace-pre"]);return D=function(){return e},e}var $=V.Z.div(z()),R=V.Z.div(I()),A=V.Z.span(_()),O=V.Z.div(M()),U=V.Z.code(D());function L(e){var n=e.children,t=e.className,i=e.language,a=e.content,o=(0,E.useCallback)(function(){navigator.clipboard.writeText(a)},[a]);return(0,r.jsxs)($,{children:[(0,r.jsxs)(R,{children:[i&&(0,r.jsx)(A,{children:i}),(0,r.jsx)(P.Z,{text:"Copy code",onCopy:o})]}),(0,r.jsx)(O,{children:(0,r.jsx)(U,{className:t,children:n})})]})}var B=[q.Z,[function(){let e=this.data();function n(n,t){let r=e[n]?e[n]:e[n]=[];r.push(t)}n("micromarkExtensions",{flow:{[s.q.dollarSign]:g,[s.q.backslash]:p},text:{[s.q.backslash]:{tokenize:function(e,n,t){let r=[],i=[],a,o=this;return function(n){return h("start",n),n!==s.q.backslash&&m("expected `\\`",n),w.call(o,o.previous)&&m("expected correct previous",o.previous),e.enter("mathText"),e.enter("mathTextSequence"),function n(i){return(h("openingSequence",i,r.join(",")),i===s.q.backslash&&0===r.length||i===s.q.leftParenthesis&&1===r.length)?(e.consume(i),r.push(i),n):r.length<2?t(i):(e.exit("mathTextSequence"),c(i))}(n)};function c(o){return(h("gap",o),o===s.q.eof)?t(o):o===s.q.backslash?(a=e.enter("mathTextSequence"),i=[],function t(o){return(h("closingSequence",o,r.join(",")),o===s.q.backslash&&0===i.length||o===s.q.rightParenthesis&&1===i.length)?(e.consume(o),i.push(o),t):i.length===r.length?(e.exit("mathTextSequence"),e.exit("mathText"),n(o)):(a.type="mathTextData",u(o))}(o)):o===s.q.space?(e.enter("space"),e.consume(o),e.exit("space"),c):(0,l.Ch)(o)?(e.enter(d.V.lineEnding),e.consume(o),e.exit(d.V.lineEnding),c):(e.enter("mathTextData"),u(o))}function u(n){return(h("data",n),n===s.q.eof||n===s.q.space||n===s.q.backslash||(0,l.Ch)(n))?(e.exit("mathTextData"),c(n)):(e.consume(n),u)}},resolve:b,previous:w}}}),n("fromMarkdownExtensions",(0,c.N)()),n("toMarkdownExtensions",(0,c.O)())},{singleDollarTextMath:!1}],],J=[[k.Z,{detect:!0,subset:["python","javascript","java","go","bash","c","cpp","csharp","css","diff","graphql","json","kotlin","less","lua","makefile","markdown","objectivec","perl","php","php-template","plaintext","python-repl","r","ruby","rust","scss","shell","sql","swift","typescript","vbnet","wasm","xml","yaml",],ignoreMissing:!0},],y.Z,[j.Z,{newlines:!0}],],G={code:function(e){var n=e.inline,t=e.node,i=e.className,a=e.children,o=(0,C.Z)(e,["inline","node","className","children"]);if(n){var c=(0,S.B)(t),s=(0,N.T$)(c);return s?(0,r.jsx)(N.s8,{displayInfo:s}):(0,r.jsx)("code",(0,Z.Z)((0,F.Z)({className:i},o),{children:a}))}var u,l=null===(u=null==i?void 0:i.split(" ").filter(function(e){return e.startsWith("language-")}))||void 0===u?void 0:u[0],f=l?l.split("-")[1]:"";return(0,r.jsx)(L,{language:f,className:i,content:(0,S.B)(t),children:a})}};function W(e){var n=e.size,t=e.children,c=e.className,s=(0,a.F)().theme;return(0,r.jsx)(o.D,{components:G,rehypePlugins:J,remarkPlugins:B,linkTarget:"_new",className:(0,i.Z)(c,"markdown prose w-full break-words dark:prose-invert","dark"===s?"dark":"light","small"===(void 0===n?"medium":n)&&"prose-xs"),children:t})}},38886:function(e,n,t){t.d(n,{C:function(){return q},Z:function(){return j}});var r=t(31501),i=t(89874),a=t(14806),o=t(35250),c=t(19841),s=t(70079),u=t(34303),l=t(36613),f=t(99847),d=t(80836),h=t(2827),m=t(12762),p=t(98943),x=t(68619),g=t(39690);function v(){var e=(0,a.Z)(["text-center mt-2 flex justify-center"]);return v=function(){return e},e}var b=u.Z.div(v());function w(e){var n=e.initialText,t=e.role,r=e.parentId,i=e.threadId,a=e.currentLeaf,c=e.onCreateNewNode,u=e.onUpdateNode,l=e.onChangeItemInView,f=e.onExitEdit,d=e.onDeleteNode,v=e.onRequestCompletion,w=e.disabled,k=(0,m.WS)(),y=(0,s.useId)(),j="".concat(a,"-").concat(y),q=(0,s.useState)(n||""),F=q[0],Z=q[1],C=(0,s.useRef)(null),S=t!==x.uU.User;(0,s.useEffect)(function(){c(j,r,S?x.Jq.Completion:x.Jq.Prompt,"")},[]);var N=(0,s.useCallback)(function(e){Z(e.currentTarget.value)},[]),T=(0,s.useCallback)(function(){u(j,F),l(j),S||v(x.Os.Next,j,{eventSource:"mouse"},!0),f()},[j,S,l,f,v,u,F,]),E=(0,s.useCallback)(function(){d(j),l(a),f(),k(t===x.uU.User?p.s6.cancelEditPrompt:p.s6.cancelEditCompletion,{threadId:i})},[j,a,k,l,d,f,t,i,]);return(0,s.useEffect)(function(){var e=C.current,n=function(e){"Enter"===e.key&&e.metaKey?T():"Escape"===e.key&&E()};return e&&e.addEventListener("keydown",n),function(){e&&e.removeEventListener("keydown",n)}},[E,T]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.ZP,{ref:C,value:F,onChange:N,className:"m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0"}),(0,o.jsxs)(b,{children:[(0,o.jsx)(g.z,{as:"button",onClick:T,className:"mr-2",disabled:w,children:S?"Save new edit":"Save & Submit"}),(0,o.jsx)(g.z,{as:"button",color:"neutral",onClick:E,children:"Cancel"})]})]})}var k=t(75310);function y(){var e=(0,a.Z)(["\npy-2 px-3 border text-gray-600 rounded-md text-sm dark:text-gray-100\n","\n","\n"]);return y=function(){return e},e}var j=s.memo(function(e){var n,t=e.message,a=e.isEditing,c=e.format,s=e.isCompletionInProgress,u=e.className,f=(0,i.Z)(e,["message","isEditing","format","isCompletionInProgress","className"]);return a?(0,o.jsx)(w,(0,r.Z)({currentLeaf:t.nodeId,initialText:d.Cv.getTextFromMessage(t.message),parentId:t.parentId,role:d.Cv.getRoleFromMessage(t.message)},f)):(0,o.jsx)(q,{text:d.Cv.getTextFromMessage(t.message),errCode:t.errCode,err:t.err,flag:t.errType,isCompletionInProgress:s,format:c,className:u,showContentPolicyViolation:t.errCode===l.Dd,citations:null===(n=t.message.metadata)||void 0===n?void 0:n.citations})});function q(e){var n=e.citations,t=e.className,r=e.err,i=e.flag,a=e.format,s=e.isCompletionInProgress,u=e.showContentPolicyViolation,l=e.size,d=e.text;return(0,o.jsxs)("div",{className:(0,c.Z)(t,"flex flex-col items-start gap-4 whitespace-pre-wrap","danger"===i&&"flex flex-row gap-2 text-red-500","warning"===i&&"text-orange-500"),children:[r&&!d||u||!a?"danger"===i&&u?null:d:(0,o.jsx)(k.Z,{size:void 0===l?"medium":l,className:(0,c.Z)("danger"!==i&&s&&"result-streaming","danger"===i&&"text-red-500","warning"===i&&"text-orange-500"),children:""===d?"&#8203;":(0,f.Qd)(d,n)}),i&&(0,o.jsx)(Z,{$flag:i,children:u?(0,o.jsx)(F,{}):r})]})}function F(){return(0,o.jsxs)(o.Fragment,{children:["This content may violate our"," ",(0,o.jsx)("a",{target:"_blank",href:"https://platform.openai.com/docs/usage-policies/content-policy",rel:"noreferrer",className:"bold underline",children:"content policy"}),". If you believe this to be in error, please"," ",(0,o.jsx)("a",{target:"_blank",href:"https://forms.gle/3gyAMj5r5rTEcgbs5",rel:"noreferrer",className:"bold underline",children:"submit your feedback"})," ","— your input will aid our research in this area."]})}var Z=u.Z.div(y(),function(e){return"warning"===e.$flag&&"border-orange-500 bg-orange-500/10"},function(e){return"danger"===e.$flag&&"border-red-500 bg-red-500/10"})},99847:function(e,n,t){t.d(n,{Op:function(){return p},s8:function(){return m},T$:function(){return h},Qd:function(){return d}});var r=t(35250),i=t(48240),a=t(96424),o=t.n(a);function c(e){var n,t=e.url;try{n=new URL(t)}catch(i){return console.error(i),null}return(0,r.jsx)(o(),{src:"https://icons.duckduckgo.com/ip3/".concat(n.hostname,".ico"),alt:"Favicon",width:16,height:16})}var s=t(79876),u=t(77064),l="&#8203;",f="oaicite:";function d(e,n){if(!n)return e;for(var t=n.length-1;t>=0;t--){var r=n[t],i=r.start_ix,a=r.end_ix,o=r.metadata,c=r.invalid_reason,s={index:t};o?s.metadata=o:c&&(s.invalid_reason=c),e=e.slice(0,i)+"".concat(l,"`").concat(f).concat(JSON.stringify(s),"`").concat(l)+e.slice(a)}return e}function h(e){if(!e.startsWith(f))return null;try{return JSON.parse(e.slice(f.length))}catch(n){return{index:-1}}}function m(e){var n,t=e.displayInfo;return(0,r.jsx)(u.$,{label:(0,r.jsx)(p,{pageInfo:t.metadata,invalidReason:t.invalid_reason}),placement:"top",offset:[0,3],leaveDelay:150,withArrow:!1,interactive:!0,wide:!0,children:(0,r.jsx)("a",{href:null===(n=t.metadata)||void 0===n?void 0:n.url,target:"_blank",rel:"noreferrer",className:"text-green-600 !no-underline",children:(0,r.jsx)("sup",{children:t.index+1})})})}function p(e){var n=e.pageInfo,t=e.invalidReason;return(0,r.jsx)("a",{href:null==n?void 0:n.url,target:"_blank",rel:"noreferrer",className:"!no-underline",children:(0,r.jsx)(u.u,{children:n?(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("div",{className:"flex shrink-0 items-center justify-center",children:(0,r.jsx)(c,{url:n.url})}),(0,r.jsx)("div",{className:"max-w-xs truncate text-xs",children:n.title}),(0,r.jsx)("div",{className:"shrink-0",children:(0,r.jsx)(s.ZP,{icon:i.AlO,size:"xsmall"})})]}):(0,r.jsx)("div",{className:"text-red-500",children:t||"Invalid citation"})})})}},57218:function(e,n,t){t.d(n,{G:function(){return r}});var r={id:"chat",name:"ChatGPT",href:"/chat",theme:{icon:"openai",color:"#10a37f",activeColor:"#1a7f64"}}},60612:function(e,n,t){var r=t(70079);n.Z=function(){var e=(0,r.useRef)(!1);return(0,r.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,r.useCallback)(function(){return e.current},[])}}}]);