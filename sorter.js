/*
###################################################
### sorter.js #####################################
### https://github.com/mjansma/Sorter/sorter.js ###
### Copyright 2016 M.Jansma #######################
###################################################
 */
$.fn.sorter = function(config) {
	
	var table = $(this);
	
	table.find('th').click(function(){
		
		var order = $(this).attr('order') || 'ASC';
		var index = $(this).index(), values = [];
		
		table.find('tr:gt(0)').each(function(i, tr) {
			values.push($(tr).children('td').eq(index));
		});
		
		if(order == 'DESC') {
			values.reverse();
		};
		
		values.sort(function(current, next){
			if(current.html() > next.html()) {
				if(order == 'ASC') {
					$(current).closest('tr').insertAfter($(next).closest('tr'));
				} else {
					$(current).closest('tr').insertBefore($(next).closest('tr'));	
				};
				return 1;
			}
			if(current.html() < next.html()) {
				if(order == 'ASC') {
					$(next).closest('tr').insertBefore($(current).closest('tr'));
				} else {
					$(current).closest('tr').insertAfter($(next).closest('tr'));	
				};
				return -1;
			}
			// Current must be equal to next
			return 0;
		});
		
		//Toggle order
		$(this).attr('order', order == 'ASC' ? 'DESC' : 'ASC');
		
	});
	
};
