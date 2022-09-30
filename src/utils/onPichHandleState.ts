import {
  HandlerStateChangeEvent,
  PinchGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

export const onPinchHandlerStateChange = (
  count: number,
  event: HandlerStateChangeEvent<PinchGestureHandlerEventPayload>,
  setColumns: (count: number) => void,
) => {
  if (count === 3) {
    if (event.nativeEvent.scale < 1) {
      setColumns(5);
    }
  } else if (count === 5) {
    if (event.nativeEvent.scale > 1) {
      setColumns(3);
    }
  }
};

export const onAlbumPinchHandlerStateChange = (
  count: number,
  event: HandlerStateChangeEvent<PinchGestureHandlerEventPayload>,
  setColumns: (count: number) => void,
) => {
  if (count === 2) {
    if (event.nativeEvent.scale < 1) {
      setColumns(3);
    }
  } else if (count === 3) {
    if (event.nativeEvent.scale > 1) {
      setColumns(2);
    }
  }
};
