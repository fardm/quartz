---
title: حذف و اضافه دسته جمعی پراپرتی
aliases:
  - حذف و اضافه دسته جمعی پراپرتی
date: 2024-07-04
draft: false
tags: 
status: 🌱نهال
---


متاسفانه برای حذف  و اضافه کردن پراپرتی به مجموعه ای از فایل ها خود ابسیدین امکاناتی ندارد. (شاید من پیدا نکردم). از chatGPT کمک گرفتم. یک اسکریپت پایتون نوشت که اجازه میدهد به شکل دست جمعی پراپرتی ها را حذف و اضافه کنیم. نتیجه این مکالمه را اینجا میگذارم تا اگر شما هم نیاز داشتید از آن استفاده کنید. اگر هم راه حل ساده تری سراغ دارید میتوانید در بخش کامنت ها مطرح کنید.
<br/><br/>
## پیش نیاز
اول لازم است پایتون را نصب کنید:

به وب‌سایت پایتون بروید و نسخه مناسب برای سیستم‌عامل خود را دانلود و نصب کنید.
در حین نصب، مطمئن شوید گزینه "Add Python to PATH" را فعال کرده‌اید.

حالا یک پوشه جدید روی سیستم خود ایجاد کنید تا اسکریپت پایتون و فایل‌های ابسیدین خود را در آن قرار دهید. (مثلا من یک پوشه به اسم root داخل درایو c ایجاد کردم)

خب حالا می توانیم اقدامات بعدی را انجام بدهیم.

<br/><br/>
## اضافه کردن پراپرتی
برای اضافه کردن یک پراپرتی خاص مراحل زیر را دنبال کنید:

۱. در داخل پوشه کاری خود، یک فایل جدید با نام `add_property.py` ایجاد کنید.

۲. فایل `add_property.py` را با یک ویرایشگر متن (مانند Notepad، Notepad++، VS Code و یا هر ویرایشگر دیگری که ترجیح می‌دهید) باز کنید.

۳. کد زیر را در فایل `add_property.py` کپی کنید و ذخیره کنید:

```
import os

# مسیر فولدر ابسیدین (پوشه‌ای که فایل‌های ابسیدین شما در آن قرار دارد)
obsidian_folder_path = 'مسیر_فولدر_ابسیدین_شما'

# پراپرتی که می‌خواهید اضافه کنید
property_to_add = 'your-property'
values_to_add = [
    'your-value1',
    'your-value2'
]

# تابع برای اضافه کردن پراپرتی به صورت لیستی
def add_property(content, property_to_add, values):
    lines = content.split('\n')
    in_frontmatter = False
    property_added = False
    new_lines = []

    for line in lines:
        if line.strip() == '---' and not in_frontmatter:
            in_frontmatter = True
            new_lines.append(line)
        elif line.strip() == '---' and in_frontmatter:
            in_frontmatter = False
            if not property_added:
                new_lines.append(f"{property_to_add}")
                for value in values:
                    new_lines.append(f"  - {value}")
                property_added = True
            new_lines.append(line)
        elif in_frontmatter and line.strip().startswith(property_to_add.split(':')[0] + ':'):
            continue
        else:
            new_lines.append(line)
    
    if not property_added:
        new_lines.append(f"{property_to_add}")
        for value in values:
            new_lines.append(f"  - {value}")

    return '\n'.join(new_lines)

# پیمایش تمامی فایل‌های فولدر
for root, dirs, files in os.walk(obsidian_folder_path):
    for filename in files:
        if filename.endswith('.md'):
            filepath = os.path.join(root, filename)
            with open(filepath, 'r+', encoding='utf-8') as file:
                content = file.read()
                new_content = add_property(content, property_to_add, values_to_add)
                if new_content != content:
                    file.seek(0)
                    file.write(new_content)
                    file.truncate()
                    print(f'{property_to_add} property added to {filename}')

```

۴. مسیر فولدر ابسیدین خود را پیدا کنید و جایگزین `مسیر_فولدر_ابسیدین_شما` در اسکریپت کنید. مثلاً: `C:/Users/YourUsername/Documents/ObsidianVault`. توجه کنید که در مسیر فولدر از بک اسلش`(\)` استفاده نکنید. یا از اسلش عادی`(/)` استفاده کنید یا دوتا بک اسلش`(\\)`.


۵. از بخش property_to_add پراپرتی مورد نظر خود را جایگزین `your-property` کنید. در خط values_to_add مقادیری که می‌خواهید به پراپرتی اضافه کنید را جایگزین `your-value` کنید.

