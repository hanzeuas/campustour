const buildings = {
  vanOlstBorg: {
    name: "Van OlstBorg",
    code: "ZP07",
    description: "The social hub of Hanze.",
    descriptionFull: "One of the busiest buildings on campus, Van OlstBorg is where students study, meet friends and work on projects together. Its open spaces and lively atmosphere make it a central meeting point for the international community.",
    location: "Zernike Campus",
    tags: ["Marketing Management", "International Facility Management", "International Business", "International Finance & Control"],
    facilities: ["📚 Library", "🏛️ Atrium", "📖 Study Spots", "🛋️ Chill Area"],
    mapFile: "maps/van_olstborg.svg",
    images: ["images/olstborg-1.jpg", "images/olstborg-2.jpg", "images/olstborg-3.jpg"],
    videos: [],
    hotspots: [
      { id: "library", label: "Library", x: 50, y: 31, description: "Your go-to study spot.", descriptionFull: "Whether you're looking for books, online resources or simply a quiet place to focus, the library offers everything you need for studying and research. It's also a popular alternative to studying at home.", tags: ["Study", "Books", "Quiet zone"], images: [], videos: ["videos/library-1.mp4", "videos/library-2.mp4", "videos/library-3.mp4"] },
      { id: "atrium",  label: "Atrium",  x: 63, y: 45, description: "Where campus life happens.", descriptionFull: "The atrium is where students grab lunch, meet classmates, work on group projects or simply take a break. You'll find study areas, project tables and even table tennis and pool tables.", tags: ["Social", "Central", "Meeting point"], images: [], videos: ["videos/atrium-1.mp4", "videos/atrium-2.mp4"] },
      { id: "chill",   label: "Cafeteria", x: 42, y: 62, description: "Lunch with friends.", descriptionFull: "From healthy meals to vegetarian and halal options, the cafeteria is the perfect place to recharge between classes and catch up with friends.", tags: ["Lounge", "Relaxing", "Informal"], images: [], videos: ["videos/cafeteria-1.mp4", "videos/cafeteria-2.mp4"] },
    ]
  },
  vanDoorenVeste: {
    name: "Van DoorenVeste",
    code: "ZP11",
    description: "Innovation starts here.",
    descriptionFull: "Home to engineering, technology and creative programmes, Van DoorenVeste is where ideas become reality through hands-on learning and experimentation.",
    location: "Zernike Campus",
    tags: ["Creative Media & Game Technologies", "International Communication", "Mechanical Engineering", "Mechatronics", "Sensor Technology", "Electrical Engineering"],
    facilities: ["⚗️ Space Lab", "🔧 Makerspace", "🏭 Engineering Labs", "☕ Cafeteria"],
    mapFile: "maps/van_doorenveste.svg",
    images: ["images/doorenveste-1.jpg", "images/doorenveste-2.jpg", "images/doorenveste-3.jpg"],
    videos: [],
    hotspots: [
      {
        id: "makerspace",
        label: "Makerspace",
        code: "",
        x: 24, y: 56,
        description: "Create without limits.",
        descriptionFull: "Open to students from all programmes, the Makerspace lets you explore VR, 3D printing, laser cutting and physical prototyping. It's a place where creativity and technology come together.",
        tags: ["Making", "3D printing", "Hands-on"],
        images: [],
        videos: ["videos/makerspace-1.mp4", "videos/makerspace-2.mp4", "videos/makerspace-3.mp4", "videos/makerspace-4.mp4"]
      },
      {
        id: "spacelab",
        label: "Space Lab",
        code: "",
        x: 44, y: 38,
        description: "Experience the future.",
        descriptionFull: "Experiment with emerging technologies such as VR, motion capture and immersive media in one of Hanze's most innovative creative spaces.",
        tags: ["Lab", "Technology", "Engineering"],
        media: [
          { type: 'video', src: 'videos/spacelab-1.mp4' },
          { type: 'image', src: 'images/spacelab-1.jpg' },
        ]
      },
      {
        id: "engineeringlab",
        label: "Engineering Labs",
        code: "",
        x: 56, y: 65,
        description: "State-of-the-art labs for engineering students.",
        descriptionFull: "State-of-the-art labs for mechanical and electrical engineering students. Fully equipped with industry-standard machinery, testing rigs and simulation software.",
        tags: ["Engineering", "Lab", "Mechanical", "Electrical"],
        images: [],
        videos: ["videos/engineering-1.mp4", "videos/engineering-2.mp4", "videos/engineering-3.mp4"]
      },
    ]
  },
  willem: {
    name: "Willem-Alexander Sports Centre",
    code: "",
    description: "Stay active, your way.",
    descriptionFull: "From team sports to fitness and swimming, the Willem-Alexander Sports Centre offers facilities for every type of athlete and is home to ACLO, one of the largest student sports organisations in the Netherlands.",
    location: "Zernike Campus",
    tags: ["Sport Studies"],
    facilities: ["🏀 Sports Hall", "🏋️ Gym", "🏊 Swimming Pool"],
    mapFile: "maps/sports_centre.svg",
    images: ["images/sports-1.jpg", "images/sports-2.jpg", "images/sports-3.jpg"],
    videos: [],
    hotspots: [
      { id: "sportshall",   label: "Sports Hall",   code: "", x: 40, y: 46, description: "Home to over 100 sports.", descriptionFull: "Practice halls, courts and training facilities host everything from volleyball and basketball to martial arts and group fitness classes.", tags: ["Sports", "Training", "Team"], images: [], videos: ["videos/sports-1.mp4"] },
      { id: "gym",          label: "Gym",           code: "", x: 22, y: 62, description: "Train whenever you want.", descriptionFull: "The fitness centre provides students with modern equipment and plenty of opportunities to stay healthy alongside their studies.", tags: ["Fitness", "Gym", "Weights"], images: [], videos: ["videos/gym-1.mp4"] },
      { id: "swimmingpool", label: "Swimming Pool", code: "", x: 64, y: 58, description: "Dive right in.", descriptionFull: "Students with an ACLO membership can make use of the swimming pool for recreation, training and water sports.", tags: ["Swimming", "Water sports"], media: [{ type: 'video', src: 'videos/pool-1.mp4' }, { type: 'image', src: 'images/pool-1.jpg' }, { type: 'image', src: 'images/pool-2.jpg' }] },
    ]
  },
  wiebenga: {
    name: "Wiebenga",
    code: "",
    description: "Learning through practice.",
    descriptionFull: "Home to healthcare programmes, Wiebenga combines theory and hands-on experience to prepare students for professional practice.",
    location: "City Campus",
    tags: ["Physiotherapy"],
    facilities: ["🏥 Practice Rooms", "📖 Study Rooms"],
    mapFile: "",
    images: ["images/wiebenga-1.jpg", "images/wiebenga-2.jpg", "images/wiebenga-3.jpg"],
    videos: ["videos/wiebenga-1.mp4", "videos/wiebenga-2.mp4", "videos/wiebenga-3.mp4", "videos/wiebenga-4.mp4"],
    hotspots: [
      { id: "clinic",    label: "Clinic",     code: "", x: 45, y: 40, description: "Train like a professional.", descriptionFull: "Modern practice spaces allow students to develop clinical skills and gain experience in realistic healthcare environments.", tags: ["Clinic", "Practice", "Health"], images: ["images/wiebenga-1.jpg"], videos: [] },
      { id: "studyroom", label: "Study Room", code: "", x: 60, y: 60, description: "Focus mode on.", descriptionFull: "Quiet and comfortable study spaces make it easy to prepare for exams, collaborate with classmates and stay productive.", tags: ["Study", "Quiet", "Group work"], images: ["images/wiebenga-2.jpg"], videos: [] },
    ]
  },
  minerva: {
    name: "Minerva Art Academy",
    code: "",
    description: "A creative sanctuary in the city.",
    descriptionFull: "A creative sanctuary in the heart of the city for artists, designers and illustrators. Minerva offers open studios, gallery spaces and a vibrant creative community.",
    location: "City Campus",
    tags: ["Design", "Fine Art"],
    facilities: ["🔬 Workshops", "🎨 Art Studio"],
    mapFile: "maps/minerva_geemente.svg",
    images: ["images/minerva-1.jpg", "images/minerva-2.jpg", "images/minerva-3.jpg"],
    videos: [],
    hotspots: [
      { id: "studio",    label: "Art Studio", x: 30, y: 55, description: "Open studio for painting and sculpture.", descriptionFull: "Open studio space for painting, drawing and sculpture. Students have 24/7 access during term time, with a wide range of materials and large format workspaces.", tags: ["Studio", "Art", "Creative"], images: [], videos: ["videos/studio-1.mp4", "videos/studio-2.mp4", "videos/studio-3.mp4"] },
      { id: "workshops", label: "Workshops",  x: 65, y: 40, description: "Creative workshops for students.", descriptionFull: "Creative workshops for students to explore various art forms and techniques in a collaborative environment.", tags: ["Workshop", "Creative", "Collaborative"], images: [], videos: ["videos/workshop-1.mp4", "videos/workshop-2.mp4", "videos/workshop-3.mp4"] },
    ]
  },
  claus: {
    name: "Prince Claus Conservatoire",
    code: "",
    description: "A world-class music school.",
    descriptionFull: "A world-class music school, home to classical, jazz and pop musicians. Features a concert hall, soundproofed practice rooms and recording studios.",
    location: "City Campus",
    tags: ["Classical Music", "Jazz", "Master of Music"],
    facilities: ["🎹 Practice Rooms", "🎼 Concert Hall", "🎤 Recording Studio"],
    mapFile: "maps/pcc.svg",
    images: ["images/pcc-1.jpg", "images/pcc-2.jpg", "images/pcc-3.jpg"],
    videos: [],
    hotspots: [
      { id: "concerthall",  label: "Concert Hall",      code: "", x: 52, y: 42, description: "Main hall for concerts and recitals.", descriptionFull: "Main performance hall for concerts, recitals and student showcases. Professionally acoustically designed with seating for a large audience.", tags: ["Performance", "Concert", "Music"], images: [], videos: ["videos/hall-1.mp4"] },
      { id: "practiceroom", label: "Practice Rooms",    code: "", x: 30, y: 58, description: "Soundproofed rooms for practice.", descriptionFull: "Soundproofed rooms for individual instrument practice, available to book by the hour. Equipped with upright pianos and music stands.", tags: ["Practice", "Soundproof", "Instrument"], images: [], videos: ["videos/practice-1.mp4"] },
      { id: "recording",    label: "Recording Studios", code: "", x: 78, y: 30, description: "Professional recording studios.", descriptionFull: "Professional recording studios equipped with industry-standard equipment for music production, mixing and mastering.", tags: ["Recording", "Production", "Studio"], images: [], videos: ["videos/recording-1.mp4"] },
    ]
  }
};

