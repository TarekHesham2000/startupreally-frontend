// ==========================================
// بيانات المشاريع — هتيجي من الباك اند
// ==========================================
const sampleProjects = [
    {
        id: 1,
        projectName: "تطبيق توصيل خضار من المزارعين في مينيا",
        projectDescription: "يربط المزارعين بالزبائن مباشرة ويوفر 30% من التكلفة بدون وسيط",
        amountNeeded: 185000,
        equityPercentage: 18,
        interestedInvestors: 14,
        status: "قيد التمويل",   // "جديد" | "قيد التمويل" | "ممول"
        verified: true,
        thumbnail: "https://picsum.photos/id/201/600/400",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        // بيانات التفاصيل الكاملة من الباك اند
        fullName: "أحمد محمد علي",
        phone: "01123456789",
        email: "ahmed@example.com",
        financialStudy: "التكاليف المتوقعة 185 ألف جنيه، إيراد متوقع في السنة الأولى 400 ألف جنيه",
        partnershipType: "تمويل فقط",
        projectStatus: "بدأ فعلاً",
        projectDuration: "3 أشهر",
        achievementsSoFar: "تم تصميم التطبيق وربط 12 مزارع بالمنصة",
        hasCommercialRegister: false,
        hasOffice: false,
        businessModel: "عمولة 5% على كل طلبية",
        packageType: "pro"
    },
    {
        id: 2,
        projectName: "مصنع صغير لمنتجات الحلويات الطبيعية",
        projectDescription: "منتجات بدون سكر ومن مواد محلية 100% — جاهز للتوسع في السوق المصر  سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محل سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100% سكر ومن مواد محلية 100%ية 100% سكر ومن مواد محلية 100%ي",
        amountNeeded: 420000,
        equityPercentage: 25,
        interestedInvestors: 27,
        status: "ممول",
        verified: true,
        thumbnail: "https://picsum.photos/id/29/600/400",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        fullName: "سارة خالد",
        phone: "01012345678",
        email: "sara@example.com",
        financialStudy: "تكاليف 420 ألف، إيراد متوقع 900 ألف في السنة الأولى",
        partnershipType: "شريك عامل",
        projectStatus: "بدأ فعلاً",
        projectDuration: "سنة كاملة",
        achievementsSoFar: "تم إنتاج وبيع أول دفعة 500 وحدة",
        hasCommercialRegister: true,
        hasOffice: true,
        businessModel: "بيع مباشر + توزيع لمحلات",
        packageType: "premium"
    },
    {
        id: 3,
        projectName: "خدمة غسيل سيارات متنقلة بالكهرباء",
        projectDescription: "أول خدمة خضراء في الصعيد — موفرة وصديقة للبيئة بدون ماء",
        amountNeeded: 75000,
        equityPercentage: 12,
        interestedInvestors: 9,
        status: "جديد",
        verified: false,
        thumbnail: "https://picsum.photos/id/160/600/400",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        fullName: "كريم يوسف",
        phone: "01234567890",
        email: "karim@example.com",
        financialStudy: "تكاليف 75 ألف، ربح شهري متوقع 8 آلاف جنيه",
        partnershipType: "تمويل فقط",
        projectStatus: "فكرة فقط",
        projectDuration: "—",
        achievementsSoFar: "تم عمل دراسة الجدوى والحصول على عروض أسعار المعدات",
        hasCommercialRegister: false,
        hasOffice: false,
        businessModel: "اشتراك شهري + حجز عبر واتساب",
        packageType: "basic"
    }
];

// ==========================================
// ألوان الحالة
// ==========================================
function getStatusStyle(status) {
    switch (status) {
        case 'ممول':        return 'bg-emerald-600 text-white';
        case 'قيد التمويل': return 'bg-orange-500 text-white';
        case 'جديد':        return 'bg-blue-500 text-white';
        default:            return 'bg-gray-400 text-white';
    }
}

