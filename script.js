const translations = {
    en: {
        logo: "Roman Ratmansky, Adv.",
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_projects: "Projects",
        nav_contact: "Contact",

        hero_title: "Contracts & Claims for Major Infrastructure Projects",
        hero_subtitle:
            "Strategic legal support for complex construction and infrastructure projects – from contract drafting to claim management.",
        hero_cta: "Schedule a consultation",

        about_title: "About the Firm",
        about_text:
            "Roman Ratmansky, Adv. focuses on contract and claim management in large-scale infrastructure and building projects. " +
            "We combine deep understanding of construction processes with precise legal analysis, helping clients reduce risk, " +
            "prevent disputes, and protect their commercial interests throughout the project lifecycle.",

        services_title: "Core Services",
        service_1: "Drafting and negotiating EPC, design-build, and construction contracts.",
        service_2: "Ongoing claim management: delay, disruption, scope changes, and cost escalation.",
        service_3: "Risk allocation and contract strategy for public and private tenders.",
        service_4: "Representation in negotiations, mediation, and arbitration in construction disputes.",

        projects_title: "Representative Projects",
        projects_intro:
            "A selection of major infrastructure and construction projects supported through contract strategy, claim management, and dispute resolution.",

        project_1_title: "National Highway Expansion Program",
        project_1_desc:
            "Contract review, risk allocation, and management of delay and disruption claims across multiple roadway segments.",

        project_2_title: "Urban Light Rail Construction",
        project_2_desc:
            "Ongoing claim management for scope changes, interface coordination issues, and contractor–authority disputes.",

        project_3_title: "Water Treatment & Pipeline System",
        project_3_desc:
            "Drafting and negotiating EPC agreements, plus representation in mediation regarding cost escalation claims.",

        project_4_title: "Large-Scale Residential Development",
        project_4_desc:
            "Contract strategy and dispute resolution related to contractor performance, schedule slippage, and design changes.",

        contact_title: "Contact",
        contact_intro:
            "Leave your details and we will get back to you to discuss your project and legal needs.",
        form_name_label: "Full name:",
        form_email_label: "Email:",
        form_phone_label: "Phone:",
        form_message_label: "Project / message:",
        form_submit: "Send",

        footer_text:
            "© Roman Ratmansky, Adv. – Contracts & Claims for Infrastructure and Construction Projects"
    },

    he: {
        logo: "רומן רטמנסקי, עו\"ד",
        nav_home: "ראשי",
        nav_about: "אודות",
        nav_services: "שירותים",
        nav_projects: "פרויקטים",
        nav_contact: "יצירת קשר",

        hero_title: "ניהול חוזים ותביעות בפרויקטי תשתית ובנייה גדולים",
        hero_subtitle:
            "ליווי משפטי אסטרטגי לפרויקטי בנייה ותשתית מורכבים – מניסוח חוזים ועד ניהול תביעות.",
        hero_cta: "קביעת פגישת ייעוץ",

        about_title: "אודות המשרד",
        about_text:
            "רומן רטמנסקי, עו\"ד מתמחה בניהול חוזים ותביעות בפרויקטי תשתית ובנייה רחבי היקף. " +
            "המשרד משלב הבנה מעמיקה של תהליכי ביצוע עם ניתוח משפטי מדויק, כדי לסייע ללקוחות לצמצם סיכונים, " +
            "למנוע מחלוקות ולהגן על האינטרסים המסחריים שלהם לאורך חיי הפרויקט.",

        services_title: "שירותים מרכזיים",
        service_1: "עריכת וניהול משא ומתן על חוזי EPC, Design-Build וחוזי ביצוע.",
        service_2: "ניהול שוטף של תביעות: עיכובים, הפרעות, שינויי היקף ועליית עלויות.",
        service_3: "חלוקת סיכונים ואסטרטגיית חוזים במכרזים ציבוריים ופרטיים.",
        service_4: "ייצוג במשא ומתן, גישור ובוררות בסכסוכי בנייה ותשתית.",

        projects_title: "פרויקטים מייצגים",
        projects_intro:
            "מדגם של פרויקטי תשתית ובנייה רחבי היקף שבהם ניתן ליווי משפטי הכולל אסטרטגיית חוזים, ניהול תביעות ופתרון מחלוקות.",

        project_1_title: "תוכנית להרחבת כבישים ארציים",
        project_1_desc:
            "בחינת חוזים, חלוקת סיכונים וניהול תביעות בגין עיכובים והפרעות במספר מקטעי כביש.",

        project_2_title: "בנייה והקמה של רכבת קלה עירונית",
        project_2_desc:
            "ניהול תביעות שוטף בגין שינויי היקף, בעיות תיאום ממשקים ומחלוקות בין קבלנים לרשויות.",

        project_3_title: "מערכת טיפול במים וצנרת הולכה",
        project_3_desc:
            "עריכת וניהול משא ומתן על חוזי EPC וייצוג בהליכי גישור בנוגע לתביעות עליית עלויות.",

        project_4_title: "פרויקט מגורים רחב היקף",
        project_4_desc:
            "אסטרטגיית חוזים ופתרון מחלוקות הקשורות לביצוע קבלני, החלקת לוחות זמנים ושינויי תכנון.",

        contact_title: "יצירת קשר",
        contact_intro:
            "השאירו פרטים ונחזור אליכם לתיאום שיחה על הפרויקט והצרכים המשפטיים שלכם.",
        form_name_label: "שם מלא:",
        form_email_label: "דוא\"ל:",
        form_phone_label: "טלפון:",
        form_message_label: "פרויקט / הודעה:",
        form_submit: "שליחה",

        footer_text:
            "© רומן רטמנסקי, עו\"ד – חוזים ותביעות בפרויקטי תשתית ובנייה"
    }
};

function setLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.body.classList.toggle("hebrew", lang === "he");
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            if (el.tagName.toLowerCase() === "label") {
                el.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.textContent = dict[key];
                    }
                });
            } else {
                el.textContent = dict[key];
            }
        }
    });
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setLanguage("en");

    const form = document.getElementById("contactForm");
    const msg = document.getElementById("formMessage");

    form.addEventListener("submit", e => {
        e.preventDefault();
        msg.textContent =
