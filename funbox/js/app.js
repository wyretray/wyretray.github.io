let app = new Vue({
	el: '#app',
  	data: 
  	{
    	cards: 
    	{     
		  	0: {
		  		description: 'Сказочное заморское яство',
		  		title: 'Нямушка',
		  		taste: 'с фуа-гра',
		  		options: [ '<b>10</b> порций', 'мышь в подарок' ],
		  		weight: 0.5,
		  		annotation: 'Чего сидишь? Порадуй котэ, <a href="#">купи</a>.',
		  		disabled: false,
		  		isActive: false
		  	},
		  	1: {
		  		description: 'Сказочное заморское яство',
		  		title: 'Нямушка',
		  		taste: 'с рыбой',
		  		options: [ '<b>40</b> порций', '<b>2</b> мыши в подарок' ],
		  		weight: 2,
		  		annotation: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
		  		disabled: false,
		  		isActive: false
		  	},
		  	2: {
		  		description: 'Сказочное заморское яство',
		  		title: 'Нямушка',
		  		taste: 'с фуа-гра',
		  		options: [ '<b>100</b> порций', '<b>5 мышей в подарок</b>', 'заказчик доволен' ],
		  		weight: 5,
		  		annotation: 'Печалька, с курой закончился.',
		  		disabled: true,
		  		isActive: false
		  	}
		}
  	}
});