const questions = [
  {
    question: "Which field interests you the most?",
    hint: "Pick up to 2",
    type: "checkbox",
    max: 2,
    options: [
      { emoji: "🧑‍💻", label: "Science and Engineering",     buildings: ["vanDoorenVeste"] },
      { emoji: "🗣️",  label: "Language and Communication",  buildings: ["vanDoorenVeste", "vanOlstBorg"] },
      { emoji: "🤸",  label: "Health and Sports",           buildings: ["willem", "wiebenga"] },
      { emoji: "🧑‍🎨", label: "Arts and Culture",           buildings: ["minerva", "claus"] },
      { emoji: "💼",  label: "Business and Economics",      buildings: ["vanOlstBorg"] },
      { emoji: "🌍",  label: "Behaviour and Society",       buildings: ["vanOlstBorg", "vanDoorenVeste"] },
    ]
  },
  {
    question: "How do you do your best work?",
    hint: "Pick up to 2",
    type: "checkbox",
    max: 2,
    options: [
      { emoji: "🧑🏻‍💻", label: "Creating digital experiences", subtitle: "Coding, designing",                         buildings: ["vanDoorenVeste"] },
      { emoji: "🥼",   label: "In a lab or workshop",          subtitle: "Hands-on, experimenting, building things", buildings: ["vanDoorenVeste"] },
      { emoji: "🎙️",  label: "In a studio or on stage",       subtitle: "Performing, creating, expressing ideas",   buildings: ["minerva", "claus"] },
      { emoji: "🫂",   label: "Supporting others",             subtitle: "Health, wellbeing, helping people improve",buildings: ["wiebenga", "willem"] },
      { emoji: "🏋️‍♂️", label: "In an active environment",     subtitle: "Movement, coaching, practical learning",   buildings: ["willem"] },
      { emoji: "🤝",   label: "With other people",             subtitle: "Collaborating, communicating, leading",    buildings: ["vanOlstBorg", "vanDoorenVeste"] },
    ]
  },
  {
    question: "What kind of future excites you most?",
    type: "radio",
    options: [
      { emoji: "💼",    label: "Starting my own business",           buildings: ["vanOlstBorg"] },
      { emoji: "🎨",    label: "Performing or expressing creativity", buildings: ["minerva", "claus"] },
      { emoji: "🧑‍🤝‍🧑", label: "Helping people directly",           buildings: ["wiebenga", "willem"] },
      { emoji: "🧑🏻‍💻", label: "Building new technology",            buildings: ["vanDoorenVeste"] },
      { emoji: "🌎",    label: "Working internationally",             buildings: ["vanOlstBorg", "vanDoorenVeste"] },
    ]
  },
];

