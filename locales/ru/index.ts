import auth from './auth';
import common from './common';
import error from './error';
import footer from './footer';
import header from './header';
import home from './home';
import legal from './legal';
import me from './me';
import newRealty from './new';
import realty from './realty';
import search from './search';

const ru = {
	home,
	auth,
	search,
	footer,
	common,
	error,
	header,
	new: newRealty,
	realty,
	legal,
	me
};

export default ru;
