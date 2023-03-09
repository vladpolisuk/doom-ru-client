import { useEffect, useRef, useState } from 'react';

type UserCountdownTimer = (initialTimeInSeconds: number, intervalInSeconds?: number) => [number, () => void];

/**
 * Custom hook for countdown timer.
 * @param {number} initialTimeInSeconds - Initial time in seconds.
 * @param {number} intervalInSeconds - Interval in seconds.
 * @returns {[number, () => void]} - Remaining time in seconds and function to stop the timer.
 */
const useCountdownTimer: UserCountdownTimer = (initialTimeInSeconds, intervalInSeconds = 1) => {
	const [remainingTime, setRemainingTime] = useState(initialTimeInSeconds);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (remainingTime > 0) {
			intervalRef.current = setInterval(() => {
				setRemainingTime(prevTime => prevTime - intervalInSeconds);
			}, intervalInSeconds * 1000);
		} else {
			clearInterval(intervalRef.current!);
		}

		return () => clearInterval(intervalRef.current!);
	}, [remainingTime, intervalInSeconds]);

	const stopTimer = () => {
		clearInterval(intervalRef.current!);
	};

	return [remainingTime, stopTimer];
};

export default useCountdownTimer;
