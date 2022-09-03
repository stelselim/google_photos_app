import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const PhotosIcon = ({
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  return <Icon name="image" size={size} color={color} />;
};
export const AlbumsIcon = ({
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  return <Icon name="photo-library" size={size} color={color} />;
};
export const SharedAlbumsIcon = ({
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  return <Icon name="folder-shared" size={size} color={color} />;
};
export const SearchIcon = ({
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  return <Icon name="search" size={size} color={color} />;
};
