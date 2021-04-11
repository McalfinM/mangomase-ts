import { TypedSerializer } from "ts-typed";


abstract class BaseEntity {
  constructor() { }

  toJSON(): this {
    return TypedSerializer.serialize(this)
  }
}

export default BaseEntity;
