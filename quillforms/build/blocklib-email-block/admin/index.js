(()=>{"use strict";const e=window.qf.blocks,t=(window.React,()=>React.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"},React.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM3.5 6C3.5 5.72386 3.72386 5.5 4 5.5H20C20.2761 5.5 20.5 5.72386 20.5 6V6.79521L12 11.7952L3.5 6.79521V6ZM3.5 8.45179V18C3.5 18.2761 3.72386 18.5 4 18.5H20C20.2761 18.5 20.5 18.2761 20.5 18V8.45179L12.5741 13.1771C12.2295 13.3904 11.7705 13.3904 11.4259 13.1771L3.5 8.45179Z"}))),a=window.qf.adminComponents,o=window.wp.element,n=window.emotion,l={color:"#45B7D1",icon:t,title:"Email",controls:e=>{const{id:t,attributes:{allowedDomains:l,restrictDomains:r,placeholder:c},setAttributes:i}=e,[s,d]=(0,o.useState)(""),[m,p]=(0,o.useState)(""),u=/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/,b=()=>{const e=s.trim().toLowerCase();if((e=>e?(e=e.trim().toLowerCase(),l?.includes(e)?(p("Domain already exists"),!1):u.test(e)?(p(""),!0):(p("Invalid domain format (e.g., example.com)"),!1)):(p("Domain cannot be empty"),!1))(e)){const t=[...l||[],e];i({allowedDomains:t}),d(""),p("")}};return React.createElement(a.BaseControl,null,React.createElement(a.ControlWrapper,{orientation:"horizontal"},React.createElement(a.ControlLabel,{label:"Restrict Email Domains",isNew:!0}),React.createElement(a.ToggleControl,{checked:r,onChange:()=>{i({restrictDomains:!r})}})),React.createElement("div",null,r&&React.createElement("div",{className:n.css`
                        margin-top: 10px;
                    `},React.createElement("div",{className:n.css`
                            position: relative;
                            margin-bottom: ${m?"25px":"10px"};
                        `},React.createElement(a.TextControl,{label:"Add Allowed Domain",value:s,onChange:e=>{d(e),p("")},onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),b())},placeholder:"example.com",className:n.css`
                                    ${m?"border-color: #cc1818;":""}
                                `}),m&&React.createElement("div",{className:n.css`
                                    color: #cc1818;
                                    font-size: 12px;
                                    margin-top: 5px;
                                    position: absolute;
                                    bottom: -20px;
                                `},m)),React.createElement("button",{onClick:b,className:n.css`
                                margin-top: 5px;
                                padding: 5px 10px;
                                background: #007cba;
                                color: white;
                                border: none;
                                border-radius: 3px;
                                cursor: pointer;
                                &:hover {
                                    background: #006ba1;
                                }
                                &:disabled {
                                    background: #ccc;
                                    cursor: not-allowed;
                                }
                            `,disabled:!s.trim()},"Add Domain"),l?.length>0&&React.createElement("div",{className:n.css`
                                margin-top: 15px;
                                border-top: 1px solid #ddd;
                                padding-top: 10px;
                            `},React.createElement(a.ControlLabel,{label:"Allowed Domains"}),l.map((e=>React.createElement("div",{key:e,className:n.css`
                                        display: flex;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 5px;
                                        margin: 5px 0;
                                        background: #f0f0f0;
                                        border-radius: 3px;
                                    `},React.createElement("span",null,e),React.createElement("button",{onClick:()=>(e=>{const t=l.filter((t=>t!==e));i({allowedDomains:t})})(e),className:n.css`
                                                background: #dc3232;
                                                color: white;
                                                border: none;
                                                border-radius: 3px;
                                                padding: 3px 8px;
                                                cursor: pointer;
                                                &:hover {
                                                    background: #c32121;
                                                }
                                            `},"Remove"))))))))},order:3},{name:r}={name:"email",supports:{editable:!0,required:!0,attachment:!0,description:!0,placeholder:!0,defaultValue:!0,logic:!0,theme:!0},attributes:{restrictDomains:{type:"boolean",default:!1},allowedDomains:{type:"array",default:[]}},logicalOperators:["is","is_not","starts_with","contains","ends_with","not_contains"]};(0,e.setBlockAdminSettings)(r,l),(window.qf=window.qf||{}).blocklibEmailBlockAdmin={}})();