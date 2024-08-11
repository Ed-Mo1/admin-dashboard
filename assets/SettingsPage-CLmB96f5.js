import{j as e,m as l,r as c}from"./index-DWq_UeGt.js";import{H as d}from"./Header-B-qq-BJ-.js";import{c as i}from"./createLucideIcon-CtBUNMvs.js";import{T as m}from"./trash-2-wADry3J9.js";/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=i("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=i("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=i("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=i("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=i("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),a=({icon:t,title:s,children:n})=>e.jsxs(l.div,{className:"bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx(t,{className:"text-indigo-400 mr-4",size:"24"}),e.jsx("h2",{className:"text-xl font-semibold text-gray-100",children:s})]}),n]}),b=()=>{const[t,s]=c.useState([{id:1,name:"Google",connected:!0,icon:"/google.png"},{id:2,name:"Facebook",connected:!1,icon:"/facebook.svg"},{id:3,name:"Twitter",connected:!0,icon:"/x.png"}]);return e.jsxs(a,{icon:g,title:"Connected Accounts",children:[t.map(n=>e.jsxs("div",{className:"flex items-center justify-between py-3",children:[e.jsxs("div",{className:"flex gap-1",children:[e.jsx("img",{src:n.icon,alt:"Social img",className:"size-6 object-cover rounded-full mr-2"}),e.jsx("span",{className:"text-gray-300",children:n.name})]}),e.jsx("button",{className:`px-3 py-1 rounded ${n.connected?"bg-green-600 hover:bg-green-700":"bg-gray-600 hover:bg-gray-700"} transition duration-200`,onClick:()=>{s(t.map(o=>o.id===n.id?{...o,connected:!o.connected}:o))},children:n.connected?"Connected":"Connect"})]},n.id)),e.jsxs("button",{className:"mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200",children:[e.jsx(u,{size:18,className:"mr-2"})," Add Account"]})]})},y=()=>e.jsxs(l.div,{className:"bg-red-900 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-red-700 mb-8",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx(m,{className:"text-red-400 mr-3",size:24}),e.jsx("h2",{className:"text-xl font-semibold text-gray-100",children:"Danger Zone"})]}),e.jsx("p",{className:"text-gray-300 mb-4",children:"Permanently delete your account and all of your content."}),e.jsx("button",{className:`bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded 
      transition duration-200`,children:"Delete Account"})]}),r=({label:t,isOn:s,onToggle:n})=>e.jsxs("div",{className:"flex items-center justify-between py-3",children:[e.jsx("span",{className:"text-gray-300",children:t}),e.jsx("button",{className:`
        relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none
        ${s?"bg-indigo-600":"bg-gray-600"}
        `,onClick:n,children:e.jsx("span",{className:`inline-block size-4 transform transition-transform bg-white rounded-full 
            ${s?"translate-x-6":"translate-x-1"}
            `})})]}),j=()=>{const[t,s]=c.useState({push:!0,email:!1,sms:!0});return e.jsxs(a,{icon:x,title:"Notifications",children:[e.jsx(r,{label:"Push Notifications",isOn:t.push,onToggle:()=>s({...t,push:!t.push})}),e.jsx(r,{label:"Email Notifications",isOn:t.email,onToggle:()=>s({...t,email:!t.email})}),e.jsx(r,{label:"SMS Notifications",isOn:t.sms,onToggle:()=>s({...t,sms:!t.sms})})]})},f=()=>e.jsxs(a,{icon:p,title:"Profile",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row items-center mb-6",children:[e.jsx("img",{src:"https://randomuser.me/api/portraits/men/3.jpg",alt:"Profile",className:"rounded-full w-20 h-20 object-cover mr-4"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-100",children:"John Doe"}),e.jsx("p",{className:"text-gray-400",children:"john.doe@example.com"})]})]}),e.jsx("button",{className:"bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto",children:"Edit Profile"})]}),N=()=>{const[t,s]=c.useState(!1);return e.jsxs(a,{icon:h,title:"Security",children:[e.jsx(r,{label:"Two-Factor Authentication",isOn:t,onToggle:()=>s(!t)}),e.jsx("div",{className:"mt-4",children:e.jsx("button",{className:`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded 
        transition duration-200
        `,children:"Change Password"})})]})},C=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Settings"}),e.jsxs("main",{className:"container py-6",children:[e.jsx(f,{}),e.jsx(j,{}),e.jsx(N,{}),e.jsx(b,{}),e.jsx(y,{})]})]});export{C as default};
