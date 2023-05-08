type ConvertImageToBuffer = (imageFile: File) => Promise<Buffer>;

/** ## Convert Image To Buffer
 * Te function that gives input:file and convert it to buffer
 * @param imageFile File
 * @returns `Promise<Buffer>`
 */
const convertImageToBuffer: ConvertImageToBuffer = imageFile => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onload = () => {
			const arrayBuffer = reader.result;
			if (!arrayBuffer) return;
			const buffer = Buffer.from(arrayBuffer as ArrayBuffer);
			resolve(buffer);
		};

		reader.onerror = error => reject(error);
		reader.readAsArrayBuffer(imageFile);
	});
};

export default convertImageToBuffer;
