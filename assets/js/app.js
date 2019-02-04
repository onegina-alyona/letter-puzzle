var NUMBER_PER_LINE = 8;

var text1 = "";
var text2 = "習近平春節前夕視察看望北京衛戍區中央領導同志看望老同志全面深化改革這五年百姓說新";
var text3 = "";

var random_text = "";

$('#next_button').hide();
$('#return_button').hide();

$('#start_button').click(function() {

	$(this).hide();
	$('.title').hide();
	// $('.text2_div').hide();
	$('.text3_div').html("");
	text3 = "";

	text1 = text3 = "";
	var st = parseInt(Math.random() * 100) % 5 * NUMBER_PER_LINE;
	for (var i = st; i < st + NUMBER_PER_LINE; i++) {
		text1 += text2[i];
	}

	$('.text1_div').text(text1);
	$('.text1_div').show();

	setTimeout(() => {
		$('.text1_div').hide();

		var html_str = "";
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < NUMBER_PER_LINE; j++) {
				var letter = text2[parseInt(Math.random() * text2.length)];
				html_str += "<button class=\"letter_button chinafont1\">" + letter +"</button>";
				random_text += letter;
			}
			html_str += "<br>";
		}
		
		$('.text2_div').html(html_str);
		$('.text2_div').show();

		$('.letter_button').click(function() {
			text3 += $(this).text();
			$('.text3_div').html(text3);
			if (text3.length > 0) $('#next_button').show();
		});

	}, 3000);
	
});

$('#next_button').click(function() {
	$(this).hide();
	$('.text1_div').show();
	$('.text2_div').hide();

	var html_str = ""; 
	for (var i = 0, j; i < text3.length; i++) {
		if (text1[i] == text3[i]) {
			html_str += "<span class=\"green\">" + text3[i] + "</span>";
		}
		else {
			for (j = 0; j < text1.length; j++) {
				if (i == j) continue;
				if (text1[j] == text3[i]) break;
			}
			if (j < text1.length) html_str += "<span class=\"yellow\">" + text3[i] + "</span>";
			else html_str += "<span class=\"red\">" + text3[i] + "</span>";
		}
	}
	$('.text3_div').html(html_str);
	$('#return_button').show();

	$('#return_button').click(function() {
		$(this).hide();
		$('#start_button').click();
	})
});
