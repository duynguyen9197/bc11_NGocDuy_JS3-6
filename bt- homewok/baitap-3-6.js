//Bài tập Toán Lý Hóa
/*
đầu vào:
Họ tên,Điểm Toán Lý Hóa
xử lý:
tạo biến hoTen chứa họ tên
        toan chứa điểm toán
        ly chứa điểm lý
        hoa chứa điểm hóa
        diemTb = (toan+ ly +hoa)/3
        if diemTb >= 8.5 xuất loại giỏi
        else if diemTb <8.5 && diemTb >=6.5 xuát loại khá
        else fi diemTB <6.5 && diemTb >= 5 xuất loại trung bình
        else xuất loại yếu
đầu ra:
xuất diemTb và kết quả học lực
 */
document.getElementById("TinhTB").onclick = function (event) {
  event.preventDefault();
  var hoTen = document.getElementById("HoTen").value;
  var toan = document.getElementById("math").value;
  var ly = document.getElementById("physics").value;
  var hoa = document.getElementById("chem").value;
  var diemTb = (parseFloat(toan) + parseFloat(ly) + parseFloat(hoa)) / 3;
  if (diemTb >= 8.5) {
    document.getElementById("XuatDiem").innerHTML =
      "Xếp loại:Giỏi" + "<div>Điểm TB là: " + diemTb + "</div>";
  } else if (diemTb >= 6.5 && diemTb < 8.5) {
    document.getElementById("XuatDiem").innerHTML =
      "Xếp loại:Khá" + "<div>Điểm TB là: " + diemTb + "</div>";
  } else if (diemTb < 6.5 && diemTb >= 5) {
    document.getElementById("XuatDiem").innerHTML =
      "Xếp loại:Trung Bình" + "<div>Điểm TB là: " + diemTb + "</div>";
  } else {
    document.getElementById("XuatDiem").innerHTML =
      "Xếp loại:Yếu" + "<div>Điểm TB là: " + diemTb + "</div>";
  }
};
// bài tập HomeWork 1
/*
đầu vào:
nhập 3 số nguyên
xử lý:
tạo biến A chứa số thứ nhất
tạo biến B chứa số thứ 2
tạo biến C chứa số thứ 3
if A>B && B>C => C,B,A
else if A>C && C>B => B,C,A
else IF B>A && A>C => C,A,B
else IF B>C && C>A =>A,C,B
else IF C>A && A>B =>B,A,C
else IF C>B && B>A => A,B,C



đầu ra: XUẤT  */
document.getElementById("SoSanh").onclick = function (event) {
  event.preventDefault();
  var A = document.getElementById("1").value;
  var B = document.getElementById("2").value;
  var C = document.getElementById("3").value;
  var biggest = 0;
  var smallest = 0;
  var bigger = 0;

  if (parseFloat(A) > parseFloat(B) && parseFloat(B) > parseFloat(C)) {
    biggest = A;
    bigger = B;
    smallest = C;
  } else if (parseFloat(A) > parseFloat(C) && parseFloat(C) > parseFloat(B)) {
    biggest = A;
    bigger = C;
    smallest = B;
  } else if (parseFloat(B) > parseFloat(A) && parseFloat(A) > parseFloat(C)) {
    biggest = B;
    bigger = A;
    smallest = C;
  } else if (parseFloat(B) > parseFloat(C) && parseFloat(C) > parseFloat(A)) {
    biggest = B;
    bigger = C;
    smallest = A;
  } else if (parseFloat(C) > parseFloat(A) && parseFloat(A) > parseFloat(B)) {
    biggest = C;
    bigger = A;
    smallest = B;
  } else {
    biggest = C;
    bigger = B;
    smallest = A;
  }

  document.getElementById("Sapxep").innerHTML =
    "Xếp theo thứ tự tăng dần:" + smallest + ";" + bigger + ";" + biggest;
};
// bài tập HomeWork 2
/*
INPUT:Bố (B) hoac Mẹ (M) hoac anh Trai (A) hoac Em gái (E)
PROGRAMMING:
tạo biến user chứa tên người sử dụng
kiểm tra nếu user =Bố  =>chào Bố
kiểm tra nếu user = Mẹ  =>chào  Mẹ
kiểm tra nếu user =anh Trai  =>chào anh Trai
kiểm tra nếu user =Em gái =>chào Em gái
OUTPUT: xuat câu chào */
document.getElementById("login").onclick = function (event) {
  //   event.preventDefault();
  var nguoisudung = document.getElementById("family").value;
  switch (nguoisudung) {
    case "B":
      document.getElementById("loichao").innerHTML = "chào Bố";
      break;
    case "M":
      document.getElementById("loichao").innerHTML = "chào Mẹ";
      break;
    case "A":
      document.getElementById("loichao").innerHTML = "chào anh Trai";
      break;
    case "E":
      document.getElementById("loichao").innerHTML = "chào Em gái";
      break;

    default:
      document.getElementById("loichao").innerHTML = "Xin chào ";
      break;
  }
};
// bài tập HomeWork 3
/**
 *INPUT:Nhập 3 số nguyên

 *PROGRAMMING:
 tạo biến x chứa number1
 tạo biến y chứa number2
 tạo biến z chứa number3
 kiểm tra chẵn  x % 2 ==0 =>gán x =1
                y %2 ==0 gán y = 1
                z % 2 ==0 gán z =1
 tạo biến totalChan chứa số lượng số chẵn
 totalChan = (x+y+z)
 số lẻ bằng 3 - totalChan;


 OUTPUT:Xuất số lượng chẵn và lẻ
 */
