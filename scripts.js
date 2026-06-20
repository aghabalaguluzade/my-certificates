(function(){
    emailjs.init("wOxwg3Lda-WDeHl4y");  // EmailJS Public Key
})();

// Certificates
const certificates = [
    {
        title: "Web Red Team Analyst (Web-RTA)",
        org: "CyberWarFare Labs",
        date: "January 2026",
        img: "./images/Web Red Team Analyst (Web-RTA) Certificate_page-0001.jpg",
        link: "https://labs.cyberwarfare.live/credential/achievement/695d4976350a0624a43933a9"
    },
    {
        title: "Certified Red Team Operations Management (CRTOM)",
        org: "Red Team Leaders",
        date: "December 2025",
        img: "https://images.coursestack.com/9e50fb96-ee35-4c36-a8cb-2ff6ff14824f/3096ec00-14cb-4fc9-b183-61b369b3b7f9.jpg",
        link: "https://courses.redteamleaders.com/exam-completion/f82a95d7005a080c"
    },
    {
        title: "Ethical Hacker",
        org: "Cisco Networking Academy",
        date: "December 2025",
        img: "./images/Ethical_Hacker_certificate_aghabalaguluzade-gmail-com_ca5c9bf9-e78d-4aa2-abcd-9474a2eccbcc_page-0001.jpg",
        link: "https://www.credly.com/badges/8d22ec80-fa5e-4958-b41b-909d65f94631"
    },
    {
        title: "Certified Associate Penetration Tester (CAPT)",
        org: "Hackviser",
        date: "December 2025",
        img: "./images/1764586275126.jpg",
        link: "https://hackviser.com/verify?id=HV-CAPT-C54RP13O"
    },
    {
        title: "Jr Penetration Tester",
        org: "TryHackMe",
        date: "November 2025",
        img: "./images/1762772818532.jpg",
        link: "https://tryhackme.com/certificate/THM-VUNPMYP5W0"
    },
    {
        title: "CompTIA Pentest+",
        org: "TryHackMe",
        date: "November 2025",
        img: "./images/1761994430174.jpg",
        link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-AJO4DIG0EG.pdf"
    },
    {
        title: "Offensive Pentesting",
        org: "TryHackMe",
        date: "November 2025",
        img: "./images/1761994623063.jpg",
        link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-CCPQEWPTVT.pdf"
    },
    {
        title: "Red Teaming",
        org: "TryHackMe",
        date: "November 2025",
        img: "./images/1762426280841.jpg",
        link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-6MYZH8MLOZ.pdf"
    },
    {
        title: "Web Application Pentesting",
        org: "TryHackMe",
        date: "October 2025",
        img: "./images/1761647939258.jpg",
        link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-XUSY8NMZXV.pdf"
    },
    {
        title: "Web Fundamentals",
        org: "TryHackMe",
        date: "October 2025",
        img: "./images/Web Fundamentals.jpg",
        link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-TKBJVOPW7N.pdf"
    },
    {
        title: "Cyber Security 101",
        org: "TryHackMe",
        date: "October 2025",
        img: "./images/Cyber Security 101.jpg",
        link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-YMJJOPDSHQ.pdf"
    },
    {
        title: "Pre Security",
        org: "TryHackMe",
        date: "October 2025",
        img: "./images/Pre Security.jpg",
        link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-ARD0Z9Z0KO.pdf"
    },
    {
        title: "Code Sentinel Internship Program",
        org: "Code Sentinel",
        date: "July 2025",
        img: "./images/codesentiel_page-0001.jpg",
        link: "https://www.linkedin.com/company/codesentinal",
    },
    {
        title: "ISO/IEC 27001 Information Security Associate™",
        org: "SkillFront",
        date: "July 2025",
        img: "./images/SkillFront-SFE016f7321dc42b-43625104676986-1.png",
        link: "https://www.skillfront.com/Badges/43625104676986"
    },
    {
        title: "Blue Team Junior Analyst",
        org: "Security Blue Team",
        date: "May 2025",
        img: "./images/1746532590263.jpg",
        link: "https://elearning.securityblue.team/home/certificate/868705560"
    },
    {
        title: "Pentesting",
        org: "Turkcell Geleceği Yazanlar",
        date: "February 2025",
        img: "./images/1740595646279.jpg",
        link: "https://gelecegiyazanlar.turkcell.com.tr/sertifika/%2Fsertifika%2Fdwlkmzq1mdm5y2lkntkzntjxawqxodzlbmq%3D"
    },
    {
        title: "Introduction to Cybersecurity",
        org: "Cisco",
        date: "August 2024",
        img: "./images/1709388819908.jpg",
        link: "https://www.credly.com/badges/f691b8db-cc25-4863-9fcb-fd1dc9a3db08/linked_in_profile"
    },
    {
        title: "Fullstack Developer",
        org: "Yup Technology",
        date: "August 2022",
        img: "./images/yuptechnology-certificate.jpg",
        link: "https://yuptechnology.com"
    },
    {
        title: "Microsoft Office",
        org: "Bakı Şəhər Mədəniyyət Baş İdarəsi Mədəni Tədbirlər Təşkili və Yaradıcı Gənclərlə İş üzrə Mərkəz Xəzər rayonu Asudə Vaxt Mərkəzi",
        date: "January 2019",
        img: "./images/f9770bbf-47f7-4b39-b57b-557d6f13864fa.jpg",
        link: ""
    },
];

const container = document.getElementById("certificates");
certificates.forEach((c, i) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <img src="${c.img}" alt="${c.title}">
        <div class="card-body">
            <h3>${c.title}</h3>
            <p><strong>Organization:</strong> ${c.org}</p>
            <p><strong>Date:</strong> ${c.date}</p>
            <button class="btn" onclick="openModal(${i})">See more</button>
        </div>
    `;
    container.appendChild(div);
});

// Modal
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalInfo = document.getElementById("modal-info");
const modalLink = document.getElementById("modal-link");

window.openModal = function(i) {
    const c = certificates[i];
    modalImg.src = c.img;
    modalTitle.textContent = c.title;
    modalDesc.textContent = c.desc;
    modalInfo.textContent = `${c.org} • ${c.date}`;
    modalLink.href = c.link;
    modal.style.display = "flex";
};

document.querySelector(".close-btn").onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };

// Form with EmailJS
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("service_zow8b2l", "template_s9tjk0c", this)
    .then(() => {
        alert("Message sent successfully, thank you! 📧");
        this.reset();
    }, () => {
        alert("An error occurred, please try again.");
    });
});

document.getElementById("year").textContent = new Date().getFullYear();
