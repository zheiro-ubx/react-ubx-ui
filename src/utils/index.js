//convert hex to rgb
export const hexToRGB = (hex) => {
  let r = 0, g = 0, b = 0;

  if (hex.length == 4) {
    r = '0x' + hex[1] + hex[1];
    g = '0x' + hex[2] + hex[2];
    b = '0x' + hex[3] + hex[3];
  } else if (hex.length == 7) {
    r = '0x' + hex[1] + hex[2];
    g = '0x' + hex[3] + hex[4];
    b = '0x' + hex[5] + hex[6];
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