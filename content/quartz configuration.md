---
title: تنظیمات من برای کوارتز
aliases:
  - تنظیمات من برای کوارتز
date: 2024-05-29
draft: false
tags: 
status: 🌿درختچه
hierarchy: "[[obsidian|🔮 مدخل ابسیدین]]"
number: "999"
---
در طول استفاده از کوارتز، به مرور زمان تغییرات و اصلاحات مختلفی برای سفارشی‌سازی سایت انجام دادم. در این یادداشت فهرستی از این تغییرات را مستند کردم. این موارد نخست به عنوان یک مرجع شخصی عمل می‌کند تا در صورت نیاز بتوانم به راحتی تنظیمات قبلی را ویرایش کنم. از طرف دیگر می‌تواند راهنمای مفیدی باشد برای کسانی که تمایل دارند مشابه آن را روی سایت خود پیاده‌سازی کنند.
<br/> <br/>
## ۱) متاداده‌های یادداشت
متاداده اطلاعات مربوط به یک یادداشت است که بعد از عنوان اصلی نمایش داده می شود. مثل تاریخ انتشار زمان تقریبی مطالعه. من ترجیح دادم تنظیمات زیر را به آن اضافه کنم:
<br/><br/>
### زمان تقریبی مطالعه
بنا به دلایلی[^1] زمان تقریبی مطالعه را غیر فعال کردم. یک ویرگول هم برای جدا سازی این اطلاعات بین آن ها قرار می‌گرفت که آن را هم مخفی کردم.(باتوجه به استایلی که به آن اعمال کردم بودن آن ضرورتی نداشت) با اضافه کردن دستور زیر به فایل `quartz.layout.ts` نمایش این دو مورد غیرفعال می‌شود:
```
Component.ContentMeta({showReadingTime: false, showComma: false,})
```

<br/>

### تاریخ
به طور پیشفرض کوارتز فقط یک تاریخ را به کاربر نشان می‌دهد که نهایتا می توانید زمان آن را روی تاریخ انتشار یا تاریخ آخرین آپدیت تنظیم کنید. من تمایل داشتم علاوه بر تاریخ انتشار تاریخ آخرین به‌روزرسانی هم برای کاربر قابل مشاهده باشد.[^2] با اضافه کردن کد زیر به فایل `quartz/components/ContentMeta.tsx` این کار قابل انجام است. با این دستور درصورتی که تاریخ انتشار و آخرین به‌روزرسانی یکسان نباشد علاوه بر تاریخ انتشار تاریخ آخرین به‌روزرسانی هم اضافه شده و به کاربر نمایش داده می‌شود.

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

### وضعیت رشد
یکی از مواردی که در [[digital garden|سیستم یادداشت برداری دیجیتال گاردن]] استفاده می‌شود مشخص کردن میزان رشد و پیشرفت یادداشت است. نهال، درختچه و همیشه سبز سه موردی است که من برای علامت گذاری وضعیت نوشته استفاده می‌کنم. من ترجیح دادم که این مورد هم در این بخش قابل مشاهده باشد. با اضافه کردن کد زیر به فایل `ContentMeta.tsx` می‌توان این موارد را اضافه کرد. این کد اطلاعات موجود در پراپرتی status را جمع آوری کرده و بعد از تاریخ یادداشت نمایش می‌دهد.

```
  const status = fileData.frontmatter?.status || "نامشخص";
  if (status !== "نامشخص") {
	segments.push(` ${status} `)
  }
```

<br/>

### بهبود استایل
برای این بخش هم یک استایل خاص در نظر گرفتم. یک بک‌گراند خاکستری روشن اضافه کردم که ظاهر بهتر و متمایزی داشته باشد. با اضافه کردن کد زیر به فایل `quartz\styles\custom.scss` این نتیجه اعمال می‌شود.

```
.content-meta>span {
    background-color: var(--lightgray);
    border-radius: 4px;
    padding: 1px 6px 1px 6px;
    font-size: 0.9em;
}

.content-meta {
    color: var(--darkgray);
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}
```

<br/> 

### حذف اطلاعات از صفحه اول
طبیعتا صفحه اول نیاز به نمایش این اطلاعات ندارد. برای مخفی کردن این موارد از صفحه اول کد زیر را به فایل `ContentMeta.tsx` اضافه کنید. باید بعد از `const text = fileData.text` قرار بگیرد.
```
if (fileData.slug === "index") {
	return <></>
}
```

