/* Renders the shared sidebar + topbar for every mockup page.
   Usage: <script src="assets/shell.js" data-active="dashboard"></script>  */
(function () {
  var s = document.currentScript;
  var active = s.getAttribute('data-active') || '';

  var nav = [
    { type: 'label', text: 'Overview' },
    { id: 'dashboard',    href: 'dashboard.html',    icon: 'bi-grid-1x2-fill', text: 'Dashboard' },
    { id: 'appointments', href: 'appointments.html', icon: 'bi-calendar2-week', text: 'Appointments', pill: '18' },
    { type: 'label', text: 'Clinical' },
    { id: 'patients',     href: 'patient.html',      icon: 'bi-people-fill',   text: 'Patients' },
    { id: 'encounters',   href: '#',                 icon: 'bi-clipboard2-pulse', text: 'Encounters' },
    { id: 'risk',         href: 'risk.html',         icon: 'bi-activity',      text: 'Risk & Care', pill: '9' },
    { type: 'label', text: 'Revenue' },
    { id: 'claims',       href: 'claim.html',        icon: 'bi-receipt',       text: 'Claims', pill: '6' },
    { id: 'insurance',    href: '#',                 icon: 'bi-shield-check',  text: 'Insurance' },
    { type: 'label', text: 'Network' },
    { id: 'providers',    href: '#',                 icon: 'bi-person-badge',  text: 'Providers' },
    { id: 'facilities',   href: '#',                 icon: 'bi-hospital',      text: 'Facilities' }
  ];

  var links = nav.map(function (n) {
    if (n.type === 'label') return '<div class="side-label">' + n.text + '</div>';
    var cls = 'side-link' + (n.id === active ? ' active' : '');
    var pill = n.pill ? '<span class="pill">' + n.pill + '</span>' : '';
    return '<a class="' + cls + '" href="' + n.href + '"><i class="bi ' + n.icon + '"></i><span>' + n.text + '</span>' + pill + '</a>';
  }).join('');

  var sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.innerHTML =
      '<div class="brand">' +
        '<div class="logo"><i class="bi bi-heart-pulse-fill"></i></div>' +
        '<div><div class="name">CareFlow Pro</div><div class="sub">MSO Platform</div></div>' +
      '</div>' +
      '<div class="side-scroll">' + links + '</div>' +
      '<div class="side-foot">' +
        '<div class="av">DM</div>' +
        '<div><div class="nm">Dr. Dana Mercer</div><div class="rl">System Administrator</div></div>' +
      '</div>';
  }

  var topbar = document.querySelector('.topbar');
  if (topbar) {
    topbar.innerHTML =
      '<div class="search"><i class="bi bi-search"></i><input placeholder="Search patients, claims, providers…"></div>' +
      '<div class="spacer"></div>' +
      '<button class="icon-btn" title="Quick add"><i class="bi bi-plus-lg"></i></button>' +
      '<button class="icon-btn" title="Notifications"><i class="bi bi-bell"></i><span class="dot"></span></button>' +
      '<div class="me"><div class="av">DM</div><div><div class="nm">Dr. Dana Mercer</div><div class="rl">Administrator</div></div><i class="bi bi-chevron-down muted" style="font-size:.8rem;"></i></div>';
  }
})();
