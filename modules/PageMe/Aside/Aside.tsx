import { useEffect, useState } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import { AsideTabs } from './AsideTabs/AsideTabs';

export const Aside = () => {
	const me = useTranslation('me');
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		setCurrent(0);
	}, []);

	const tabs = me.aside.tabs;

	const components = tabs.map(({ name, title, url, Icon, id }) => (
		<AsideTabs.Item
			Icon={Icon}
			tabId={id}
			current={current}
			setCurrent={setCurrent}
			href={url}
			title={title}
			key={name}
			text={name}
		/>
	));

	return <AsideTabs>{components}</AsideTabs>;
};
