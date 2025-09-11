# فروشگاه آنلاین ایرانی (Iranian Online Shop)

## 📋 معرفی پروژه

این پروژه یک فروشگاه آنلاین کامل است که با استفاده از React.js و Tailwind CSS ساخته شده است. این اپلیکیشن شامل تمام قابلیت‌های مورد نیاز یک فروشگاه آنلاین مدرن می‌باشد.

## ✨ ویژگی‌های کلیدی

- 🛍️ **مدیریت محصولات**: نمایش، جستجو و فیلتر محصولات
- 🛒 **سبد خرید**: مدیریت کامل سبد خرید با قابلیت افزودن، حذف و تغییر تعداد
- 👤 **احراز هویت کاربر**: سیستم ورود و ثبت‌نام با OTP
- 📱 **طراحی ریسپانسیو**: سازگار با تمام دستگاه‌ها
- 🗺️ **نقشه**: پشتیبانی از نقشه‌های مختلف (Google Maps, Mapbox, Leaflet)
- 🎨 **رابط کاربری مدرن**: طراحی زیبا با Tailwind CSS
- 🔍 **جستجوی پیشرفته**: قابلیت جستجو در محصولات
- 📊 **مدیریت سفارشات**: پیگیری و مدیریت سفارشات کاربران

## 🛠️ تکنولوژی‌های استفاده شده

### Frontend
- **React.js 19.1.1** - کتابخانه اصلی UI
- **React Router DOM 7.8.0** - مدیریت مسیریابی
- **Tailwind CSS 3.4.17** - فریم‌ورک CSS
- **Framer Motion 12.23.12** - انیمیشن‌ها
- **React Hot Toast 2.5.2** - اعلان‌ها

### State Management & Data Fetching
- **React Query (@tanstack/react-query) 5.85.0** - مدیریت state و cache
- **Axios 1.11.0** - درخواست‌های HTTP
- **Context API** - مدیریت state محلی

### Maps & Location
- **@react-google-maps/api 2.20.7** - Google Maps
- **Mapbox GL 1.13.3** - Mapbox Maps
- **Leaflet 1.9.4** - نقشه‌های تعاملی
- **@neshan-maps-platform/ol 1.0.5** - نقشه‌های ایرانی

### UI Components
- **@headlessui/react 2.2.7** - کامپوننت‌های UI
- **@heroicons/react 2.2.0** - آیکون‌ها
- **React Icons 5.5.0** - کتابخانه آیکون‌ها

### Utilities
- **js-cookie 3.0.5** - مدیریت کوکی‌ها
- **moment-jalaali 0.10.4** - تاریخ شمسی
- **React OTP Input 3.1.1** - ورودی کد تایید

## 📁 ساختار پروژه

```
src/
├── components/           # کامپوننت‌های UI
│   ├── atoms/           # کامپوننت‌های پایه (دکمه، ورودی، متن)
│   ├── mulecules/       # کامپوننت‌های ترکیبی
│   ├── organism/        # کامپوننت‌های پیچیده
│   ├── template/        # قالب‌های صفحه
│   └── utilits/         # کامپوننت‌های کمکی
├── pages/               # صفحات اصلی
│   ├── home.jsx         # صفحه اصلی
│   ├── product-list.jsx # لیست محصولات
│   ├── productId.jsx    # جزئیات محصول
│   ├── cart.jsx         # سبد خرید
│   ├── profile.jsx      # پروفایل کاربر
│   ├── login.jsx        # ورود
│   ├── search.jsx       # جستجو
│   └── about-us.jsx     # درباره ما
├── hooks/               # Custom Hooks
│   ├── use-get-*.jsx    # Hooks دریافت داده
│   ├── use-post-*.jsx   # Hooks ارسال داده
│   └── use-patch-*.jsx  # Hooks به‌روزرسانی
├── context/             # Context API
│   └── CartContext.jsx  # مدیریت سبد خرید
├── lib/                 # کتابخانه‌های کمکی
├── assets/              # فایل‌های استاتیک
└── entities/            # مدل‌های داده
```

## 🚀 نصب و راه‌اندازی

### پیش‌نیازها
- Node.js (نسخه 16 یا بالاتر)
- npm یا yarn

