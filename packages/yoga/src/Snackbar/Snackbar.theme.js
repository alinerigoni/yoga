import { CheckedFull, AlertTriangle, Info } from '@gympass/yoga-icons';

const Snackbar = ({ colors, elevations, radii, spacing }) => ({
  border: {
    radius: radii.small,
  },
  height: {
    min: spacing.xxxlarge,
    max: spacing.huge,
  },
  padding: {
    default: spacing.small,
  },
  position: {
    desktop: {
      bottom: spacing.xxlarge,
      right: spacing.xxlarge,
    },
    mobile: {
      bottom: spacing.small,
      right: spacing.small,
      left: spacing.small,
    },
  },
  shadow: {
    default: elevations.small,
  },
  variant: {
    color: {
      success: colors.feedback.success.light,
      failure: colors.feedback.attention.light,
      info: colors.feedback.informative.light,
    },
    icon: {
      success: CheckedFull,
      failure: AlertTriangle,
      info: Info,
    },
  },
  minWidth: {
    desktop: 400,
    mobile: 320,
  },
  maxWidth: {
    default: 600,
  },
});

export default Snackbar;
