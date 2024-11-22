(function(){"use strict";var n={7342:function(n,e,t){var a=t(3751),o=t(641);function h(n,e,t,a,h,s){const g=(0,o.g2)("salary-transfer");return(0,o.uX)(),(0,o.Wv)(g)}var s=t(33);const g={class:"container"},m={class:"summary"},i={class:"emp-list"},l={class:"table"},u={style:{width:"250px"}},d=["onClick"],N=["onClick"],c={class:"emp-detail"},r={key:0},T={style:{"text-align":"left",color:"orange"}},C={key:0},k={class:"detail-field"},A={class:"detail-field"},b=["value"],p={class:"detail-field"},E={class:"detail-field"},v={class:"detail-field"},L={key:0,class:"qrcode-container"},H={key:1};function G(n,e,t,h,G,y){return(0,o.uX)(),(0,o.CE)("div",g,[(0,o.Lk)("div",m,[e[9]||(e[9]=(0,o.Lk)("h2",null,"Lương nhân sự tháng 10",-1)),(0,o.Lk)("p",null,[(0,o.Lk)("strong",null,"Tổng số tiền: "+(0,s.v_)(y.formatAmount(y.totalAmount)),1)]),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(y.deptAmounts,((n,e)=>((0,o.uX)(),(0,o.CE)("p",{key:e},[(0,o.Lk)("strong",null,(0,s.v_)(e)+":",1),(0,o.eW)(" "+(0,s.v_)(y.formatAmount(n)),1)])))),128))]),(0,o.Lk)("div",i,[e[14]||(e[14]=(0,o.Lk)("h2",null,"Danh sách nhân sự",-1)),(0,o.Lk)("table",l,[(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[e[11]||(e[11]=(0,o.Lk)("th",{style:{width:"20px"}},"STT",-1)),e[12]||(e[12]=(0,o.Lk)("th",null,"Bộ phận",-1)),e[13]||(e[13]=(0,o.Lk)("th",null,"Tên",-1)),(0,o.Lk)("th",u,[e[10]||(e[10]=(0,o.eW)("Số tiền ")),(0,o.Lk)("button",{class:"toggle-button",onClick:e[0]||(e[0]=(0,a.D$)(((...n)=>y.toggleAmountVisibilityAll&&y.toggleAmountVisibilityAll(...n)),["stop"]))},(0,s.v_)(G.showAmountAll?"Ẩn tất cả":"Hiện tất cả"),1)])])]),(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(G.employees,((n,e)=>((0,o.uX)(),(0,o.CE)("tr",{key:n.name,onClick:t=>y.selectEmployee(n,e),class:(0,s.C4)([G.selectedEmployee&&n.id===G.selectedEmployee.id?"emp-row emp-row-selected":"emp-row",y.isEmployeeModified(n)?"emp-modified":""])},[(0,o.Lk)("td",null,(0,s.v_)(e+1),1),(0,o.Lk)("td",null,(0,s.v_)(n.dept),1),(0,o.Lk)("td",null,(0,s.v_)(n.name),1),(0,o.Lk)("td",null,[(0,o.eW)((0,s.v_)(G.showAmount[n.id]?y.formatAmount(n.amount):"*** VNĐ")+" ",1),(0,o.Lk)("button",{class:"toggle-button",onClick:(0,a.D$)((e=>y.toggleAmountVisibility(n)),["stop"])},(0,s.v_)(G.showAmount[n.id]?"Ẩn":"Hiện"),9,N)])],10,d)))),128))])])]),(0,o.Lk)("div",c,[e[25]||(e[25]=(0,o.Lk)("h2",null,"Chi tiết nhân sự",-1)),G.selectedEmployee?((0,o.uX)(),(0,o.CE)("div",r,[(0,o.Lk)("div",T,[G.selectedEmployee.isModified?((0,o.uX)(),(0,o.CE)("label",C,[e[15]||(e[15]=(0,o.Lk)("strong",null,"Bạn đã thay đổi dữ liệu này so với bản gốc",-1)),e[16]||(e[16]=(0,o.eW)()),(0,o.Lk)("button",{onClick:e[1]||(e[1]=(...n)=>y.resetChanges&&y.resetChanges(...n)),class:"reset-button"}," Reset ")])):(0,o.Q3)("",!0)]),e[23]||(e[23]=(0,o.Lk)("br",null,null,-1)),(0,o.Lk)("div",k,[e[17]||(e[17]=(0,o.Lk)("label",null,[(0,o.Lk)("strong",null,"Tên nhân sự:")],-1)),(0,o.Lk)("label",null,(0,s.v_)(G.selectedEmployee.name),1)]),(0,o.Lk)("div",A,[e[18]||(e[18]=(0,o.Lk)("label",null,[(0,o.Lk)("strong",null,"Tên ngân hàng:")],-1)),(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":e[2]||(e[2]=n=>G.selectedEmployee.bankCode=n),class:"select"},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(G.banks,(n=>((0,o.uX)(),(0,o.CE)("option",{key:n.bankCode,value:n.bankCode},(0,s.v_)(n.name),9,b)))),128))],512),[[a.u1,G.selectedEmployee.bankCode]])]),(0,o.Lk)("div",p,[e[19]||(e[19]=(0,o.Lk)("label",null,[(0,o.Lk)("strong",null,"Số tài khoản:")],-1)),(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=n=>G.selectedEmployee.bankAccount=n),class:""},null,512),[[a.Jo,G.selectedEmployee.bankAccount]])]),(0,o.Lk)("div",E,[e[20]||(e[20]=(0,o.Lk)("label",null,[(0,o.Lk)("strong",null,"Số tiền:")],-1)),(0,o.Lk)("button",{class:"toggle-button",onClick:e[4]||(e[4]=(0,a.D$)((n=>y.toggleAmountVisibility(G.selectedEmployee)),["stop"]))},(0,s.v_)(G.showAmount[G.selectedEmployee.id]?"Ẩn":"Hiện"),1),(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=n=>y.formattedAmount=n),onInput:e[6]||(e[6]=(...n)=>y.onAmountInput&&y.onAmountInput(...n)),class:"input"},null,544),[[a.aG,G.showAmount[G.selectedEmployee.id]],[a.Jo,y.formattedAmount]])]),(0,o.Lk)("div",v,[e[21]||(e[21]=(0,o.Lk)("label",null,[(0,o.Lk)("strong",null,"Nội dung chuyển tiền:")],-1)),(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":e[7]||(e[7]=n=>G.selectedEmployee.message=n),rows:"4",cols:"50",class:""},null,512),[[a.Jo,G.selectedEmployee.message]])]),(0,o.Lk)("button",{onClick:e[8]||(e[8]=(...n)=>y.generateQRCode&&y.generateQRCode(...n)),class:"generate-button"}," Update QR Code "),G.qrcodeContent?((0,o.uX)(),(0,o.CE)("div",L,e[22]||(e[22]=[(0,o.Lk)("canvas",{id:"qrcode"},null,-1)]))):(0,o.Q3)("",!0)])):((0,o.uX)(),(0,o.CE)("div",H,e[24]||(e[24]=[(0,o.Lk)("p",null,"Vui lòng chọn một nhân sự từ bảng.",-1)])))])])}t(8992),t(3949),t(8872);var y=t(7583),O=JSON.parse('[{"name":"SAIGONBANK - Ngân hàng TMCP Sài Gòn Công Thương","bankCode":"970400"},{"name":"SACOMBANK - Ngân hàng TMCP Sài Gòn Thương Tín","bankCode":"970403"},{"name":"AGRIBANK - Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam","bankCode":"970405"},{"name":"DONGABANK - Ngân hàng TMCP Đông Á","bankCode":"970406"},{"name":"TECHCOMBANK - Ngân hàng TMCP Kỹ Thương Việt Nam","bankCode":"970407"},{"name":"GPBANK - Ngân hàng TNHH Một Thành Viên Dầu Khí Toàn Cầu","bankCode":"970408"},{"name":"BACABANK - Ngân hàng TMCP Bắc Á","bankCode":"970409"},{"name":"STANDARD CHARTERED - Ngân hàng TNHH Một Thành Viên Standard Chartered","bankCode":"970410"},{"name":"PVCOMBANK - Ngân hàng TMCP Đại Chúng Việt Nam","bankCode":"970412"},{"name":"OCEANBANK - Ngân hàng TNHH Một Thành Viên Đại Dương","bankCode":"970414"},{"name":"VIETINBANK - Ngân hàng TMCP Công Thương Việt Nam","bankCode":"970415"},{"name":"ACB - Ngân hàng TMCP Á Châu","bankCode":"970416"},{"name":"BIDV - Ngân hàng Đầu tư và Phát triển Việt Nam","bankCode":"970418"},{"name":"NCB - Ngân hàng TMCP Quốc Dân","bankCode":"970419"},{"name":"VRB - Ngân hàng Liên doanh Việt Nga","bankCode":"970421"},{"name":"MB - Ngân hàng TMCP Quân Đội","bankCode":"970422"},{"name":"TPBANK - Ngân hàng TMCP Tiên Phong","bankCode":"970423"},{"name":"SHINHANBANK - Ngân hàng TNHH Một Thành Viên Shinhan Việt Nam","bankCode":"970424"},{"name":"ABBank - Ngân hàng TMCP An Bình","bankCode":"970425"},{"name":"MARITIME BANK - Ngân hàng TMCP Hàng Hải","bankCode":"970426"},{"name":"VIETABANK - Ngân hàng TMCP Việt Á","bankCode":"970427"},{"name":"NAMABANK - Ngân hàng TMCP Nam Á","bankCode":"970428"},{"name":"SCB - Ngân hàng TMCP Sài Gòn","bankCode":"970429"},{"name":"PG BANK - Ngân hàng TMCP Xăng dầu Petrolimex","bankCode":"970430"},{"name":"EXIMBANK - Ngân hàng TMCP Xuất Nhập khẩu Việt Nam","bankCode":"970431"},{"name":"VPBANK - Ngân hàng TMCP Việt Nam Thịnh Vượng","bankCode":"970432"},{"name":"VIETBANK - Ngân hàng TMCP Việt Nam Thương Tín","bankCode":"970433"},{"name":"INDOVINA BANK - Ngân hàng TNHH Indovina","bankCode":"970434"},{"name":"VIETCOMBANK - Ngân hàng TMCP Ngoại thương Việt Nam","bankCode":"970436"},{"name":"HDBANK - Ngân hàng TMCP Phát triển TP.HCM","bankCode":"970437"},{"name":"BAOVIET BANK - Ngân hàng TMCP Bảo Việt","bankCode":"970438"},{"name":"PUBLIC BANK - Ngân hàng TNHH Một Thành Viên Public Việt Nam","bankCode":"970439"},{"name":"SEABANK - Ngân hàng TMCP Đông Nam Á","bankCode":"970440"},{"name":"VIB - Ngân hàng TMCP Quốc Tế Việt Nam","bankCode":"970441"},{"name":"HONG LEONG - Ngân hàng TNHH Một Thành Viên Hong Leong Việt Nam","bankCode":"970442"},{"name":"SHB - Ngân hàng TMCP Sài Gòn – Hà Nội","bankCode":"970443"},{"name":"CBBANK - Ngân hàng TNHH Một Thành Viên Xây Dựng Việt Nam","bankCode":"970444"},{"name":"COOPBANK - Ngân hàng Hợp Tác Xã Việt Nam","bankCode":"970446"},{"name":"OCB - Ngân hàng TMCP Phương Đông","bankCode":"970448"},{"name":"LIENVIETPOSTBANK - Ngân hàng TMCP Bưu Điện Liên Việt","bankCode":"970449"},{"name":"KIENLONGBANK - Ngân hàng TMCP Kiên Long","bankCode":"970452"},{"name":"VIET CAPITAL BANK - Ngân hàng TMCP Bản Việt","bankCode":"970454"},{"name":"IBK - Ngân hàng Công nghiệp Hàn Quốc - Chi nhánh Hà Nội","bankCode":"970455"},{"name":"IBK - Ngân hàng Industrial Bank of Korea - Chi nhánh Hồ Chí Minh","bankCode":"970456"},{"name":"WOORI BANK - Ngân hàng TNHH Một Thành Viên Woori Bank Việt Nam","bankCode":"970457"},{"name":"UOB - Ngân hàng TNHH Một Thành Viên UOB Việt Nam","bankCode":"970458"},{"name":"CIMB - Ngân hàng TNHH Một Thành Viên CIMB Việt Nam","bankCode":"970459"},{"name":"CEMENT FINANCE - Công ty Tài chính cổ phần Xi Măng","bankCode":"970460"},{"name":"KOOKMIN - Ngân hàng Kookmin - Chi nhánh Hà Nội","bankCode":"970462"},{"name":"KOOKMIN - Ngân hàng Kookmin - Chi nhánh Tp. Hồ Chí Minh","bankCode":"970463"},{"name":"CDF - Công ty Tài chính TNHH MTV CỘNG ĐỒNG","bankCode":"970464"},{"name":"SINOPAC - Ngân hàng SINOPAC - Chi nhánh Tp. Hồ Chí Minh","bankCode":"970465"},{"name":"KEB HANA - Ngân hàng KEB HANA - Chi nhánh Tp. Hồ Chí Minh","bankCode":"970466"},{"name":"KEB HANA - Ngân hàng KEB HANA - Chi nhánh Hà Nội","bankCode":"970467"},{"name":"MIRAE ASSET - Công ty Tài chính TNHH MTV Mirae Asset (Việt Nam)","bankCode":"970468"},{"name":"MCREDIT - Công ty Tài chính TNHH MB SHINSEI","bankCode":"970470"}]'),D=JSON.parse('[{"name":"Trần Thị Hải Yến","dept":"Giáo viên","bankAccount":"2809059999","bankCode":"970422","message":"EGvsTeachers YenTTH Thanh toan LUONG vs THUONG thang 10 nam 2024 - 2024.11.20","amount":2300000},{"name":"Đoàn Ngọc Anh Thư","dept":"Giáo viên","bankAccount":"102872808359","bankCode":"970415","message":"EGvsTeachers ThuDNA Thanh toan LUONG thang 10 nam 2024 - 2024.11.20","amount":1840000},{"name":"Tạ Phương Lan","dept":"Giáo viên","bankAccount":"109879350352","bankCode":"970415","message":"EGvsTeachers LanTP Thanh toan LUONG thang 10 nam 2024 - 2024.11.20","amount":1100000},{"name":"Đặng Thu Minh","dept":"Giáo viên","bankAccount":"0344897007","bankCode":"970422","message":"EGvsTeachers MinhDT Thanh toan LUONG thang 10 nam 2024 - 2024.11.20","amount":2765695},{"name":"Nguyễn Kiều Linh","dept":"Giáo viên","bankAccount":"9883562620","bankCode":"970407","message":"EGvsTeachers LinhNK Thanh toan LUONG thang 10 nam 2024 - 2024.11.20","amount":2257037},{"name":"Bùi Nguyễn Bảo Minh","dept":"Giáo viên","bankAccount":"0963253942","bankCode":"970422","message":"EGvsTeachers MinhBNB Thanh toan LUONG thang 10 nam 2024 - 2024.11.20","amount":2280000},{"name":"Ngô Hà Phương","dept":"Giáo viên","bankAccount":"0658651696868","bankCode":"970422","message":"EGvsTeachers PhươngNH Thanh toan LUONG thang 10 nam 2024 - 2024.11.20","amount":2486852},{"name":"Nguyễn Văn Hưng","dept":"Sale","bankAccount":"10550317","bankCode":"970416","message":"EGvsConsultant HungNV Thanh toan LUONG thang 10 nam 2024 - 2024.11.20","amount":5000000},{"name":"Trần Thị Quyên","dept":"Sale","bankAccount":"0763165754","bankCode":"970422","message":"EGvsSale QuyenTT LUONG thang 10 nam 2024 - 2024.11.20","amount":1423554},{"name":"Nguyễn Thị Thanh Bình","dept":" Dự án Kiến An (Hải Phòng)","bankAccount":"19036979265013","bankCode":"970407","message":"EGvsSales BinhNTT LUONG thang 10 nam 2024 - 2024.11.20","amount":5000000},{"name":"Phạm Thị Hương Thảo","dept":" Dự án Kiến An (Hải Phòng)","bankAccount":"0793294881149","bankCode":"970422","message":"EGvsSale ThaoPTH LUONG thang 10 nam 2024 - 2024.11.20","amount":2884815},{"name":"Trần Thị Quỳnh Anh","dept":" Dự án Kiến An (Hải Phòng)","bankAccount":"8886909072003","bankCode":"970422","message":"EGvsNL AnhTTQ LUONG VS THUONG DU AN thang 10 nam 2024 - 2024.11.20","amount":3200000},{"name":"Nguyễn Thị Tuyết Mai","dept":" Dự án Kiến An (Hải Phòng)","bankAccount":"899928112005","bankCode":"970422","message":"EGvsSale MaiNTT LUONG thang 10 nam 2024 - 2024.11.20","amount":2976507},{"name":"Tạ Kiều Anh","dept":" Dự án Kiến An (Hải Phòng)","bankAccount":"0916784189","bankCode":"970422","message":"EGvsNL AnhTK LUONG VS THUONG DU AN thang 10 nam 2024 - 2024.11.20","amount":2137037},{"name":"Phạm Thị Hương","dept":"RnD","bankAccount":"22210003579816","bankCode":"970418","message":"EGvsRnD HuongPT Thanh toan LUONG vs THUONG VI TRI QUAN LY  thang 10 nam 2024 - 2024.11.20","amount":15000000},{"name":"Trần Thị Anh Thơ","dept":"RnD","bankAccount":"4711743019","bankCode":"970418","message":"EGvsRnD ThoTTA Thanh toan LUONG vs THUONG VI TRI TRUONG NHOM thang 10 nam 2024 - 2024.11.20","amount":4270000},{"name":"Nguyễn Khánh Chi","dept":"RnD","bankAccount":"04810672501","bankCode":"970423","message":"EGvsRnD ChiNK Thanh toan LUONG vs THUONG DU AN thang 10 nam 2024 - 2024.11.20","amount":3670000},{"name":"Trần Đức Lâm","dept":"RnD","bankAccount":"2612957690","bankCode":"970418","message":"EGvsRnD LamTD Thanh toan LUONG vs THUONG DU AN thang 10 nam 2024 - 2024.11.20","amount":3430000},{"name":"Nguyễn Hoàng Khánh","dept":"RnD","bankAccount":"5011619999","bankCode":"970418","message":"EGvsRnD KhanhNH Thanh toan LUONG thang 10 nam 2024 - 2024.11.20","amount":2668889},{"name":"Nguyễn Kim An","dept":"RnD","bankAccount":"03831901201","bankCode":"970423","message":"EGvsRnD AnNK Thanh toan LUONG vs THUONG DU AN thang 10 nam 2024 - 2024.11.20","amount":3006667},{"name":"Hà Ngọc Diệu","dept":"RnD","bankAccount":"2122418737","bankCode":"970418","message":"EGvsRnD DieuHN Thanh toan LUONG vs THUONG DU AN thang 10 nam 2024 - 2024.11.20","amount":4376852},{"name":"Đoàn Thị Hồng Nhung","dept":"RnD","bankAccount":"1039332671","bankCode":"970436","message":"EGvsRnD NhungDTH Thanh toan LUONG vs THUONG DU AN thang 10 nam 2024 - 2024.11.20","amount":3430000},{"name":"Hoàng Chí Đạt","dept":"RnD","bankAccount":"0838212003","bankCode":"970422","message":"EGvsRnD DatHC Thanh toan LUONG vs THUONG DU AN thang 10 nam 2024 - 2024.11.20","amount":2340556},{"name":"Phạm Thị Thảo","dept":"RnD","bankAccount":"122507050404","bankCode":"970432","message":"EGvsRnD ThaoPT Thanh toan LUONG vs THUONG DU AN thang 10 nam 2024 - 2024.11.20","amount":2915556},{"name":"Vũ Ngọc Minh Anh","dept":"RnD","bankAccount":"0946231816","bankCode":"970422","message":"EGvsRnD AnhVNM Thanh toan LUONG vs THUONG DU AN thang 10 nam 2024 - 2024.11.20","amount":1211111},{"name":"Nguyễn Anh Đức ","dept":"RnD","bankAccount":"107870482014","bankCode":"970415","message":"EGvsRnD DucNA Thanh toan LUONG vs THUONG DU AN thang 10 nam 2024 - 2024.11.20","amount":3348889},{"name":"Ngô Thị Ngọc Ánh","dept":"RnD","bankAccount":"1019856275","bankCode":"970436","message":"EGvsRnD AnhNTN Thanh toan LUONG vs THUONG DU AN thang 10 nam 2024 - 2024.11.20","amount":3278889},{"name":"Vũ Phạm Minh Tuấn","dept":"RnD","bankAccount":"29513042005","bankCode":"970423","message":"EGvsRnD TuanPM Thanh toan LUONG vs THUONG DU AN thang 10 nam 2024 - 2024.11.20","amount":2656667},{"name":"Trần Lệ Mỹ Duyên","dept":"RnD","bankAccount":"19037373620019","bankCode":"970407","message":"EGvsRnD DuyenTLM Thanh toan LUONG vs THUONG DU AN thang 10 nam 2024 - 2024.11.20","amount":1010000},{"name":"Trần Đức Thắng","dept":"RnD","bankAccount":"19037890004018","bankCode":"970407","message":"EGvsRnD ThangTD Thanh toan LUONG vs THUONG DU AN thang 10 nam 2024 - 2024.11.20","amount":1166667},{"name":"Vũ Phúc Thịnh","dept":"Ban điều hành","bankAccount":"19035707446012","bankCode":"970407","message":"ELvsBOM ThinhVP thanh toanLUONG thang 8 nam 2024 - 2024.11.20","amount":30000000},{"name":"Nguyễn Tiến Nhật","dept":"Công nghệ","bankAccount":"01265233001","bankCode":"970423","message":"ECVSIT (SALARY) - CHUYEN MOT PHAN TIEN LUONG T10.24 CHO NGUYEN TIEN NHAT - 2024.11.20","amount":40000000},{"name":"Nguyễn Hùng Dũng","dept":"Công nghệ","bankAccount":"020045784631","bankCode":"970403","message":"ECVSIT (SALARY) - CHUYEN MOT PHAN TIEN LUONG T10.24 VS TIEN BU THIEU LUONG NAM 23 - 24.11.20","amount":25000000},{"name":"Lưu Quang Đông","dept":"Công nghệ","bankAccount":"19032793144016","bankCode":"970407","message":"EGvsIT - Ung tien outsource cho DongLQ thang 11 nam 2024 - 2024.11.20","amount":30000000},{"name":"Nguyễn Hữu Hiếu","dept":"Sale","bankAccount":"0021000499390","bankCode":"970436","message":"EGvsSales HieuNH LUONG thang 10 nam 2024 - 2024.10.20","amount":5000000}]'),M=t(8287);function U(n){let e=65535,t=4129,a=M.hp.from(n,"utf-8");for(let o of a)for(let n=0;n<8;n++){let a=1==(o>>7-n&1),h=1==(e>>15&1);e<<=1,h^a&&(e^=t)}return(65535&e).toString(16)}function f({bankId:n,accountNo:e,amount:t,message:a}){let o=`00${n.length.toString().padStart(2,"0")}${n}01${e.length.toString().padStart(2,"0")}${e}`,h=`0010A00000072701${o.length.toString().padStart(2,"0")}${o}0208QRIBFTTA`,s=`38${h.length.toString().padStart(2,"0")}${h}`,g=`08${a.length.toString().padStart(2,"0")}${a}`,m=`530370454${t.length.toString().padStart(2,"0")}${t}5802VN62${g.length.toString().padStart(2,"0")}${g}`,i=`000201010212${s}${m}6304`,l=i+U(i).toUpperCase();return l}function V(n){const e=[/[\300-\306]/g,/[\340-\346]/g,/[\310-\313]/g,/[\350-\353]/g,/[\314-\317]/g,/[\354-\357]/g,/[\322-\330]/g,/[\362-\370]/g,/[\331-\334]/g,/[\371-\374]/g,/[\321]/g,/[\361]/g,/[\307]/g,/[\347]/g,/[\320]/g,/[\360]/g,/[\335]/g,/[\375-\377]/g],t=["A","a","E","e","I","i","O","o","U","u","N","n","C","c","D","d","Y","y"];for(let a=0;a<e.length;a++)n=n.replace(e[a],t[a]);return n}var B={data(){return{showAmountAll:!1,showAmount:{},selectedEmployee:null,originalData:{},selectedEmpIndex:-1,qrcodeContent:"",banks:O,employees:[],key:""}},computed:{totalAmount(){return this.employees.reduce(((n,e)=>n+parseInt(e.amount)),0)},deptAmounts(){return this.employees.reduce(((n,e)=>(n[e.dept]=(n[e.dept]||0)+parseInt(e.amount),n)),{})},formattedAmount:{get(){return this.formatAmount(this.selectedEmployee?.amount||"")},set(n){this.selectedEmployee.amount=n.replace(/,/g,"")}}},methods:{formatAmount(n){const e=n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return e.endsWith("VNĐ")?e:e+" VNĐ"},toggleAmountVisibilityAll(){this.showAmountAll=!this.showAmountAll,this.employees.forEach((n=>{this.showAmount[n.id]=this.showAmountAll}))},toggleAmountVisibility(n){this.showAmount[n.id]=!this.showAmount[n.id]},selectEmployee(n,e){this.selectedEmpIndex=e,this.selectedEmployee={...n},this.generateQRCode()},isEmployeeModified(n){return JSON.stringify(this.originalData[n.id])!==JSON.stringify(n)},resetChanges(){-1!=this.selectedEmpIndex&&(this.selectedEmployee={...this.originalData[this.selectedEmployee.id]},this.employees[this.selectedEmpIndex]={...this.selectedEmployee},localStorage.setItem(this.key,JSON.stringify(this.employees)))},onAmountInput(n){this.selectedEmployee.amount=n.target.value.replace(/,/g,""),this.formattedAmount=this.formatAmount(this.selectedEmployee.amount)},generateQRCode(){this.qrcodeContent=f({bankId:this.selectedEmployee.bankCode,accountNo:this.selectedEmployee.bankAccount,amount:this.selectedEmployee.amount.toString(),message:V(this.selectedEmployee.message)}),this.generateQRCodeImage(this.qrcodeContent)},generateQRCodeImage(n){this.$nextTick((()=>{const e=document.getElementById("qrcode");if(!e)return void console.error("Canvas element not found!");const t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),y.toCanvas(e,n,{width:200},(function(n){n?console.error("Error generating QR code:",n):console.log("QR code successfully generated!")}))}))}},created(){this.key="202410";const n=localStorage.getItem(this.key);D.forEach((n=>{n.id=`${n.bankCode}-${n.bankAccount}`,this.originalData[n.id]=n})),this.employees=n?JSON.parse(n):D}},I=t(6262);const P=(0,I.A)(B,[["render",G],["__scopeId","data-v-aac6d9f8"]]);var K=P,S={name:"App",components:{SalaryTransfer:K}};const R=(0,I.A)(S,[["render",h]]);var w=R;(0,a.Ef)(w).mount("#app")}},e={};function t(a){var o=e[a];if(void 0!==o)return o.exports;var h=e[a]={exports:{}};return n[a].call(h.exports,h,h.exports,t),h.exports}t.m=n,function(){var n=[];t.O=function(e,a,o,h){if(!a){var s=1/0;for(l=0;l<n.length;l++){a=n[l][0],o=n[l][1],h=n[l][2];for(var g=!0,m=0;m<a.length;m++)(!1&h||s>=h)&&Object.keys(t.O).every((function(n){return t.O[n](a[m])}))?a.splice(m--,1):(g=!1,h<s&&(s=h));if(g){n.splice(l--,1);var i=o();void 0!==i&&(e=i)}}return e}h=h||0;for(var l=n.length;l>0&&n[l-1][2]>h;l--)n[l]=n[l-1];n[l]=[a,o,h]}}(),function(){t.d=function(n,e){for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={524:0};t.O.j=function(e){return 0===n[e]};var e=function(e,a){var o,h,s=a[0],g=a[1],m=a[2],i=0;if(s.some((function(e){return 0!==n[e]}))){for(o in g)t.o(g,o)&&(t.m[o]=g[o]);if(m)var l=m(t)}for(e&&e(a);i<s.length;i++)h=s[i],t.o(n,h)&&n[h]&&n[h][0](),n[h]=0;return t.O(l)},a=self["webpackChunkviet_qr"]=self["webpackChunkviet_qr"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(7342)}));a=t.O(a)})();
//# sourceMappingURL=app.871a9f7a.js.map