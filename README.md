# NEXTUI

<div align="center">

 <!-- ![NEXTUI Logo](https://via.placeholder.com/150/0070f0/ffffff?text=NU) <!-- Replace with your actual logo -->

  **A Modern, Responsive & Complete UI Library for Next.js**

  [![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-%2306B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](./LICENSE)

  [![Portfolio](https://img.shields.io/badge/🌐_Portfolio-00CC99?style=for-the-badge&logo=google-chrome&logoColor=white)](https://amirhmohammadi1.github.io/my-resume/)
[![LinkedIn](https://img.shields.io/badge/💼_LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/AmirHMohammadi/)
[![Email](https://img.shields.io/badge/📧_Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:a.h.mohammadi5@gmail.com)
[![Telegram](https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/mr_amir_developer)

</div>

## ✨ Key Features

- **Built for Next.js 14:** Leverages the latest App Router and Server Components.
- **Fully Responsive:** Components look beautiful on all devices from mobile to desktop.
- **Dark Mode Support:** Built-in light and dark themes with easy customization.
- **Highly Customizable:** Easily customize component styles using Tailwind CSS utilities.
- **TypeScript:** Fully typed for a better development experience with fewer errors.
- **Accessibility:** Components built with accessibility standards in mind.
- **Lightweight & Fast:** Focused on performance and bundle size.

## 🚀 Installation

1.  **Create a Next.js project (if you don't have one):**
    ```bash
    npx create-next-app@latest my-app --typescript --tailwind --eslint
    cd my-app
    ```
<!---
2.  **Install NEXTUI:**
    ```bash
    npm install NEXTUI
    # or
    yarn add NEXTUI
    # or
    pnpm add NEXTUI
    ```
-->

## 📖 Usage

1.  **Wrap your application with the Provider (usually in `app/layout.tsx`):**

    ```tsx
    // app/layout.tsx
    import { NEXTUIProvider } from 'NEXTUI';

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en">
          <body>
            <NEXTUIProvider>
              {children}
            </NEXTUIProvider>
          </body>
        </html>
      );
    }
    ```

2.  **Now you can use the components:**

    ```tsx
    // app/page.tsx
    import { Button, Card, Input } from 'NEXTUI';

    export default function Home() {
      return (
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to NEXTUI</h1>
          <Card className="p-4 max-w-sm">
            <Input label="Email" placeholder="example@mail.com" className="mb-4" />
            <Button color="primary">
              Sample Button
            </Button>
          </Card>
        </div>
      );
    }
    ```

## 🎨 Customization

The theme and styles of all components can be easily customized through Tailwind classes or by publishing custom CSS variables.

```tsx
<Button className="bg-custom-pink hover:bg-custom-purple">
  My Button
</Button>
```

## 🤝 Contributing

Contributions are highly appreciated! Please follow these steps before submitting a PR:

1.  Fork the repository.
2.  Create a new branch for your feature (`git checkout -b feature/amazing-feature`).
3.  Commit your changes (`git commit -m 'Add some amazing feature'`).
4.  Push to the branch (`git push origin feature/amazing-feature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

## 🙌 Acknowledgments

Thanks to all contributors and the Next.js and Tailwind CSS communities for their tools and inspiration.

---

<div align="center">

--- 

# NEXTUI

<div align="center">

  <!-- ![NEXTUI Logo](https://via.placeholder.com/150/0070f0/ffffff?text=NU) <!-- لوگوی خودت رو اینجا قرار بده -->

  **یک کتابخانه UI مدرن، ریسپانسیو و کامل برای Next.js**

  [![Next.js](https://img.shields.io/badge/Next.js-14+-مشکی?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-%2306B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/License-MIT-آبی?style=for-the-badge)](./LICENSE)

  [![Portfolio](https://img.shields.io/badge/🌐_Portfolio-00CC99?style=for-the-badge&logo=google-chrome&logoColor=white)](https://amirhmohammadi1.github.io/my-resume/)
[![LinkedIn](https://img.shields.io/badge/💼_LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/AmirHMohammadi/)
[![Email](https://img.shields.io/badge/📧_Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:a.h.mohammadi5@gmail.com)
[![Telegram](https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/mr_amir_developer)

</div>

## ✨ ویژگی‌های کلیدی

- **ساخته شده برای Next.js 14:** از جدیدترین ویژگی‌های App Router و Server Components استفاده می‌کند.
- **کاملاً ریسپانسیو:** کامپوننت‌ها در تمام دستگاه‌ها از موبایل تا دسکتاپ به زیبایی نمایش داده می‌شوند.
- **پشتیبانی از دارک مود:** تم روشن و تاریک به صورت پیش‌فرض و با قابلیت شخصی‌سازی آسان.
- **قابلیت شخصی‌سازی بالا:** به راحتی می‌توانید استایل کامپوننت‌ها را با استفاده از کلاس‌های تیلویند سی‌اس‌اس سفارشی کنید.
- **تایپ‌اسکریپت:** کاملاً تایپ‌شده برای تجربه توسعه بهتر و با خطای کمتر.
- **دسترس‌پذیری (Accessibility):** کامپوننت‌ها با در نظر گرفتن معیارهای دسترس‌پذیری ساخته شده‌اند.
- **سبک‌وزن و پرسرعت:** تمرکز بر عملکرد و سایز باندل.

## 🚀 نصب و راه‌اندازی

1.  **پروژه Next.js خود را ایجاد کنید (اگر از قبل ندارید):**
    ```bash
    npx create-next-app@latest my-app --typescript --tailwind --eslint
    cd my-app
    ```
<!---
2.  **NEXTUI را نصب کنید:**
    ```bash
    npm install NEXTUI
    # یا
    yarn add NEXTUI
    # یا
    pnpm add NEXTUI
    ```
--->

## 📖 نحوه استفاده

1.  **فراهم‌ساز (Provider) کتابخانه را در ریشه اپلیکیشن قرار دهید (معمولاً `app/layout.tsx`):**

    ```tsx
    // app/layout.tsx
    import { NEXTUIProvider } from 'NEXTUI';

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="fa" dir="rtl"> <!-- برای پروژه‌های فارسی -->
          <body>
            <NEXTUIProvider>
              {children}
            </NEXTUIProvider>
          </body>
        </html>
      );
    }
    ```

2.  **حالا می‌توانید از کامپوننت‌ها استفاده کنید:**

    ```tsx
    // app/page.tsx
    import { Button, Card, Input } from 'NEXTUI';

    export default function Home() {
      return (
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">به NEXTUI خوش آمدید</h1>
          <Card className="p-4 max-w-sm">
            <Input label="ایمیل" placeholder="example@mail.com" className="mb-4" />
            <Button color="primary">
              دکمه نمونه
            </Button>
          </Card>
        </div>
      );
    }
    ```


## 🎨 شخصی‌سازی (Customization)

تم و استایل تمام کامپوننت‌ها به راحتی از طریق کلاس‌های تیلویند یا انتشار متغیرهای CSS سفارشی قابل تغییر است.

```tsx
<Button className="bg-custom-pink hover:bg-custom-purple">
  دکمه من
</Button>
```

## 🤝 مشارکت در توسعه

کمک‌های شما بسیار ارزشمند است! لطفاً قبل از ارسال پول ریکوئست (PR)، موارد زیر را رعایت کنید:

1.  ریپازیتوری را فورک (Fork) کنید.
2.  یک برنچ (Branch) برای ویژگی جدید خود ایجاد کنید (`git checkout -b feature/amazing-feature`).
3.  تغییرات خود را کامیت کنید (`git commit -m 'Add some amazing feature'`).
4.  تغییرات را به برنچ خود پوش (Push) کنید (`git push origin feature/amazing-feature`).
5.  یک پول ریکوئست (Pull Request) باز کنید.

## 📄 مجوز (License)

این پروژه تحت مجوز **MIT** منتشر شده است. برای اطلاعات بیشتر فایل [LICENSE](./LICENSE) را مطالعه کنید.

## 🙌 قدردانی

از تمامی کانتریبیوتورها و جامعه نکست جی اس و تیلویند سی‌اس‌اس به خاطر ابزارها و الهام‌بخشی‌هایشان سپاسگزاریم.

</div>

---

<div align="center">
  
[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-00CC99?style=for-the-badge&logo=google-chrome&logoColor=white)](https://amirhmohammadi1.github.io/my-resume/)
[![LinkedIn](https://img.shields.io/badge/💼_LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/AmirHMohammadi/)
[![Email](https://img.shields.io/badge/📧_Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:a.h.mohammadi5@gmail.com)
[![Telegram](https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/mr_amir_developer)
  
Built with ❤️ by [AmirHossein Mohammadi](https://github.com/AmirHMohammadi1)

ساخته شده با ❤️ توسط [امیرحسین محمدی](https://github.com/AmirHMohammadi1)

</div>
