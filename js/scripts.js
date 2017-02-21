var mode = "DEFAULT";
var numSquares = 0;

$(document).ready(
	function()
	{
		$(':input#border_checkbox').prop('checked', true);
		numSquares = 16;
		createGrid(numSquares);
		
		/**
			Clears and resizes the grid according to the dimensions that is provided by the user.
			The total 2D pixel space used remains the same.
		**/
		$('#clear').click(function()
		{
			var numSquaresString = prompt("How many rows do you want the new grid to have? (2-100)");
			numSquares = parseInt(numSquaresString);
			createGrid(numSquares);
		});
		
		$('#reset').click(function()
		{
			createGrid(16);
		});
		
		$('#default').click(function()
		{
			mode = "DEFAULT";
			createGrid(numSquares);
		});
		
		$('#random').click(function()
		{
			mode = "RANDOM";
			createGrid(numSquares);
		});
		
		$('#trail').click(function()
		{
			mode = "TRAIL";
			createGrid(numSquares);
		});
		
		$('input#border_checkbox').change(
		function(){
			if($(this).is(':checked'))
			{
				console.log("CK");
			} 
			else 
			{
				console.log("UCK");
			}
		});
		
	}
);

function createGrid(rows)
{
		var rowName = ".row";
		var squareSize = 625 / rows;
		console.log("Squaresize is: " +squareSize);
		$('.row').remove();
		
		
		for(var i = 0; i < rows; i++)
		{
			$toAppend = $('<div class="row" style=""></div>');
			$(".grid").append($toAppend);
		}
		$('.row').css('height', squareSize +'px');
		
		for (var j = 0; j < rows; j++)
		{
			$('.row').append('<div class="square" style=" width: 45px; height: 45px; display: inline-block;"></div>');
		}
		
		$('.square').css('height', squareSize +'px');
		$('.square').css('width', squareSize +'px');
		
		$('.square').mouseenter(function() 
		{
			// switch case here
			switch (mode) 
			{
				case "DEFAULT":
					$(this).css('opacity', 0.7);
					break;
				case "RANDOM":
					// Generate random RGB values
					var r = Math.floor((Math.random() * 256) + 0);
					var g = Math.floor((Math.random() * 256) + 0);
					var b = Math.floor((Math.random() * 256) + 0);
					
					$(this).css("background-color",'rgb(' +r +', ' +g +', ' +b +')');
					$(this).css('opacity', 1);
					break;
				case "TRAIL":
					 $(this).fadeTo(100,1);
					break;
			}
		});
		
		$('.square').mouseleave(function() 
		{
			switch (mode) 
			{
				case "TRAIL":
					$(this).fadeTo(500, 0.1);
					break;
			}
		});
}