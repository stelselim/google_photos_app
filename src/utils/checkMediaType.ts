export type MediaType = 'Photo' | 'Video';

export const checkMediaType = (mimeType: string): MediaType => {
  const isPhoto: boolean =
    mimeType.includes('jpg') ||
    mimeType.includes('jpeg') ||
    mimeType.includes('heic') ||
    mimeType.includes('heif') ||
    mimeType.includes('webp') ||
    mimeType.includes('png') ||
    mimeType.includes('gif');
  if (isPhoto) {
    return 'Photo';
  }
  return 'Video';
};
