(()=>{"use strict";const e=window.qf.blocks,a=window.qf.adminComponents,o=window.wp.element,t=window.wp.i18n,l=window.emotion,n={color:"#45B7D1",icon:()=>React.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"},React.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM3.5 6C3.5 5.72386 3.72386 5.5 4 5.5H20C20.2761 5.5 20.5 5.72386 20.5 6V6.79521L12 11.7952L3.5 6.79521V6ZM3.5 8.45179V18C3.5 18.2761 3.72386 18.5 4 18.5H20C20.2761 18.5 20.5 18.2761 20.5 18V8.45179L12.5741 13.1771C12.2295 13.3904 11.7705 13.3904 11.4259 13.1771L3.5 8.45179Z"})),title:"Email",controls:e=>{const{id:n,attributes:{allowedDomains:r,restrictDomains:s,placeholder:i,disallowedDomains:c},setAttributes:d}=e,[m,p]=(0,o.useState)(""),[u,b]=(0,o.useState)(""),[x,w]=(0,o.useState)(""),[f,g]=(0,o.useState)(""),_=/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/,E=()=>{const e=m.trim().toLowerCase();if(((e,a=[],o=[])=>e?(e=e.trim().toLowerCase(),a?.includes(e)?(b((0,t.__)("Domain already exists","quillforms")),!1):o?.includes(e)?(b((0,t.__)("Domain cannot be in both allowed and disallowed lists","quillforms")),!1):_.test(e)?(b(""),!0):(b((0,t.__)("Invalid domain format (e.g., example.com)","quillforms")),!1)):(b((0,t.__)("Domain cannot be empty","quillforms")),!1))(e,r,c)){const a=[...r||[],e];d({allowedDomains:a}),p(""),b("")}},R=()=>{const e=x.trim().toLowerCase();if(((e,a=[],o=[])=>e?(e=e.trim().toLowerCase(),a?.includes(e)?(g((0,t.__)("Domain already exists","quillforms")),!1):o?.includes(e)?(g((0,t.__)("Domain cannot be in both allowed and disallowed lists","quillforms")),!1):_.test(e)?(g(""),!0):(g((0,t.__)("Invalid domain format (e.g., example.com)","quillforms")),!1)):(g((0,t.__)("Domain cannot be empty","quillforms")),!1))(e,c,r)){const a=[...c||[],e];d({disallowedDomains:a}),w(""),g("")}};return React.createElement(a.BaseControl,null,React.createElement(a.ControlWrapper,{orientation:"horizontal"},React.createElement(a.ControlLabel,{label:(0,t.__)("Restrict Email Domains","quillforms"),isNew:!0}),React.createElement(a.ToggleControl,{checked:s,onChange:()=>{d({restrictDomains:!s})}})),React.createElement("div",null,s&&React.createElement("div",{className:l.css`
                        margin-top: 10px;
                    `},React.createElement("div",{className:l.css`
                            position: relative;
                            margin-bottom: ${u?"25px":"10px"};
                        `},React.createElement(a.TextControl,{label:(0,t.__)("Add Allowed Domain","quillforms"),value:m,onChange:e=>{p(e),b("")},onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),E())},placeholder:"example.com",className:l.css`
                                    ${u?"border-color: #cc1818;":""}
                                `}),u&&React.createElement("div",{className:l.css`
                                    color: #cc1818;
                                    font-size: 12px;
                                    margin-top: 5px;
                                    position: absolute;
                                    bottom: -20px;
                                `},u)),React.createElement("button",{onClick:E,className:l.css`
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
                            `,disabled:!m.trim()},(0,t.__)("Add Domain","quillforms")),r?.length>0&&React.createElement("div",{className:l.css`
                                margin-top: 15px;
                                border-top: 1px solid #ddd;
                                padding-top: 10px;
                            `},React.createElement(a.ControlLabel,{label:(0,t.__)("Allowed Domains","quillforms")}),r.map((e=>React.createElement("div",{key:e,className:l.css`
                                        display: flex;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 5px;
                                        margin: 5px 0;
                                        background: #f0f0f0;
                                        border-radius: 3px;
                                    `},React.createElement("span",null,e),React.createElement("button",{onClick:()=>(e=>{const a=r.filter((a=>a!==e));d({allowedDomains:a})})(e),className:l.css`
                                                background: #dc3232;
                                                color: white;
                                                border: none;
                                                border-radius: 3px;
                                                padding: 3px 8px;
                                                cursor: pointer;
                                                &:hover {
                                                    background: #c32121;
                                                }
                                            `},(0,t.__)("Remove","quillforms")))))),React.createElement("div",{className:l.css`
                            position: relative;
                            margin-bottom: ${f?"25px":"10px"};
                            margin-top: 20px;
                        `},React.createElement(a.TextControl,{label:(0,t.__)("Add Disallowed Domain","quillforms"),value:x,onChange:e=>{w(e),g("")},onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),R())},placeholder:"example.com",className:l.css`
                                    ${f?"border-color: #cc1818;":""}
                                `}),f&&React.createElement("div",{className:l.css`
                                    color: #cc1818;
                                    font-size: 12px;
                                    margin-top: 5px;
                                    position: absolute;
                                    bottom: -20px;
                                `},f)),React.createElement("button",{onClick:R,className:l.css`
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
                            `,disabled:!x.trim()},(0,t.__)("Add Domain","quillforms")),c?.length>0&&React.createElement("div",{className:l.css`
                                margin-top: 15px;
                                border-top: 1px solid #ddd;
                                padding-top: 10px;
                            `},React.createElement(a.ControlLabel,{label:(0,t.__)("Disallowed Domains","quillforms")}),c.map((e=>React.createElement("div",{key:e,className:l.css`
                                        display: flex;
                                        justify-content: space-between;
                                        align-items: center;
                                        padding: 5px;
                                        margin: 5px 0;
                                        background: #f0f0f0;
                                        border-radius: 3px;
                                    `},React.createElement("span",null,e),React.createElement("button",{onClick:()=>(e=>{const a=c.filter((a=>a!==e));d({disallowedDomains:a})})(e),className:l.css`
                                                background: #dc3232;
                                                color: white;
                                                border: none;
                                                border-radius: 3px;
                                                padding: 3px 8px;
                                                cursor: pointer;
                                                &:hover {
                                                    background: #c32121;
                                                }
                                            `},(0,t.__)("Remove","quillforms")))))))))},order:3},{name:r}={name:"email",supports:{editable:!0,required:!0,attachment:!0,description:!0,placeholder:!0,defaultValue:!0,logic:!0,theme:!0},attributes:{restrictDomains:{type:"boolean",default:!1},allowedDomains:{type:"array",default:[]},disallowedDomains:{type:"array",default:[]}},logicalOperators:["is","is_not","starts_with","contains","ends_with","not_contains"]};(0,e.setBlockAdminSettings)(r,n),(window.qf=window.qf||{}).blocklibEmailBlockAdmin={}})();