export interface IPhotoMediaItemTypes {
  id: string;
  description: string;
  productUrl: string;
  baseUrl: string;
  mimeType: string;
  filename: string;
  mediaMetadata: MediaMetadata;
  contributorInfo?: ContributorInfo;
}

interface Photo {
  cameraMake?: string;
  cameraModel?: string;
  focalLength?: string;
  apertureFNumber?: string;
  isoEquivalent?: string;
  exposureTime?: string;
}

interface MediaMetadata {
  width: string;
  height: string;
  creationTime: string;
  photo: Photo;
}

interface ContributorInfo {
  profilePictureBaseUrl?: string;
  displayName?: string;
}
