/**
 * Dropdown Target View Class
 * @public
 * @param option
 **/
let _created_dropdown_target_num: number = 0;

export class Target {
  constructor(
    public id: number,
    public triggerId: number,
    public idName: string,
    public className: string,
    public node: any
  ) {
    this.id = this.createContentsId();
  }

  /**
   * Static Function
   **/
  static fromData(data: any): Target {
    return new Target(
      0,
      data.triggerId ? data.triggerId : null,
      data.node && data.node.id ? data.node.id : null,
      data.node && data.node.className ? data.node.className : null,
      data.node ? data.node : null
    );
  }

  /**
   * Private Function
   **/
  private createContentsId(): number {
    return ++_created_dropdown_target_num;
  }

  /**
   * Public Function
   **/
  public getItemNode(node) {
    //return this.getChildren(node);
  }

  public scroll() {
  }
}

export default Target;
