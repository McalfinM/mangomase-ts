import ISpecification from "./specificationInterface";

class GetMenuSpecification implements ISpecification {
  protected _uuid?: string
  protected _name?: string
  protected _category?: string
  protected _sort_by: any;
  protected _page: number;
  protected _limit: number;
  protected _search?: string;

  constructor(request: {
    uuid?: string
    name?: string
    category?: string
    sort?: string
    page?: number
    limit?: number
    search?: string
  }) {
    this._search = request.search;
    this._name = request.name;
    this._category = request.category
    this._uuid = request.uuid;
    this._sort_by = request.sort ?? '-created_at'
    this._page = request.page ?? 1
    this._limit = request.limit ?? 30
  }


  specifies(): object {
    let specifications: { [k: string]: any } = {};
    let or_specifications: object[] = [];

    if (this._search) {

      or_specifications.push(
        { 'name': new RegExp(this._search, 'i') },
      )
    }

    if (this._uuid) {
      specifications["uuid"] = this._uuid;
    }
    if (this._category) {
      specifications["category.name"] = this._category;
    }
    if (or_specifications.length > 0) {
      specifications["$or"] = or_specifications;
    }
    specifications.deleted_at = null;

    return specifications;
  }

  specSort(): object {
    let specifications: { [k: string]: any } = {};

    if (this._sort_by[0] == '-') {
      specifications[this._sort_by.slice(1)] = -1
    } else {
      specifications[this._sort_by] = 1
    }

    return specifications;
  }

  paginate(): object {
    const specification: {
      limit: number
      skip: number
    } = {
      limit: +this._limit,
      skip: 0
    }

    if (this._page > 1) {
      specification.skip = (this._page - 1) * this._limit
    }
    return specification
  }

}


export default GetMenuSpecification;
