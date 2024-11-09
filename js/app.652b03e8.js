(function(){"use strict";var n={7347:function(n,e,t){var o=t(3751),a=t(641);function i(n,e,t,o,i,l){const h=(0,a.g2)("salary-transfer");return(0,a.uX)(),(0,a.Wv)(h)}var l=t(33);const h={class:"container"},s={class:"summary"},d={class:"emp-list"},g={class:"table"},m={style:{width:"250px"}},u=["onClick"],r=["onClick"],c={class:"emp-detail"},C={key:0},k={class:"detail-field"},N={class:"detail-field"},b=["value"],A={class:"detail-field"},p={class:"detail-field"},T={class:"detail-field"},y={key:0,class:"qrcode-container"},E={key:1};function f(n,e,t,i,f,B){return(0,a.uX)(),(0,a.CE)("div",h,[(0,a.Lk)("div",s,[e[9]||(e[9]=(0,a.Lk)("h2",null,"Lương nhân sự tháng 10",-1)),(0,a.Lk)("p",null,[e[8]||(e[8]=(0,a.Lk)("strong",null,"Tổng số tiền:",-1)),(0,a.eW)(" "+(0,l.v_)(B.formatAmount(B.totalAmount)),1)]),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(B.deptAmounts,((n,e)=>((0,a.uX)(),(0,a.CE)("p",{key:e},[(0,a.Lk)("strong",null,(0,l.v_)(e)+":",1),(0,a.eW)(" "+(0,l.v_)(B.formatAmount(n)),1)])))),128))]),(0,a.Lk)("div",d,[e[14]||(e[14]=(0,a.Lk)("h2",null,"Danh sách nhân sự",-1)),(0,a.Lk)("table",g,[(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[e[11]||(e[11]=(0,a.Lk)("th",{style:{width:"20px"}},"STT",-1)),e[12]||(e[12]=(0,a.Lk)("th",null,"Bộ phận",-1)),e[13]||(e[13]=(0,a.Lk)("th",null,"Tên",-1)),(0,a.Lk)("th",m,[e[10]||(e[10]=(0,a.eW)("Số tiền ")),(0,a.Lk)("button",{class:"toggle-button",onClick:e[0]||(e[0]=(0,o.D$)(((...n)=>B.toggleAmountVisibilityAll&&B.toggleAmountVisibilityAll(...n)),["stop"]))},(0,l.v_)(f.showAmountAll?"Ẩn tất cả":"Hiện tất cả"),1)])])]),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(f.employees,((n,e)=>((0,a.uX)(),(0,a.CE)("tr",{key:n.name,onClick:e=>B.selectEmployee(n),class:(0,l.C4)([f.selectedEmployee&&`${n.bankCode}-${n.bankAccount}`===`${f.selectedEmployee.bankCode}-${f.selectedEmployee.bankAccount}`?"emp-row emp-row-selected":"emp-row",B.isEmployeeModified(n)?"emp-modified":""])},[(0,a.Lk)("td",null,(0,l.v_)(e+1),1),(0,a.Lk)("td",null,(0,l.v_)(n.dept),1),(0,a.Lk)("td",null,(0,l.v_)(n.name),1),(0,a.Lk)("td",null,[(0,a.eW)((0,l.v_)(f.showAmount[`${n.bankCode}-${n.bankAccount}`]?B.formatAmount(n.amount):"*** VNĐ")+" ",1),(0,a.Lk)("button",{class:"toggle-button",onClick:(0,o.D$)((e=>B.toggleAmountVisibility(n)),["stop"])},(0,l.v_)(f.showAmount[`${n.bankCode}-${n.bankAccount}`]?"Ẩn":"Hiện"),9,r)])],10,u)))),128))])])]),(0,a.Lk)("div",c,[e[22]||(e[22]=(0,a.Lk)("h2",null,"Chi tiết nhân sự",-1)),f.selectedEmployee?((0,a.uX)(),(0,a.CE)("div",C,[(0,a.Lk)("div",k,[e[15]||(e[15]=(0,a.Lk)("label",null,[(0,a.Lk)("strong",null,"Tên nhân sự:")],-1)),(0,a.Lk)("label",null,(0,l.v_)(f.selectedEmployee.name),1)]),(0,a.Lk)("div",N,[e[16]||(e[16]=(0,a.Lk)("label",null,[(0,a.Lk)("strong",null,"Tên ngân hàng:")],-1)),(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":e[1]||(e[1]=n=>f.selectedEmployee.bankCode=n),class:"select"},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(f.banks,(n=>((0,a.uX)(),(0,a.CE)("option",{key:n.bankCode,value:n.bankCode},(0,l.v_)(n.name),9,b)))),128))],512),[[o.u1,f.selectedEmployee.bankCode]])]),(0,a.Lk)("div",A,[e[17]||(e[17]=(0,a.Lk)("label",null,[(0,a.Lk)("strong",null,"Số tài khoản:")],-1)),(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=n=>f.selectedEmployee.bankAccount=n),class:""},null,512),[[o.Jo,f.selectedEmployee.bankAccount]])]),(0,a.Lk)("div",p,[e[18]||(e[18]=(0,a.Lk)("label",null,[(0,a.Lk)("strong",null,"Số tiền:")],-1)),(0,a.Lk)("button",{class:"toggle-button",onClick:e[3]||(e[3]=(0,o.D$)((n=>B.toggleAmountVisibility(f.selectedEmployee)),["stop"]))},(0,l.v_)(f.showAmount[`${f.selectedEmployee.bankCode}-${f.selectedEmployee.bankAccount}`]?"Ẩn":"Hiện"),1),(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=n=>B.formattedAmount=n),onInput:e[5]||(e[5]=(...n)=>B.onAmountInput&&B.onAmountInput(...n)),class:"input"},null,544),[[o.aG,f.showAmount[`${f.selectedEmployee.bankCode}-${f.selectedEmployee.bankAccount}`]],[o.Jo,B.formattedAmount]])]),(0,a.Lk)("div",T,[e[19]||(e[19]=(0,a.Lk)("label",null,[(0,a.Lk)("strong",null,"Nội dung chuyển tiền:")],-1)),(0,a.bo)((0,a.Lk)("textarea",{"onUpdate:modelValue":e[6]||(e[6]=n=>f.selectedEmployee.message=n),rows:"4",cols:"50",class:""},null,512),[[o.Jo,f.selectedEmployee.message]])]),(0,a.Lk)("button",{onClick:e[7]||(e[7]=(...n)=>B.generateQRCode&&B.generateQRCode(...n)),class:"generate-button"}," Update QR Code "),f.qrcodeContent?((0,a.uX)(),(0,a.CE)("div",y,e[20]||(e[20]=[(0,a.Lk)("canvas",{id:"qrcode"},null,-1)]))):(0,a.Q3)("",!0)])):((0,a.uX)(),(0,a.CE)("div",E,e[21]||(e[21]=[(0,a.Lk)("p",null,"Vui lòng chọn một nhân sự từ bảng.",-1)])))])])}t(8992),t(2577),t(3949),t(1454),t(8872);var B=t(7583),M=JSON.parse('[{"name":"SAIGONBANK - Ngân hàng TMCP Sài Gòn Công Thương","bankCode":"970400"},{"name":"SACOMBANK - Ngân hàng TMCP Sài Gòn Thương Tín","bankCode":"970403"},{"name":"AGRIBANK - Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam","bankCode":"970405"},{"name":"DONGABANK - Ngân hàng TMCP Đông Á","bankCode":"970406"},{"name":"TECHCOMBANK - Ngân hàng TMCP Kỹ Thương Việt Nam","bankCode":"970407"},{"name":"GPBANK - Ngân hàng TNHH Một Thành Viên Dầu Khí Toàn Cầu","bankCode":"970408"},{"name":"BACABANK - Ngân hàng TMCP Bắc Á","bankCode":"970409"},{"name":"STANDARD CHARTERED - Ngân hàng TNHH Một Thành Viên Standard Chartered","bankCode":"970410"},{"name":"PVCOMBANK - Ngân hàng TMCP Đại Chúng Việt Nam","bankCode":"970412"},{"name":"OCEANBANK - Ngân hàng TNHH Một Thành Viên Đại Dương","bankCode":"970414"},{"name":"VIETINBANK - Ngân hàng TMCP Công Thương Việt Nam","bankCode":"970415"},{"name":"ACB - Ngân hàng TMCP Á Châu","bankCode":"970416"},{"name":"BIDV - Ngân hàng Đầu tư và Phát triển Việt Nam","bankCode":"970418"},{"name":"NCB - Ngân hàng TMCP Quốc Dân","bankCode":"970419"},{"name":"VRB - Ngân hàng Liên doanh Việt Nga","bankCode":"970421"},{"name":"MB - Ngân hàng TMCP Quân Đội","bankCode":"970422"},{"name":"TPBANK - Ngân hàng TMCP Tiên Phong","bankCode":"970423"},{"name":"SHINHANBANK - Ngân hàng TNHH Một Thành Viên Shinhan Việt Nam","bankCode":"970424"},{"name":"ABBank - Ngân hàng TMCP An Bình","bankCode":"970425"},{"name":"MARITIME BANK - Ngân hàng TMCP Hàng Hải","bankCode":"970426"},{"name":"VIETABANK - Ngân hàng TMCP Việt Á","bankCode":"970427"},{"name":"NAMABANK - Ngân hàng TMCP Nam Á","bankCode":"970428"},{"name":"SCB - Ngân hàng TMCP Sài Gòn","bankCode":"970429"},{"name":"PG BANK - Ngân hàng TMCP Xăng dầu Petrolimex","bankCode":"970430"},{"name":"EXIMBANK - Ngân hàng TMCP Xuất Nhập khẩu Việt Nam","bankCode":"970431"},{"name":"VPBANK - Ngân hàng TMCP Việt Nam Thịnh Vượng","bankCode":"970432"},{"name":"VIETBANK - Ngân hàng TMCP Việt Nam Thương Tín","bankCode":"970433"},{"name":"INDOVINA BANK - Ngân hàng TNHH Indovina","bankCode":"970434"},{"name":"VIETCOMBANK - Ngân hàng TMCP Ngoại thương Việt Nam","bankCode":"970436"},{"name":"HDBANK - Ngân hàng TMCP Phát triển TP.HCM","bankCode":"970437"},{"name":"BAOVIET BANK - Ngân hàng TMCP Bảo Việt","bankCode":"970438"},{"name":"PUBLIC BANK - Ngân hàng TNHH Một Thành Viên Public Việt Nam","bankCode":"970439"},{"name":"SEABANK - Ngân hàng TMCP Đông Nam Á","bankCode":"970440"},{"name":"VIB - Ngân hàng TMCP Quốc Tế Việt Nam","bankCode":"970441"},{"name":"HONG LEONG - Ngân hàng TNHH Một Thành Viên Hong Leong Việt Nam","bankCode":"970442"},{"name":"SHB - Ngân hàng TMCP Sài Gòn – Hà Nội","bankCode":"970443"},{"name":"CBBANK - Ngân hàng TNHH Một Thành Viên Xây Dựng Việt Nam","bankCode":"970444"},{"name":"COOPBANK - Ngân hàng Hợp Tác Xã Việt Nam","bankCode":"970446"},{"name":"OCB - Ngân hàng TMCP Phương Đông","bankCode":"970448"},{"name":"LIENVIETPOSTBANK - Ngân hàng TMCP Bưu Điện Liên Việt","bankCode":"970449"},{"name":"KIENLONGBANK - Ngân hàng TMCP Kiên Long","bankCode":"970452"},{"name":"VIET CAPITAL BANK - Ngân hàng TMCP Bản Việt","bankCode":"970454"},{"name":"IBK - Ngân hàng Công nghiệp Hàn Quốc - Chi nhánh Hà Nội","bankCode":"970455"},{"name":"IBK - Ngân hàng Industrial Bank of Korea - Chi nhánh Hồ Chí Minh","bankCode":"970456"},{"name":"WOORI BANK - Ngân hàng TNHH Một Thành Viên Woori Bank Việt Nam","bankCode":"970457"},{"name":"UOB - Ngân hàng TNHH Một Thành Viên UOB Việt Nam","bankCode":"970458"},{"name":"CIMB - Ngân hàng TNHH Một Thành Viên CIMB Việt Nam","bankCode":"970459"},{"name":"CEMENT FINANCE - Công ty Tài chính cổ phần Xi Măng","bankCode":"970460"},{"name":"KOOKMIN - Ngân hàng Kookmin - Chi nhánh Hà Nội","bankCode":"970462"},{"name":"KOOKMIN - Ngân hàng Kookmin - Chi nhánh Tp. Hồ Chí Minh","bankCode":"970463"},{"name":"CDF - Công ty Tài chính TNHH MTV CỘNG ĐỒNG","bankCode":"970464"},{"name":"SINOPAC - Ngân hàng SINOPAC - Chi nhánh Tp. Hồ Chí Minh","bankCode":"970465"},{"name":"KEB HANA - Ngân hàng KEB HANA - Chi nhánh Tp. Hồ Chí Minh","bankCode":"970466"},{"name":"KEB HANA - Ngân hàng KEB HANA - Chi nhánh Hà Nội","bankCode":"970467"},{"name":"MIRAE ASSET - Công ty Tài chính TNHH MTV Mirae Asset (Việt Nam)","bankCode":"970468"},{"name":"MCREDIT - Công ty Tài chính TNHH MB SHINSEI","bankCode":"970470"}]'),v=JSON.parse('[{"name":"Chu Thị Hồng Hạnh","bankCode":"970418","bankAccount":"21210002397261","amount":"1880000","message":"EGvsTeachers HanhCTH Thanh toan LUONG thang 08 nam 2024 - 2024.09.20","dept":"Giáo viên"},{"name":"Tran Thi Hai Yen","bankCode":"970422","bankAccount":"2809059999","amount":"2140000","message":"EGvsTeachers YenTTH Thanh toan LUONG vs THUONG thang 08 nam 2024 - 2024.09.20","dept":"Giáo viên"},{"name":"Le Thi Bich Thuy","bankCode":"970422","bankAccount":"0971530139","amount":"1260600","message":"EGvsSale ThuyLTB LUONG thang 09 nam 2024 - 2024.10.20","dept":"BỘ PHẬN BÁN HÀNG"}]'),H={data(){return{showAmountAll:!1,showAmount:{},selectedEmployee:null,originalData:{},qrcodeContent:"",banks:M,employees:v.map((n=>({...n,modified:!1})))}},computed:{totalAmount(){return this.employees.reduce(((n,e)=>n+parseInt(e.amount)),0)},deptAmounts(){return this.employees.reduce(((n,e)=>(n[e.dept]=(n[e.dept]||0)+parseInt(e.amount),n)),{})},formattedAmount:{get(){return this.formatAmount(this.selectedEmployee?.amount||"")},set(n){this.selectedEmployee.amount=n.replace(/,/g,"")}}},methods:{formatAmount(n){const e=n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return e.endsWith("VNĐ")?e:e+" VNĐ"},toggleAmountVisibilityAll(){this.showAmountAll=!this.showAmountAll,this.employees.forEach((n=>{this.showAmount[`${n.bankCode}-${n.bankAccount}`]=this.showAmountAll}))},toggleAmountVisibility(n){this.showAmount[`${n.bankCode}-${n.bankAccount}`]=!this.showAmount[`${n.bankCode}-${n.bankAccount}`]},selectEmployee(n){this.selectedEmployee={...n};const e=`${n.bankCode}-${n.bankAccount}`;this.originalData[e]=JSON.parse(JSON.stringify(n)),this.generateQRCode()},markAsModified(){const n=`${this.selectedEmployee.bankCode}-${this.selectedEmployee.bankAccount}`;this.employees.find((e=>`${e.bankCode}-${e.bankAccount}`===n)).modified=!0,localStorage.setItem(n,JSON.stringify(this.selectedEmployee))},isEmployeeModified(n){const e=`${n.bankCode}-${n.bankAccount}`;return JSON.stringify(this.originalData[e])!==JSON.stringify(n)},resetChanges(){const n=`${this.selectedEmployee.bankCode}-${this.selectedEmployee.bankAccount}`;this.originalData[n]&&(Object.assign(this.selectedEmployee,JSON.parse(JSON.stringify(this.originalData[n]))),this.employees.find((e=>`${e.bankCode}-${e.bankAccount}`===n)).modified=!1,localStorage.removeItem(n))},onAmountInput(n){this.selectedEmployee.amount=n.target.value.replace(/,/g,""),this.formattedAmount=this.formatAmount(this.selectedEmployee.amount),this.markAsModified()},generateQRCode(){if(!this.selectedEmployee)return;const{bankCode:n,bankAccount:e,amount:t,message:o}=this.selectedEmployee,a=`00${String(n.length).padStart(2,"0")}${n}01${String(e.length).padStart(2,"0")}${e}`,i=`0010A00000072701${String(a.length).padStart(2,"0")}${a}0208QRIBFTTA`,l=`38${String(i.length).padStart(2,"0")}${i}`,h=`08${String(o.length).padStart(2,"0")}${o}`,s=`530370454${String(t.length).padStart(2,"0")}${t}5802VN62${String(h.length).padStart(2,"0")}${h}`,d=`000201010212${l}${s}6304`,g=this.generateCheckSum(d);this.qrcodeContent=d+g,this.generateQRCodeImage(this.qrcodeContent)},generateQRCodeImage(n){this.$nextTick((()=>{const e=document.getElementById("qrcode");if(!e)return void console.error("Canvas element not found!");const t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),B.toCanvas(e,n,{width:200},(function(n){n?console.error("Error generating QR code:",n):console.log("QR code successfully generated!")}))}))},generateCheckSum(n){let e=65535;const t=4129,o=(new TextEncoder).encode(n);return o.forEach((n=>{for(let o=0;o<8;o++){const a=n>>7-o&1,i=e>>15&1;e<<=1,i!==a&&(e^=t)}})),(65535&e).toString(16).toUpperCase()}}},V=t(6262);const L=(0,V.A)(H,[["render",f],["__scopeId","data-v-6dc0a44c"]]);var S=L,I={name:"App",components:{SalaryTransfer:S}};const P=(0,V.A)(I,[["render",i]]);var K=P;(0,o.Ef)(K).mount("#app")}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={exports:{}};return n[o].call(i.exports,i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,o,a,i){if(!o){var l=1/0;for(g=0;g<n.length;g++){o=n[g][0],a=n[g][1],i=n[g][2];for(var h=!0,s=0;s<o.length;s++)(!1&i||l>=i)&&Object.keys(t.O).every((function(n){return t.O[n](o[s])}))?o.splice(s--,1):(h=!1,i<l&&(l=i));if(h){n.splice(g--,1);var d=a();void 0!==d&&(e=d)}}return e}i=i||0;for(var g=n.length;g>0&&n[g-1][2]>i;g--)n[g]=n[g-1];n[g]=[o,a,i]}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={524:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var a,i,l=o[0],h=o[1],s=o[2],d=0;if(l.some((function(e){return 0!==n[e]}))){for(a in h)t.o(h,a)&&(t.m[a]=h[a]);if(s)var g=s(t)}for(e&&e(o);d<l.length;d++)i=l[d],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(g)},o=self["webpackChunkviet_qr"]=self["webpackChunkviet_qr"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(7347)}));o=t.O(o)})();
//# sourceMappingURL=app.652b03e8.js.map