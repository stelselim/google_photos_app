export type OrientationType = 'Portrait' | 'Landscape';

export const checkOrientationType = (
  width: number,
  height: number,
): OrientationType => {
  if (width < height) {
    return 'Landscape';
  }
  return 'Portrait';
};
