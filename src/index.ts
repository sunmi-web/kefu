export { Components, JSX } from './components';

const Kefu = {
  toggleVisible: () => {
    const event = new Event('toggleVisible');
    dispatchEvent(event);
  },
};

window.Kefu = Kefu;

declare global {
  export interface Window {
    Kefu: typeof Kefu;
  }
}
