import { Aircraft } from "./Aircraft";

export class MyAircraft extends Aircraft {

  // インスタンスはstaticにして、一個しか作れないようにしとく
  private static _instance: MyAircraft;

  public static getInstance(): MyAircraft {
    if (!this._instance) {
      this._instance = new MyAircraft(MyAircraft.getInstance);
    }
    return this._instance;
  }

  constructor(caller: Function) {
    if (caller == MyAircraft.getInstance) {
      super(0, 0, 0, 0);
    }
    else if (MyAircraft._instance) {
      throw new Error();
    }
    else {
      throw new Error();
    }
  }

}