۶. Command Prompt (ویندوز) یا Terminal (مک/لینوکس) را باز کنید. در ویندوز: Win + R را بزنید، سپس cmd را تایپ کنید و Enter را بزنید. در مک/لینوکس: Terminal را از Applications یا Spotlight باز کنید.

۷. با استفاده از دستور `cd` به پوشه‌ای که اسکریپت پایتون در آن قرار دارد بروید. مثلاً:
```
cd c/root
```

۸. دستور زیر را وارد کنید تا اسکریپت اجرا شود:
```
python add_property.py
```

<br/>

> [!warning] گزارش یک مشکل
> اگر از قبل یک پراپرتی در فایل های شما وجود داشته باشد با این اسکریپت نمی توانید پراپرتی مد نظر را به آن اضافه کنید. مثلا برای افزودن پراپرتی tags این روش پراپرتی مد نظر را فقط به فایل هایی اضافه می کند که فاقدپراپرتی tags باشند. پس اگر فایلی از قبل پراپرتی tags داشته باشد - هرچند فیلد آن خالی باشد - این اسکریپت چیزی به آن اضافه نمی کند.
> چند مرتبه از CahtGPT خواستم که اسکریپت را طوری بنویسد که بتواند فایل را شناسایی کند و بر اساس وجود یا عدم پراپرتی اسکریپت را اجرا کند اما کدی که تحویل میداد کار نمی کرد.
> نهایتا به این نتیجه رسیدم که اول آن پراپرتی را از همه فایل ها حذف کنم سپس پراپرتی را مجددا اضافه کنم.
> پس اگر قصد دارید از پراپرتی استفاده کنید که قبلا در فایل های شما موجود است، ابتدا لازم است با اسکریپت دوم همه آن ها را حذف کنید سپس با این اسکریپت آن را مجددا به همه فایلها اضافه کنید.


<br/><br/>

## حذف کردن پراپرتی
برای حذف کردن یک پراپرتی خاص مراحل زیر را دنبال کنید:

۱. در داخل پوشه کاری خود، یک فایل جدید با نام `remove_property.py` ایجاد کنید.

۲. آن را با یک ویرایشگر متن باز کنید.

۳. کد زیر را در فایل `remove_property.py` کپی کنید و ذخیره کنید:

```
import os

# مسیر فولدر ابسیدین (پوشه‌ای که فایل‌های ابسیدین شما در آن قرار دارد)
obsidian_folder_path = 'مسیر_فولدر_ابسیدین_شما'

# پراپرتی که می‌خواهید حذف کنید
property_to_remove = 'your-property:'

# تابع برای حذف پراپرتی مشخص شده
def remove_property(content, property_to_remove):
    lines = content.split('\n')
    in_frontmatter = False
    new_lines = []
    skip_lines = False

    for line in lines:
        if line.strip() == '---' and not in_frontmatter:
            in_frontmatter = True
            new_lines.append(line)
        elif line.strip() == '---' and in_frontmatter:
            in_frontmatter = False
            new_lines.append(line)
        elif in_frontmatter and line.strip().startswith(property_to_remove):
            skip_lines = True  # Start skipping lines
            continue
        elif skip_lines:
            if not line.startswith(' '):  # Check if it's a continuation line (e.g., for lists)
                skip_lines = False
                new_lines.append(line)
        else:
            new_lines.append(line)

    return '\n'.join(new_lines)

# پیمایش تمامی فایل‌های فولدر
for root, dirs, files in os.walk(obsidian_folder_path):
    for filename in files:
        if filename.endswith('.md'):
            filepath = os.path.join(root, filename)
            with open(filepath, 'r+', encoding='utf-8') as file:
                content = file.read()
                new_content = remove_property(content, property_to_remove)
                if new_content != content:
                    file.seek(0)
                    file.write(new_content)
                    file.truncate()
                    print(f'{property_to_remove} property removed from {filename}')

```


۴. مسیر فولدر ابسیدین خود را جایگزین `مسیر_فولدر_ابسیدین_شما` در اسکریپت کنید.

۵. پراپرتی مورد نظر خود را در جایگزین `your-property:` کنید. مثلاً: `tags:`

۶. Command Prompt یا Terminal را باز کنید.

۷. با استفاده از دستور `cd` به پوشه‌ای که اسکریپت پایتون در آن قرار دارد بروید. مثلاً:
```
cd c/root
```

۸. دستور زیر را وارد کنید تا اسکریپت اجرا شود:
```
python remove_property.py
```




<br/><br/><br/><br/>

> [!links] مطالب مرتبط
> نوشته‌های مرتبط با این موضوع را می‌توانید در [[obsidian|🔮 مدخل ابسیدین]] مشاهده کنید.
> 
> <br/>
