export type IMediaItemTypes = {
  id: string;
  baseUrl: string;
  filename: string;
  mediaMetadata: MediaMetadata;
  mimeType: string;
  productUrl: string;
}

export type MediaMetadata = {
  creationTime: Date;
  height: string;
  photo: Photo;
  width: string;
}
export type Photo = {
  apertureFNumber?: number;
  cameraMake?: string;
  cameraModel?: string;
  exposureTime?: string;
  focalLength?: number;
  isoEquivalent?: number;
}
