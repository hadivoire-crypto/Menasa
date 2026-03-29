// ═══════════════════════════════════════════════════════
//  CODEPATH C++ — DATA LAYER
//  All course content, quizzes, resources
// ═══════════════════════════════════════════════════════

window.CPP_DATA = {

// ─── PHASES ───────────────────────────────────────────
phases: [
  {
    id: 0,
    icon: "⚙️",
    name: "البيئة والأساسيات",
    subtitle: "المرحلة صفر — الانطلاقة",
    color: "#4f9eff",
    colorBg: "rgba(79,158,255,0.12)",
    duration: "أسبوع",
    lessons: [
      {
        id: "0-0",
        title: "تثبيت البيئة الاحترافية",
        duration: "45 دقيقة",
        tags: ["theory","code"],
        src: "LearnCpp.com — الفصل 0",
        srcUrl: "https://www.learncpp.com/cpp-tutorial/introduction-to-these-tutorials/",
        content: `
<h2>🛠 إعداد بيئة التطوير</h2>
<p>قبل كتابة أي كود، نحتاج إلى أدوات احترافية. سنثبّت ثلاثة أشياء:</p>

<h3>1. VS Code — المحرر</h3>
<p>محرر النصوص الأقوى والأخف وزناً. حمّله من <a href="https://code.visualstudio.com" target="_blank">code.visualstudio.com</a></p>
<p>بعد التثبيت، ثبّت هذه الإضافات:</p>
<ul>
  <li><strong>C/C++ (Microsoft)</strong> — Intellisense وDebugging</li>
  <li><strong>C/C++ Extension Pack</strong> — حزمة كاملة</li>
  <li><strong>Code Runner</strong> — تشغيل الكود بضغطة زر</li>
</ul>

<h3>2. GCC — المُترجم</h3>
<p><strong>Windows:</strong> ثبّت <a href="https://www.msys2.org" target="_blank">MSYS2</a> ثم شغّل في Terminal:</p>
<pre><code>pacman -S mingw-w64-ucrt-x86_64-gcc</code></pre>
<p><strong>Mac:</strong> ثبّت Xcode Command Line Tools:</p>
<pre><code>xcode-select --install</code></pre>
<p><strong>Linux (Ubuntu/Debian):</strong></p>
<pre><code>sudo apt update && sudo apt install build-essential</code></pre>

<h3>3. التحقق من التثبيت</h3>
<p>افتح Terminal وتأكد:</p>
<pre><code>g++ --version
# يجب أن تظهر نسخة مثل: g++ 13.x.x</code></pre>

<h3>🎯 هيكل المشروع الاحترافي</h3>
<pre><code>my_project/
├── src/
│   └── main.cpp
├── include/
│   └── utils.h
├── build/
└── README.md</code></pre>

<div class="lesson-tip">
  💡 <strong>نصيحة:</strong> استخدم دائماً المجلدات من اليوم الأول. الكود المنظم يوفّر عليك ساعات لاحقاً.
</div>
        `,
        exercise: {
          title: "تحقق من بيئتك",
          description: "ثبّت GCC وتأكد أن الأمر g++ --version يعمل، ثم شغّل الكود التالي في مشغّل الكود:",
          starterCode: `#include <iostream>

int main() {
    std::cout << "بيئتي تعمل بشكل مثالي!" << std::endl;
    std::cout << "مرحباً بك في رحلة C++" << std::endl;
    return 0;
}`
        }
      },
      {
        id: "0-1",
        title: "برنامجك الأول: Hello World",
        duration: "30 دقيقة",
        tags: ["code"],
        src: "LearnCpp — الفصل 1",
        srcUrl: "https://www.learncpp.com/cpp-tutorial/writing-your-first-program/",
        content: `
<h2>👋 برنامجك الأول</h2>
<p>كل رحلة تبدأ بخطوة. في C++، الخطوة الأولى هي Hello World.</p>

<h3>الكود الكامل مع الشرح</h3>
<pre><code><span class="cmt">// هذا سطر تعليق — لا يُنفَّذ، فقط للشرح</span>
<span class="kw">#include</span> <span class="str">&lt;iostream&gt;</span>  <span class="cmt">// مكتبة الإدخال والإخراج</span>

<span class="kw">int</span> <span class="fn">main</span>() {        <span class="cmt">// نقطة بداية كل برنامج C++</span>
    std::<span class="fn">cout</span> &lt;&lt; <span class="str">"Hello, World!"</span> &lt;&lt; std::endl;
    <span class="cmt">// cout = character output</span>
    <span class="cmt">// << = عامل الإرسال</span>
    <span class="cmt">// endl = نهاية السطر + تفريغ Buffer</span>
    
    <span class="kw">return</span> <span class="num">0</span>;  <span class="cmt">// 0 يعني "البرنامج انتهى بنجاح"</span>
}</code></pre>

<h3>📌 مفاهيم أساسية</h3>
<ul>
  <li><strong>#include</strong> — توجيه للمُترجم لإدراج مكتبة</li>
  <li><strong>main()</strong> — الدالة الرئيسية، تُنفَّذ أولاً دائماً</li>
  <li><strong>std::</strong> — مساحة الأسماء القياسية (Standard)</li>
  <li><strong>;</strong> — كل جملة تنتهي بفاصلة منقوطة، لا استثناء</li>
</ul>

<h3>using namespace std</h3>
<pre><code><span class="kw">#include</span> <span class="str">&lt;iostream&gt;</span>
<span class="kw">using namespace</span> std;  <span class="cmt">// نكتب cout بدلاً من std::cout</span>

<span class="kw">int</span> <span class="fn">main</span>() {
    cout &lt;&lt; <span class="str">"أبسط!"</span> &lt;&lt; endl;
    <span class="kw">return</span> <span class="num">0</span>;
}</code></pre>
<div class="lesson-tip">⚠️ <strong>تحذير:</strong> using namespace std مريحة للتعلم لكن تجنّبها في مشاريع كبيرة لتفادي تضارب الأسماء.</div>
        `,
        exercise: {
          title: "قدّم نفسك",
          description: "اكتب برنامجاً يطبع اسمك وهدفك البرمجي",
          starterCode: `#include <iostream>
using namespace std;

int main() {
    // اكتب هنا: اطبع اسمك وهدفك البرمجي
    cout << "اسمي: " << endl;
    cout << "هدفي: " << endl;
    return 0;
}`
        }
      },
      {
        id: "0-2",
        title: "المتغيرات وأنواع البيانات",
        duration: "60 دقيقة",
        tags: ["theory","code","quiz"],
        src: "LearnCpp — الفصل 4",
        srcUrl: "https://www.learncpp.com/cpp-tutorial/introduction-to-fundamental-data-types/",
        content: `
<h2>📦 المتغيرات وأنواع البيانات</h2>
<p>المتغير هو صندوق في الذاكرة له اسم وحجم ونوع. اختيار النوع الصحيح مهم للأداء.</p>

<h3>الأنواع الأساسية</h3>
<pre><code><span class="cmt">// الأعداد الصحيحة</span>
<span class="tp">int</span> age = <span class="num">20</span>;           <span class="cmt">// 4 bytes: من -2B إلى 2B</span>
<span class="tp">short</span> score = <span class="num">100</span>;      <span class="cmt">// 2 bytes: من -32768 إلى 32767</span>
<span class="tp">long long</span> bigNum = <span class="num">9999999999LL</span>;  <span class="cmt">// 8 bytes</span>
<span class="tp">unsigned int</span> positive = <span class="num">42</span>;    <span class="cmt">// بدون سالب: ضعف النطاق</span>

<span class="cmt">// الأعداد العشرية</span>
<span class="tp">float</span> price = <span class="num">9.99f</span>;    <span class="cmt">// 4 bytes: دقة 7 خانات</span>
<span class="tp">double</span> pi = <span class="num">3.14159265</span>; <span class="cmt">// 8 bytes: دقة 15 خانة ✅ الأفضل</span>

<span class="cmt">// الحروف والنصوص</span>
<span class="tp">char</span> grade = <span class="str">'A'</span>;       <span class="cmt">// 1 byte: حرف واحد فقط</span>
<span class="tp">string</span> name = <span class="str">"أحمد"</span>;   <span class="cmt">// نص (يحتاج #include &lt;string&gt;)</span>

<span class="cmt">// المنطقي</span>
<span class="tp">bool</span> isStudent = <span class="kw">true</span>;  <span class="cmt">// true أو false فقط</span></code></pre>

<h3>auto — اكتشاف النوع تلقائياً (C++11)</h3>
<pre><code><span class="kw">auto</span> x = <span class="num">42</span>;        <span class="cmt">// المُترجم يعرف: int</span>
<span class="kw">auto</span> y = <span class="num">3.14</span>;      <span class="cmt">// double</span>
<span class="kw">auto</span> z = <span class="str">"hello"s</span>;  <span class="cmt">// std::string</span></code></pre>

<h3>sizeof — حجم النوع في الذاكرة</h3>
<pre><code>cout &lt;&lt; <span class="kw">sizeof</span>(<span class="tp">int</span>) &lt;&lt; <span class="str">" bytes"</span> &lt;&lt; endl;    <span class="cmt">// 4</span>
cout &lt;&lt; <span class="kw">sizeof</span>(<span class="tp">double</span>) &lt;&lt; <span class="str">" bytes"</span> &lt;&lt; endl; <span class="cmt">// 8</span></code></pre>

<div class="lesson-tip">💡 <strong>القاعدة الذهبية:</strong> استخدم <code>int</code> للأعداد الصحيحة العادية، <code>double</code> للعشرية، <code>string</code> للنصوص. لا تفكّر كثيراً في الأنواع الأخرى في البداية.</div>
        `,
        exercise: {
          title: "بطاقة التعريف",
          description: "أنشئ متغيرات تعبّر عن نفسك واطبعها بشكل منظم",
          starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // عرّف هذه المتغيرات وامنحها قيمك الحقيقية
    string name = "";
    int age = 0;
    double gpa = 0.0;
    bool lovesCode = true;
    char favLang = 'C';
    
    // اطبعها بشكل جميل
    cout << "=== بطاقة التعريف ===" << endl;
    // أكمل هنا...
    
    return 0;
}`
        }
      },
      {
        id: "0-3",
        title: "العمليات الحسابية والمنطقية",
        duration: "45 دقيقة",
        tags: ["code","quiz"],
        src: "LearnCpp — الفصل 5",
        srcUrl: "https://www.learncpp.com/cpp-tutorial/arithmetic-operators/",
        content: `
<h2>🔢 العمليات والمعاملات</h2>

<h3>العمليات الحسابية</h3>
<pre><code><span class="tp">int</span> a = <span class="num">10</span>, b = <span class="num">3</span>;

cout &lt;&lt; a + b &lt;&lt; endl;   <span class="cmt">// 13 — الجمع</span>
cout &lt;&lt; a - b &lt;&lt; endl;   <span class="cmt">// 7  — الطرح</span>
cout &lt;&lt; a * b &lt;&lt; endl;   <span class="cmt">// 30 — الضرب</span>
cout &lt;&lt; a / b &lt;&lt; endl;   <span class="cmt">// 3  — القسمة الصحيحة! (يُهمَل الكسر)</span>
cout &lt;&lt; a % b &lt;&lt; endl;   <span class="cmt">// 1  — باقي القسمة (modulo)</span>

<span class="cmt">// للحصول على قسمة حقيقية:</span>
cout &lt;&lt; (<span class="tp">double</span>)a / b &lt;&lt; endl;  <span class="cmt">// 3.333... ← casting</span></code></pre>

<h3>عمليات الزيادة والنقصان</h3>
<pre><code><span class="tp">int</span> x = <span class="num">5</span>;
x++;   <span class="cmt">// x = 6  (بعد الاستخدام)</span>
++x;   <span class="cmt">// x = 7  (قبل الاستخدام)</span>
x--;   <span class="cmt">// x = 6</span>
x += <span class="num">10</span>; <span class="cmt">// x = 16 (مختصر x = x + 10)</span>
x *= <span class="num">2</span>;  <span class="cmt">// x = 32</span></code></pre>

<h3>عمليات المقارنة</h3>
<pre><code>cout &lt;&lt; (<span class="num">5</span> == <span class="num">5</span>) &lt;&lt; endl;  <span class="cmt">// 1 (true)</span>
cout &lt;&lt; (<span class="num">5</span> != <span class="num">3</span>) &lt;&lt; endl;  <span class="cmt">// 1 (true)</span>
cout &lt;&lt; (<span class="num">5</span> &gt; <span class="num">3</span>)  &lt;&lt; endl;  <span class="cmt">// 1 (true)</span>
cout &lt;&lt; (<span class="num">5</span> &lt;= <span class="num">5</span>) &lt;&lt; endl;  <span class="cmt">// 1 (true)</span></code></pre>

<h3>العمليات المنطقية</h3>
<pre><code><span class="tp">bool</span> a = <span class="kw">true</span>, b = <span class="kw">false</span>;
cout &lt;&lt; (a &amp;&amp; b) &lt;&lt; endl;  <span class="cmt">// 0 — AND: كلاهما true</span>
cout &lt;&lt; (a || b) &lt;&lt; endl;  <span class="cmt">// 1 — OR: أحدهما true</span>
cout &lt;&lt; (!a) &lt;&lt; endl;      <span class="cmt">// 0 — NOT: عكس القيمة</span></code></pre>
        `,
        exercise: {
          title: "حاسبة درجات",
          description: "احسب المعدل وحدد التقدير",
          starterCode: `#include <iostream>
using namespace std;

int main() {
    double math = 85.5, english = 90.0, science = 78.5;
    
    // احسب المعدل
    double average = 0; // أكمل الحساب
    
    // اطبع النتيجة
    cout << "المعدل: " << average << endl;
    
    // % modulo مفيدة لماذا؟ جرّب:
    cout << "100 % 7 = " << 100 % 7 << endl;
    
    return 0;
}`
        }
      },
      {
        id: "0-4",
        title: "الإدخال من المستخدم (cin)",
        duration: "30 دقيقة",
        tags: ["code"],
        src: "LearnCpp — الفصل 1",
        srcUrl: "https://www.learncpp.com/cpp-tutorial/introduction-to-iostream-cout-cin-and-endl/",
        content: `
<h2>⌨️ الإدخال والإخراج</h2>

<h3>cin — قراءة من المستخدم</h3>
<pre><code><span class="tp">int</span> age;
cout &lt;&lt; <span class="str">"أدخل عمرك: "</span>;
cin &gt;&gt; age;  <span class="cmt">// >> عامل الاستخراج</span>
cout &lt;&lt; <span class="str">"عمرك: "</span> &lt;&lt; age &lt;&lt; endl;</code></pre>

<h3>قراءة متعددة</h3>
<pre><code><span class="tp">string</span> first, last;
cout &lt;&lt; <span class="str">"الاسم الأول: "</span>;
cin &gt;&gt; first;
cout &lt;&lt; <span class="str">"الاسم الأخير: "</span>;
cin &gt;&gt; last;
cout &lt;&lt; <span class="str">"مرحباً "</span> &lt;&lt; first &lt;&lt; <span class="str">" "</span> &lt;&lt; last &lt;&lt; endl;</code></pre>

<h3>getline — قراءة سطر كامل</h3>
<pre><code><span class="tp">string</span> fullName;
cout &lt;&lt; <span class="str">"اسمك الكامل: "</span>;
getline(cin, fullName);  <span class="cmt">// يقرأ المسافات أيضاً</span>
cout &lt;&lt; <span class="str">"أهلاً "</span> &lt;&lt; fullName &lt;&lt; endl;</code></pre>

<div class="lesson-tip">⚠️ <strong>مشكلة شائعة:</strong> إذا استخدمت cin ثم getline، ستجد مشكلة في السطر. الحل: أضف <code>cin.ignore();</code> بين الاثنين.</div>
        `,
        exercise: {
          title: "بطاقة تعريف تفاعلية",
          description: "اسأل المستخدم عن بياناته واطبعها منسقة",
          starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    int age;
    string goal;
    
    cout << "=== مرحباً بك في CodePath C++ ===" << endl;
    cout << "ما اسمك؟ ";
    getline(cin, name);
    
    cout << "كم عمرك؟ ";
    cin >> age;
    cin.ignore();
    
    cout << "ما هدفك البرمجي؟ ";
    getline(cin, goal);
    
    // اطبع ملخصاً جميلاً
    cout << "\n=== ملفك الشخصي ===" << endl;
    // أكمل هنا...
    
    return 0;
}`
        }
      },
      {
        id: "0-5",
        title: "🔨 مشروع: آلة حاسبة ذكية",
        duration: "90 دقيقة",
        tags: ["project"],
        src: "مشروع تطبيقي",
        srcUrl: "",
        content: `
<h2>🔨 المشروع الأول: آلة حاسبة ذكية</h2>
<p>سنبني آلة حاسبة تدعم العمليات الأربعة مع معالجة الأخطاء.</p>

<h3>المتطلبات</h3>
<ul>
  <li>✅ قراءة رقمين من المستخدم</li>
  <li>✅ اختيار العملية (+، -، *، /)</li>
  <li>✅ حساب النتيجة وطباعتها</li>
  <li>✅ معالجة القسمة على صفر</li>
  <li>⭐ تكرار حتى يختار المستخدم الخروج</li>
</ul>

<h3>الكود الهيكلي</h3>
<pre><code><span class="kw">#include</span> <span class="str">&lt;iostream&gt;</span>
<span class="kw">using namespace</span> std;

<span class="kw">int</span> <span class="fn">main</span>() {
    <span class="tp">double</span> a, b;
    <span class="tp">char</span> op;
    
    cout &lt;&lt; <span class="str">"أدخل المعادلة (مثال: 5 + 3): "</span>;
    cin &gt;&gt; a &gt;&gt; op &gt;&gt; b;
    
    <span class="cmt">// أكمل باقي المنطق...</span>
    
    <span class="kw">return</span> <span class="num">0</span>;
}</code></pre>
        `,
        exercise: {
          title: "آلة حاسبة ذكية",
          description: "ابنِ الآلة الحاسبة الكاملة مع معالجة القسمة على صفر",
          starterCode: `#include <iostream>
using namespace std;

int main() {
    double a, b, result;
    char op;
    
    cout << "=== الآلة الحاسبة الذكية ===" << endl;
    cout << "أدخل المعادلة (مثال: 10 + 5): ";
    cin >> a >> op >> b;
    
    // هنا يأتي منطقك:
    // تحقق من العملية وحساب النتيجة
    // تحقق من القسمة على صفر
    
    cout << a << " " << op << " " << b << " = " << result << endl;
    
    return 0;
}`
        }
      },
    ]
  },
  {
    id: 1,
    icon: "🔀",
    name: "التحكم في التدفق",
    subtitle: "المرحلة 1 — اتخاذ القرارات",
    color: "#00d4a0",
    colorBg: "rgba(0,212,160,0.12)",
    duration: "أسبوعان",
    lessons: [
      {
        id: "1-0",
        title: "الشرط if / else if / else",
        duration: "45 دقيقة",
        tags: ["theory","code","quiz"],
        src: "LearnCpp — الفصل 7",
        srcUrl: "https://www.learncpp.com/cpp-tutorial/if-statements-and-blocks/",
        content: `
<h2>🔀 التحكم في التدفق</h2>
<p>البرامج الحقيقية تتخذ قرارات. <code>if/else</code> هو أداة القرار الأساسية.</p>

<h3>البنية الأساسية</h3>
<pre><code><span class="tp">int</span> score = <span class="num">85</span>;

<span class="kw">if</span> (score >= <span class="num">90</span>) {
    cout &lt;&lt; <span class="str">"ممتاز 🏆"</span> &lt;&lt; endl;
} <span class="kw">else if</span> (score >= <span class="num">80</span>) {
    cout &lt;&lt; <span class="str">"جيد جداً ✅"</span> &lt;&lt; endl;
} <span class="kw">else if</span> (score >= <span class="num">70</span>) {
    cout &lt;&lt; <span class="str">"جيد 👍"</span> &lt;&lt; endl;
} <span class="kw">else</span> {
    cout &lt;&lt; <span class="str">"يحتاج مراجعة 📚"</span> &lt;&lt; endl;
}</code></pre>

<h3>العامل الثلاثي Ternary</h3>
<pre><code><span class="cmt">// condition ? value_if_true : value_if_false</span>
<span class="tp">int</span> age = <span class="num">20</span>;
<span class="tp">string</span> status = (age >= <span class="num">18</span>) ? <span class="str">"بالغ"</span> : <span class="str">"قاصر"</span>;
cout &lt;&lt; status &lt;&lt; endl;  <span class="cmt">// بالغ</span></code></pre>

<h3>switch-case</h3>
<pre><code><span class="tp">char</span> grade = <span class="str">'B'</span>;
<span class="kw">switch</span> (grade) {
    <span class="kw">case</span> <span class="str">'A'</span>: cout &lt;&lt; <span class="str">"ممتاز"</span>; <span class="kw">break</span>;
    <span class="kw">case</span> <span class="str">'B'</span>: cout &lt;&lt; <span class="str">"جيد جداً"</span>; <span class="kw">break</span>;
    <span class="kw">case</span> <span class="str">'C'</span>: cout &lt;&lt; <span class="str">"جيد"</span>; <span class="kw">break</span>;
    <span class="kw">default</span>: cout &lt;&lt; <span class="str">"راجع مع الأستاذ"</span>;
}</code></pre>

<div class="lesson-tip">⚠️ <strong>لا تنسَ break!</strong> بدونه، سيستمر التنفيذ في الـ case التالية (fall-through).</div>
        `,
        exercise: {
          title: "نظام تقييم الطلاب",
          description: "اكتب برنامجاً يحوّل الدرجة إلى تقدير حرفي",
          starterCode: `#include <iostream>
using namespace std;

int main() {
    double score;
    cout << "أدخل درجتك (0-100): ";
    cin >> score;
    
    // استخدم if/else if/else لتحديد التقدير
    // A+: 95-100, A: 90-94, B+: 85-89, B: 80-84
    // C+: 75-79, C: 70-74, D: 60-69, F: أقل من 60
    
    string grade = "";
    // أكمل هنا...
    
    cout << "تقديرك: " << grade << endl;
    return 0;
}`
        }
      },
      {
        id: "1-1",
        title: "الحلقات: for و while",
        duration: "60 دقيقة",
        tags: ["code","quiz"],
        src: "LearnCpp — الفصل 8",
        srcUrl: "https://www.learncpp.com/cpp-tutorial/introduction-to-loops-and-while-statements/",
        content: `
<h2>🔁 الحلقات التكرارية</h2>

<h3>حلقة while</h3>
<pre><code><span class="tp">int</span> i = <span class="num">1</span>;
<span class="kw">while</span> (i &lt;= <span class="num">5</span>) {
    cout &lt;&lt; i &lt;&lt; <span class="str">" "</span>;
    i++;
}
<span class="cmt">// الناتج: 1 2 3 4 5</span></code></pre>

<h3>حلقة for (الأشهر)</h3>
<pre><code><span class="cmt">// for (تهيئة; شرط; تحديث)</span>
<span class="kw">for</span> (<span class="tp">int</span> i = <span class="num">0</span>; i &lt; <span class="num">5</span>; i++) {
    cout &lt;&lt; i &lt;&lt; <span class="str">" "</span>;
}
<span class="cmt">// الناتج: 0 1 2 3 4</span></code></pre>

<h3>range-based for (C++11)</h3>
<pre><code>vector&lt;<span class="tp">int</span>&gt; nums = {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>};
<span class="kw">for</span> (<span class="tp">int</span> n : nums) {
    cout &lt;&lt; n * n &lt;&lt; <span class="str">" "</span>;
}
<span class="cmt">// الناتج: 1 4 9 16 25</span></code></pre>

<h3>break و continue</h3>
<pre><code><span class="kw">for</span> (<span class="tp">int</span> i = <span class="num">0</span>; i &lt; <span class="num">10</span>; i++) {
    <span class="kw">if</span> (i == <span class="num">3</span>) <span class="kw">continue</span>;  <span class="cmt">// تخطّى 3</span>
    <span class="kw">if</span> (i == <span class="num">7</span>) <span class="kw">break</span>;     <span class="cmt">// أوقف عند 7</span>
    cout &lt;&lt; i &lt;&lt; <span class="str">" "</span>;
}
<span class="cmt">// الناتج: 0 1 2 4 5 6</span></code></pre>
        `,
        exercise: {
          title: "لعبة تخمين الرقم",
          description: "ابنِ لعبة تخمين الرقم مع عدد محدود من المحاولات",
          starterCode: `#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {
    srand(time(0));
    int secret = rand() % 100 + 1;  // رقم عشوائي 1-100
    int guess, attempts = 0, maxAttempts = 7;
    
    cout << "🎮 لعبة التخمين!" << endl;
    cout << "خمّن رقماً بين 1 و 100 (لديك " << maxAttempts << " محاولات)" << endl;
    
    // استخدم while loop
    // اعطِ تلميحات: "أكبر" أو "أصغر"
    // احسب عدد المحاولات
    
    return 0;
}`
        }
      },
      {
        id: "1-2",
        title: "🔨 مشروع: جدول الضرب + الأعداد الأولية",
        duration: "75 دقيقة",
        tags: ["project"],
        src: "مشروع تطبيقي",
        srcUrl: "",
        content: `
<h2>🔨 مشروع الحلقات</h2>
<p>مشروعان في واحد — جدول الضرب ثم الأعداد الأولية.</p>

<h3>الجزء الأول: جدول الضرب</h3>
<pre><code><span class="cmt">// اطبع جدول ضرب 10x10</span>
<span class="kw">for</span> (<span class="tp">int</span> i = <span class="num">1</span>; i &lt;= <span class="num">10</span>; i++) {
    <span class="kw">for</span> (<span class="tp">int</span> j = <span class="num">1</span>; j &lt;= <span class="num">10</span>; j++) {
        cout &lt;&lt; i * j &lt;&lt; <span class="str">"\t"</span>;
    }
    cout &lt;&lt; endl;
}</code></pre>

<h3>الجزء الثاني: الأعداد الأولية</h3>
<p>العدد الأولي هو الذي لا يقبل القسمة إلا على 1 وعلى نفسه.</p>
<pre><code><span class="cmt">// هل n عدد أولي؟</span>
<span class="tp">bool</span> <span class="fn">isPrime</span>(<span class="tp">int</span> n) {
    <span class="kw">if</span> (n &lt;= <span class="num">1</span>) <span class="kw">return false</span>;
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="num">2</span>; i * i &lt;= n; i++) {
        <span class="kw">if</span> (n % i == <span class="num">0</span>) <span class="kw">return false</span>;
    }
    <span class="kw">return true</span>;
}</code></pre>
        `,
        exercise: {
          title: "مولّد الأعداد الأولية",
          description: "اطبع جميع الأعداد الأولية حتى 100 مع عدّها",
          starterCode: `#include <iostream>
using namespace std;

bool isPrime(int n) {
    // اكتب الدالة هنا
    return false;
}

int main() {
    int count = 0;
    cout << "الأعداد الأولية حتى 100:" << endl;
    
    for (int i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            cout << i << " ";
            count++;
        }
    }
    
    cout << "\nالمجموع: " << count << " عدداً أولياً" << endl;
    return 0;
}`
        }
      },
    ]
  },
  {
    id: 2,
    icon: "🔧",
    name: "الدوال والنطاق",
    subtitle: "المرحلة 2 — تنظيم الكود",
    color: "#ffd166",
    colorBg: "rgba(255,209,102,0.12)",
    duration: "أسبوعان",
    lessons: [
      {
        id: "2-0",
        title: "الدوال — الأساس",
        duration: "60 دقيقة",
        tags: ["theory","code","quiz"],
        src: "LearnCpp — الفصل 2",
        srcUrl: "https://www.learncpp.com/cpp-tutorial/introduction-to-functions/",
        content: `
<h2>🔧 الدوال Functions</h2>
<p>الدوال هي لبنة بناء البرمجة. بدلاً من تكرار الكود، تضعه في دالة وتستدعيها.</p>

<h3>بنية الدالة</h3>
<pre><code><span class="cmt">// نوع_الإرجاع اسم_الدالة(المعاملات)</span>
<span class="tp">int</span> <span class="fn">add</span>(<span class="tp">int</span> a, <span class="tp">int</span> b) {
    <span class="kw">return</span> a + b;
}

<span class="kw">void</span> <span class="fn">greet</span>(<span class="tp">string</span> name) {  <span class="cmt">// void = لا ترجع قيمة</span>
    cout &lt;&lt; <span class="str">"مرحباً "</span> &lt;&lt; name &lt;&lt; endl;
}

<span class="kw">int</span> <span class="fn">main</span>() {
    <span class="tp">int</span> result = <span class="fn">add</span>(<span class="num">3</span>, <span class="num">5</span>);  <span class="cmt">// 8</span>
    <span class="fn">greet</span>(<span class="str">"أحمد"</span>);            <span class="cmt">// مرحباً أحمد</span>
    <span class="kw">return</span> <span class="num">0</span>;
}</code></pre>

<h3>القيم الافتراضية</h3>
<pre><code><span class="tp">void</span> <span class="fn">printLine</span>(<span class="tp">char</span> c = <span class="str">'-'</span>, <span class="tp">int</span> len = <span class="num">20</span>) {
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="num">0</span>; i &lt; len; i++) cout &lt;&lt; c;
    cout &lt;&lt; endl;
}

<span class="fn">printLine</span>();         <span class="cmt">// --------------------</span>
<span class="fn">printLine</span>(<span class="str">'='</span>);      <span class="cmt">// ====================</span>
<span class="fn">printLine</span>(<span class="str">'*'</span>, <span class="num">10</span>); <span class="cmt">// **********</span></code></pre>

<h3>التمرير بالمرجع (Pass by Reference)</h3>
<pre><code><span class="kw">void</span> <span class="fn">swap</span>(<span class="tp">int</span>&amp; a, <span class="tp">int</span>&amp; b) {  <span class="cmt">// & = مرجع</span>
    <span class="tp">int</span> temp = a;
    a = b;
    b = temp;
}

<span class="tp">int</span> x = <span class="num">5</span>, y = <span class="num">10</span>;
<span class="fn">swap</span>(x, y);
cout &lt;&lt; x &lt;&lt; <span class="str">" "</span> &lt;&lt; y;  <span class="cmt">// 10 5 ← تغيّرا فعلاً!</span></code></pre>
        `,
        exercise: {
          title: "مكتبة رياضية",
          description: "اكتب دوال: max، min، power، isEven، sumDigits",
          starterCode: `#include <iostream>
using namespace std;

// أعد أكبر عددين
int maxOf(int a, int b) {
    // أكمل
}

// أعد a^b (بدون pow())
double power(double base, int exp) {
    // أكمل
}

// هل العدد زوجي؟
bool isEven(int n) {
    // أكمل
}

// مجموع أرقام العدد (sumDigits(123) = 6)
int sumDigits(int n) {
    // أكمل
}

int main() {
    cout << "max(7,3) = " << maxOf(7, 3) << endl;
    cout << "2^10 = " << power(2, 10) << endl;
    cout << "isEven(42) = " << isEven(42) << endl;
    cout << "sumDigits(123) = " << sumDigits(123) << endl;
    return 0;
}`
        }
      },
      {
        id: "2-1",
        title: "التكرار الذاتي Recursion",
        duration: "60 دقيقة",
        tags: ["theory","code","quiz"],
        src: "LearnCpp — الفصل 19",
        srcUrl: "https://www.learncpp.com/cpp-tutorial/introduction-to-recursion/",
        content: `
<h2>🌀 الاستدعاء الذاتي (Recursion)</h2>
<p>الدالة تستدعي نفسها لحل مشكلة أصغر. قوية جداً لكن تحتاج انتباهاً.</p>

<h3>المبدأ الأساسي</h3>
<pre><code><span class="cmt">// كل دالة تكرارية تحتاج:</span>
<span class="cmt">// 1. Base case — حالة التوقف</span>
<span class="cmt">// 2. Recursive case — استدعاء أصغر</span>

<span class="tp">int</span> <span class="fn">factorial</span>(<span class="tp">int</span> n) {
    <span class="kw">if</span> (n &lt;= <span class="num">1</span>) <span class="kw">return</span> <span class="num">1</span>;     <span class="cmt">// Base case</span>
    <span class="kw">return</span> n * <span class="fn">factorial</span>(n-<span class="num">1</span>);  <span class="cmt">// Recursive case</span>
}

<span class="cmt">// factorial(5)</span>
<span class="cmt">// = 5 × factorial(4)</span>
<span class="cmt">// = 5 × 4 × factorial(3)</span>
<span class="cmt">// = 5 × 4 × 3 × 2 × 1 = 120</span></code></pre>

<h3>متتالية فيبوناتشي</h3>
<pre><code><span class="tp">int</span> <span class="fn">fib</span>(<span class="tp">int</span> n) {
    <span class="kw">if</span> (n &lt;= <span class="num">1</span>) <span class="kw">return</span> n;
    <span class="kw">return</span> <span class="fn">fib</span>(n-<span class="num">1</span>) + <span class="fn">fib</span>(n-<span class="num">2</span>);
}
<span class="cmt">// fib(0)=0, fib(1)=1, fib(6)=8</span></code></pre>

<div class="lesson-tip">⚠️ <strong>خطر Stack Overflow:</strong> إذا نسيت الـ base case أو كانت خاطئة، ستستدعي الدالة نفسها إلى ما لا نهاية وسيتوقف البرنامج. دائماً تأكد من الـ base case أولاً.</div>
        `,
        exercise: {
          title: "خوارزميات تكرارية",
          description: "اكتب: GCD، قلب نص، مجموع 1 إلى n",
          starterCode: `#include <iostream>
#include <string>
using namespace std;

// القاسم المشترك الأكبر (Euclidean algorithm)
int gcd(int a, int b) {
    if (b == 0) return a;
    // أكمل
}

// مجموع 1+2+...+n
int sum(int n) {
    // أكمل بالتكرار الذاتي
}

// قلب نص: "hello" -> "olleh"
string reverse(string s) {
    if (s.length() <= 1) return s;
    // أكمل
}

int main() {
    cout << "gcd(48, 18) = " << gcd(48, 18) << endl;  // 6
    cout << "sum(10) = " << sum(10) << endl;           // 55
    cout << "reverse(hello) = " << reverse("hello") << endl; // olleh
    return 0;
}`
        }
      }
    ]
  },
  {
    id: 3,
    icon: "🔗",
    name: "المصفوفات والمؤشرات",
    subtitle: "المرحلة 3 — الذاكرة والبيانات",
    color: "#b08fd8",
    colorBg: "rgba(123,94,167,0.15)",
    duration: "3 أسابيع",
    lessons: [
      {
        id: "3-0",
        title: "المصفوفات و std::vector",
        duration: "60 دقيقة",
        tags: ["theory","code","quiz"],
        src: "LearnCpp — الفصل 17",
        srcUrl: "https://www.learncpp.com/cpp-tutorial/introduction-to-stdvector-and-list-constructors/",
        content: `
<h2>📚 المصفوفات و Vector</h2>

<h3>المصفوفة الثابتة</h3>
<pre><code><span class="tp">int</span> scores[<span class="num">5</span>] = {<span class="num">85</span>, <span class="num">90</span>, <span class="num">78</span>, <span class="num">92</span>, <span class="num">88</span>};
cout &lt;&lt; scores[<span class="num">0</span>] &lt;&lt; endl;  <span class="cmt">// 85 (يبدأ من 0)</span>
cout &lt;&lt; scores[<span class="num">4</span>] &lt;&lt; endl;  <span class="cmt">// 88 (آخر عنصر)</span></code></pre>

<h3>std::vector — الأفضل دائماً</h3>
<pre><code><span class="kw">#include</span> <span class="str">&lt;vector&gt;</span>
vector&lt;<span class="tp">int</span>&gt; v = {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>};
v.<span class="fn">push_back</span>(<span class="num">4</span>);      <span class="cmt">// إضافة للنهاية</span>
v.<span class="fn">pop_back</span>();       <span class="cmt">// حذف من النهاية</span>
cout &lt;&lt; v.<span class="fn">size</span>() &lt;&lt; endl;  <span class="cmt">// عدد العناصر</span>

<span class="kw">for</span> (<span class="tp">int</span> x : v) cout &lt;&lt; x &lt;&lt; <span class="str">" "</span>;</code></pre>

<h3>خوارزميات STL</h3>
<pre><code><span class="kw">#include</span> <span class="str">&lt;algorithm&gt;</span>
vector&lt;<span class="tp">int</span>&gt; nums = {<span class="num">5</span>, <span class="num">2</span>, <span class="num">8</span>, <span class="num">1</span>, <span class="num">9</span>};
sort(nums.<span class="fn">begin</span>(), nums.<span class="fn">end</span>());  <span class="cmt">// ترتيب تصاعدي</span>
<span class="kw">auto</span> it = find(nums.<span class="fn">begin</span>(), nums.<span class="fn">end</span>(), <span class="num">8</span>);  <span class="cmt">// بحث</span></code></pre>
        `,
        exercise: {
          title: "إدارة درجات الطلاب",
          description: "استخدم vector لتخزين وتحليل درجات",
          starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int main() {
    vector<double> grades;
    int n;
    
    cout << "كم عدد الطلاب؟ ";
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        double g;
        cout << "درجة الطالب " << i+1 << ": ";
        cin >> g;
        grades.push_back(g);
    }
    
    // احسب: المعدل، الأعلى، الأدنى، رتّب
    // double avg = ...
    // double highest = ...
    // double lowest = ...
    
    cout << "المعدل: " << endl;
    cout << "الأعلى: " << endl;
    cout << "الأدنى: " << endl;
    
    return 0;
}`
        }
      },
      {
        id: "3-1",
        title: "المؤشرات Pointers",
        duration: "90 دقيقة",
        tags: ["theory","code","quiz"],
        src: "LearnCpp — الفصل 12",
        srcUrl: "https://www.learncpp.com/cpp-tutorial/introduction-to-pointers/",
        content: `
<h2>🎯 المؤشرات Pointers</h2>
<p>المؤشر متغير يحمل عنوان متغير آخر في الذاكرة. صعب في البداية لكنه قلب C++.</p>

<h3>الأساسيات</h3>
<pre><code><span class="tp">int</span> x = <span class="num">42</span>;
<span class="tp">int</span>* ptr = &amp;x;  <span class="cmt">// ptr يحمل عنوان x</span>
                <span class="cmt">// & = عامل العنوان</span>

cout &lt;&lt; x &lt;&lt; endl;    <span class="cmt">// 42 — قيمة x</span>
cout &lt;&lt; &amp;x &lt;&lt; endl;   <span class="cmt">// 0x7fff... — عنوان x</span>
cout &lt;&lt; ptr &lt;&lt; endl;  <span class="cmt">// 0x7fff... — نفس العنوان</span>
cout &lt;&lt; *ptr &lt;&lt; endl; <span class="cmt">// 42 — القيمة عبر المؤشر (dereference)</span>

*ptr = <span class="num">100</span>;  <span class="cmt">// تعديل x عبر المؤشر</span>
cout &lt;&lt; x &lt;&lt; endl;  <span class="cmt">// 100 !</span></code></pre>

<h3>nullptr — المؤشر الفارغ</h3>
<pre><code><span class="tp">int</span>* ptr = <span class="kw">nullptr</span>;  <span class="cmt">// مؤشر لا يشير لشيء</span>
<span class="kw">if</span> (ptr != <span class="kw">nullptr</span>) {
    cout &lt;&lt; *ptr;  <span class="cmt">// آمن فقط إذا ليس nullptr</span>
}</code></pre>

<h3>المؤشرات الذكية (C++11)</h3>
<pre><code><span class="kw">#include</span> <span class="str">&lt;memory&gt;</span>
<span class="kw">auto</span> ptr = make_unique&lt;<span class="tp">int</span>&gt;(<span class="num">42</span>);  <span class="cmt">// يُحرَّر تلقائياً!</span>
cout &lt;&lt; *ptr &lt;&lt; endl;  <span class="cmt">// 42</span>
<span class="cmt">// لا تحتاج delete — RAII يتكفل بالأمر</span></code></pre>
        `,
        exercise: {
          title: "استكشاف الذاكرة",
          description: "استكشف المؤشرات وعناوين الذاكرة",
          starterCode: `#include <iostream>
#include <memory>
using namespace std;

void doubleValue(int* ptr) {
    // استخدم المؤشر لمضاعفة القيمة
}

int main() {
    int a = 10;
    int* p = &a;
    
    cout << "قيمة a: " << a << endl;
    cout << "عنوان a: " << &a << endl;
    cout << "قيمة p (عنوان): " << p << endl;
    cout << "قيمة *p: " << *p << endl;
    
    doubleValue(p);
    cout << "بعد المضاعفة: " << a << endl;
    
    // جرّب المؤشر الذكي
    auto smartPtr = make_unique<int>(100);
    cout << "smart pointer: " << *smartPtr << endl;
    
    return 0;
}`
        }
      }
    ]
  },
  {
    id: 4,
    icon: "🏗",
    name: "البرمجة الكائنية OOP",
    subtitle: "المرحلة 4 — التفكير بالكائنات",
    color: "#4f9eff",
    colorBg: "rgba(79,158,255,0.15)",
    duration: "4 أسابيع",
    lessons: [
      {
        id: "4-0",
        title: "Classes و Objects",
        duration: "75 دقيقة",
        tags: ["theory","code","quiz"],
        src: "LearnCpp — الفصل 13",
        srcUrl: "https://www.learncpp.com/cpp-tutorial/welcome-to-object-oriented-programming/",
        content: `
<h2>🏗 البرمجة الكائنية</h2>
<p>OOP هي طريقة تفكير: العالم مليء بـ"كائنات" لها خصائص وسلوكيات. C++ تترجم هذا مباشرة.</p>

<h3>Class الأساسية</h3>
<pre><code><span class="kw">class</span> <span class="tp">Student</span> {
<span class="kw">private</span>:  <span class="cmt">// مخفي — لا يُصل مباشرة</span>
    <span class="tp">string</span> name;
    <span class="tp">double</span> gpa;

<span class="kw">public</span>:   <span class="cmt">// مكشوف — للاستخدام الخارجي</span>
    <span class="cmt">// Constructor</span>
    <span class="fn">Student</span>(<span class="tp">string</span> n, <span class="tp">double</span> g) : name(n), gpa(g) {}
    
    <span class="cmt">// Getter</span>
    <span class="tp">string</span> <span class="fn">getName</span>() <span class="kw">const</span> { <span class="kw">return</span> name; }
    <span class="tp">double</span> <span class="fn">getGPA</span>()  <span class="kw">const</span> { <span class="kw">return</span> gpa; }
    
    <span class="cmt">// Method</span>
    <span class="kw">void</span> <span class="fn">study</span>() {
        gpa = min(<span class="num">4.0</span>, gpa + <span class="num">0.1</span>);
        cout &lt;&lt; name &lt;&lt; <span class="str">" درس وارتفع معدله!"</span> &lt;&lt; endl;
    }
    
    <span class="kw">void</span> <span class="fn">print</span>() <span class="kw">const</span> {
        cout &lt;&lt; name &lt;&lt; <span class="str">": GPA = "</span> &lt;&lt; gpa &lt;&lt; endl;
    }
};

<span class="kw">int</span> <span class="fn">main</span>() {
    <span class="tp">Student</span> s1(<span class="str">"أحمد"</span>, <span class="num">3.5</span>);
    s1.<span class="fn">study</span>();
    s1.<span class="fn">print</span>();  <span class="cmt">// أحمد: GPA = 3.6</span>
}</code></pre>
        `,
        exercise: {
          title: "نظام بنكي بسيط",
          description: "اكتب class BankAccount مع إيداع وسحب وطباعة الرصيد",
          starterCode: `#include <iostream>
#include <string>
using namespace std;

class BankAccount {
private:
    string owner;
    double balance;
    
public:
    // Constructor
    BankAccount(string name, double initialBalance) {
        // أكمل
    }
    
    // إيداع
    void deposit(double amount) {
        // تحقق أن amount > 0
    }
    
    // سحب
    bool withdraw(double amount) {
        // تحقق من الرصيد الكافي
        // أعد false إذا فشل
        return false;
    }
    
    // طباعة الحساب
    void printStatement() const {
        // أكمل
    }
};

int main() {
    BankAccount acc("أحمد", 1000.0);
    acc.printStatement();
    acc.deposit(500);
    acc.withdraw(200);
    acc.withdraw(2000);  // يجب أن يفشل
    acc.printStatement();
    return 0;
}`
        }
      },
      {
        id: "4-1",
        title: "الوراثة و Polymorphism",
        duration: "90 دقيقة",
        tags: ["theory","code","quiz"],
        src: "LearnCpp — الفصل 24-25",
        srcUrl: "https://www.learncpp.com/cpp-tutorial/introduction-to-inheritance/",
        content: `
<h2>🧬 الوراثة والتعددية</h2>

<h3>الوراثة Inheritance</h3>
<pre><code><span class="kw">class</span> <span class="tp">Animal</span> {
<span class="kw">protected</span>:
    <span class="tp">string</span> name;
<span class="kw">public</span>:
    <span class="fn">Animal</span>(<span class="tp">string</span> n) : name(n) {}
    <span class="kw">virtual</span> <span class="kw">void</span> <span class="fn">speak</span>() {
        cout &lt;&lt; name &lt;&lt; <span class="str">": ..."</span> &lt;&lt; endl;
    }
};

<span class="kw">class</span> <span class="tp">Dog</span> : <span class="kw">public</span> <span class="tp">Animal</span> {
<span class="kw">public</span>:
    <span class="fn">Dog</span>(<span class="tp">string</span> n) : <span class="fn">Animal</span>(n) {}
    <span class="kw">void</span> <span class="fn">speak</span>() <span class="kw">override</span> {
        cout &lt;&lt; name &lt;&lt; <span class="str">": هاو هاو! 🐕"</span> &lt;&lt; endl;
    }
};

<span class="kw">class</span> <span class="tp">Cat</span> : <span class="kw">public</span> <span class="tp">Animal</span> {
<span class="kw">public</span>:
    <span class="fn">Cat</span>(<span class="tp">string</span> n) : <span class="fn">Animal</span>(n) {}
    <span class="kw">void</span> <span class="fn">speak</span>() <span class="kw">override</span> {
        cout &lt;&lt; name &lt;&lt; <span class="str">": مياو! 🐈"</span> &lt;&lt; endl;
    }
};</code></pre>

<h3>Polymorphism — القوة الحقيقية</h3>
<pre><code>vector&lt;<span class="tp">Animal</span>*&gt; animals = {
    <span class="kw">new</span> <span class="fn">Dog</span>(<span class="str">"ريكس"</span>),
    <span class="kw">new</span> <span class="fn">Cat</span>(<span class="str">"كيتي"</span>),
    <span class="kw">new</span> <span class="fn">Dog</span>(<span class="str">"ماكس"</span>)
};

<span class="kw">for</span> (<span class="kw">auto</span> a : animals) {
    a-&gt;<span class="fn">speak</span>();  <span class="cmt">// كل كائن يتصرف بطريقته!</span>
}</code></pre>
        `,
        exercise: {
          title: "نظام الأشكال الهندسية",
          description: "Shape مجردة → Circle و Rectangle و Triangle",
          starterCode: `#include <iostream>
#include <cmath>
#include <vector>
#include <memory>
using namespace std;

const double PI = 3.14159265;

class Shape {
protected:
    string color;
public:
    Shape(string c) : color(c) {}
    virtual double area() const = 0;      // abstract
    virtual double perimeter() const = 0; // abstract
    virtual void print() const {
        cout << "شكل " << color << ": مساحة=" << area() << endl;
    }
};

class Circle : public Shape {
    double radius;
public:
    Circle(string c, double r) : Shape(c), radius(r) {}
    double area() const override { return PI * radius * radius; }
    double perimeter() const override { return 2 * PI * radius; }
};

// أكمل Rectangle و Triangle
class Rectangle : public Shape {
    // أكمل
};

int main() {
    vector<unique_ptr<Shape>> shapes;
    shapes.push_back(make_unique<Circle>("أحمر", 5.0));
    // أضف Rectangle و Triangle
    
    for (auto& s : shapes) s->print();
    return 0;
}`
        }
      }
    ]
  },
  {
    id: 5,
    icon: "📦",
    name: "STL والـ Templates",
    subtitle: "المرحلة 5 — مكتبة C++ القياسية",
    color: "#00d4a0",
    colorBg: "rgba(0,212,160,0.12)",
    duration: "3 أسابيع",
    lessons: [
      {
        id: "5-0",
        title: "Containers: map, set, queue",
        duration: "75 دقيقة",
        tags: ["code","quiz"],
        src: "LearnCpp — الفصل 22",
        srcUrl: "https://www.learncpp.com/cpp-tutorial/introduction-to-standard-library-containers/",
        content: `
<h2>📦 STL Containers</h2>

<h3>map — قاموس key-value</h3>
<pre><code><span class="kw">#include</span> <span class="str">&lt;map&gt;</span>
map&lt;<span class="tp">string</span>, <span class="tp">int</span>&gt; wordCount;
wordCount[<span class="str">"hello"</span>]++;
wordCount[<span class="str">"world"</span>]++;
wordCount[<span class="str">"hello"</span>]++;

<span class="kw">for</span> (<span class="kw">auto</span>&amp; [word, count] : wordCount) {
    cout &lt;&lt; word &lt;&lt; <span class="str">": "</span> &lt;&lt; count &lt;&lt; endl;
}
<span class="cmt">// hello: 2, world: 1 (مرتّب أبجدياً)</span></code></pre>

<h3>unordered_map — أسرع</h3>
<pre><code><span class="kw">#include</span> <span class="str">&lt;unordered_map&gt;</span>
unordered_map&lt;<span class="tp">string</span>, <span class="tp">int</span>&gt; freq;
<span class="cmt">// بحث O(1) متوسط بدلاً من O(log n)</span></code></pre>

<h3>set — مجموعة بلا تكرار</h3>
<pre><code><span class="kw">#include</span> <span class="str">&lt;set&gt;</span>
set&lt;<span class="tp">int</span>&gt; unique = {<span class="num">3</span>, <span class="num">1</span>, <span class="num">4</span>, <span class="num">1</span>, <span class="num">5</span>, <span class="num">3</span>};
<span class="cmt">// {1, 3, 4, 5} — مرتبة ولا تكرار</span></code></pre>

<h3>queue و stack</h3>
<pre><code><span class="kw">#include</span> <span class="str">&lt;queue&gt;</span>
queue&lt;<span class="tp">string</span>&gt; tasks;
tasks.<span class="fn">push</span>(<span class="str">"مهمة 1"</span>);
tasks.<span class="fn">push</span>(<span class="str">"مهمة 2"</span>);
cout &lt;&lt; tasks.<span class="fn">front</span>() &lt;&lt; endl;  <span class="cmt">// مهمة 1</span>
tasks.<span class="fn">pop</span>();  <span class="cmt">// FIFO</span></code></pre>
        `,
        exercise: {
          title: "عدّاد الكلمات",
          description: "اعدّ تكرار كل كلمة في جملة باستخدام map",
          starterCode: `#include <iostream>
#include <map>
#include <string>
#include <sstream>
using namespace std;

int main() {
    string text = "the quick brown fox jumps over the lazy dog the fox";
    map<string, int> wordCount;
    
    // استخدم stringstream لتقسيم النص
    stringstream ss(text);
    string word;
    while (ss >> word) {
        // أكمل: عدّ كل كلمة
    }
    
    // اطبع النتائج مرتبة
    cout << "=== عدد تكرار الكلمات ===" << endl;
    for (auto& [w, c] : wordCount) {
        cout << w << ": " << c << endl;
    }
    
    // أيضاً: أيها الأكثر تكراراً؟
    
    return 0;
}`
        }
      }
    ]
  },
  {
    id: 6,
    icon: "🚀",
    name: "C++ الحديث",
    subtitle: "المرحلة 6 — C++11/17/20",
    color: "#ffd166",
    colorBg: "rgba(255,209,102,0.12)",
    duration: "4 أسابيع",
    lessons: [
      {
        id: "6-0",
        title: "Move Semantics و Lambda",
        duration: "90 دقيقة",
        tags: ["theory","code"],
        src: "LearnCpp — Modern C++",
        srcUrl: "https://www.learncpp.com/cpp-tutorial/rvalue-references/",
        content: `
<h2>🚀 C++ الحديث</h2>

<h3>Lambda Expressions</h3>
<pre><code><span class="cmt">// [capture](parameters) -> return_type { body }</span>
<span class="kw">auto</span> add = [](<span class="tp">int</span> a, <span class="tp">int</span> b) { <span class="kw">return</span> a + b; };
cout &lt;&lt; <span class="fn">add</span>(<span class="num">3</span>, <span class="num">5</span>);  <span class="cmt">// 8</span>

<span class="cmt">// مع STL algorithms</span>
vector&lt;<span class="tp">int</span>&gt; nums = {<span class="num">5</span>, <span class="num">2</span>, <span class="num">8</span>, <span class="num">1</span>};
sort(nums.<span class="fn">begin</span>(), nums.<span class="fn">end</span>(),
     [](<span class="tp">int</span> a, <span class="tp">int</span> b) { <span class="kw">return</span> a &gt; b; });  <span class="cmt">// تنازلي</span></code></pre>

<h3>auto و structured bindings (C++17)</h3>
<pre><code>map&lt;<span class="tp">string</span>, <span class="tp">int</span>&gt; scores = {{"أحمد", <span class="num">95</span>}, {"سارة", <span class="num">98</span>}};
<span class="kw">for</span> (<span class="kw">auto</span>&amp; [name, score] : scores) {  <span class="cmt">// C++17</span>
    cout &lt;&lt; name &lt;&lt; <span class="str">": "</span> &lt;&lt; score &lt;&lt; endl;
}</code></pre>

<h3>std::optional (C++17)</h3>
<pre><code><span class="kw">#include</span> <span class="str">&lt;optional&gt;</span>
optional&lt;<span class="tp">int</span>&gt; <span class="fn">divide</span>(<span class="tp">int</span> a, <span class="tp">int</span> b) {
    <span class="kw">if</span> (b == <span class="num">0</span>) <span class="kw">return</span> nullopt;
    <span class="kw">return</span> a / b;
}

<span class="kw">auto</span> result = <span class="fn">divide</span>(<span class="num">10</span>, <span class="num">2</span>);
<span class="kw">if</span> (result) cout &lt;&lt; *result;  <span class="cmt">// آمن</span></code></pre>
        `,
        exercise: {
          title: "معالج البيانات بـ Lambda",
          description: "استخدم lambdas مع STL algorithms لمعالجة بيانات",
          starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int main() {
    vector<int> data = {3, 7, 2, 9, 1, 5, 8, 4, 6};
    
    // 1. اطبع الأعداد الزوجية فقط (باستخدام lambda)
    cout << "الأعداد الزوجية: ";
    // for_each أو copy_if
    
    // 2. مجموع مربعات الأعداد
    int sumOfSquares = 0;
    // استخدم accumulate مع lambda
    cout << "\nمجموع المربعات: " << sumOfSquares << endl;
    
    // 3. رتّب تنازلياً
    // sort مع lambda
    
    // 4. أيها أكبر من 5؟
    long count = 0;
    // استخدم count_if
    cout << "أكبر من 5: " << count << " عناصر" << endl;
    
    return 0;
}`
        }
      }
    ]
  }
],

