import { LightningElement } from 'lwc';

export default class Child extends LightningElement {
    ok() {
        console.log('Lightning: You have clicked OK!');
    }
    cancel() {
        console.log('Lightning: You have clicked Cancel!');
    }
}
