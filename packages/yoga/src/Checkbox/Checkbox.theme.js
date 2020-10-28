const Checkbox = ({ spacing, colors, borders, radii, fontSizes }) => ({
  size: 24,
  margin: {
    right: spacing.xxsmall,
  },
  border: {
    width: borders.medium,
    radius: radii.semiRounded,
  },
  label: {
    padding: {
      left: spacing.xxsmall,
    },
    font: {
      size: fontSizes.small,
      color: colors.text.primary,
    },
  },
  helper: {
    margin: {
      top: spacing.xxxsmall,
    },
    font: {
      size: fontSizes.small,
      color: colors.text.secondary,
    },
  },
  hover: {
    border: {
      radius: radii.circle,
    },
  },
  checked: {
    icon: {
      color: colors.white,
    },
  },
  disabled: {
    backgroundColor: colors.elements.backgroundAndDisabled,
    border: {
      color: colors.elements.backgroundAndDisabled,
    },
  },
});

export default Checkbox;