---
title: گزارش کلی
aliases: 
date: 2024-08-29
draft: false
tags: 
status: 
image: 
parent: 
cssclasses:
  - nowarp2
  - card-s
---

## در یک نگاه

<div class="overview-3">

<!-- QueryToSerialize: TABLE WITHOUT ID "📚" as icon, length(rows) + " جلد کتاب" as count, "`" + sum(rows.pages) + " صفحه`" as sum FROM #Book WHERE pages !=null GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📚" as icon, length(rows) + " جلد کتاب" as count, "`" + sum(rows.pages) + " صفحه`" as sum FROM #Book WHERE pages !=null GROUP BY "" -->

| icon | count       | sum          |
| ---- | ----------- | ------------ |
| 📚   | 47 جلد کتاب | `10351 صفحه` |
<!-- SerializedQuery END -->



<!-- QueryToSerialize: TABLE WITHOUT ID "👨‍🏫" as icon, length(rows) + " دوره‌آموزشی" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Course WHERE length !=null GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "👨‍🏫" as icon, length(rows) + " دوره‌آموزشی" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Course WHERE length !=null GROUP BY "" -->

| icon  | count          | sum          |
| ----- | -------------- | ------------ |
| 👨‍🏫 | 29 دوره‌آموزشی | `400.4 ساعت` |
<!-- SerializedQuery END -->



<!-- QueryToSerialize: TABLE WITHOUT ID "🎙" as icon, length(rows) + " پادکست" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Podcast WHERE length !=null GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎙" as icon, length(rows) + " پادکست" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Podcast WHERE length !=null GROUP BY "" -->

| icon | count     | sum         |
| ---- | --------- | ----------- |
| 🎙   | 31 پادکست | `75.5 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "✨" as icon, length(rows) + " محتوای مفید" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Media WHERE length !=null GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "✨" as icon, length(rows) + " محتوای مفید" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Media WHERE length !=null GROUP BY "" -->

| icon | count          | sum         |
| ---- | -------------- | ----------- |
| ✨    | 23 محتوای مفید | `26.5 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "🍿" as icon, length(rows) + " فیلم و سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE rating !=null GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🍿" as icon, length(rows) + " فیلم و سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE rating !=null GROUP BY "" -->

