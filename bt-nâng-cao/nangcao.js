/**nâng cao 1
 * INPUT:
 * ngày;tháng;năm
 * PROGRAMMING:
 * tạo biến day
 * tạo biến month
 * tạo biến year
 *
 *
 * switch (month)
 * case 1:
 * if day==31 => day=1;month++
 * if day<31 =>day++
 * case 2:
 * if day ==28 => day=1;month++
 * case 3:
 *  if day==31 => day=1;month++
 * if day<31 =>day++
 * case 4:
 * if day==30 => day=1;month++
 * else day ++
 * case 5:
 *  if day==31 => day=1;month++
 * if day<31 =>day++
 * case 6:
 * if day==30 => day=1;month++
 * else day ++
 * case 7:
 *  if day==31 => day=1;month++
 * if day<31 =>day++
 * case 8:
 * if day==31 => day=1;month++
 * if day<31 =>day++
 * case 9:
 *  if day==30 => day=1;month++
 * else day ++
 * case 10:
 * if day==31 => day=1;month++
 * if day<31 =>day++
 * case 11:
 * if day==30 => day=1;month++
 * else day ++
 * case 12:
 * if
 * day==31  =>month=1;year++;
 * if day<31 =>day++
 *
 *
 * OUTPUT:
 * ngày;tháng;năm tiếp theo và trước đó
 */
document.getElementById("next").onclick = function () {
  var day = document.getElementById("ngay").value;
  var month = document.getElementById("thang").value;
  var year = document.getElementById("nam").value;
  switch (month * 1) {
    case 1:
      console.log("ab");
      if (day == 31) {
        day = 1;
        month++;
      } else {
        day++;
      }

      break;
    case 2:
      if (day == 28) {
        day = 1;
        month++;
      } else {
        day++;
      }
      break;
    case 3:
      if (day == 31) {
        day = 1;
        month++;
      } else {
        day++;
      }

      break;
    case 4:
      if (day == 30) {
        day = 1;
        month++;
      } else if (day == 31) {
        alert("Tháng này chỉ có 30 ngày");
      } else {
        day++;
      }
      break;
    case 5:
      if (day == 31) {
        day = 1;
        month++;
      } else {
        day++;
      }
      break;
    case 6:
      if (day == 30) {
        day = 1;
        month++;
      } else if (day == 31) {
        alert("Tháng này chỉ có 30 ngày");
      } else {
        day++;
      }
      break;
    case 7:
      if (day == 31) {
        day = 1;
        month++;
      } else {
        day++;
      }
      break;
    case 8:
      if (day == 31) {
        day = 1;
        month++;
      } else {
        day++;
      }
      break;
    case 9:
      if (day == 30) {
        day = 1;
        month++;
      } else if (day == 31) {
        alert("Tháng này chỉ có 30 ngày");
      } else {
        day++;
      }
      break;
    case 10:
      if (day == 31) {
        day = 1;
        month++;
      } else {
        day++;
      }
      break;
    case 11:
      if (day == 30) {
        day = 1;
        month++;
      } else if (day == 31) {
        alert("Tháng này chỉ có 30 ngày");
      } else {
        day++;
      }
      break;
    case 12:
      if (day == 31) {
        day = 1;
        month = 1;
        year++;
      } else {
        day++;
      }
      break;

    default:
      console.log("lỗi");
  }
  document.getElementById("xuat").innerHTML =
    day + "tháng" + month + "năm" + year;
};
/*nâng cao 2
 * INPUT:tháng năm
 * PROGRAMMING:
 * tạo biến thang
 * tao biến nam
 * tao bien songay
 * nếu  thang ==2 kiểm tra nam nhuận
 * năm nhuận :nam % 4 ==0 && nam % 100 !=0 || nam % 400 ==0
 * songay=29
 * năm không nhuận
 * songay =28
 * nếu thang khác 2 thì 1 3 5 7 8 10 12 có 31 ngày
 * thang <8 && thang % 2 != 0 => songay = 31
 * thang >=8 && thang % 2 ==0 => songay = 31
 * ngược lại có 30 ngày
 *
 * OUTPUT: cho biết tháng có bao nhiêu ngày*/
