import { Handler } from '@netlify/functions';
import chromium from 'chrome-aws-lambda';
import { launch, ScreenshotClip } from 'puppeteer';
import sharp from 'sharp';

const handler: Handler = async () => {
  const url = 'https://christianpenrod.com';
  if (!url) return { statusCode: 400, body: 'Missing URL' };

  const browser = await launch({
    defaultViewport: { width: 1920, height: 1280 },
    args: chromium.args,
    executablePath: await chromium.executablePath,
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  const clip: ScreenshotClip = await page.evaluate(() => {
    const { scrollWidth: width, scrollHeight: height } = document.body;
    return { x: 0, y: 0, width, height };
  });
  const screenshot = await page.screenshot({ clip });
  const payload = await sharp(screenshot).webp().toBuffer();

  await browser.close();

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'image/webp',
      'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400',
    },
    body: payload.toString('base64'),
    isBase64Encoded: true,
  };
};

export { handler };
