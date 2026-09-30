declare type KeyButton = {
    id: number;
    onEvent(event: KeyEvent, handler: () => void): void;
};

declare enum KeyEvent {
    Pressed = 0
}

declare function keyToString(id: number): string;

declare const A: KeyButton;
declare const B: KeyButton;
declare const C: KeyButton;
declare const D: KeyButton;
declare const E: KeyButton;
declare const F: KeyButton;
declare const G: KeyButton;
declare const H: KeyButton;
declare const I: KeyButton;
declare const J: KeyButton;
declare const K: KeyButton;
declare const L: KeyButton;
declare const M: KeyButton;
declare const N: KeyButton;
declare const O: KeyButton;
declare const P: KeyButton;
declare const Q: KeyButton;
declare const R: KeyButton;
declare const S: KeyButton;
declare const T: KeyButton;
declare const U: KeyButton;
declare const V: KeyButton;
declare const W: KeyButton;
declare const X: KeyButton;
declare const Y: KeyButton;
declare const Z: KeyButton;

declare const Zero: KeyButton;
declare const One: KeyButton;
declare const Two: KeyButton;
declare const Three: KeyButton;
declare const Four: KeyButton;
declare const Five: KeyButton;
declare const Six: KeyButton;
declare const Seven: KeyButton;
declare const Eight: KeyButton;
declare const Nine: KeyButton;

declare const Shift: KeyButton;
declare const Enter: KeyButton;
declare const CapsLock: KeyButton;
declare const Tab: KeyButton;
declare const Control: KeyButton;
declare const Meta: KeyButton;
declare const Alt: KeyButton;
declare const ArrowUp: KeyButton;
declare const ArrowDown: KeyButton;
declare const ArrowLeft: KeyButton;
declare const ArrowRight: KeyButton;
declare const BackTick: KeyButton;
declare const Hyphen: KeyButton;
declare const Equals: KeyButton;
declare const OpenBracket: KeyButton;
declare const CloseBracket: KeyButton;
declare const BackSlash: KeyButton;
declare const Space: KeyButton;
declare const PageUp: KeyButton;
declare const SemiColon: KeyButton;
declare const Apostrophe: KeyButton;
declare const Comma: KeyButton;
declare const Period: KeyButton;
declare const ForwardSlash: KeyButton;
declare const PageDown: KeyButton;
declare const End: KeyButton;
declare const Home: KeyButton;
declare const Escape: KeyButton;
