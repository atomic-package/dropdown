// store
import Trigger from './Trigger';

/**
 * Dropdown Target Model Class
 * @public
 * @param option
 **/
export class Target {
  constructor(
    public id: number,
    public className: string,
    public idName: string,
    public coordinate: number,
    public view: any
  ) {
  }

  static fromData(data: any): Target {
    return new Target(
      data.id ? data.id : 1,
      data.className ? data.className : null,
      data.idName ? data.idName : null,
      data.coordinate ? data.coordinate : 0,
      data ? data : null
    );
  }

  /**
   * Private Function
   **/
  public toggle(trigger: Trigger) {
    if(trigger.targetId == this.id) {
      this.view.scroll();
    }
  }
}

export default Target;