// ==========================================
// عرض كروت المشاريع
// ==========================================
function renderProjects(projects = sampleProjects) {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card bg-white rounded-3xl overflow-hidden border border-gray-100';
        card.innerHTML = `
            <!-- الصورة المصغرة مع زرار تشغيل الفيديو -->
            <div class="relative cursor-pointer group" onclick="openVideo('${project.videoUrl}', '${project.projectName}')">
                <img src="${project.thumbnail}" class="w-full h-56 object-cover">

                <!-- طبقة تعتيم عند الهوفر -->
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                        <i class="fa-solid fa-play text-emerald-600 text-2xl mr-[-3px]"></i>
                    </div>
                </div>

                <!-- أيقونة بلاي صغيرة دايمة -->
                <div class="absolute bottom-3 left-3 bg-black/60 text-white px-3 py-1 rounded-xl text-xs flex items-center gap-1">
                    <i class="fa-solid fa-play text-[10px]"></i> شاهد الفيديو
                </div>

                <!-- بادج الحالة -->
                <div class="absolute top-4 right-4 px-4 py-1 rounded-3xl text-xs font-bold ${getStatusStyle(project.status)}">
                    ${project.status}
                </div>

                <!-- بادج موثق -->
                ${project.verified
                    ? `<div class="absolute top-4 left-4 bg-white px-3 py-1 rounded-2xl text-xs font-bold flex items-center gap-1 shadow">
                           ✅ موثق
                       </div>`
                    : ''}
            </div>

            <!-- محتوى الكارت -->
            <div class="p-5">
                <h3 class="font-bold text-lg mb-1 line-clamp-2">${project.projectName}</h3>
                <p class="text-gray-500 text-sm line-clamp-2 mb-4">${project.projectDescription}</p>

                <!-- المبلغ والنسبة -->
                <div class="flex justify-between text-sm mb-4 bg-gray-50 rounded-2xl px-4 py-3">
                    <div>
                        <span class="text-gray-400 text-xs">المبلغ المطلوب</span><br>
                        <span class="font-bold text-emerald-600 text-xl">${Number(project.amountNeeded).toLocaleString()} ج</span>
                    </div>
                    <div class="text-right">
                        <span class="text-gray-400 text-xs">مقابل حصة</span><br>
                        <span class="font-bold text-xl">${project.equityPercentage}%</span>
                    </div>
                </div>

                <!-- زرار التفاصيل + عدد المستثمرين -->
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-2 text-sm text-gray-600">
                        <i class="fa-solid fa-users text-emerald-600"></i>
                        <span>${project.interestedInvestors} مستثمر مهتم</span>
                    </div>
                    <button onclick="openDetails(${project.id})"
                        class="text-xs border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-xl font-bold transition flex items-center gap-1">
                        <i class="fa-solid fa-circle-info"></i> التفاصيل
                    </button>
                </div>

                <!-- زرار واتساب -->
                <button onclick="contactWhatsApp(${project.id})"
                    class="whatsapp-btn w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 text-sm shadow-lg">
                    <i class="fa-brands fa-whatsapp text-lg"></i>
                    تواصل عبر واتساب
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ==========================================
// مودال الفيديو
// ==========================================
function openVideo(videoUrl, title) {
    const modal = document.getElementById('videoModal');
    const videoEl = document.getElementById('projectVideo');
    const titleEl = document.getElementById('videoTitle');
    videoEl.src = videoUrl;
    titleEl.textContent = title;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    videoEl.play();
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const videoEl = document.getElementById('projectVideo');
    videoEl.pause();
    videoEl.src = '';
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// ==========================================
// مودال التفاصيل
// ==========================================
function openDetails(id) {
    const project = sampleProjects.find(p => p.id === id);
    if (!project) return;

    const body = document.getElementById('detailsBody');
    body.innerHTML = `
        <div class="space-y-5 text-sm">

            <!-- معلومات صاحب المشروع -->
            <div>
                <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-user text-emerald-600"></i> بيانات صاحب المشروع
                </h4>
                <div class="bg-gray-50 rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    ${detailRow('الاسم', project.fullName)}
                    ${detailRow('التليفون', project.phone)}
                    ${detailRow('الإيميل', project.email)}
                    ${detailRow('الباقة', packageBadge(project.packageType))}
                </div>
            </div>

            <!-- بيانات المشروع -->
            <div>
                <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-lightbulb text-emerald-600"></i> تفاصيل المشروع
                </h4>
                <div class="bg-gray-50 rounded-2xl p-4 space-y-3">
                    ${detailRow('اسم المشروع', project.projectName)}
                    ${detailRowFull('الوصف', project.projectDescription)}
                    ${detailRowFull('الدراسة المالية', project.financialStudy)}
                    ${detailRowFull('الإنجازات حتى الآن', project.achievementsSoFar)}
                </div>
            </div>

            <!-- التفاصيل المالية -->
            <div>
                <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-money-bill text-emerald-600"></i> التفاصيل المالية
                </h4>
                <div class="bg-gray-50 rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    ${detailRow('المبلغ المطلوب', Number(project.amountNeeded).toLocaleString() + ' جنيه')}
                    ${detailRow('الحصة المطروحة', project.equityPercentage + '%')}
                    ${detailRow('نوع الشراكة', project.partnershipType)}
                    ${detailRow('نموذج العمل', project.businessModel)}
                </div>
            </div>

            <!-- الوضع القانوني -->
            <div>
                <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-building text-emerald-600"></i> الوضع القانوني
                </h4>
                <div class="bg-gray-50 rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    ${detailRow('حالة المشروع', project.projectStatus)}
                    ${detailRow('مدة العمل', project.projectDuration)}
                    ${detailRow('سجل تجاري', project.hasCommercialRegister ? '✅ نعم' : '❌ لا')}
                    ${detailRow('مقر إداري', project.hasOffice ? '✅ نعم' : '❌ لا')}
                </div>
            </div>

        </div>
    `;

    document.getElementById('detailsModal').classList.remove('hidden');
    document.getElementById('detailsModal').classList.add('flex');
}

function closeDetails() {
    document.getElementById('detailsModal').classList.add('hidden');
    document.getElementById('detailsModal').classList.remove('flex');
}

// helpers لعرض الصفوف
function detailRow(label, value) {
    return `<div>
        <span class="text-gray-400 text-xs block">${label}</span>
        <span class="font-medium text-gray-800">${value}</span>
    </div>`;
}
function detailRowFull(label, value) {
    return `<div>
        <span class="text-gray-400 text-xs block mb-1">${label}</span>
        <span class="font-medium text-gray-800 leading-relaxed">${value}</span>
    </div>`;
}
function packageBadge(pkg) {
    const map = { basic: '🥉 أساسية', pro: '🥈 Pro', premium: '🥇 Premium' };
    return map[pkg] || pkg;
}

// ==========================================
// التواصل عبر واتساب
// ==========================================
function contactWhatsApp(id) {
    const numbers = ["201001234567", "201112345678", "201223456789"];
    const random = numbers[Math.floor(Math.random() * numbers.length)];
    window.open(`https://wa.me/${random}?text=مرحبا%20شفت%20مشروعك%20على%20StartupReally%20وعجبني!`, '_blank');
}

// ==========================================
// فتح صفحة تقديم المشروع
// ==========================================
function showFormModal() {
    window.location.href = 'form.html';
}

// ==========================================
// أنيميشن العداد
// ==========================================
function animateCounter(id, target, suffix = '') {
    let count = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
        count += step;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        document.getElementById(id).textContent = count + suffix;
    }, 40);
}

// ==========================================
// تهيئة الصفحة عند التحميل
// ==========================================
window.onload = function () {
    renderProjects();

    // أنيميشن الأرقام بعد 800ms
    setTimeout(() => {
        animateCounter('stat1', 247);
        animateCounter('stat2', 1850);
        animateCounter('stat3', 18.7, 'M');
        animateCounter('stat4', 98);
    }, 800);

    // إغلاق المودالات بالضغط على الخلفية
    document.getElementById('videoModal').addEventListener('click', function (e) {
        if (e.target === this) closeVideo();
    });
    document.getElementById('detailsModal').addEventListener('click', function (e) {
        if (e.target === this) closeDetails();
    });

    console.log('%c✅ موقع StartupReally جاهز للتجربة!', 'color:#10b981; font-size:18px; font-weight:bold');
};
