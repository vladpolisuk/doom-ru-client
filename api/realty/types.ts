import { Realty, RealtyFilter } from '../../store/realty/types';

export type GetRealtiesFilters = Partial<
	RealtyFilter &
		Pick<Realty, 'action'> & {
			page: number;
			take: number;
		}
>;
