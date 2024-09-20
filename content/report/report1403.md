---
title: گزارش توسعه فردی ۱۴۰۳
aliases:
  - گزارش توسعه فردی ۱۴۰۳
date: 2024-08-25
draft: false
tags: 
status: 🌱نهال
image: 
parent: "[[diary|📅 روزنوشته‌ها]]"
cssclasses:
  - card-s
  - nowarp2
---

این یادداشت در حال حاضر فقط حاوی گزارش کلی فعالیت‌ها و محتواهای مصرف شده تا آخرین زمان به‌روزرسانی است. گزارش کامل و توضیحات آن پایان سال اضافه می‌شود.

<br/>


## در یک نگاه

<br/>

<div class="overview-3">
<!-- QueryToSerialize: TABLE WITHOUT ID "📚" as icon, length(rows) + " جلد کتاب" as count, "`" + sum(rows.pages) + " صفحه`" as sum FROM #Book WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📚" as icon, length(rows) + " جلد کتاب" as count, "`" + sum(rows.pages) + " صفحه`" as sum FROM #Book WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count       | sum         |
| ---- | ----------- | ----------- |
| 📚   | 22 جلد کتاب | `4060 صفحه` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "👨‍🏫" as icon, length(rows) + " دوره‌آموزشی" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Course WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "👨‍🏫" as icon, length(rows) + " دوره‌آموزشی" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Course WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon  | count         | sum         |
| ----- | ------------- | ----------- |
| 👨‍🏫 | 8 دوره‌آموزشی | `82.3 ساعت` |
<!-- SerializedQuery END -->



<!-- QueryToSerialize: TABLE WITHOUT ID "🎙" as icon, length(rows) + " پادکست" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Podcast WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎙" as icon, length(rows) + " پادکست" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Podcast WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count     | sum         |
| ---- | --------- | ----------- |
| 🎙   | 12 پادکست | `23.5 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "✨" as icon, length(rows) + " محتوای مفید" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Media WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "✨" as icon, length(rows) + " محتوای مفید" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Media WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count         | sum        |
| ---- | ------------- | ---------- |
| ✨    | 5 محتوای مفید | `8.6 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "🍿" as icon, length(rows) + " فیلم و سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🍿" as icon, length(rows) + " فیلم و سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count           | sum         |
| ---- | --------------- | ----------- |
| 🍿   | 36 فیلم و سریال | `88.7 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "🎥" as icon, length(rows) + " مستند" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Documentary WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎥" as icon, length(rows) + " مستند" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Documentary WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count   | sum        |
| ---- | ------- | ---------- |
| 🎥   | 2 مستند | `2.3 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "🏋️‍♂️" as icon, "`" + length(filter(rows, (r) => r.🏋️‍♂️exercise = true)) + " روز`", "ورزش کردم" FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🏋️‍♂️" as icon, "`" + length(filter(rows, (r) => r.🏋️‍♂️exercise = true)) + " روز`", "ورزش کردم" FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->

| icon   | "`" + length(filter(rows, (r) => r.🏋️‍♂️exercise = true)) + " روز`" | "ورزش کردم" |
| ------ | -------------------------------------------------------------------- | ----------- |
| 🏋️‍♂️ | `141 روز`                                                            | ورزش کردم   |
<!-- SerializedQuery END -->



<!-- QueryToSerialize: TABLE WITHOUT ID "📖" as icon, "`" + round(sum(rows.📚reading)) + " پومودورو`", "مطالعه کردم" FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📖" as icon, "`" + round(sum(rows.📚reading)) + " پومودورو`", "مطالعه کردم" FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->

| icon | "`" + round(sum(rows.📚reading)) + " پومودورو`" | "مطالعه کردم" |
| ---- | ----------------------------------------------- | ------------- |
| 📖   | `227 پومودورو`                                  | مطالعه کردم   |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "📱" as icon, "`" + round(sum(rows.📱social)) + " ساعت`", "در سوشال‌مدیا بودم" FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📱" as icon, "`" + round(sum(rows.📱social)) + " ساعت`", "در سوشال‌مدیا بودم" FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->

