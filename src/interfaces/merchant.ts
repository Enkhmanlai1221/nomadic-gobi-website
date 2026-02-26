export interface IMerchant {
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
}
