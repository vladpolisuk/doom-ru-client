class AppDataTransfer {
	private _files: File[] = [];

	items: DataTransferItemList = {
		add: (file: File) => {
			this._files.push(file);
		}
	} as DataTransferItemList;

	get files(): FileList {
		return {
			length: this._files.length,
			item: (index: number) => {
				return this._files[index];
			}
		} as FileList;
	}
}

export default AppDataTransfer;
