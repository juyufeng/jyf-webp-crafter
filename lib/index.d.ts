interface Options {
    quality?: number;
    width?: number;
    height?: number;
}
/**
 * When it cause CORS, you may failed to use
 */
export declare function srcToWebP(src: string, { quality, width, height }?: Options): Promise<Blob>;
export declare function blobToWebP(data: Blob, { quality, width, height }?: Options): Promise<Blob>;
export declare function arrayBufferToWebP(data: ArrayBuffer, { quality, width, height }?: Options): Promise<Blob>;
export {};
