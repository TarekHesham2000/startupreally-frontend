// ==========================================
// إعدادات الـ API
// ==========================================
const API_BASE_URL = 'https://startupname-production.up.railway.app';
const API_ENDPOINTS = {
    getAllProjects: `${API_BASE_URL}/auth/getAllProjectSubmissions`,
};

// مصفوفة المشاريع المحمّلة من الـ API — بنستخدمها في openDetails
let loadedProjects = [];

// ==========================================
// تحويل بيانات الـ API لـ format موحد
// ==========================================
function mapApiProject(submission) {
    const statusMap = {
        pending:  { label: 'قيد التمويل', style: 'bg-orange-500 text-white' },
        verified: { label: 'موثق',        style: 'bg-blue-500 text-white'   },
        funded:   { label: 'ممول',        style: 'bg-emerald-600 text-white' },
    };
    const statusInfo = statusMap[submission.status] || { label: 'جديد', style: 'bg-gray-400 text-white' };

    return {
        id:                    submission._id || submission.id,
        projectName:           submission.project?.name           || '—',
        projectDescription:    submission.project?.description    || '—',
        amountNeeded:          submission.project?.amountNeeded   || 0,
        equityPercentage:      submission.project?.equityPercentage || 0,
        financialStudy:        submission.project?.financialStudy || '—',
        interestedInvestors:   0,
        statusLabel:           statusInfo.label,
        statusStyle:           statusInfo.style,
        verified:              submission.status === 'verified' || submission.status === 'funded',
        thumbnail:             submission.video?.thumbnailUrl     || 'https://picsum.photos/id/201/600/400',
        videoUrl:              submission.video?.secure_url       || '',
        videoDuration:         submission.video?.duration         || 0,
        fullName:              submission.user?.fullName          || '—',
        phone:                 submission.user?.phone             || '—',
        email:                 submission.user?.email             || '—',
        partnershipType:       submission.partnershipType         || '—',
        projectStatus:         submission.projectStatus           || '—',
        projectDuration:       submission.projectDuration         || '—',
        achievementsSoFar:     submission.achievementsSoFar       || '—',
        hasCommercialRegister: submission.hasCommercialRegister   || false,
        hasOffice:             submission.hasOffice               || false,
        createdAt:             submission.createdAt               || '',
    };
}

