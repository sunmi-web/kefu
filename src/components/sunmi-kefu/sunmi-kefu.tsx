import { Component, h, Listen, Prop, State } from '@stencil/core';
import cx from 'classnames';
import { floatingButtonIcon } from './assets.json';
import { isMiniprogram } from '../../utils/utils';

@Component({
  tag: 'sunmi-kefu',
  styleUrl: 'sunmi-kefu.css',
  shadow: true,
})
export class SunmiKefu {
  @Prop() customed: boolean;

  @State() open: boolean;
  @Listen('click', { capture: true })
  handleClick() {
    this.open = !this.open;
  }

  renderChild() {
    if (this.customed) {
      return <slot></slot>;
    } else {
      return (
        <div class="kefu__floating-button">
          <img src={floatingButtonIcon} alt="" />
          <span class="alibaba-puhuiti-medium">text</span>
        </div>
      );
    }
  }

  render() {
    // 微信小程序内不显示
    if (isMiniprogram()) {
      return null;
    }

    return (
      <div class={cx('kefu', { 'is-open': this.open })}>
        <div class="kefu__modal">
          <div class="modal__action">
            <div class="fold-icon"></div>
          </div>
          <iframe class="kefu__iframe is-mobile" src="//im.7x24cc.com/phone_webChat.html?accountId=N000000027155&chatId=dc641cbc-10cb-438a-9875-56f8bf4694e8" />
          <iframe class="kefu__iframe is-pc" src="//im.7x24cc.com/phone_webChat.html?accountId=N000000027155&chatId=32c22cc0-309c-416f-a7e5-f6793a30df87" />
        </div>
        {this.renderChild()}
      </div>
    );
  }
}
