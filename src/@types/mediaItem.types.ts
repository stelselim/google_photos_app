export interface IMediaItemTypes {
  id: string;
  baseUrl: string;
  filename: string;
  mediaMetadata: MediaMetadata;
  mimeType: string;
  productUrl: string;
}

export interface MediaMetadata {
  creationTime: Date;
  height: string;
  photo: Photo;
  width: string;
}
export interface Photo {
  apertureFNumber?: number;
  cameraMake?: string;
  cameraModel?: string;
  exposureTime?: string;
  focalLength?: number;
  isoEquivalent?: number;
}
