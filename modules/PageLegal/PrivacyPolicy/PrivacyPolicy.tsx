import clsx from 'clsx';
import s from '../legal.module.scss';

const PrivacyPolicy = () => {
	const containerStyles = clsx(s.legal_container, 'container');

	return (
		<div className={s.legal}>
			<main
				id='main'
				className={containerStyles}>
				<h1>Privacy Policy</h1>
				<h2>Section 1</h2>
				<p className={s.legal_text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsa laudantium asperiores nam
					reprehenderit, aperiam fugit iste veritatis rem quod necessitatibus enim molestiae eos ipsum, at
					culpa? Provident, doloribus impedit?
				</p>
				<h3>Subsection 1.1</h3>
				<p className={s.legal_text}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, doloremque dolore numquam,
					obcaecati hic vero saepe eaque voluptatum itaque deserunt aspernatur ratione neque reiciendis
					molestiae perferendis porro voluptatibus minus molestias?
				</p>
				<h3>Subsection 1.2</h3>
				<p className={s.legal_text}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi unde quasi alias quod dolor dicta,
					consequuntur repudiandae sint distinctio. Aperiam, ab corporis! Beatae voluptatem, dicta debitis
					tempore repudiandae veniam minima!
				</p>
				<h2>Section 2</h2>
				<p className={s.legal_text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquid amet qui omnis praesentium in
					iste necessitatibus harum vel alias, tempore ad minima id assumenda iusto fuga excepturi dolores
					cupiditate.
				</p>
				<h3>Subsection 2.1</h3>
				<p className={s.legal_text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nesciunt exercitationem error
					repudiandae, distinctio corrupti soluta magnam cupiditate sit et, sequi repellendus deleniti?
					Voluptates eius id aspernatur veritatis perferendis nam. Quaerat est, cum vitae, culpa, sed tenetur
					doloremque eum laudantium consectetur earum praesentium distinctio non. Commodi perferendis
					provident qui vel! Debitis voluptatibus facilis voluptate a exercitationem odit eum, quos earum.
				</p>
				<h3>Subsection 2.2</h3>
				<p className={s.legal_text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, perspiciatis ullam. Vitae, natus!
					Delectus iste temporibus unde vero harum hic qui quaerat earum fugiat, optio nesciunt perferendis?
					Quaerat, neque ullam!
				</p>
			</main>
		</div>
	);
};

export default PrivacyPolicy;
