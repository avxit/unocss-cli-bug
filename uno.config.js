import presetUno from "@unocss/preset-uno";
import font from "@unocss/preset-web-fonts";

export default {
  presets: [
    font({
      provider: "google",
      fonts: {
        sans: "Roboto",
      },
    }),
  ],
};
