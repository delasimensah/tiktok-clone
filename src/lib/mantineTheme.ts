import { MantineThemeOverride } from "@mantine/core";

const getTheme = (fontFamily: string): MantineThemeOverride => {
  return {
    fontFamily,
    headings: { fontFamily },
  };
};

export default getTheme;
