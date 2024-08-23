---
title: مدخل جدید
aliases: 
date: 
draft: true
tags:
---

<style>
	/*card view*/
		 tr {
			display: flex;
			flex-direction: column;
			border: 1px solid #b5b5b526;
			background-color: #b5b5b526;
			border-radius: 8px;
			font-size: 0.9em;
			line-height: 1.5em;
			overflow: hidden;
			}
	        
	    table>* {
			display: grid;
			gap: 15px;
			grid-template-columns: repeat(3, 1fr);
	        }
	        
		td {
			text-align: center;
	        }
	        
	    table td img {
			margin-bottom: -6px;
	        }
	        
	    table>thead {
			display: none;
	        }
	        
	    @media (max-width: 768px) {
		    table>* { grid-template-columns: repeat(3, 1fr); }
		    }
		    
	    @media (max-width: 480px) {
		    table>* { grid-template-columns: repeat(2, 1fr); }
		    }
	    
	/*hidden comment*/
		.giscus {
			display: none;
			}
			
		footer > hr {
			display: none;
		}
		
</style>

## ساخت مدخل عادی

<!-- QueryToSerialize: TABLE WITHOUT ID embed(link(image)) as "image", "[[" + file.name + "|" + title + "]]" as "title" WHERE draft = false AND hierarchy = [[obsidian|🔮 مدخل ابسیدین]] SORT number ASC -->
<!-- SerializedQuery: TABLE WITHOUT ID embed(link(image)) as "image", "[[" + file.name + "|" + title + "]]" as "title" WHERE draft = false AND hierarchy = [[obsidian|🔮 مدخل ابسیدین]] SORT number ASC -->

| image                                                     | title                                                              |
| --------------------------------------------------------- | ------------------------------------------------------------------ |
| ![[img/cover-obsidian01.svg\|cover-obsidian01.svg]]       | [[obsidian review\|بررسی و معرفی نرم افزار ابسیدین]]               |
| ![[img/cover-obsidian02.svg\|cover-obsidian02.svg]]       | [[obsidian install\|آموزش نصب و راه اندازی نرم افزار ابسیدین]]     |
| ![[img/cover-habit-tracker.svg\|cover-habit-tracker.svg]] | [[habit tracker in obsidian\|ساخت هبیت ترکر در نرم افزار ابسیدین]] |
| \-                                                        | [[add remove properties\|حذف و اضافه دسته جمعی پراپرتی]]           |
| \-                                                        | [[dataview plugin\|نمونه های کاربردی پلاگین دیتاویو]]              |
| \-                                                        | [[quartz configuration\|تنظیمات من برای کوارتز]]                   |
<!-- SerializedQuery END -->


<br/><br/>

## اضافه کردن تصویر به پست‌های بدون تصویر


<!-- QueryToSerialize: table without id EmbededCover, "[[" + file.name + "|" + title + "]]" as title FLATTEN choice(typeof(image)="link", embed(link(choice(typeof(image)="link", image, this.file.link))), "![](https://ifard.ir/img/noimage.svg)") AS EmbededCover WHERE draft = false AND hierarchy = [[obsidian|🔮 مدخل ابسیدین]] SORT number ASC -->
<!-- SerializedQuery: table without id EmbededCover, "[[" + file.name + "|" + title + "]]" as title FLATTEN choice(typeof(image)="link", embed(link(choice(typeof(image)="link", image, this.file.link))), "![](https://ifard.ir/img/noimage.svg)") AS EmbededCover WHERE draft = false AND hierarchy = [[obsidian|🔮 مدخل ابسیدین]] SORT number ASC -->

| EmbededCover                                              | title                                                              |
| --------------------------------------------------------- | ------------------------------------------------------------------ |
| ![[img/cover-obsidian01.svg\|cover-obsidian01.svg]]       | [[obsidian review\|بررسی و معرفی نرم افزار ابسیدین]]               |
| ![[img/cover-obsidian02.svg\|cover-obsidian02.svg]]       | [[obsidian install\|آموزش نصب و راه اندازی نرم افزار ابسیدین]]     |
| ![[img/cover-habit-tracker.svg\|cover-habit-tracker.svg]] | [[habit tracker in obsidian\|ساخت هبیت ترکر در نرم افزار ابسیدین]] |
| ![](https://ifard.ir/img/noimage.svg)                     | [[add remove properties\|حذف و اضافه دسته جمعی پراپرتی]]           |
| ![](https://ifard.ir/img/noimage.svg)                     | [[dataview plugin\|نمونه های کاربردی پلاگین دیتاویو]]              |
| ![](https://ifard.ir/img/noimage.svg)                     | [[quartz configuration\|تنظیمات من برای کوارتز]]                   |
<!-- SerializedQuery END -->