document.getElementById("checkDays").onclick = function () {
  var thang = document.getElementById("M").value;
  var nam = document.getElementById("Y").value;
  var songay = 0;
  if (thang == 2) {
    if ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0) {
      songay = 29;
    } else {
      songay = 28;
    }
  } else if ((thang < 8 && thang % 2 != 0) || (thang >= 8 && thang % 2 == 0)) {
    songay = 31;
  } else {
    songay = 30;
  }

  document.getElementById("soNgay").innerHTML = songay;
};
/*nâng cao 3
 * INPUT: số nguyên 3 chữ số
 * PROGRAMMING:
 * tạo biến soNguyen chứa giá trị input
 * Tach 3 chữ số :
 * tạo biến hangTram = Math.floor(soNguyen/100)
 * tạo biến hangChuc= Math.floor((soNguyen%100)/10)
 * tạo biến donVi=(soNguyen%100)%10
 *
 * Đọc số:
 * th so sanh nhiều biểu thức sw=case
 * case 1: hangTram="Một",hangChuc="mười";donVi="một"
 * case 2:hangTram="Hai" donVi="Hai" hangChuc="Hai mươi"
 * case 3:hangTram="Ba" donVi="Ba" hangChuc="Ba mươi"
 * case 4:hangTram="Bốn" donVi="Bốn" hangChuc="Bốn mươi"
 * case 5:hangTram="Năm" donVi="Năm" hangChuc="Năm mươi"
 * case 6:hangTram="Sáu" donVi="Sáu" hangChuc="Sáu mươi"
 * case 7:hangTram="Bảy" donVi="Bảy"  hangChuc="Bảy mươi"
 * case 8:hangTram="Tám" donVi="Tám" hangChuc="Tám mươi"
 * case 9:hangTram="Chín" donVi="Chín" hangChuc="Chín mươi"
 * case 0:
 *
 *
 * OUTPUT:đọc  : hangTram+hangChuc+donVi*/
