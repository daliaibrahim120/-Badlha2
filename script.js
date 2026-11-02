// بدّلها ♻️ - الملف النهائي الشامل

// 1. تسجيل الدخول
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        localStorage.setItem("user", username);
        alert("مرحب بيك يا " + username + " 🌱");
        window.location.href = "index.html";
    });
}

// 2. انشاء حساب
const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const fullName = document.getElementById("fullname").value;
        const newUser = document.getElementById("newusername").value;
        localStorage.setItem("user", newUser);
        alert("تم انشاء حسابك يا " + fullName + " بنجاح! 🎉");
        window.location.href = "login.html";
    });
}

// 3. الصفحة الرئيسية - ترحيب
const welcomeText = document.getElementById("welcomeText");
if (welcomeText) {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
        welcomeText.textContent = "مرحباً بك يا " + savedUser + " في بدّلها 🌱";
    }
}

// 4. صفحة الأشياء - طلب تبادل
const exchangeBtns = document.querySelectorAll(".exchangeBtn");
exchangeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const itemName = btn.getAttribute("data-item");
        const user = localStorage.getItem("user") || "زائر";
        alert("شكراً يا " + user + "!\nتم ارسال طلبك لتبادل: " + itemName + " ♻️");
        btn.textContent = "تم الطلب ✅";
        btn.disabled = true;
    });
});

// 5. صفحة من نحن - التعليقات
const commentForm = document.getElementById("commentForm");
if (commentForm) {
    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("comment-name").value;
        alert("شكراً يا " + name + " على تعليقك ♻️ تم الاستلام!");
        commentForm.reset();
    });
}

// 6. صفحة اضف شيئا - اضافة جديدة
const addItemForm = document.getElementById("addItemForm");
if (addItemForm) {
    addItemForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("itemName").value;
        const owner = document.getElementById("itemOwner").value;
        
        // نحفظ الشيء في LocalStorage
        let items = JSON.parse(localStorage.getItem("badelha_items") || "[]");
        items.push({
            name: name,
            owner: owner,
            desc: document.getElementById("itemDesc").value,
            date: new Date().toLocaleDateString('ar-EG')
        });
        localStorage.setItem("badelha_items", JSON.stringify(items));

        alert("تم نشر: " + name + "\nبواسطة: " + owner + " ✅\nسيظهر الآن في صفحة الأشياء المعروضة");
        window.location.href = "items.html";
    });
}

console.log("موقع بدّلها شغال ✅");
