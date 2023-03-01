"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{68619:function(e,t,n){var r,o,s,i,a,u,c,d,l,g;n.d(t,{Jq:function(){return a},Os:function(){return s},uU:function(){return i}}),(u=r||(r={})).Default="default",u.Dark="dark",(c=o||(o={})).Retrieval="retrieval",(d=s||(s={})).Next="next",d.Variant="variant",d.Continue="continue",(l=i||(i={})).Unknown="unknown",l.User="user",l.Assistant="assistant",l.System="system",l.Critic="critic",l.Tool="tool",(g=a||(a={})).Root="root",g.System="system",g.Prompt="prompt",g.Completion="completion"},80836:function(e,t,n){n.d(t,{Cv:function(){return I},uV:function(){return M}});var r,o,s=n(35025),i=n(33468),a=n(37495),u=n(75106),c=n(43905),d=n(33861),l=n(31501),g=n(89874),f=n(64705),m=n(25769),h=n(84251),p=n.n(h),v=n(8844),Z=n(36613),y=n(68619),T=(r={},(0,d.Z)(r,y.Jq.Root,y.uU.Unknown),(0,d.Z)(r,y.Jq.Prompt,y.uU.User),(0,d.Z)(r,y.Jq.Completion,y.uU.Assistant),(0,d.Z)(r,y.Jq.System,y.uU.System),r),M=(o={},(0,d.Z)(o,y.uU.Unknown,y.Jq.Root),(0,d.Z)(o,y.uU.System,y.Jq.System),(0,d.Z)(o,y.uU.User,y.Jq.Prompt),(0,d.Z)(o,y.uU.Assistant,y.Jq.Completion),(0,d.Z)(o,y.uU.Critic,y.Jq.Completion),(0,d.Z)(o,y.uU.Tool,y.Jq.Completion),o),F=new WeakMap,I=function(){function e(t){(0,s.Z)(this,e),(0,a.Z)(this,F,{writable:!0,value:void 0}),(0,u.Z)(this,F,t||e.createTree())}var t=e.prototype;return t.getNode=function(e){return(0,i.Z)(this,F)[e]},t.getMessage=function(e){return(0,i.Z)(this,F)[e].message},t.getMessageId=function(e){return(0,i.Z)(this,F)[e].message.id},t.getMetadata=function(e){return(0,i.Z)(this,F)[e].metadata},t.getLeafFromNode=function(e){for(var t=(0,i.Z)(this,F)[e];;){if(0===t.children.length)return t;t=(0,i.Z)(this,F)[t.children.values().next().value]}},t.getParent=function(e){var t=(0,i.Z)(this,F)[e].parentId;return(0,i.Z)(this,F)[t]},t.getParentId=function(e){var t;return(null===(t=this.getParent(e))||void 0===t?void 0:t.id)||"root"},t.getBranchFromLeaf=function(e){for(var t=[],n=(0,i.Z)(this,F)[e];t.push(n),"root"!==n.type;)n=(0,i.Z)(this,F)[n.parentId];return t.reverse()},t.getChildrenFromNode=function(e){var t=this,n=(0,i.Z)(this,F)[e];return n?Array.from(n.children).map(function(e){return(0,i.Z)(t,F)[e]}):[]},t.isMessageIncomplete=function(t){var n=this.getMessage(t);return e.getIsIncompleteFromMessage(n)},t.addNodeToEnd=function(e,t){if(!(0,i.Z)(this,F)[e])return(0,d.Z)({},t.id,t);(0,u.Z)(this,F,p()((0,i.Z)(this,F),(0,d.Z)({$merge:(0,d.Z)({},t.id,t)},e,{children:{$apply:function(e){return Array.from(new Set((0,f.Z)(e).concat([t.id])))}}})))},t.addNode=function(e,t,n,r,o){var s="string"==typeof t?{id:(0,v.Z)(),author:{role:T[r]},role:T[r],content:{content_type:"text",parts:[t]}}:t,i=(0,l.Z)({id:e,children:[],parentId:n,type:r,message:s},o?{metadata:o}:{});this.addNodeToEnd(n,i)},t.updateNode=function(e,t){(0,u.Z)(this,F,p()((0,i.Z)(this,F),(0,d.Z)({},e,t)))},t.updateNodeMessage=function(e,t){(0,u.Z)(this,F,p()((0,i.Z)(this,F),(0,d.Z)({},e,{message:{$set:t}})))},t.updateNodeText=function(e,t){(0,u.Z)(this,F,p()((0,i.Z)(this,F),(0,d.Z)({},e,{message:{content:{parts:{$set:[t]}}}})))},t.deleteNode=function(e){var t=(0,i.Z)(this,F),n=t[e],r=(0,g.Z)(t,[e].map(m.Z)),o=n.parentId;(0,u.Z)(this,F,p()(r,(0,d.Z)({},o,{children:{$apply:function(t){return t.filter(function(t){return t!==e})}}})))},t.getTextFromNode=function(t){return e.getTextFromMessage(this.getMessage(t))},t.getIsBlockedFromNode=function(e){var t,n,r=this.getNode(e);return r&&(null===(t=r.metadata)||void 0===t?void 0:t.errCode)===Z.Dd&&(null===(n=r.metadata)||void 0===n?void 0:n.errType)==="danger"},t.getTextFromThread=function(t){return this.getBranchFromLeaf(t).filter(function(e){return e.type!==y.Jq.Root&&e.type!==y.Jq.System}).map(function(t){return e.getTextFromMessage(t.message)}).join("\n\n")},t.getTextFromLastNTurns=function(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=function(t){var n=t.message,r=e.getMessageType(n),o=t.message.author.role===y.uU.System,s=t.message.author.role===y.uU.Tool;return o||s&&!("code"===r||"execution_output"===r||"system_error"===r)};return this.getConversationTurns(t,o).slice(-n).map(function(t){var n=t.messages.map(function(t){return e.getTextFromMessage(t.message)}).filter(function(e){return""!==e}).join("\n");return r?"[".concat(t.role,"]\n").concat(n):n}).join("\n")},t.getConversationTurns=function(t,n){var r=this,o=[];return this.getBranchFromLeaf(t).forEach(function(t){var s=t.id,a=t.parentId,u=t.message,c=t.metadata;if(null==n||!n(t)){var d=o[o.length-1];(null==d?void 0:d.role)===e.getRoleFromMessage(u)||e.getRoleFromMessage(u)===y.uU.Tool?o[o.length-1].messages.push((0,l.Z)({nodeId:s,parentId:a,message:u},c)):o.push({role:e.getRoleFromMessage(u),messages:[(0,l.Z)({nodeId:s,parentId:a,message:u},c),],variantIds:a?Array.from((0,i.Z)(r,F)[a].children):[s]})}}),o},t.getParentPromptNode=function(e){for(var t=(0,i.Z)(this,F)[e];t&&t.type!==y.Jq.Prompt;)t=(0,i.Z)(this,F)[t.parentId];return t},e.createTree=function(){return{root:{id:"root",children:[],parentId:"",type:y.Jq.Root,message:e.createRootMessage()}}},e.createRootMessage=function(){return{id:(0,v.Z)(),author:{role:T[y.Jq.Root]},role:T[y.Jq.Root],content:{content_type:"text",parts:[]}}},e.getIsIncompleteFromMessage=function(e){var t,n;return(null===(t=e.metadata)||void 0===t?void 0:null===(n=t.finish_details)||void 0===n?void 0:n.type)==="max_tokens"},e.getWasInterruptedFromMessage=function(e){var t,n;return(null===(t=e.metadata)||void 0===t?void 0:null===(n=t.finish_details)||void 0===n?void 0:n.type)==="interrupted"},e.getIsContinuedFromMessage=function(e){var t;return(null===(t=e.metadata)||void 0===t?void 0:t.message_type)==="continue"},e.getTextFromMessage=function(e){if(e.content.content_type.startsWith("tether_b"))return e.content.text;switch(e.content.content_type){case"text":return e.content.parts.join("");case"code":case"execution_output":case"system_error":return e.content.text;default:return""}},e.getMessageType=function(e){return e.content.content_type},e.getIsTextTypeFromMessage=function(t){return"text"===e.getMessageType(t)},e.getRequestIdFromConversationTurn=function(e){var t=e.messages[e.messages.length-1];return this.getIsContinuedFromMessage(t.message)?t.nodeId:e.messages[0].nodeId},e.getRoleFromMessage=function(e){var t;return(null===(t=e.author)||void 0===t?void 0:t.role)||e.role},(0,c.Z)(e,[{key:"isFirstCompletion",get:function(){return 3===Object.values((0,i.Z)(this,F)).length}}]),e}()},82018:function(e,t,n){n.d(t,{kP:function(){return g},w7:function(){return c}});var r=n(61706),o=n(31501),s=n(45813),i=n(87762),a=n(44928),u=n(61432);function c(e){(0,a.signOut)((0,o.Z)({callbackUrl:window.location.origin+"/api/auth/logout"},e))}function d(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(function(){var e,t;return(0,s.__generator)(this,function(e){switch(e.label){case 0:return[4,fetch("/api/auth/session")];case 1:return[4,e.sent().json()];case 2:if(Object.keys(t=e.sent()).length)return[2,t];return[2,null]}})})).apply(this,arguments)}function g(e){var t=e||{},n=t.required,r=t.redirectTo,o=t.queryConfig,s=(0,u.useRouter)(),a=(0,i.a)(["session"],d,{onSettled:function(e,t){(null==o?void 0:o.onSettled)&&(null==o||o.onSettled(e,t)),!e&&n&&s.push(r)}});return{session:(null==a?void 0:a.data)||null,loading:(null==a?void 0:a.status)==="loading"}}},36613:function(e,t,n){n.d(t,{Dd:function(){return i},Mf:function(){return a},_I:function(){return c},sK:function(){return u}});var r=n(95182),o=n.n(r),s=n(60814),i="content_policy",a={errType:"warning",errCode:i},u={err:"Contents may violate our content policy",errType:"danger",errCode:i};function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=o()(e.length,0,4e3),a=o()(e.length-i,0,e.length-1),u=t?e.substring(a,e.length):e;return u?s.ZP.runModerationApi(u,n,r).then(function(e){var t,n;return{isBlocked:Boolean(e.blocked),isFlagged:Boolean(e.flagged)}}).catch(function(e){return console.error(e),{isBlocked:!1,isFlagged:!1,error:e}}):Promise.resolve({isBlocked:!1,isFlagged:!1})}}}]);