type FormatTime = (seconds: number, format: string) => string;

/**
 * Format time in seconds to the specified format.
 * @param {number} seconds - Time in seconds.
 * @param {string} format - Format in "mm:ss" or "hh:mm:ss".
 * @returns {string} - Formatted time.
 */
const formatTime: FormatTime = (seconds: number, format: string) => {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const sec = seconds % 60;

	let formattedTime = '';

	if (format === 'hh:mm:ss') {
		formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${sec
			.toString()
			.padStart(2, '0')}`;
	} else if (format === 'mm:ss') {
		formattedTime = `${minutes.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
	}

	return formattedTime;
};

export default formatTime;
