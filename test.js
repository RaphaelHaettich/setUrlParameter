import test from 'ava';
import setUrlParameter from './setUrlParameter';

test('should return undefinded if no arguments are passed', t => {
	const urlWithNewParam = setUrlParameter();
	t.is(urlWithNewParam, undefined);
});

test('should add new parameter to URL with no existing parameter', t => {
	const url = 'https://www.example.com/index.html';
	let key = 'eee';
	const value = 'fff';

	const urlWithNewParam = setUrlParameter(url, key, value);
	t.is(urlWithNewParam, 'https://www.example.com/index.html?eee=fff');
});

test('should add new parameter to URL with existing parameter', t => {
	const url = 'https://www.example.com/index.html?aaa=bbb&ccc=ddd';
	let key = 'eee';
	const value = 'fff';

	const urlWithNewParam = setUrlParameter(url, key, value);
	t.is(urlWithNewParam, 'https://www.example.com/index.html?aaa=bbb&ccc=ddd&eee=fff');
});

test('should replace parameter to URL with existing parameter', t => {
	const url = 'https://www.example.com/index.html?aaa=bbb&ccc=ddd';
	let key = 'aaa';
	const value = 'fff';

	const urlWithNewParam = setUrlParameter(url, key, value);
	t.is(urlWithNewParam, 'https://www.example.com/index.html?aaa=fff&ccc=ddd');
});

test('should add special character parameter to URL with existing parameter and decode it', t => {
	const url = 'https://www.example.com/index.html';
	let key = '🎿';
	const value = '⛷';

	const urlWithNewParam = setUrlParameter(url, key, value);
	t.is(urlWithNewParam, 'https://www.example.com/index.html?%F0%9F%8E%BF=%E2%9B%B7');
});

test('should replace special character parameter to URL with existing parameter and decode it', t => {
	const url = 'https://www.example.com/index.html?%F0%9F%8E%BF=%E2%9B%B7';
	let key = '🎿';
	const value = 'test';

	const urlWithNewParam = setUrlParameter(url, key, value);
	t.is(urlWithNewParam, 'https://www.example.com/index.html?%F0%9F%8E%BF=test');
});