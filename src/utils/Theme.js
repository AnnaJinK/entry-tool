import EntryPopupStyle from '@assets/entry/scss/popup.scss';
import EntryBackpackStyle from '@assets/entry/scss/widget/Backpack.scss';
import EntryDropper from '@assets/entry/scss/widget/Dropper.scss';
import EntryProgress from '@assets/entry/scss/progress.scss';
import EntryDraggable from '@assets/entry/scss/draggable.scss';
import EntryLinePopupStyle from '@assets/entryline/scss/popup.scss';
import EntryLineBackpackStyle from '@assets/entryline/scss/Backpack.scss';
import EntryLineDraggable from '@assets/entryline/scss/draggable.scss';

class Theme {
    constructor() {
        this._type = 'entry';
        this.styles = {
            entry: {
                popup: EntryPopupStyle,
                backpack: EntryBackpackStyle,
                progress: EntryProgress,
                draggable: EntryDraggable,
            },
            entryline: {
                popup: EntryLinePopupStyle,
                backpack: EntryLineBackpackStyle,
                progress: EntryLinePopupStyle,
                draggable: EntryLineDraggable,
            },
        };
    }

    getStyle(str = 'popup') {
        if (this.styles[this.type] && this.styles[this.type][str]) {
            return this.styles[this._type][str];
        } else {
            return EntryPopupStyle;
        }
    }

    get type() {
        return this._type;
    }

    set type(value) {
        if (value) {
            this._type = value;
        }
    }
}

export default new Theme();
