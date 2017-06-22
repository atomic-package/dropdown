/*
 * Author: Daisuke Takayama
 */
const APView = require('@atomic-package/common').View;

import Target from './Target';
import Trigger from './Trigger';

/**
 * Dropdown View Class
 * @public
 * @param option
 **/
export class View {
  static fetchElements(callback): void {
    document.addEventListener("DOMContentLoaded", () => {
      let triggerList = APView.createFromTriggerElement(['[data-ap-dropdown]'], Trigger);

      callback({
        triggerList: triggerList,
        targetList: APView.createTargetView(triggerList, Target)
      });
    });
  }
}

export default View;
