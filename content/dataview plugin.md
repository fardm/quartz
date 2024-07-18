---
title: آموزش پلاگین دیتاویو (dataview)
aliases:
  - آموزش پلاگین دیتاویو (dataview)
date: 2024-07-04
draft: true
tags:
  - 🌱نهال
---
پلاگین دیتا ویو یکی از قدرتمند ترین پلاگین ها در استخراج داده است. در این یادداشت قصد دارم در مورد استفاده از این پلاگین توضیح بدم و تکنیک ها و ترفند هایی رو معرفی کنم.

## مود های مختلف

جدول، لیست، تقویم، تسک

## پارامتر ها
فرام، ور، سورت، لیمیت

ور:
تاریخ
پراپرتی خاص: منفی/مثبت اگر پراپرتی برابر با ایکس بود نمایش بده. اگر پراپرتی برابر با ایکس بود نمایش نده.

## محاسبه

### جمع زدن

جمع ارقام


جمع زمان: 
	حالت عادی به روز و هفته تبدیل میکنه.
	میشه بگیم فقط ساعت رو جمع بزنه
	یا فقط دقیقه رو




### شمردن، میانگین، حداکثر، حداقل
این [لینک](https://forum.obsidian.md/t/dataview-sums-and-average/53567/3)

### رند کردن
گرد کردن
حذف اعشار

### درصد گرفتن
می خواییم درصد بگیریم. مثلا ببینیم یه کار چه قدر پیشرفت کرده. یا مثلا مشغول مطالعه کتاب هستیم چه قدر از کتاب رو مطالعه کردیم.
این صفحه یادداشت ماست:

```
---
title: your-title
tags: book
current: 150
total: 300
---
```

تعداد کل صفحات در پراپرتی total می نویسیم و تعداد صفحاتی که خوانده شده را در current
برای درصد گرفتن از این کد استفاده میکنیم:
```
TABLE WITHOUT ID
    title as Title,
	round(current/total*100) + "%" as Progress
FROM #book
```

نتیجه میشه این

| Title      | Progress |
| ---------- | -------- |
| your-title | 50%      |





## نمونه های کاربردی


### نمایش تصاویر
اگر توی پراپرتی ها لینک تصویر رو گذاشته باشید با دیتا ویو میشه اون رو نمایش داد.  فرض کنید تصویر تون داخل پراپرتی cover گذاشتید.

اگر تصویر لینک خارجی باشه می تونید از این کد استفاده کنید:

```
table without id 
	"![cover|100](" + cover + ")" as cover,
	file.link as Title
```

اگر تصویر داخل والت تون ذخیره شده می تونید از این کد استفاده کنید:

```
table without id 
	embed(cover) as cover,
	file.link as Title
```

البته باید داخل پراپرتی cover تصویر رو به صورت ویکی لینک قرار بدید یعنی اسم فایل رو بذارید داخل دو تا براکت به این شکل:
`cover: [[image.png]]`

### نمایش شرطی
مثل هبیت ترکر
فرض کنید میخواییم یک هبیت ترکر بسازیم و گزارش هفتگی از عادت هامون بگیریم. مثلا این فایل ماست که فعالیت ها رو به صورت تسک داخل پراپرتی ها تعریف کردیم:
```
---
exercise: true
reading: false
---
```

حالا با این کد میتونیم اطلاعاتشو استخراج کنیم:
```
Table without ID
	file.link as Date,
	choice(exercise=false, "⬜", "✅") as 🏋️,
	choice(reading=false, "⬜", "✅") as 📚
FROM #journal
WHERE file.name >= ("2024-04-23") AND file.name <= ("{{2024-04-30}}")
SORT file.link Asc
```

این میشه نتیجه نهایی. اگر تسک انجام شده باشه ✅ نمایش میده اگر انجام نشده باشه ⬜ نمایش میده
![[image2930.png]]

<br/>
توضیحات بیشتر:
- [Super Simple Habit Tracker Template For Obsidian](https://youtu.be/zYzVwJq7eDg?si=dMbNV0luH1nhnVWj)


<br/> <br/>

### نمایش نوار پیشرفت
در حالت عادی اگر از کد زیر داخل فایل ها تون استفاده کنید یک نوار پیشرفت به شما نمایش میده.

```
<progress max=100 value=75> </progress> 75%
```

به این شکل:

<progress max=100 value=75> </progress> 75%

<br/>

مقدار `value` و `max` این نوار پیشرفت تنظیم می‌شود. `value` درصد تکمیل‌شدن تسک‌ها را نشان می‌دهد و `max='100'` حداکثر مقدار نوار را به 100 تنظیم می‌کند.
<br/>

از این نوار پیشرفت برای نمایش موارد مختلفی میشه استفاده کرد اینجا به دو موردش اشاره میکنم:

#### 1. جمع آوری تسک‌ها
فرض کنید توی یک صفحه تسک های مختلفی ایجاد کردید حالا میخوایید درصد پیشرفت کار رو مشاهده کنید. مثلا این محتوای یادداشت ماست:

- [x] کار یک
- [ ] کار دو
- [ ] کار سه
- [ ] کار چهار

<br/>

با استفاده از این کد می تونیم درصد پیشرفت کار رو ببینیم:
```
TABLE WITHOUT ID
	"<progress value='" + (length(filter(this.file.tasks.completed, (t) => t = true)) / length(this.file.tasks)) * 100 + "' max='100'></progress>" + round((length(filter(this.file.tasks.completed, (t) => t = true)) / length(this.file.tasks)) * 100) + "% completed" as "Progress Bar"
GROUP BY ""
```

<br/>

نتیجه کار به این شکل خواهد بود:

| Progress Bar                                |
| ------------------------------------------- |
| <progress max=100 value=25> </progress> 25% |
<br/><br/>

البته این کد فقط تسک هایی که توی یادداشت فعلی تون وجود داره رو جمع آوری میکنه. اگر میخوایید تسک ها از همه فایل ها جمع آوری بشه و خودتون اون ها رو فیلتر کنید میتونید از کد زیر استفاده کنید:

```
TABLE WITHOUT ID
Total, Complete,  "<progress value='" + (Complete * 100 / Total) + "' max='100'></progress>" AS "Progress Bar", Percent
FROM ""
WHERE file.tasks 
GROUP BY ""
FLATTEN length(sum(rows.file.tasks.status)) as Total
FLATTEN length(filter(sum(rows.file.tasks.status), (t) => t = "A" or t = "x")) as Complete
FLATTEN round(Complete * 100 / Total) + "%" as Percent
```

نتیجه میشه این:
![[image05235.png]]

اگر هم میخوایید خلاصه تر باشه و فقط نوار و درصد رو نشون بده از این استفاده کنید:
```
TABLE WITHOUT ID
round(Complete * 100 / Total) + "% " + "<progress value='" + (Complete * 100 / Total) + "' max='100'></progress>" AS "Progress Bar"
FROM ""
WHERE file.tasks 
GROUP BY ""
FLATTEN length(sum(rows.file.tasks.status)) as Total
FLATTEN length(filter(sum(rows.file.tasks.status), (t) => t = "A" or t = "x")) as Complete
```

<br/><br/>

توضیحات بیشتر:
- [Progress bar for notes (Easy and powerful) with dataview](https://forum.obsidian.md/t/progress-bar-for-notes-easy-and-powerful-with-dataview/33144)
- [Progress bar for incomplete/total tasks?](https://forum.obsidian.md/t/progress-bar-for-incomplete-total-tasks/30744)
- [Dataview query for all tasks in folder with custom status](https://forum.obsidian.md/t/dataview-query-for-all-tasks-in-folder-with-custom-status/56076)

<br/><br/>
#### 2. محاسبه پراپرتی‌ها
اگر می خوایید از اعداد و ارقام داخل پراپرتی ها استفاده کنید می تونید با نوار پیشرفت نمایش بدین. برای اینکار روش های مختلفی وجود داره:

##### روش اول
اون کد رو مستقیما توی پراپرتی وارد کنید به این شکل:
```
---
title: your-title
tags: note
progress_bar: <progress max=100 value=0> </progress> 0%
---
```

<br/>

برای هر یادداشت هم لازمه مقدایر صفر رو دستی تغییر بدین. یعنی اگر 50 درصد کار پیشرفته باید عدد های صفر رو روی 50 بذارید. من میذارم روی همون صفر باشه. حالا با کد زیر می تونید اطلاعات رو استخراج کنید:
```
TABLE WITHOUT ID
    title as Title,
	 progress_bar as "Progress Bar"
FROM #note
```

<br/>

نتیجه کار به این شکل خواهد بود:

| Title      | Progress Bar                                |
| ---------- | ------------------------------------------- |
| your-title | <progress max=100 value=0> </progress> 0% |

<br/> <br/>

##### روش دوم
این روش یه کم پویا تره و لازم نیست. به جای این که کد نوار پیشرفت رو داخل پراپرتی ها قرار بدیم داخل دیتا ویو قرار میدیم. یعنی داخل پراپرتی  فقط عدد(درصد پیشرفت کار) رو وارد می کنیم. بعد با استفاده از دیتا ویو اون عدد رو به صورت نوار پیشرفت نمایش میدیم.

فرض کنید این یادداشت ماست:

```
---
title: your-title
tags: note
progress_bar: 25
---
```

<br/>

اینجا در پراپرتی progress_bar مثلا مشخص کردیم که 25 درصد کار پیش رفته. حالا با کد زیر می تونیم توی دیتا ویو نمایش بدیم:

```
TABLE WITHOUT ID
    title as Title,
	 "<progress max=100 value=" + progress_bar + "> </progress> " + progress_bar + "%" as "Progress Bar"
FROM #note
```

<br/>

نتیجه به این شکل خواهد بود:

| Title      | Progress Bar                                |
| ---------- | ------------------------------------------- |
| your-title | <progress max=100 value=25> </progress> 25% |

##### روش سوم
بعضی وقتا درصد کار مشخص نیست و میخواییم خود دیتا ویو اون رو محاسبه کنه. فرض کنید در حال مطالعه یک کتاب هستیم. تعداد کل صفحات 300 صفحه است و ما 150 صفحه رو خوندیم حالا می خوایم پیشرفت کار رو بیینیم.
توی صفحه یادداشت این موارد رو نیاز داریم:
```
---
title: your-title
tags: book
current: 150
total: 300
---
```

<br/>

جلوتر نحوه محاسبه کردن و درصد گرفتن رو توضیح دادم اینجا عینا از همون کد استفاده می کنیم فقط کد رو باید به نحوی جایگذاری کنیم که نتیجه نهایی به جای نمایش یک عدد یک نوار پیشرفت رو نشون بده. به این شکل:

```
TABLE WITHOUT ID
    title as Title,
    "<progress max=" + pages + " value=" + current + "> </progress> " + round(current/pages*100) + "%" as Progress
FROM #book
```

<br/>

نتیجه به این شکل خواهد بود:

| Title      | Progress Bar                                |
| ---------- | ------------------------------------------- |
| your-title | <progress max=100 value=50> </progress> 50% |










<br/><br/><br/><br/>

---

> [!links] مطالب مرتبط
> نوشته‌های مرتبط با این موضوع را می‌توانید در [[obsidian|🔮 مدخل ابسیدین]] مشاهده کنید.
> 
> <br/>

<br/>

> [!comments] دیدگاه‌ها
> <div id="disqus_thread"></div>
> <script> (function() { 	var d = document, s = d.createElement('script'); s.src = 'https://ifardmim.disqus.com/embed.js'; s.setAttribute('data-timestamp', +new Date()); (d.head || d.body).appendChild(s); })(); </script>
> <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