// ==========================================
// جلب المشاريع من الـ API
// ==========================================
async function fetchProjects() {
    const grid = document.getElementById('projects-grid');

    grid.innerHTML = `
        <div class="col-span-full flex flex-col items-center justify-center py-20 text-gray-400">
            <i class="fa-solid fa-spinner fa-spin text-4xl text-emerald-500 mb-4"></i>
            <p class="font-medium">جاري تحميل المشاريع...</p>
        </div>
    `;

    try {
        const response = await fetch(API_ENDPOINTS.getAllProjects, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const json = await response.json();
        const submissions = json?.message?.data?.submissions || [];

        if (submissions.length === 0) {
            grid.innerHTML = `
                <div class="col-span-full flex flex-col items-center justify-center py-20 text-gray-400">
                    <i class="fa-solid fa-folder-open text-4xl mb-4"></i>
                    <p class="font-medium">لا توجد مشاريع متاحة حالياً</p>
                </div>
            `;
            return;
        }

        loadedProjects = submissions.map(mapApiProject);
        renderProjects(loadedProjects);

    } catch (err) {
        console.error('خطأ في تحميل المشاريع:', err);
        grid.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center py-20 text-red-400">
                <i class="fa-solid fa-triangle-exclamation text-4xl mb-4"></i>
                <p class="font-medium">حدث خطأ في تحميل المشاريع</p>
                <button onclick="fetchProjects()" class="mt-4 bg-emerald-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-emerald-700 transition">
                    حاول مرة أخرى
                </button>
            </div>
        `;
    }
}

// ==========================================
// عرض كروت المشاريع
// ==========================================
function renderProjects(projects) {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card bg-white rounded-3xl overflow-hidden border border-gray-100';
        card.innerHTML = `
            <div class="relative cursor-pointer group" onclick="openVideo('${project.videoUrl}', '${project.projectName}')">
                <img src="${project.thumbnail}" class="w-full h-56 object-cover"
                     onerror="this.src='https://picsum.photos/id/201/600/400'">
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                        <i class="fa-solid fa-play text-emerald-600 text-2xl" style="margin-right:-3px"></i>
                    </div>
                </div>
                <div class="absolute bottom-3 left-3 bg-black/60 text-white px-3 py-1 rounded-xl text-xs flex items-center gap-1">
                    <i class="fa-solid fa-play text-[10px]"></i>
                    ${project.videoDuration ? formatDuration(project.videoDuration) : 'شاهد الفيديو'}
                </div>
                <div class="absolute top-4 right-4 px-4 py-1 rounded-3xl text-xs font-bold ${project.statusStyle}">
                    ${project.statusLabel}
                </div>
                ${project.verified
                    ? `<div class="absolute top-4 left-4 bg-white px-3 py-1 rounded-2xl text-xs font-bold flex items-center gap-1 shadow">
                           ✅ موثق
                       </div>`
                    : ''}
            </div>
            <div class="p-5">
                <h3 class="font-bold text-lg mb-1 line-clamp-2">${project.projectName}</h3>
                <p class="text-gray-500 text-sm line-clamp-2 mb-4">${project.projectDescription}</p>
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
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-2 text-sm text-gray-600">
                        <i class="fa-solid fa-users text-emerald-600"></i>
                        <span>${project.interestedInvestors} مستثمر مهتم</span>
                    </div>
                    <button onclick="openDetails('${project.id}')"
                        class="text-xs border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-xl font-bold transition flex items-center gap-1">
                        <i class="fa-solid fa-circle-info"></i> التفاصيل
                    </button>
                </div>
                <button onclick="contactWhatsApp('${project.phone}')"
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
    if (!videoUrl) return;
    const modal   = document.getElementById('videoModal');
    const videoEl = document.getElementById('projectVideo');
    const titleEl = document.getElementById('videoTitle');
    videoEl.src        = videoUrl;
    titleEl.textContent = title;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    videoEl.play();
}

function closeVideo() {
    const modal   = document.getElementById('videoModal');
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
    const project = loadedProjects.find(p => p.id === id);
    if (!project) return;

    const body = document.getElementById('detailsBody');
    body.innerHTML = `
        <div class="space-y-5 text-sm">
            <div>
                <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-user text-emerald-600"></i> بيانات صاحب المشروع
                </h4>
                <div class="bg-gray-50 rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    ${detailRow('الاسم', project.fullName)}
                    ${detailRow('التليفون', `<a href="tel:${project.phone}" class="text-emerald-600 font-bold">${project.phone}</a>`)}
                    ${detailRow('الإيميل', `<a href="mailto:${project.email}" class="text-emerald-600">${project.email}</a>`)}
                    ${detailRow('تاريخ التقديم', formatDate(project.createdAt))}
                </div>
            </div>
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
            <div>
                <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-money-bill text-emerald-600"></i> التفاصيل المالية
                </h4>
                <div class="bg-gray-50 rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    ${detailRow('المبلغ المطلوب', Number(project.amountNeeded).toLocaleString() + ' جنيه')}
                    ${detailRow('الحصة المطروحة', project.equityPercentage + '%')}
                    ${detailRow('نوع الشراكة', project.partnershipType)}
                </div>
            </div>
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

// ==========================================
// Helper functions
// ==========================================
function detailRow(label, value) {
    return `<div>
        <span class="text-gray-400 text-xs block">${label}</span>
        <span class="font-medium text-gray-800">${value}</span>
    </div>`;
}

function detailRowFull(label, value) {
    return `<div>
        <span class="text-gray-400 text-xs block mb-1">${label}</span>
        <p class="font-medium text-gray-800 leading-relaxed">${value}</p>
    </div>`;
}

function formatDuration(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
}

function formatDate(isoString) {
    if (!isoString) return '—';
    return new Date(isoString).toLocaleDateString('ar-EG', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
}

// ==========================================
// التواصل عبر واتساب
// ==========================================
function contactWhatsApp(phone) {
    let number = phone.replace(/\D/g, '');
    if (number.startsWith('0')) number = '2' + number;
    window.open(
        `https://wa.me/${number}?text=${encodeURIComponent('مرحبا، شفت مشروعك على StartupReally وعجبني! هنقدر نتكلم؟')}`,
        '_blank'
    );
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
    fetchProjects();

    setTimeout(() => {
        animateCounter('stat1', 247);
        animateCounter('stat2', 1850);
        animateCounter('stat3', 18.7, 'M');
        animateCounter('stat4', 98);
    }, 800);

    document.getElementById('videoModal').addEventListener('click', function (e) {
        if (e.target === this) closeVideo();
    });
    document.getElementById('detailsModal').addEventListener('click', function (e) {
        if (e.target === this) closeDetails();
    });

    console.log('%c✅ StartupReally متصل بالـ Backend!', 'color:#10b981; font-size:18px; font-weight:bold');
};
