let a;
let b;
let c;
let link;


$(document).ready(()=>{

$("#data").hide();
$('#s1').show();
$('#s2').hide();
$('#s3').hide();

$("#option1").click(()=>{
	
$('#s1').fadeIn();
$('#s2').hide();
$('#s3').hide();

})


$("#option2").click(()=>{
	
$('#s1').hide();
$('#s2').fadeIn('slow');
$('#s3').hide();

})


$("#option3").click(()=>{
	
$('#s1').hide();
$('#s2').hide();
$('#s3').fadeIn("slow");

})


$('#idSearch').click(function(e){
	e.preventDefault();
	a = `&i=`+ ($('#idInput').val()).toLowerCase();
	link= `https://www.omdbapi.com/?apikey=deb25011&`+a;
	allData();
	// $("#data").fadeIn("slow");

})


$('#nameSearch').click((e)=>{
	e.preventDefault();
	b = '&t='+ $('#nameInput').val();
	link = `https://www.omdbapi.com/?apikey=deb25011&`+b;
	allData()
	// $("#data").fadeIn("slow");
})

$('#yearSearch').click((e)=>{
	e.preventDefault();
	c = `&t=`+$("#name2Input").val()+`&y=`+$("#yearInput").val();
	link = `https://www.omdbapi.com/?apikey=deb25011&`+c;
	allData();
	// $("#data").fadeIn("slow");
})


// allData();	





})



let allData = () => {
	
	// alert(path);
	$.ajax({
		type:'GET',
		dataType:'json',
		async:true,
		timeout:2000,
		url:link,

		success:(response)=>{
			/*alert(link);
			console.log(response);*/
			$("#data").fadeOut('slow');
			$('#tData').text(response.Title);
			$('#year').text(`Year: `+response.Year);
			$('#actors').text(`Actors: `+response.Actors);
			$('#runtime').text(`Runtime: `+response.Runtime);
			$('#rating').text(`ImdbRating: `+response.imdbRating);
			$('#website').text(`Website: `+response.Website);	
			$('#poster').attr('src',response.Poster);
			$('#genre').text(`Genre: `+response.Genre);
			$('#director').text(`Director: `+response.Director);
			$('#language').text(`Language: `+response.Language);
			$('#plot').text(`Plot: `+response.Plot);				
			// $('body').css("background-image", `url(${response.Poster})`);
				if(response.Response == 'False'){
					alert(response.Error);
				}else{}

					if(response.Response == 'True'){
						$("#data").fadeIn("slow");
					}else{}

					if(response.Poster == 'N/A'){

					$('#poster').attr('src','img.jpg');

					}else{}


		},
		error: (err) => {

          	$("#data").fadeOut('slow');
            alert("error")

        }


	})

}