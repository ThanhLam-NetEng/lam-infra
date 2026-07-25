const translations = {
  en: {
    title: "Phạm Thanh Lâm — IT Support · Mạng máy tính & Truyền thông dữ liệu",
    nav: ["Work", "Experience", "Focus", "Certs", "About", "Contact"],
    mobile: ["Featured Work", "Experience", "Technical Focus", "Certifications", "About", "Contact", "Download CV →"],
    cv: "Download CV",
    cvFile: "cv-en.pdf",
    downloadPdf: `Download PDF <i class="fa-solid fa-arrow-right"></i>`,
    eyebrow: "IT Support · Computer Networks & Data Communications",
    heroTitle: "IT Support Specialist with strong networking & infrastructure background.",
    heroLead: "IT Support Specialist with a solid networking foundation, experienced in receiving & resolving technical support tickets (hardware, software, network), deploying security devices, and configuring internal network infrastructure.",
    heroCta: `View featured work <i class="fa-solid fa-arrow-right"></i>`,
    trust: [
      "UIT GPA 3.1/4.0 (2022–2026)",
      "Maersk & FSI IT Support",
      "Tăng Nhơn Phú, TP. HCM"
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
    expTitle: "Practical experience in IT Support & Network operations.",
    expDesc: "Hands-on IT Support experience in enterprise environments, warehouse logistics, and network security appliance deployment.",
    experience: [
      {
        company: "Maersk (L&A Provider)",
        role: "IT Support",
        period: "Jun 2026 – Aug 2026",
        address: "No. 9, DT 743 Street, Binh Thang Ward, Di An City, Binh Duong Province.",
        bullets: [
          "Received and handled technical tickets via Outlook and MS Teams adhering strictly to SLA workflows.",
          "Supported operations and monitoring of RPA system (Power Automate); provided remote employee support via AnyDesk.",
          "Deployed and configured software for employees; developed operational user guides and SOPs.",
          "Administered user accounts and supported operations on the Körber One WMS system.",
          "Queried and processed data via SQLDBX for ticket investigation and issue resolution.",
          "Proficient in logistics processes, EDI data integration flows, and warehouse operating SOPs.",
          "Conducted direct on-site technical support at other warehouses and branch locations upon request."
        ]
      },
      {
        company: "Công ty CP Đầu Tư Thương Mại và Phát Triển Công Nghệ FSI",
        role: "IT Support Intern",
        period: "Feb 2026 – Jun 2026",
        address: "No. 26/22 Street No. 3, Do Thanh Residence, Ward 4, District 3, Ho Chi Minh City",
        bullets: [
          "Deployed and validated network security appliances (F-DDH BOX) in lab/production environments.",
          "Participated in network infrastructure deployment projects and supported system troubleshooting.",
          "Monitored and managed IT assets (hardware and software).",
          "Configured internal network systems (modem, Wi-Fi, router, switch).",
          "Supported end users directly and remotely via UltraViewer and Remote Desktop."
        ]
      }
    ],
    focusLabel: "Technical Skills",
    focusTitle: "Skill groups aligned to my IT Support & Networking profile.",
    focusDesc: "Categorized skill set covering Hardware & OS, Networking, Technical Support Tools, and Development.",
    focusCards: [
      {
        title: "Hardware & OS",
        desc: "Windows, macOS, Linux, PC/Laptop, Printer/Scanner, Windows Server."
      },
      {
        title: "Networking",
        desc: "Switch/Router/Modem, TCP/IP, DHCP, DNS, IPv4/IPv6, ACL/NAT, HTTP/HTTPS, VPN."
      },
      {
        title: "Technical Support & Tools",
        desc: "Ticketing system, MS Office 365, Google Workspace, UltraViewer, AnyDesk, Remote Desktop."
      },
      {
        title: "Dev & Tools",
        desc: "Python, C++, SQL, Git, Shell Script, Postman/cURL, VMware, VirtualBox."
      }
    ],
    certLabel: "Certifications",
    certTitle: "Verified credentials.",
    certDesc: "Cisco NetAcad and Linux credentials supporting the networking and IT foundation.",
    certs: [
      {
        title: "Networking Devices & Initial Configuration",
        desc: "Hands-on Cisco router/switch configuration, VLANs, STP, and device hardening."
      },
      {
        title: "Linux Essentials",
        desc: "Linux OS concepts, open-source fundamentals, processes, users/groups, and networking basics."
      },
      {
        title: "Networking Basics",
        desc: "Network types, protocols, IP addressing, and basic switching foundations."
      },
      {
        title: "Linux Unhatched",
        desc: "Linux CLI fundamentals, file system navigation, permissions, and shell basics."
      },
      {
        title: "Technical Support Fundamentals",
        desc: "Computer hardware, operating systems, troubleshooting, system administration, and network protocols."
      }
    ],
    aboutLabel: "Background",
    aboutTitle: "UIT Graduate in Computer Networks & Data Communications (GPA 3.1 / 4.0).",
    aboutP: [
      "I graduated from the <strong>University of Information Technology (UIT – VNU-HCM)</strong> majoring in <strong>Computer Networks & Data Communications</strong> (GPA 3.1 / 4.0, 2022–2026). My technical background encompasses IT support, networking infrastructure, and security lab automation.",
      "I have professional IT Support experience at <strong>Maersk (L&A Provider)</strong> and <strong>FSI</strong>, specializing in SLA ticket handling, WMS/RPA support, endpoint deployment, and internal network configuration.",
      "My goal is to leverage my IT support and networking capabilities to deliver reliable infrastructure operations and user support."
    ],
    contactLabel: "Contact",
    contactTitle: "Let’s connect.",
    contactDesc: "Open to IT Support, Network Engineer, System Administrator, and Helpdesk opportunities around Ho Chi Minh City & Binh Duong.",
    emailMe: `<i class="fa-solid fa-envelope"></i> Email me`,
    form: ["Your name", "Your email", "Your message...", "Send message"],
    footer: "© 2026 Phạm Thanh Lâm · Built for <span>IT Support & Network Engineering</span> · Ho Chi Minh City"
  },
  vi: {
    title: "Phạm Thanh Lâm — IT Support · Mạng máy tính & Truyền thông dữ liệu",
    nav: ["Dự án", "Kinh nghiệm", "Trọng tâm", "Chứng chỉ", "Giới thiệu", "Liên hệ"],
    mobile: ["Dự án nổi bật", "Kinh nghiệm", "Trọng tâm kỹ thuật", "Chứng chỉ", "Giới thiệu", "Liên hệ", "Tải CV →"],
    cv: "Tải CV",
    cvFile: "cv-vi.pdf",
    downloadPdf: `Tải PDF <i class="fa-solid fa-arrow-right"></i>`,
    eyebrow: "IT Support · Mạng máy tính & Truyền thông dữ liệu",
    heroTitle: "IT Support với nền tảng Mạng máy tính & Hạ tầng kỹ thuật.",
    heroLead: "IT Support với nền tảng networking, kinh nghiệm tiếp nhận và xử lý ticket hỗ trợ kỹ thuật (phần cứng, phần mềm, mạng), triển khai thiết bị và hệ thống bảo mật mạng, cấu hình hệ thống mạng nội bộ; có khả năng chẩn đoán, xử lý đa yêu cầu và làm việc trực tiếp với người dùng/đối tác.",
    heroCta: `Xem dự án nổi bật <i class="fa-solid fa-arrow-right"></i>`,
    trust: [
      "UIT GPA 3.1/4.0 (2022–2026)",
      "Kinh nghiệm Maersk & FSI",
      "Tăng Nhơn Phú, TP. HCM"
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
    expTitle: "Kinh nghiệm thực tế trong vận hành IT Support & Mạng.",
    expDesc: "Kinh nghiệm IT Support thực tế tại môi trường doanh nghiệp logistics, hệ thống kho bãi và triển khai thiết bị bảo mật mạng.",
    experience: [
      {
        company: "Maersk (L&A Provider)",
        role: "IT Support",
        period: "6/2026 – 8/2026",
        address: "Số 9, Đường ĐT 743, Phường Bình Thắng, Thành phố Dĩ An, Tỉnh Bình Dương.",
        bullets: [
          "Tiếp nhận, xử lý ticket qua Outlook và MS Teams theo quy trình SLA",
          "Hỗ trợ vận hành và theo dõi hệ thống RPA (Power Automate), remote support nhân viên qua AnyDesk",
          "Triển khai, cấu hình phần mềm cho nhân viên; xây dựng tài liệu hướng dẫn nghiệp vụ",
          "Quản trị tài khoản người dùng và hỗ trợ vận hành trên hệ thống WMS Körber One",
          "Truy vấn, xử lý dữ liệu qua SQLDBX phục vụ điều tra và xử lý ticket",
          "Am hiểu quy trình logistics, luồng tích hợp dữ liệu EDI và SOP vận hành kho",
          "Công tác hỗ trợ kỹ thuật trực tiếp tại các kho/chi nhánh khác khi có yêu cầu"
        ]
      },
      {
        company: "Công ty CP Đầu Tư Thương Mại và Phát Triển Công Nghệ FSI",
        role: "IT Support Intern",
        period: "02/2026 – 06/2026",
        address: "Số 26/22 Đường số 3, Cư Xá Đô Thành, Phường Bàn Cờ, Quận 3, TP. Hồ Chí Minh",
        bullets: [
          "Triển khai, kiểm định thiết bị bảo mật mạng (F-DDH BOX) trên môi trường lab/production",
          "Tham gia dự án triển khai cơ sở hạ tầng mạng, hỗ trợ khắc phục sự cố hệ thống",
          "Theo dõi, quản lý tài sản CNTT (phần cứng và phần mềm)",
          "Cấu hình hệ thống mạng nội bộ (modem, wifi, router, switch)",
          "Hỗ trợ người dùng trực tiếp, từ xa qua UltraViewer, Remote Desktop"
        ]
      }
    ],
    focusLabel: "Trọng tâm kỹ thuật",
    focusTitle: "Kỹ năng được hệ thống hóa theo các nhóm trong CV.",
    focusDesc: "Danh mục kỹ năng gồm Phần cứng & HĐH, Mạng máy tính, Hỗ trợ kỹ thuật và Công cụ Lập trình.",
    focusCards: [
      {
        title: "Hardware & OS",
        desc: "Windows, macOS, Linux, PC/Laptop, Máy in/Scanner, Windows Server."
      },
      {
        title: "Networking",
        desc: "Switch/Router/Modem, TCP/IP, DHCP, DNS, IPv4/IPv6, ACL/NAT, HTTP/HTTPS, VPN."
      },
      {
        title: "Technical Support & Tools",
        desc: "Hệ thống Ticketing, MS Office 365, Google Workspace, UltraViewer, AnyDesk, Remote Desktop."
      },
      {
        title: "Dev & Tools",
        desc: "Python, C++, SQL, Git, Shell Script, Postman/cURL, VMware, VirtualBox."
      }
    ],
    certLabel: "Chứng chỉ",
    certTitle: "Lộ trình học tập có xác thực.",
    certDesc: "Chứng chỉ Cisco NetAcad và Linux hỗ trợ nền tảng mạng/bảo mật.",
    certs: [
      {
        title: "Networking Devices & Initial Configuration",
        desc: "Cấu hình router/switch Cisco thực tế, VLANs, STP và bảo mật thiết bị (hardening)."
      },
      {
        title: "Linux Essentials",
        desc: "Khái niệm HĐH Linux, mã nguồn mở, tiến trình, user/group và mạng cơ bản."
      },
      {
        title: "Networking Basics",
        desc: "Các loại mạng, giao thức, địa chỉ IP và nền tảng chuyển mạch (switching) cơ bản."
      },
      {
        title: "Linux Unhatched",
        desc: "Các lệnh Linux CLI cơ bản, điều hướng hệ thống tệp, phân quyền và shell cơ bản."
      },
      {
        title: "Technical Support Fundamentals",
        desc: "Phần cứng máy tính, hệ điều hành, xử lý sự cố, quản trị hệ thống và giao thức mạng."
      }
    ],
    aboutLabel: "Giới thiệu",
    aboutTitle: "Cử nhân Mạng máy tính & Truyền thông dữ liệu UIT (GPA 3.1 / 4.0).",
    aboutP: [
      "Tôi tốt nghiệp ngành <strong>Mạng máy tính và Truyền thông dữ liệu</strong> tại <strong>Trường Đại học Công nghệ Thông tin (UIT – ĐHQG-HCM)</strong> với <strong>GPA 3.1 / 4.0 (2022 – 2026)</strong>. Hướng làm việc chính là IT Support, hạ tầng mạng và tự động hóa.",
      "Tôi đã có kinh nghiệm làm việc thực tế tại <strong>Maersk (L&A Provider)</strong> và <strong>FSI</strong> với vai trò <strong>IT Support</strong>, chuyên xử lý ticket SLA, hỗ trợ vận hành WMS Körber One / RPA, triển khai phần mềm và cấu hình mạng nội bộ.",
      "Mục tiêu của tôi là phát huy nền tảng IT Support và Networking để vận hành hệ thống thông suốt, hỗ trợ kỹ thuật hiệu quả cho người dùng và doanh nghiệp."
    ],
    contactLabel: "Liên hệ",
    contactTitle: "Kết nối với tôi.",
    contactDesc: "Sẵn sàng cho các cơ hội IT Support, Network Engineer, System Administrator và Helpdesk quanh TP.HCM / Bình Dương.",
    emailMe: `<i class="fa-solid fa-envelope"></i> Gửi email`,
    form: ["Tên của bạn", "Email của bạn", "Nội dung...", "Gửi tin nhắn"],
    footer: "© 2026 Phạm Thanh Lâm · Portfolio cho <span>IT Support & Network Engineering</span> · TP. Hồ Chí Minh"
  }
};
