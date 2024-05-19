// Function to get URl parameters
function getUrlParameter(name){

  name = name.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');
  var regex = new RegExp('[\\?&]'+ name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}





function generatePDF() {
  
  // Get product information from URL parameters
  var orderID = document.getElementById('orderID').textContent;
  var nhom = document.getElementById('nhom').textContent;
  var viTri = document.getElementById('viTri').textContent;
  var soLuong = document.getElementById('soLuong').textContent;
  var donGia = document.getElementById('donGia').textContent;
  var thanhTien = document.getElementById('thanhTien').textContent;

  // Get selected paper size
  var selectedPaperSize = document.getElementById('paperSize').value;

  // Create a new PDF document using jsPDF
  var doc = new jsPDF({orientation: 'p', unit: 'mm', format: selectedPaperSize}); // Set format based on selection
  doc.setFont('Arial');
  doc.setFontSize(12);

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

// Add logo
  var logo = new Image();
  logo.src
}
////////////////////////////////////////

// Get parameters from URL
var orderID = getUrlParameter('orderID');
var nhom = getUrlParameter('nhom');
var viTri = getUrlParameter('viTri');
var soluong = getUrlParameter('soLuong');
var donGia = getUrlParameter('donGia');
var thanhTien = getUrlParameter('thanhTien');
// Display parameters on the page
var orderID = document.getElementById('orderID').textContent;
var nhom = document.getElementById('nhom').textContent;
var viTri = document.getElementById('viTri').textContent;
var soLuong = document.getElementById('soLuong').textContent;
var donGia = document.getElementById('donGia').textContent;
var thanhTien = document.getElementById('thanhTien').textContent;
window.onload = function(){
window.print();
};

// CONCATENATE("https://ninhpoal.github.io/goalapp/index.html?mahh=".[Mã hàng hoá],"&tenhh=",[Tên hàng hoá],"&dvt=",[DVT],"&ncc=",[NCC])
// CONCATENATE("https://ninhpoal.github.io/goalapp/test.html?","phanloai=",[Phân loại],"&sochungtu=",[Số chứng từ],"&ngaychungtu=",[Ngày chứng từ],"&noidung=",[Diển giải],"&sotien=",text([Số tiền]),"&nguoinhan=",text([Người nhận]),"&nguoinop=",text([Người nộp tiền]))


