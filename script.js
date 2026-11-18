const addressForm = document.getElementById('addressForm');
const addressInput = document.getElementById('addressInput');
const settingsButton = document.getElementById('settingsButton');
const settingsPanel = document.getElementById('settingsPanel');
const languageSelect = document.getElementById('languageSelect');
const themeSelect = document.getElementById('themeSelect');
const searchEngineSelect = document.getElementById('searchEngineSelect');
const historyList = document.getElementById('historyList');
const emptyHistory = document.getElementById('emptyHistory');
const clearHistoryButton = document.getElementById('clearHistoryButton');
const shortcutsList = document.getElementById('shortcutsList');
const shortcutToggleButton = document.getElementById('shortcutToggleButton');
const shortcutForm = document.getElementById('shortcutForm');
const shortcutNameInput = document.getElementById('shortcutName');
const shortcutUrlInput = document.getElementById('shortcutUrl');

const translations = {
  en: {
    settings: 'Settings', language: 'Language', theme: 'Theme', searchEngine: 'Search engine',
    light: 'Light', dark: 'Dark', eyebrow: 'EXPLORE THE WEB',
    description: 'Enter an address to open it in a new tab, or search the web.',
    inputLabel: 'Web address or search', placeholder: 'https://example.com or search the web',
    go: 'Go', examples: 'Try:', exampleAddress: 'wikipedia.org', or: 'or', exampleSearch: "today's weather",
    shortcuts: 'Shortcuts', shortcutName: 'Shortcut name', shortcutNamePlaceholder: 'Name',
    shortcutUrl: 'Website address', shortcutUrlPlaceholder: 'https://example.com', addShortcut: 'Add', shortcutAddButton: 'Add shortcut',
    deleteShortcut: 'Delete shortcut', invalidShortcut: 'Enter a valid web address starting with http:// or https://.',
    recentSearches: 'Recent searches', clearHistory: 'Clear history', confirmClearHistory: 'Are you sure you want to clear all search history?', emptyHistory: 'Your searches will appear here.',
    deleteSearch: 'Delete search', invalidProtocol: 'Please enter a web address starting with http:// or https://.',
    invalidAddress: 'Enter a valid web address or search phrase.'
  },
  tr: {
    settings: 'Ayarlar', language: 'Dil', theme: 'Tema', searchEngine: 'Arama motoru',
    light: 'Açık', dark: 'Koyu', eyebrow: "WEB'İ KEŞFET",
    description: 'Açmak için bir adres gir veya web’de arama yap.', inputLabel: 'Web adresi veya arama',
    placeholder: 'https://example.com veya web’de ara', go: 'Git', examples: 'Örnek:',
    exampleAddress: 'wikipedia.org', or: 'veya', exampleSearch: 'bugün hava nasıl',
    shortcuts: 'Kısayollar', shortcutName: 'Kısayol adı', shortcutNamePlaceholder: 'Ad',
    shortcutUrl: 'Web sitesi adresi', shortcutUrlPlaceholder: 'https://example.com', addShortcut: 'Ekle', shortcutAddButton: 'Kısayol ekle',
    deleteShortcut: 'Kısayolu sil', invalidShortcut: 'http:// veya https:// ile başlayan geçerli bir web adresi gir.',
    recentSearches: 'Son aramalar', clearHistory: 'Geçmişi temizle', confirmClearHistory: 'Tüm arama geçmişini silmek istediğinizden emin misiniz?', emptyHistory: 'Aramaların burada görünür.',
    deleteSearch: 'Aramayı sil', invalidProtocol: 'Lütfen http:// veya https:// ile başlayan bir web adresi gir.',
    invalidAddress: 'Geçerli bir web adresi veya arama metni gir.'
  },
  de: {
    settings: 'Einstellungen', language: 'Sprache', theme: 'Design', searchEngine: 'Suchmaschine',
    light: '*****', dark: 'Dunkel', eyebrow: 'DAS WEB ENTDECKEN',
    description: 'Gib eine Adresse ein, um sie in einem neuen Tab zu öffnen, oder suche im Web.',
    inputLabel: 'Webadresse oder Suchbegriff', placeholder: 'https://example.com oder im Web suchen',
    go: 'Los', examples: 'Zum Beispiel:', exampleAddress: 'wikipedia.org', or: 'oder', exampleSearch: 'Wetter heute',
    shortcuts: 'Verknüpfungen', shortcutName: 'Name der Verknüpfung', shortcutNamePlaceholder: 'Name',
    shortcutUrl: 'Webseitenadresse', shortcutUrlPlaceholder: 'https://example.com', addShortcut: 'Hinzufügen', shortcutAddButton: 'Verknüpfung hinzufügen',
    deleteShortcut: 'Verknüpfung löschen', invalidShortcut: 'Gib eine gültige Webadresse mit http:// oder https:// ein.',
    recentSearches: 'Letzte Suchanfragen', clearHistory: 'Verlauf löschen', confirmClearHistory: 'Möchtest du wirklich den gesamten Suchverlauf löschen?', emptyHistory: 'Deine Suchanfragen erscheinen hier.',
    deleteSearch: 'Suchanfrage löschen', invalidProtocol: 'Bitte gib eine Webadresse ein, die mit http:// oder https:// beginnt.',
    invalidAddress: 'Gib eine gültige Webadresse oder einen Suchbegriff ein.'
  },
  fr: {
    settings: 'Paramètres', language: 'Langue', theme: 'Thème', searchEngine: 'Moteur de recherche',
    light: 'Clair', dark: 'Sombre', eyebrow: 'EXPLOREZ LE WEB',
    description: 'Saisissez une adresse pour l’ouvrir dans un nouvel onglet, ou faites une recherche sur le Web.',
    inputLabel: 'Adresse Web ou recherche', placeholder: 'https://example.com ou rechercher sur le Web',
    go: 'OK', examples: 'Essayez :', exampleAddress: 'wikipedia.org', or: 'ou', exampleSearch: 'la météo du jour',
    shortcuts: 'Raccourcis', shortcutName: 'Nom du raccourci', shortcutNamePlaceholder: 'Nom',
    shortcutUrl: 'Adresse du site', shortcutUrlPlaceholder: 'https://example.com', addShortcut: 'Ajouter', shortcutAddButton: 'Ajouter un raccourci',
    deleteShortcut: 'Supprimer le raccourci', invalidShortcut: 'Saisissez une adresse Web valide commençant par http:// ou https://.',
    recentSearches: 'Recherches récentes', clearHistory: 'Effacer l’historique', confirmClearHistory: 'Voulez-vous vraiment effacer tout l’historique de recherche ?', emptyHistory: 'Vos recherches apparaîtront ici.',
    deleteSearch: 'Supprimer la recherche', invalidProtocol: 'Saisissez une adresse Web commençant par http:// ou https://.',
    invalidAddress: 'Saisissez une adresse Web ou une expression de recherche valide.'
  },
  es: {
    settings: 'Configuración', language: 'Idioma', theme: 'Tema', searchEngine: 'Motor de búsqueda',
    light: 'Claro', dark: 'Oscuro', eyebrow: 'EXPLORA LA WEB',
    description: 'Introduce una dirección para abrirla en una pestaña nueva o busca en la web.',
    inputLabel: 'Dirección web o búsqueda', placeholder: 'https://example.com o buscar en la web',
    go: 'Ir', examples: 'Prueba:', exampleAddress: 'wikipedia.org', or: 'o', exampleSearch: 'el tiempo de hoy',
    shortcuts: 'Accesos directos', shortcutName: 'Nombre del acceso directo', shortcutNamePlaceholder: 'Nombre',
    shortcutUrl: 'Dirección del sitio web', shortcutUrlPlaceholder: 'https://example.com', addShortcut: 'Añadir', shortcutAddButton: 'Añadir acceso directo',
    deleteShortcut: 'Eliminar acceso directo', invalidShortcut: 'Introduce una dirección web válida que empiece por http:// o https://.',
    recentSearches: 'Búsquedas recientes', clearHistory: 'Borrar historial', confirmClearHistory: '¿Seguro que quieres borrar todo el historial de búsqueda?', emptyHistory: 'Tus búsquedas aparecerán aquí.',
    deleteSearch: 'Eliminar búsqueda', invalidProtocol: 'Introduce una dirección web que empiece por http:// o https://.',
    invalidAddress: 'Introduce una dirección web o una búsqueda válida.'
  },
  it: {
    settings: 'Impostazioni', language: 'Lingua', theme: 'Tema', searchEngine: 'Motore di ricerca',
    light: 'Chiaro', dark: 'Scuro', eyebrow: 'ESPLORA IL WEB',
    description: 'Inserisci un indirizzo per aprirlo in una nuova scheda oppure cerca sul web.',
    inputLabel: 'Indirizzo web o ricerca', placeholder: 'https://example.com o cerca sul web',
    go: 'Vai', examples: 'Prova:', exampleAddress: 'wikipedia.org', or: 'oppure', exampleSearch: 'meteo di oggi',
    shortcuts: 'Collegamenti rapidi', shortcutName: 'Nome del collegamento', shortcutNamePlaceholder: 'Nome',
    shortcutUrl: 'Indirizzo del sito web', shortcutUrlPlaceholder: 'https://example.com', addShortcut: 'Aggiungi', shortcutAddButton: 'Aggiungi collegamento',
    deleteShortcut: 'Elimina collegamento', invalidShortcut: 'Inserisci un indirizzo web valido che inizi con http:// o https://.',
    recentSearches: 'Ricerche recenti', clearHistory: 'Cancella cronologia', confirmClearHistory: 'Vuoi davvero cancellare tutta la cronologia delle ricerche?', emptyHistory: 'Le tue ricerche appariranno qui.',
    deleteSearch: 'Elimina ricerca', invalidProtocol: 'Inserisci un indirizzo web che inizi con http:// o https://.',
    invalidAddress: 'Inserisci un indirizzo web o una frase di ricerca valida.'
  },
  ru: {
    settings: 'Настройки', language: 'Язык', theme: 'Тема', searchEngine: 'Поисковая система',
    light: 'Светлая', dark: 'Тёмная', eyebrow: 'ИССЛЕДУЙТЕ ИНТЕРНЕТ',
    description: 'Введите адрес, чтобы открыть его в новой вкладке, или выполните поиск в интернете.',
    inputLabel: 'Веб-адрес или поисковый запрос', placeholder: 'https://example.com или поиск в интернете',
    go: 'Перейти', examples: 'Например:', exampleAddress: 'wikipedia.org', or: 'или', exampleSearch: 'погода сегодня',
    shortcuts: 'Ярлыки', shortcutName: 'Название ярлыка', shortcutNamePlaceholder: 'Название',
    shortcutUrl: 'Адрес сайта', shortcutUrlPlaceholder: 'https://example.com', addShortcut: 'Добавить', shortcutAddButton: 'Добавить ярлык',
    deleteShortcut: 'Удалить ярлык', invalidShortcut: 'Введите корректный веб-адрес, начинающийся с http:// или https://.',
    recentSearches: 'Недавние запросы', clearHistory: 'Очистить историю', confirmClearHistory: 'Вы действительно хотите удалить всю историю поиска?', emptyHistory: 'Ваши запросы появятся здесь.',
    deleteSearch: 'Удалить запрос', invalidProtocol: 'Введите веб-адрес, начинающийся с http:// или https://.',
    invalidAddress: 'Введите корректный веб-адрес или поисковый запрос.'
  },
  ar: {
    settings: 'الإعدادات', language: 'اللغة', theme: 'المظهر', searchEngine: 'محرك البحث',
    light: 'فاتح', dark: 'داكن', eyebrow: 'استكشف الويب',
    description: 'أدخل عنوانًا لفتحه في علامة تبويب جديدة، أو ابحث في الويب.',
    inputLabel: 'عنوان ويب أو بحث', placeholder: 'https://example.com أو ابحث في الويب',
    go: 'انتقال', examples: 'جرّب:', exampleAddress: 'wikipedia.org', or: 'أو', exampleSearch: 'طقس اليوم',
    shortcuts: 'اختصارات', shortcutName: 'اسم الاختصار', shortcutNamePlaceholder: 'الاسم',
    shortcutUrl: 'عنوان الموقع', shortcutUrlPlaceholder: 'https://example.com', addShortcut: 'إضافة', shortcutAddButton: 'إضافة اختصار',
    deleteShortcut: 'حذف الاختصار', invalidShortcut: 'أدخل عنوان ويب صالحًا يبدأ بـ http:// أو https://.',
    recentSearches: 'عمليات البحث الأخيرة', clearHistory: 'مسح السجل', confirmClearHistory: 'هل تريد بالتأكيد مسح سجل البحث بالكامل؟', emptyHistory: 'ستظهر عمليات البحث هنا.',
    deleteSearch: 'حذف البحث', invalidProtocol: 'أدخل عنوان ويب يبدأ بـ http:// أو https://.',
    invalidAddress: 'أدخل عنوان ويب أو عبارة بحث صالحة.'
  }
};

