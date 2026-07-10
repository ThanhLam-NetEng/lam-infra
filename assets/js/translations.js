const translations = {
  en: {
    title: "Phạm Thanh Lâm — Network & Security Engineer",
    nav: ["Work", "Experience", "Focus", "Certs", "About", "Contact"],
    mobile: ["Featured Work", "Experience", "Technical Focus", "Certifications", "About", "Contact", "Download CV →"],
    cv: "Download CV",
    cvFile: "cv-en.pdf",
    downloadPdf: `Download PDF <i class="fa-solid fa-arrow-right"></i>`,
    eyebrow: "IT Support @ Maersk · Network/Security Aspirant",
    heroTitle: "Network & Security Engineer for practical infrastructure systems.",
    heroLead: "I design and validate <strong>HA firewall</strong>, <strong>SD-WAN</strong>, <strong>SIEM</strong>, and <strong>cloud security</strong> labs with a focus on measurable results, documentation, and operations.",
    heroCta: `View featured work <i class="fa-solid fa-arrow-right"></i>`,
    trust: [
      "UIT Networks (Awaiting Degree)",
      "Maersk IT Support Fresher",
      "HCM City · Bình Dương"
    ],
    terminal: ["show --validated-results", "HA firewall failover", "OPNsense Active-Passive cluster validated in thesis lab.", "WAF alerts analyzed", "ModSecurity + OWASP CRS validation with payload-level review.", "Network/security labs", "SD-WAN, SIEM, VPN/DNS security, AI security proxy."],
    proof: ["Firewall architecture, SSL offloading, ModSecurity, SIEM pipeline.", "Cisco dCloud/CML, vManage, C8000v, AAR policy, IPsec.", "AWS/GCP labs, WireGuard, DNS sinkhole, API security.", "Python, FastAPI, Docker, shell scripts, monitoring workflows."],
    workLabel: "Featured Work",
    workTitle: "Project summaries with direct links to technical details.",
    workDesc: "Each project links to GitHub details: diagrams, screenshots, commands, and validation notes.",
    thesisBadge: "Thesis",
    thesisPeriod: "Jan – May 2026",
    thesisTitle: "HA Firewall & AI-driven Security Monitoring",
    thesisDesc: "Graduation thesis combining OPNsense HA firewall, WAF, Wazuh SIEM, and ML-based security log analysis in a controlled lab.",
    thesisLink: `View thesis repository <i class="fa-solid fa-arrow-right"></i>`,
    sdwanBadge: "Academic",
    sdwanDesc: "3-site Hub-and-Spoke SD-WAN overlay with encrypted dual transport and least-privilege traffic steering for critical medical systems.",
    github: `View GitHub <i class="fa-solid fa-arrow-right"></i>`,
    aiBadge: "Personal",
    aiDesc: "Bilingual LLM security proxy enforcing DLP and prompt-injection controls at the API perimeter for enterprise-style AI workflows.",
    vpnDesc: "Privacy-first VPN gateway chaining WireGuard, AdGuard Home, and Unbound to reduce telemetry and avoid third-party DNS tracking.",
    moreLabel: "More Projects",
    moreTitle: "Additional labs and automation work.",
    moreDesc: "Kept shorter here so the page scans quickly. Each item links out when public proof is available.",
    makeFlowTitle: "AI Document Parser — Make.com Automation",
    makeFlowDesc: "Automated document processing workflow built on Make.com. It monitors a Google Drive folder for new files, downloads them, invokes the Anthropic Claude API to analyze and extract structured data via custom prompts, parses the JSON payload, and records the parsed information into Google Sheets in real-time.",
    makeFlowLink: `View workflow diagram <i class="fa-solid fa-arrow-right"></i>`,
    expLabel: "Experience",
    expTitle: "Practical exposure in network and security operations.",
    expDesc: "Internship and current professional work focused on IT support operations, security appliance validation, and networking.",
    experience: [
      {
        company: "Maersk",
        role: "IT Support Fresher",
        period: "Jun 2026 – Present",
        address: "Đông Hòa Ward, Dĩ An City, Bình Dương Province",
        bullets: [
          "Provide technical support for workplace IT infrastructure, endpoint hardware, and office network connectivity.",
          "Assist in staging, deploying, and troubleshooting IT systems and user devices.",
          "Coordinate local IT assets and network issues with regional support teams."
        ]
      },
      {
        company: "FSI — FSI Technology Development Joint Stock Company",
        role: "Network & Security Engineer Intern",
        period: "Mar 2026 – Jun 2026",
        address: "26/22 Street No. 3, Do Thanh Residence, Ward 4, District 3, Ho Chi Minh City",
        bullets: [
          "Deployed and validated <strong>F-DDH BOX</strong> security appliance end-to-end: lab setup, traffic simulation, alert verification, configuration guide, and customer-facing demos.",
          "Researched VPN evasion techniques including <strong>Tailscale, Cloudflare WARP, and WireGuard on AWS EC2</strong> to assess NGFW visibility limitations.",
          "Assisted Cisco network initiatives including <strong>Catalyst 9200L IOS upgrade</strong>, StackWise stacking, Peplink SD-WAN evaluation, and presales documentation.",
          "Deployed internal attendance web app on a local server with <strong>NAT port forwarding</strong>, custom domain setup, functional testing, and basic security assessment."
        ]
      }
    ],
    focusLabel: "Technical Focus",
    focusTitle: "Skill groups mapped to the roles I am targeting.",
    focusDesc: "A cleaner alternative to a long wall of skill pills: focused, readable, and aligned to network/security hiring signals.",
    focusCards: [
      {
        title: "Network Architecture",
        desc: "Routing/Switching, SD-WAN, HA, LAN/WAN/DMZ, Cisco IOS, CML, StackWise, IPv6."
      },
      {
        title: "Security Engineering",
        desc: "OPNsense, WAF, IDS/IPS, Wazuh SIEM, ModSecurity, Suricata, VPN, monitoring."
      },
      {
        title: "Cloud & Infrastructure",
        desc: "AWS, Google Cloud, Docker, Linux, Windows Server, VMware, nested virtualization."
      },
      {
        title: "Automation & Tools",
        desc: "Python, C++, FastAPI, Shell, Git, Wireshark, Mininet, Matplotlib, scikit-learn."
      }
    ],
    certLabel: "Certifications",
    certTitle: "Verified learning path.",
    certDesc: "Cisco NetAcad and Linux credentials supporting the networking/security foundation.",
    certs: [
      {
        title: "Networking Basics",
        desc: "Network types, protocols, IP addressing, and basic switching foundations."
      },
      {
        title: "Networking Devices and Initial Configuration",
        desc: "Hands-on Cisco router/switch configuration, VLANs, STP, and device hardening."
      },
      {
        title: "Linux Unhatched",
        desc: "Linux CLI fundamentals, file system navigation, permissions, and shell basics."
      },
      {
        title: "Linux Essentials",
        desc: "Linux OS concepts, open-source fundamentals, processes, users/groups, and networking basics."
      },
      {
        title: "Technical Support Fundamentals",
        desc: "Computer hardware, operating systems, troubleshooting, system administration, and network protocols."
      }
    ],
    aboutLabel: "Background",
    aboutTitle: "UIT Networks alumnus awaiting degree, building security-focused infrastructure labs.",
    aboutP: [
      "I completed all program requirements and am awaiting graduation in <strong>Computer Networks & Data Communications</strong> at the University of Information Technology (UIT – VNU-HCM). My work focuses on network security, system infrastructure, and practical automation.",
      "I have worked with production-adjacent tasks at FSI (including security appliance validation, Cisco hardware support, SD-WAN evaluation, VPN visibility research) and am currently working as an IT Support Fresher at Maersk.",
      "My near-term direction is to grow into Network/Security Engineering, then deepen into network automation and cloud networking."
    ],
    contactLabel: "Contact",
    contactTitle: "Let’s connect.",
    contactDesc: "Open to Network Engineer, Security Engineer, IT Helpdesk with networking/security focus, and infrastructure support opportunities around HCM City / Bình Dương.",
    emailMe: `<i class="fa-solid fa-envelope"></i> Email me`,
    form: ["Your name", "Your email", "Your message...", "Send message"],
    footer: "© 2026 Phạm Thanh Lâm · Built for <span>network/security engineering</span> · Ho Chi Minh City"
  },
  vi: {
    title: "Phạm Thanh Lâm — Network & Security Engineer",
    nav: ["Dự án", "Kinh nghiệm", "Trọng tâm", "Chứng chỉ", "Giới thiệu", "Liên hệ"],
    mobile: ["Dự án nổi bật", "Kinh nghiệm", "Trọng tâm kỹ thuật", "Chứng chỉ", "Giới thiệu", "Liên hệ", "Tải CV →"],
    cv: "Tải CV",
    cvFile: "cv-vi.pdf",
    downloadPdf: `Tải PDF <i class="fa-solid fa-arrow-right"></i>`,
    eyebrow: "IT Support @ Maersk · Định hướng Network/Security",
    heroTitle: "Network & Security Engineer xây dựng hạ tầng thực tế, có kiểm chứng.",
    heroLead: "Tôi thiết kế và kiểm chứng các lab <strong>HA firewall</strong>, <strong>SD-WAN</strong>, <strong>SIEM</strong> và <strong>cloud security</strong>, tập trung vào kết quả đo được, tài liệu rõ ràng và khả năng vận hành.",
    heroCta: `Xem dự án nổi bật <i class="fa-solid fa-arrow-right"></i>`,
    trust: [
      "Hoàn thành CT học UIT (Chờ nhận bằng)",
      "IT Support Fresher tại Maersk",
      "TP.HCM · Bình Dương"
    ],
    terminal: ["show --validated-results", "Failover HA firewall", "Cụm OPNsense Active-Passive được kiểm chứng trong lab khóa luận.", "WAF alerts đã phân tích", "Kiểm chứng ModSecurity + OWASP CRS ở mức payload.", "Lab network/security", "SD-WAN, SIEM, VPN/DNS security, AI security proxy."],
    proof: ["Kiến trúc firewall, SSL offloading, ModSecurity, SIEM pipeline.", "Cisco dCloud/CML, vManage, C8000v, AAR policy, IPsec.", "AWS/GCP labs, WireGuard, DNS sinkhole, API security.", "Python, FastAPI, Docker, shell scripts, monitoring workflows."],
    workLabel: "Dự án nổi bật",
    workTitle: "Tóm tắt dự án, dẫn thẳng tới chi tiết kỹ thuật.",
    workDesc: "Mỗi dự án có link GitHub chứa diagram, screenshot, command và ghi chú kiểm chứng.",
    thesisBadge: "Khóa luận",
    thesisPeriod: "01 – 05/2026",
    thesisTitle: "HA Firewall & AI-driven Security Monitoring",
    thesisDesc: "Khóa luận kết hợp OPNsense HA firewall, WAF, Wazuh SIEM và phân tích log bảo mật bằng ML trong môi trường lab có kiểm chứng.",
    thesisLink: `Xem repo khóa luận <i class="fa-solid fa-arrow-right"></i>`,
    sdwanBadge: "Học thuật",
    sdwanDesc: "Mô hình SD-WAN Hub-and-Spoke 3 site, dual transport mã hóa và điều hướng traffic theo least-privilege cho hệ thống y tế quan trọng.",
    github: `Xem GitHub <i class="fa-solid fa-arrow-right"></i>`,
    aiBadge: "Cá nhân",
    aiDesc: "Proxy bảo mật LLM song ngữ, kiểm soát DLP và prompt injection ở API perimeter cho workflow AI kiểu doanh nghiệp.",
    vpnDesc: "VPN gateway ưu tiên privacy, kết hợp WireGuard, AdGuard Home và Unbound để giảm telemetry và tránh DNS tracking bên thứ ba.",
    moreLabel: "Dự án khác",
    moreTitle: "Các lab và dự án automation bổ sung.",
    moreDesc: "Phần này được giữ ngắn để trang dễ đọc. Dự án nào public sẽ có link bằng chứng bên ngoài.",
    makeFlowTitle: "AI Document Parser — Tự động hóa với Make.com",
    makeFlowDesc: "Luồng tự động hóa xử lý tài liệu xây dựng trên Make.com. Hệ thống tự động theo dõi thư mục Google Drive, tải xuống tài liệu mới, gọi API Anthropic Claude để phân tích và trích xuất dữ liệu có cấu trúc qua prompt tùy chỉnh, phân tích dữ liệu JSON và lưu trữ vào Google Sheets theo thời gian thực.",
    makeFlowLink: `Xem sơ đồ workflow <i class="fa-solid fa-arrow-right"></i>`,
    expLabel: "Kinh nghiệm",
    expTitle: "Kinh nghiệm thực tế trong vận hành mạng và bảo mật.",
    expDesc: "Hoạt động thực tập và công việc hiện tại tập trung vào vận hành hỗ trợ CNTT, kiểm chứng thiết bị bảo mật và quản lý mạng.",
    experience: [
      {
        company: "Maersk",
        role: "IT Support Fresher",
        period: "06/2026 – Hiện tại",
        address: "Phường Đông Hòa, Thành phố Dĩ An, Tỉnh Bình Dương",
        bullets: [
          "Hỗ trợ kỹ thuật cho hạ tầng CNTT nơi làm việc, thiết bị đầu cuối và kết nối mạng văn phòng tại chỗ cho người dùng.",
          "Hỗ trợ chuẩn bị thiết bị (staging), triển khai cấu hình và xử lý sự cố hệ thống CNTT và thiết bị người dùng.",
          "Phối hợp quản lý tài sản CNTT local và xử lý các sự cố mạng với các đội ngũ hỗ trợ khu vực (regional support)."
        ]
      },
      {
        company: "FSI — Công ty Cổ phần Công nghệ FSI",
        role: "Network & Security Engineer Intern",
        period: "03/2026 – 06/2026",
        address: "26/22 Đường số 03, Cư Xá Đô Thành, Phường Bàn Cờ, TP. Hồ Chí Minh",
        bullets: [
          "Triển khai và kiểm chứng thiết bị bảo mật <strong>F-DDH BOX</strong> end-to-end: dựng lab, giả lập traffic, xác thực cảnh báo, viết tài liệu cấu hình và demo cho khách hàng.",
          "Nghiên cứu kỹ thuật ẩn mình của VPN gồm <strong>Tailscale, Cloudflare WARP và WireGuard trên AWS EC2</strong> để đánh giá giới hạn nhận diện của NGFW.",
          "Hỗ trợ các hoạt động mạng Cisco bao gồm <strong>nâng cấp IOS Catalyst 9200L</strong>, StackWise stacking, đánh giá Peplink SD-WAN và chuẩn bị tài liệu presales.",
          "Triển khai web app điểm danh nội bộ trên máy chủ local sử dụng <strong>NAT port forwarding</strong>, cấu hình tên miền riêng, kiểm thử chức năng và đánh giá bảo mật cơ bản."
        ]
      }
    ],
    focusLabel: "Trọng tâm kỹ thuật",
    focusTitle: "Nhóm kỹ năng bám sát vị trí tôi đang hướng tới.",
    focusDesc: "Trình bày gọn hơn một danh sách skill dài: rõ trọng tâm, dễ đọc và đúng tín hiệu tuyển dụng Network/Security.",
    focusCards: [
      {
        title: "Kiến trúc Mạng",
        desc: "Định tuyến/Chuyển mạch, SD-WAN, HA, LAN/WAN/DMZ, Cisco IOS, CML, StackWise, IPv6."
      },
      {
        title: "Kỹ thuật Bảo mật",
        desc: "OPNsense, WAF, IDS/IPS, Wazuh SIEM, ModSecurity, Suricata, VPN, giám sát an ninh."
      },
      {
        title: "Điện toán Đám mây & Hạ tầng",
        desc: "AWS, Google Cloud, Docker, Linux, Windows Server, VMware, ảo hóa lồng (nested)."
      },
      {
        title: "Tự động hóa & Công cụ",
        desc: "Python, C++, FastAPI, Shell, Git, Wireshark, Mininet, Matplotlib, scikit-learn."
      }
    ],
    certLabel: "Chứng chỉ",
    certTitle: "Lộ trình học tập có xác thực.",
    certDesc: "Chứng chỉ Cisco NetAcad và Linux hỗ trợ nền tảng mạng/bảo mật.",
    certs: [
      {
        title: "Networking Basics",
        desc: "Các loại mạng, giao thức, địa chỉ IP và nền tảng chuyển mạch (switching) cơ bản."
      },
      {
        title: "Networking Devices and Initial Configuration",
        desc: "Cấu hình router/switch Cisco thực tế, VLANs, STP và bảo mật thiết bị (hardening)."
      },
      {
        title: "Linux Unhatched",
        desc: "Các lệnh Linux CLI cơ bản, điều hướng hệ thống tệp, phân quyền và shell cơ bản."
      },
      {
        title: "Linux Essentials",
        desc: "Khái niệm HĐH Linux, mã nguồn mở, tiến trình, user/group và mạng cơ bản."
      },
      {
        title: "Technical Support Fundamentals",
        desc: "Phần cứng máy tính, hệ điều hành, xử lý sự cố, quản trị hệ thống và giao thức mạng."
      }
    ],
    aboutLabel: "Giới thiệu",
    aboutTitle: "Hoàn thành chương trình học UIT, tập trung xây dựng lab hạ tầng bảo mật.",
    aboutP: [
      "Tôi đã hoàn thành chương trình học và đang chờ nhận bằng tốt nghiệp ngành <strong>Mạng máy tính và Truyền thông dữ liệu</strong> tại Trường Đại học Công nghệ Thông tin (UIT – ĐHQG-HCM). Hướng làm việc chính là network security, system infrastructure và automation thực tế.",
      "Tại FSI, tôi đã tham gia các việc gần với production như kiểm chứng thiết bị bảo mật, hỗ trợ phần cứng Cisco, đánh giá SD-WAN, nghiên cứu VPN visibility. Hiện tại tôi đang làm việc với vai trò IT Support Fresher tại Maersk.",
      "Định hướng gần là phát triển theo Network/Security Engineering, sau đó đào sâu network automation và cloud networking."
    ],
    contactLabel: "Liên hệ",
    contactTitle: "Kết nối với tôi.",
    contactDesc: "Sẵn sàng cho các cơ hội Network Engineer, Security Engineer, IT Helpdesk thiên về mạng/bảo mật và hỗ trợ hạ tầng quanh TP.HCM / Bình Dương.",
    emailMe: `<i class="fa-solid fa-envelope"></i> Gửi email`,
    form: ["Tên của bạn", "Email của bạn", "Nội dung...", "Gửi tin nhắn"],
    footer: "© 2026 Phạm Thanh Lâm · Portfolio cho <span>network/security engineering</span> · TP. Hồ Chí Minh"
  }
};
