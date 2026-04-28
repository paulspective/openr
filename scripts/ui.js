// ─── UI Helpers ───────────────────────────────────────────────────────────

const resultsSection = document.getElementById('resultsSection');
const openersList = document.getElementById('openersList');

function initializeLucide() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  } else {
    console.warn('Lucide library not loaded');
  }
}

function showSkeletons() {
  openersList.innerHTML = Array.from({ length: 3 }, () => `
    <div class="skeleton">
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
    </div>
  `).join('');

  resultsSection.classList.add('visible');
}

function renderOpeners(openers) {
  openersList.innerHTML = '';

  openers.forEach(text => {
    const card = document.createElement('div');
    card.className = 'opener-card';

    card.innerHTML = `
      <p class="opener-text">${text}</p>
      <button class="copy-btn" title="Copy">
       <i data-lucide="copy" width="15" height="15"></i>
      </button>
    `;

    const copyBtn = card.querySelector('.copy-btn');
    copyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.classList.add('copied');
        copyBtn.innerHTML = `
          <i data-lucide="check" width="15" height="15"></i>
        `;
        initializeLucide();
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyBtn.innerHTML = `
            <i data-lucide="copy" width="15" height="15"></i>
          `;
          initializeLucide();
        }, 2000);
      });
    });

    openersList.appendChild(card);
  });

  initializeLucide();
}

function showError(message) {
  openersList.innerHTML = `<p class="state-message">${message}</p>`;
}

export { showSkeletons, renderOpeners, showError };