const defaultShortcuts = [
  { name: 'YouTube', url: 'https://www.youtube.com/' },
  { name: 'Wikipedia', url: 'https://www.wikipedia.org/' }
];

function isWebUrl(value) {
  try {
    const parsed = new URL(value);
    return (parsed.protocol === 'http:' || parsed.protocol === 'https:') && Boolean(parsed.hostname);
  } catch {
    return false;
  }
}

function getSavedHistory() {
  try {
    const history = JSON.parse(localStorage.getItem('browserSearchHistory') || '[]');
    return Array.isArray(history) ? history.filter((item) => item && typeof item === 'object' && item.query && item.url) : [];
  } catch {
    return [];
  }
}

function getSavedShortcuts() {
  try {
    const saved = localStorage.getItem('browserShortcuts');
    if (saved === null) return defaultShortcuts.map((shortcut) => ({ ...shortcut }));
    const shortcuts = JSON.parse(saved);
    return Array.isArray(shortcuts)
      ? shortcuts.filter((item) => item && typeof item.name === 'string' && item.name.trim() && typeof item.url === 'string' && isWebUrl(item.url))
      : defaultShortcuts.map((shortcut) => ({ ...shortcut }));
  } catch {
    return defaultShortcuts.map((shortcut) => ({ ...shortcut }));
  }
}

