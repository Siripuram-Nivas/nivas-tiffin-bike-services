/**
 * Takeaway enquiry maths. Pure functions so the totals can be tested without React.
 * Enquiry cart shape: { "idli:full": 2, "idli:half": 1 }
 */
export const MAX_QTY = 20;

export const lineKey = (id, portion) => `${id}:${portion}`;

export const normalizeQty = (qty) => {
  const n = Math.trunc(Number(qty));
  if (!Number.isFinite(n) || n < 1) return 0;
  return Math.min(n, MAX_QTY);
};

export const unitPrice = (item, portion) =>
  portion === 'half' && item.priceHalf ? item.priceHalf : item.priceFull;

/** Resolve the cart object into priced, displayable lines in a stable order. */
export const getLines = (cart, itemsById) =>
  Object.entries(cart)
    .map(([key, qty]) => {
      const [id, portion] = key.split(':');
      const item = itemsById[id];
      const quantity = normalizeQty(qty);
      if (!item || !quantity) return null;
      const price = unitPrice(item, portion);
      return { key, item, portion, qty: quantity, unitPrice: price, lineTotal: price * quantity };
    })
    .filter(Boolean);

export const getTotals = (cart, itemsById) => {
  const lines = getLines(cart, itemsById);
  return {
    lines,
    count: lines.reduce((sum, line) => sum + line.qty, 0),
    total: lines.reduce((sum, line) => sum + line.lineTotal, 0),
  };
};

/** Add one of a line, or change it by delta. Zero removes the line. */
export const changeQty = (cart, key, delta) => {
  const next = { ...cart };
  const quantity = normalizeQty((next[key] || 0) + delta);
  if (quantity) next[key] = quantity;
  else delete next[key];
  return next;
};
