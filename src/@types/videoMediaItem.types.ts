export interface IVideoMediaItemTypes {
  id: string;
  description: string;
  productUrl: string;
  baseUrl: string;
  mimeType: string;
  filename: string;
  mediaMetadata: MediaMetadata;
  contributorInfo?: ContributorInfo;
}

interface Video {
  cameraMake?: string;
  cameraModel?: string;
  fps?: string;
  status: string;
}

interface MediaMetadata {
  width: string;
  height: string;
  creationTime: string;
  video: Video;
}

interface ContributorInfo {
  profilePictureBaseUrl?: string;
  displayName?: string;
}
