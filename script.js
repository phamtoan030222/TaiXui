let soTienNguoiChoi = 1000;

document.getElementById("choiButton").addEventListener("click", function () {
  const tienCuoc = parseFloat(document.getElementById("tienCuoc").value);
  const luaChon = document.getElementById("luaChon").value;
  const soTienElement = document.getElementById("soTien");
  const xucXacResult = document.getElementById("xucXacResult");
  const gameResult = document.getElementById("gameResult");

  // Kiểm tra số tiền cược
  if (isNaN(tienCuoc) || tienCuoc <= 0 || tienCuoc > soTienNguoiChoi) {
    gameResult.textContent = "Số tiền cược không hợp lệ!";
    return;
  }

  // Tạo kết quả xúc xắc ngẫu nhiên
  const xx1 = Math.floor(Math.random() * 6) + 1;
  const xx2 = Math.floor(Math.random() * 6) + 1;
  const xx3 = Math.floor(Math.random() * 6) + 1;
  const tong = xx1 + xx2 + xx3;

  // Hiển thị kết quả xúc xắc
  xucXacResult.textContent = `${xx1} - ${xx2} - ${xx3} (Tổng: ${tong})`;

  // Xét kết quả
  if (tong === 3 || tong === 18) {
    gameResult.textContent = "Nhà cái thắng! Bạn đã thua.";
    soTienNguoiChoi -= tienCuoc;
  } else if (tong >= 4 && tong <= 10) {
    gameResult.textContent = "Kết quả là Xỉu.";
    if (luaChon === "xiu") {
      gameResult.textContent += " Bạn đã thắng!";
      soTienNguoiChoi += tienCuoc;
    } else {
      gameResult.textContent += " Bạn đã thua.";
      soTienNguoiChoi -= tienCuoc;
    }
  } else if (tong >= 11 && tong <= 17) {
    gameResult.textContent = "Kết quả là Tài.";
    if (luaChon === "tai") {
      gameResult.textContent += " Bạn đã thắng!";
      soTienNguoiChoi += tienCuoc;
    } else {
      gameResult.textContent += " Bạn đã thua.";
      soTienNguoiChoi -= tienCuoc;
    }
  }

  // Cập nhật số tiền hiện tại
  soTienElement.textContent = soTienNguoiChoi;

  // Kiểm tra nếu hết tiền
  if (soTienNguoiChoi <= 0) {
    gameResult.textContent = "Bạn đã hết tiền! Trò chơi kết thúc.";
    document.getElementById("choiButton").disabled = true;
  }
});
