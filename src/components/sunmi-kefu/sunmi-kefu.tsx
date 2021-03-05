import { Component, h, Listen, Prop, State } from '@stencil/core';
import cx from 'classnames';
import { floatingButtonIcon } from './assets.json';
import { SunmiComAdaptor, MallSunmiComAdaptor, PartnerSunmiComAdaptor, LocalhostAdaptor, H5MallSunmiComAdaptor } from '../../adaptors';

@Component({
  tag: 'sunmi-kefu',
  styleUrl: 'sunmi-kefu.css',
  shadow: true,
})
export class SunmiKefu {
  @Prop() customed: boolean;

  @State() open: boolean;
  @State() adaptor: SunmiComAdaptor | MallSunmiComAdaptor | H5MallSunmiComAdaptor | PartnerSunmiComAdaptor | LocalhostAdaptor;

  private toggleVisible() {
    this.open = !this.open;
    this.adaptor = this.getAdaptor();
  }

  @Listen('click', { capture: true })
  handleClick() {
    this.toggleVisible();
  }

  // 暴露在外的方法
  @Listen('toggleVisible', { target: 'window' })
  toggleVisibleHandler() {
    this.toggleVisible();
  }

  getAdaptor() {
    switch (window.location.hostname) {
      case 'sunmi.com':
      case 'www.sunmi.com':
      case 'official-website.sunmi.com':
      case 'official-website.dev.sunmi.com':
      case 'official-website.test.sunmi.com':
      case 'official-website.uat.sunmi.com':
        return new SunmiComAdaptor();
      case 'mall.sunmi.com':
      case 'mall.dev.sunmi.com':
      case 'mall.test.sunmi.com':
      case 'mall.uat.sunmi.com':
        return new MallSunmiComAdaptor();
      case 'h5.mall.sunmi.com':
      case 'h5.mall.dev.sunmi.com':
      case 'h5.mall.test.sunmi.com':
      case 'h5.mall.uat.sunmi.com':
        return new H5MallSunmiComAdaptor();
      case 'partner.sunmi.com':
      case 'partner.dev.sunmi.com':
      case 'partner.test.sunmi.com':
      case 'partner.uat.sunmi.com':
        return new PartnerSunmiComAdaptor();
      case 'localhost':
      default:
        return new LocalhostAdaptor();
    }
  }

  renderChild() {
    const adaptor = this.getAdaptor();
    if (this.customed) {
      return <slot></slot>;
    } else {
      return (
        <div class="kefu__floating-button">
          <img src={floatingButtonIcon} alt="" />
          <span class="alibaba-puhuiti-medium">{adaptor.buttonText}</span>
        </div>
      );
    }
  }

  render() {
    // 微信小程序内不显示
    if (SunmiComAdaptor.isMiniprogram()) {
      return null;
    }
    return (
      <div class={cx('kefu', { 'is-open': this.open })}>
        {this.open && (
          <div class="kefu__modal">
            <div class="modal__action">
              <div class="fold-icon"></div>
            </div>
            {this.adaptor?.scripts.pc && <iframe class="kefu__iframe is-pc" src={this.adaptor.scripts.pc} />}
            {this.adaptor?.scripts.mobile && <iframe class="kefu__iframe is-mobile" src={this.adaptor.scripts.mobile} />}
          </div>
        )}
        {this.renderChild()}
      </div>
    );
  }
}
