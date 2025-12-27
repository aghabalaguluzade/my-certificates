(function(){
    emailjs.init("wOxwg3Lda-WDeHl4y");  // EmailJS Public Key
})();

// Certificates
const certificates = [
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
        img: "https://media.licdn.com/dms/image/v2/D4E2DAQFEdZByKZ6SBQ/profile-treasury-image-shrink_800_800/B4EZrZibh9KkAY-/0/1764586275126?e=1767466800&v=beta&t=8R-okqewRhm6eGwZn7bIoFdmapGCuLVbyjUOQJYz7jc",
        link: "https://hackviser.com/verify?id=HV-CAPT-C54RP13O"
    },
    {
        title: "Jr Penetration Tester",
        org: "TryHackMe",
        date: "November 2025",
        img: "https://media.licdn.com/dms/image/v2/D4E2DAQEkiOT1pPvErg/profile-treasury-image-shrink_800_800/B4EZptcpcMIQAY-/0/1762772818532?e=1767466800&v=beta&t=f4bRXlDh54pP2L7A3f_hwU86CozRi9PZmXNiQY6BgHY",
        link: "https://tryhackme.com/certificate/THM-VUNPMYP5W0"
    },
    {
        title: "CompTIA Pentest+",
        org: "TryHackMe",
        date: "November 2025",
        img: "https://media.licdn.com/dms/image/v2/D4E2DAQGPOtScnjeVfw/profile-treasury-image-shrink_800_800/B4EZo_DVKSKYAY-/0/1761994430174?e=1767466800&v=beta&t=Up6SVlUL4mSWFA5twyVJ44brvYujvEAkP5s83OQWL4s",
        link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-AJO4DIG0EG.pdf"
    },
    {
        title: "Offensive Pentesting",
        org: "TryHackMe",
        date: "November 2025",
        img: "https://media.licdn.com/dms/image/v2/D4E2DAQHZUsUY6Lu34A/profile-treasury-image-shrink_800_800/B4EZo_EDuzKsAY-/0/1761994623063?e=1767466800&v=beta&t=pd-QwEiOuuEJTydm4pOWJgmxezwhzWp4Y0T1IPzKtNo",
        link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-CCPQEWPTVT.pdf"
    },
    {
        title: "Red Teaming",
        org: "TryHackMe",
        date: "November 2025",
        img: "https://media.licdn.com/dms/image/v2/D4E2DAQEN8iPIuCksTw/profile-treasury-image-shrink_800_800/B4EZpYytV.KcAc-/0/1762426280841?e=1767466800&v=beta&t=8XtXAPIwM-lftpol8F4DbQWDht6rixLJm-ZvWEEYS6I",
        link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-6MYZH8MLOZ.pdf"
    },
    {
        title: "Web Application Pentesting",
        org: "TryHackMe",
        date: "October 2025",
        img: "https://media.licdn.com/dms/image/v2/D4E2DAQFaXJWCjPFZ3Q/profile-treasury-image-shrink_800_800/B4EZoqZknTHgAY-/0/1761647939258?e=1767466800&v=beta&t=RZmtBb2tE23Xvo8LlYsbDF-LkS1eyU67629ih2XXh-Q",
        link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-XUSY8NMZXV.pdf"
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
        img: "https://media.licdn.com/dms/image/v2/D4E2DAQFkarfnevWnIw/profile-treasury-document-images_800/B4EZaldFRAHcAk-/1/1746532590263?e=1767830400&v=beta&t=B7lHtdODd0vVohK-GtON6skg7_X9LkxC0ivqK_fneUw",
        link: "https://elearning.securityblue.team/home/certificate/868705560"
    },
    {
        title: "Pentesting",
        org: "Turkcell Geleceği Yazanlar",
        date: "February 2025",
        img: "https://media.licdn.com/dms/image/v2/D4E2DAQEC5pa5TS_XQQ/profile-treasury-document-images_800/B4EZVDlcguG0Ak-/1/1740595646279?e=1767830400&v=beta&t=SgOFRhGHnz8LYttpWgNm_gHAHeYAlZNluewds0F8DRE",
        link: "https://gelecegiyazanlar.turkcell.com.tr/sertifika/%2Fsertifika%2Fdwlkmzq1mdm5y2lkntkzntjxawqxodzlbmq%3D"
    },
    {
        title: "Introduction to Cybersecurity",
        org: "Cisco",
        date: "August 2024",
        img: "https://media.licdn.com/dms/image/v2/D4E2DAQFuSGuR663GJA/profile-treasury-document-images_800/profile-treasury-document-images_800/1/1709388819908?e=1767830400&v=beta&t=GDcTKZfCJVqkQQcK5L9fRcqA_Apdgi2q4vOs1bWGUig",
        link: "https://www.credly.com/badges/f691b8db-cc25-4863-9fcb-fd1dc9a3db08/linked_in_profile"
    },
    {
        title: "Fullstack Developer",
        org: "Yup Technology",
        date: "August 2022",
        img: "./images/yuptechnology-certificate.jpg",
        link: "https://yuptechnology.com"
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
