import { IFeature } from "@/interfaces/feature";
import { IImage } from "@/interfaces/image";

export class Feature implements IFeature {
  beautifulPlace: string;
  createdAt: string;
  deletedAt: string;
  description: string;
  images: IImage[];
  mainImage: IImage;
  mainVideo: string;
  property: string;
  sort: string;
  title: string;
  updatedAt: string;
  videos: string;
  __v: string;
  _id: string;
  url: string;
  constructor({
    beautifulPlace,
    createdAt,
    deletedAt,
    description,
    images,
    mainImage,
    mainVideo,
    property,
    sort,
    title,
    updatedAt,
    videos,
    __v,
    _id,
    url,
  }: IFeature) {
    this._id = _id;
    this.beautifulPlace = beautifulPlace;
    this.createdAt = createdAt;
    this.deletedAt = deletedAt;
    this.description = description;
    this.images = images;
    this.mainImage = mainImage;
    this.mainVideo = mainVideo;
    this.property = property;
    this.sort = sort;
    this.title = title;
    this.updatedAt = updatedAt;
    this.videos = videos;
    this.__v = __v;
    this.url = url;
  }

  static fromJson(json: any) {
    return new Feature(json);
  }
}
