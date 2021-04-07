import ISpecification from "./specificationInterface";

class GetPostSpecification implements ISpecification {
  protected _uuid?: string
  protected _user_uuid?: string
  protected _title?: string
  protected _content?: string
  protected _slug?: string
  protected _age?: number
  protected _clan_uuid?: string
  protected _category?: string
  protected _animal_type?: string
  protected _for_adoption?: boolean
  protected _want_adoption?: boolean
  protected _sort_by: any;
  protected _page: number;
  protected _limit: number;
  protected _search?: string;

  constructor(request: {
    uuid?: string
    user_uuid?: string
    title?: string
    content?: string
    slug?: string
    age?: number
    clan_uuid?: string
    category?: string
    animal_type?: string
    for_adoption?: boolean
    want_adoption?: boolean
    sort?: string
    page?: number
    limit?: number
    search?: string
  }) {
    this._search = request.search;
    this._uuid = request.uuid;
    this._user_uuid = request.user_uuid;
    this._title = request.title;
    this._content = request.content;
    this._slug = request.slug;
    this._age = request.age;
    this._clan_uuid = request.clan_uuid;
    this._category = request.category;
    this._animal_type = request.animal_type;
    this._for_adoption = request.for_adoption;
    this._want_adoption = request.want_adoption;
    this._sort_by = request.sort ?? '-created_at'
    this._page = request.page ?? 1
    this._limit = request.limit ?? 30
  }


  specifies(): object {
    let specifications: { [k: string]: any } = {};
    let or_specifications: object[] = [];

    if (this._search) {

      or_specifications.push(
        { 'title': new RegExp(this._search, 'i') }
      )
    }

    if (this._uuid) {
      specifications["uuid"] = this._uuid;
    }
    if (this._age) {
      specifications["age"] = this._age;
    }
    if (this._clan_uuid) {
      specifications["clan_uuid"] = this._clan_uuid;
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


export default GetPostSpecification;
