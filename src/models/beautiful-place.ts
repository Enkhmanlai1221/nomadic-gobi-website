import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import { IFeature } from "@/interfaces/feature";
import { IImage } from "@/interfaces/image";

export class BeautifulPlace implements IBeautifulPlace {
  createdAt: string;
  description: string;
  image: IImage;
  mainImage: IImage;
  isAppScreen: boolean;
  isHomeScreen: boolean;
  name: string;
  sort: string;
  updatedAt: string;
  imagePosition: string;
  __v: string;
  _id: string;
  features: IFeature[];
  reference: any;
  type: string;
  constructor(json: IBeautifulPlace) {
    this.createdAt = json.createdAt;
    this.description = json.description;
    this.image = json.image;
    this.mainImage = json.mainImage;
    this.isAppScreen = json.isAppScreen;
    this.isHomeScreen = json.isHomeScreen;
    this.name = json.name;
    this.sort = json.sort;
    this.updatedAt = json.updatedAt;
    this.__v = json.__v;
    this._id = json._id;
    this.imagePosition = json.imagePosition;
    this.features = json.features;
    this.reference = json.reference;
    this.type = json.type;
  }

  static fromJson(json: any) {
    return new BeautifulPlace(json);
  }
}