| icon | "`" + round(sum(rows.📱social)) + " ساعت`" | "در سوشال‌مدیا بودم" |
| ---- | ------------------------------------------ | -------------------- |
| 📱   | `295 ساعت`                                 | در سوشال‌مدیا بودم   |
<!-- SerializedQuery END -->


</div>


<br/><br/>

## بخش اول: مصرف محتوا


### 📚 کتاب 

<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + pages + " صفحه`" FROM #Book WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + pages + " صفحه`" FROM #Book WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                               | file.name                             | "`" + pages + " صفحه`" |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ---------------------- |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1477218519i/22050315.jpg)  | هفت روایت خصوصی از زندگی سید موسی صدر | `192 صفحه`             |
| ![](https://s32.picofile.com/file/8478850484/mr_jicak.jpg)                                                           | مستر جیکاک                            | `136 صفحه`             |
| ![](https://s32.picofile.com/file/8478794884/Visual_Hammer.jpg)                                                      | چکش بصری                              | `183 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1512139215i/36696980.jpg)  | دروغ‌های مسلح                         | `344 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1354312096i/15858089.jpg)  | The Sketchnote Handbook               | `224 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595319091i/54622169.jpg)  | دیگر اخبار نخوانید                    | `152 صفحه`             |
| ![](https://s32.picofile.com/file/8478581668/khone_khoda.jpg)                                                        | خون خدا                               | `105 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1508160297i/36422557.jpg)  | اتوپرتره                              | `92 صفحه`              |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1694938610i/162656853.jpg) | چرا ملت ها شکست میخورند؟              | `536 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1700136134i/252025.jpg)    | ابن مشغله                             | `112 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1715779752i/178539.jpg)    | نشت نشا                               | `80 صفحه`              |
| ![](https://s32.picofile.com/file/8478581650/Indispensable.jpg)                                                      | مهره حیاتی                            | `293 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1518194023i/8177701.jpg)   | نفحات نفت                             | `230 صفحه`             |
| ![](https://s32.picofile.com/file/8478581626/as_keteb.jpg)                                                           | از کتاب                               | `395 صفحه`             |
| ![](https://s32.picofile.com/file/8478581634/design_your_life.jpg)                                                   | زندگی خود را طراحی کنید               | `260 صفحه`             |
| ![](https://s32.picofile.com/file/8478581676/masir_shoghli.jpg)                                                      | مسیر شغلی                             | `92 صفحه`              |
| ![](https://s32.picofile.com/file/8478581692/shoghle_morede_alagheh.jpg)                                             | شغل مورد علاقه                        | `170 صفحه`             |
| ![](https://s32.picofile.com/file/8478581684/shib.jpg)                                                               | شیب                                   | `65 صفحه`              |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1459158688i/29635204.jpg)  | در ستایش بطالت                        | `36 صفحه`              |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1596902578i/54579528.jpg)  | در ستایش اتلاف وقت                    | `102 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1709043680i/171942.jpg)    | بوف کور                               | `95 صفحه`              |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1525192368i/13646602.jpg)  | میم و آن دیگران                       | `166 صفحه`             |
<!-- SerializedQuery END -->

‌<br/>‌<br/>

### 👨‍🏫 دوره‌های آموزشی

<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + round(length.hours) + " ساعت`" FROM #Course WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + round(length.hours) + " ساعت`" FROM #Course WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                         | file.name                             | "`" + round(length.hours) + " ساعت`" |
| -------------------------------------------------------------- | ------------------------------------- | ------------------------------------ |
| ![](https://s32.picofile.com/file/8478837334/css.jpg)          | دوره آموزش css                        | `12 ساعت`                            |
| ![](https://s32.picofile.com/file/8478596484/ensan4.jpg)       | روایت انسان (فصل 4)                   | `15 ساعت`                            |
| ![](https://s32.picofile.com/file/8478596626/karnakon_job.jpg) | دوره جامع طراحی مسیر شغلی             | `11 ساعت`                            |
| ![](https://s32.picofile.com/file/8478596826/vic.jpg)          | فایل صوتی درباره موفقیت و برنامه ریزی | `2 ساعت`                             |
| ![](https://s32.picofile.com/file/8478596584/grammer.jpg)      | کارگاه جامع گرامر                     | `7 ساعت`                             |
| ![](https://s32.picofile.com/file/8478596792/stable.jpg)       | دوره جامع استیبل دیفیوژن              | `20 ساعت`                            |
| ![](https://s32.picofile.com/file/8478598318/goal_setting.jpg) | دوره صوتی آموزش هدف گذاری             | `8 ساعت`                             |
| ![](https://s32.picofile.com/file/8478596800/tanz_bank.jpg)    | طنز بانک                              | `8 ساعت`                             |
<!-- SerializedQuery END -->

‌<br/>‌<br/>

### 🎙 پادکست

<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Podcast WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Podcast WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                                     | file.name                              | "`" + length.minute + " دقیقه`" |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------- |
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/amirmousavi_yprnuq.jpg)                                                                      | گفتگو با امیر موسوی تور لیدر           | `128 دقیقه`                     |
| ![](https://assets.pippa.io/shows/623ee6e745754c001233a890/1714562705175-493bcfd80fd419fd3ac250ec8eb4aeee.jpeg)                                            | حسین کلهر                              | `70 دقیقه`                      |
| ![](https://assets.pippa.io/shows/623ee6e745754c001233a890/1723832715268-786aa403-420d-4f81-a6e5-ea92f8349905.jpeg)                                        | درباره‌ی جادی                          | `115 دقیقه`                     |
| ![](https://s32.picofile.com/file/8478577776/%D8%AC%D8%A7%D9%81%DA%A9%D8%B1%DB%8C_%D9%81%D8%B5%D9%84_20.jpg)                                               | جافکری فصل 20                          | `143 دقیقه`                     |
| ![](https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/d4/83/59/d4835940-003d-502a-cf95-b1fe1c5c0e24/mza_4199942390305222365.jpg/500x500bb.webp)      | Maggie Appleton's journey to design    | `64 دقیقه`                      |
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/WhatsApp_Image_2022-09-03_at_19_38_29_ckb8ze.jpeg)                                           | گفتگو با امیرحسین قیاسی                | `137 دقیقه`                     |
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/photo_2023-04-20_10-19-47_nrcnm3.jpg)                                                        | گفتگو با ابوطالب حسینی                 | `83 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478577800/%D8%B5%D8%A7%D9%84%D8%AD_%D8%B3%D8%AE%D9%86%D8%AF%D8%A7%D9%86.jpg)                                            | گفتگو با صالح سخندان                   | `75 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478577768/%D8%AC%D8%A7%D9%81%DA%A9%D8%B1%DB%8C_%D9%81%D8%B5%D9%84_19.jpg)                                               | جافکری فصل 19                          | `246 دقیقه`                     |
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/41966155_544476649314360_7141092516463378432_n_2_rmuyxu.jpg)                                 | گفت و گو با میلاد نوری                 | `162 دقیقه`                     |
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/Fco0d82XwAUVarm_ra2iuz.jpg)                                                                  | گفت و گو با سعید حسین زاده             | `111 دقیقه`                     |
| ![](https://s32.picofile.com/file/8478577818/%D8%B9%D8%A7%D8%AF%D9%84_%D8%B7%D8%A7%D9%84%D8%A8%DB%8C_%D8%B4%D8%B9%D8%A8%D8%A7%D9%86%D8%B9%D9%84%DB%8C.jpg) | گپ و گفت محمدرضا شعبانعلی و عادل طالبی | `77 دقیقه`                      |
<!-- SerializedQuery END -->

‌<br/>‌<br/>

### ✨ محتوای مفید


<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Media WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Media WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                                                          | file.name                                                                 | "`" + length.minute + " دقیقه`" |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------- |
| ![](https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/9e003b0a822daba702608136e73f7be001b6b2f2_2880x1620.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=82w=640) | تاریخ بصری دانش بشر                                                       | `13 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478604018/entekhabat.jpg)                                                                                                                    | آدمیزاد و انتخاب                                                          | `240 دقیقه`                     |
| ![](https://s32.picofile.com/file/8478603950/amirkhani.jpg)                                                                                                                     | گفت و گوی میلاد دخانچی و رضا امیرخانی - آینده سیاسی ایران و مسئله جانشینی | `93 دقیقه`                      |
| ![](https://static.cdn.asset.aparat.com/avt/43530379-2965-b__6265.jpg)                                                                                                          | گفت و گوی ملکیان و مکری - مسئله اراده و جبر                               | `105 دقیقه`                     |
| ![](https://static.cdn.asset.aparat.cloud/avt/58975576-9466-l__8149.jpg?width=900&quality=90&secret=pzo294U3PY-dnGDjwvRVHA)                                                     | وبینار نویسنده کارآفرین                                                   | `65 دقیقه`                      |
<!-- SerializedQuery END -->

‌<br/>‌<br/>

### 🍿 فیلم و سریال


<div class="overview-4">
<!-- QueryToSerialize: TABLE WITHOUT ID "🎬" as icon, length(rows) + " فیلم" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "movie" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎬" as icon, length(rows) + " فیلم" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "movie" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count   | sum         |
| ---- | ------- | ----------- |
| 🎬   | 15 فیلم | `29.7 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "📺" as icon, length(rows) + " سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "series" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📺" as icon, length(rows) + " سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "series" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count   | sum         |
| ---- | ------- | ----------- |
| 📺   | 2 سریال | `51.9 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "🎈" as icon, length(rows) + " انیمیشن" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "animation" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎈" as icon, length(rows) + " انیمیشن" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "animation" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count     | sum        |
| ---- | --------- | ---------- |
| 🎈   | 3 انیمیشن | `4.9 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "⌛" as icon, length(rows) + " فیلم کوتاه" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "short" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "⌛" as icon, length(rows) + " فیلم کوتاه" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "short" AND length != null AND date >= date("2024-03-20") AND date <= date("2025-03-20") GROUP BY "" -->

| icon | count         | sum        |
| ---- | ------------- | ---------- |
| ⌛    | 16 فیلم کوتاه | `2.3 ساعت` |
<!-- SerializedQuery END -->

</div>

#### فیلم
<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Movie WHERE type = "movie" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Movie WHERE type = "movie" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                  | file.name                | "`" + length.minute + " دقیقه`" |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------- |
| ![](https://m.media-amazon.com/images/M/MV5BODExZmE2ZWItYTIzOC00MzI1LTgyNTktMDBhNmFhY2Y4OTQ3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg) | Dog Day Afternoon        | `125 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BODE0NTcxNTQzNF5BMl5BanBnXkFtZTcwMzczOTIzMw@@._V1_SX300.jpg)                                 | 310 to Yuma              | `122 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMjAyNTU5OTcxOV5BMl5BanBnXkFtZTcwMDEyNjM2MQ@@._V1_SX300.jpg)                                 | 21                       | `123 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg) | Taxi Driver              | `114 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMzliZDk0NjctNjhlOC00MWEyLWI3OWYtNjA5ZDYxMTMzNTc5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg) | The Big Lebowski         | `117 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BZGM5ZTY1ZTEtYjVlZi00M2RiLTllODgtMDYzMzk3YjY1MjNmXkEyXkFqcGdeQXVyMTAyNTQ0MTk@._V1_SX300.jpg) | The Glass Agency         | `114 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMzRkZDVkMDItYjk3Mi00NDkyLThmODUtYzhkN2EwZmE2ZTljXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg) | Wag the Dog              | `97 دقیقه`                      |
| ![](https://m.media-amazon.com/images/M/MV5BZTEzNGU1ODQtZmEzZS00ODJlLWI3ZWItNmY1MTVjNjk0MzBjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg) | Close-Up                 | `98 دقیقه`                      |
| ![](https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg) | Reservoir Dogs           | `99 دقیقه`                      |
| ![](https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg)                                     | The Departed             | `151 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg) | The Silence of the Lambs | `118 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg) | Amélie                   | `122 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMTNmZGY4OTctYjUwNi00ZjNmLTlmODItMDVhOGJmYThmMTU5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg) | Che Part Two             | `135 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BM2JiNjE4YjItNTFhNS00ZmYyLWEwNzctNzJmYzNiYWYzOGM3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg) | Che Part One             | `134 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BODg5ZGU1YjYtN2Y5NC00YmVmLTg4ZDMtYjNkMjhjMTE3YTE4XkEyXkFqcGdeQXVyNzEyNDA4NDQ@._V1_SX300.jpg) | Maslahat                 | `110 دقیقه`                     |
<!-- SerializedQuery END -->

‌<br/>‌<br/>

#### سریال
<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + round(length.hours) + " ساعت`" FROM #Movie WHERE type = "series" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + round(length.hours) + " ساعت`" FROM #Movie WHERE type = "series" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                  | file.name     | "`" + round(length.hours) + " ساعت`" |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------ |
| ![](https://m.media-amazon.com/images/M/MV5BZTZkMWVkNTEtYzMxMC00MzQzLTg5NjUtNTNmN2M2NzEwNzI0XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_SX300.jpg) | The Sopranos  | `48 ساعت`                            |
| ![](https://m.media-amazon.com/images/M/MV5BZmQ0NDE5NjYtMGU4OS00NGMwLWJmOGYtZjVmYTFhMzA3ZGQ2XkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_SX300.jpg) | Baby Reindeer | `4 ساعت`                             |
<!-- SerializedQuery END -->

‌<br/>‌<br/>

#### انیمیشن

<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Movie WHERE type = "animation" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Movie WHERE type = "animation" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                  | file.name    | "`" + length.minute + " دقیقه`" |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------- |
| ![](https://m.media-amazon.com/images/M/MV5BYTc1MDQ3NjAtOWEzMi00YzE1LWI2OWUtNjQ0OWJkMzI3MDhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg) | Inside Out 2 | `96 دقیقه`                      |
| ![](https://m.media-amazon.com/images/M/MV5BMzQxNjM5NzkxNV5BMl5BanBnXkFtZTcwMzg5NDMwMg@@._V1_SX300.jpg)                                 | Coraline     | `100 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMGRkZThmYzEtYjQxZC00OWEzLThjYjAtYzFkMjY0NGZkZWI4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg) | Persepolis   | `96 دقیقه`                      |
<!-- SerializedQuery END -->

‌<br/>‌<br/>

#### فیلم کوتاه
<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Movie WHERE type = "short" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Movie WHERE type = "short" AND date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                                  | file.name                              | "`" + length.minute + " دقیقه`" |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------- |
| ![](https://m.media-amazon.com/images/M/MV5BYTMyZjUwNjktYjUzNC00YzNhLWI4YzQtMmRhZjJhZDEwYmUyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg)                 | The Boy the Mole the Fox and the Horse | `32 دقیقه`                      |
| ![](https://m.media-amazon.com/images/M/MV5BNTFhNTU0OGQtZTJjYy00Yzg0LThkMmQtZDYxNjU5NzNiYzkyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjQ2MjA3NDQ@._V1_SX300.jpg) | Destiny                                | `5 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BNjJlYTcxNmItYzgwOS00MWE3LTg3ZjUtODRhN2M4ODVkZDU5XkEyXkFqcGdeQXVyMzc0Njg0NzM@._V1_SX300.jpg)                 | Best Friend                            | `6 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BYzE1OWRlNjItN2M1MC00MzAwLTllOWQtZjdkNjY0OTU2YTA2XkEyXkFqcGdeQXVyMjMzMTI2NzU@._V1_SX300.jpg)                 | Hair Love                              | `7 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BMTQ2ODUzODM1OF5BMl5BanBnXkFtZTgwNTA0Njg5MTE@._V1_SX300.jpg)                                                 | Strings                                | `10 دقیقه`                      |
| ![](https://m.media-amazon.com/images/M/MV5BYTkzNTA1MDItNTVhYi00ZGJhLWE1M2MtOGE0ZjEzZDU5YmEyXkEyXkFqcGdeQXVyNTkxMTQxMzc@._V1_SX300.jpg)                 | Afternoon Class                        | `3 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BM2UzNjVlY2EtMzA2MS00MmE1LWEzOWUtOTJlOWEyZmVjMjliXkEyXkFqcGdeQXVyNzk4OTM3Nzk@._V1_SX300.jpg)                 | (OO)                                   | `6 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BNWMzN2I5NTEtMTY5My00N2I4LTkxOTktNjRkNWUzZjBhZTE5XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg)                 | Partly Cloudy                          | `6 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BMTYyMTk1MjE3NF5BMl5BanBnXkFtZTgwMjkxMDgwMjE@._V1_SX300.jpg)                                                 | Day  Night                             | `6 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BNTk5YTcwYzktZWU0Yy00YmZiLWJlZGQtZDQ1ZjIwOTFkMDQzXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_SX300.jpg)                 | 22 vs. Earth                           | `6 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BMTg2ZTA3NTYtNzg0NS00Mjk0LWE1MjgtNDk1YTRhY2JkMGYxXkEyXkFqcGdeQXVyNzM4OTIxNzM@._V1_SX300.jpg)                 | Less Than Human                        | `6 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BYzBhMDc4YzItZDk1ZC00N2U2LWE2YWUtYTU5YjFmMzJkMDZmXkEyXkFqcGdeQXVyNTg2ODU2Mw@@._V1_SX300.jpg)                 | Alike                                  | `8 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BYWYwMWZjNDItOTg2Mi00NGY3LTljODItODgxNDhjYzFiYzJhXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg)                 | The Blue Umbrella                      | `7 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BNDY5MDgxMDY3Nl5BMl5BanBnXkFtZTgwMTYwMDI0NjE@._V1_SX300.jpg)                                                 | Borrowed Time                          | `7 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BY2VhOWM2Y2EtZTVmMC00ZTMxLTgxNWItNmE0ZjQ3N2ViODI0XkEyXkFqcGdeQXVyMjExNjgyMTc@._V1_SX300.jpg)                 | Zero                                   | `13 دقیقه`                      |
| ![](https://m.media-amazon.com/images/M/MV5BZmY5YmMwZWEtMDIyOC00NWMyLWE3NWQtYWMzNWRhMzQ2NWJmXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg)                 | Double King                            | `10 دقیقه`                      |
<!-- SerializedQuery END -->

‌<br/>‌<br/>

### 🎥 مستند

<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Documentary WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Documentary WHERE date >= date("2024-03-20") AND date <= date("2025-03-20") SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                  | file.name                 | "`" + length.minute + " دقیقه`" |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------------------------- |
| ![](https://m.media-amazon.com/images/M/MV5BNWFkMDY1MjItZmNkOS00MDg2LWFlMjMtZWU3YmM0MmY3MWM3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg) | American Factory          | `110 دقیقه`                     |
| ![](https://s32.picofile.com/file/8478552926/%D8%B1%D8%B6%D8%A7_%D8%B9%D8%A7%D8%A8%D8%AF%DB%8C%D9%86%DB%8C.jpg)                         | رضا عابدینی گرافیک ایرانی | `25 دقیقه`                      |
<!-- SerializedQuery END -->


‌<br/>‌<br/>


## بخش دوم: ردیابی عادت


### 🏋🏻 ورزش


<div class="full">
<!-- QueryToSerialize: TABLE "✅ " + length(filter(rows, (r) => r.🏋️‍♂️exercise = true)) + " روز ورزش کردم" as true, "❌ " + length(filter(rows, (r) => r.🏋️‍♂️exercise = false)) + " روز ورزش نکردم" as false FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: TABLE "✅ " + length(filter(rows, (r) => r.🏋️‍♂️exercise = true)) + " روز ورزش کردم" as true, "❌ " + length(filter(rows, (r) => r.🏋️‍♂️exercise = false)) + " روز ورزش نکردم" as false FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->

| "" | true                | false               |
| -- | ------------------- | ------------------- |
|    | ✅ 141 روز ورزش کردم | ❌ 44 روز ورزش نکردم |
<!-- SerializedQuery END -->

</div>

‌<br/>‌<br/>

### 📖 مطالعه
مدت زمان مطالعه را با پومودورو اندازه گرفتم. هر پومودورو 25 تا 30 دقیقه.

<div class="full">
<!-- QueryToSerialize: table without id "🔘 جمع کل: " + round(sum(rows.📚reading)) + " پ" as Total, "🔺 بیشترین: " + round(max(rows.📚reading)) + " پ" as Maximum, "🔻 کمترین: " + round(min(rows.📚reading)) + " پ" as Minimum, "📈 میانگین: " + round(sum(rows.📚reading) / length(rows), 1) + " پ" as Average FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: table without id "🔘 جمع کل: " + round(sum(rows.📚reading)) + " پ" as Total, "🔺 بیشترین: " + round(max(rows.📚reading)) + " پ" as Maximum, "🔻 کمترین: " + round(min(rows.📚reading)) + " پ" as Minimum, "📈 میانگین: " + round(sum(rows.📚reading) / length(rows), 1) + " پ" as Average FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->

| Total            | Maximum         | Minimum        | Average           |
| ---------------- | --------------- | -------------- | ----------------- |
| 🔘 جمع کل: 227 پ | 🔺 بیشترین: 7 پ | 🔻 کمترین: 0 پ | 📈 میانگین: 1.2 پ |
<!-- SerializedQuery END -->
</div>

‌<br/>‌<br/>

### 📱 سوشال مدیا
مدت زمانی که وقتم را در سوشال مدیا می گذراندم را ثبت کردم. به خاطر خاصیت گیمیفیکیشن هبیت ترکر این کار تاثیر مثبتی در کاهش استفاده از سوشال مدیا داشت.
برای محاسبه مدت زمان آن هم از اپلیکیشن StayFree استفاده میکنم. یک کتگوری به اسم سوشال مدیا ساختم و اپلیکیشن های مختلف مثل اینستاگرام و تلگرام و توییتر را به آن اضافه کردم که مجموع مدت زمان استفاده از این اپلیکیشن ها را به صورت مجزا محاسبه می کند.

<div class="full">
<!-- QueryToSerialize: table without id "🔘 جمع کل: " + round(sum(rows.📱social)) + " ساعت" as Total, "🔺 بیشترین: " + round(max(rows.📱social),1) + " ساعت" as Maximum, "🔻 کمترین: " + round(min(rows.📱social),1) + " ساعت" as Minimum, "📈 میانگین: " + round(sum(rows.📱social) / length(rows), 1) + " ساعت" as Average FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->
<!-- SerializedQuery: table without id "🔘 جمع کل: " + round(sum(rows.📱social)) + " ساعت" as Total, "🔺 بیشترین: " + round(max(rows.📱social),1) + " ساعت" as Maximum, "🔻 کمترین: " + round(min(rows.📱social),1) + " ساعت" as Minimum, "📈 میانگین: " + round(sum(rows.📱social) / length(rows), 1) + " ساعت" as Average FROM #journal WHERE file.name >= ("2024-03-20") AND file.name <= ("2025-03-20") GROUP BY "" -->

| Total               | Maximum            | Minimum             | Average              |
| ------------------- | ------------------ | ------------------- | -------------------- |
| 🔘 جمع کل: 295 ساعت | 🔺 بیشترین: 4 ساعت | 🔻 کمترین: 0.1 ساعت | 📈 میانگین: 1.6 ساعت |
<!-- SerializedQuery END -->
</div>

‌<br/>‌<br/>
