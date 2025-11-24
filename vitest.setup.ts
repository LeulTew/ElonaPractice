import '@testing-library/jest-dom'

// Polyfills for JSDOM (not mocks - these are necessary for Radix UI to work)
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Polyfill matchMedia for theme switching
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
  }),
})

// Polyfill Pointer Capture for Radix UI
window.HTMLElement.prototype.hasPointerCapture = () => false
window.HTMLElement.prototype.setPointerCapture = () => {}
window.HTMLElement.prototype.releasePointerCapture = () => {}
window.HTMLElement.prototype.scrollIntoView = () => {}
