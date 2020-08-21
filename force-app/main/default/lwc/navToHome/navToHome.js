import { LightningElement } from 'lwc';
import {NavagationMixin} from 'lightning/navigation';
export default class NavToHome extends LightningElement {
    goToHomeHandler(){
        this[NavagationMixin.Navigate]({
            type : 'standard__namePage',
            attributes : {
                pageName : 'home'
            }
        });
    }
}