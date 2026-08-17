const { chromium } = require('playwright');
const path = require('path');
const manifest = require(path.resolve(process.argv[2] || 'manifest.json'));

(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium',
    args: ['--no-sandbox'],
  });
  for (const job of manifest) {
    const page = await browser.newPage({
      viewport: { width: job.width, height: job.height },
      deviceScaleFactor: job.scale || 1,
    });
    await page.goto('file://' + path.resolve(job.file));
    await page.waitForTimeout(350); // fonts
    await page.screenshot({
      path: path.resolve(job.out),
      omitBackground: !!job.transparent,
    });
    console.log('rendered', job.out);
    await page.close();
  }
  await browser.close();
})();
