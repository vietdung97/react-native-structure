export const CommonColors = {
  primary: '#0084ff',
  primaryLight: '#4da1ff',
  primary50: '#0084ff50',
  primary25: '#0084ff25',
  primary10: '#0084ff10',
  primary05: '#0084ff05',
  secondary: '#ff6f00',
  transparent: 'rgba(0,0,0,0)',
  typography: '#000',
  black: '#000',
  black75: 'rgba(0,0,0,0.75)',
  black50: 'rgba(0,0,0,0.5)',
  white: '#fff',
  white95: 'rgba(255,255,255,0.95)',
  white90: 'rgba(255,255,255,0.9)',
  white75: 'rgba(255,255,255,0.75)',
  white50: 'rgba(255,255,255,0.5)',
  white006: 'rgba(255,255,255,0.06)',
  gray: '#ccc',
  placeholder: '#4F555A',
  disabled: '#E5E5E5',
  error: '#FF0000',
  border: '#eee',
  background: '#FFF',
  kE5AFAF: '#E5AFAF',
  kC4BCFF: '#C4BCFF',
  kC2D8BE: '#C2D8BE',
  k222222: '#222222',
  k5BB318: '#5BB318',
  kFF7A51: '#FF7A51',
  kFFDB5C: '#FFDB5C',
  kDDA82A0A: '#DDA82A0A',
  kDFDFDF: '#DFDFDF',
  k8E8E8E: '#8E8E8E',
  kB8FF8D: '#B8FF8D',
  kC2C2C2: '#C2C2C2',
  kF8F8F8: '#F8F8F8',
  kE6EEFA: '#E6EEFA',
  k6C7A9C: '#6C7A9C',
  kEA047E: '#EA047E',
  kFF6D28: '#FF6D28',
  kFCE700: '#FCE700',
  k00F5FF: '#00F5FF',
  k150050: '#150050',
  k3F0071: '#3F0071',
  kFB2576: '#FB2576',
  kE0144C: '#E0144C',
  kE0144C50: '#E0144C50',
  k54B435: '#54B435',
  blueblack: '#1C315E',
  kA4AAB2: '#A4AAB2',
  kA6A6AA: '#A6A6AA',
  k8E8E93: '#8E8E93',
  k676E75: '#676E75',
};

type ColorTheme = {
  background: string;
  textHeader: string;
  bgColorIconHeader: string;
  whiteAndBlack: string;
  inputBackground: string;
  subTextConversationItem: string;
  borderTopBottomBar: string;
  unselectTabIcon: string;
}



export const LightColors: ColorTheme = {
  background: '#FFF',
  textHeader: '#000',
  bgColorIconHeader: 'rgba(0,0,0, 0.04)',
  whiteAndBlack: '#000',
  inputBackground: 'rgba(0, 0, 0, 0.05)',
  subTextConversationItem: 'rgba(0,0,0,0.5)',
  borderTopBottomBar: CommonColors.kA6A6AA,
  unselectTabIcon: CommonColors.kA4AAB2,
};

export const DarkColors: ColorTheme = {
  background: '#000',
  textHeader: '#FFF',
  bgColorIconHeader: '#3B3B3B',
  whiteAndBlack: '#FFF',
  inputBackground: 'rgba(255, 255, 255, 0.20)',
  subTextConversationItem: 'rgba(255, 255, 255, 0.50)',
  borderTopBottomBar: '#000',
  unselectTabIcon: CommonColors.k676E75,
};
