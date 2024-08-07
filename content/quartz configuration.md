---
title: تنظیمات من برای کوارتز
aliases:
  - تنظیمات من برای کوارتز
date: 2024-05-29
draft: false
tags:
  - 🌱نهال
---
من یکسری تنظیمات رو روی کوارتز اعمال کردم احتمالا بعضی از اونا به درد شما هم میخوره. اونا رو اینجا می نویسم هر کدومش که به کارتون میومد ازش استفاده کنید.
اگر کد نویسی بلد نیستید نگران نباشید (چون منم بلد نیستم). فقط کافیه کدی که گذاشتم رو توی فایلی که مشخص کردم قرار بدین و سیو کنید.


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
نمی دونم چرا با اینکه همه چیز معادل فارسی داشت اما دو مورد فارسی نشده بود.

<br/>

**۱. کلمه Home در مسیر سایت**

از فایل `Breadcrumbs.tsx` کلمه home رو سرچ کنید و به جاش کلمه خانه یا صفحه اصلی رو بنویسید.

فایل: `quartz\components\Breadcrumbs.tsx`

به این شکل:
```
rootName: "خانه"
```

 <br/> <br/>

**۲. نتیجه جستجو**

اگر عبارتی که سرچ کردید داخل سایت نباشه این متن رو نمایش میده:

No results. Try another search term

از فایل `search.inline.ts` می تونید متنش رو تغییر بدید.
![[searchtext.jpg]]

فایل: `quartz\components\scripts\search.inline.ts`

کد:
```
if (finalResults.length === 0) {
  results.innerHTML = `<a class="result-card no-match">
	  <h3>نتیجه‌ای یافت نشد</h3>
	  <p>عبارت دیگری را امتحان کنید</p>
  </a>`
}
```


<br/> <br/>


## استایل
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
بک گراندش رو خاکستری کردم. فونتش رو هم گذاشتم روی بادی فونت.

```
pre {
	border: 1px solid var(--gray);
	background: var(--lightgray);
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

یک سری تنظیمات هم برای دیاگرام تعریف کردم که استایل بهتری داشته باشه.
- دایرکشن رو گذاشتم روی rtl. چون معمولا از فارسی استفاده می کنم راستچین باشه بهتره.
- برای بهتر دیده شدن پس‌زمینه رو شفاف کردم. (چون بک گراند بلوک code رو خاکستری کرده بودم، دیاگرام هم خاکستری شده بود)
- برای خوانایی بهتر فونتش رو گذاشتم روی body font که در واقع همون فونت وزیره.
- آیکون «کپی در کلیپ بورد» هم مخفی کردم. اینطوری کاربر فکر میکنه این دیاگرام یه تصویره نه یه قطعه کد.

```
.mermaid {
    direction: rtl !important;

}

pre:has(>code.mermaid) {
    background-color: rgba(255, 255, 255, 0);

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
من ترجیح دادم که متن فوتر وسط چین باشه.

```
footer {
	text-align: center;
}

footer>ul {
	justify-content: center;
}
```

<br/> <br/>