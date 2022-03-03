// const React = require('react');
// const ReactDOM = require('react-dom');
import MovieCard from '../MovieCard';
// const { configure, shallow, mount, simulate } = require('enzyme');
// const { render, cleanup, act } = require('@testing-library/react');
// const Adapter = require('enzyme-adapter-react-16');

import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

afterEach(cleanup);

const initialProps = {
	term: "'type anything here'",
	onPress,
	poster: 'https://m.media-amazon.com/images/M/MV5BMDQ0MWEzMDEtMGZmNC00…ItZDMyNDc5MmFkODJjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
	size: 1,
	title: 'Blood Red Sky',
	type: 'movie',
	year: '2021',
};

describe('Search Bar', () => {
	/* 	let wrapper;
	beforeEach(() => {
		wrapper = mount(<MovieCard />);
	});

	it('render without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<MovieCard />, div);
	});

	it('check data-testid', () => {
		expect(wrapper.find('div#data-testid')).toBeTruthy();
	});

	const { term } = initialProps;
	it('check place holder', () => {
		expect(wrapper.find(<MovieCard term={term} />)).toBeTruthy();
	});
 */
	it('matches snapshot', () => {
		const tree = renderer.create(<MovieCard {...initialProps} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
