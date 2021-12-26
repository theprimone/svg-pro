import { SVG } from '@svgdotjs/svg.js';

import type { Svg, LinkedHTMLElement } from '@svgdotjs/svg.js';

export function makeSvgBoard(
  parentNode: HTMLElement,
  options?: {
    grid?: boolean;
  },
) {
  const { grid } = options || {};

  let svgDraw: Svg;
  if (parentNode.hasChildNodes()) {
    svgDraw = (parentNode.firstChild as LinkedHTMLElement).instance.root();
    svgDraw.clear();
  } else {
    svgDraw = SVG().addTo(parentNode).size('100%', '100%');
  }

  if (grid) {
    svgDraw.svg(`
      <defs>
        <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" stroke-width="0.5"/>
        </pattern>
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect width="80" height="80" fill="url(#smallGrid)"/>
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" stroke-width="1"/>
        </pattern>
      </defs>
        
      <rect width="100%" height="100%" fill="url(#grid)" />
    `);
  }

  const pencilPoint = svgDraw.rect();

  return {
    svgDraw,
    pencilPoint,
  };
}
