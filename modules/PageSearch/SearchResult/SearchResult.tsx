import clsx from 'clsx';
import { useState } from 'react';
import { Realty } from '../../../types';
import { RealtyItem } from './RealtyItem';
import s from './SearchResult.module.scss';

const SearchResult = () => {
	const [state, setState] = useState<Realty[]>([
		{
			id: 1,
			action: 'rent',
			address: 'б-р Первого Салюта, 6В, р-н Восточный',
			area: 30.5,
			bedrooms: 2,
			currency: 'RUB',
			description:
				'Сдаётся 2-х комнатная квартира от СОБСТВЕННИКА В хорошем состоянии. Порядочным людям (гражданам РФ), без домашних животных, на длительное время, в развитом районе. Квартира полностью укомплектована мебелью и бытовой техникой. Оплата 20000 руб. +ком услуги. Залог равен ежемесячному платежу.',
			elevator: true,
			floor: 2,
			houseType: 'panel',
			images: [],
			price: 16000,
			primeImage: 'https://www.udr.com/globalassets/corporate/homepage/homepage_4_1274towson.jpg',
			repair: 'euro',
			favorite: true,
			rooms: 2,
			term: 'month',
			title: '2-к. квартира, 45 м², 8/9 эт.',
			type: 'apartment',
			createdAt: Date.now(),
			updatedAt: Date.now()
		},
		{
			id: 2,
			action: 'rent',
			address: 'б-р Первого Салюта, 6В, р-н Восточный',
			area: 30.5,
			bedrooms: 2,
			currency: 'RUB',
			description:
				'Сдаётся 2-х комнатная квартира от СОБСТВЕННИКА В хорошем состоянии. Порядочным людям (гражданам РФ), без домашних животных, на длительное время, в развитом районе. Квартира полностью укомплектована мебелью и бытовой техникой. Оплата 20000 руб. +ком услуги. Залог равен ежемесячному платежу.',
			elevator: true,
			floor: 2,
			houseType: 'panel',
			images: [],
			price: 16000,
			primeImage:
				'https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
			repair: 'euro',
			favorite: true,
			rooms: 2,
			term: 'month',
			title: '2-к. квартира, 45 м², 8/9 эт.',
			type: 'apartment',
			createdAt: Date.now(),
			updatedAt: Date.now()
		},
		{
			id: 3,
			action: 'rent',
			address: 'б-р Первого Салюта, 6В, р-н Восточный',
			area: 30.5,
			bedrooms: 2,
			currency: 'RUB',
			description:
				'Сдаётся 2-х комнатная квартира от СОБСТВЕННИКА В хорошем состоянии. Порядочным людям (гражданам РФ), без домашних животных, на длительное время, в развитом районе. Квартира полностью укомплектована мебелью и бытовой техникой. Оплата 20000 руб. +ком услуги. Залог равен ежемесячному платежу.',
			elevator: true,
			floor: 2,
			houseType: 'panel',
			images: [],
			price: 16000,
			primeImage:
				'https://images.unsplash.com/photo-1628592102751-ba83b0314276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1397&q=80',
			repair: 'euro',
			favorite: false,
			rooms: 2,
			term: 'month',
			title: '2-к. квартира, 45 м², 8/9 эт.',
			type: 'apartment',
			createdAt: Date.now(),
			updatedAt: Date.now()
		},
		{
			id: 4,
			action: 'rent',
			address: 'б-р Первого Салюта, 6В, р-н Восточный',
			area: 30.5,
			bedrooms: 2,
			currency: 'RUB',
			description:
				'Сдаётся 2-х комнатная квартира от СОБСТВЕННИКА В хорошем состоянии. Порядочным людям (гражданам РФ), без домашних животных, на длительное время, в развитом районе. Квартира полностью укомплектована мебелью и бытовой техникой. Оплата 20000 руб. +ком услуги. Залог равен ежемесячному платежу.',
			elevator: true,
			floor: 2,
			houseType: 'panel',
			images: [],
			price: 16000,
			primeImage:
				'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
			repair: 'euro',
			favorite: false,
			rooms: 2,
			term: 'month',
			title: '2-к. квартира, 45 м², 8/9 эт.',
			type: 'apartment',
			createdAt: Date.now(),
			updatedAt: Date.now()
		},
		{
			id: 5,
			action: 'rent',
			address: 'б-р Первого Салюта, 6В, р-н Восточный',
			area: 30.5,
			bedrooms: 2,
			currency: 'RUB',
			description:
				'Сдаётся 2-х комнатная квартира от СОБСТВЕННИКА В хорошем состоянии. Порядочным людям (гражданам РФ), без домашних животных, на длительное время, в развитом районе. Квартира полностью укомплектована мебелью и бытовой техникой. Оплата 20000 руб. +ком услуги. Залог равен ежемесячному платежу.',
			elevator: true,
			floor: 2,
			houseType: 'panel',
			images: [],
			price: 16000,
			primeImage:
				'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
			repair: 'euro',
			favorite: true,
			rooms: 2,
			term: 'month',
			title: '2-к. квартира, 45 м², 8/9 эт.',
			type: 'apartment',
			createdAt: Date.now(),
			updatedAt: Date.now()
		},
		{
			id: 6,
			action: 'rent',
			address: 'б-р Первого Салюта, 6В, р-н Восточный',
			area: 30.5,
			bedrooms: 2,
			currency: 'RUB',
			description:
				'Сдаётся 2-х комнатная квартира от СОБСТВЕННИКА В хорошем состоянии. Порядочным людям (гражданам РФ), без домашних животных, на длительное время, в развитом районе. Квартира полностью укомплектована мебелью и бытовой техникой. Оплата 20000 руб. +ком услуги. Залог равен ежемесячному платежу.',
			elevator: true,
			floor: 2,
			houseType: 'panel',
			images: [],
			price: 16000,
			primeImage:
				'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			repair: 'euro',
			rooms: 2,
			favorite: false,
			term: 'month',
			title: '2-к. квартира, 45 м², 8/9 эт.',
			type: 'apartment',
			createdAt: Date.now(),
			updatedAt: Date.now()
		}
	]);

	const toggleFavorite = (id: number) => {
		const copy = [...state];
		copy.forEach(realty => {
			if (realty.id === id) realty.favorite = !realty.favorite;
		});
		setState(copy);
	};

	const styles = clsx(s.search_result, 'unlisted');

	return (
		<ul className={styles}>
			{state.map(realty => {
				return (
					<RealtyItem
						toggleFavorite={toggleFavorite}
						key={realty.id}
						{...realty}
					/>
				);
			})}
		</ul>
	);
};

export default SearchResult;