const buildingList = [
  { key: "vanDoorenVeste", campus: "Zernike Campus" },
  { key: "vanOlstBorg",    campus: "Zernike Campus" },
  { key: "willem",         campus: "Zernike Campus" },
  { key: "minerva",        campus: "City Campus" },
  { key: "claus",          campus: "City Campus" },
  { key: "wiebenga",       campus: "City Campus" },
];

function openExplore() {
  goTo('screen-explore');
  filterBuildings('Zernike Campus');
}

function filterBuildings(campus) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === campus);
  });
  const filtered = buildingList.filter(b => b.campus === campus);
  const container = document.getElementById('explore-list');
  container.innerHTML = filtered.map(({ key }) => {
    const b = buildings[key];
    const preview = b.images && b.images.length > 0
      ? `<img class="result-image" src="${b.images[0]}" />`
      : `<div class="result-image"></div>`;
    return `
      <div class="result-card" onclick="openBuildingSheet('${key}')">
        ${preview}
        <div class="result-text">
          <span class="result-name">${b.name}</span>
          <span class="result-location">${b.location}</span>
        </div>
      </div>`;
  }).join('');
}

let currentIndex = 0;
let answers = [];

function startQuiz() {
  currentIndex = 0;
  answers = new Array(questions.length).fill(null).map(() => []);
  renderQuestion();
  goTo('screen-quiz');
}

