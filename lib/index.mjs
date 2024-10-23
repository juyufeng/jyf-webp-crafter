var DEFAULT_QUALITY = 0.75;

/**
 * When it cause CORS, you may failed to use
 */
export function srcToWebP(src, {
  quality: quality,
  width: width,
  height: height
} = {}) {
  return new Promise(function (resolve, reject) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var image = new Image();
    image.src = src;
    image.crossOrigin = 'anonymous';
    image.onload = function (e) {
      canvas.width = width || image.width;
      canvas.height = height || image.height;
      // @ts-ignore
      URL.revokeObjectURL(e.target.src);
      // @ts-ignore
      context.drawImage(e.target, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(function (data) {
        resolve(data);
      }, 'image/webp', quality || DEFAULT_QUALITY);
    };
    image.onerror = function (e) {
      return reject(e);
    };
  });
}
export function blobToWebP(data, {
  quality: quality,
  width: width,
  height: height
} = {}) {
  return srcToWebP(URL.createObjectURL(data), {
    quality: quality,
    width: width,
    height: height
  });
}
export function arrayBufferToWebP(data, {
  quality: quality,
  width: width,
  height: height
} = {}) {
  return blobToWebP(new Blob([data]), {
    quality: quality,
    width: width,
    height: height
  });
}