function printPDF() {
    // Get product information from span elements
    var orderID = document.getElementById('orderID').textContent;
    var nhom = document.getElementById('nhom').textContent;
    var viTri = document.getElementById('viTri').textContent;
    var thanhTien = document.getElementById('thanhTien').textContent;

    // Create a new PDF document
    var doc = new jsPDF();

    // Add title to the PDF
    doc.setFontSize(16);
    doc.text('Báo cáo Đơn hàng', 20, 20);

    // Add product information to the PDF
    doc.setFontSize(10);
    var y = 40;
    doc.text('Mã đơn hàng:', 20, y);
    doc.text(mahh, 40, y);
    y += 10;
    doc.text('Nhóm:', 20, y);
    doc.text(tenhh, 40, y);
    y += 10;
    doc.text('Vị trí:', 20, y);
    doc.text(dvt, 40, y);
    y += 10;
    doc.text('Thành tiền:', 20, y);
    doc.text(ncc, 40, y);

    // Save the PDF document
    doc.output('product_information.pdf');
}
/////////////////////////////////////

// Function to get URl parameters
function getUrlParameter(name){

    name = name.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');
    var regex = new RegExp('[\\?&]'+ name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
// Get parameters from URL
var orderID = getUrlParameter('orderID');
var nhom = getUrlParameter('nhom');
var viTri = getUrlParameter('viTri');
var thanhTien = getUrlParameter('thanhTien');
// Display parameters on the page
var orderID = document.getElementById('orderID').textContent;
var nhom = document.getElementById('nhom').textContent;
var viTri = document.getElementById('viTri').textContent;
var thanhTien = document.getElementById('thanhTien').textContent;
window.onload = function(){
window.print();
};

// CONCATENATE("https://ninhpoal.github.io/goalapp/index.html?mahh=".[Mã hàng hoá],"&tenhh=",[Tên hàng hoá],"&dvt=",[DVT],"&ncc=",[NCC])
// CONCATENATE("https://ninhpoal.github.io/goalapp/test.html?","phanloai=",[Phân loại],"&sochungtu=",[Số chứng từ],"&ngaychungtu=",[Ngày chứng từ],"&noidung=",[Diển giải],"&sotien=",text([Số tiền]),"&nguoinhan=",text([Người nhận]),"&nguoinop=",text([Người nộp tiền]))