function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

function renderQuestion() {
  const q = questions[currentIndex];
  const quizBody = document.querySelector('#screen-quiz .quiz-body');
  if (quizBody) quizBody.scrollTop = 0;

  const bar = document.querySelector('.progress-bar-row');
  bar.innerHTML = questions.map((_, i) => {
    let cls = 'progress-segment';
    if (i < currentIndex) cls += ' done';
    else if (i === currentIndex) cls += ' active';
    return `<div class="${cls}"></div>`;
  }).join('');

  document.querySelector('.quiz-question').textContent = q.question;
  document.querySelector('.quiz-hint').textContent = q.hint || '';

  const list = document.querySelector('.options-list');
  list.innerHTML = q.options.map((opt, i) => {
    const isSelected = answers[currentIndex].includes(i);
    const indicator = q.type === 'radio'
      ? `<div class="option-radio"></div>`
      : `<div class="option-checkbox">${isSelected ? '✓' : ''}</div>`;
    return `
      <div class="option-card ${isSelected ? 'selected' : ''}" onclick="selectOption(${i})">
        <div class="option-left">
          <span class="option-emoji">${opt.emoji}</span>
          <div class="option-text">
            <span class="option-label">${opt.label}</span>
            ${opt.subtitle ? `<span class="option-subtitle">${opt.subtitle}</span>` : ''}
          </div>
        </div>
        ${indicator}
      </div>`;
  }).join('');

  requestAnimationFrame(() => {
    const body   = document.querySelector('#screen-quiz .quiz-body');
    const footer = document.querySelector('#screen-quiz .quiz-footer');
    if (!body || !footer) return;
    const top       = body.getBoundingClientRect().top;
    const footerTop = footer.getBoundingClientRect().top;
    body.style.height = (footerTop - top - 12) + 'px';
  });
}

function selectOption(index) {
  const q = questions[currentIndex];
  const selected = answers[currentIndex];
  if (q.type === 'radio') {
    answers[currentIndex] = [index];
  } else {
    const pos = selected.indexOf(index);
    if (pos === -1) {
      if (q.max && selected.length >= q.max) return;
      selected.push(index);
    } else {
      selected.splice(pos, 1);
    }
  }
  renderQuestion();
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    const results = calculateResults();
    goTo('screen-loading');
    setTimeout(() => showResults(results), 2200);
  }
}

