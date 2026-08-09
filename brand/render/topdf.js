const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
  const p = await b.newPage();
  await p.goto('file:///home/claude/hala-brand/guide/hala-brand-guidelines.html');
  await p.waitForTimeout(800);
  await p.emulateMedia({ media: 'print' });
  await p.pdf({
    path: '/home/claude/hala-brand/guide/hala-brand-guidelines.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '0', bottom: '0', left: '0', right: '0' },
  });
  await b.close();
  console.log('pdf done');
})();
