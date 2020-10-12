import { css, customElement, LitElement, html, property } from 'lit-element';

@customElement('notif-list-item-icon')
class NotifListItemMsg extends LitElement {
    @property({ type: String }) status = '';
    // this.msg = 'msg';

    static get styles() {
        return css`
            :host .iconnotif {
                width: 99px;
                float: left;
                height: 100px;
                border-right: 1px solid #e0e0e0;
            }
            .iconnotifimg {
                font-size: 48px;
                height: 85px;
                line-height: 1.7;
                margin: 18px;
                text-align: center;
                width: 64px;
                padding: 5px 0 0;
                opacity: 0.75;
                filter: alpha(opacity=75);
            }
            .notify-headico {
                border: 2px solid;
                border-radius: 16px;
                margin: 5px auto;
                padding: 10px 5px;
            }
            .notify-info, .notify-success, .notify-warning, .notify-error { 
                color: #FFF;
                padding:  0 15px;
                text-transform: uppercase;
                font-weight: bold 
            }
            .notify-info { background-color: #5BC0DE; }
            .notify-success { background-color: #3E8F3E; }
            .notify-warning { background-color: #E38D13; }
            .notify-error { background-color: #B92C28; }
        `;
    }

    render() {
        return html`
            <div class="iconnotif">
                <div class="iconnotifimg notify-headico notify-${this.status}">${getStatus(this.status)}</div>
            </div>
        `;
    }
}

function getStatus(status:String) {
    let statusAbbrv = 'i';
    switch(status) {
        case 'success':
            statusAbbrv = 's';
            break;
        case 'error':
            statusAbbrv = 'e';
            break;
        case 'warning':
            statusAbbrv = 'w';
            break;
        default:
            statusAbbrv = 'i';
            break;
    }
    return statusAbbrv;
}
