/*
 * Author: Daisuke Takayama
 */
const APModel = require('@atomic-package/common').Model;

// store
import {
  Target,
  Trigger,
} from '../store/';

/**
 * Dropdown Model Class
 * @public
 * @param option
 **/
export class Model {
  constructor(
    public targetList: Target[],
    public triggerList: Trigger[]
  ) {
    this.setTriggerCallBack();

    APModel.setTriggerTargetId(this.triggerList, this.targetList);
  }

  /**
   * Static Function
   **/
  public static fromData(data: any): Model {
    return new Model(
      data.targetList ? APModel.createTargetModel(data.targetList, Target) : [],
      data.triggerList ? APModel.createTriggerModel(data.triggerList, Trigger) : []
    );
  }

  /**
   * Private Function
   **/
  private setTriggerCallBack(): void {
    this.triggerList.forEach((trigger: Trigger) => {
      trigger.view.toggle((triggerView) => {
        this.toggleContents(trigger);
      }, true);
    });
  }

  private toggleContents(trigger: Trigger): void {
    for(let i: number = 0; i < this.targetList.length; i++) {
      this.targetList[i].toggle(trigger);
    }
  }
}

export default Model;
