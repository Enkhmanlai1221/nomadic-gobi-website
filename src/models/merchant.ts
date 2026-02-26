import { IMerchant } from "@/interfaces/merchant";

export class Merchant implements IMerchant {
  id: string;
  name: string;
  description: string;
  coverImage?: string;
  profileImage?: string;
  location: string;
  category: string;
  rating: number;
  reviewCount: number;
  phone?: string;
  email?: string;
  website?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  openingHours?: {
    [key: string]: string;
  };
  services: string[];
  gallery: string[];
  isVerified: boolean;
  joinedDate: string;
  followers: number;
  following: number;

  constructor(data: IMerchant) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.coverImage = data.coverImage;
    this.profileImage = data.profileImage;
    this.location = data.location;
    this.category = data.category;
    this.rating = data.rating;
    this.reviewCount = data.reviewCount;
    this.phone = data.phone;
    this.email = data.email;
    this.website = data.website;
    this.socialMedia = data.socialMedia;
    this.openingHours = data.openingHours;
    this.services = data.services;
    this.gallery = data.gallery;
    this.isVerified = data.isVerified;
    this.joinedDate = data.joinedDate;
    this.followers = data.followers;
    this.following = data.following;
  }
}
