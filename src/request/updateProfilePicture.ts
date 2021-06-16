class UpdateImageRequest {
    protected _image: string;
    protected _cloudinary_id: string

    constructor(body: {
        image: string
        cloudinary_id: string
    }) {
        this._image = body.image;
        this._cloudinary_id = body.cloudinary_id
    }

    get image(): string {
        return this._image
    }

    get cloudinary_id(): string {
        return this._cloudinary_id
    }
}

export default UpdateImageRequest