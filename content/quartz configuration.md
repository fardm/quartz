---
title: تنظیمات من برای کوارتز
aliases:
  - تنظیمات من برای کوارتز
date: 2024-05-29
draft: false
tags: 
status: 🌱نهال
---
در طول استفاده از کوارتز، به مرور زمان تغییرات و اصلاحات مختلفی برای بهبود و اصلاح عمکلرد سایت انجام دادم. در این یادداشت فهرستی از این تغییرات را مستند کردم. این موارد نخست به عنوان یک مرجع شخصی عمل می‌کند تا در صورت نیاز بتوانم به راحتی تنظیمات قبلی را ویرایش کنم. از طرف دیگر می‌تواند راهنمای مفیدی باشد برای کسانی که تمایل دارند مشابه آن را روی سایت خود پیاده‌سازی کنند.
<br/> <br/>
## یک) اطلاعات مربوط به یادداشت (ContentMeta)
بعد از عنوان مطلب اطلاعاتی مثل تاریخ و زمان تقریبی مطالعه زیر آن نمایش داده می‌شود. من ترجیح دادم این تنظیمات را به آن اضافه کنم:
<br/><br/>
### زمان تقریبی مطالعه
بنا به دلایلی[^1] زمان تقریبی مطالعه را غیر فعال کردم. یک ویرگول هم برای جدا سازی این اطلاعات بین آن ها قرار می‌گرفت که آن را هم مخفی کردم.(باتوجه به استایلی که به آن اعمال کردم بودن آن ضرورتی نداشت) با اضافه کردن دستور زیر به فایل `quartz.layout.ts` نمایش این دو مورد غیرفعال می‌شود:
```
Component.ContentMeta({showReadingTime: false, showComma: false,})
```

<br/>

### تاریخ
به طور پیشفرض کوارتز فقط یک تاریخ را به کاربر نشان می‌دهد که نهایتا می توانید زمان آن را روی تاریخ انتشار یا تاریخ آخرین آپدیت تنظیم کنید. من تمایل داشتم علاوه بر تاریخ انتشار تاریخ آخرین به‌روزرسانی هم برای کاربر قابل مشاهده باشد. [^2] با اضافه کردن کد زیر به فایل `quartz/components/ContentMeta.tsx` این کار قابل انجام است. با این دستور درصورتی که تاریخ انتشار و آخرین به‌روزرسانی یکسان نباشد علاوه بر تاریخ انتشار تاریخ آخرین به‌روزرسانی هم اضافه شده و به کاربر نمایش داده می‌شود.

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
	margin: 5px;
	font-size: 0.9em;
}

.content-meta {
	color: var(--darkgray);
	display: flex;
	flex-wrap: wrap;
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


## دو) فارسی سازی
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
## سه) استایل سفارشی
این تنظیمات مربوط به استایل ظاهری سایت است. این کد ها باید در فایل زیر قرار بگیرند:
 `quartz\styles\custom.scss`

### فهرست مطالب و بک لینک
برای تمایز بیشتر بوردر و بک‌گراند خاکستری روشن اضافه کردم. به اول هر سطر هم بولت پوینت اضافه کردم. 


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
### سایر تنظیمات
یکسری تنظیمات دیگر هم برای استایل سایت اضافه کردم که جزئیات آن را میتوانید [در اینجا](https://github.com/fardm/quartz/blob/v4/quartz/styles/custom.scss) مشاهده کنید.

<br/> <br/>

## چهار) لینک بازگشت در صفحه 404
صفحه 404 هیچ لینکی به صفحه اصلی ندارد و کاربر نمیتواند به سایت برگردد.


<iframe width="100%" height="100%" src="https://ifard.ir/img/before-after-404.html"></iframe>


با اضافه کردن کد زیر لینک بازگشت به صفحه اصلی به این صفحه اضافه می‌شود.

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

[^1]: یکی از مشکلات محاسبه اشتباه مدت زمان تقریبی مطالعه بود که مقداری بیشتر از حالت معمولی آن را تخمین میزد. ظاهرا به خاطر زیاد بودن کلمات ربط در زبان فارسی نسبت به انگلیسی این اتفاق می افتد. مشکل دیگر تفاوت سرعت خواندن هرکس با یکدیگر است مضافا اینکه با توجه به دانش و سطح اطلاعات هر کس مدت زمان مطالعه نیز کم و زیاد می شود. به همین خاطر فکر میکنم نمایش مدت مطالعه یک فیلد اضافی است و کاربرد جدی ندارد.
[^2]: این کد را از سایت [کوانتوم گاردن](https://quantumgardener.info/) کپی کردم. [از اینجا](https://github.com/quantumgardener/qg.info/blob/v4/quartz/components/ContentMeta.tsx) میتوانید کدهای اصلی را مشاهده کنید.
[^3]: این کد را از سایت کریستالین کپی کردم. ([اینجا](https://blog.eledah.ir/%D9%BE%D8%B1%D9%88%DA%98%D9%87%E2%80%8C%D9%87%D8%A7/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA%E2%80%8C%D8%A8%D8%B1%D8%AF%D8%A7%D8%B1%DB%8C/%D8%A7%D8%B2-%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA-%D8%A8%D9%87-%D8%B3%D8%A7%DB%8C%D8%AA-%D8%A8%D8%A7-%DA%A9%D9%88%D8%A7%D8%B1%D8%AA%D8%B2#%D8%AD%D8%B0%D9%81-%D8%B9%D9%86%D9%88%D8%A7%D9%86-%D9%88-%D8%AA%D8%A7%D8%B1%DB%8C%D8%AE-%D8%A7%D8%B2-%D8%B5%D9%81%D8%AD%D9%87%D9%94-%D8%A7%D9%88%D9%84))