// ─── QUIZZES ──────────────────────────────────────────
quizzes: [
  {
    id: "q1", phase: 0, level: "مبتدئ",
    question: "ما الناتج المتوقع من هذا الكود؟",
    code: `int x = 5;\nint y = 2;\nstd::cout << x / y;`,
    options: ["2.5", "2", "3", "خطأ في الترجمة"],
    correct: 1,
    explanation: "قسمة صحيح على صحيح في C++ تُنتج صحيحاً. 5/2 = 2 (الكسر يُحذف). للحصول على 2.5 اكتب: (double)x / y أو 5.0 / 2."
  },
  {
    id: "q2", phase: 0, level: "مبتدئ",
    question: "أي من هذه التعريفات صحيح لنص (string) في C++؟",
    code: null,
    options: [
      `string s = 'مرحبا';`,
      `String s = "مرحبا";`,
      `std::string s = "مرحبا";`,
      `text s = "مرحبا";`
    ],
    correct: 2,
    explanation: "string (بحرف صغير) هو النوع الصحيح، وهو في مساحة أسماء std. النصوص تُكتب بعلامات اقتباس مزدوجة وليس مفردة."
  },
  {
    id: "q3", phase: 1, level: "مبتدئ",
    question: "كم مرة ستُطبع كلمة 'مرحباً'؟",
    code: `for (int i = 0; i < 5; i++) {\n    if (i == 3) continue;\n    cout << "مرحباً\\n";\n}`,
    options: ["5 مرات", "4 مرات", "3 مرات", "لا شيء"],
    correct: 1,
    explanation: "الحلقة تعمل من 0 إلى 4 (5 دورات). عندما i=3، الـ continue تتخطى تلك الدورة. إذن تُطبع 4 مرات: عند 0، 1، 2، 4."
  },
  {
    id: "q4", phase: 2, level: "متوسط",
    question: "ما الفرق بين التمرير بالقيمة والتمرير بالمرجع؟",
    code: `void f1(int x)  { x = 99; }  // pass by value\nvoid f2(int& x) { x = 99; }  // pass by reference\n\nint a = 10;\nf1(a); cout << a; // ؟\nf2(a); cout << a; // ؟`,
    options: [
      "10 ثم 10",
      "99 ثم 99",
      "10 ثم 99",
      "99 ثم 10"
    ],
    correct: 2,
    explanation: "f1 تعمل على نسخة من a — لا يتغير الأصل → تطبع 10. f2 تعمل على a مباشرة عبر المرجع — يتغير الأصل → تطبع 99."
  },
  {
    id: "q5", phase: 3, level: "متوسط",
    question: "ما الناتج؟",
    code: `int arr[] = {10, 20, 30, 40, 50};\nint* p = arr;\np++;\ncout << *p;`,
    options: ["10", "20", "30", "عنوان الذاكرة"],
    correct: 1,
    explanation: "p يبدأ مشيراً إلى arr[0] = 10. p++ ينقل المؤشر للعنصر التالي (arr[1]). إذن *p = 20."
  },
  {
    id: "q6", phase: 4, level: "متوسط",
    question: "لماذا نستخدم virtual في C++؟",
    code: `class Base {\npublic:\n    virtual void speak() { cout << "Base"; }\n};\nclass Child : public Base {\npublic:\n    void speak() override { cout << "Child"; }\n};\n\nBase* obj = new Child();\nobj->speak();  // ؟`,
    options: ["يطبع: Base", "يطبع: Child", "خطأ في الترجمة", "undefined behavior"],
    correct: 1,
    explanation: "هذا هو Dynamic Polymorphism! بدون virtual ستُطبع 'Base'. مع virtual، C++ ينظر للنوع الفعلي للكائن (Child) ويستدعي الدالة الصحيحة. هذا هو قلب OOP."
  },
  {
    id: "q7", phase: 5, level: "متقدم",
    question: "أيها أسرع للبحث بـ key معروف؟",
    code: null,
    options: [
      "std::vector",
      "std::list",
      "std::map",
      "std::unordered_map"
    ],
    correct: 3,
    explanation: "unordered_map يستخدم Hash Table: بحث O(1) متوسط. map يستخدم شجرة: O(log n). vector يحتاج بحث خطي O(n). unordered_map هو الأسرع للبحث بمفتاح معروف."
  },
  {
    id: "q8", phase: 6, level: "متقدم",
    question: "ما الناتج من هذا الكود الحديث؟",
    code: `auto nums = vector{1, 2, 3, 4, 5};\nauto result = accumulate(begin(nums), end(nums), 0,\n    [](int acc, int x) { return acc + x * x; });\ncout << result;`,
    options: ["15", "55", "25", "خطأ"],
    correct: 1,
    explanation: "هذا accumulate مع lambda يحسب مجموع المربعات: 1²+2²+3²+4²+5² = 1+4+9+16+25 = 55. الـ lambda تأخذ المتراكم (acc) والعنصر الحالي (x) وتضيف x² لكل عنصر."
  },
  {
    id: "q9", phase: 0, level: "مبتدئ",
    question: "ما قيمة x بعد هذه العمليات؟",
    code: `int x = 10;\nx += 5;\nx *= 2;\nx -= 3;\ncout << x;`,
    options: ["27", "30", "22", "17"],
    correct: 0,
    explanation: "x=10 → x+=5 → x=15 → x*=2 → x=30 → x-=3 → x=27"
  },
  {
    id: "q10", phase: 2, level: "متوسط",
    question: "ما الناتج من الكود التكراري؟",
    code: `int factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\ncout << factorial(6);`,
    options: ["120", "720", "36", "Stack Overflow"],
    correct: 1,
    explanation: "factorial(6) = 6×5×4×3×2×1 = 720. الدالة تستدعي نفسها بشكل صحيح مع تناقص n حتى تصل لـ n=1 (base case)."
  }
],

