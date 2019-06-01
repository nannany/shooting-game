class Entity {
  private x: number;

  private y: number;
  private vx: number;
  private vy: number;

  constructor(x: number, y: number, vx: number, vy: number) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }

  /**
   * Getter $x
   * @return {number}
   */
  public get $x(): number {
    return this.x;
  }

  /**
   * Setter $x
   * @param {number} value
   */
  public set $x(value: number) {
    this.x = value;
  }

  /**
   * Getter $y
   * @return {number}
   */
  public get $y(): number {
    return this.y;
  }

  /**
   * Getter $vx
   * @return {number}
   */
  public get $vx(): number {
    return this.vx;
  }

  /**
   * Getter $vy
   * @return {number}
   */
  public get $vy(): number {
    return this.vy;
  }

  /**
   * Setter $y
   * @param {number} value
   */
  public set $y(value: number) {
    this.y = value;
  }

  /**
   * Setter $vx
   * @param {number} value
   */
  public set $vx(value: number) {
    this.vx = value;
  }

  /**
   * Setter $vy
   * @param {number} value
   */
  public set $vy(value: number) {
    this.vy = value;
  }

}