نمایش عنوان صفحه هم ضرورتی ندارد برای حذف آن کافی است کد بالا را به فایل `quartz/components/ArticleTitle.tsx` اضافه کنید. باید بعد از `const title = fileData.frontmatter?.title` قرار بگیرد.[^3]

<br/> <br/>


## ۲) فارسی سازی
خوشبختانه کوارتز از زبان فارسی پشتیبانی می‌کند و با ویرایش فایل `fa-IR.ts` می‌توان از معادل فارسی کلمات استفاده کرد. اما چند مورد وجود دارد که که فارسی سازی نشده:
<br/><br/>

### کلمه Home در Breadcrumbs
کلمه home در Breadcrumbs (مسیر راهنمای سایت) به فارسی تبدیل نشده. با اضافه کردن دستور زیر به فایل `quartz.layout.ts` می توانید کلمه آن را تغییر دهید:

```
    Component.Breadcrumbs({rootName: "خانه",}),
```

 <br/>

### نتیجه جستجو
اگر در باکس جستجو عبارتی را سرچ کنید و آن کلمه در سایت نباشد این متن را نمایش می دهد:
![[searchtext.jpg]]

با ویرایش فایل `search.inline.ts` در مسیر `quartz\components\scripts\search.inline.ts` می‌توانید آن را اصلاح کنید.

```
if (finalResults.length === 0) {
  results.innerHTML = `<a class="result-card no-match">
	  <h3>نتیجه‌ای یافت نشد</h3>
	  <p>عبارت دیگری را امتحان کنید</p>
  </a>`
}
```

<br/>

### عنوان footnote
اگر از پاورقی استفاده کنید به طور پیشفرض یک عنوان با عبارت footnote به انتهای صفحه اضافه می‌شود. با قرار دادن کد زیر در `custom.scss` می توانید آن را با یک متن دیگر جایگزین کنید.[^4]

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

## ۳) لینک بازگشت در صفحه 404
صفحه 404 لینک بازگشتی به سایت ندارد و کاربر نمی‌تواند به سایت برگردد. با اضافه کردن کد زیر لینک بازگشت به صفحه اصلی در این صفحه نمایش داده می‌شود.

فایل: `quartz\components\pages\404.tsx`

این کد باید بعد از `<p>{i18n(cfg.locale).pages.error.notFound}</p>` قرار بگیرد:
```
<p>بازگشت به <a href="/">صفحه اصلی</a></p>
```

<iframe width="100%" height="290px" style="border: none; border-radius: 10px;" src="before-after-404-v5.html"></iframe>

<br/><br/>

## ۴) تغییر فوتر
به غیر از لینک‌ها باقی موارد را حذف کردم. برای لینک ها هم ترجیح دادم به جای متن از لوگو و آیکون استفاده کنم. یک دکمه برگشت به بالا هم اضافه کردم. با حذف کدهای قبلی و اضافه کردن کد زیر به فایل `quartz\components\Footer.tsx` این تغییرات اعمال می شود. توجه داشته باشید که اگر کد زیر را جایگزین کنید دیگر ویرایش لینک ها از طریق فایل `quartz.layout.ts` امکان پذیر نیست و باید همین کد را تغییر دهید.

