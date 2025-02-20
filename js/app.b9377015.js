(function(){"use strict";var n={9459:function(n,e,a){var t=a(3751),o=a(641);function h(n,e,a,t,h,s){const g=(0,o.g2)("salary-transfer");return(0,o.uX)(),(0,o.Wv)(g)}var s=a(33);const g={class:"container"},m={class:"summary"},i={class:"emp-list"},u={class:"table"},l={style:{width:"250px"}},d=["onClick"],N=["onClick"],c={class:"emp-detail"},T={key:0},k={style:{"text-align":"left",color:"orange"}},r={key:0},C={class:"detail-field"},b={class:"detail-field"},A=["value"],p={class:"detail-field"},v={class:"detail-field"},G={class:"detail-field"},E={key:0,class:"qrcode-container"},L={key:1};function y(n,e,a,h,y,H){return(0,o.uX)(),(0,o.CE)("div",g,[(0,o.Lk)("div",m,[e[9]||(e[9]=(0,o.Lk)("h2",null,"Lương nhân sự tháng 1 năm 2025",-1)),(0,o.Lk)("p",null,[(0,o.Lk)("strong",null,"Tổng số tiền: "+(0,s.v_)(H.formatAmount(H.totalAmount)),1)]),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(H.deptAmounts,((n,e)=>((0,o.uX)(),(0,o.CE)("p",{key:e},[(0,o.Lk)("strong",null,(0,s.v_)(e)+":",1),(0,o.eW)(" "+(0,s.v_)(H.formatAmount(n)),1)])))),128))]),(0,o.Lk)("div",i,[e[14]||(e[14]=(0,o.Lk)("h2",null,"Danh sách nhân sự",-1)),(0,o.Lk)("table",u,[(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[e[11]||(e[11]=(0,o.Lk)("th",{style:{width:"20px"}},"STT",-1)),e[12]||(e[12]=(0,o.Lk)("th",null,"Bộ phận",-1)),e[13]||(e[13]=(0,o.Lk)("th",null,"Tên",-1)),(0,o.Lk)("th",l,[e[10]||(e[10]=(0,o.eW)("Số tiền ")),(0,o.Lk)("button",{class:"toggle-button",onClick:e[0]||(e[0]=(0,t.D$)(((...n)=>H.toggleAmountVisibilityAll&&H.toggleAmountVisibilityAll(...n)),["stop"]))},(0,s.v_)(y.showAmountAll?"Ẩn tất cả":"Hiện tất cả"),1)])])]),(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(y.employees,((n,e)=>((0,o.uX)(),(0,o.CE)("tr",{key:n.name,onClick:a=>H.selectEmployee(n,e),class:(0,s.C4)([y.selectedEmployee&&n.id===y.selectedEmployee.id?"emp-row emp-row-selected":"emp-row",H.isEmployeeModified(n)?"emp-modified":""])},[(0,o.Lk)("td",null,(0,s.v_)(e+1),1),(0,o.Lk)("td",null,(0,s.v_)(n.dept),1),(0,o.Lk)("td",null,(0,s.v_)(n.name),1),(0,o.Lk)("td",null,[(0,o.eW)((0,s.v_)(y.showAmount[n.id]?H.formatAmount(n.amount):"*** VNĐ")+" ",1),(0,o.Lk)("button",{class:"toggle-button",onClick:(0,t.D$)((e=>H.toggleAmountVisibility(n)),["stop"])},(0,s.v_)(y.showAmount[n.id]?"Ẩn":"Hiện"),9,N)])],10,d)))),128))])])]),(0,o.Lk)("div",c,[e[25]||(e[25]=(0,o.Lk)("h2",null,"Chi tiết nhân sự",-1)),y.selectedEmployee?((0,o.uX)(),(0,o.CE)("div",T,[(0,o.Lk)("div",k,[y.selectedEmployee.isModified?((0,o.uX)(),(0,o.CE)("label",r,[e[15]||(e[15]=(0,o.Lk)("strong",null,"Bạn đã thay đổi dữ liệu này so với bản gốc",-1)),e[16]||(e[16]=(0,o.eW)()),(0,o.Lk)("button",{onClick:e[1]||(e[1]=(...n)=>H.resetChanges&&H.resetChanges(...n)),class:"reset-button"}," Reset ")])):(0,o.Q3)("",!0)]),e[23]||(e[23]=(0,o.Lk)("br",null,null,-1)),(0,o.Lk)("div",C,[e[17]||(e[17]=(0,o.Lk)("label",null,[(0,o.Lk)("strong",null,"Tên nhân sự:")],-1)),(0,o.Lk)("label",null,(0,s.v_)(y.selectedEmployee.name),1)]),(0,o.Lk)("div",b,[e[18]||(e[18]=(0,o.Lk)("label",null,[(0,o.Lk)("strong",null,"Tên ngân hàng:")],-1)),(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":e[2]||(e[2]=n=>y.selectedEmployee.bankCode=n),class:"select"},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(y.banks,(n=>((0,o.uX)(),(0,o.CE)("option",{key:n.bankCode,value:n.bankCode},(0,s.v_)(n.name),9,A)))),128))],512),[[t.u1,y.selectedEmployee.bankCode]])]),(0,o.Lk)("div",p,[e[19]||(e[19]=(0,o.Lk)("label",null,[(0,o.Lk)("strong",null,"Số tài khoản:")],-1)),(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=n=>y.selectedEmployee.bankAccount=n),class:""},null,512),[[t.Jo,y.selectedEmployee.bankAccount]])]),(0,o.Lk)("div",v,[e[20]||(e[20]=(0,o.Lk)("label",null,[(0,o.Lk)("strong",null,"Số tiền:")],-1)),(0,o.Lk)("button",{class:"toggle-button",onClick:e[4]||(e[4]=(0,t.D$)((n=>H.toggleAmountVisibility(y.selectedEmployee)),["stop"]))},(0,s.v_)(y.showAmount[y.selectedEmployee.id]?"Ẩn":"Hiện"),1),(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=n=>H.formattedAmount=n),onInput:e[6]||(e[6]=(...n)=>H.onAmountInput&&H.onAmountInput(...n)),class:"input"},null,544),[[t.aG,y.showAmount[y.selectedEmployee.id]],[t.Jo,H.formattedAmount]])]),(0,o.Lk)("div",G,[e[21]||(e[21]=(0,o.Lk)("label",null,[(0,o.Lk)("strong",null,"Nội dung chuyển tiền:")],-1)),(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":e[7]||(e[7]=n=>y.selectedEmployee.message=n),rows:"4",cols:"50",class:""},null,512),[[t.Jo,y.selectedEmployee.message]])]),(0,o.Lk)("button",{onClick:e[8]||(e[8]=(...n)=>H.generateQRCode&&H.generateQRCode(...n)),class:"generate-button"}," Update QR Code "),y.qrcodeContent?((0,o.uX)(),(0,o.CE)("div",E,e[22]||(e[22]=[(0,o.Lk)("canvas",{id:"qrcode"},null,-1)]))):(0,o.Q3)("",!0)])):((0,o.uX)(),(0,o.CE)("div",L,e[24]||(e[24]=[(0,o.Lk)("p",null,"Vui lòng chọn một nhân sự từ bảng.",-1)])))])])}a(8992),a(3949),a(8872);var H=a(7583),O=JSON.parse('[{"name":"SAIGONBANK - Ngân hàng TMCP Sài Gòn Công Thương","bankCode":"970400"},{"name":"SACOMBANK - Ngân hàng TMCP Sài Gòn Thương Tín","bankCode":"970403"},{"name":"AGRIBANK - Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam","bankCode":"970405"},{"name":"DONGABANK - Ngân hàng TMCP Đông Á","bankCode":"970406"},{"name":"TECHCOMBANK - Ngân hàng TMCP Kỹ Thương Việt Nam","bankCode":"970407"},{"name":"GPBANK - Ngân hàng TNHH Một Thành Viên Dầu Khí Toàn Cầu","bankCode":"970408"},{"name":"BACABANK - Ngân hàng TMCP Bắc Á","bankCode":"970409"},{"name":"STANDARD CHARTERED - Ngân hàng TNHH Một Thành Viên Standard Chartered","bankCode":"970410"},{"name":"PVCOMBANK - Ngân hàng TMCP Đại Chúng Việt Nam","bankCode":"970412"},{"name":"OCEANBANK - Ngân hàng TNHH Một Thành Viên Đại Dương","bankCode":"970414"},{"name":"VIETINBANK - Ngân hàng TMCP Công Thương Việt Nam","bankCode":"970415"},{"name":"ACB - Ngân hàng TMCP Á Châu","bankCode":"970416"},{"name":"BIDV - Ngân hàng Đầu tư và Phát triển Việt Nam","bankCode":"970418"},{"name":"NCB - Ngân hàng TMCP Quốc Dân","bankCode":"970419"},{"name":"VRB - Ngân hàng Liên doanh Việt Nga","bankCode":"970421"},{"name":"MB - Ngân hàng TMCP Quân Đội","bankCode":"970422"},{"name":"TPBANK - Ngân hàng TMCP Tiên Phong","bankCode":"970423"},{"name":"SHINHANBANK - Ngân hàng TNHH Một Thành Viên Shinhan Việt Nam","bankCode":"970424"},{"name":"ABBank - Ngân hàng TMCP An Bình","bankCode":"970425"},{"name":"MARITIME BANK - Ngân hàng TMCP Hàng Hải","bankCode":"970426"},{"name":"VIETABANK - Ngân hàng TMCP Việt Á","bankCode":"970427"},{"name":"NAMABANK - Ngân hàng TMCP Nam Á","bankCode":"970428"},{"name":"SCB - Ngân hàng TMCP Sài Gòn","bankCode":"970429"},{"name":"PG BANK - Ngân hàng TMCP Xăng dầu Petrolimex","bankCode":"970430"},{"name":"EXIMBANK - Ngân hàng TMCP Xuất Nhập khẩu Việt Nam","bankCode":"970431"},{"name":"VPBANK - Ngân hàng TMCP Việt Nam Thịnh Vượng","bankCode":"970432"},{"name":"VIETBANK - Ngân hàng TMCP Việt Nam Thương Tín","bankCode":"970433"},{"name":"INDOVINA BANK - Ngân hàng TNHH Indovina","bankCode":"970434"},{"name":"VIETCOMBANK - Ngân hàng TMCP Ngoại thương Việt Nam","bankCode":"970436"},{"name":"HDBANK - Ngân hàng TMCP Phát triển TP.HCM","bankCode":"970437"},{"name":"BAOVIET BANK - Ngân hàng TMCP Bảo Việt","bankCode":"970438"},{"name":"PUBLIC BANK - Ngân hàng TNHH Một Thành Viên Public Việt Nam","bankCode":"970439"},{"name":"SEABANK - Ngân hàng TMCP Đông Nam Á","bankCode":"970440"},{"name":"VIB - Ngân hàng TMCP Quốc Tế Việt Nam","bankCode":"970441"},{"name":"HONG LEONG - Ngân hàng TNHH Một Thành Viên Hong Leong Việt Nam","bankCode":"970442"},{"name":"SHB - Ngân hàng TMCP Sài Gòn – Hà Nội","bankCode":"970443"},{"name":"CBBANK - Ngân hàng TNHH Một Thành Viên Xây Dựng Việt Nam","bankCode":"970444"},{"name":"COOPBANK - Ngân hàng Hợp Tác Xã Việt Nam","bankCode":"970446"},{"name":"OCB - Ngân hàng TMCP Phương Đông","bankCode":"970448"},{"name":"LIENVIETPOSTBANK - Ngân hàng TMCP Bưu Điện Liên Việt","bankCode":"970449"},{"name":"KIENLONGBANK - Ngân hàng TMCP Kiên Long","bankCode":"970452"},{"name":"VIET CAPITAL BANK - Ngân hàng TMCP Bản Việt","bankCode":"970454"},{"name":"IBK - Ngân hàng Công nghiệp Hàn Quốc - Chi nhánh Hà Nội","bankCode":"970455"},{"name":"IBK - Ngân hàng Industrial Bank of Korea - Chi nhánh Hồ Chí Minh","bankCode":"970456"},{"name":"WOORI BANK - Ngân hàng TNHH Một Thành Viên Woori Bank Việt Nam","bankCode":"970457"},{"name":"UOB - Ngân hàng TNHH Một Thành Viên UOB Việt Nam","bankCode":"970458"},{"name":"CIMB - Ngân hàng TNHH Một Thành Viên CIMB Việt Nam","bankCode":"970459"},{"name":"CEMENT FINANCE - Công ty Tài chính cổ phần Xi Măng","bankCode":"970460"},{"name":"KOOKMIN - Ngân hàng Kookmin - Chi nhánh Hà Nội","bankCode":"970462"},{"name":"KOOKMIN - Ngân hàng Kookmin - Chi nhánh Tp. Hồ Chí Minh","bankCode":"970463"},{"name":"CDF - Công ty Tài chính TNHH MTV CỘNG ĐỒNG","bankCode":"970464"},{"name":"SINOPAC - Ngân hàng SINOPAC - Chi nhánh Tp. Hồ Chí Minh","bankCode":"970465"},{"name":"KEB HANA - Ngân hàng KEB HANA - Chi nhánh Tp. Hồ Chí Minh","bankCode":"970466"},{"name":"KEB HANA - Ngân hàng KEB HANA - Chi nhánh Hà Nội","bankCode":"970467"},{"name":"MIRAE ASSET - Công ty Tài chính TNHH MTV Mirae Asset (Việt Nam)","bankCode":"970468"},{"name":"MCREDIT - Công ty Tài chính TNHH MB SHINSEI","bankCode":"970470"}]'),M=JSON.parse('[{"name":"Vũ Ngọc Mai","dept":"Giáo viên","bankAccount":"010626102202","bankCode":"970422","message":"EGvsTeachers MaiVN Thanh toan LUONG thang 01 nam 2025 - 2025.02.20","amount":2120000},{"name":"Trần Thị Hải Yến","dept":"Giáo viên","bankAccount":"2809059999","bankCode":"970422","message":"EGvsTeachers YenTTH Thanh toan LUONG thang 01 nam 2025 - 2025.02.20","amount":1600000},{"name":"Lê Phương Thảo","dept":"Giáo viên","bankAccount":"20069899999","bankCode":"970422","message":"EGvsTeachers ThaoLP Thanh toan LUONG thang 01 nam 2025 - 2025.02.20","amount":960000},{"name":"Bùi Như Quỳnh","dept":"Giáo viên","bankAccount":"1040885971","bankCode":"970436","message":"EGvsTeachers QuynhBN Thanh toan thang 01 nam 2025 - 2025.02.20","amount":1600000},{"name":"Nguyễn Trà My","dept":"Giáo viên","bankAccount":"0388183171","bankCode":"970422","message":"EGvsTeachers MyNT Thanh toan LUONG thang 01 nam 2025 - 2025.02.20","amount":1440000},{"name":"Nguyễn Hương Giang","dept":"Giáo viên","bankAccount":"116180339887","bankCode":"970422","message":"EGvsTeachers GiangNH Thanh toan LUONG thang 01 nam 2025 - 2025.02.20","amount":2310000},{"name":"Nguyễn Thị Tuyết Mai","dept":"Giáo viên","bankAccount":"5555910032003","bankCode":"970422","message":"EGvsTeachers MaiNTT Thanh toan LUONG thang 01 nam 2025 - 2025.02.20","amount":1520000},{"name":"Lê Quỳnh Như","dept":"Giáo viên","bankAccount":"104871811032","bankCode":"970415","message":"EGvsTeachers NhuLQ Thanh toan LUONG thang 01 nam 2025 - 2025.02.20","amount":1200000},{"name":"Đặng Thu Minh","dept":"Giáo viên","bankAccount":"0344897007","bankCode":"970422","message":"EGvsTeachers MinhDT Thanh toan LUONG thang 01 nam 2025 - 2025.02.20","amount":2531481},{"name":"Nguyễn Hạ Nhi","dept":"Giáo viên","bankAccount":"001266872444","bankCode":"970422","message":"EGvsTeachers PhươngNH Thanh toan LUONG thang 01 nam 2025 - 2025.02.20","amount":1694630},{"name":"Nguyễn Trần Ngọc Linh","dept":"Giáo viên","bankAccount":"0913238961","bankCode":"970422","message":"EGvsTeachers PhươngNH Thanh toan LUONG thang 01 nam 2025 - 2025.02.20","amount":1441852},{"name":"Nguyễn Văn Hưng","dept":"Sales","bankAccount":"10550317","bankCode":"970416","message":"EGvsConsultant HungNV Thanh toan LUONG thang 01 nam 2025 - 2025.02.20","amount":5000000},{"name":"Nguyễn Hữu Hiếu","dept":"Sales","bankAccount":"0021000499390","bankCode":"970436","message":"EGvsSales HieuNH LUONG thang 01 nam 2025 - 2025.02.20","amount":5000000},{"name":"Trần Thị Quyên","dept":"Sales","bankAccount":"0763165754","bankCode":"970422","message":"EGvsSale QuyenTT LUONG thang 01 nam 2025 - 2025.02.20","amount":1833924},{"name":"Phùng Thái Sơn","dept":"Sales","bankAccount":"2252112006","bankCode":"970422","message":"EGvsSale SonPT LUONG thang 01 nam 2025 - 2025.02.20","amount":1833924},{"name":"Phạm Phương Thanh","dept":"Sales","bankAccount":"0376651026","bankCode":"970422","message":"EGvsSale ThanhPP LUONG thang 01 nam 2025 - 2025.02.20","amount":4108822},{"name":"Trần Linh Trang","dept":"Sales","bankAccount":"7227022006","bankCode":"970422","message":"EGvsSale TrangTL LUONG thang 01 nam 2025 - 2025.02.20","amount":1795996},{"name":"Trần Duy Anh","dept":"Sales","bankAccount":"1964338124","bankCode":"970436","message":"EGvsSale AnhTD LUONG thang 01 nam 2025 - 2025.02.20","amount":1806637},{"name":"Nguyễn Thành Vinh","dept":"Sales","bankAccount":"200468468","bankCode":"970441","message":"EGvsSale VinhNT LUONG thang 01 nam 2025 - 2025.02.20","amount":2891252},{"name":"Vũ Trà My","dept":"Sales","bankAccount":"1051184001","bankCode":"970436","message":"EGvsSale MyTV LUONG thang 01 nam 2025 - 2025.02.20","amount":2075767},{"name":"Nguyễn Thị Tuyết Mai","dept":"Dự án Kiến An - Hải Phòng","bankAccount":"899928112005","bankCode":"970422","message":"EGvsSale MaiNTT thang 01 nam 2025 - 2025.02.20","amount":1842328},{"name":"Phạm Thị Hương","dept":"RnD","bankAccount":"0333728918","bankCode":"970422","message":"EGvsRnD HuongPT Thanh toan LUONG vs THUONG VI TRI QUAN LY thang 1 nam 2025 - 2025.02.20","amount":20000000},{"name":"Trần Thị Anh Thơ","dept":"RnD","bankAccount":"4711743019","bankCode":"970418","message":"EGvsRnD ThoTTA Thanh toan LUONG vs THUONG VI TRI TRUONG NHOM thang 1 nam 2025 - 2025.02.20","amount":2932222},{"name":"Nguyễn Khánh Chi","dept":"RnD","bankAccount":"04810672501","bankCode":"970423","message":"EGvsRnD ChiNK Thanh toan LUONG vs THUONG DU AN thang 1 nam 2025 - 2025.02.20","amount":2698889},{"name":"Trần Đức Lâm","dept":"RnD","bankAccount":"2612957690","bankCode":"970418","message":"EGvsRnD LamTD Thanh toan LUONG vs THUONG DU AN thang 1 nam 2025 - 2025.02.20","amount":2543333},{"name":"Hà Ngọc Diệu","dept":"RnD","bankAccount":"2122418737","bankCode":"970418","message":"EGvsRnD DieuHN Thanh toan LUONG vs THUONG DU AN thang 1 nam 2025 - 2025.02.20","amount":2763148},{"name":"Đoàn Thị Hồng Nhung","dept":"RnD","bankAccount":"1039332671","bankCode":"970436","message":"EGvsRnD NhungDTH Thanh toan LUONG vs THUONG DU AN thang 1 nam 2025 - 2025.02.20","amount":2698889},{"name":"Nguyễn Anh Đức","dept":"RnD","bankAccount":"107870482014","bankCode":"970415","message":"EGvsRnD DucNA Thanh toan LUONG vs THUONG DU AN thang 1 nam 2025 - 2025.02.20","amount":2119444},{"name":"Ngô Thị Ngọc Ánh","dept":"RnD","bankAccount":"1019856275","bankCode":"970436","message":"EGvsRnD AnhNTN Thanh toan LUONG thang 1 nam 2025 - 2025.02.20","amount":1937778},{"name":"Tạ Văn Hiếu","dept":"RnD","bankAccount":"0843701615","bankCode":"970422","message":"EGvsRnD ThangTD Thanh toan LUONG vs THUONG DU AN thang 1 nam 2025 - 2025.02.20","amount":2664444},{"name":"Nguyễn Minh Hiếu","dept":"RnD","bankAccount":"19037689154011","bankCode":"970407","message":"EGvsRnD HieuNM Thanh toan LUONG thang 1 nam 2025 - 2025.02.20","amount":2543333},{"name":"Nguyễn Thị Hồng Huế","dept":"RnD","bankAccount":"102870476817","bankCode":"970415","message":"EGvsRnD HueNTH Thanh toan LUONG thang 1 nam 2025 - 2025.02.20","amount":1574444},{"name":"Nguyễn Minh Khánh","dept":"RnD","bankAccount":"0966146489","bankCode":"970432","message":"EGvsRnD KhanhNM Thanh toan LUONG vs THUONG DU AN thang 1 nam 2025 - 2025.02.20","amount":2543333},{"name":"Lưu Quang Phúc","dept":"RnD","bankAccount":"0867697262","bankCode":"970422","message":"EGvsRnD ThangTD Thanh toan LUONG thang 1 nam 2025 - 2025.02.20","amount":2552222},{"name":"Minh Giang Hồng","dept":"RnD","bankAccount":"412200469999","bankCode":"970422","message":"EGvsRnD ThangTD Thanh toan LUONG vs THUONG DU AN thang 1 nam 2025 - 2025.02.20","amount":2180000},{"name":"Mai Thành Luận","dept":"RnD","bankAccount":"1020636763","bankCode":"970436","message":"EGvsRnD LuanMT Thanh toan LUONG vs THUONG DU AN thang 1 nam 2025 - 2025.02.20","amount":2260000},{"name":"Lê Quang","dept":"RnD","bankAccount":"0781000503974","bankCode":"970436","message":"EGvsRnD QuangL Thanh toan LUONG vs THUONG DU AN thang 1 nam 2025 - 2025.02.20","amount":2664444},{"name":"Trần Hoàng Bách","dept":"RnD","bankAccount":"150420069999","bankCode":"970422","message":"EGvsRnD BachTH Thanh toan LUONG vs THUONG DU AN thang 1 nam 2025 - 2025.02.20","amount":2193333},{"name":"Nguyễn Văn Nam","dept":"RnD","bankAccount":"1031530355","bankCode":"970436","message":"EGvsRnD NamNV Thanh toan LUONG vs THUONG DU AN thang 1 nam 2025 - 2025.02.20","amount":2526667},{"name":"Lê Thị Minh Ánh","dept":"RnD","bankAccount":"0969653836","bankCode":"970422","message":"EGvsRnD AnhLTM Thanh toan LUONG vs THUONG DU AN thang 1 nam 2025 - 2025.02.20","amount":2470000},{"name":"Phan Thị Hà Phương","dept":"RnD","bankAccount":"015102004","bankCode":"970422","message":"EGvsRnD PhuongPTH Thanh toan LUONG vs THUONG DU AN thang 1 nam 2025 - 2025.02.20","amount":2411111},{"name":"Nguyễn Vũ Tố Uyên","dept":"RnD","bankAccount":"0399695260","bankCode":"970422","message":"EGvsRnD UyenNVT Thanh toan LUONG vs THUONG DU AN thang 1 nam 2025 - 2025.02.20","amount":1253333},{"name":"Nguyễn Yến Nhi","dept":"RnD","bankAccount":"0981193923","bankCode":"970422","message":"EGvsRnD NhiNY Thanh toan LUONG vs THUONG DU AN thang 1 nam 2025 - 2025.02.20","amount":1044444},{"name":"Vũ Phúc Thịnh","dept":"Ban điều hành","bankAccount":"19035707446012","bankCode":"970407","message":"ELvsBOM ThinhVP thanh toan LUONG thang 1 nam 2025 - 2025.02.20","amount":30000000},{"name":"Nguyễn Tiến Nhật","dept":"Công nghệ","bankAccount":"01265233001","bankCode":"970423","message":"ECVSIT (SALARY) - CHUYEN MOT PHAN TIEN LUONG T1.25 VA TRA MOT PHAN LUONG NAM 2023 - 2025.02.20","amount":40000000},{"name":"Nguyễn Hùng Dũng","dept":"Công nghệ","bankAccount":"020045784631","bankCode":"970403","message":"ECVSIT (SALARY) - CHUYEN MOT PHAN TIEN LUONG T1.25 VA TRA MOT PHAN LUONG NAM 2023 - 2025.02.20 ","amount":30000000},{"name":"Lưu Quang Đông","dept":"Công nghệ","bankAccount":"19032793144016","bankCode":"970407","message":"EGvsIT - Ung tien outsource cho DongLQ thang 2 nam 2025 - 2025.02.20","amount":30000000}]'),U=a(8287);function D(n){let e=65535,a=4129,t=U.hp.from(n,"utf-8");for(let o of t)for(let n=0;n<8;n++){let t=1==(o>>7-n&1),h=1==(e>>15&1);e<<=1,h^t&&(e^=a)}return(65535&e).toString(16)}function V({bankId:n,accountNo:e,amount:a,message:t}){let o=`00${n.length.toString().padStart(2,"0")}${n}01${e.length.toString().padStart(2,"0")}${e}`,h=`0010A00000072701${o.length.toString().padStart(2,"0")}${o}0208QRIBFTTA`,s=`38${h.length.toString().padStart(2,"0")}${h}`,g=`08${t.length.toString().padStart(2,"0")}${t}`,m=`530370454${a.length.toString().padStart(2,"0")}${a}5802VN62${g.length.toString().padStart(2,"0")}${g}`,i=`000201010212${s}${m}6304`,u=i+D(i).toUpperCase();return u}function f(n){const e=[/[\300-\306]/g,/[\340-\346]/g,/[\310-\313]/g,/[\350-\353]/g,/[\314-\317]/g,/[\354-\357]/g,/[\322-\330]/g,/[\362-\370]/g,/[\331-\334]/g,/[\371-\374]/g,/[\321]/g,/[\361]/g,/[\307]/g,/[\347]/g,/[\320]/g,/[\360]/g,/[\335]/g,/[\375-\377]/g],a=["A","a","E","e","I","i","O","o","U","u","N","n","C","c","D","d","Y","y"];for(let t=0;t<e.length;t++)n=n.replace(e[t],a[t]);return n}var B={data(){return{showAmountAll:!1,showAmount:{},selectedEmployee:null,originalData:{},selectedEmpIndex:-1,qrcodeContent:"",banks:O,employees:[],key:""}},computed:{totalAmount(){return this.employees.reduce(((n,e)=>n+parseInt(e.amount)),0)},deptAmounts(){return this.employees.reduce(((n,e)=>(n[e.dept]=(n[e.dept]||0)+parseInt(e.amount),n)),{})},formattedAmount:{get(){return this.formatAmount(this.selectedEmployee?.amount||"")},set(n){this.selectedEmployee.amount=n.replace(/,/g,"")}}},methods:{formatAmount(n){const e=n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return e.endsWith("VNĐ")?e:e+" VNĐ"},toggleAmountVisibilityAll(){this.showAmountAll=!this.showAmountAll,this.employees.forEach((n=>{this.showAmount[n.id]=this.showAmountAll}))},toggleAmountVisibility(n){this.showAmount[n.id]=!this.showAmount[n.id]},selectEmployee(n,e){this.selectedEmpIndex=e,this.selectedEmployee={...n},this.generateQRCode()},isEmployeeModified(n){return JSON.stringify(this.originalData[n.id])!==JSON.stringify(n)},resetChanges(){-1!=this.selectedEmpIndex&&(this.selectedEmployee={...this.originalData[this.selectedEmployee.id]},this.employees[this.selectedEmpIndex]={...this.selectedEmployee},localStorage.setItem(this.key,JSON.stringify(this.employees)))},onAmountInput(n){this.selectedEmployee.amount=n.target.value.replace(/,/g,""),this.formattedAmount=this.formatAmount(this.selectedEmployee.amount)},generateQRCode(){this.qrcodeContent=V({bankId:this.selectedEmployee.bankCode,accountNo:this.selectedEmployee.bankAccount,amount:this.selectedEmployee.amount.toString(),message:f(this.selectedEmployee.message)}),this.generateQRCodeImage(this.qrcodeContent)},generateQRCodeImage(n){this.$nextTick((()=>{const e=document.getElementById("qrcode");if(!e)return void console.error("Canvas element not found!");const a=e.getContext("2d");a.clearRect(0,0,e.width,e.height),H.toCanvas(e,n,{width:200},(function(n){n?console.error("Error generating QR code:",n):console.log("QR code successfully generated!")}))}))}},created(){this.key="202412";const n=localStorage.getItem(this.key);M.forEach((n=>{n.id=`${n.bankCode}-${n.bankAccount}`,this.originalData[n.id]=n})),this.employees=n?JSON.parse(n):M}},P=a(6262);const S=(0,P.A)(B,[["render",y],["__scopeId","data-v-8a6d931e"]]);var R=S,I={name:"App",components:{SalaryTransfer:R}};const K=(0,P.A)(I,[["render",h]]);var w=K;(0,t.Ef)(w).mount("#app")}},e={};function a(t){var o=e[t];if(void 0!==o)return o.exports;var h=e[t]={exports:{}};return n[t].call(h.exports,h,h.exports,a),h.exports}a.m=n,function(){var n=[];a.O=function(e,t,o,h){if(!t){var s=1/0;for(u=0;u<n.length;u++){t=n[u][0],o=n[u][1],h=n[u][2];for(var g=!0,m=0;m<t.length;m++)(!1&h||s>=h)&&Object.keys(a.O).every((function(n){return a.O[n](t[m])}))?t.splice(m--,1):(g=!1,h<s&&(s=h));if(g){n.splice(u--,1);var i=o();void 0!==i&&(e=i)}}return e}h=h||0;for(var u=n.length;u>0&&n[u-1][2]>h;u--)n[u]=n[u-1];n[u]=[t,o,h]}}(),function(){a.d=function(n,e){for(var t in e)a.o(e,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={524:0};a.O.j=function(e){return 0===n[e]};var e=function(e,t){var o,h,s=t[0],g=t[1],m=t[2],i=0;if(s.some((function(e){return 0!==n[e]}))){for(o in g)a.o(g,o)&&(a.m[o]=g[o]);if(m)var u=m(a)}for(e&&e(t);i<s.length;i++)h=s[i],a.o(n,h)&&n[h]&&n[h][0](),n[h]=0;return a.O(u)},t=self["webpackChunkviet_qr"]=self["webpackChunkviet_qr"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=a.O(void 0,[504],(function(){return a(9459)}));t=a.O(t)})();
//# sourceMappingURL=app.b9377015.js.map