function calculateResults() {
  const scores = {};
  Object.keys(buildings).forEach(key => scores[key] = 0);
  questions.forEach((q, qIndex) => {
    answers[qIndex].forEach(optIndex => {
      const opt = q.options[optIndex];
      opt.buildings.forEach(b => { scores[b] = (scores[b] || 0) + 1; });
    });
  });
  return Object.entries(scores)
    .filter(([, score]) => score > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([key, score]) => ({ ...buildings[key], key, score }));
}

function showResults(results) {
  goTo('screen-results');
  const container = document.getElementById('results-list');
  container.innerHTML = results.map((b, index) => {
    const preview = b.images && b.images.length > 0
      ? `<img class="result-image" src="${b.images[0]}" />`
      : `<div class="result-image"></div>`;
    return `
      <div class="result-card" onclick="openBuildingSheet('${b.key}')">
        ${preview}
        <div class="result-text">
          <span class="result-name">${b.name}</span>
          <span class="result-location">${b.location}</span>
        </div>
        <span class="result-badge ${index === 0 ? 'badge-top' : 'badge-match'}">
          ${index === 0 ? 'Top pick' : 'Match'}
        </span>
      </div>`;
  }).join('');
}

function buildGallery(containerId, images, videos, mediaOverride) {
  const container = document.getElementById(containerId);

  const media = mediaOverride || [
    ...(images || []).map(src => ({ type: 'image', src })),
    ...(videos || []).map(src => ({ type: 'video', src })),
  ];

  const count = media.length;

  if (count === 0) {
    container.innerHTML = `
      <div class="gallery-track">
        <div class="gallery-slide"></div>
      </div>`;
    return;
  }

  container.innerHTML = `
    <div class="gallery-track" id="${containerId}-track">
      ${media.map(m => m.type === 'image'
        ? `<img class="gallery-slide" src="${m.src}" loading="lazy" />`
        : `<video class="gallery-slide" src="${m.src}" autoplay loop muted playsinline preload="metadata" style="pointer-events:none;"></video>`
      ).join('')}
    </div>
  `;

  if (count <= 1) {
    const singleTrack = document.getElementById(`${containerId}-track`);
    if (singleTrack) {
      singleTrack.style.overflowX = 'hidden';
      singleTrack.style.padding = '0 1.25rem';
      const slide = singleTrack.querySelector('.gallery-slide');
      if (slide) slide.style.width = '100%';
    }
    return;
  }

  const track = document.getElementById(`${containerId}-track`);
  track.addEventListener('scroll', () => {
    const index = Math.round(track.scrollLeft / track.offsetWidth);
    const vids = track.querySelectorAll('video');
    vids.forEach((v, i) => { if (i === index) v.play(); });
  });
}

let buildingExpanded = false;

function openBuildingSheet(key) {
  const b = buildings[key];

  document.getElementById('building-name').textContent = b.name;
  document.getElementById('building-code').textContent = b.code || '';
  document.getElementById('building-description').textContent = b.description;
  document.getElementById('building-tags').innerHTML = b.tags
    .map(tag => `<span class="programme-tag">${tag}</span>`).join('');
  buildGallery('building-gallery', b.images || [], b.videos || []);
  document.getElementById('building-facilities').style.display = 'none';

  const hasExplore = b.mapFile || (b.hotspots && b.hotspots.length > 0);
  document.getElementById('building-explore-btn').style.display = hasExplore ? '' : 'none';
  document.getElementById('building-explore-btn').onclick = () => {
    closeBuildingSheet();
    if (!b.mapFile) {
      setTimeout(() => openSpaces(key), 400);
    } else {
      setTimeout(() => openMap(key), 400);
    }
  };

  buildingExpanded = false;
  const buildingSheet = document.getElementById('building-sheet');
  buildingSheet.classList.remove('expanded');
  buildingSheet.dataset.key = key;
  document.getElementById('building-expand-icon').textContent = '⤢';

  const overlay = document.getElementById('building-overlay');
  overlay.classList.add('open');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => buildingSheet.classList.add('visible'));
  });
}

function closeBuildingSheet(event) {
  if (event && event.target !== document.getElementById('building-overlay')) return;
  const buildingSheet = document.getElementById('building-sheet');
  buildingSheet.classList.remove('visible');
  setTimeout(() => {
    document.getElementById('building-overlay').classList.remove('open');
    buildingSheet.classList.remove('expanded');
    buildingExpanded = false;
  }, 350);
}

