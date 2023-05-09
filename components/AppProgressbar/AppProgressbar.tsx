import NextNProgress from 'nextjs-progressbar';
import { FC } from 'react';

/** ## App progress bar
 * The common progress bar for the app
 * @memo `false`
 * @returns `NextNProgress`
 */
const AppProgressbar: FC = () => {
	return (
		<NextNProgress
			height={2}
			color='#4200ff'
			options={{ showSpinner: false }}
			transformCSS={css => (
				<style>
					{css +
						` #nprogress .peg {
                            box-shadow: none;
                        }
                    `}
				</style>
			)}
		/>
	);
};

export default AppProgressbar;
