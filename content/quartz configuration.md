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

## فهرست مطالب
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
## بک لینک
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

## کلمه home در مسیر سایت
نمی دونم چرا با اینکه همه چیز معادل فارسی داشت اما این کلمه به خانه تغییر پیدا نکرده بود. از فایل زیر کلمه home رو سرچ کنید به جاش کلمه خانه یا صفحه اصلی رو بنویسید.

فایل: `quartz\components\Breadcrumbs.tsx`

به این شکل:
```
rootName: "خانه"
```

<br/> <br/>

## بلوک نقل قول
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
## وسط چین کردن فوتر
من ترجیح دادم که متن فوتر وسط چین باشه. فایل زیر رو باز کنید و `text-align` رو بذارید روی `center`.
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


<br/><br/>



