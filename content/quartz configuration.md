---
title: تنظیمات من برای کوارتز
aliases:
  - تنظیمات من برای کوارتز
date: 2024-05-29
draft: false
tags:
---
من یکسری تنظیمات رو روی کوارتز اعمال کردم احتمالا بعضی از اونا به درد شما هم میخوره. اونا رو اینجا می نویسم هر کدومش که به کارتون میومد ازش استفاده کنید.
اگر کد نویسی بلد نیستید نگران نباشید (چون منم بلد نیستم). فقط کافیه کدی که گذاشتم رو توی فایلی که مشخص کردم قرار بدین و سیو کنید.


## صفحه 404
ارور صفحه 404 هیچ لینکی به صفحه اصلی نداره و کاربر نمیتونه بقیه صفحات رو ببینه. با این کد لینک بازگشت به صفحه اصلی به این صفحه اضافه میشه. کد رو داخل این فایل قرار بدین:

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

اگر جتسجو درست نباشه متنی که نمایش میده فارسی نیست. از فایل `search.inline.ts` می تونید متنش رو تغییر بدید.
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

## استفاده از آیکون
میتونید با سایت [Font Awesome](https://fontawesome.com/) از آیکون ها داخل سایت اضافه کنید. حدود 2000 تا آیکون رایگان داره. (برای آیکون های بیشتر باید اکانت پریمیومش رو تهیه کنید) دستور العمل راه‌اندازی اش رو می تونید [از اینجا](https://docs.fontawesome.com/web/) مطالعه کنید. روش های مختلفی داره من از این روش استفاده کردم.

بعد از ثبت نام داخل سایت، باید یه کیت بسازید تا یه کد جاوا اسکریپت بهتون بده. اون کد رو توی تگ `<head>` قرار بدین. یعنی توی این فایل:

`quartz\components\Head.tsx`

تموم شد. حالا کافیه کد html هر آیکونی رو که می خواید توی نوشته تون قرار بدید.

<br/><br/>

من برای لینک شبکه های اجتماعی که توی فوتر هست هم از این آیکون ها استفاده کردم. برای اینکار باید فایل Footer.tsx رو ویرایش کنید.

`quartz\components\Footer.tsx`

کدی که بین `<ul> </ul>` هست رو حذف کنید و این رو اضافه کنید. (به جای اسلش لینک تون رو بذارید)

```
<ul>
<a href="/"><i class="fa-brands fa-instagram"></i> اینستاگرام</a>
<a href="/"><i class="fa-brands fa-telegram"></i> تلگرام</a>
<a href="/"><i class="fa-brands fa-twitter"></i> توییتر</a>
</ul>
```

<br/> <br/>

## اضافه کردن کامنت
برای اضافه کردن کامنت از سایت [disqus](https://disqus.com/) استفاده کردم.
بعد از ثبت نام و تنظیمات اولیه یک کد جاوا اسکریپت بهتون میده که باید اون رو توی فوتر سایت قرار بدین. من این کد رو به `Footer.tsx` اضافه کردم ولی ارور داد. فعلا به صورت دستی انتهای هر یادداشت اضافه می کنم. برای اینکه مجبور نباشم هر دفعه کد رو کپی کنم یک تمپلیت برای یادداشت جدید ساختم و انتهای اون کد رو اضافه کردم. هر موقع یادداشت جدید بسازم کدها از قبل جایگذاری شدن.

این روش یه مزیت دیگه هم داره اینکه خودتون میتونید مشخص کنید چه صفحاتی کامنت داشته باشند چه صفحاتی نداشته باشند. اگر کد رو توی فوتر قرار میدادین (چون کوارتز تنظیماتی برای مدیریت کامنت نذاشته) همه صفحات کامنت میگرفتن حتی صفحه اول و برچسب‌ها.

<br/> <br/>
## مسیر یابی SPA
 توی حالت پیش فرض وقتی روی لینک‌های داخلی کلیک می‌کنید صفحات به صورت کامل لود نمیشن. به همین خاطر کامنت‌ها و آیکون‌ها هم دیده نمیشن و کاربر باید صفحه رو رفرش کنه.([+](https://github.com/jackyzha0/quartz/issues/1103)) برای اینکه این مشکل بر طرف بشه باید مسیر یابی SPA رو غیر فعال کنید.
 
برید سراغ فایل `quartz.config.ts` و فیلد `enableSPA` رو بذارید روی `false`.([+](https://quartz.jzhao.xyz/features/SPA-Routing))

<br/> <br/>

## ظاهر سایت
این تنظیمات مربوط به استایل ظاهری سایته. ببینید کدومش به کارتون میاد ازش استفاده کنید.

### فهرست مطالب
یک بوردر به فهرست اضافه کردم که ظاهرش بهتر بشه و از محتوای اصلی بیشتر تفکیک بشه. استایل لیست دایره ای هم بهش اضافه کردم که زیبا تر بشه. کد رو به انتهای این فایل اضافه کنید:

فایل: `quartz\styles\custom.scss`

کد:
```
.toc {
    border-radius: 5px;
    border: 1px solid var(--lightgray);
    padding: 12px; 
    font-size: 0.9rem;
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
```

<br/> <br/>
### بک لینک
به بک لینک هم یه بوردر اضافه کردم و استایلش رو گذاشتم روی لیست دایره ای.
این کد رو به انتهای این فایل اضافه کنید:

فایل: `quartz\styles\custom.scss`

کد:
```
.backlinks>ul {
    border-radius: 5px;
    border: 1px solid var(--lightgray);
    list-style: disc;
    padding-right: 35px;
    padding-top: 10px;
    padding-left: 10px;
    font-size: 0.95rem;
}
```

<br/> <br/>

### بلوک نقل قول
برای تفکیک بهتر یک بک گراند بهش اضافه کردم.

فایل: `quartz\styles\base.scss`

کد:
```
.blockquote {
    background-color: #5960cf0a;
    padding: 15px;
    border-radius: 10px;
}
```

<br/> <br/>
### وسط چین کردن فوتر
من ترجیح دادم که متن فوتر وسط چین باشه. فایل `footer.scss` رو باز کنید و `text-align` رو بذارید روی `center`.
بعد از `flex-direction` هم `justify-content: center` رو اضافه کنید.

فایل: `quartz\components\styles\footer.scss`

به این شکل:
```
footer {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0.7;

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    margin-top: -1rem;

  }
}
```

<br/> <br/>
### دیاگرام
یک سری تنظیمات هم برای دیاگرام تعریف کردم که استایل بهتری داشته باشه.
- دایرکشن رو گذاشتم روی rtl. چون معمولا از فارسی استفاده می کنم راستچین باشه بهتره.
- برای بهتر دیده شدن پس‌زمینه رو شفاف کردم. (چون بک گراند بلوک code رو خاکستری کرده بودم، دیاگرام هم خاکستری شده بود)
- برای خوانایی بهتر فونتش رو گذاشتم روی body font که در واقع همون فونت وزیره.
- آیکون «کپی در کلیپ بورد» هم مخفی کردم. اینطوری کاربر فکر میکنه این دیاگرام یه تصویره نه یه قطعه کد.

فایل: `quartz\styles\custom.scss`

کد:
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

<br/><br/><br/><br/>

---

> [!comments] دیدگاه‌ها
> <div id="disqus_thread"></div>
> <script> (function() { 	var d = document, s = d.createElement('script'); s.src = 'https://ifardmim.disqus.com/embed.js'; s.setAttribute('data-timestamp', +new Date()); (d.head || d.body).appendChild(s); })(); </script>
> <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>