function toggleBuildingExpand() {
  buildingExpanded = !buildingExpanded;
  const buildingSheet = document.getElementById('building-sheet');
  const buildingIcon = document.getElementById('building-expand-icon');
  const key = buildingSheet.dataset.key;
  const b = buildings[key];

  buildingSheet.classList.toggle('expanded', buildingExpanded);
  buildingIcon.textContent = buildingExpanded ? '⤡' : '⤢';

  buildingSheet.querySelectorAll('.gallery-slide').forEach(el => {
    el.style.height = buildingExpanded ? '280px' : '160px';
  });

  document.getElementById('building-description').textContent = buildingExpanded
    ? (b.descriptionFull || b.description)
    : b.description;

  const facilitiesEl = document.getElementById('building-facilities');
  const facilitiesList = document.getElementById('building-facilities-list');

  if (buildingExpanded && b.facilities && b.facilities.length > 0) {
    facilitiesList.innerHTML = b.facilities
      .map(f => `<span class="facility-tag">${f}</span>`).join('');
    facilitiesEl.style.display = 'flex';
  } else {
    facilitiesEl.style.display = 'none';
  }
}

function openSpaces(key) {
  const b = buildings[key];
  lastScreen = document.querySelector('.screen.active')?.id || 'screen-results';

  buildGallery('spaces-gallery', [], b.videos || []);

  document.getElementById('spaces-name').textContent = b.name;
  document.getElementById('spaces-description').textContent = b.descriptionFull || b.description;
  document.getElementById('spaces-tags').innerHTML = (b.tags || [])
    .map(t => `<span class="programme-tag">${t}</span>`).join('');

  const facilitiesEl = document.getElementById('spaces-facilities');
  const facilitiesList = document.getElementById('spaces-facilities-list');
  if (b.facilities && b.facilities.length > 0) {
    facilitiesList.innerHTML = b.facilities
      .map(f => `<span class="facility-tag">${f}</span>`).join('');
    facilitiesEl.style.display = 'flex';
  } else {
    facilitiesEl.style.display = 'none';
  }

  goTo('screen-spaces');
}

function closeSpaces() {
  goTo(lastScreen);
}

let mapX = 0;
let mapY = 0;
let mapScale = 1;
let lastScreen = 'screen-results';

function positionHotspotLayer() {
  const img = document.getElementById('map-bg');
  const container = document.getElementById('screen-map');
  const layer = document.getElementById('hotspot-layer');

  const cW = container.clientWidth;
  const cH = container.clientHeight;
  const nW = img.naturalWidth;
  const nH = img.naturalHeight;
  if (!nW || !nH) return;

  let w, h, l, t;
  if (nW / nH > cW / cH) {
    w = cW; h = cW * nH / nW;
    l = 0; t = (cH - h) / 2;
  } else {
    h = cH; w = cH * nW / nH;
    l = (cW - w) / 2; t = 0;
  }

  layer.style.inset = 'auto';
  layer.style.left   = l + 'px';
  layer.style.top    = t + 'px';
  layer.style.width  = w + 'px';
  layer.style.height = h + 'px';
}

function openMap(key) {
  const b = buildings[key];
  lastScreen = document.querySelector('.screen.active')?.id || 'screen-results';

  document.getElementById('map-title').textContent = b.name;

  const mapImg = document.getElementById('map-bg');
  mapImg.onload = positionHotspotLayer;
  mapImg.src = b.mapFile;
  if (mapImg.complete && mapImg.naturalWidth) positionHotspotLayer();

  mapX = 0;
  mapY = 0;
  mapScale = 1;
  updateMapTransform();

  const layer = document.getElementById('hotspot-layer');
  layer.innerHTML = b.hotspots.map(h => `
    <div class="hotspot-pin" style="left:${h.x}%; top:${h.y}%;"
         onclick="openHotspotSheet('${key}','${h.id}')">
      <div class="hotspot-pulse"></div>
      <div class="hotspot-label">${h.label}</div>
    </div>
  `).join('');

  goTo('screen-map');
  initMapDrag();
}

function updateMapTransform() {
  const img = document.getElementById('map-bg');
  const layer = document.getElementById('hotspot-layer');
  const t = `translate(${mapX}px, ${mapY}px) scale(${mapScale})`;
  img.style.transform = t;
  layer.style.transform = t;
}