```
<div class="new-footer">
  <div class="group1">
	<a href="https://instagram.com/ifard.ir/" title="اینستاگرام" class="footer-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3364.7 3364.7" class="footer-svg"><defs><radialGradient id="0" cx="217.76" cy="3290.99" r="4271.92" gradientUnits="userSpaceOnUse"><stop offset=".09" stop-color="#fa8f21"/><stop offset=".78" stop-color="#d82d7e"/></radialGradient><radialGradient id="1" cx="2330.61" cy="3182.95" r="3759.33" gradientUnits="userSpaceOnUse"><stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"/><stop offset="1" stop-color="#8c3aaa"/></radialGradient></defs><path d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9" fill="url(#0)"/><path d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9" fill="url(#1)"/><path d="M1269.25,1689.52c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7-416.6-186.59-416.6-416.7m-225.26,0c0,354.5,287.36,641.86,641.86,641.86s641.86-287.36,641.86-641.86-287.36-641.86-641.86-641.86S1044,1335,1044,1689.52m1159.13-667.31a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M1180.85,2707c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27S2059.13,666,2191,672c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M1170.5,447.09c-133.07,6.06-224,27.16-303.41,58.06-82.19,31.91-151.86,74.72-221.43,144.18S533.39,788.47,501.48,870.76c-30.9,79.46-52,170.34-58.06,303.41-6.16,133.28-7.57,175.89-7.57,515.35s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43s139.14,112.18,221.43,144.18c79.56,30.9,170.34,52,303.41,58.06,133.35,6.06,175.89,7.57,515.35,7.57s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2586.8,537.06,2504.71,505.15c-79.56-30.9-170.44-52.1-303.41-58.06C2068,441,2025.41,439.52,1686,439.52s-382.1,1.41-515.45,7.57" fill="#ffffff"/></svg></a>
	<a href="https://t.me/ifard_ir/" title="تلگرام" class="footer-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="footer-svg"><rect width="512" height="512" rx="15%" fill="#37aee2"/><path fill="#c8daea" d="M199 404c-11 0-10-4-13-14l-32-105 245-144"/><path fill="#a9c9dd" d="M199 404c7 0 11-4 16-8l45-43-56-34"/><path fill="#f6fbfe" d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"/></svg></a>
	<a href="https://twitter.com/ifard_ir/" title="توییتر" class="footer-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="footer-svg"><rect width="512" height="512" rx="15%" fill="#1da1f2"/><path fill="#ffffff" d="M437 152a72 72 0 01-40 12a72 72 0 0032-40a72 72 0 01-45 17a72 72 0 00-122 65a200 200 0 01-145-74a72 72 0 0022 94a72 72 0 01-32-7a72 72 0 0056 69a72 72 0 01-32 1a72 72 0 0067 50a200 200 0 01-105 29a200 200 0 00309-179a200 200 0 0035-37"/></svg></a>
  </div>

  <div class="group2">
	<a href="#" title="برگشت به بالا" class="footer-link"><svg transform="scale(1.1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="footer-svg"><g><g data-name="Layer 2"><rect width="21.5" height="21.5" x="1.25" y="1.25" fill="#26DE81" rx="4.75" opacity="1" data-original="#26de81"></rect><path fill="#FFFFFF" d="M12 17.5a1 1 0 0 1-1-1v-9a1 1 0 0 1 2 0v9a1 1 0 0 1-1 1z" opacity="1" data-original="#ffffff"></path><path fill="#FFFFFF" d="M16.5 12.5a1 1 0 0 1-.664-.253L12 8.838l-3.836 3.409a1 1 0 0 1-1.411-.083 1 1 0 0 1 .083-1.411l4.5-4a1 1 0 0 1 1.328 0l4.5 4A1 1 0 0 1 16.5 12.5z" opacity="1" data-original="#ffffff"></path><path fill="#232323" d="M18 22.75H6A4.756 4.756 0 0 1 1.25 18V6A4.756 4.756 0 0 1 6 1.25h12A4.756 4.756 0 0 1 22.75 6v12A4.756 4.756 0 0 1 18 22.75zm-12-20A3.254 3.254 0 0 0 2.75 6v12A3.254 3.254 0 0 0 6 21.25h12A3.254 3.254 0 0 0 21.25 18V6A3.254 3.254 0 0 0 18 2.75z" opacity="1" data-original="#232323"></path></g></g></svg></a>
  </div>
</div>
```

برای تنظیم استایل این کد را هم باید در `custom.scss` وارد کنید.
```
// footer
    footer {
        opacity: 1;
    }

    .new-footer {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: baseline;
    }

    .group1 {
        text-align: right;
        display: flex;
        gap: 25px;
    }

    .group2 {
        text-align: left;
        display: flex;
        gap: 25px;
    }

    .footer-link {
        display: inline-block;
        width: 1.3em;
        height: 1.3em;
    }

    .footer-svg {
        opacity: 0.65;
        filter: grayscale(100%);
        transition: filter 0.3s ease;
        transition: scale .3s ease;
    }

    .footer-svg:hover {
        filter: grayscale(0%);
        scale: 1.1;
        opacity: 1;
    }
```