// ─── RESOURCES ────────────────────────────────────────
resources: [
  {
    name: "LearnCpp.com", type: "موقع تعليمي شامل",
    icon: "🌐", bg: "rgba(79,158,255,0.12)",
    desc: "المرجع الأشمل لتعلم C++ من الصفر — محتوى منظم بالفصول مع أمثلة وتمارين. يغطي من المستوى صفر حتى الـ Templates المتقدمة.",
    badge: "مجاني 100%", tag: "essential",
    url: "https://www.learncpp.com"
  },
  {
    name: "CS106B Stanford", type: "جامعة ستانفورد",
    icon: "🎓", bg: "rgba(123,94,167,0.12)",
    desc: "Programming Abstractions: دورة جامعية بـ C++ من ستانفورد مع محاضرات مسجلة على يوتيوب ومشاريع عملية.",
    badge: "مجاني", tag: "university",
    url: "https://web.stanford.edu/class/cs106b/"
  },
  {
    name: "MIT OCW 6.096", type: "معهد MIT",
    icon: "🏛", bg: "rgba(0,212,160,0.12)",
    desc: "Introduction to C++ من MIT — منهج أكاديمي مكثف مع ملاحظات المحاضرات والتمارين والامتحانات.",
    badge: "مجاني", tag: "university",
    url: "https://ocw.mit.edu/courses/6-096-introduction-to-c-january-iap-2011/"
  },
  {
    name: "cppreference.com", type: "توثيق رسمي",
    icon: "📋", bg: "rgba(255,209,102,0.12)",
    desc: "المرجع الرسمي الكامل لمكتبة C++ القياسية — لا يمكن الاستغناء عنه. ابحث عن أي دالة أو container.",
    badge: "مجاني", tag: "reference",
    url: "https://en.cppreference.com"
  },
  {
    name: "Compiler Explorer", type: "أداة تفاعلية",
    icon: "⚡", bg: "rgba(255,107,107,0.12)",
    desc: "اكتب C++ وشاهد الـ Assembly الناتج فوراً مع مقارنة المُترجمات (GCC, Clang, MSVC).",
    badge: "مجاني", tag: "tool",
    url: "https://godbolt.org"
  },
  {
    name: "CppCon YouTube", type: "مؤتمر المطورين",
    icon: "▶️", bg: "rgba(79,158,255,0.12)",
    desc: "محاضرات من مؤتمر C++ السنوي — أفضل المتحدثين في العالم يشرحون المفاهيم المتقدمة بعمق.",
    badge: "مجاني", tag: "video",
    url: "https://www.youtube.com/@CppCon"
  },
  {
    name: "Exercism C++", type: "تمارين تفاعلية",
    icon: "💪", bg: "rgba(0,212,160,0.12)",
    desc: "100+ تمرين C++ متدرج الصعوبة مع code review من مرشدين متطوعين حقيقيين.",
    badge: "مجاني", tag: "practice",
    url: "https://exercism.org/tracks/cpp"
  },
  {
    name: "The Cherno — C++ Series", type: "يوتيوب",
    icon: "🎥", bg: "rgba(123,94,167,0.12)",
    desc: "سلسلة C++ من The Cherno — 100+ فيديو بشرح عملي احترافي لمفاهيم المتقدمة من مطور ألعاب.",
    badge: "مجاني", tag: "video",
    url: "https://www.youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb"
  },
  {
    name: "CSES Problem Set", type: "تمارين خوارزميات",
    icon: "🧩", bg: "rgba(255,209,102,0.12)",
    desc: "300+ مسألة خوارزمية من جامعة هلسنكي — مرتبة ومنظمة بحسب الموضوع والصعوبة.",
    badge: "مجاني", tag: "practice",
    url: "https://cses.fi/problemset/"
  },
  {
    name: "Codeforces", type: "منصة تنافسية",
    icon: "🏆", bg: "rgba(255,107,107,0.12)",
    desc: "المنصة الأكبر للبرمجة التنافسية — حل المسائل أفضل طريقة لإتقان C++. ابدأ من Division 4.",
    badge: "مجاني", tag: "competitive",
    url: "https://codeforces.com"
  },
  {
    name: "CP Handbook (Helsinki)", type: "كتاب مجاني",
    icon: "📖", bg: "rgba(0,212,160,0.12)",
    desc: "Competitive Programmer's Handbook — كتاب شامل للخوارزميات وهياكل البيانات بأسلوب علمي.",
    badge: "PDF مجاني", tag: "book",
    url: "https://cses.fi/book/book.pdf"
  },
  {
    name: "Refactoring.Guru", type: "Design Patterns",
    icon: "🏗", bg: "rgba(123,94,167,0.12)",
    desc: "أنماط التصميم الـ 23 بأمثلة C++ ورسوم بيانية توضيحية جميلة. مرجع لا غنى عنه.",
    badge: "مجاني جزئياً", tag: "reference",
    url: "https://refactoring.guru/design-patterns/cpp"
  }
]

}; // end CPP_DATA
