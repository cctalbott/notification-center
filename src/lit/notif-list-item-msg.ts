import { css, customElement, LitElement, html, property } from 'lit-element';

@customElement('notif-list-item-msg')
class NotifListItemMsg extends LitElement {
    @property({ type: String }) msg = '';
    // this.msg = 'msg';

    static get styles() {
        return css`
            :host {
                width: 290px;
                float: left;
                height: 91px;
                padding-top: 10px;
                padding-left: 10px;
                background-color: #FFF;
                display: block;
                -webkit-border-radius: 0 10px 10 0px;
                -moz-border-radius: 0 10px 10 0px;
                border-radius: 0 10px 10px 0px;
            }
        `;
    }

    render() {
        return html`
            <div class="contentnotif">${this.msg}</div>
        `;
    }
}
