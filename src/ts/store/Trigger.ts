const APModel = require('@atomic-package/common').Model;

// store
import Target from './Target';

// component
import TriggerView from '../component/Trigger';

/**
 * Dropdown Trigger Model Class
 * @public
 * @param option
 **/
export class Trigger {
  constructor(
    public id: number,
    public className: string,
    public idName: string,
    public target: any,
    public targetId: number,
    public coordinate: number,
    public view: TriggerView
  ) {
  }

  /**
   * Static Function
   **/
  static fromData(data: any): Trigger {
    return new Trigger(
      data.id ? data.id : 1,
      data.className ? data.className : null,
      data.idName ? data.idName : null,
      data.target ? data.target : null,
      data.targetId ? data.targetId : 0,
      data.coordinate ? data.coordinate : 0,
      data ? data : null
    );
  }

  /**
   * Public Function
   **/
  public setTargetId(targetViewList: Target[]) {
    let searchContents: Target[];

//      if(this.target) {
//        searchContents = APModel.search(targetViewList, this.target);
//      } else {
//        searchContents = APModel.search(targetViewList, { triggerId: this.id });
//      }
//
//      if(searchContents) {
//        this.targetId = searchContents[0].id;
//      }
  }
}

export default Trigger;
