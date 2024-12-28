(()=>{"use strict";const e=window.qf.blocks,t=window.React,n=window.qf.adminComponents,a={color:"#ad468d",icon:()=>React.createElement("svg",{fill:"currentColor",height:24,width:24,viewBox:"0 0 512 512",style:{display:"inline-block",verticalAlign:"middle",transform:"scale(1.2)"}},React.createElement("g",null,React.createElement("path",{d:"M239.078,185.492L209.25,160C172.219,187.18,144,235.609,144,287.438C144,329.047,167.344,352,193.969,352\r c24.172,0,43.5-20.375,43.5-45.922c0-24.625-16.891-43.281-39.469-43.281c-4.031,0-9.656,1.688-10.5,1.688\r C190.75,237.312,213.281,203.344,239.078,185.492z"}),React.createElement("path",{d:"M326.938,262.797c-3.234,0-8.922,1.688-10.5,1.688c3.203-27.172,25.781-61.141,51.562-78.992L338.188,160\r c-37.031,27.18-65.234,75.609-65.234,127.438c0,41.609,23.328,64.562,49.953,64.562c24.141,0,43.469-20.375,43.469-45.922\r C366.375,281.453,349.516,262.797,326.938,262.797z"}))),controls:e=>{const{attributes:a,setAttributes:o}=e,{buttonText:l,quotationMarks:r}=a;return React.createElement(t.Fragment,null,React.createElement(n.BaseControl,null,React.createElement(n.ControlWrapper,{orientation:"horizontal"},React.createElement(n.ControlLabel,{label:"Quotation marks"}),React.createElement(n.ToggleControl,{checked:r,onChange:()=>o({quotationMarks:!r})}))),React.createElement(n.BaseControl,null,React.createElement(n.ControlWrapper,{orientation:"vertical"},React.createElement(n.ControlLabel,{label:"Button text"}),React.createElement(n.TextControl,{placeholder:"Button Text",value:l,onChange:e=>o({buttonText:e})}))))},title:"Statement"},{name:o}={name:"statement",supports:{editable:!1,required:!0,attachment:!0,description:!0,logic:!0,theme:!0},attributes:{buttonText:{type:"string",default:"Continue"},quotationMarks:{type:"boolean",default:!0}}};(0,e.setBlockAdminSettings)(o,a),(window.qf=window.qf||{}).blocklibStatementBlockAdmin={}})();