let searchHistory = getSavedHistory();
let shortcuts = getSavedShortcuts();
let currentLanguage = localStorage.getItem('browserLanguage') || 'en';
let currentTheme = localStorage.getItem('browserTheme') || 'light';
let currentSearchEngine = localStorage.getItem('browserSearchEngine') || 'duckduckgo';

if (!translations[currentLanguage]) currentLanguage = 'en';
if (!['light', 'dark'].includes(currentTheme)) currentTheme = 'light';
if (!['google', 'bing', 'duckduckgo', 'brave'].includes(currentSearchEngine)) currentSearchEngine = 'duckduckgo';

function saveHistory() {
  localStorage.setItem('browserSearchHistory', JSON.stringify(searchHistory));
}

function saveShortcuts() {
  localStorage.setItem('browserShortcuts', JSON.stringify(shortcuts));
}

if (localStorage.getItem('browserShortcuts') === null) saveShortcuts();

function renderShortcuts() {
  shortcutsList.replaceChildren();
  shortcuts.forEach((shortcut, index) => {
    const item = document.createElement('li');
    item.className = 'shortcut-item';

    const link = document.createElement('a');
    link.href = shortcut.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = shortcut.name;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-shortcut';
    deleteButton.type = 'button';
    deleteButton.textContent = '×';
    deleteButton.setAttribute('aria-label', `${translations[currentLanguage].deleteShortcut}: ${shortcut.name}`);
    deleteButton.addEventListener('click', () => {
      shortcuts.splice(index, 1);
      saveShortcuts();
      renderShortcuts();
    });

    item.append(link, deleteButton);
    shortcutsList.append(item);
  });
}

