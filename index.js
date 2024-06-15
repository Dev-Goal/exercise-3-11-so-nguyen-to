let number = Number(prompt("Hãy nhập vào số lượng SNT mà bạn muốn hiển thị"));
while (!Number.isInteger(number) || number < 0) {
  number = Number(
    prompt(
      "Số bạn vừa nhập không phải là số nguyên dương, vui lòng nhập lại một số khác"
    )
  );
}
checkNT(number);
function checkNT(number) {
  let count = 0;
  let countSNT = 0;
  for (let n = 2; n < 1000; n++) {
    if (countSNT < number) {
      for (let j = 1; j <= n; j++) {
        if (n % j == 0) {
          count += 1;
        }
      }
      if (count == 2) {
        document.write(n + "<br>");
        countSNT += 1;
      }
      count = 0;
    } else {
        document.write("Tổng số nguyên tố hiển thị là " + countSNT);
        break;
    }
  }
}

