---
title: تنظیمات من برای کوارتز
aliases:
  - تنظیمات من برای کوارتز
date: 2024-05-29
draft: false
tags: 
status: 🌱نهال
---
در این یادداشت گزارشی دادم از تنظیماتی که به سایت کوارتز اضافه کردم. این موارد را اینجا فهرست کردم و درمورد آنها توضیح دادم تا هم سندی باشد برای خودم که بدانم دقیقا چه تغییراتی را اعمال کردم، هم راهنمایی باشد برای کسانی که میخواهند از این تغییرات مطلع شوند و آن ها را به سایت خودشان اضافه کنند.
<br/> <br/>
## متاداده‌ها
منظورم اطلاعاتی است که زیر عنوان مطلب نمایش داده می‌شود. مثل تاریخ و زمان تقریبی مطالعه. تغییراتی که انجام دادم به شرح زیر است:
<br/><br/>
### زمان مطالعه
من بنا به دلایلی[^1] ترجیح دادم زمان تقریبی مطالعه را غیر فعال کنم. علاوه بر این یک ویرگول هم بین این موارد قرار میگرفت که آن را هم مخفی کردم. با اضافه کردن دستور زیر به فایل `quartz.layout.ts` نمایش این دو مورد را غیر فعال می‌شود:
```
Component.ContentMeta({showReadingTime: false, showComma: false,})
```

<br/>

