import convertImageToBuffer from './convertImageToBuffer';

type ConvertImagesToArrayBuffer = (images: File[]) => Promise<Buffer[]>;

/** Convert images to Buffer Array
 * The function that gives File[] and returns Buffer[]
 * @param images File[]
 * @returns `Promise<Buffer[]>`
 */
const convertImagesToBufferArray: ConvertImagesToArrayBuffer = images => {
	return Promise.all(images.map(convertImageToBuffer));
};

export default convertImagesToBufferArray;
