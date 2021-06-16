import cloudinary from 'cloudinary'
const cloud = cloudinary.v2
const cloudinaryConfig = cloud.config({
    cloud_name: 'werich1',
    api_key: '399574542269941',
    api_secret: 'TVj2wqH13znbEDoUT0xiLhDPsuY'
})

export { cloudinaryConfig, cloud }