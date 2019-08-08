//convert hex to rgb
export const hexToRGB = (hex) => {
  let r = 0, g = 0, b = 0;

  if (hex.length == 4) {
    r = '0x' + h[1] + h[1];
    g = '0x' + h[2] + h[2];
    b = '0x' + h[3] + h[3];
  } else if (hex.length == 7) {
    r = '0x' + h[1] + h[2];
    g = '0x' + h[3] + h[4];
    b = '0x' + h[5] + h[6];
  }

  return {red: r, green: g, blue: b}
}

//returns the proper font color to be used based on background color hex
export const assessFontColor = (hex) => {
  const rgb = hexToRGB(hex)
  if ((rgb.red*0.299 + rgb.green*0.587 + rgb.blue*0.114) > 186) {
    return '#000000'
  } else {
    return '#FFFFFF'
  }
}