
var mangMacDinh = [];
document.getElementById('them-so').onclick = function() {
    // input: nhapSoN ( number ); 
    var nhapSoN = Number(document.getElementById('nhap-so-n').value);
    mangMacDinh.push(nhapSoN);
    // output: mangMacDinh (number) ( hiển thị ra màn hình các giá trị trong mảng)
    document.getElementById('hien-thi-gia-tri-da-nhap').innerHTML = mangMacDinh ;
}
// Câu 1
document.getElementById('tinh-tong').onclick = function() {
    // input: mangMacDinh
    // output: ketQua (number)
    var ketQua = 0;
    // process
    for(var index = 0; index < mangMacDinh.length;index ++ ){
        if (mangMacDinh[index] > 0) {
            ketQua += mangMacDinh[index];
        }
    }
    document.getElementById('ket-qua-cau-1').innerHTML = ketQua ;
}
// Câu 2
document.getElementById('dem-so').onclick = function() {
    // input: mangMacDinh
    // output: ketQua (number)
    var ketQua = 0;
    // process
    for(var index = 0; index < mangMacDinh.length;index ++ ){
        if (mangMacDinh[index] > 0) {
            ketQua += 1;
        }
    }
    document.getElementById('ket-qua-cau-2').innerHTML = ketQua ;
}
// Câu 3
document.getElementById('tim-min').onclick = function() {
    // input: mangMacDinh
    // output: min (number)
    var min = mangMacDinh[0];
    // process
    for(var index = 1; index < mangMacDinh.length;index ++ ){
        if (min > mangMacDinh[index]) {
            min = mangMacDinh[index];
        }
    }
    document.getElementById('ket-qua-cau-3').innerHTML = min ;
}
// Câu 4
document.getElementById('tim-min-duong').onclick = function() {
    // input: mangMacDinh, mangSoDuong
    var mangSoDuong = [];
    // process
    for(var index = 0; index < mangMacDinh.length;index ++ ){
        if(mangMacDinh[index] > 0){
            mangSoDuong.push(mangMacDinh[index]);
        }
    }
        // output: min (number)
    var min = mangSoDuong[0];
    for(var index = 1; index < mangSoDuong.length;index++){
        if (min > mangSoDuong[index]) {
            min = mangSoDuong[index];
        }
    }
    if(min >= 1){
    document.getElementById('ket-qua-cau-4').innerHTML = min;
    } else {
    document.getElementById('ket-qua-cau-4').innerHTML = 'không có giá trị dương trong mảng';
    }
}
// Câu 5
document.getElementById('tim-so-chan').onclick = function() {
    // input: mangMacDinh, mangSoChan
    var mangSoChan = [];
    // process
    for(var index = 0; index < mangMacDinh.length;index ++ ){
        if(mangMacDinh[index] % 2 == 0){
            mangSoChan.push(mangMacDinh[index]);
        }
    }
    // output: soChanCuoiCung (number)
    var soChanCuoiCung = mangSoChan[mangSoChan.length - 1];
    if(soChanCuoiCung === undefined){
        document.getElementById('ket-qua-cau-5').innerHTML = -1;
    } else {
    document.getElementById('ket-qua-cau-5').innerHTML = soChanCuoiCung;
    }
}
// Câu 6
document.getElementById('doi-vi-tri').onclick = function(){
    // input: viTri1(number), viTri2(number)
    var viTri1 = Number(document.getElementById('vi-tri-1').value);
    var viTri2 = Number(document.getElementById('vi-tri-2').value);
    // output:giaTriViTri1 (number)
    var giaTriViTri1 = mangMacDinh[viTri1];
    // process:
    mangMacDinh[viTri1] = mangMacDinh[viTri2];
    mangMacDinh[viTri2] = giaTriViTri1;
    document.getElementById('ket-qua-cau-6').innerHTML = 'Mảng sau khi thay dổi: ' + mangMacDinh;
}
// Câu 7
document.getElementById('sap-xep').onclick = function(){
    // input: mangMacDinh
    // output:mangSapXep
    var mangSapXep = mangMacDinh;
    // process
    mangSapXep.sort(function(a, b){return a - b});
    document.getElementById('ket-qua-cau-7').innerHTML = mangSapXep;
}
// Câu 8
/**
 * Hàm này nhận vào 1 giá trị là số nguyên và trả ra true nếu nó là số nguyên tố và false khi số đó không phải là số nguyên tố
 * @param {*} giaTri  gia tri là 1 số nguyên ví dụ : 5 hoặc 10 tùy ý
 * @returns hàm sẽ trả về giá trị là true hoặc false
 */
function kiemTraSoNguyenTo(giaTri) {
    var output = false;
    var uoc = 1;
    var dem = 0;
    while( uoc <= giaTri){
        if(giaTri % uoc == 0) { 
            dem += 1;
        }
        uoc ++;
    }
    if(dem === 2) {
       output = true
    }
    return output;
}
document.getElementById('tim-so-nguyen-to').onclick = function(){
    // input: mangMacDinh
    // output:soNguyenToCanTim
    var soNguyenToCanTim = 0;
    // process
    for(var index = 0; index < mangMacDinh.length;index ++ ){
        if(kiemTraSoNguyenTo(mangMacDinh[index]) === true){
            soNguyenToCanTim = mangMacDinh[index];
            break;
        }
    }
    if(soNguyenToCanTim == 0){
        document.getElementById('ket-qua-cau-8').innerHTML = -1;
    }else{
    document.getElementById('ket-qua-cau-8').innerHTML = soNguyenToCanTim;
    }
}
// Câu 9
document.getElementById('dem-so-nguyen').onclick = function(){
    // input: mangMacDinh
    // output: mangSoNguyen, soLuongSoNguyen(number)
    var soLuongSoNguyen = 0;
    var mangSoNguyen = []
    for(var index = 0; index < mangMacDinh.length;index ++ ){
        if(Number.isInteger(mangMacDinh[index]) === true){
            mangSoNguyen.push(mangMacDinh[index]);
        }
    }
    soLuongSoNguyen = mangSoNguyen.length;
    if(soLuongSoNguyen == 0){
        document.getElementById('ket-qua-cau-9').innerHTML = 'Không có Giá trị Nguyên trong mảng!';
    }else{
    document.getElementById('ket-qua-cau-9').innerHTML = 'Số Nguyên: ' + soLuongSoNguyen;
    }
}
// Câu 10
document.getElementById('so-sanh').onclick = function(){
    // input:mangMacDinh
    // output: mangSoDuong, mangSoAm, soLuongDuong(number), soLuongAm(number)
    var mangSoDuong = [];
    var mangSoAm = [];
    
    for(var index = 0; index < mangMacDinh.length;index ++ ){
        if(mangMacDinh[index]>0){
            mangSoDuong.push(mangMacDinh[index]);
        } else{
            mangSoAm.push(mangMacDinh[index]);
        }
    }
    var soLuongDuong = mangSoDuong.length; 
    var soLuongAm = mangSoAm.length; 
    if(soLuongDuong >= soLuongAm){
        if( soLuongDuong > soLuongAm) {
            document.getElementById('ket-qua-cau-10').innerHTML = 'Số Dương > Số Âm'; 
        }else{
            document.getElementById('ket-qua-cau-10').innerHTML = 'Số Dương = Số Âm'; 
        }
    } else {
        document.getElementById('ket-qua-cau-10').innerHTML = 'Số Âm > Số Dương'; 
    }
}