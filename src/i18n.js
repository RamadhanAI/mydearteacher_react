import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: { escapeValue: false },
    resources: {
      /* ─────────────── ENGLISH ─────────────── */
      en: {
        translation: {
          /* ---------- NAVBAR ---------- */
          navHome: "Home",
          navMission: "Our Mission",
          navAbout: "About",
          navBooks: "Books",
          navJoin: "Join Us",
          navContact: "Contact",
          navBlog: "Blog",

          /* ---------- HOME ---------- */
          homeTagline1: "1 in 5 students is neurodivergent.",
          homeTagline2: "Inclusion is not extra — it’s essential.",
          homeTagline3: "Every child deserves to feel seen.",
          homeWelcomeTitle: "Reimagining Education for Every Child",
          homeWelcomeText:
            "Because no one is broken. Join us in building classrooms that see every child — not as a problem to fix, but as a story to understand.",
          homeGalleryTitle: "📸 Voices & Moments from the Movement",
          homeWatchTitle: "🎥 Watch Our Videos",
          homeWatchDesc:
            "Explore our message through powerful visual stories and educator insights.",
          homeExploreBtn: "Explore the Toolkit",
          homeAuthorBtn: "Meet the Author",
          homeVideoBtn: "Watch Our Movement Video",

          /* ---------- MISSION ---------- */
          missionTitle: "WHY WE EXIST",
          missionSub:
            "Empowering Teachers. Uplifting Learners. Celebrating Neurodiversity.",
          inclusiveEducationTitle: "Inclusive Education",
          inclusiveEducationDesc:
            "Every child belongs. We build learning spaces that welcome all abilities, backgrounds, and needs.",
          teacherEmpowermentTitle: "Teacher Empowerment",
          teacherEmpowermentDesc:
            "We equip educators with practical tools, confidence, and community to champion inclusive classrooms.",
          neurodiversityTitle: "Neurodiversity Celebration",
          neurodiversityDesc:
            "We spotlight the strengths in ADHD, autism, dyslexia, and more — and rewrite the narrative around difference.",
          policyTitle: "Advocacy & Policy Change",
          policyDesc:
            "We advocate for equitable policies that ensure access, dignity, and meaningful learning for every student.",
          joinMovement: "Join the Movement",
          exploreToolkit: "Explore Our Toolkit",

          /* ---------- ABOUT ---------- */
          aboutTitle: "About the #MyDearTeacher Movement",
          aboutFounder:
            "Founded by UN Peace Ambassador and Educational Psychologist, Amb. Beauty Tommy",
          aboutIntro:
            "The #MyDearTeacher Movement is a global initiative transforming how the world sees, supports, and celebrates neurodiverse learners.",
          aboutOriginTitle: "📘 Our Story",
          aboutGrowth:
            "What began as a heartfelt message in the bestselling book “Dear Teacher, I Am Not Broken” became a worldwide call to action.",
          aboutMissionTitle: "🎯 Our Mission",
          aboutMission:
            "To equip and inspire educators to teach with compassion and confidence, so all students—especially those with special educational needs—can thrive in inclusive, supportive environments.",
          aboutVisionTitle: "👁 Our Vision",
          aboutVision:
            "A future where no learner is labeled as broken, and every classroom becomes a place of belonging, growth, and possibility.",
          aboutInspirationTitle: "💡 What Inspired Us",
          aboutInspiration:
            "The movement was born from real stories—of misunderstood children, overwhelmed teachers, and families seeking hope.",
          aboutSDGTitle: "🌐 Global Impact & SDG Goals",
          sdg4: "📘 SDG 4 – Quality Education",
          sdg10: "🔗 SDG 10 – Reduced Inequalities",
          sdg3: "🧠 SDG 3 – Good Health & Well-being",
          sdg17: "🤝 SDG 17 – Partnerships for the Goals",
          aboutWorkTitle: "💼 What We Do",
          aboutBooks: "📚 Books & Publications – tools that spark dialogue",
          aboutTraining: "👩🏽‍🏫 Educator Training & Inclusion Toolkits",
          aboutCampaigns: "🎤 Campaigns & Advocacy – digital and live",
          aboutPartnerships: "🏫 School Inclusion Partnerships",
          aboutEngagement: "📣 Youth & Parent Engagement – voices that matter",
          aboutPartnersTitle: "🤝 Why Partnerships Matter",
          aboutPartners:
            "Change happens through collaboration with schools, NGOs, special-needs centers, and UN-aligned bodies.",
          aboutJoinTitle: "🌟 Partner With Us",
          aboutOffer1: "Professional development programs",
          aboutOffer2: "Inclusive consulting and frameworks",
          aboutOffer3: "Global visibility through campaigns",
          aboutOffer4: "Research-based advocacy grounded in real life",

          /* ---------- BOOKS ---------- */
          booksTitle: "Our Books",
          booksIntro:
            "Explore the powerful resources, insights, and stories shaping the future of inclusive education through the #MyDearTeacher Movement.",
          book1Title: "Neurodiverse Classrooms",
          book1Subtitle:
            "A Teacher’s Guide to SEN Support (Practical Strategies for Every Student)",
          book1Desc:
            "A go-to guide filled with practical tools and strategies for supporting neurodiverse learners.",
          book2Title: "Beyond Gifted",
          book2Subtitle:
            "Supporting Talented and Twice-Exceptional Learners in Our Neurodiverse World",
          book2Desc:
            "This groundbreaking book bridges the gap between gifted education and neurodiversity.",
          book3Title: "Dear Teacher, I Am Not Broken",
          book3Subtitle: "Poetic insights that sparked a movement.",
          book3Desc:
            "A poetic, heart-opening narrative that gives voice to misunderstood learners.",
          book4Title: "#MyDearTeacher Toolkit",
          book4Subtitle:
            "Advocacy & Resource Guide for Inclusive Classrooms",
          book4Desc:
            "A practical toolkit with checklists, templates, and inclusion frameworks.",
          buyNow: "Buy Now",
          booksContactText: "📦 Want to order or partner with us?",
          getInTouch: "Get in Touch",

          /* ---------- JOIN US ---------- */
          joinUsTitle: "Join the #MyDearTeacher Movement",
          joinUsIntro:
            "Whether you're a teacher, parent, policymaker, or passionate advocate — there's a place for you in this movement. Together, we’re building a world where every child feels seen, supported, and celebrated.",
          joinUsSuccess: "✅ Thank you for joining the movement!",
          joinUsName: "Your Name",
          joinUsEmail: "Your Email",
          joinUsRole: "Your Role",
          joinUsSelectRole: "Select your role",
          joinUsParent: "Parent",
          joinUsEducator: "Educator",
          joinUsNGO: "NGO / Partner",
          joinUsOther: "Other",
          joinUsBtn: "Join Now",
          joinUsReady: "✨ Ready to get started?",
          joinUsEmailText: "Email us at",
          joinUsFollow: "Follow us:",

          /* ---------- CONTACT ---------- */
          contactTitle: "Contact Us",
          contactIntro:
            "We’d love to hear from you. Whether it’s a question, invitation, or partnership request — reach out and let’s build something beautiful together.",
          contactSuccess: "💌 Your message has been sent! Thank you.",
          contactName: "Your Name",
          contactEmail: "Email",
          contactMessage: "Message",
          contactBtn: "Send Message",
          contactDetailsEmail: "Email:",
          contactDetailsWebsite: "Website:"
        }
      },

      /* ─────────────── ARABIC ─────────────── */
      ar: {
        translation: {
          /* ---------- NAVBAR ---------- */
          navHome: "الرئيسية",
          navMission: "مهمتنا",
          navAbout: "من نحن",
          navBooks: "الكتب",
          navJoin: "انضم إلينا",
          navContact: "تواصل معنا",
          navBlog: "المدونة",

          /* ---------- HOME ---------- */
          homeTagline1: "واحد من كل خمسة طلاب يختلفون عصبيًا.",
          homeTagline2: "الإدماج ليس خيارًا إضافيًا—بل ضرورة.",
          homeTagline3: "كل طفل يستحق أن يُرى.",
          homeWelcomeTitle: "إعادة تخيل التعليم لكل طفل",
          homeWelcomeText:
            "لأن لا أحد مكسور. انضم إلينا لبناء فصول ترى كل طفل—not كمشكلة تُصلح بل كقصة تُفهم.",
          homeGalleryTitle: "📸 لحظات وأصوات من الحركة",
          homeWatchTitle: "🎥 شاهد مقاطع الفيديو",
          homeWatchDesc:
            "اكتشف رسالتنا من خلال قصص بصرية مؤثرة ورؤى تربوية.",
          homeExploreBtn: "استكشف الأدوات",
          homeAuthorBtn: "قابل المؤلفة",
          homeVideoBtn: "شاهد فيديو الحركة",

          /* ---------- MISSION ---------- */
          missionTitle: "لماذا نحن موجودون",
          missionSub:
            "تمكين المعلمين. رفع المتعلمين. الاحتفاء بالتنوع العصبي.",
          inclusiveEducationTitle: "التعليم الشامل",
          inclusiveEducationDesc:
            "كل طفل ينتمي. نبني بيئات تعلم ترحب بكل القدرات والخلفيات والاحتياجات.",
          teacherEmpowermentTitle: "تمكين المعلمين",
          teacherEmpowermentDesc:
            "نوفر للمعلمين أدوات عملية وثقة ومجتمعًا لقيادة فصول شاملة.",
          neurodiversityTitle: "الاحتفال بالتنوع العصبي",
          neurodiversityDesc:
            "نبرز نقاط القوة في التوحد، وفرط الحركة، وعُسر القراءة وغيرها، ونعيد صياغة السرد حول الاختلاف.",
          policyTitle: "المناصرة وتغيير السياسات",
          policyDesc:
            "ندافع عن سياسات منصفة تضمن الوصول والكرامة والتعلم الهادف لكل طالب.",
          joinMovement: "انضم إلى الحركة",
          exploreToolkit: "استكشف أدواتنا",

          /* ---------- ABOUT ---------- */
          aboutTitle: "عن حركة #معلمي_العزيز",
          aboutFounder:
            "تأسست على يد سفيرة السلام وعالمة النفس التربوي بيوتي تومي",
          aboutIntro:
            "حركة عالمية تغيّر نظرة العالم للمتعلمين المختلفين عصبيًا وتدعمهم وتحتفي بهم.",
          aboutOriginTitle: "📘 قصتنا",
          aboutGrowth:
            "بدأت برسالة صادقة في كتاب «عزيزي المعلم، أنا لست مكسورًا» وتحولت إلى نداء عالمي.",
          aboutMissionTitle: "🎯 مهمتنا",
          aboutMission:
            "تمكين وإلهام المعلمين للتعليم بالتعاطف والثقة حتى يزدهر كل الطلاب—خاصة ذوي الاحتياجات الخاصة—في بيئات شاملة.",
          aboutVisionTitle: "👁 رؤيتنا",
          aboutVision:
            "مستقبل لا يوصف فيه أي متعلم بالمكسور، وتصبح كل غرفة صف مكانًا للانتماء والنمو.",
          aboutInspirationTitle: "💡 ما الذي ألهمنا",
          aboutInspiration:
            "ولدت الحركة من قصص حقيقية لأطفال أسيء فهمهم ومعلمين مرهقين وعائلات تبحث عن أمل.",
          aboutSDGTitle: "🌐 الأثر العالمي وأهداف التنمية",
          sdg4: "📘 الهدف 4 – التعليم الجيد",
          sdg10: "🔗 الهدف 10 – الحد من عدم المساواة",
          sdg3: "🧠 الهدف 3 – الصحة والرفاه",
          sdg17: "🤝 الهدف 17 – الشراكات",
          aboutWorkTitle: "💼 ماذا نفعل",
          aboutBooks: "📚 كتب ومنشورات تشعل الحوار",
          aboutTraining: "👩🏽‍🏫 تدريب المعلمين وأدلة الدمج",
          aboutCampaigns: "🎤 حملات ومناصرة رقمية وميدانية",
          aboutPartnerships: "🏫 شراكات مدارس لأطر الدمج",
          aboutEngagement: "📣 مشاركة الشباب والأهالي – أصوات مؤثرة",
          aboutPartnersTitle: "🤝 لماذا الشراكات مهمة",
          aboutPartners:
            "نؤمن أن التغيير يحدث بالتعاون مع المدارس والمنظمات والجهات الحكومية.",
          aboutJoinTitle: "🌟 شاركنا الرحلة",
          aboutOffer1: "برامج تطوير مهني",
          aboutOffer2: "استشارات وأطر شاملة",
          aboutOffer3: "ظهور عالمي عبر الحملات",
          aboutOffer4: "مناصرة مبنية على البحث",

          /* ---------- BOOKS ---------- */
          booksTitle: "كتبنا",
          booksIntro:
            "اكتشف الموارد والرؤى والقصص التي تشكل مستقبل التعليم الشامل من خلال حركة #معلمي_العزيز.",
          book1Title: "الفصول العصبية المتنوعة",
          book1Subtitle:
            "دليل المعلم لدعم الاحتياجات التعليمية الخاصة (استراتيجيات عملية لكل طالب)",
          book1Desc:
            "دليل عملي مليء بالأدوات والاستراتيجيات لدعم المتعلمين المختلفين عصبيًا.",
          book2Title: "ما وراء الموهبة",
          book2Subtitle:
            "دعم الطلاب الموهوبين وذوي التحديات في عالمنا العصبي المتنوع",
          book2Desc:
            "كتاب رائد يجمع بين التعليم الموهوب والتنوع العصبي.",
          book3Title: "عزيزي المعلم، أنا لست مكسورًا",
          book3Subtitle: "رؤى شعرية أطلقت حركة عالمية.",
          book3Desc: "سرد مؤثر يعطي صوتًا للمتعلمين غير المفهومين.",
          book4Title: "أدوات #معلمي_العزيز",
          book4Subtitle: "دليل المناصرة والموارد للفصول الدراسية الشاملة",
          book4Desc:
            "مجموعة أدوات عملية تشمل القوائم والنماذج وأطر الدمج.",
          buyNow: "اشتر الآن",
          booksContactText: "📦 هل ترغب في الطلب أو الشراكة معنا؟",
          getInTouch: "تواصل معنا",

          /* ---------- JOIN US ---------- */
          joinUsTitle: "انضم إلى حركة #معلمي_العزيز",
          joinUsIntro:
            "سواء كنت معلمًا أو ولي أمر أو صانع سياسات أو مدافعًا شغوفًا — هناك مكان لك في هذه الحركة. معًا، نبني عالمًا يشعر فيه كل طفل بأنه مرئي ومدعوم ومُحتفى به.",
          joinUsSuccess: "✅ شكرًا لانضمامك إلى الحركة!",
          joinUsName: "اسمك",
          joinUsEmail: "بريدك الإلكتروني",
          joinUsRole: "دورك",
          joinUsSelectRole: "اختر دورك",
          joinUsParent: "ولي أمر",
          joinUsEducator: "معلم /ة",
          joinUsNGO: "منظمة / شريك",
          joinUsOther: "أخرى",
          joinUsBtn: "انضم الآن",
          joinUsReady: "✨ هل أنت مستعد للبدء؟",
          joinUsEmailText: "راسلنا عبر البريد:",
          joinUsFollow: "تابعنا على:",

          /* ---------- CONTACT ---------- */
          contactTitle: "تواصل معنا",
          contactIntro:
            "يسعدنا أن نسمع منك. سواء كان سؤالًا، دعوة، أو طلب شراكة — تواصل معنا ولنصنع شيئًا جميلًا معًا.",
          contactSuccess: "💌 تم إرسال رسالتك! شكرًا لك.",
          contactName: "اسمك",
          contactEmail: "البريد الإلكتروني",
          contactMessage: "رسالتك",
          contactBtn: "إرسال الرسالة",
          contactDetailsEmail: "البريد الإلكتروني:",
          contactDetailsWebsite: "الموقع:"
        }
      }
    }
  });

export default i18n;