### تاریخ
علاوه بر تاریخ انتشار ترجیح دادم که تاریخ آخرین به‌روزرسانی هم برای مخاطب قابل مشاهده باشد. من این کد را از سایت [کوانتوم گاردن](https://quantumgardener.info/) کپی کردم. با اضافه کردن کد زیر به فایل `ContentMeta.tsx` این نتیجه حاصل می شود:
```
if (text) {
  const segments: (string | JSX.Element)[] = []

  if (fileData.dates) {
	const created = formatDate(getDate(cfg, fileData)!, cfg.locale) 
	const modifed = formatDate(fileData.dates?.modified, cfg.locale)
	if (created == modifed) {
	  segments.push(` 📅 انتشار: ${created} `)
	} else {
	  segments.push(` 📅 انتشار: ${created} `)
	  segments.push(` 🔄 به‌روزرسانی: ${modifed} `)
	}
  }
```

<br/>

### وضعیت
یکی از مواردی که در سیستم دیجیتال گاردن استفاده میشود مشخص کردن میزان پیشرفت یادداشت است. نهال، درختچه و همیشه سبز سه موردی است که من برای علامت گذاری وضعیت نوشته استفاده میکنم. من ترجیح دادم که این مورد هم در بخش متاداده ها قابل مشاهده باشد. با اضافه کردن کد زیر به همان فایل `ContentMeta.tsx` می توانید این مورد را اضافه کنید:

```
  const status = fileData.frontmatter?.status || "نامشخص";
  if (status !== "نامشخص") {
	segments.push(` ${status} `)
  }
```

اگر در یادداشت های خود از پراپرتی status استفاده کنید این کد محتوای آن را نمایش میدهد.
<br/> <br/>
### بهبود استایل
برای این بخش هم یک استایل خاص در نظر گرفتم. یک بک‌گراند خاکستری روشن اضافه کردم که ظاهر بهتر و متمایزی داشته باشد. با اضافه کردن کد زیر به فایل `custom.scss` این نتیجه حاصل می شود:

```
.content-meta>span {
	background-color: var(--lightgray);
	border-radius: 4px;
	padding: 1px 6px 1px 6px;
	margin: 5px;
	font-size: 0.9em;
}

.content-meta {
	color: var(--darkgray);
	display: flex;
	flex-wrap: wrap;
}
```

<br/> <br/>

## صفحه 404
صفحه 404 هیچ لینکی به صفحه اصلی نداره و کاربر نمیتونه بقیه صفحات رو ببینه. با این کد لینک بازگشت به صفحه اصلی به این صفحه اضافه میشه. کد رو داخل این فایل قرار بدین:

فایل: `quartz\components\pages\404.tsx`

کد: 
```
<p>بازگشت به <a href="/">صفحه اصلی</a></p>
```


به این شکل:
```
  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <p>بازگشت به <a href="/">صفحه اصلی</a></p>
    </article>
  )
```

<br/> <br/>


## فارسی سازی
خوشبختانه سایت از زبان فارسی پشتیبانی می کند و می توان با ویرایش فایل `fa-IR.ts` از معادل فارسی کلمات استفاده کرد. اما چند مورد وجود دارد که که فارسی سازی نشده است:
<br/><br/>

### ۱. کلمه Home در Breadcrumbs
کلمه home در Breadcrumbs (مسیر راهنمای سایت) به فارسی تبدیل نشده. با اضافه کردن دستور زیر به فایل `quartz.layout.ts` می توانید کلمه آن را تغییر دهید:

```
    Component.Breadcrumbs({rootName: "خانه",}),
```

 <br/>

### ۲. نتیجه جستجو
اگر در باکس جستجو عبارتی را سرچ کنید و آن کلمه در سایت نباشد این متن را نمایش می دهد:
![[searchtext.jpg]]

با ویرایش فایل `search.inline.ts` در مسیر `quartz\components\scripts\search.inline.ts` زیر می توانید آن را اصلاح کنید.

```
if (finalResults.length === 0) {
  results.innerHTML = `<a class="result-card no-match">
	  <h3>نتیجه‌ای یافت نشد</h3>
	  <p>عبارت دیگری را امتحان کنید</p>
  </a>`
}
```

<br/>

### ۳. عنوان footnote
اگر از پاورقی استفاده کنید به طور پیشفرض یک عنوان با عبارت footnote به انتهای صفحه اضافه می‌شود. در [سایت کریستالین](https://blog.eledah.ir/%D9%BE%D8%B1%D9%88%DA%98%D9%87%E2%80%8C%D9%87%D8%A7/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA%E2%80%8C%D8%A8%D8%B1%D8%AF%D8%A7%D8%B1%DB%8C/%D8%A7%D8%B2-%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA-%D8%A8%D9%87-%D8%B3%D8%A7%DB%8C%D8%AA-%D8%A8%D8%A7-%DA%A9%D9%88%D8%A7%D8%B1%D8%AA%D8%B2#%D8%AC%D8%A7%DB%8C%DA%AF%D8%B2%DB%8C%D9%86%DB%8C-footnotes-%D8%A8%D8%A7-%D9%BE%D8%A7%D9%86%D9%88%D8%B4%D8%AA-%D8%AF%D8%B1-%D8%A7%D9%86%D8%AA%D9%87%D8%A7%DB%8C-%D9%85%D8%B7%D8%A7%D9%84%D8%A8) یک ترفند برای تغییر متن آن ارائه شده است. با قرار دادن کد زیر در `custom.scss` می توانید آن را با یک متن دیگر جایگزین کنید:

```
h2#footnote-label{
    visibility: hidden;
}
 
h2#footnote-label::after{
    content: "پانوشت‌ها";
    visibility: visible;
    display: block;
}
```

<br/><br/>
## استایل سفارشی
از اینجا به بعد در مورد ظاهر سایته. تنظیمات سفارشی می تونید توی فایل `quartz\styles\custom.scss` قرار بدید.

### فهرست مطالب و بک لینک
برای اینکه از محتوای اصلی بیشتر تفکیک بشه یک بوردر و بک گراند به فهرست و بک لینک اضافه کردم. بولت پوینت هم به اول هر خط اضافه کردم که ظاهرش بهتر بشه.

```
.toc {
    border-radius: 5px;
    border: 1px solid var(--lightgray);
    padding: 12px; 
    font-size: 0.9rem;
    background-color: #80808017;
}


#toc-content .depth-0 {
    list-style: disc;
    list-style-position: inside;

}
 
#toc-content .depth-1 {
    padding: 0px !important;
    padding-right: 1rem !important;
    list-style: circle;
    list-style-position: inside;
}
 
#toc-content .depth-2 {
    padding: 0px !important;
    padding-right: 2rem !important;
}
 
#toc-content .depth-3 {
    padding: 0px !important;
    padding-right: 3rem !important;
}

#toc-content ul>li>a {
    margin-right: -12px;
    opacity: .45;
}

.backlinks>ul {
    border-radius: 5px;
    border: 1px solid var(--lightgray);
    list-style: disc;
    padding-right: 35px;
    padding-top: 10px;
    padding-left: 10px;
    font-size: 0.95rem;
    background-color: #80808017;
}

ul.overflow:after,ol.overflow:after {
    display: none;
}

```

<br/> <br/>

### بلوک کد
در حالت پیشفرض حتی اگر طول یک سطر کوتاه باشد باز هم اسکرول محور افقی نمایش داده می شود. با اضافه کردن کد `overflow-x: auto` اسکرول تنها در صورتی نمایش داده می‌شود که طول سطر طولانی بوده و خارج از بلوک کد باشد.
بقیه تنظیمات مربوط به بک‌گراند، فونت و جهت قرار گفتن متن است.

```
pre {
	background: #afafaf1a;
}

pre>code {
	overflow-x: auto;
}

code {
	direction: ltr !important;
	font-family: var(--bodyFont);
}
```

<br/> <br/>

### دیاگرام
برای دیاگرام این تنظیمات رو اعمال وارد کردم:
- دایرکشن را روی rtl گذاشتم، چون معمولا از فارسی استفاده می کنم.
- بک‌گراند را شفاف کردم، چون بک‌گراند code رو خاکستری کرده بودم، دیاگرام هم خاکستری شده بود.
- فونت را روی body font گذاشتم.
- آیکون «کپی در کلیپ بورد» را مخفی کردم.

```
.mermaid {
	direction: rtl !important;
}

pre:has(>code.mermaid) {
	background-color: transparent;
}

.nodeLabel {
	font-family: var(--bodyFont);
}

pre:has(>code.mermaid) .clipboard-button {
	display: none;
}
```

<br/><br/>
### وسط چین کردن فوتر
ترجیح دادم بخش فوتر وسط چین باشد.

```
footer {
	text-align: center;
}

footer>ul {
	justify-content: center;
}
```

<br/> <br/>

[^1]: یکی از مشکلات محاسبه اشتباه مدت زمان تقریبی مطالعه بود که مقداری بیشتر از حالت معمولی آن را تخمین میزد. ظاهرا به خاطر زیاد بودن کلمات ربط در زبان فارسی نسبت به انگلیسی این اتفاق می افتد. مشکل دیگر تفاوت سرعت خواندن هرکس با یکدیگر است که با توجه به دانش و سطح اطلاعات هر فرد مدت زمان مطالعه نیز کم و زیاد می شود. به همین خاطر فکر میکنم نمایش مدت مطالعه یک فیلد اضافی است و کاربرد جدی ندارد.