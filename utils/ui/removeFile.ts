type RemoveFile = (files: FileList | null, fileToRemove: File | null) => FileList;

/** ## Remove File from File Input
 * The function that gives input:files and file and remove it from input:files
 * @param files input:files
 * @param fileToRemove File
 * @returns `FileList`
 */
const removeFile: RemoveFile = (files, fileToRemove) => {
	if (!files) return new FileList();
	if (!fileToRemove) return files;
	const dt = new DataTransfer();
	const filesArray = Array.from(files);
	const filteredFiles = filesArray.filter(file => file !== fileToRemove);
	filteredFiles.forEach(file => dt.items.add(file));
	return dt.files;
};

export default removeFile;