function renderHistory() {
  historyList.replaceChildren();
  emptyHistory.hidden = searchHistory.length > 0;
  clearHistoryButton.hidden = searchHistory.length === 0;

  searchHistory.forEach((entry, index) => {
    const item = document.createElement('li');
    item.className = 'history-item';

    const link = document.createElement('a');
    link.href = entry.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = entry.query;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-search';
    deleteButton.type = 'button';
    deleteButton.textContent = '×';
    deleteButton.setAttribute('aria-label', translations[currentLanguage].deleteSearch);
    deleteButton.addEventListener('click', () => {
      searchHistory.splice(index, 1);
      saveHistory();
      renderHistory();
    });

    item.append(link, deleteButton);
    historyList.append(item);
  });
}

function setLanguage(language) {
  currentLanguage = translations[language] ? language : 'en';
  localStorage.setItem('browserLanguage', currentLanguage);
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[currentLanguage][key]) element.textContent = translations[currentLanguage][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (translations[currentLanguage][key]) element.placeholder = translations[currentLanguage][key];
  });
  addressInput.placeholder = translations[currentLanguage].placeholder;
  renderHistory();
  renderShortcuts();
}

function setTheme(theme) {
  currentTheme = ['light', 'dark'].includes(theme) ? theme : 'light';
  document.body.dataset.theme = currentTheme;
  localStorage.setItem('browserTheme', currentTheme);
}

