import { showSkeletons, renderOpeners, showError } from './ui.js';
import { callAPI } from './api.js';

const generateBtn = document.getElementById('generateBtn');
const contextInput = document.getElementById('context');

// ─── Generate ─────────────────────────────────────────────────────────────

async function generateOpeners() {
  const context = contextInput.value.trim();

  if (!context) {
    contextInput.focus();
    return;
  }

  generateBtn.classList.add('loading');
  generateBtn.querySelector('.btn-label').textContent = 'Generating…';
  showSkeletons();

  try {
    const openers = await callAPI(context);
    renderOpeners(openers);
  } catch (err) {
    console.error(err);
    showError('Something went wrong. Try again.');
  } finally {
    generateBtn.classList.remove('loading');
    generateBtn.querySelector('.btn-label').textContent = 'Generate openers';
  }
}

// ─── Events ───────────────────────────────────────────────────────────────

generateBtn.addEventListener('click', generateOpeners);

contextInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
    generateOpeners();
  }
});