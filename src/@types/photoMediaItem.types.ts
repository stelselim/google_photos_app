export type IPhotoMediaItemTypes = {
  id: string;
  description: string;
  productUrl: string;
  baseUrl: string;
  mimeType: string;
  filename: string;
  mediaMetadata: MediaMetadata;
  contributorInfo?: ContributorInfo;
}

type Photo = {
  cameraMake?: string;
  cameraModel?: string;
  focalLength?: string;
  apertureFNumber?: string;
  isoEquivalent?: string;
  exposureTime?: string;
}

type MediaMetadata = {
  width: string;
  height: string;
  creationTime: string;
  photo: Photo;
}

type ContributorInfo = {
  profilePictureBaseUrl?: string;
  displayName?: string;
}
