export { Components, JSX } from './components';

const Kefu = {
  toggleVisible: () => {
    const event = new Event('toggleVisible');
    window.dispatchEvent(event);
  },
};

window.Kefu = Kefu;
window.__kefu__ = window.Kefu;

window.addEventListener('load', () => {
  if (!document.getElementsByTagName('sunmi-kefu')[0]) {
    const sunmiKefu = document.createElement('sunmi-kefu');
    document.body.appendChild(sunmiKefu);
  }
});

declare global {
  export interface Window {
    Kefu: typeof Kefu;
    __kefu__: typeof Kefu;
  }
}