function setSearchEngine(engine) {
  const validEngines = ['google', 'bing', 'duckduckgo', 'brave'];
  currentSearchEngine = validEngines.includes(engine) ? engine : 'google';
  localStorage.setItem('browserSearchEngine', currentSearchEngine);
}

languageSelect.value = currentLanguage;
themeSelect.value = currentTheme;
searchEngineSelect.value = currentSearchEngine;
setLanguage(currentLanguage);
setTheme(currentTheme);

settingsButton.addEventListener('click', () => {
  const isOpen = settingsPanel.hidden;
  settingsPanel.hidden = !isOpen;
  settingsButton.setAttribute('aria-expanded', String(isOpen));
});

languageSelect.addEventListener('change', () => setLanguage(languageSelect.value));
themeSelect.addEventListener('change', () => setTheme(themeSelect.value));
searchEngineSelect.addEventListener('change', () => setSearchEngine(searchEngineSelect.value));

clearHistoryButton.addEventListener('click', () => {
  if (!window.confirm(translations[currentLanguage].confirmClearHistory)) return;
  searchHistory = [];
  saveHistory();
  renderHistory();
});

shortcutToggleButton.addEventListener('click', () => {
  const isOpen = shortcutForm.hidden;
  shortcutForm.hidden = !isOpen;
  shortcutToggleButton.setAttribute('aria-expanded', String(isOpen));
  if (isOpen) shortcutNameInput.focus();
});

shortcutForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = shortcutNameInput.value.trim();
  let url = shortcutUrlInput.value.trim();
  if (!name || !url) return;
  if (!/^[a-zA-Z][a-zA-Z\d+.-]*:\/\//.test(url)) url = `https://${url}`;

  if (!isWebUrl(url)) {
    shortcutUrlInput.setCustomValidity(translations[currentLanguage].invalidShortcut);
    shortcutUrlInput.reportValidity();
    return;
  }

  shortcutUrlInput.setCustomValidity('');
  shortcuts.push({ name, url: new URL(url).href });
  saveShortcuts();
  renderShortcuts();
  shortcutForm.reset();
  shortcutForm.hidden = true;
  shortcutToggleButton.setAttribute('aria-expanded', 'false');
});

shortcutUrlInput.addEventListener('input', () => shortcutUrlInput.setCustomValidity(''));

addressForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const enteredText = addressInput.value.trim();
  if (!enteredText) return;

  let destination;
  if (/\s/.test(enteredText)) {
    const searchUrls = {
      google: 'https://www.google.com/search?q=',
      bing: 'https://www.bing.com/search?q=',
      duckduckgo: 'https://duckduckgo.com/?q=',
      brave: 'https://search.brave.com/search?q='
    };
    destination = `${searchUrls[currentSearchEngine]}${encodeURIComponent(enteredText)}`;
  } else {
    const address = /^[a-zA-Z][a-zA-Z\d+.-]*:\/\//.test(enteredText)
      ? enteredText
      : `https://${enteredText}`;

    try {
      const parsedAddress = new URL(address);
      if (parsedAddress.protocol !== 'http:' && parsedAddress.protocol !== 'https:') {
        addressInput.setCustomValidity(translations[currentLanguage].invalidProtocol);
        addressInput.reportValidity();
        return;
      }
      addressInput.setCustomValidity('');
      destination = parsedAddress.href;
    } catch {
      addressInput.setCustomValidity(translations[currentLanguage].invalidAddress);
      addressInput.reportValidity();
      return;
    }
  }

  searchHistory = searchHistory.filter((entry) => entry.query !== enteredText);
  searchHistory.unshift({ query: enteredText, url: destination });
  searchHistory = searchHistory.slice(0, 20);
  saveHistory();
  renderHistory();
  window.open(destination, '_blank', 'noopener,noreferrer');
});

addressInput.addEventListener('input', () => addressInput.setCustomValidity(''));
