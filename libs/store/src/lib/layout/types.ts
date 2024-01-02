export enum LanguageEnum {
  EN = 'en',
  UZ = 'uz',
}

export enum ThemeModeEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ILayoutState {
  readonly language: LanguageEnum;
  readonly themeMode: ThemeModeEnum;
  readonly displayMobileNavbar: boolean;
}
