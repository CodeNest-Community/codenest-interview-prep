const questionsData = [
  {
    id: 1,
    category: "html-css",
    question: "CSS'da Flexbox va Grid'ning asosiy farqi nimada?",
    answer:
      "Flexbox 1 o'lchamli (faqat qator yoki ustun) joylashuv uchun, Grid esa 2 o'lchamli (bir vaqtning o'zida ham qator, ham ustun) murakkab tuzilmalar uchun ishlatiladi. Masalan: navigatsiya menyusi uchun Flexbox (display: flex), sahifaning umumiy maketi uchun Grid (display: grid) qulay.",
  },
  {
    id: 2,
    category: "javascript",
    question: "JavaScript'da 'let', 'const' va 'var' farqi nimada?",
    answer:
      "'var' function-scoped va hoisting xususiyatiga ega. 'let' va 'const' esa block-scoped bo'lib, 'const' bilan e'lon qilingan o'zgaruvchi qiymatini qayta o'zgartirib bo'lmaydi. Eslatma: const obyekt yoki massivning ichki qiymatlarini o'zgartirishga to'sqinlik qilmaydi, faqat o'zgaruvchiga qayta qiymat berishni taqiqlaydi.",
  },
  {
    id: 3,
    category: "git",
    question: "Git'da 'git pull' va 'git fetch' o'rtasida qanday farq bor?",
    answer:
      "'git fetch' faqat masofaviy repodagi o'zgarishlarni yuklab oladi lekin local kodga qo'shmaydi. 'git pull' esa o'zgarishlarni yuklab olib, darhol joriy branch'ga merge qiladi. Boshqacha aytganda: git pull = git fetch + git merge.",
  },
  {
    id: 4,
    category: "javascript",
    question: "Closure (Yopilish) nima va u qanday ishlaydi?",
    answer:
      "Closure — bu ichki funksiya o'zining tashqi funksiyasining o'zgaruvchilariga tashqi funksiya tugagandan keyin ham kirish huquqini saqlab qolishi mexanizmi. Masalan, hisoblagich (counter) funksiyasi ichidagi count o'zgaruvchisi tashqaridan ko'rinmaydi, lekin qaytarilgan funksiya uni o'zgartira oladi.",
  },
  {
    id: 5,
    category: "html-css",
    question: "CSS Selectorlarida class (.) va ID (#) farqi nimada?",
    answer:
      "ID (#) sahifada faqat bitta noyob element uchun ishlatiladi va uning spetsifikatsiyasi (kuchi) yuqori. Class (.) esa bir nechta elementlarga takroran berilishi mumkin. Amalda stillar uchun asosan class tavsiya etiladi, ID esa havolalar (anchor) va JavaScript'da elementni topish uchun qulay.",
  },
  {
    id: 6,
    category: "git",
    question: "Gitda 'git merge' va 'git rebase' o'rtasida qanday farq bor?",
    answer:
      "'git merge' ikki branchni birlashtiradi va yangi commit yaratadi, 'git rebase' esa bir branchni boshqa branchning ustiga qo'yadi va tarixni o'zgartiradi. Qoida: rebase'ni faqat o'zingizning local branchingizda ishlating, boshqalar foydalanayotgan (push qilingan) branchda ishlatmang.",
  },
  {
    id: 7,
    category: "git",
    question: "Linux'da 'chmod 755 fayl' buyrug'i nima qiladi?",
    answer:
      "Fayl yoki papkaning ruxsatlarini (permissions) o'zgartiradi. Raqamlar: o'qish (r) = 4, yozish (w) = 2, bajarish (x) = 1. 755 degani: egasi 7 (4+2+1, hammasi), guruh 5 (4+1, o'qish va bajarish), boshqalar 5 (o'qish va bajarish).",
  },
  {
    id: 8,
    category: "git",
    question: "Linux'da 'grep' buyrug'i nima uchun ishlatiladi?",
    answer:
      "grep fayl yoki matn ichidan berilgan so'z yoki regex bo'yicha qatorlarni qidiradi. Masalan: grep -i 'error' app.log buyrug'i log fayldan 'error' so'zi bor qatorlarni (katta-kichik harfga e'tibor bermay) topadi. -r flagi papka ichida rekursiv qidirish uchun, -n esa qator raqamini ko'rsatish uchun.",
  },
  {
    id: 9,
    category: "git",
    question: "Linux'da 'sudo' nima va uni nima uchun ehtiyotkorlik bilan ishlatish kerak?",
    answer:
      "sudo buyruqni vaqtincha root (superuser) huquqi bilan bajaradi. Root tizimning hamma joyiga kira oladi va hamma narsani o'zgartira oladi, shuning uchun noto'g'ri buyruq (masalan, noto'g'ri yo'lda rm -rf) tizimni ishdan chiqarishi mumkin. sudo'ni faqat kerak bo'lganda va buyruq nima qilishini tushungan holda ishlating.",
  },
  {
    id: 10,
    category: "git",
    question: "Linux'da process va thread o'rtasida qanday farq bor?",
    answer:
      "Process — o'zining alohida xotira maydoniga ega bo'lgan ishlayotgan dastur. Thread esa process ichidagi yengil ish oqimi bo'lib, bir process'dagi threadlar xotirani umumiy ishlatadi. Shu sababli threadlar o'rtasida ma'lumot almashish oson va tez, lekin bir vaqtda bir xil ma'lumotga murojaat qilsa race condition kabi muammolar paydo bo'lishi mumkin.",
  },
  {
    id: 11,
    category: "git",
    question: "Git'da 'git stash' nima uchun kerak?",
    answer:
      "git stash hali commit qilinmagan o'zgarishlarni vaqtincha chetga saqlab qo'yadi va ishchi papkani tozalaydi. Masalan, boshqa branchga shoshilinch o'tish kerak bo'lganda ishlatiladi. Saqlangan o'zgarishlarni qaytarish uchun git stash pop buyrug'i ishlatiladi.",
  },
  {
    id: 12,
    category: "git",
    question: "Git'da 'git reset' va 'git revert' o'rtasida qanday farq bor?",
    answer:
      "git reset branchni eski commitga qaytaradi va undan keyingi commitlarni tarixdan olib tashlaydi. git revert esa eski commit o'zgarishini bekor qiluvchi yangi commit yaratadi va tarixni buzmaydi. Shuning uchun push qilingan (umumiy) branchda revert xavfsiz, reset esa asosan local ishda ishlatiladi.",
  },
  {
    id: 13,
    category: "javascript",
    question: "JavaScript'da '==' va '===' o'rtasida qanday farq bor?",
    answer:
      "'==' qiymatlarni taqqoslashdan oldin turini avtomatik o'zgartiradi (type coercion): 5 == '5' natijasi true. '===' esa qiymat va turni qat'iy taqqoslaydi: 5 === '5' natijasi false. Kutilmagan natijalardan qochish uchun odatda '===' ishlatish tavsiya etiladi.",
  },
  {
    id: 14,
    category: "javascript",
    question: "Promise va async/await nima?",
    answer:
      "Promise — asinxron amalning kelajakdagi natijasini ifodalovchi obyekt bo'lib, u pending (kutilmoqda), fulfilled (muvaffaqiyatli) yoki rejected (xato) holatida bo'ladi. async/await esa Promise bilan ishlashni osonlashtiradi: async funksiya ichida await natijani kutadi va kod oddiy ketma-ket yozilgandek o'qiladi. Xatolarni try/catch bilan ushlash mumkin.",
  },
  {
    id: 15,
    category: "javascript",
    question: "Event Loop nima?",
    answer:
      "JavaScript bitta thread'da ishlaydi. Event Loop call stack bo'shaganida navbatdagi vazifalarni (callback va Promise'lar) stackka olib, asinxron kodni asosiy oqimni bloklamasdan bajarishni ta'minlaydi. Promise'lar (microtask) setTimeout kabi callbacklardan (macrotask) oldin bajariladi.",
  },
  {
    id: 16,
    category: "javascript",
    question: "Event Delegation nima?",
    answer:
      "Event delegation — har bir child elementga alohida event listener qo'yish o'rniga, bitta listenerni ota elementga qo'yish usuli. Hodisa (event) yuqoriga ko'tarilishi (bubbling) tufayli ota element uni ushlaydi va event.target orqali aynan qaysi element bosilganini aniqlaydi. Bu xotirani tejaydi va keyin qo'shilgan elementlar uchun ham ishlaydi.",
  },
  {
    id: 17,
    category: "html-css",
    question: "CSS Box Model nima?",
    answer:
      "Har bir HTML element to'rtburchak quti sifatida ko'riladi va u ichdan tashqariga qarab 4 qismdan iborat: content (mazmun), padding (ichki bo'sh joy), border (chegara) va margin (tashqi bo'sh joy). box-sizing: border-box berilsa, width va height'ga padding va border ham kiradi, bu o'lchamlarni hisoblashni osonlashtiradi.",
  },
  {
    id: 18,
    category: "html-css",
    question: "Semantik HTML nima va nega muhim?",
    answer:
      "Semantik HTML — elementning vazifasiga mos ma'noli teglardan foydalanish: header, nav, main, article, section, footer va hokazo. Faqat div ishlatishdan farqli o'laroq, bu kodni o'qishni osonlashtiradi, qidiruv tizimlari (SEO) sahifani yaxshiroq tushunishiga va ekran o'quvchi dasturlar (accessibility) uchun qulaylik yaratadi.",
  },
  {
    id: 19,
    category: "html-css",
    question: "CSS'da 'display: none' va 'visibility: hidden' o'rtasida qanday farq bor?",
    answer:
      "display: none elementni sahifa maketidan butunlay olib tashlaydi, u joy egallamaydi. visibility: hidden esa elementni ko'rinmas qiladi, lekin uning joyi saqlanib qoladi va boshqa elementlar surilmaydi.",
  },
];
