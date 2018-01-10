/**
 * Анимированный скролл к позиции
 * @param {number} position
 * @param {number} duration
 */
export function scrollTo(position, duration) {
	let e = document.documentElement;
	if (e.scrollTop === 0) {
		const t = e.scrollTop;
		++e.scrollTop;
		e = t + 1 === e.scrollTop-- ? e : document.body;
	}
	scrollToC(e, e.scrollTop, position, duration);
}

/**
 * Анимированный скролл к позиции
 * @param {object} element
 * @param {number} from
 * @param {number} to
 * @param {number} duration
 */
function scrollToC(element, from, to, duration) {
	if (duration < 0) {
		return;
	}
	if (typeof from === "object") {
		from = from.offsetTop;
	}
	if (typeof to === "object") {
		to = to.offsetTop;
	}

	scrollToY(element, from, to, 0, 1 / duration, 20);
}

/**
 * Анимированный скролл к позиции
 * @param {object} element
 * @param {number} y1
 * @param {number} y2
 * @param {number} t
 * @param {number} v
 * @param {number} step
 */
function scrollToY(element, y1, y2, t, v, step) {
	if (t < 0 || t > 1 || v <= 0) {
		return;
	}
	element.scrollTop = y1 - (y1 - y2) * t;
	t += v * step;

	setTimeout(() => {
		scrollToY(element, y1, y2, t, v, step);
	}, step);
}
