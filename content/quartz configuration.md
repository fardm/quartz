---
title: تنظیمات من برای کوارتز
aliases:
  - تنظیمات من برای کوارتز
date: 2024-05-29
draft: false
tags: 
status: 🌿درختچه
parent: "[[obsidian|🔮 نرم‌افزار ابسیدین]]"
hierarchy: "5"
---
در طول استفاده از کوارتز، به مرور زمان تغییرات و اصلاحات مختلفی برای سفارشی‌سازی سایت انجام دادم. در این یادداشت فهرستی از این تغییرات را مستند کردم. این موارد نخست به عنوان یک مرجع شخصی عمل می‌کند تا در صورت نیاز بتوانم به راحتی تنظیمات قبلی را ویرایش کنم. از طرف دیگر می‌تواند راهنمای مفیدی باشد برای کسانی که تمایل دارند مشابه آن را روی سایت خود پیاده‌سازی کنند.
<br/> <br/>

## ۱) متاداده‌های یادداشت
متاداده اطلاعات مربوط به یک یادداشت است که بعد از عنوان اصلی نمایش داده می شود. مثل تاریخ انتشار زمان تقریبی مطالعه. من ترجیح دادم تنظیمات زیر را به آن اضافه کنم:
<br/><br/>
### زمان تقریبی مطالعه
بنا به دلایلی[^1] زمان تقریبی مطالعه را غیر فعال کردم. یک ویرگول هم برای جدا سازی این اطلاعات بین آن ها قرار می‌گرفت که آن را هم مخفی کردم. با اضافه کردن دستور زیر به فایل `quartz.layout.ts` نمایش این دو مورد غیرفعال می‌شود.

<p align="left"><code>quartz.layout.ts</code></p>

```ts
Component.ContentMeta({showReadingTime: false, showComma: false,})
```

<br/>

### تاریخ
به طور پیشفرض کوارتز فقط یک تاریخ را به کاربر نشان می‌دهد که نهایتا می توانید زمان آن را روی تاریخ انتشار یا تاریخ آخرین آپدیت تنظیم کنید. من تمایل داشتم علاوه بر تاریخ انتشار، تاریخ آخرین به‌روزرسانی هم برای کاربر قابل مشاهده باشد.[^2] با این دستور درصورتی که تاریخ انتشار و آخرین به‌روزرسانی یکسان نباشد علاوه بر تاریخ انتشار، تاریخ آخرین به‌روزرسانی هم به کاربر نمایش داده می‌شود.

<p align="left"><code>quartz/components/ContentMeta.tsx</code></p>

```tsx
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
یکی از مواردی که در روش یادداشت برداری [[digital garden| دیجیتال گاردن]] استفاده می‌شود مشخص کردن میزان رشد و پیشرفت یادداشت است. `🌱نهال`، `🌿درختچه` و `🌳همیشه‌سبز` سه موردی است که برای علامت گذاری وضعیت نوشته استفاده می‌کنم. در حالت عادی اگر پراپرتی خاصی را در یادداشت وارد کنید اتفاقی نمی افتد و چیزی در سایت نمایش داده نمی شود. پس ابتدا لازم است این پراپرتی را به کوارتز معرفی کنیم تا آن را شناسایی کرده و اطلاعات آن را نمایش دهد. با اضافه کردن کد زیر به فایل `ContentMeta.tsx` این تنظیم اعمال می شود. 
<p align="left"><code>ContentMeta.tsx </code></p>

```tsx
  const status = fileData.frontmatter?.status || "نامشخص";
  if (status !== "نامشخص") {
	segments.push(` ${status} `)
  }
```

این دستور نوشته‌ها را بررسی می‌کند اگر دارای پراپرتی با عنوان status باشند محتوای آن را نمایش می دهد. 
```md
---
status: 🌱نهال
---
```

<br/>

### استایل
برای این بخش یک بک‌گراند خاکستری روشن اضافه کردم که ظاهر بهتر و متمایزی داشته باشد.

<p align="left"><code>quartz\styles\custom.scss</code></p>

```scss
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
طبیعتا صفحه اول نیاز به نمایش این اطلاعات ندارد. برای مخفی کردن این موارد از صفحه اول باید کد زیر را به فایل `ContentMeta.tsx` اضافه کنید. باید بعد از `const text = fileData.text` قرار بگیرد.