function closeMap() {
  goTo(lastScreen);
}

function initMapDrag() {
  const container = document.getElementById('screen-map');
  let isDragging = false;
  let startX, startY;
  let lastDist = 0;

  const fresh = container.cloneNode(true);
  container.parentNode.replaceChild(fresh, container);
  const c = document.getElementById('screen-map');

  function clampPos() {
    const maxX = c.offsetWidth  * (mapScale - 1) / 2;
    const maxY = c.offsetHeight * (mapScale - 1) / 2;
    mapX = Math.min(maxX, Math.max(-maxX, mapX));
    mapY = Math.min(maxY, Math.max(-maxY, mapY));
  }

  c.addEventListener('mousedown',  e => { isDragging = true; startX = e.clientX - mapX; startY = e.clientY - mapY; });
  c.addEventListener('mousemove',  e => { if (!isDragging) return; mapX = e.clientX - startX; mapY = e.clientY - startY; clampPos(); updateMapTransform(); });
  c.addEventListener('mouseup',    () => isDragging = false);
  c.addEventListener('mouseleave', () => isDragging = false);

  c.addEventListener('touchstart', e => {
    if (e.touches.length === 1) { isDragging = true; startX = e.touches[0].clientX - mapX; startY = e.touches[0].clientY - mapY; }
    if (e.touches.length === 2) { lastDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY); }
  });

  c.addEventListener('touchmove', e => {
    e.preventDefault();
    if (e.touches.length === 1 && isDragging) { mapX = e.touches[0].clientX - startX; mapY = e.touches[0].clientY - startY; clampPos(); updateMapTransform(); }
    if (e.touches.length === 2) {
      const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      mapScale = Math.min(Math.max(mapScale * (dist / lastDist), 0.5), 4);
      lastDist = dist;
      clampPos();
      updateMapTransform();
    }
  }, { passive: false });

  c.addEventListener('touchend', () => isDragging = false);
}

let hotspotExpanded = false;

function openHotspotSheet(buildingKey, hotspotId) {
  const b = buildings[buildingKey];
  const h = b.hotspots.find(h => h.id === hotspotId);

  document.getElementById('hotspot-name').textContent = h.label;
  document.getElementById('hotspot-code').textContent = h.code || '';
  document.getElementById('hotspot-description').textContent = h.description;
  document.getElementById('hotspot-tags').innerHTML = h.tags
    .map(tag => `<span class="programme-tag">${tag}</span>`).join('');
  buildGallery('hotspot-gallery', h.images || [], h.videos || [], h.media || null);

  hotspotExpanded = false;
  const hotspotSheet = document.getElementById('hotspot-sheet');
  hotspotSheet.classList.remove('expanded');
  hotspotSheet.dataset.buildingKey = buildingKey;
  hotspotSheet.dataset.hotspotId = hotspotId;
  document.getElementById('hotspot-expand-icon').textContent = '⤢';

  const overlay = document.getElementById('hotspot-overlay');
  overlay.classList.add('open');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => hotspotSheet.classList.add('visible'));
  });
}

function closeHotspotSheet(event) {
  if (event && event.target !== document.getElementById('hotspot-overlay')) return;
  const hotspotSheet = document.getElementById('hotspot-sheet');
  hotspotSheet.classList.remove('visible');
  setTimeout(() => {
    document.getElementById('hotspot-overlay').classList.remove('open');
    hotspotSheet.classList.remove('expanded');
    hotspotExpanded = false;
  }, 350);
}

function toggleHotspotExpand() {
  hotspotExpanded = !hotspotExpanded;
  const hotspotSheet = document.getElementById('hotspot-sheet');
  const hotspotIcon = document.getElementById('hotspot-expand-icon');
  const key = hotspotSheet.dataset.buildingKey;
  const hid = hotspotSheet.dataset.hotspotId;
  const h = buildings[key].hotspots.find(h => h.id === hid);

  hotspotSheet.classList.toggle('expanded', hotspotExpanded);
  hotspotIcon.textContent = hotspotExpanded ? '⤡' : '⤢';

  hotspotSheet.querySelectorAll('.gallery-slide').forEach(el => {
    el.style.height = hotspotExpanded ? '280px' : '160px';
  });

  document.getElementById('hotspot-description').textContent = hotspotExpanded
    ? (h.descriptionFull || h.description)
    : h.description;
}