### مراحل نصب

1. **کلون کردن پروژه**
```bash
git clone [repository-url]
cd web-iranishop
```

2. **نصب وابستگی‌ها**
```bash
npm install
```

3. **اجرای پروژه در حالت توسعه**
```bash
npm start
```

پروژه در آدرس `http://localhost:3000` قابل دسترسی خواهد بود.

### اسکریپت‌های موجود

```bash
npm start          # اجرای پروژه در حالت توسعه
npm run build      # ساخت نسخه تولید
npm test           # اجرای تست‌ها
npm run eject      # خروج از Create React App
```

## 📱 صفحات و قابلیت‌ها

### 🏠 صفحه اصلی (`/`)
- نمایش بنرها و اسلایدرها
- محصولات پرفروش
- دسته‌بندی‌های محصولات
- منوی مگا

### 📦 لیست محصولات (`/product-list/:id`)
- نمایش محصولات بر اساس دسته‌بندی
- فیلتر و مرتب‌سازی
- صفحه‌بندی

### 🛍️ جزئیات محصول (`/product-detail/:id`)
- اطلاعات کامل محصول
- گالری تصاویر
- افزودن به سبد خرید
- محصولات مشابه

### 🛒 سبد خرید (`/cart`)
- مدیریت محصولات سبد خرید
- تغییر تعداد
- اعمال کد تخفیف
- محاسبه قیمت نهایی

### 👤 پروفایل کاربر (`/profile`)
- اطلاعات شخصی
- تاریخچه سفارشات
- تنظیمات حساب

### 🔐 ورود (`/login`)
- ورود با شماره موبایل
- تایید با OTP
- مدیریت نشست

### 🔍 جستجو (`/search`)
- جستجوی محصولات
- فیلتر نتایج
- مرتب‌سازی

## 🔧 مدیریت State

### CartContext
مدیریت سبد خرید با قابلیت‌های:
- افزودن محصول
- حذف محصول
- تغییر تعداد
- محاسبه قیمت
- اعمال تخفیف

```javascript
const { cart, addToCart, removeFromCart, getTotal } = useCart();
```

### React Query
مدیریت state سرور با:
- Cache خودکار
- Background updates
- Error handling
- Loading states

## 🗺️ نقشه‌ها

پروژه از چندین سرویس نقشه پشتیبانی می‌کند:
- Google Maps
- Mapbox
- Leaflet
- نقشه‌های نشان (Neshan)

## 🎨 طراحی و UI

### Tailwind CSS
استفاده از Tailwind برای:
- طراحی ریسپانسیو
- کامپوننت‌های قابل تنظیم
- انیمیشن‌ها
- تم‌های سفارشی

### کامپوننت‌ها
ساختار Atomic Design:
- **Atoms**: دکمه، ورودی، متن
- **Molecules**: فرم‌ها، کارت‌ها
- **Organisms**: هدر، فوتر، لیست محصولات
- **Templates**: قالب‌های صفحه

## 🔒 امنیت

- مدیریت توکن‌ها با js-cookie
- احراز هویت OTP
- محافظت از مسیرها
- اعتبارسنجی ورودی‌ها

## 📊 تست

```bash
npm test           # اجرای تست‌ها
npm run test:coverage  # تست با گزارش پوشش
```

## 🚀 استقرار

### ساخت نسخه تولید
```bash
npm run build
```

### استقرار
فایل‌های تولید شده در پوشه `build/` قرار می‌گیرند و آماده استقرار هستند.

## 🤝 مشارکت

1. Fork پروژه
2. ایجاد branch جدید (`git checkout -b feature/AmazingFeature`)
3. Commit تغییرات (`git commit -m 'Add some AmazingFeature'`)
4. Push به branch (`git push origin feature/AmazingFeature`)
5. ایجاد Pull Request

## 📝 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است.

## 📞 پشتیبانی

برای سوالات و مشکلات:
- ایجاد Issue در GitHub
- تماس با تیم توسعه

---

**توسعه‌دهنده**: تیم توسعه فروشگاه آنلاین ایرانی  
**آخرین به‌روزرسانی**: 2024