<p align="left"><code>ContentMeta.tsx</code></p>

```tsx
if (fileData.slug === "index") {
	return <></>
}
```

نمایش عنوان صفحه هم ضرورتی ندارد برای حذف آن کافی است کد بالا را به فایل `quartz/components/ArticleTitle.tsx` اضافه کنید. باید بعد از `const title = fileData.frontmatter?.title` قرار بگیرد.[^3]

### اضافه کردن تصویر شاخص
یکی از مواردی که معمولا در سایت ها استفاده می شود استفاده از تصویر شاخص برای یادداشت هاست. در کوارتز قابلیتی برای این مورد وجود ندارد. البته میتوان به صورت دستی یک تصویر را ابتدای یادداشت اضافه کرد. اما من بنا به دلایلی[^4] ترجیح دادم یک پراپرتی با عنوان image اضافه کنم و تصویر شاخص را در این پراپرتی وارد کنم.

با اضافه کردن کد زیر این قابلیت به کوارتز اضافه می شود. این کد باید بعد از `const segmentsElements` و قبل از `} else {` قرار بگیرد. 

<p align="left"><code>ContentMeta.tsx</code></p>

```tsx
      return (
        <>
          <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
            {segmentsElements}
          </p>

          {/* Display image */}
          {fileData.frontmatter?.image && (
            <div style={{ marginTop: "10px" }}>
              <img
                src={`/img/${fileData.frontmatter.image}`}
                alt="Note Image"
                style={{ maxWidth: "100%", height: "auto", display: "block" }}
              />
            </div>
          )}
        </>
      )
```

حالا کافی است در یادداشت خود یک پراپرتی با عنوان image اضافه کرده و اسم تصویر را وارد کنید به این شکل:
```md
image: example.png
```

<br/> <br/>

## ۲) صفحه بندی
در حالت عادی عنوان صفحه در سایدبار سمت چپ قرار گرفته و در سایدبار سمت راست گراف‌، فهرست و بک لینک. این ترتیب برای ما که از زبان فارسی استفاده می کنیم مناسب نیست. بهتر است برعکس باشد. یعنی عنوان صفحه سمت راست و باقی موارد سمت چپ باشد.

تنظیم این موارد در فایل `quartz.layout.ts` انجام می شود. در نهایت من از این ترتیب استفاده کردم:
```ts
beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta({showReadingTime: false, showComma: false,}),
    Component.MobileOnly(Component.TableOfContents()),
    
  ],
  left: [  
    Component.Graph({localGraph: {showTags: false,}, globalGraph: {showTags: false,}}),
    Component.Backlinks(),  
 
  ],
  right: [
    Component.PageTitle(),
    Component.Darkmode(),
    Component.Search(),    
    Component.DesktopOnly(Component.TableOfContents()),    
  ],
```

البته از آنجایی که شکست صفحه از سمت چپ انجام می شود در حالت موبایل یک مشکل ایجاد می شود. عنوان صفحه به انتهای صفحه منتقل شده و گراف و بک لینک ابتدای صفحه قرار می گیرند. برای حل این مشکل کافی است در فایل ... کد زیر را وارد کنیم:

<p align="left"><code>custom.scss</code></p>

```scss
    @media (max-width: 1510px) {
        .page>#quartz-body {
            flex-direction: column-reverse;
        }
    }

    @media (max-width: 1510px) {
        .page>#quartz-body .sidebar.left {
            align-items: normal;
            flex-direction: column;
        }
    }

    @media (max-width: 1510px) {
        .page>#quartz-body .sidebar.right>* {
            min-width: fit-content;
        }
    }

    @media (max-width: 1510px) {
        .page>#quartz-body .sidebar.right {
            align-items: center;
        }
    }

    // جستجو
    .search {
        // max-width: none;
        width: fit-content;
        max-width: fit-content;
    }

    .search>#search-icon {
        width: fit-content;
    }
    
    // دارک مود
    .darkmode {
        max-width: fit-content;
    }
```

