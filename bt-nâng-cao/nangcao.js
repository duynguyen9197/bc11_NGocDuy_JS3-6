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
 * INPUT:
 * PROGRAMMING:
 * OUTPUT: */
/*nâng cao 4
 * INPUT:
 * PROGRAMMING:
 * OUTPUT: */