| icon | count            | sum          |
| ---- | ---------------- | ------------ |
| 🍿   | 155 فیلم و سریال | `799.9 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "🎥" as icon, length(rows) + " مستند" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Documentary WHERE length !=null GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎥" as icon, length(rows) + " مستند" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Documentary WHERE length !=null GROUP BY "" -->

| icon | count    | sum         |
| ---- | -------- | ----------- |
| 🎥   | 19 مستند | `25.9 ساعت` |
<!-- SerializedQuery END -->

</div>

‌<br/>‌<br/>


## 📚 کتاب 

<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + pages + " صفحه`" FROM #Book WHERE pages !=null SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + pages + " صفحه`" FROM #Book WHERE pages !=null SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                                            | file.name                                          | "`" + pages + " صفحه`" |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ---------------------- |
| ![](https://s32.picofile.com/file/8478794884/Visual_Hammer.jpg)                                                                                                   | چکش بصری                                           | `183 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1512139215i/36696980.jpg)                                               | دروغ‌های مسلح                                      | `344 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1354312096i/15858089.jpg)                                               | The Sketchnote Handbook                            | `224 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595319091i/54622169.jpg)                                               | دیگر اخبار نخوانید                                 | `152 صفحه`             |
| ![](https://s32.picofile.com/file/8478581668/khone_khoda.jpg)                                                                                                     | خون خدا                                            | `105 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1508160297i/36422557.jpg)                                               | اتوپرتره                                           | `92 صفحه`              |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1694938610i/162656853.jpg)                                              | چرا ملت ها شکست میخورند؟                           | `536 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1700136134i/252025.jpg)                                                 | ابن مشغله                                          | `112 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1715779752i/178539.jpg)                                                 | نشت نشا                                            | `80 صفحه`              |
| ![](https://s32.picofile.com/file/8478581650/Indispensable.jpg)                                                                                                   | مهره حیاتی                                         | `293 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1518194023i/8177701.jpg)                                                | نفحات نفت                                          | `230 صفحه`             |
| ![](https://s32.picofile.com/file/8478581626/as_keteb.jpg)                                                                                                        | از کتاب                                            | `395 صفحه`             |
| ![](https://s32.picofile.com/file/8478581634/design_your_life.jpg)                                                                                                | زندگی خود را طراحی کنید                            | `260 صفحه`             |
| ![](https://s32.picofile.com/file/8478581676/masir_shoghli.jpg)                                                                                                   | مسیر شغلی                                          | `92 صفحه`              |
| ![](https://s32.picofile.com/file/8478581692/shoghle_morede_alagheh.jpg)                                                                                          | شغل مورد علاقه                                     | `170 صفحه`             |
| ![](https://s32.picofile.com/file/8478581684/shib.jpg)                                                                                                            | شیب                                                | `65 صفحه`              |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1459158688i/29635204.jpg)                                               | در ستایش بطالت                                     | `36 صفحه`              |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1596902578i/54579528.jpg)                                               | در ستایش اتلاف وقت                                 | `102 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1709043680i/171942.jpg)                                                 | بوف کور                                            | `95 صفحه`              |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1525192368i/13646602.jpg)                                               | میم و آن دیگران                                    | `166 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1481714174i/33385280.jpg)                                               | کی بود کی بود؟                                     | `330 صفحه`             |
| ![](https://s32.picofile.com/file/8478564168/%D8%B4%D8%A7%D9%87%D8%B1%D8%A7%D9%87_%D8%AA%D8%A7%D8%AB%DB%8C%D8%B1%DA%AF%D8%B0%D8%A7%D8%B1%DB%8C.jpg)               | شاهراه تاثیرگذاری                                  | `105 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588848644i/52120442.jpg)                                               | نیم دانگ پیونگ یانگ                                | `244 صفحه`             |
| ![](https://s32.picofile.com/file/8478564176/%D9%82%D8%AF%D8%B1%D8%AA_%D9%86%D9%88%D8%B4%D8%AA%D9%86.jpg)                                                         | قدرت نوشتن                                         | `65 صفحه`              |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1642946094i/60188628.jpg)                                               | اخبار و سایر چرندیات                               | `390 صفحه`             |
| ![](https://s32.picofile.com/file/8478564142/%D8%A7%DB%8C%DA%A9%DB%8C%DA%AF%D8%A7%DB%8C.jpg)                                                                      | ایکیگای                                            | `184 صفحه`             |
| ![](https://s32.picofile.com/file/8478564118/%D8%A7%D8%B3%D8%A8_%D8%B3%DB%8C%D8%A7%D9%87.jpg)                                                                     | اسب سیاه                                           | `216 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631718344i/59002593.jpg)                                               | وسعت یا عمق                                        | `392 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1722685735i/56970018.jpg)                                               | همه چیز بودن                                       | `200 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1475307169i/25149689.jpg)                                               | کافه اروپا                                         | `252 صفحه`             |
| ![](https://s32.picofile.com/file/8478564242/%D9%86%D8%A7%D9%88%D8%A7%D9%84_%D8%B1%D8%A7%D9%88%DB%8C%DA%A9%D8%A7%D9%86%D8%AA.jpg)                                 | راهنمای خوشبختی و ثروتمندی به روایت ناوال راویکانت | `200 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696591705i/199296091.jpg)                                              | نکته های تاریخی                                    | `295 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1611404284i/56791325.jpg)                                               | ابوالمشاغل                                         | `218 صفحه`             |
| ![](https://s32.picofile.com/file/8478564150/%D8%AA%D8%B4%DB%8C%D8%B9_%D8%B9%D9%84%D9%88%DB%8C_%D9%88_%D8%AA%D8%B4%DB%8C%D8%B9_%D8%B5%D9%81%D9%88%DB%8C.jpg)      | تشیع علوی و تشیع صفوی                              | `296 صفحه`             |
| ![](https://s32.picofile.com/file/8478564134/%D8%A7%D8%B3%D8%AA%D8%A7%D8%AF%D8%A7%D9%86_%D9%88_%D9%86%D8%A7_%D8%A7%D8%B3%D8%AA%D8%A7%D8%AF%D8%A7%D9%86%D9%85.jpg) | استادان و نااستادانم                               | `182 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1715495482i/34108290.jpg)                                               | هنر شفاف اندیشیدن                                  | `325 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1621171158i/4788482.jpg)                                                | نکته های ویرایش                                    | `304 صفحه`             |
| ![](https://s32.picofile.com/file/8478564184/%DA%A9%D9%84%D8%AB%D9%88%D9%85_%D9%86%D9%86%D9%87.jpg)                                                               | کلثوم ننه (عقائد النساء)                           | `136 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1563829745l/50003923.jpg)                                               | اصول فریلنسینگ موفق                                | `242 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627556737i/58655142.jpg)                                               | واقع بینی                                          | `71 صفحه`              |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1557043739i/45456933.jpg)                                               | اصل گرایی                                          | `242 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1549966353i/43972080.jpg)                                               | نخل و نارنج                                        | `226 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1575109816i/49014843.jpg)                                               | مبانی طراحی گرافیک                                 | `467 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588894671i/53346969.jpg)                                               | سیری در نهج البلاغه                                | `319 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1483021275i/3304788.jpg)                                                | آزادی معنوی                                        | `278 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1259681122i/7234896.jpg)                                                | منطق کاربردی                                       | `272 صفحه`             |
| ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1246267626i/1552441.jpg)                                                | جاذبه و دافعه علی                                  | `168 صفحه`             |
<!-- SerializedQuery END -->

‌<br/>‌<br/>

## 👨‍🏫 دوره‌های آموزشی

<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + round(length.hours) + " ساعت`" FROM #Course WHERE length !=null SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + round(length.hours) + " ساعت`" FROM #Course WHERE length !=null SORT date DESC -->

| ("![](" + cover + ")")                                                    | file.name                             | "`" + round(length.hours) + " ساعت`" |
| ------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------ |
| ![](https://s32.picofile.com/file/8478596484/ensan4.jpg)                  | روایت انسان (فصل 4)                   | `15 ساعت`                            |
| ![](https://s32.picofile.com/file/8478596626/karnakon_job.jpg)            | دوره جامع طراحی مسیر شغلی             | `11 ساعت`                            |
| ![](https://s32.picofile.com/file/8478596826/vic.jpg)                     | فایل صوتی درباره موفقیت و برنامه ریزی | `2 ساعت`                             |
| ![](https://s32.picofile.com/file/8478596584/grammer.jpg)                 | کارگاه جامع گرامر                     | `7 ساعت`                             |
| ![](https://s32.picofile.com/file/8478596792/stable.jpg)                  | دوره جامع استیبل دیفیوژن              | `20 ساعت`                            |
| ![](https://s32.picofile.com/file/8478598318/goal_setting.jpg)            | دوره صوتی آموزش هدف گذاری             | `8 ساعت`                             |
| ![](https://s32.picofile.com/file/8478596800/tanz_bank.jpg)               | طنز بانک                              | `8 ساعت`                             |
| ![](https://s32.picofile.com/file/8478596600/karnakon_estekhdam.jpg)      | چگونه استخدام شویم؟                   | `5 ساعت`                             |
| ![](https://s32.picofile.com/file/8478596350/7kar.jpg)                    | هفت کار (معرفی اثربخش)                | `5 ساعت`                             |
| ![](https://s32.picofile.com/file/8478597842/design.jpg)                  | خلاقیت در دیزاین                      | `3 ساعت`                             |
| ![](https://s32.picofile.com/file/8478596476/ensan3.jpg)                  | روایت انسان (فصل 3)                   | `12 ساعت`                            |
| ![](https://s32.picofile.com/file/8478596676/leon.jpg)                    | دوره‌ آموزش نرم‌افزار ایلوستریتور     | `50 ساعت`                            |
| ![](https://s32.picofile.com/file/8478596342/2D_magic.jpg)                | 2D Character Design Magician          | `5 ساعت`                             |
| ![](https://s32.picofile.com/file/8478596850/worperess_to_hugo.jpg)       | Migrate from WordPress to Hugo        | `6 ساعت`                             |
| ![](https://s32.picofile.com/file/8478597826/arezoye_khademi.jpg)         | دوره تصویرسازی (آرزوی خادمی)          | `20 ساعت`                            |
| ![](https://s32.picofile.com/file/8478596442/ensan2.jpg)                  | روایت انسان (فصل 2)                   | `17 ساعت`                            |
| ![](https://s32.picofile.com/file/8478596650/khodkhan.jpg)                | کارگاه زبان خودخوان                   | `5 ساعت`                             |
| ![](https://s32.picofile.com/file/8478596818/think.jpg)                   | دوره صوتی تفکر سیستمی                 | `6 ساعت`                             |
| ![](https://s32.picofile.com/file/8478596376/audio_in_premiere.jpg)       | صوت در پریمیر                         | `10 ساعت`                            |
| ![](https://s32.picofile.com/file/8478596434/ensan1.jpg)                  | روایت انسان (فصل 1)                   | `15 ساعت`                            |
| ![](https://s32.picofile.com/file/8478596592/illustrator_for_animate.jpg) | Illustration for Animation            | `6 ساعت`                             |
| ![](https://s32.picofile.com/file/8478597868/frozen.jpg)                  | دوره طراحی کاراکتر                    | `50 ساعت`                            |
| ![](https://s32.picofile.com/file/8478596426/doketab_masir.png)           | دوکتاب طراحی مسیر زندگی               | `14 ساعت`                            |
| ![](https://s32.picofile.com/file/8478596768/photophantom.jpg)            | فوتوفنتوم - دوره تخصصی فتومونتاژ      | `15 ساعت`                            |
| ![](https://s32.picofile.com/file/8478596692/masir_asli.jpg)              | فایل صوتی افزایش عزت نفس - مسیر اصلی  | `3 ساعت`                             |
| ![](https://s32.picofile.com/file/8478596734/photophan.jpg)               | فوتوفن - آموزش نرم افزار فتوشاپ       | `40 ساعت`                            |
| ![](https://s32.picofile.com/file/8478596400/doketab_asl.png)             | دوکتاب اصل گرایی                      | `12 ساعت`                            |
| ![](https://s32.picofile.com/file/8478596518/ensan6.jpg)                  | روایت انسان (فصل 6)                   | `15 ساعت`                            |
| ![](https://s32.picofile.com/file/8478596492/ensan5.jpg)                  | روایت انسان (فصل 5)                   | `15 ساعت`                            |
<!-- SerializedQuery END -->

‌<br/>‌<br/>

## 🎙 پادکست

<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Podcast WHERE length !=null SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Podcast WHERE length !=null SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                                     | file.name                              | "`" + length.minute + " دقیقه`" |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------- |
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
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/7L7A6419_-_Copy_ztss9g.jpg)                                                                  | گفت و گو با حامد و حسام توکلی          | `120 دقیقه`                     |
| ![](https://assets.pippa.io/shows/665af3e5650f0e0011134429/665af3ed735ad800126e2cad.jpg)                                                                   | رختکن بازنده‌ها - پوریا عالمی          | `99 دقیقه`                      |
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/E1BmeRiX0AAjmlX_jbz5kx.jpg)                                                                  | گفت و گو با پیمان فخاریان              | `110 دقیقه`                     |
| ![](https://s3.castbox.fm/8b/a4/6b/c98e8fe7297860325375927ba84fcbd45c_scaled_v1_400.jpg)                                                                   | گفت و گو با محمدرضا شعبانعلی           | `320 دقیقه`                     |
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/_-_-__jbzrzh.jpg)                                                                            | گفت و گو با هادی شجاری                 | `128 دقیقه`                     |
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/photo_2022-10-04_22-40-58_9qsqgk.jpg)                                                        | گفت و گو با پوریا عالمی                | `180 دقیقه`                     |
| ![](https://s3.castbox.fm/c8/00/6e/34b30664ce6fea0eda96b92f3be28bce66_scaled_v1_400.jpg)                                                                   | گفت و گو با نیما قاضی                  | `225 دقیقه`                     |
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/1_ge2up5.jpg)                                                                                | گفت و گو با مصطفی الهیاری              | `148 دقیقه`                     |
| ![](https://s32.picofile.com/file/8478578350/%D8%A7%D8%B3%D8%A8_%D8%AA%D8%A7%D8%B1%DB%8C%DA%A9.jpg)                                                        | بحثی درباره‌ی کتاب اسب تاریک           | `80 دقیقه`                      |
| ![](https://s3.castbox.fm/a6/ab/97/c7af0b443edb047897cf099a8c5cdc7aa5_scaled_v1_400.jpg)                                                                   | گفت و گو با حامد بیدی                  | `146 دقیقه`                     |
| ![](https://s32.picofile.com/file/8478577750/%D8%AC%D8%A7%D9%81%DA%A9%D8%B1%DB%8C_%D9%81%D8%B5%D9%84_15.jpg)                                               | جافکری فصل 15                          | `290 دقیقه`                     |
| ![](https://assets.pippa.io/shows/65417dfc6143f1001280fb90/65417e0142acb40012b53b40.png)                                                                   | خلاصه‌ی کتاب اصل‌گرایی                 | `56 دقیقه`                      |
| ![](https://s3.castbox.fm/93/49/7b/8120e7fa5fcad20b98d17cc23901585384_scaled_v1_400.jpg)                                                                   | خلاصه کتاب گستره                       | `58 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478577742/%D8%A8%D9%87_%D9%88%D9%82%D8%AA_%D8%AE%D9%88%D8%AF%D8%B4%D9%86%D8%A7%D8%B3%DB%8C.jpg)                         | به وقت خودشناسی                        | `756 دقیقه`                     |
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/3_kcxqn5.jpg)                                                                                | طراحی مسیر شغلی                        | `125 دقیقه`                     |
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/photo_2018-10-20_20-22-56_vfrf3j.jpg)                                                        | گفت و گو با امین آرامش                 | `90 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478577784/%D8%B3%D8%AE%D9%86%D9%88%D8%B1%D8%A7%D9%86.jpg)                                                               | کمالگرایی                              | `19 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478577784/%D8%B3%D8%AE%D9%86%D9%88%D8%B1%D8%A7%D9%86.jpg)                                                               | بی حسی                                 | `15 دقیقه`                      |
| ![](https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog14019751/IMG_20220730_153351_-_Copy_h6r4sa.jpg)                                                       | گفت و گو با امیر موسوی جهانگرد         | `160 دقیقه`                     |
| ![](https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/e6/9c/9a/e69c9aaf-8854-c2aa-95fc-258b71c32a75/mza_12938323960868958472.jpg/500x500bb.webp)     | تکامل فردی و مسیر دستیابی به آن        | `124 دقیقه`                     |
<!-- SerializedQuery END -->

‌<br/>‌<br/>

## ✨ محتوای مفید


<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Media WHERE length !=null SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Media WHERE length !=null SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                                                                                     | file.name                                                                 | "`" + length.minute + " دقیقه`" |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------- |
| ![](https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/9e003b0a822daba702608136e73f7be001b6b2f2_2880x1620.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=82w=640)                            | تاریخ بصری دانش بشر                                                       | `13 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478604018/entekhabat.jpg)                                                                                                                                               | آدمیزاد و انتخاب                                                          | `240 دقیقه`                     |
| ![](https://s32.picofile.com/file/8478603950/amirkhani.jpg)                                                                                                                                                | گفت و گوی میلاد دخانچی و رضا امیرخانی - آینده سیاسی ایران و مسئله جانشینی | `93 دقیقه`                      |
| ![](https://static.cdn.asset.aparat.com/avt/43530379-2965-b__6265.jpg)                                                                                                                                     | گفت و گوی ملکیان و مکری - مسئله اراده و جبر                               | `105 دقیقه`                     |
| ![](https://static.cdn.asset.aparat.cloud/avt/58975576-9466-l__8149.jpg?width=900&quality=90&secret=pzo294U3PY-dnGDjwvRVHA)                                                                                | وبینار نویسنده کارآفرین                                                   | `65 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478604084/design.jpg)                                                                                                                                                   | قوانین دیزاین                                                             | `80 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478604000/draw.jpg)                                                                                                                                                     | چگونه نقاشی بکشیم تا بیشتر به خاطر بسپاریم                                | `16 دقیقه`                      |
| ![](https://talkstar-photos.s3.amazonaws.com/uploads/33beb66a-65ef-436d-b5ac-c02fa9bdf06c/Graham+Shaw.jpeg)                                                                                                | چرا مردم بر این باورند که نمی توانند نقاشی کنند                           | `15 دقیقه`                      |
| ![](https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/9595cdc1-fd8e-4aa1-863a-2c6641ae3cbb/BreneBrown_2010X-embed.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=80&w=3840) | قدرت آسیب پذیری                                                           | `20 دقیقه`                      |
| ![](https://talkstar-photos.s3.amazonaws.com/uploads/4ebfc94d-c426-4019-9060-20edc54dcec8/KellyMcGonigal_2013G-embed.jpg)                                                                                  | چگونه استرس را به دوست خود تبدیل کنیم                                     | `14 دقیقه`                      |
| ![](https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/04916ee6e81065c8333e6546184af512eee37bbe_2880x1620.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=82w=640)                            | چگونه رهبران بزرگ الهام بخش می شوند؟                                      | `18 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478603934/ai.jpg)                                                                                                                                                       | هوش مصنوعی و هنر، چالش‌ها و فرصت‌ها                                       | `120 دقیقه`                     |
| ![](https://s32.picofile.com/file/8478604034/stiv.jpg)                                                                                                                                                     | سخنرانی استیو جابز در استنفورد                                            | `15 دقیقه`                      |
| ![](https://static.cdn.asset.aparat.cloud/avt/26751245-2423-b__5033.jpg?width=900&quality=90&secret=OhJ_WzJLe7bWz6d2ldZeAQ)                                                                                | گفت و گو با رضا امیرخانی                                                  | `95 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478603942/alaghe.jpg)                                                                                                                                                   | علاقه همه چیز نیست                                                        | `60 دقیقه`                      |
| ![](https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/11e3541d75d4afba6badc2c3c058b8cb4bfe5863_2880x1620.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=82w=640)                            | چرا برخی از ما یک تماس واقعی نداریم                                       | `12 دقیقه`                      |
| ![](https://static.cdn.asset.aparat.com/avt/48775280-3123-b__9693.jpg)                                                                                                                                     | علل رواج حرف مفت در جامعه                                                 | `28 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478604050/jado.jpg)                                                                                                                                                     | طراحی مسیر شغلی و جادوی اینترنت                                           | `105 دقیقه`                     |
| ![](https://s32.picofile.com/file/8478603984/daramad.jpg)                                                                                                                                                  | یادگیری مهارت و کسب درآمد                                                 | `70 دقیقه`                      |
| ![](https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/d5d00454-d7aa-434c-8fae-ff2bc97c5f02/TimUrban_2016-embed.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=82w=640)      | درون ذهن استاد اهمال کار                                                  | `14 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478604042/job.jpg)                                                                                                                                                      | طراحی مسیر شغلی و اشتباهات رایج در آن                                     | `90 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478603968/araste.jpg)                                                                                                                                                   | گفت و گو درباره سبک زندگی                                                 | `120 دقیقه`                     |
| ![](https://s32.picofile.com/file/8478604026/game.jpg)                                                                                                                                                     | آشنایی با گیمیفیکیشن                                                      | `180 دقیقه`                     |
<!-- SerializedQuery END -->

‌<br/>‌<br/>

## 🍿 فیلم و سریال

<div class="overview-4">
<!-- QueryToSerialize: TABLE WITHOUT ID "🎬" as icon, length(rows) + " فیلم" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "movie" AND length != null GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎬" as icon, length(rows) + " فیلم" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "movie" AND length != null GROUP BY "" -->

| icon | count   | sum          |
| ---- | ------- | ------------ |
| 🎬   | 82 فیلم | `183.9 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "📺" as icon, length(rows) + " سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "series" AND length != null GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "📺" as icon, length(rows) + " سریال" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "series" AND length != null GROUP BY "" -->

| icon | count    | sum          |
| ---- | -------- | ------------ |
| 📺   | 22 سریال | `599.3 ساعت` |
<!-- SerializedQuery END -->

<!-- QueryToSerialize: TABLE WITHOUT ID "🎈" as icon, length(rows) + " انیمیشن" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "animation" AND length != null GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "🎈" as icon, length(rows) + " انیمیشن" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "animation" AND length != null GROUP BY "" -->

| icon | count     | sum         |
| ---- | --------- | ----------- |
| 🎈   | 7 انیمیشن | `11.8 ساعت` |
<!-- SerializedQuery END -->


<!-- QueryToSerialize: TABLE WITHOUT ID "⌛" as icon, length(rows) + " فیلم کوتاه" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "short" AND length != null GROUP BY "" -->
<!-- SerializedQuery: TABLE WITHOUT ID "⌛" as icon, length(rows) + " فیلم کوتاه" as count, "`" + round(sum(rows.length.hours),1) + " ساعت`" as sum FROM #Movie WHERE type = "short" AND length != null GROUP BY "" -->

| icon | count         | sum        |
| ---- | ------------- | ---------- |
| ⌛    | 44 فیلم کوتاه | `4.8 ساعت` |
<!-- SerializedQuery END -->

</div>


### فیلم
<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Movie WHERE type = "movie" SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Movie WHERE type = "movie" SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                          | file.name                             | "`" + length.minute + " دقیقه`" |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------- |
| ![](https://m.media-amazon.com/images/M/MV5BMjAyNTU5OTcxOV5BMl5BanBnXkFtZTcwMDEyNjM2MQ@@._V1_SX300.jpg)                                         | 21                                    | `123 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg)         | Taxi Driver                           | `114 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMzliZDk0NjctNjhlOC00MWEyLWI3OWYtNjA5ZDYxMTMzNTc5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg)         | The Big Lebowski                      | `117 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BZGM5ZTY1ZTEtYjVlZi00M2RiLTllODgtMDYzMzk3YjY1MjNmXkEyXkFqcGdeQXVyMTAyNTQ0MTk@._V1_SX300.jpg)         | The Glass Agency                      | `114 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMzRkZDVkMDItYjk3Mi00NDkyLThmODUtYzhkN2EwZmE2ZTljXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg)         | Wag the Dog                           | `97 دقیقه`                      |
| ![](https://m.media-amazon.com/images/M/MV5BZTEzNGU1ODQtZmEzZS00ODJlLWI3ZWItNmY1MTVjNjk0MzBjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg)         | Close-Up                              | `98 دقیقه`                      |
| ![](https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg)         | Reservoir Dogs                        | `99 دقیقه`                      |
| ![](https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg)                                             | The Departed                          | `151 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg)         | The Silence of the Lambs              | `118 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg)         | Amélie                                | `122 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMTNmZGY4OTctYjUwNi00ZjNmLTlmODItMDVhOGJmYThmMTU5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg)         | Che Part Two                          | `135 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BM2JiNjE4YjItNTFhNS00ZmYyLWEwNzctNzJmYzNiYWYzOGM3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg)         | Che Part One                          | `134 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BODg5ZGU1YjYtN2Y5NC00YmVmLTg4ZDMtYjNkMjhjMTE3YTE4XkEyXkFqcGdeQXVyNzEyNDA4NDQ@._V1_SX300.jpg)         | Maslahat                              | `110 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg)         | The Truman Show                       | `103 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX300.jpg)                                         | Prisoners                             | `153 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg)         | Parasite                              | `132 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg)         | The Shining                           | `146 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMjE4ZTZlNDAtM2Q3YS00YjFhLThjN2UtODg2ZGNlN2E2MWU2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg)         | Killers of the Flower Moon            | `206 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg)                                         | Eternal Sunshine of the Spotless Mind | `108 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg)         | Forrest Gump                          | `142 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BYzlkZTEyYjUtMTY5NS00ZjU0LTk5OTYtM2M0ZDg1NmNjMzhkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg)         | Insomnia                              | `118 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg)         | Dunkirk                               | `106 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BZGJkMDUwZWQtYTMzMS00NTg5LWE1ZTYtOTVhMDI4NGI1YjMyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg)         | The Killer                            | `118 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg)         | Oppenheimer                           | `180 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMTU0NTU5NTAyMl5BMl5BanBnXkFtZTYwNzYwMDg2._V1_SX300.jpg)                                             | Downfall                              | `156 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg)         | Schindlers List                       | `195 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg)         | The Pianist                           | `150 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg)         | Pulp Fiction                          | `154 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg)         | 12 Angry Men                          | `96 دقیقه`                      |
| ![](https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_SX300.jpg)                                         | The Girl with the Dragon Tattoo       | `158 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_SX300.jpg)                                         | Sherlock Holmes A Game of Shadows     | `129 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_SX300.jpg)                                         | Sherlock Holmes                       | `128 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg)                                         | Gone Girl                             | `149 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BNWQ2ODFhNWItNTA4NS00MzkyLTgyYzUtZjlhYWE5MmEzY2Q1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg)         | The Game                              | `129 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BN2UwNDc5NmEtNjVjZS00OTI5LWE5YjctMWM3ZjBiZGYwMGI2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg)         | Zodiac                                | `157 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BNmY4ZGFjYTYtMDNmYi00ZDM4LWFjYTgtNmNlZjBmMzg0MzQ3XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg)         | Panic Room                            | `112 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg)         | Whiplash                              | `106 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg)                                             | The Prestige                          | `130 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_SX300.jpg)                                         | Hacksaw Ridge                         | `139 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BYzUyMzA5NDktODUzOS00YWE5LWFjYTEtYjA3MDY0ZTM0NmQwXkEyXkFqcGdeQXVyNTQ0NTUxOTA@._V1_SX300.jpg)         | 1987 When the Day Comes               | `129 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BODQ0OWJiMzktYjNlYi00MzcwLThlZWMtMzRkYTY4ZDgxNzgxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg)         | Fight Club                            | `139 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BNjAxMTI4MTgzMV5BMl5BanBnXkFtZTgwOTAwODEwMjE@._V1_SX300.jpg)                                         | Begin Again                           | `104 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMTQ0MzQxODQ0MV5BMl5BanBnXkFtZTgwNTQ0NzY4NDE@._V1_SX300.jpg)                                         | About Elly                            | `119 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg)                                         | The Wolf of Wall Street               | `180 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg)         | The Shawshank Redemption              | `142 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMjA3NjQ2ODYwN15BMl5BanBnXkFtZTgwNTQ0NDc2MDE@._V1_SX300.jpg)                                         | Son of God                            | `138 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMjI2OTgyNTc0Ml5BMl5BanBnXkFtZTgwNDM1NTQxMTE@._V1_SX300.jpg)                                         | Noah                                  | `138 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMjI3MDY0NjkxNl5BMl5BanBnXkFtZTgwNTM3NTA0MzE@._V1_SX300.jpg)                                         | Exodus Gods and Kings                 | `150 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BODZiMzAxNTctZjdiZC00OGY5LTg2NDAtNWJhNmQwZTcyMWQ2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg)         | Constantine                           | `121 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg)                                             | Catch Me If You Can                   | `141 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg)                                         | The Dark Knight Rises                 | `164 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg)                                         | The Dark Knight                       | `152 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg)         | Batman Begins                         | `140 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMTczNDgzMjczOV5BMl5BanBnXkFtZTcwOTU3MzMwMg@@._V1_SX300.jpg)                                         | Revolutionary Road                    | `119 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BYzkyNzNiMDItMGU1Yy00NmEyLWE4N2ItMjkzMDZmMmVhNDU4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg)         | CODA                                  | `111 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg)         | Interstellar                          | `169 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BNTlkOWYzZDYtNzQ1MS00YTNkLTkyYTItMjBmNjgyMDBlMjI4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg)         | The Dictator                          | `83 دقیقه`                      |
| ![](https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg)         | The Social Network                    | `120 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg)         | The Matrix Resurrections              | `148 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg)         | The Godfather                         | `175 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg)         | The Godfather Part II                 | `202 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMTg2MzYzNzgzOF5BMl5BanBnXkFtZTgwOTg4NzQ4OTE@._V1_SX300.jpg)                                         | Snowden                               | `134 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg)         | Dune                                  | `155 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg)         | Titanic                               | `194 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg)         | Memento                               | `113 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg)         | The Revenant                          | `156 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMzU3YWYwNTQtZTdiMC00NjY5LTlmMTMtZDFlYTEyODBjMTk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg)         | Tenet                                 | `150 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BNzljNjY3MDYtYzc0Ni00YjU0LWIyNDUtNTE0ZDRiMGExMjZlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg)         | Argo                                  | `120 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg)         | Shutter Island                        | `138 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BYTM3ZTllNzItNTNmOS00NzJiLTg1MWMtMjMxNDc0NmJhODU5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg)         | Kingsman The Secret Service           | `129 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg)                                         | Inception                             | `148 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BOWRhYWFkMDEtNTFjZC00OWJkLWJmMWQtNzI2OWRjZjVjOGYyXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SX300.jpg)         | Escape from Pretoria                  | `106 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BYjhlNDljNTgtZjc4My00NmZmLTk2YzAtYWE5MDYwYjM4MTkzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg)         | Now You See Me 2                      | `129 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_SX300.jpg)                                         | Now You See Me                        | `115 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg)         | Joker                                 | `122 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg)                                         | Django Unchained                      | `165 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_SX300.jpg)                                         | 12 Years a Slave                      | `134 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg)         | The Matrix Revolutions                | `129 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg)         | The Matrix Reloaded                   | `138 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg) | The Matrix                            | `136 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMzllNmRjYWItNjlhNS00MjcyLWIyODEtMTg0ZjBiNTNhNzQwXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_SX300.jpg)         | The Platform                          | `94 دقیقه`                      |
| ![](https://m.media-amazon.com/images/M/MV5BZDE3YzQ3YmQtMDI0NC00NDdhLWI2MGUtYjZiM2Q0ZGM5ZGI4XkEyXkFqcGdeQXVyNDk2MjM2MDI@._V1_SX300.jpg)         | The Lizard                            | `115 دقیقه`                     |
<!-- SerializedQuery END -->

‌<br/>‌<br/>

### سریال
<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + round(length.hours) + " ساعت`" FROM #Movie WHERE type = "series" SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + round(length.hours) + " ساعت`" FROM #Movie WHERE type = "series" SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                  | file.name         | "`" + round(length.hours) + " ساعت`" |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------ |
| ![](https://m.media-amazon.com/images/M/MV5BZTZkMWVkNTEtYzMxMC00MzQzLTg5NjUtNTNmN2M2NzEwNzI0XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_SX300.jpg) | The Sopranos      | `48 ساعت`                            |
| ![](https://m.media-amazon.com/images/M/MV5BZmQ0NDE5NjYtMGU4OS00NGMwLWJmOGYtZjVmYTFhMzA3ZGQ2XkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_SX300.jpg) | Baby Reindeer     | `4 ساعت`                             |
| ![](https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_SX300.jpg) | Dark              | `24 ساعت`                            |
| ![](https://m.media-amazon.com/images/M/MV5BMzdiYzRjZjctZDE0ZC00MGQ4LWEwYzAtZDEyNzJiYzI2YjM2XkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_SX300.jpg) | Bodies            | `8 ساعت`                             |
| ![](https://m.media-amazon.com/images/M/MV5BNTkzMGQ4NTMtZGY2Ny00YjgyLTk2MGMtYjhkNDQ2OGRjMzczXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg) | Berlin            | `7 ساعت`                             |
| ![](https://m.media-amazon.com/images/M/MV5BMTc2MjA4MTM2OV5BMl5BanBnXkFtZTcwMTYzMzA1Mg@@._V1_SX300.jpg)                                 | Lie to Me         | `34 ساعت`                            |
| ![](https://m.media-amazon.com/images/M/MV5BYzhjMDIwOTgtYmMwNC00ZDIyLWJiMzUtMDM0YTY3M2VmOWNiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg) | Shrinking         | `5 ساعت`                             |
| ![](https://m.media-amazon.com/images/M/MV5BMTdmZjBjZjQtY2JiNS00Y2ZlLTg2NzgtMjUzMGY2OTVmOWJiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg) | Ted Lasso         | `24 ساعت`                            |
| ![](https://m.media-amazon.com/images/M/MV5BNjBjZWM3M2UtOWZkYS00ZmFjLTk4ZTItZmNhZjE3OGIxZmY1XkEyXkFqcGdeQXVyMTk0MTczMDI@._V1_SX300.jpg) | The Lion Skin     | `20 ساعت`                            |
| ![](https://m.media-amazon.com/images/M/MV5BNTlhMWQyYTAtZjFjMS00M2UzLThiNzMtNTVhN2FkZjAwZWY2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg) | The Peripheral    | `8 ساعت`                             |
| ![](https://m.media-amazon.com/images/M/MV5BNWUxYWY1YTctYjVmMi00MmJiLWE3NzktZmM4YzliOGE1ZmE2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg) | Tehran            | `6 ساعت`                             |
| ![](https://m.media-amazon.com/images/M/MV5BNmM4ODU1MzItODYyYi00Y2U0LWFjZjItYTRhZWIwOGMyZTRhXkEyXkFqcGdeQXVyNjc2NTQ4Nzk@._V1_SX300.jpg) | House of Cards    | `63 ساعت`                            |
| ![](https://m.media-amazon.com/images/M/MV5BM2Q1YzUxYTYtOTkwZC00Mjk3LTllZWQtNThjYjllZjE2OTQwXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_SX300.jpg) | Homeland          | `87 ساعت`                            |
| ![](https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg) | Better Call Saul  | `53 ساعت`                            |
| ![](https://m.media-amazon.com/images/M/MV5BZDg1OWRiMTktZDdiNy00NTZlLTg2Y2EtNWRiMTcxMGE5YTUxXkEyXkFqcGdeQXVyMTM2MDY0OTYx._V1_SX300.jpg) | Westworld         | `35 ساعت`                            |
| ![](https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg) | Breaking Bad      | `51 ساعت`                            |
| ![](https://m.media-amazon.com/images/M/MV5BMjkwZjcwMGQtNDAzOC00YjJiLThiYTgtNWU3ZjRiZmY2YzEzXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg) | Severance         | `8 ساعت`                             |
| ![](https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_SX300.jpg) | The Queens Gambit | `7 ساعت`                             |
| ![](https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_SX300.jpg) | Money Heist       | `39 ساعت`                            |
| ![](https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_SX300.jpg) | Peaky Blinders    | `35 ساعت`                            |
| ![](https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg) | Squid Game        | `14 ساعت`                            |
| ![](https://m.media-amazon.com/images/M/MV5BMWEzNTFlMTQtMzhjOS00MzQ1LWJjNjgtY2RhMjFhYjQwYjIzXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg) | Sherlock          | `19 ساعت`                            |
<!-- SerializedQuery END -->

‌<br/>‌<br/>
### انیمیشن

<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + round(length.hours) + " ساعت`" FROM #Movie WHERE type = "animation" SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + round(length.hours) + " ساعت`" FROM #Movie WHERE type = "animation" SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                  | file.name   | "`" + round(length.hours) + " ساعت`" |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------ |
| ![](https://m.media-amazon.com/images/M/MV5BMGRkZThmYzEtYjQxZC00OWEzLThjYjAtYzFkMjY0NGZkZWI4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg) | Persepolis  | `2 ساعت`                             |
| ![](https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg) | Luca        | `2 ساعت`                             |
| ![](https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_SX300.jpg) | Soul        | `2 ساعت`                             |
| ![](https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg)                                 | Ratatouille | `2 ساعت`                             |
| ![](https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_SX300.jpg)                                 | Zootopia    | `2 ساعت`                             |
| ![](https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg) | Coco        | `2 ساعت`                             |
| ![](https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg)                                 | Inside Out  | `2 ساعت`                             |
<!-- SerializedQuery END -->

‌<br/>‌<br/>

### فیلم کوتاه
<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Movie WHERE type = "short" SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Movie WHERE type = "short" SORT date DESC -->

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
| ![](https://m.media-amazon.com/images/M/MV5BYzI4YmZlMDktNzUzNC00ZTRiLTkzZmMtMTU1YjEwNjYyZjE1XkEyXkFqcGdeQXVyNTU1ODI5NjI@._V1_SX300.jpg)                 | Walter                                 | `7 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BMTdmY2NkNzktZjIwMS00ZDg2LWFmYWMtMjg3MGY5MmI5ZmZmXkEyXkFqcGdeQXVyMTQxMjgwNzc@._V1_SX300.jpg)                 | Timber                                 | `6 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BNzYzNjM2MzQtMzQ5Zi00MDFmLWJjNDktYzQxYmY0NGMyYmFjXkEyXkFqcGdeQXVyODY5OTI0NDc@._V1_SX300.jpg)                 | The Angler                             | `14 دقیقه`                      |
| ![](https://m.media-amazon.com/images/M/MV5BYjRmYjMwYzEtNTBmZS00NDBiLWJhZTctZjJhYjJmNmNhNDNkXkEyXkFqcGdeQXVyMTUyMzYxMzU@._V1_SX300.jpg)                 | Some Thing                             | `7 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BMjA2Njc2NzkyMV5BMl5BanBnXkFtZTgwNjE3NzgyNzE@._V1_SX300.jpg)                                                 | Snack Attack                           | `5 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BNTk2MjhlNTAtYmI3Yi00ZGRlLTgxMTQtZWU1Zjg2M2NmZTdiXkEyXkFqcGdeQXVyMjI1NzEwNg@@._V1_SX300.jpg)                 | Scrambled                              | `7 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BNmIyNmE4Y2MtNDUxMS00ZjQyLThkNDItMmMwMTNiNDk1NzQ0XkEyXkFqcGdeQXVyMTA5MTg3NzY@._V1_SX300.jpg)                 | Leaving Home                           | `7 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BMDM2ZGI2YzQtYjRlYS00MmM3LThmYjktNWZkMzQ5NDRlYjdiXkEyXkFqcGdeQXVyNzMwOTY2NTI@._V1_SX300.jpg)                 | Kutoja                                 | `7 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BZGI4MWFhYzEtY2NlMi00ZWIzLTkwNjQtN2RlYWEzODI5NTY5XkEyXkFqcGdeQXVyOTQ4MDE3MDQ@._V1_SX300.jpg)                 | Benigni                                | `8 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BN2EzY2JkM2EtODk2NC00MWIyLWFkYWMtNjk2N2ZjODg1ZjZjXkEyXkFqcGdeQXVyOTg3MjcwMjg@._V1_SX300.jpg)                 | An Object at Rest                      | `6 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BOTQwNDcyZjUtMmZhNi00MmYwLWEwNGYtYjU2NGE1OGJiOWY0XkEyXkFqcGdeQXVyNzMwOTY2NTI@._V1_SX300.jpg)                 | Alarm                                  | `9 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BNDY2NzBiZjQtODFmYi00Y2JkLTliNjAtYTQxNDMxNTEzNDFhXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg)                 | Purl                                   | `8 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BOWMzMDcxNjAtYTk5OC00ZTUyLTgxMGQtYmM3M2E5MWM5YzAxXkEyXkFqcGdeQXVyMzM4NjcxOTc@._V1_SX300.jpg)                 | Runaway                                | `4 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BNDc2OTI4ZWYtNGQ0Mi00NjUzLThkZTEtZjBiNmU5OTQyNzcxXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_SX300.jpg)                 | Mr Indifferent                         | `3 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BOGI0NTBlZTItMDgzZi00YjRiLTllZTAtNjRjMWJlNGI3ZjdkXkEyXkFqcGdeQXVyNDE4OTY5NzI@._V1_SX300.jpg)                 | Heavenly Appeals                       | `2 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BMDExZTc4YWItZmZkMS00NWEzLTk0NTEtOGViY2Q2OWM0MzE4XkEyXkFqcGdeQXVyMjExNjgyMTc@._V1_SX300.jpg)                 | El empleo                              | `7 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BNjllYzYzMzYtNmY2MS00MzVhLTliYTgtZWE5MGExZjg4MjUyXkEyXkFqcGdeQXVyMTI0Nzk5NTQ2._V1_SX300.jpg)                 | The Black Hole                         | `3 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BNGRhNDU5NGQtNDY4ZC00ZGM5LTgzMTktZTM2NjkwOGJiNTljXkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_SX300.jpg)                 | Re-Gifted                              | `2 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BYWFkOGJkZTctNjE4Mi00MDAyLWI5Y2EtZTQ0ZTNjZjA4ODE0XkEyXkFqcGdeQXVyMTM2MDY0OTYx._V1_SX300.jpg)                 | Pour 585                               | `5 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BODU4ZGZlMDktYzU5NS00MDBjLTk3ZDItOTdiYjNjNDBkMDEyXkEyXkFqcGdeQXVyMjM0MTQ1MDE@._V1_SX300.jpg)                 | Father                                 | `2 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BZGU2OTVjY2YtOGM2MS00MGQ3LTllMGEtMGZjYzE1YmY3NDFjXkEyXkFqcGdeQXVyNzgxNTAzNjM@._V1_SX300.jpg)                 | A Tale of Momentum  Inertia            | `2 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BZDk0NTJjNzItN2Y4NC00Mjk5LWEwZWMtMTAxZmQxNmJjOTllXkEyXkFqcGdeQXVyMjM3NTU0NTQ@._V1_SX300.jpg)                 | Wildebeest                             | `1 دقیقه`                       |
| ![](https://dialls2020.eu/wp-content/uploads/2019/05/ant-final-290519.jpg)                                                                              | ANT                                    | `4 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BYmRiOWNiZDEtM2NmMC00NDVkLTg3OTgtOTdlNzJhZTU4MzdmXkEyXkFqcGdeQXVyMzI0Mzk2NjA@._V1_SX300.jpg)                 | Room 8                                 | `7 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BNzhhMDkwNWItMmRlMS00ODg1LTkzMzAtZGM3NTAwNzViZGU5XkEyXkFqcGdeQXVyOTI3MDg0NzA@._V1_SX300.jpg)                 | Piper                                  | `6 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BNDZmZDczYmYtYzc1Ni00OTljLWE4ZDUtOWNkODBlY2I5M2QwXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg)                 | One Man Band                           | `4 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BOGRmZjgxYmEtNzViZS00ZDBkLThlMWEtNGQwMjRiYWViYTFhXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg)                 | Geris Game                             | `5 دقیقه`                       |
| ![](https://m.media-amazon.com/images/M/MV5BZjBhYzgyY2YtMTBhZS00NWIwLWIyYTgtMzhhYmFhZDNkMTQxXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg)                 | For the Birds                          | `3 دقیقه`                       |
<!-- SerializedQuery END -->

‌<br/>‌<br/>

## 🎥 مستند



<!-- QueryToSerialize: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Documentary WHERE length !=null SORT date DESC -->
<!-- SerializedQuery: table without id ("![](" + cover + ")"), file.name, "`" + length.minute + " دقیقه`" FROM #Documentary WHERE length !=null SORT date DESC -->

| ("![](" + cover + ")")                                                                                                                                      | file.name                 | "`" + length.minute + " دقیقه`" |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------------------------- |
| ![](https://m.media-amazon.com/images/M/MV5BNWFkMDY1MjItZmNkOS00MDg2LWFlMjMtZWU3YmM0MmY3MWM3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg)                     | American Factory          | `110 دقیقه`                     |
| ![](https://s32.picofile.com/file/8478552926/%D8%B1%D8%B6%D8%A7_%D8%B9%D8%A7%D8%A8%D8%AF%DB%8C%D9%86%DB%8C.jpg)                                             | رضا عابدینی گرافیک ایرانی | `25 دقیقه`                      |
| ![](https://m.media-amazon.com/images/M/MV5BMjgyZDE4YzQtN2QxNi00MTQ3LWFhZjEtYzZmZjM1YTdiNDhhXkEyXkFqcGdeQXVyODY3Nzc0OTk@._V1_SX300.jpg)                     | Room 237                  | `102 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BMzhlOTQyYTYtYTY5Yy00ZDkxLTkwYTYtMjQzOGE1ODllZjhjXkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_SX300.jpg)                     | Beyond Utopia             | `115 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BYTU3ZjUxM2MtZWQ5OS00NDQxLTlhZDMtYzY3OTE4ZDY0NWM1XkEyXkFqcGdeQXVyMTc2NDg4MTU@._V1_SX300.jpg)                     | AlphaGo                   | `90 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478551968/%D8%AC%D8%B2%DB%8C%D8%B1%D9%87_%D9%85%D8%A7%D9%87%DB%8C.jpg)                                                   | جزیره ماهی                | `78 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478551950/%D8%B1%D9%88%D8%B2%DA%AF%D8%A7%D8%B1_%DA%AF%D9%84_%D8%A2%D9%82%D8%A7%DB%8C%DB%8C.jpg)                          | روزگار گل آقایی           | `78 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478551942/%D8%B4%DA%A9%D9%88%D9%81%D9%87_%D9%87%D8%A7%DB%8C_%D8%B2%D9%85%D8%B3%D8%AA%D8%A7%D9%86.jpg)                    | شکوفه های زمستان          | `40 دقیقه`                      |
| ![](https://m.media-amazon.com/images/M/MV5BZjljOGQwYjAtYTVjYS00MWEyLTk2ZGYtM2I2OGFjNmIzZDljL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYxMzY2NDk@._V1_SX300.jpg)     | رویاهای دم صبح            | `76 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478551868/%D9%84%D8%A7%D8%AA%D8%A7%D8%B1%DB%8C%D9%86%D9%88.jpg)                                                          | لاتارینو                  | `76 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478551876/%D8%AC%D9%88%D8%A7%D9%86_%D9%85%D8%B1%DA%AF.jpg)                                                               | جوان مرگ                  | `86 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478551900/%D8%A8%D8%B1%D8%A7%DB%8C_%D9%BE%D8%B3_%D8%A7%D8%B2_%D9%85%D8%B1%DA%AF%D9%85.jpg)                               | برای پس از مرگم           | `70 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478551884/%D9%82%D9%85%D8%A7%D8%B1.jpg)                                                                                  | قمار                      | `75 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478552126/%DA%A9%D9%88%D8%AF%D8%AA%D8%A7%DB%8C_%D8%AE%D8%B2%D9%86%D8%AF%D9%87_%D8%AF%D8%B1_%D8%B3%D9%BE%D8%A7%D9%87.jpg) | کودتای خزنده در سپاه      | `47 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478552118/%D8%AC%D8%A7%D9%85_%D8%B2%D9%87%D8%B1.jpg)                                                                     | جام زهر                   | `56 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478551842/%D8%A7%D8%AA%D8%A7%D9%82_%D8%AC%D9%86%DA%AF.jpg)                                                               | اتاق جنگ                  | `86 دقیقه`                      |
| ![](https://s32.picofile.com/file/8478552100/%D8%A8%D9%87%D8%AA%D8%A7%D9%86_%D8%A8%D8%B1%D8%A7%DB%8C_%D8%AD%D9%81%D8%B8_%D9%86%D8%B8%D8%A7%D9%85.jpg)       | بهتان برای حفظ نظام       | `150 دقیقه`                     |
| ![](https://m.media-amazon.com/images/M/MV5BYTYyNzVkZDQtYTYxYy00MDBhLTg1ZmItMWE1NjlhNTM3Njg0XkEyXkFqcGdeQXVyNTMyNjAzMDU@._V1_SX300.jpg)                     | Xsunami                   | `96 دقیقه`                      |
| ![](https://m.media-amazon.com/images/M/MV5BMWE2MTdhOGQtZTljOS00N2MyLTk0N2EtNTNkODQ0YzdiMmM1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjQxMTA1NDM@._V1_SX300.jpg)     | Shabnaameh                | `98 دقیقه`                      |
<!-- SerializedQuery END -->


‌<br/>‌<br/>