document.getElementById("docSo").onclick = function () {
  var soNguyen = document.getElementById("Num").value;
  var hangTram = Math.floor(soNguyen / 100);
  var hangChuc = Math.floor((soNguyen % 100) / 10);
  var donVi = (soNguyen % 100) % 10;
  console.log(hangTram);
  console.log(hangChuc);
  console.log(donVi);
  switch (hangTram) {
    case 1:
      hangTram = "Một";
      break;
    case 2:
      hangTram = "Hai";
      break;
    case 3:
      hangTram = "ba";
      break;
    case 4:
      hangTram = "bốn";
      break;
    case 5:
      hangTram = "năm";
      break;
    case 6:
      hangTram = "sáu";
      break;
    case 7:
      hangTram = "bảy";
      break;
    case 8:
      hangTram = "tám";

      break;
    case 9:
      hangTram = "Chín";
      break;
    default:
      break;
  }

  switch (hangChuc) {
    case 1:
      hangChuc = "mười ";
      break;
    case 2:
      hangChuc = "Hai mươi";
      break;
    case 3:
      hangChuc = "ba mươi ";

      break;
    case 4:
      hangChuc = "bốn mươi ";

      break;
    case 5:
      hangChuc = "năm mươi ";

      break;
    case 6:
      hangChuc = "sáu mươi ";

      break;
    case 7:
      hangChuc = "bảy mươi ";

      break;
    case 8:
      hangChuc = "tám mươi ";

      break;
    case 9:
      hangChuc = "chín mươi ";

      break;
    case 0:
      hangChuc = "lẻ";

      break;

    default:
      break;
  }
  switch (donVi) {
    case 1:
      donVi = "mốt";
      break;
    case 2:
      donVi = "hai";
      break;
    case 3:
      donVi = "ba";
      break;
    case 4:
      donVi = "bốn";
      break;
    case 5:
      donVi = "năm";
      break;
    case 6:
      donVi = "sáu";
      break;
    case 7:
      donVi = "bảy";
      break;
    case 8:
      donVi = "tám";
      break;
    case 9:
      donVi = "chín";
      break;
    case 0:
      donVi = "";
      break;
    default:
      break;
  }
  if (hangChuc == "lẻ" && donVi === "") {
    hangChuc = "";
  }
  document.getElementById("ReadNumber").innerHTML =
    hangTram + " trăm " + hangChuc + donVi;
};
/*nâng cao 4
 * INPUT:tên và tọa dộ nhà của 3 SV,tọa độ Trường

 * PROGRAMMING:
Tạo biến tenA: nhận giá trị chứa tên
Tạo biến tenB
Tạo biến tenC
x đại diện tung độ;y đại diện hoành độ
Tạo biến xTruong
Tạo biến yTruong
Tạo biến xA
Tạo biến yA
Tạo biến xB
Tạo biến yB
Tạo biến xC
Tạo biến yC
Các biến nhận value tương ứng input
**********Tính 3 khoảng cách:
Công thức tính khoảng cách: KC = Math.sqrt((x-x)*(x-x))+ ((y-y)*(y-y))
tạo biến kcA = Math.sqrt((xTruong - xA)*(xTruong - xA)) + (( yTruong- yA)*(yTruong - yA))
;kcB;kcC tương tự

**********So sánh 3 khoảng cách:
Gọi Max = kcA;
if(kcA < kcB && kcB > kcC)=>kcB=Max ;
if(kcA < kcC && kcB < kcC)=>kcC=Max;
if(kcA == kcC ||kcA == kcB)=> Max=0;
*****Xuất tên SV
switch(Max)
  case kcA:
      Max= tenA +"có khoảng xa trường nhất"
  case kcB:
      Max= tenB +"có khoảng xa trường nhất"
  case kcC:
      Max= tenC +"có khoảng xa trường nhất"
  case 0:
      Max= "Không có sinh viên nào xa trường nhất"
 * OUTPUT: Xuất ten SV có khoảng cách lớn nhất*/
document.getElementById("tinhKC").onclick = function (event) {
  event.preventDefault();
  var tenA = document.getElementById("TênSVA").value;
  var tenB = document.getElementById("TênSVB").value;
  var tenC = document.getElementById("TênSVC").value;

  var xTruong = document.getElementById("TungdoTr").value;
  var yTruong = document.getElementById("HoanhdoTr").value;
  var xA = document.getElementById("TungdoA").value;
  var yA = document.getElementById("HoanhdoA").value;
  var xB = document.getElementById("TungdoB").value;
  var yB = document.getElementById("HoanhdoB").value;
  var xC = document.getElementById("TungdoC").value;
  var yC = document.getElementById("HoanhdoC").value;
  //   Tính 3 khoảng cách:
  var kcA =
    Math.sqrt((xTruong - xA) * (xTruong - xA)) +
    (yTruong - yA) * (yTruong - yA);
  var kcB =
    Math.sqrt((xTruong - xB) * (xTruong - xB)) +
    (yTruong - yB) * (yTruong - yB);
  var kcC =
    Math.sqrt((xTruong - xC) * (xTruong - xC)) +
    (yTruong - yC) * (yTruong - yC);
  // So sánh 3 khoảng cách:
  var Max = kcA;
  if (kcA < kcB && kcB > kcC) {
    Max = kcB;
  }
  if (kcA < kcC && kcB < kcC) {
    Max = kcC;
  }
  if (kcA == kcC || kcA == kcB) {
    Max = 0;
  }
  //   Xuất tên SV
  switch (Max) {
    case kcA:
      Max = tenA + " có khoảng xa trường nhất";
      break;
    case kcB:
      Max = tenB + " có khoảng xa trường nhất";
      break;
    case kcC:
      Max = tenC + " có khoảng xa trường nhất";
      break;

    default:
      Max = "Không có sinh viên nào xa trường nhất";
      break;
  }
  document.getElementById("khoangcach").innerHTML = Max;
};