یک مورد جذاب هم در فوتر [این سایت](https://quartz.eilleeenz.com) دیدم که با کلیک کردن روی Random Page یک صفحه تصادفی به کاربر نمایش می‌دهد. [از اینجا ](https://quartz.eilleeenz.com/Quartz-customization-log#random-page)می توانید توضیحات آن را مشاهده کنید.

<br/> <br/>

## ۵) ظاهر سایت
این تنظیمات مربوط به استایل ظاهری سایت است. این کد ها باید در فایل زیر قرار بگیرند:
 `quartz\styles\custom.scss`

### فهرست مطالب و بک لینک
برای تمایز بیشتر بوردر و بک‌گراند خاکستری روشن اضافه کردم. به اول هر سطر هم بولت پوینت اضافه کردم. 

```
// فهرست مطالب
    .toc {
        border-radius: 5px;
        border: 1px solid var(--lightgray);
        padding: 12px; 
        font-size: 0.9rem;
        background-color: #80808017;
    }
    
    #toc-content ul {
        max-height: 360px;
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

 
// بک لینک
    .backlinks>ul {
        border-radius: 5px;
        border: 1px solid var(--lightgray);
        list-style: disc;
        padding-right: 35px;
        padding-top: 10px;
        padding-left: 10px;
        font-size: 0.95rem;
        background-color: #80808017;
        max-height: 230px;
    }

    ul.overflow:after,ol.overflow:after {
        display: none;
    }
```

<br/>

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

<br/>

### دیاگرام
در کوارتز مانند ابسیدین امکان ساخت دیاگرام وجود دارد. به این شکل:

```mermaid
flowchart TD
A([عنوان اصلی])
A --- B([فرعی یک])
A --- C([فرعی دو])
A --- D([فرعی سه])

click A "/"

classDef default fill:#fff,stroke:gray, stroke-width:1px,color:#282828;
linkStyle default stroke:gray,stroke-width:1px;

```

در سایت [mermaid](https://mermaid.js.org/intro/) تمامی دستورات برای استفاده از آن توضیح داده شده. کد زیر دیاگرام بالا را نشان می دهد:
````
```mermaid
flowchart TD
A([عنوان اصلی])
A --- B([فرعی یک])
A --- C([فرعی دو])
A --- D([فرعی سه])

click A "/"

classDef default fill:#fff,stroke:gray, stroke-width:1px,color:#282828;
linkStyle default stroke:gray,stroke-width:1px;
```
````

تنظیم استایل دیاگرام در خود کد امکان پذیر است. دو خط آخر کد بالا استایل این دیاگرام را تعریف میکند. علاوه براین تنظیمات دیگری هم به فایل `custom.scss` اضافه کردم:
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

<br/>

### دکمه
با استفاده از تگ `</button>` می توانید از دکمه استفاده کنید. به این شکل:

<div style="text-align: center;">
<button 
	class="my-button"	onclick="window.open('#', '_blank');">
     کلیک کنید
</button>
</div>

کد زیر دکمه بالا را تحویل می دهد:
```
<div style="text-align: center;">
<button 
	class="my-button"	onclick="window.open('https://www.example.com/', '_blank');">
     کلیک کنید
</button>
</div>
```

برای استایل هم این تنظیمات را اضافه کردم:
```
.my-button {
	background-color: var(--tertiary);
	color: white;
	padding: 8px 20px;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	font-family: var(--bodyFont);
	font-size: 1em;
}  

.my-button:hover {
	background-color: var(--secondary);
}
```

<br/>

### تایپوگرافی
مقداری سایز متن بدنه و هدینگ ها را افزایش دادم. همینطور فاصله بین خطوط.

```
body {
	font-size: 1.1em;
}

p {
	line-height: 2rem;
} 

li {
	line-height: 2rem; 
}

sup {
vertical-align: middle; //اگه توی متن از پانوشت استفاده شده باشه باعث میشه فاصله بین خطوط به هم نریزه
}

h2 {
	font-size: 1.6rem;
	margin-top: 1rem;
	margin-bottom: -0.2rem;
	border-bottom: 1px solid var(--lightgray);
	padding-bottom: 0.2em;
}

h3 {
	font-size: 1.30rem;
	margin-top: 1rem;
	margin-bottom: -0.8rem;
}

h4,
h5,
h6 {
  font-size: 1.1rem;
  margin-top: 1rem;
  margin-bottom: -0.8rem;
}
```

<br/>

### چرخش آیکون >
این آیکون در قسمت های مختلف مثل فهرست، اکسپلور و کالوت استفاده شده. جهت این آیکون در حالت بسته باید سمت چپ باشد در حالی که به سمت راست است. برای چرخش آن باید مقدار `rotateZ` را در فایل های مربوط به هر کدام از منفی90 به مثبت90 تغییر دهید.[^5] به این شکل:
```
  &.collapsed .fold {
    transform: rotateZ(90deg);
  }
```

فهرست: `quartz/components/styles/toc.scss`

اکسپلور: `quartz/components/styles/explorer.scss`

کالوت: `quartz/quartz/styles/callouts.scss`


<br/>

### کالوت سفارشی
برای تغییر رنگ کالوت ها می توانید فایل `quartz/quartz/styles/callouts.scss` را ویرایش کنید. علاوه بر این میتوانید کالوت های جدید با آیکون های دیگر اضافه کنید.

<br/>

### اضافه کردن آیکون به عنوان سایت
یک آیکون به عنوان سایت اضافه کردم. کد SVG آیکون را به فایل `quartz\components\PageTitle.tsx` اضافه کردم.
```
  return (
    <h1 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor" style="vertical-align: middle;"><path d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 32 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z"/></svg>
      &nbsp;{title}</a>
    </h1>
  )
```

<br/>

### نمای کارتی برای جداول
این تنظیم استایل جدول ها را به حالت کارت تبدیل میکند. مشابه حالتی که تم مینیمال برای جدول های دیتاویو میسازد.
```
// نمای کارتی جدول - حالت گرید

    // استایل پایه
    .card-g {
        tr {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            border: 1px solid #b5b5b526;
            background-color: #b5b5b526;
            border-radius: 8px;
            font-size: 0.9em;
            line-height: 1.5em;
            overflow: hidden;
        }

        .table-container>table>* {
            display: grid;
            gap: 15px;
            grid-template-columns: repeat(4, 1fr);
        }

        td {
            text-align: center;
            white-space: nowrap; // متن شکسته نمی شود و در یک سطر نمایش داده می شود
            overflow: hidden;
            text-overflow: ellipsis;
        }


        .table-container>table td img {
            margin-bottom: -6px;
        }

        .table-container>table>thead {
            display: none;
        }

    }

    // (c-4) تعداد ستون
    .c-2 .table-container>table>* {grid-template-columns: repeat(2, 1fr);}
    .c-3 .table-container>table>* {grid-template-columns: repeat(3, 1fr);}
    .c-5 .table-container>table>* {grid-template-columns: repeat(5, 1fr);}
    .c-6 .table-container>table>* {grid-template-columns: repeat(6, 1fr);}

    // ستون ها در تبلت
    @media (max-width: 768px) {
        .card-g .table-container>table>* {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    // ستون ها در موبایل        
    @media (max-width: 480px) {
        .card-g .table-container>table>* {
            grid-template-columns: repeat(2, 1fr);
        }
    }
```

یک حالت دیگر هم اضافه کردم که فقط کارت ها در یک ردیف نمایش داده می شوند و با اسکرول کردن میتوان باقی موارد را مشاهده کرد. برای زمانی که تعداد کارت ها زیاد است به کار می آید.

```
// نمای کارتی جدول - حالت اسکرول

    // استایل پایه
    .card-s {
        tr {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            border: 1px solid #b5b5b526;;
            background-color: #b5b5b526;
            border-radius: 8px;
            padding: 10px;
            font-size: 0.9em;
            line-height: 1.5em;
            overflow: hidden;
            width: 150px;
        }

        .table-container>table>* {
            display: flex;
            gap: 15px;
            overflow-x: auto;
            padding: 10px 0 10px 0;
            margin: 0;
        }

        td {
            text-align: center;
            white-space: nowrap; // متن شکسته نمی شود و در یک سطر نمایش داده می شود
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .table-container>table td img {
            margin: 0;
        }

        .table-container>table>thead {
            display: none;
        }
    }
    
    // تنظیم عرض
    .w100 tr {width: 100px;}
    .w200 tr {width: 200px;}
    .w300 tr {width: 300px;}

```

بعد از اضافه کردن این کد ها به فایل `custom.scs` کافی است جدول خود را در تگ div قرار داده و کلاس `card-g` یا `card-s` را برای آن تعریف کنید. تعداد ستون یا عرض کارت را هم می توانید مشخص کنید. به این شکل:
```
<div class="card-g c-2">
| class  | description  |
| ------ | ------------ |
| card-g | grid style   |
| card-s | scroll style |
</div>
```


کلاس های مربوط به حالت گرید

| class  | description                            |
| ------ | -------------------------------------- |
| card-g | یک نمای کارتی با 4 ستون در ردیف‌های متعدد می‌سازد |
| c-2    | نمایش کارت ها در 2 ستون                |
| c-3    | نمایش کارت ها در 3 ستون                |
| c-5    | نمایش کارت ها در 5 ستون                |
| c-6    | نمایش کارت ها در 6 ستون                |

کلاس های مربوط به حالت اسکرول

| class  | description                         |
| ------ | ----------------------------------- |
| card-s | یک نمای کارتی با عرض 150px در یک ردیف میسازد |
| w100   | تنظیم عرض کارت روی 100px            |
| w200   | تنظیم عرض کارت روی 200px            |
| w300   | تنظیم عرض کارت روی 300px            |




<br/><br/>

[^1]: یکی از مشکلات محاسبه اشتباه مدت زمان تقریبی مطالعه بود که مقداری بیشتر از حالت معمولی آن را تخمین میزد. ظاهرا به خاطر زیاد بودن کلمات ربط در زبان فارسی نسبت به انگلیسی این اتفاق می افتد. مشکل دیگر تفاوت سرعت خواندن هرکس با یکدیگر است مضافا اینکه با توجه به دانش و سطح اطلاعات هر کس مدت زمان مطالعه نیز کم و زیاد می شود. به همین خاطر فکر میکنم نمایش مدت مطالعه یک فیلد اضافی است و کاربرد جدی ندارد.
[^2]: این کد را از سایت [کوانتوم گاردن](https://quantumgardener.info/) کپی کردم. [از اینجا](https://github.com/quantumgardener/qg.info/blob/v4/quartz/components/ContentMeta.tsx) میتوانید کدهای اصلی را مشاهده کنید.
[^3]: رک [اینجا](https://blog.eledah.ir/%D9%BE%D8%B1%D9%88%DA%98%D9%87%E2%80%8C%D9%87%D8%A7/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA%E2%80%8C%D8%A8%D8%B1%D8%AF%D8%A7%D8%B1%DB%8C/%D8%A7%D8%B2-%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA-%D8%A8%D9%87-%D8%B3%D8%A7%DB%8C%D8%AA-%D8%A8%D8%A7-%DA%A9%D9%88%D8%A7%D8%B1%D8%AA%D8%B2#%D8%AD%D8%B0%D9%81-%D8%B9%D9%86%D9%88%D8%A7%D9%86-%D9%88-%D8%AA%D8%A7%D8%B1%DB%8C%D8%AE-%D8%A7%D8%B2-%D8%B5%D9%81%D8%AD%D9%87%D9%94-%D8%A7%D9%88%D9%84)
[^4]: رک [اینجا](https://blog.eledah.ir/%D9%BE%D8%B1%D9%88%DA%98%D9%87%E2%80%8C%D9%87%D8%A7/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA%E2%80%8C%D8%A8%D8%B1%D8%AF%D8%A7%D8%B1%DB%8C/%D8%A7%D8%B2-%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA-%D8%A8%D9%87-%D8%B3%D8%A7%DB%8C%D8%AA-%D8%A8%D8%A7-%DA%A9%D9%88%D8%A7%D8%B1%D8%AA%D8%B2#%D8%AC%D8%A7%DB%8C%DA%AF%D8%B2%DB%8C%D9%86%DB%8C-footnotes-%D8%A8%D8%A7-%D9%BE%D8%A7%D9%86%D9%88%D8%B4%D8%AA-%D8%AF%D8%B1-%D8%A7%D9%86%D8%AA%D9%87%D8%A7%DB%8C-%D9%85%D8%B7%D8%A7%D9%84%D8%A8)
[^5]: رک [اینجا](https://blog.eledah.ir/%D9%BE%D8%B1%D9%88%DA%98%D9%87%E2%80%8C%D9%87%D8%A7/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA%E2%80%8C%D8%A8%D8%B1%D8%AF%D8%A7%D8%B1%DB%8C/%D8%A7%D8%B2-%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA-%D8%A8%D9%87-%D8%B3%D8%A7%DB%8C%D8%AA-%D8%A8%D8%A7-%DA%A9%D9%88%D8%A7%D8%B1%D8%AA%D8%B2#%DA%86%D8%B1%D8%AE%D8%A7%D9%86%D8%AF%D9%86-%D9%81%D9%84%D8%B4%D9%87%D8%A7%DB%8C-explorer)
