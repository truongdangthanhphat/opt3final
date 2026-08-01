// Extra 1: Custom JavaScript - Tương tác DOM và hiện thông báo động khi click nút
document.addEventListener("DOMContentLoaded", () => {
    const alertBtn = document.getElementById("alertBtn");
    if (alertBtn) {
        alertBtn.addEventListener("click", () => {
            alert("Chúc mừng bạn đã nhận được mã giảm giá 20% cho lần ghé quán đầu tiên!");
        });
    }
});