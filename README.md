# 🚀 CodePath C++ — دليل النشر الكامل

موقع تعليمي احترافي لدورة C++ بالعربي مع مشغّل كود، اختبارات، وخارطة طريق.

---

## 📁 هيكل الملفات

```
cpp-course/
├── index.html              ← الصفحة الرئيسية (SPA)
├── manifest.json           ← PWA manifest
├── sw.js                   ← Service Worker (offline)
├── assets/
│   ├── css/
│   │   └── main.css        ← نظام التصميم الكامل
│   ├── js/
│   │   ├── data.js         ← كل محتوى الدورة
│   │   └── app.js          ← منطق التطبيق
│   └── icons/
│       ├── icon-192.png    ← أضف أيقونة 192x192
│       └── icon-512.png    ← أضف أيقونة 512x512
└── README.md
```

---

## 🌐 النشر على GitHub Pages (مجاني)

### الخطوة 1: إنشاء Repository
```bash
git init
git add .
git commit -m "🚀 Initial commit: CodePath C++"
```

### الخطوة 2: رفع إلى GitHub
```bash
# أنشئ repository جديد على github.com ثم:
git remote add origin https://github.com/USERNAME/cpp-course.git
git branch -M main
git push -u origin main
```

### الخطوة 3: تفعيل GitHub Pages
- Settings → Pages
- Source: `Deploy from a branch`
- Branch: `main` / `/ (root)`
- حفظ → بعد دقيقتين يعمل الموقع على:

```
https://USERNAME.github.io/cpp-course
```

---

## 🔑 تفعيل Firebase (تسجيل الدخول)

### 1. أنشئ مشروع Firebase
- اذهب إلى: https://console.firebase.google.com
- New Project → اختر اسماً
- ألغِ تفعيل Google Analytics (اختياري)

### 2. فعّل Authentication
- Build → Authentication → Get started
- Sign-in method → فعّل: Google و GitHub

### 3. لـ GitHub Login
- اذهب إلى: https://github.com/settings/developers
- New OAuth App:
  - Homepage URL: `https://YOUR_PROJECT.firebaseapp.com`
  - Callback URL: `https://YOUR_PROJECT.firebaseapp.com/__/auth/handler`
- انسخ Client ID و Client Secret إلى Firebase

### 4. احصل على Config
- Project Settings (⚙️) → Your apps → Add app (Web)
- انسخ firebaseConfig

### 5. أضف إلى الموقع
في `index.html` قبل `</body>` أضف:
```html
<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore-compat.js"></script>
```

في `assets/js/app.js` حدّث `FIREBASE_CONFIG`:
```javascript
const FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  // ...
};
```

وفعّل:
```javascript
STATE.useFirebase = true;
firebase.initializeApp(FIREBASE_CONFIG);
```

---

## ⚡ تفعيل مشغّل الكود (Judge0)

مشغّل الكود يعمل **مجاناً بدون إعداد** عبر Wandbox.org.

للحصول على أداء أفضل وحد تنفيذ أعلى:

### Judge0 RapidAPI (مجاني حتى 50 طلب/يوم)
1. سجّل في: https://rapidapi.com
2. ابحث عن: `Judge0 CE`
3. Subscribe to free plan
4. انسخ API Key
5. في `app.js`:
```javascript
const JUDGE0_KEY = "your_rapidapi_key_here";
```

### أو: Self-host Judge0 (Docker)
```bash
git clone https://github.com/judge0/judge0
cd judge0
docker-compose up
```

---

## 📲 تفعيل PWA (تثبيت كتطبيق)

### أضف الأيقونات
ضع في `assets/icons/`:
- `icon-192.png` (192×192 pixels)
- `icon-512.png` (512×512 pixels)

يمكن توليدهم من: https://maskable.app/editor

### لاختبار PWA محلياً
```bash
npx serve .
# افتح: http://localhost:3000
```

---

## 🔧 تخصيص المحتوى

### إضافة درس جديد
في `assets/js/data.js` ضمن المرحلة المناسبة:
```javascript
{
  id: "X-Y",
  title: "عنوان الدرس",
  duration: "45 دقيقة",
  tags: ["theory", "code"],
  src: "المصدر",
  srcUrl: "https://...",
  content: `
    <h2>عنوان</h2>
    <p>شرح...</p>
    <pre><code>كود...</code></pre>
  `,
  exercise: {
    title: "عنوان التمرين",
    description: "وصف التمرين",
    starterCode: `#include <iostream>\n// ...`
  }
}
```

### إضافة اختبار جديد
```javascript
{
  id: "q11",
  phase: 0,
  level: "مبتدئ", // أو "متوسط" أو "متقدم"
  question: "سؤالك هنا",
  code: `كود اختياري`,
  options: ["خيار 1", "خيار 2", "خيار 3", "خيار 4"],
  correct: 0, // index الإجابة الصحيحة
  explanation: "شرح الإجابة"
}
```

---

## 🎨 تخصيص الألوان

في `assets/css/main.css`:
```css
:root {
  --accent:  #38bdf8;  /* اللون الرئيسي */
  --accent3: #34d399;  /* لون النجاح */
  --bg:      #080b12;  /* الخلفية */
}
```

---

## 📊 إضافة Analytics

### Google Analytics 4
```html
<!-- في index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 📬 للمساهمة والتطوير

1. Fork المشروع
2. أنشئ branch: `git checkout -b feature/new-lesson`
3. أضف تغييراتك
4. Pull Request

---

## 📄 المصادر المستخدمة

- [LearnCpp.com](https://learncpp.com) — CC BY-SA
- [Stanford CS106B](https://web.stanford.edu/class/cs106b/)
- [MIT OCW](https://ocw.mit.edu)
- [cppreference.com](https://en.cppreference.com) — CC BY-SA
- مشغّل الكود: [Wandbox.org](https://wandbox.org) (BSD License)

---

بُني بـ ❤️ لمستقبلك البرمجي 🚀
