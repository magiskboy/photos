import useMediaQuery from '@material-ui/core/useMediaQuery';

export enum ScreenSize {
  MOBILE = 1,
  TABLET = 2,
  DESKTOP = 3,
  LARGER_DESKTOP = 4,
  EXTRA_LARGER_DESKTOP = 5,
}

interface DeviceDetectionProps {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
  largerDesktop: boolean;
  extraLargerDesktop: boolean;
  size: ScreenSize;
}
export const useDeviceDetection = (): DeviceDetectionProps => {
  const mobile = useMediaQuery('(max-width: 600px)');
  const tablet = useMediaQuery('(min-width: 600px) and (max-width: 767px)');
  const desktop = useMediaQuery('(min-width: 768px) and (max-width: 991px)');
  const largerDesktop = useMediaQuery('(min-width: 992px) and (max-width: 1199px)');
  const extraLargerDesktop = useMediaQuery('(min-width: 1200px)');

  const size = mobile
    ? ScreenSize.MOBILE
    : tablet
    ? ScreenSize.TABLET
    : desktop
    ? ScreenSize.DESKTOP
    : largerDesktop
    ? ScreenSize.LARGER_DESKTOP
    : ScreenSize.EXTRA_LARGER_DESKTOP;

  return { mobile, tablet, desktop, largerDesktop, extraLargerDesktop, size };
};
