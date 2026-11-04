/** Small self-check for the takeaway enquiry maths and WhatsApp message. */
import assert from 'node:assert/strict';
import { menuById } from '../src/data/menu.js';
import { changeQty, getTotals, lineKey, normalizeQty } from '../src/lib/enquiry.js';
import { buildEnquiryMessage, whatsappLink } from '../src/lib/whatsapp.js';

let cart = {};
cart = changeQty(cart, lineKey('idli', 'full'), 2); // 30 x 2
cart = changeQty(cart, lineKey('idli', 'half'), 1); // 20
cart = changeQty(cart, lineKey('chicken-curry-meals', 'full'), 1); // 100

const { lines, count, total } = getTotals(cart, menuById);
assert.equal(lines.length, 3);
assert.equal(count, 4);
assert.equal(total, 180);
assert.equal(lines.find((line) => line.key === 'idli:full').lineTotal, 60);

assert.equal(normalizeQty(0), 0);
assert.equal(normalizeQty(-3), 0);
assert.equal(normalizeQty(2.9), 2);
assert.equal(normalizeQty(99), 20);
assert.equal(normalizeQty('abc'), 0);

const emptied = changeQty(cart, 'idli:half', -1);
assert.equal(emptied['idli:half'], undefined);
assert.equal(getTotals(emptied, menuById).total, 160);

const message = buildEnquiryMessage({
  lines,
  total,
  note: 'Pick up at 8 AM',
  lang: 'en',
});
assert.match(message, /Idli \(Full\) × 2 — ₹60/);
assert.match(message, /Estimated total: ₹180/);
assert.match(message, /Note: Pick up at 8 AM/);
assert.match(message, /not a confirmed order/);
assert.match(message, /no home delivery/);

const teMessage = buildEnquiryMessage({ lines, total, lang: 'te' });
assert.match(teMessage, /చికెన్ కర్రీ మీల్స్/);
assert.match(teMessage, /అంచనా మొత్తం/);

const link = whatsappLink(message);
assert.ok(link.startsWith('https://wa.me/919110372978?text='));
assert.ok(!link.includes(' '));
assert.ok(decodeURIComponent(link).includes('Idli'));

console.log('Enquiry checks passed: totals, quantity limits, message and WhatsApp link.');
