/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SunmiKefu {
        "customed": boolean;
    }
}
declare global {
    interface HTMLSunmiKefuElement extends Components.SunmiKefu, HTMLStencilElement {
    }
    var HTMLSunmiKefuElement: {
        prototype: HTMLSunmiKefuElement;
        new (): HTMLSunmiKefuElement;
    };
    interface HTMLElementTagNameMap {
        "sunmi-kefu": HTMLSunmiKefuElement;
    }
}
declare namespace LocalJSX {
    interface SunmiKefu {
        "customed"?: boolean;
    }
    interface IntrinsicElements {
        "sunmi-kefu": SunmiKefu;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sunmi-kefu": LocalJSX.SunmiKefu & JSXBase.HTMLAttributes<HTMLSunmiKefuElement>;
        }
    }
}