document.getElementById("checkNumber").onclick = function () {
  var x = document.getElementById("number1").value;
  var y = document.getElementById("number2").value;
  var z = document.getElementById("number3").value;
  if (x % 2 == 0) {
    x = 1;
  } else {
    x = 0;
  }
  if (y % 2 == 0) {
    y = 1;
  } else {
    y = 0;
  }
  if (z % 2 == 0) {
    z = 1;
  } else {
    z = 0;
  }
  var totalChan = x + y + z;

  console.log(totalChan);
  document.getElementById("xuatchanle").innerHTML =
    "Có tất cả " + totalChan + "số chẵn";

  var taodiv = document.createElement("div");
  taodiv.innerHTML = "Có tất cả " + (3 - totalChan) + "số lẻ";
  document.getElementById("xuatchanle").appendChild(taodiv);
};
// bài tập HomeWork 4
/**
 * INPUT:chiều dài 3 cạnh tam giác
 *
 * PROGRAMMING:
 * tạo biến canh_1 chứa value
 * tạo biến canh_2 chứa value
 * tạo biến canh_3 chứa value
 * tạo biến tamGiac
 * nếu canh_1=canh_2 || canh_1=canh_3 => tamGiac = cân
 * nếu canh_1=canh_2 && canh_1=canh_3 => tamGiac = đêu
 * else tam giac vuong
 * tạo biến canhHuyen;canhGocVuong_1;canhGocVuong_2;
 *
 * tìm cạnh huyền :
 * canhHuyen=canh_1
 * if      canhHuyen< canh_2=>canhHuyen = canh_2
 * else if canhHuyen< canh_3 =>canhHuyen = canh_3
 * else canhHuyen=canh_1
 * gán canhGocVuong_1,canhGocVuong_2 cho 2 cạnh còn lại
 * nếu canhHuyen= sqrt( canhGocVuong_1* canhGocVuong_1+canhGocVuong_2*canhGocVuong_2)
 * =>tamGiac = vuông
 *
 *
 * OUTPUT:xuất thông tin tam giác
 *
 */ document.getElementById("checktamgiacc").onclick = function () {
  var canh_1 = document.getElementById("CANH-1").value;
  var canh_2 = document.getElementById("CANH-2").value;
  var canh_3 = document.getElementById("CANH-3").value;
  var tamGiac = "";
  if (canh_1 == canh_2 && canh_1 == canh_3) {
    tamGiac = "Đây là tam giác đều";
  } else if (canh_1 == canh_2 || canh_1 == canh_3) {
    tamGiac = "Đây là tam giác cân";
  } else {
    var canhHuyen = canh_1;
    if (canhHuyen < canh_2) {
      canhHuyen = canh_2;
      canhGocVuong_1 = canh_1;
      canhGocVuong_2 = canh_3;
    } else if (canhHuyen < canh_3) {
      canhHuyen = canh_3;
      canhGocVuong_1 = canh_2;
      canhGocVuong_2 = canh_1;
    } else {
      canhGocVuong_1 = canh_2;
      canhGocVuong_2 = canh_3;
    }
    if (
      (canhHuyen = Math.sqrt(
        canhGocVuong_1 * canhGocVuong_1 + canhGocVuong_2 * canhGocVuong_2
      ))
    ) {
      tamGiac = "Đây là tam giác vuông";
    }
  }

  document.getElementById("xuattamgiac").innerHTML = tamGiac;
};
