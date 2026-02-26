import { IReference } from "@/interfaces/reference";

export class Reference implements IReference {
  _id: string;
  code: string;
  type: string;
  parent: string;
  name: string;
  description: string;
  sort: number;
  createdAt: string;
  updatedAt: string;
  constructor({
    _id,
    code,
    type,
    parent,
    name,
    description,
    sort,
    createdAt,
    updatedAt,
  }: IReference) {
    this._id = _id;
    this.code = code;
    this.type = type;
    this.parent = parent;
    this.name = name;
    this.description = description;
    this.sort = sort;
    this.updatedAt = updatedAt;
    this.createdAt = createdAt;
  }

  static fromJson(json: any) {
    return new Reference(json);
  }
}
