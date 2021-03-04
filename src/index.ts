export { Components, JSX } from './components';

const Kefu = {
  toggleVisible: () => {
    const event = new Event('toggleVisible');
    window.dispatchEvent(event);
  },
};

window.Kefu = Kefu;
window.__kefu__ = window.Kefu;

declare global {
  export interface Window {
    Kefu: typeof Kefu;
    __kefu__: typeof Kefu;
  }
}
