import { RefObject } from "react";

export interface HamburgerProps {
  isActive: boolean;
  handleActive: () => void;
}

export interface ButtonProps {
  text: string;
  color?: string;
  link: string;
  dataAos?: string;
}

export interface SocialMediaProps {
  navbarLinks: boolean;
  footerLinks: boolean;
}

export interface MobileMenuProps extends HamburgerProps {
  menuRef: RefObject<HTMLDivElement>;
}

export interface BannerProps {
  path: string;
  altName: string;
  children: string | JSX.Element;
}

interface PostImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      path: string | null;
      width: number;
      height: number;
      size: number;
      url: string;
    };
    small: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      path: string | null;
      width: number;
      height: number;
      size: number;
      url: string;
    };
    medium: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      path: string | null;
      width: number;
      height: number;
      size: number;
      url: string;
    };
    large: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      path: string | null;
      width: number;
      height: number;
      size: number;
      url: string;
    };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
}

interface PostAttributes {
  PostTitle: string;
  PostText: string;
  PostDate: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  PostImage: {
    data: {
      id: number;
      attributes: PostImageAttributes;
    };
  };
}

export interface PostProps {
  id: number;
  attributes: PostAttributes;
}

interface PostsResponse {
  data: PostProps[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface PostTestProps {
  fields: { title: any; paragraph: any; media: any; date: any };
  index: number;
  PostTitle: string;
  PostText: string;
  PostImage: string;
  PostDate: string;
}

export interface BlogPostTestProps {
  post: PostTestProps;
}

export interface LocationProps {
  index: number;
  id: string;
  city: string;
  address: string[];
  street: string;
  image: string;
  tel: string;
  hours: string[];
  lat: number;
  lng: number;
  additional?: string;
  gallery: string[];
}

export type CoordinatesType = {
  lat: number;
  lon: number;
};

export type GalleryItemType = {
  fields: {
    title: string;
    file: {
      url: string;
    };
  };
};

export type LocationType = {
  addressAdditional?: string;
  additionalOpenHours?: string;
  city: string;
  coordinates: CoordinatesType;
  gallery: GalleryItemType[];
  id: string;
  openHours: string;
  phoneNumber: string;
  postalCode: string;
  street: string;
};
