import { LightningElement,api } from 'lwc';

export default class ViewSource extends LightningElement {
    baseURL =
        'https://github.com/srao97/LWC-Navigation.git';

    @api source;

    get sourceURL() {
        return this.baseURL + this.source;
    }
}
