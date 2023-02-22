import NextNProgress from 'nextjs-progressbar';

/** ## App progress bar
 * The common progress bar for the app
 * @memo false
 */
export default function AppProgressbar() {
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
}
