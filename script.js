document.addEventListener('DOMContentLoaded', function() {
  const translations = {
    "en": {
      "about": "About Anat",
      "aboutText": "Anat Golan is a seasoned public servant with over 15 years of significant experience in shaping policies that merge national security with economic prosperity. Her background in economics and accounting enhances her expertise, making her an asset to any strategic initiatives that aim for sustainable growth and robust security solutions.",
      "experience": "Professional Experience",
      "experienceText": "With substantial roles in the Israeli Ministry of Defense and the IDF Cyber Defense Directorate as a Lieutenant Colonel, Anat has managed substantial budgets and directly handled various high-stakes projects that were critical to national security and economic strategies.",
      "background": "Academic Background",
      "backgroundText": "Anat holds a Master's degree in Accounting from Bar Ilan University (Magna Cum Laude) and a Bachelor’s degree in Economics and International Relations from Hebrew University of Jerusalem.",
      "education": "Current Education",
      "educationText": "Anat is currently pursuing a Mid Career Masters in Public Administration at Harvard Kennedy School, expected to graduate in 2024.",
      "competencies": "Core Competencies",
      "competenciesText": "Anat excels in cross-sectoral management, displaying keen adeptness in leading diverse teams that advocate for social inclusivity. Her approach has been pivotal in establishing trust-based collaborations bridging national security and economic frameworks.",
      "quote": "\"I am passionate about working with people to find innovative solutions to complex problems and constantly striving to make meaningful advancements.\""
    },
    "he": {
      "about": "אודות ענת",
      "aboutText": "ענת גולן משרתת במגזר הציבורי עם למעלה מ-15 שנות ניסיון בגיבוש מדיניות המשלבת ביטחון לאומי עם שגשוג כלכלי. הרקע שלה בכלכלה ובחשבונאות מעשיר את מומחיותה, ומהווה נכס לכל יוזמה אסטרטגית הממוקדת בפתרונות בטחוניים המאפשרים צמיחה ברת קיימא.",
      "experience": "ניסיון מקצועי",
      "experienceText": "עם תפקידים משמעותיים במשרד הביטחון הישראלי ובמנהלת הגנת הסייבר של צה\"ל בדרגת אלוף משנה, ענת ניהלה תקציבים גדולים והתמודדה ישירות עם מגוון פרויקטים בעלי סיכונים רבים שהיו קריטיים לאסטרטגיות הביטחון והכלכלה של המדינה.",
      "background": "רקע אקדמי",
      "backgroundText": "ענת בעלת תואר שני בחשבונאות מאוניברסיטת בר-אילן (בהצטיינות) ותואר ראשון בכלכלה ויחסים בין-לאומיים מהאוניברסיטה העברית בירושלים .",
      "education": "השכלה נוכחית",
      "educationText": "ענת לומדת כעת לתואר שני במנהל ציבורי בבית הספר קנדי לממשל בהרווארד, עם תכנון לסיום בשנת 2024.",
      "competencies": "קומפטנציות עיקריות",
      "competenciesText": "ענת מתעלה בניהול בין-תחומי, עם יכולת מובהקת להוביל צוותים מגוונים שמקדמים כלוליות חברתית. היא הייתה מרכזית בקידום שיתופי פעולה מבוססי אמון, המחברים בין תחומי הביטחון לכלכלה.",
      "quote":
        "\"אני נלהבת לעבוד עם אנשים כדי למצוא פתרונות חדשניים לבעיות מורכבות, תוך שאיפה תמידית להתקדמות משמעותית.\""
    }
  };

  function translate(lang) {
    Object.keys(translations[lang]).forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.innerText = translations[lang][id];
      }
    });
  }

  document.querySelectorAll('.translation-buttons button').forEach(button => {
    button.addEventListener('click', function() {
      translate(this.dataset.lang);
    });
  });
});
