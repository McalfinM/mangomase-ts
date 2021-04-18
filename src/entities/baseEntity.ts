import { TypedSerializer } from "ts-typed";

abstract class BaseEntity {
  constructor() { }

  toJSON(): object {
    let _this: any = this
    Object.keys(this).forEach(key => {
      if (typeof _this[key] === 'object' && _this[key] && _this[key].toJSON) {
        _this[key] = _this[key].toJSON()
      }
      if (_this[key] instanceof Array) {
        _this[key] = _this[key].map((row: any) => typeof row === 'object' && row && row.toJSON ? row.toJSON() : row)
      }

    })

    return TypedSerializer.serialize(this)
  }
}

export default BaseEntity;
