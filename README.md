# Phạm Thanh Lâm Portfolio

Personal portfolio website for a Network & Security Engineer, focused on HA firewall, SIEM, SD-WAN, cloud security, VPN/DNS security, and infrastructure automation projects such as JD Daily Bot.

## Overview

This is a static, responsive portfolio built with HTML, CSS, and vanilla JavaScript. It presents selected technical projects, internship experience, certifications, contact information, and bilingual CV downloads.

## Features

- Responsive single-page portfolio layout
- English/Vietnamese language switcher
- Language-specific CV downloads: `cv-en.pdf` and `cv-vi.pdf`
- Featured network/security project summaries with GitHub links
- Additional automation project cards, including JD Daily Bot for AI-assisted job matching and Telegram delivery
- Certification badges and contact form integration
- No build step required

## Project Structure

```text
.
├── index.html
├── cv-en.pdf
├── cv-vi.pdf
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── translations.js
│   │   └── app.js
│   └── images/
│       ├── favicon.svg
│       ├── og-image.png
│       └── *.png certification badges
└── README.md
```

## Run Locally

Open `index.html` directly in a browser, or serve the folder with any static web server.

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Contact

- GitHub: [ThanhLam-NetEng](https://github.com/ThanhLam-NetEng)
- LinkedIn: [thanhlam-uit](https://www.linkedin.com/in/thanhlam-uit)
