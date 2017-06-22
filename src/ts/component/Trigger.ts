import Target from './Target';

/**
 * Dropdown Trigger View Class
 * @public
 * @param option
 **/
let _created_dropdown_trigger_num: number  = 0;

export class Trigger {
  private toggleCallBackFunction: Function = () => {};

  constructor(
    public id: number,
    public className: string,
    public idName: string,
    public target: any,
    public node: any
  ) {
    this.id = this.createTriggerId();
    this.setEventListener();
  }

  /**
   * Static Function
   **/
  static fromData(data: any): Trigger {
    return new Trigger(
      0,
      data.className ? data.className : null,
      data.id ? data.id : null,
      data.dataset.apDropdown ? data.dataset.apDropdown : null,
      data ? data : null
    );
  }

  /**
   * Private Function
   **/
  private createTriggerId(): number {
    return ++_created_dropdown_trigger_num;
  }

  private setEventListener(): void {
    this.node.addEventListener('click', (e) => {
      e.preventDefault();

      this.toggle(this.toggleCallBackFunction);
    }, false);
  }

  /**
   * Public Function
   **/
  public toggle(fn?, isFirst?): void {
    this.toggleCallBackFunction = fn;

    if(!isFirst) {
      fn(this);
    }
  }

  public getItemNode(node) {
    //return this.getChildren(node);
  }

  public resetSelectedClassName() {

  }

  public createMoveCoordinate() {
    return Target.fromData({
      triggerId: this.id
    });
  }
}

export default Trigger;