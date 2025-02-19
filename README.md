[contributors-shield]: https://img.shields.io/github/contributors/hassan7303/Link-extraction-chrome-extension.svg?style=for-the-badge
[contributors-url]: https://github.com/hassan7303/Link-extraction-chrome-extension/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/hassan7303/Link-extraction-chrome-extension.svg?style=for-the-badge&label=Fork
[forks-url]: https://github.com/hassan7303/Link-extraction-chrome-extension/network/members
[stars-shield]: https://img.shields.io/github/stars/hassan7303/Link-extraction-chrome-extension.svg?style=for-the-badge
[stars-url]: https://github.com/hassan7303/Link-extraction-chrome-extension/stargazers
[license-shield]: https://img.shields.io/github/license/hassan7303/Link-extraction-chrome-extension.svg?style=for-the-badge
[license-url]: https://github.com/hassan7303/Link-extraction-chrome-extension/blob/master/LICENSE.md
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-blue.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/hassan-ali-askari-280bb530a/
[telegram-shield]: https://img.shields.io/badge/-Telegram-blue.svg?style=for-the-badge&logo=telegram&colorB=555
[telegram-url]: https://t.me/hassan7303
[instagram-shield]: https://img.shields.io/badge/-Instagram-red.svg?style=for-the-badge&logo=instagram&colorB=555
[instagram-url]: https://www.instagram.com/hasan_ali_askari
[github-shield]: https://img.shields.io/badge/-GitHub-black.svg?style=for-the-badge&logo=github&colorB=555
[github-url]: https://github.com/hassan7303
[email-shield]: https://img.shields.io/badge/-Email-orange.svg?style=for-the-badge&logo=gmail&colorB=555
[email-url]: mailto:hassanali7303@gmail.com
[website-shield]: https://img.shields.io/badge/-Website-blue.svg?style=for-the-badge&logo=laravel&colorB=555
[website-url]: https://hsnali.ir


[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Telegram][telegram-shield]][telegram-url]
[![Instagram][instagram-shield]][instagram-url]
[![GitHub][github-shield]][github-url]
[![Email][email-shield]][email-url]
[![Website][website-shield]][website-url]

# افزونه استخراج لینک‌ها

این افزونه کروم برای استخراج لینک‌های موجود در صفحه فعال و ذخیره آن‌ها در Local Storage یا Chrome Storage استفاده می‌شود. لینک‌ها پس از بسته شدن پاپاپ یا مرورگر ذخیره می‌شوند و در دفعات بعدی می‌توان آن‌ها را مشاهده کرد.

## ویژگی‌ها

- استخراج تمام لینک‌های موجود در صفحه فعال
- نمایش لینک‌ها در پاپاپ
- ذخیره لینک‌ها در **Local Storage** یا **Chrome Storage** برای استفاده مجدد
- قابلیت بازیابی لینک‌ها حتی پس از بسته شدن پاپاپ یا مرورگر

## نحوه استفاده

1. افزونه را نصب و فعال کنید.
2. بر روی آیکون افزونه در نوار ابزار کروم کلیک کنید.
3. لینک‌های موجود در صفحه به طور خودکار استخراج می‌شوند و در پاپاپ نمایش داده می‌شوند.
4. لینک‌ها در Local Storage یا Chrome Storage ذخیره می‌شوند و بعد از بسته شدن پاپاپ یا مرورگر نیز قابل دسترسی هستند.

## نصب

برای نصب افزونه به صورت محلی:

1. به صفحه `chrome://extensions/` بروید.
2. حالت **Developer Mode** را فعال کنید.
3. روی **Load unpacked** کلیک کنید.
4. پوشه افزونه را انتخاب کنید.
5. افزونه به صورت محلی بارگذاری می‌شود.

## ساختار فایل‌ها

### `manifest.json`

فایل تنظیمات افزونه که مشخصات و دسترسی‌های آن را تعریف می‌کند.

```json
{
  "manifest_version": 3,
  "name": "استخراج لینک‌ها",
  "version": "1.0",
  "description": "این افزونه لینک‌های صفحه را لیست و کپی می‌کند.",
  "permissions": ["activeTab", "scripting", "clipboardWrite"],
  "host_permissions": ["<all_urls>"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": "icon.png"
  },
  "background": {
    "service_worker": "background.js"
  },
  "icons": {
    "16": "icon.png",
    "48": "icon.png",
    "128": "icon.png"
  }
}
```