علاوه بر این باکس جتسجو را هم مختصر تر کردم. عبارت جستجو را مخفی کردم تا فقط آیکون ذره بین باقی بماند. در فایل `Search.tsx` کد زیر را در حالت کامنت گذاشتم که نمایش داده نشود. در کد css بالا هم عرض آن را فیت کردم که بخش اضافی آن کامل حذف شود.

<p align="left"><code>Search.tsx</code></p>

```tsx
<p>{i18n(cfg.locale).components.search.title}</p>
<div></div>
```

<br/><br/>

## ۳) فارسی سازی
خوشبختانه کوارتز از زبان فارسی پشتیبانی می‌کند. و با ویرایش فایل `fa-IR.ts` می‌توان از معادل فارسی کلمات استفاده کرد.  اما چند مورد وجود دارد که که فارسی سازی نشده:
<br/><br/>

### کلمه Home در Breadcrumbs
کلمه home در Breadcrumbs (مسیر راهنمای سایت) به فارسی تبدیل نشده. با اضافه کردن دستور زیر به فایل `quartz.layout.ts` می توانید کلمه آن را تغییر دهید:

```ts
    Component.Breadcrumbs({rootName: "خانه",}),
```

 <br/>

### نتیجه جستجو
اگر در باکس جستجو عبارتی را سرچ کنید و آن کلمه در سایت نباشد این متن را نمایش می دهد:
![[searchtext.jpg]]

با ویرایش فایل `search.inline.ts` می‌توانید آن را اصلاح کنید.

<p align="left"><code>quartz\components\scripts\search.inline.ts</code></p>

```ts
if (finalResults.length === 0) {
  results.innerHTML = `<a class="result-card no-match">
	  <h3>نتیجه‌ای یافت نشد</h3>
	  <p>عبارت دیگری را امتحان کنید</p>
  </a>`
}
```

<br/>

### عنوان footnote
اگر از پاورقی استفاده کنید به طور پیشفرض یک عنوان با عبارت footnote به انتهای صفحه اضافه می‌شود. با قرار دادن کد زیر در `custom.scss` می توانید آن را با یک متن دیگر جایگزین کنید.[^5]

