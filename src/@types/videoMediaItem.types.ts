export type IVideoMediaItemTypes = {
  id: string;
  description: string;
  productUrl: string;
  baseUrl: string;
  mimeType: string;
  filename: string;
  mediaMetadata: MediaMetadata;
  contributorInfo?: ContributorInfo;
}

type Video = {
  cameraMake?: string;
  cameraModel?: string;
  fps?: string;
  status: string;
}

type MediaMetadata = {
  width: string;
  height: string;
  creationTime: string;
  video: Video;
}

type ContributorInfo = {
  profilePictureBaseUrl?: string;
  displayName?: string;
}
