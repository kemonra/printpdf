function printPDF() {
    // Get product information from span elements
    var mahh = document.getElementById('mahh').textContent;
    var tenhh = document.getElementById('tenhh').textContent;
    var dvt = document.getElementById('dvt').textContent;
    var ncc = document.getElementById('ncc').textContent;

    // Create a new PDF document
    var doc = new jsPDF();

    // Add title to the PDF
    doc.setFontSize(16);
    doc.text('Báo cáo dữ liệu hàng hóa', 20, 20);

    // Add product information to the PDF
    doc.setFontSize(10);
    var y = 40;
    doc.text('Mã hàng hóa:', 20, y);
    doc.text(mahh, 40, y);
    y += 10;
    doc.text('Tên hàng hóa:', 20, y);
    doc.text(tenhh, 40, y);
    y += 10;
    doc.text('Đơn vị tính:', 20, y);
    doc.text(dvt, 40, y);
    y += 10;
    doc.text('NCC ưu tiên:', 20, y);
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
var mahh = getUrlParameter('mahh');
var tenhh = getUrlParameter('tenhh');
var dvt = getUrlParameter('dvt');
var ncc = getUrlParameter('ncc');
// Display parameters on the page
document.getElementById('mahh').textContent=mahh;
document.getElementById('tenhh').textContent=tenhh;
document.getElementById('dvt').textContent=dvt;
document.getElementById('ncc').textContent=ncc;
window.onload = function(){
    window.print();
};

// CONCATENATE("https://ninhpoal.github.io/goalapp/index.html?mahh=".[Mã hàng hoá],"&tenhh=",[Tên hàng hoá],"&dvt=",[DVT],"&ncc=",[NCC])