```scss
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

## ۴) صفحه 404
صفحه 404 لینک بازگشتی به سایت ندارد و کاربر نمی‌تواند به سایت برگردد. با اضافه کردن کد زیر به فایل `404.tsx` لینک بازگشت به صفحه اصلی در این صفحه نمایش داده می‌شود. این کد باید بعد از `<p>{i18n(cfg.locale).pages.error.notFound}</p>` قرار بگیرد.

<p align="left"><code>quartz\components\pages\404.tsx</code></p>

```tsx
<p>بازگشت به <a href="/">صفحه اصلی</a></p>
```

<iframe width="100%" height="290px" style="border: none; border-radius: 10px;" src="before-after-404-v5.html"></iframe>

اگر قابلیت کامنت را فعال کرده باشید برای این صفحات هم کامنت نمایش داده می شود. با اضافه کردن کد زیر به فایل `Comments.tsx` می توانید نمایش آن را غیرفعال کنید.

<p align="left"><code>quartz/components/Comments.tsx</code></p>

```tsx
if (fileData.slug === "404" || !fileData.slug) { return <></> }
```


<br/><br/>

## ۵) تغییر فوتر
به غیر از لینک‌ها باقی موارد را حذف کردم. برای لینک ها هم ترجیح دادم به جای متن، از لوگو و آیکون استفاده کنم. یک دکمه برگشت به بالا هم اضافه کردم. با حذف کدهای قبلی و اضافه کردن کد زیر این تغییرات اعمال می شود. توجه داشته باشید که اگر کد زیر را جایگزین کنید دیگر ویرایش لینک ها از طریق فایل `quartz.layout.ts` امکان پذیر نیست و باید همین کد را تغییر دهید.

<p align="left"><code>quartz\components\Footer.tsx</code></p>


```tsx
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
```scss
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

## ۶) ظاهر سایت
این تنظیمات مربوط به استایل ظاهری سایت است.


### فهرست مطالب و بک لینک
برای تمایز بیشتر بوردر اضافه کردم. به اول هر سطر هم بولت پوینت اضافه کردم. 

<p align="left"><code>custom.scss</code></p>

```scss
// فهرست مطالب
    .toc {
        border-radius: 5px;
        border: 1px solid var(--lightgray);
        padding: 12px; 
        font-size: 0.9rem;
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

<p align="left"><code>custom.scss</code></p>

```scss
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
````md
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

تنظیم استایل دیاگرام در خود آن امکان پذیر است. دو خط آخر کد بالا استایل این دیاگرام را تعریف می‌کند. علاوه براین تنظیمات دیگری هم به فایل `custom.scss` اضافه کردم:
- دایرکشن را روی rtl گذاشتم، چون معمولا از فارسی استفاده می کنم.
- بک‌گراند را شفاف کردم، چون بک‌گراند code رو خاکستری کرده بودم، دیاگرام هم خاکستری شده بود.
- فونت را روی body font گذاشتم.
- آیکون «کپی در کلیپ بورد» را مخفی کردم.

<p align="left"><code>custom.scss</code></p>

```scss
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
```html
<div style="text-align: center;">
<button 
	class="my-button"	onclick="window.open('https://www.example.com/', '_blank');">
     کلیک کنید
</button>
</div>
```

برای استایل هم این تنظیمات را اضافه کردم:

<p align="left"><code>custom.scss</code></p>

```scss
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

<p align="left"><code>custom.scss</code></p>

```scss
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
این آیکون در قسمت های مختلف مثل فهرست، اکسپلور و کالوت استفاده شده. جهت این آیکون در حالت بسته باید سمت چپ باشد در حالی که به سمت راست است. برای چرخش آن باید مقدار `rotateZ` را در فایل های مربوط به هر کدام از منفی90 به مثبت90 تغییر دهید.[^6] 

فهرست: `quartz/components/styles/toc.scss`

اکسپلور: `quartz/components/styles/explorer.scss`

کالوت: `quartz/quartz/styles/callouts.scss`

به این شکل:
```scss
  &.collapsed .fold {
    transform: rotateZ(90deg);
  }
```

<br/>

### کالوت سفارشی
برای تغییر رنگ کالوت ها می توانید فایل `quartz/quartz/styles/callouts.scss` را ویرایش کنید. علاوه بر این میتوانید کالوت های جدید با آیکون های متفاوت اضافه کنید. مثلا من یک کالوت زرد رنگ با آیکون لامپ اضافه کردم:

> [!ideas] لامپ
> 

 ابتدای فایل `callouts.scss` آیکون ها به این شکل `--callout-icon` مشخص شدند. یک خط را کپی کنید و اسم مورد نظر و کد SVG آیکون را جایگزین کنید. به این شکل:
 ```scss
   --callout-icon-ideas: url('data:image/svg+xml; utf8, <svg id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m17.994 2.286a9 9 0 0 0 -14.919 5.536 8.938 8.938 0 0 0 2.793 7.761 6.263 6.263 0 0 1 2.132 4.566v.161a3.694 3.694 0 0 0 3.69 3.69h.62a3.694 3.694 0 0 0 3.69-3.69v-.549a5.323 5.323 0 0 1 1.932-4 8.994 8.994 0 0 0 .062-13.477zm-5.684 19.714h-.62a1.692 1.692 0 0 1 -1.69-1.69s-.007-.26-.008-.31h4.008v.31a1.692 1.692 0 0 1 -1.69 1.69zm4.3-7.741a7.667 7.667 0 0 0 -2.364 3.741h-1.246v-7.184a3 3 0 0 0 2-2.816 1 1 0 0 0 -2 0 1 1 0 0 1 -2 0 1 1 0 0 0 -2 0 3 3 0 0 0 2 2.816v7.184h-1.322a8.634 8.634 0 0 0 -2.448-3.881 7 7 0 0 1 3.951-12.073 7.452 7.452 0 0 1 .828-.046 6.921 6.921 0 0 1 4.652 1.778 6.993 6.993 0 0 1 -.048 10.481z"/></svg>');
```

کمی پایین تر خود کالوت ها وارد شدند. یک مورد رو کپی کنید و عنوان کالوت و آیکون را تغییر بدهید. رنگ ها را هم میتوانید ویرایش کنید. به این شکل:

```scss
  &[data-callout="ideas"] {
    --color: #d98b19;
    --border: #cb9f1b47;
    --bg: #ffc8220f;
    --callout-icon: var(--callout-icon-ideas);
  }
```

حالا می توانید از این کالوت در نوشته خود استفاده کنید. به این شکل:
```md
> [!ideas] لامپ
> 
```

برای اینکه در خود ابسیدین هم این کالوت با آیکون و رنگ اختصاصی نمایش داده شود می توانید از پلاگین Admonition یا Callout Manager استفاده کنید.

<br/>

### اضافه کردن آیکون به عنوان سایت
یک آیکون به عنوان سایت اضافه کردم. کد SVG آیکون را به فایل `PageTitle.tsx` اضافه کردم.

<p align="left"><code>quartz\components\PageTitle.tsx</code></p>


```tsx
  return (
    <h1 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor" style="vertical-align: middle;"><path d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 32 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z"/></svg>
      &nbsp;{title}</a>
    </h1>
  )
```

<br/>

### نمای کارتی برای جدول‌
این تنظیم استایل جدول را به حالت کارت تبدیل می‌کند. مشابه حالتی که [تم minimal](https://minimal.guide/cards) برای جدول‌های dataview می‌سازد. یک حالت دیگر هم اضافه کردم که باعث می شود کارت‌ها فقط در یک ردیف نمایش داده شوند و باقی کارت‌ها با اسکرول کردن قابل مشاهده باشند. برای زمانی که تعداد کارت‌ها زیاد باشد این روش مناسب تر است.

برای استفاده از این روش ابتدا این کد را به فایل `custom.scs` اضافه کنید.
```scss
// نمای کارتی جدول - حالت گرید
    // استایل پایه
    .card-g {
        tr {
            display: flex;
            flex-direction: column;
            border: 1px solid #b5b5b526;
            background-color: #b5b5b518;
            border-radius: 8px;
            font-size: 0.9em;
            line-height: 1.5em;
            overflow: hidden;
            padding-bottom: 10px;
        }

        .table-container>table>* {
            display: grid;
            gap: 15px;
            grid-template-columns: repeat(4, 1fr);
        }

        .table-container>table {
            margin: 0;
            width: 100%;
        }

        td {
            text-align: center;
            padding: .2rem;
        }


        .table-container>table td img {
            margin: .7rem .7rem 0 .7rem;
            
        }

        .table-container>table>thead {
            display: none;
        }

    }

    // تعداد ستون
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


// نمای کارتی جدول - حالت اسکرول

    // استایل پایه
    .card-s {
        tr {
            display: flex;
            flex-direction: column;
            border: 1px solid #b5b5b526;;
            background-color: #b5b5b518;
            border-radius: 8px;
            padding: 10px;
            font-size: 0.9em;
            line-height: 1.5em;
            overflow: hidden;
            width: 150px;
            justify-content: space-around;
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
            padding: 0;
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



// استایل های سفارشی مشترک: هم گرید هم اسکرول

    // نمایش متن در یک سطر و مخفی کردن کاراکترهای اضافی
    .nowarp td {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    // نمایش متن در دو سطر و مخفی کردن کاراکترهای اضافی
    .nowarp2 td {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
    }

    // نسبت تصویر
    .c1-1 .table-container>table td img {
        aspect-ratio: 1 / 1;
        object-fit: contain;
        background-color: #a5a5a526;
    }

    .c16-9 .table-container>table td img {
        aspect-ratio: 16 / 9;
        object-fit: contain;
        background-color: #a5a5a526;
    }
```

برای اعمال این استایل می‌توانید از دو روش استفاده کنید:

اگر میخواهید روی همه جدول‌های موجود در یادداشت اعمال شود یک پراپرتی با عنوان `cssclasses` به یادداشت خود اضافه کنید و کلاس دلخواه را وارد کنید. به این شکل:
```md
---
cssclasses: card-g c-3
---
```

اگر نمی خواهید این استایل روی همه جدول‌ها اعمال شود می توانید جدول خود را در تگ div قرار داده و کلاس مورد نظر را برای آن تعریف کنید. به این شکل:
```html
<div class="card-g c-2">
| class  | description  |
| ------ | ------------ |
| card-g | grid style   |
| card-s | scroll style |
</div>
```

<br/>

> [!example] راهنمای کلاس‌ها
> **کلاس های مربوط به حالت گرید** 
> |   |                             |
> | ------ | -------------------------------------- |
> | card-g | یک نمای کارتی با 4 ستون در ردیف‌های متعدد می‌سازد |
> | c-2    | نمایش کارت ها در 2 ستون                |
> | c-3    | نمایش کارت ها در 3 ستون                |
> | c-5    | نمایش کارت ها در 5 ستون                |
> | c-6    | نمایش کارت ها در 6 ستون                |
> 
> ![[Pasted image 20240824171442.jpg|400]]
> <br/>
> 
> **کلاس های مربوط به حالت اسکرول**
> |   |                          |
> | ------ | ----------------------------------- |
> | card-s | یک نمای کارتی با عرض 150px در یک ردیف میسازد |
> | w100   | تنظیم عرض کارت روی 100px            |
> | w200   | تنظیم عرض کارت روی 200px            |
> | w300   | تنظیم عرض کارت روی 300px            |
> 
> ![[Pasted image 20240824171737.jpg|400]]
> <br/>
> 
> **کلاس های مشترک**
> |   |                          |
> | ------ | ----------------------------------- |
> | nowarp    | متن را در یک خط نگه داشته و کاراکتر های اضافی را مخفی می‌کند                |
> | nowarp2    | متن را در دو خط نگه داشته و کاراکتر های اضافی را مخفی می‌کند                |
> | c1-1    | نسبت تصویر را 1:1 تنظیم می‌کند                |
> | c16-1    | نسبت تصویر را 16:9 تنظیم می‌کند                |
> 
> ![[calsshelp.jpg|400]]
> 

<br/><br/>

## ۷) دسته بندی و ساخت فهرست خودکار
دسته بندی در سایت باعث می شود کاربران مطالب را راحت تر پیدا کنند. کوارتز در حال حاضر قابلیتی برای دسته بندی ندارد و نهایتا میتوان از تگ یا فولدر استفاده کرد.

من ابتدا صفحات مستقلی را برای موضوعات ایجاد کردم و به صورت دستی لینک مطالب مرتبط را در آن وارد می کردم. اخیرا از پلاگین دیتاویو استفاده میکنم که به طور اتوماتیک این کار را انجام می دهد. البته خود پلاگین دیتاویو در کوارتز پشتیبانی نمی شود ولی میتوان از پلاگین [Dataview Serializer](https://github.com/dsebastien/obsidian-dataview-serializer) استفاده کرد. چون جداول استخراج شده را به صورت HTML میسازد که به راحتی در کوارتز نمایش داده می شوند.

من ابتدا در یادداشت پراپرتی های زیر را وارد می کنم:
```md
---
draft: false
image: cover-review.svg
parent: "[[نرم‌افزار ابسیدین]]"
hierarchy: "1"
---
```

سپس با دستور زیر آن ها را استخراج می کنم:
```md
<!-- QueryToSerialize: table without id choice(image=null, ![[noimage2.svg]], embed(link(image))), "[[" + file.name + "|" + title + "]]" From note WHERE draft = false AND parent = [[نرم‌افزار ابسیدین]] SORT hierarchy ASC -->
```

از روش قبلی هم برای تبدیل جدول به نمای کارتی استفاده می‌کنم. کامنت را هم برای این صفحات غیرفعال کردم. البته با ترفند زیر:
```html
<style>
	.giscus {
		display: none;
		}
</style>
```

نمونه فهرست هایی که فعلا ایجاد کردم:
- [[obsidian|🔮 نرم‌افزار ابسیدین]]
- [[یادداشت برداری]]


<br/><br/>

## ۸) مشکل تنظیم slug
تنها مشکل من با کوارتز این است که نمی توانم slug را تنظیم کنم. در حالت عادی اسلاگ بر اساس اسم فایل انتخاب می شود. من قبلا از hugo استفاده می‌کردم و خیلی راحت با اضافه کردن پراپرتی slug می توانستم url مشخصی را وارد کنم اما اینجا امکانش وجود ندارد.

تنظیم اسلاگ بر اساس عنوان فایل روش بهینه ای نیست. چون عنوان یادداشت های من فارسی است و فارسی بودن اسلاگ باعث می شود هنگام اشتراک گذاری با یک لینک بلند حاوی علائمی چون عدد و درصد مواجه شوم.

علاوه بر این من مدام یادداشت‌ها را آپدیت می‌کنم و ممکن است عنوان فایل را هم دستکاری کنم. با اینکار اسلاگ هم تغییر می‌کند و لینک‌های قبلی که به اشتراک گذاشتم کار نمی‌کنند. همچنین صفحاتی که در گوگل ایندکس شدند نیز با مشکل مواجه می‌شوند. پس من نیاز دارم از یک اسلاگ ثابت و انگلیسی استفاده کنم که متاسفانه کوارتز در حالت عادی امکان آن را فراهم نکرده است و من مجبورم از روش پیچیده تری استفاده کنم. یعنی اسم فایل را انگلیسی وارد می‌کنم تا اسلاگ انگلیسی باشد. از پراپرتی title هم برای اضافه کردن عنوان فارسی به یادداشت استفاده می‌کنم. با این ترفند می توانم اسلاگ و عنوان یادداشت را جداگانه مدیریت کنم.

من از پوشه ها هم استفاده نمی کنم و بخش اکسپلور را از سایدبار مخفی کردم. چون مسیر پوشه‌ها در اسلاگ نیز وارد می شود که هم باعث طولانی شدن اسلاگ می شود هم با تغییر و جابه‌جایی فولدرها، اسلاگ نیز تغییر می‌کند و همان مشکل از کار افتادن لینک‌های قبلی به وجود می‌آید.

مطمئنا راه حلی برای این مشکل وجود دارد اما هنوز روش ساده و راحتی پیدا نکردم. [اینجا](https://discord.com/channels/927628110009098281/1206612920956489780) هم در مورد این مشکل صحبت شده بود که ظاهرا راه حل آن چندان مناسب نیست.

<br/><br/>

> [!links] مطالب مرتبط
> نوشته‌های مرتبط با این موضوع را می‌توانید در [[obsidian|🔮 نرم‌افزار ابسیدین]] مشاهده کنید.
> 
> <br/>


[^1]: یکی از مشکلات محاسبه اشتباه مدت زمان تقریبی مطالعه بود که مقداری بیشتر از حالت معمولی آن را تخمین میزد. ظاهرا به خاطر زیاد بودن کلمات ربط در زبان فارسی نسبت به انگلیسی این اتفاق می افتد. مشکل دیگر تفاوت سرعت خواندن هرکس با یکدیگر است مضافا اینکه با توجه به دانش و سطح اطلاعات هر کس مدت زمان مطالعه نیز کم و زیاد می شود. به همین خاطر فکر میکنم نمایش مدت مطالعه یک فیلد اضافی است و کاربرد جدی ندارد.
[^2]: این کد را از سایت [کوانتوم گاردن](https://quantumgardener.info/) کپی کردم. [از اینجا](https://github.com/quantumgardener/qg.info/blob/v4/quartz/components/ContentMeta.tsx) میتوانید کدهای اصلی را مشاهده کنید.
[^3]: رک [اینجا](https://blog.eledah.ir/%D9%BE%D8%B1%D9%88%DA%98%D9%87%E2%80%8C%D9%87%D8%A7/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA%E2%80%8C%D8%A8%D8%B1%D8%AF%D8%A7%D8%B1%DB%8C/%D8%A7%D8%B2-%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA-%D8%A8%D9%87-%D8%B3%D8%A7%DB%8C%D8%AA-%D8%A8%D8%A7-%DA%A9%D9%88%D8%A7%D8%B1%D8%AA%D8%B2#%D8%AD%D8%B0%D9%81-%D8%B9%D9%86%D9%88%D8%A7%D9%86-%D9%88-%D8%AA%D8%A7%D8%B1%DB%8C%D8%AE-%D8%A7%D8%B2-%D8%B5%D9%81%D8%AD%D9%87%D9%94-%D8%A7%D9%88%D9%84)
[^4]: . یک مورد به خاطر صفحه بندی خاصی است که برای موبایل در نظر گرفتم. من در فایل `quartz.layout.ts` فهرست مطالب را در حالت موبایل قبل از متن بدنه و بعد از ContentMeta قرار دادم. اگر به صورت دستی تصویر را اضافه می کردم فهرست مطالب قبل از تصویر نمایش داده میشد که جالب نبود. در حال حاضر تصویر در بخش ContentMeta قرار گرفته و ترتیب نمایش به این شکل است: تیتر > کانتنت‌متا > تصویر > فهرست مطالب > متن یادداشت. یک مورد دیگر هم به خاطر شیوه خاصی است که برای صفحات فهرست در نظر گرفتم. با استفاده از پلاگین دیتاویو سریالیزر یک فهرست درست کردم که عنوان و تصویر یادداشت های مرتبط را نمایش می دهد. برای اینکار لازم بود از یک پراپرتی برای استخراج تصاویر استفاده کنم.
[^5]: رک [اینجا](https://blog.eledah.ir/%D9%BE%D8%B1%D9%88%DA%98%D9%87%E2%80%8C%D9%87%D8%A7/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA%E2%80%8C%D8%A8%D8%B1%D8%AF%D8%A7%D8%B1%DB%8C/%D8%A7%D8%B2-%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA-%D8%A8%D9%87-%D8%B3%D8%A7%DB%8C%D8%AA-%D8%A8%D8%A7-%DA%A9%D9%88%D8%A7%D8%B1%D8%AA%D8%B2#%D8%AC%D8%A7%DB%8C%DA%AF%D8%B2%DB%8C%D9%86%DB%8C-footnotes-%D8%A8%D8%A7-%D9%BE%D8%A7%D9%86%D9%88%D8%B4%D8%AA-%D8%AF%D8%B1-%D8%A7%D9%86%D8%AA%D9%87%D8%A7%DB%8C-%D9%85%D8%B7%D8%A7%D9%84%D8%A8)
[^6]: رک [اینجا](https://blog.eledah.ir/%D9%BE%D8%B1%D9%88%DA%98%D9%87%E2%80%8C%D9%87%D8%A7/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA%E2%80%8C%D8%A8%D8%B1%D8%AF%D8%A7%D8%B1%DB%8C/%D8%A7%D8%B2-%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA-%D8%A8%D9%87-%D8%B3%D8%A7%DB%8C%D8%AA-%D8%A8%D8%A7-%DA%A9%D9%88%D8%A7%D8%B1%D8%AA%D8%B2#%DA%86%D8%B1%D8%AE%D8%A7%D9%86%D8%AF%D9%86-%D9%81%D9%84%D8%B4%D9%87%D8%A7%DB%8C-explorer)
