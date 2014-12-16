html { height: 100%; }
body { height: 100%; margin: 0; padding: 0;  }

html, html a {
  -webkit-font-smoothing: antialiased;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
}

/* Webkit */
::selection {
    background: #000;
    color: #fff;
}
/* Gecko/Mozilla */
::-moz-selection {
    background: #000;
    color: #fff;
}

#upload { padding:10px 20px; background:#000; color:#fff; float:right; opacity:0.5; position:relative; margin:-100px 20px 0px 0px; font-size:40px; z-index:10; }

/*FONT & BACKGROUND*/
body { font-family: "Droid Sans", Helvetica, Arial, Sans-serif; font-size:11px; }

a { color: #000; text-decoration:underline; }
a:hover { text-decoration:none; }

strong{font-weight:700;}
/*LOGO IMAGE*/

#logo { clear:both; margin-top:10px; width:790px; height:300px; margin-left:-10px; margin-right:-10px; border:5px solid #fff; background-image:url('http://phonicspark.github.io/soundmap/icon2.png'); }


span.link { cursor:pointer; }
span.link:hover { cursor:pointer; opacity:1.0; }

/*span.link:hover { cursor:pointer; text-decoration:underline; color:#888; }
*/

ul { list-style:none; margin:0; padding:0; }
li { margin-bottom:10px; }

#header { padding:10px 10px 5px 10px; }

#content { padding:10px; margin-top:5px; background:#f0ffff; }

#footer { clear:float; background:#f0ffff; color:#000; padding:10px; margin-top:10px; margin-bottom:10px; }

#map { height: 100%; width:100%; }

#topTitle{font-family:'Arvo'; font-size:15px; letter-spacing:0px; float:left; background:url('http://phonicspark.github.io/soundmap/icon2.png') no-repeat center right; height:20px; padding-right:35px; margin-right:20px;}

#top { position:fixed;  padding:6px 10px; top:0px; left:0px; width:100%; min-width:800px; color:#fff;  height:20px; background:rgba(0,0,0,0.9); letter-spacing:2px; line-height:20px;  }
/*#top { position:fixed; padding:7px 10px 5px 10px; top:0px; left:0px; width:100%; min-width:1000px; opacity:0.6; color:#000; height:14px; background:#fff;}*/

.arrow-down {
	display: inline-block;
	vertical-align: middle;
	position:relative;
	left:3px;
	top:-1px;
	content: "";
	width: 0; 
	height: 0; 
	border-left: 4px solid transparent;
	border-right: 4px solid transparent;	
	border-top: 4px solid #fff;
}

.icon-bar{
	display: block;
	width: 18px;
	height: 2px;
	background-color: #f5f5f5;
	-webkit-border-radius: 1px;
	-moz-border-radius: 1px;
	border-radius: 1px;
	-webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
	-moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
	box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
}

i{position:relative; top:-2px; left:7px;}


/*#top:hover { opacity:0.6; }*/

.left{float:left;}
.right{float:right;}
.clear{clear:both;}

.current{color:#fedd00;}

	#top a { color:#fff; text-decoration:none; }
	#top a:hover { opacity:1.0; }

/*#top a { color:#000; text-decoration:none; }*/
/*#top a:hover { color:#888;  }*/


	#top ul { list-style-type:none; }

	.dropdownMenu { margin-top:1px;  padding-right:10px; }
	.dropdownMenu li { display:inline; float:left; padding:6px 12px 0px 12px; margin:-6px 0px; }
	.dropdownMenu li a:link, .dropdownMenu li a:visited {   }
	.dropdownMenu li a:hover {  } 
/*	.dropdownMenu li ul { font-size:9px; position:absolute; visibility:hidden; color:#000; margin:6px 0px 0px -12px; padding:0px; background:#fff;}*/
	.dropdownMenu li ul { font-size:9px; position:absolute; visibility:hidden; color:#fff; margin:5px 0px 0px -12px; padding:0px; background:#000;}
	.dropdownMenu li ul li { clear:both; margin:1px 0px; }

	.dropdownMenu li a:active { color:#fedd00; position:relative; top:1px; left:1px;  }
	
	.dropdownMenu li span.link{padding:5px 0px;}
	.dropdownMenu li span.link:active { position:relative; top:1px; left:1px; }


	.caps{text-transform:uppercase;}


	#browser{ width:270px; position:fixed; right:0px; height:85%; top:42px; background:rgba(0,0,0,0.9); font-family:'Droid Sans'; font-size:11px; color:#fff; padding:10px 10px 40px 10px; }
/*#browser { float:right; position:absolute; top:40px; right:20px; padding:10px 20px 10px 10px; opacity:0.6; color:#000;  width:220px; letter-spacing:2px; background:#fff;}*/

	#browser_title{ margin-bottom:8px; letter-spacing:2px; }


	#browser h3{ padding:0px; margin:0px; margin-bottom:8px; letter-spacing:2px; font-size:11px; font-weight:bold; text-transform:uppercase;}

/*#browser:hover { opacity:0.6; }*/


	#browserList{ margin-left:0px; margin-top:0px; background:#000; letter-spacing:2px; font-size:10px; overflow:auto; outline: none;  width:270px; }

	span.close{ background:url('http://portlandsoundmap.com/img/close.png'); width:14px; height:14px; position:absolute;top:10px; right:10px; }



p { line-height:150%; }

.overlay {position:absolute;  z-index:10000; background:rgba(0,0,0,0.9); color:#fff; top:42px; left:0px; padding:10px 20px 10px 10px; display:none; overflow:auto; width:50%;}
.overlay p{font-size:13px; margin:0px; padding:5px 20px 5px 0px;}

.overlay h3:first-child{padding:0px 0px 5px 0px; margin:0px; font-size:13px; text-transform:uppercase; letter-spacing:2px; }
.overlay h3{padding:15px 0px 5px 0px; margin:0px; font-size:13px;  text-transform:uppercase;  letter-spacing:2px;}

.overlay a{color:#fff;}

.overlay a:hover{text-decoration:underline;}


#upload_body{overflow:hidden;}

#contribute{overflow:hidden; width:700px;}
#contribute iframe{width:100%; overflow:hidden; }





#title { float:left; }


#footer a { text-decoration:none; }

.selected { background:#f0ffff; color:#000; text-decoration:none; border:1px solid black; padding:4px; }



/*NAVBAR*/

#mainnav { margin-top:5px; margin-left:-10px; margin-right:-10px; background:#f0ffff; color:#000; padding:10px 5px 10px 5px; text-align:right; }

#mainnav ul { list-style:none; margin:0; padding:0; }

#mainnav li { display:inline; }

#mainnav li a { background:#f0ffff; color:#000; text-decoration:none; padding:5px; }

#mainnav li a:hover { background:#f0ffff; color:#000; text-decoration:underline; padding:5px; }


#uploadprogressbar{position:relative; top:2px; display:block; }

/*UPLOAD*/

#upload_page {color:#fff; padding:0px; margin:0px; font-family: "Droid Sans", Helvetica, Arial, Sans-serif;  font-size:11px; margin-top:5px; height:95%;}


h3{padding:0px 0px 10px 0px; margin:0px; font-size:13px;  text-transform:uppercase;  letter-spacing:2px; color:#fff;}

#upload_page a {color:#fff;}

.error { font-weight: bold; color: #fedd00; }
	
#upload_page label { height:20px; width: 105px; color:#fff; float: left; text-align: right; margin-right: 0.5em; display: block; letter-spacing:0px;  }

#upload_page input { height:20px; background:#f0fff0; color: #000; border: 1px solid #000; padding:2px 2px 2px 2px; margin-bottom:1px; margin-top:1px; }

#upload_page input.submit { color: #000; border: 1px solid #000; background:#f0fff0; padding:5px 10px 20px 10px; margin-bottom:20px;}
#upload_page input.submit:active { position:relative; left:1px; top:1px;}

#upload_page input.file  { width:font-size:12px; color: #000; border: 1px solid #000; background:#f0fff0; }

#upload_page input.checkbox { border: 1px solid #000; background:#f0fff0; }

#upload_page select { color: #000; border: 1px solid #000; background:#f0fff0; }

#upload_page option { background:#f0fff0; padding:0px 4px 0px 3px; }

#upload_page textarea { color: #000; border: 1px solid #000; background:#fff; font-family: "Droid Sans", Helvetica, Arial, Sans-serif; font-size:12px; }

#upload_page fieldset { border: 1px solid #fff; padding-left:10px; padding-bottom:15px; margin-bottom:10px; margin-top:10x; padding-top:5px; }

#upload_page legend { border: 1px solid #fff; padding: 2px 4px 4px 6px; }

#upload_page #upload_map { width: 100%; height: 240px; border:1px solid black; }


/*sound map*/

/*
#map_main { position:relative; padding-top:0px; padding-bottom:0px; width:250px; margin:10px; font-size:10px; }

#map_media { position:relative; margin-bottom:10px;}

#map_title { position:relative; font-size:11px; font-weight:bold; margin-bottom:10px; }

#map_audio { position:relative; top:2px; left:0px; width:250px; height:188px; }

#map_photos { position:relative; top:2px; left:0px; width:250px; height:188px; padding-bottom:13px; }

#map_video { position:relative; top:2px; left:0px; width:275px; height:200px; }

#map_info { position:relative; top:2px; width:250px; left:0px; }

#map_image_links { margin-top:5px; position:relative; top:0px; left:0px; font-size:10px; width:250px; }

#map_download { position:relative; top:2px; left:0px; padding-bottom:3px; font-size:10px; }

*/


#map_main { position:relative; padding-top:0px; padding-bottom:0px; width:250px; margin:0px 10px 0px 10px; font-size:11px; letter-spacing:0.2px; line-height:14px; background:rgba(0,0,0,0.9); padding:20px; color:#fff; border:1px solid #4a4a4a; border-bottom:none; }

#map_main a {color:#fff;}

#map_title { position:relative; font-size:11px; font-weight:bold; padding-bottom:7px; z-index:10; }

#map_image { position:relative; margin-bottom:-5px; z-index:20;}

#map_media { position:relative; top:0px; left:0px; margin-bottom:5px; z-index:200;}

#map_info { position:relative; top:2px; width:250px; left:0px; }

#map_info li { padding:0; margin:5px 0px 5px 0px; }

#map_download { margin:5px 0px 0px 0px; text-align:center;}

#bubble_arrow {
	background-image:url('http://portlandsoundmap.com/img/bubble_arrow_wide.png');
	width:290px;
	height:70px;
	opacity:0.9;
	position:absolute;
}

/*sound map installation*/

/*sound map*/

#soundPlayer { height:24px; width:250px; z-index:20;}

#inst_main { position:relative; padding-top:0px; padding-bottom:0px; width:250px; margin:0px 10px 10px 10px; font-size:11px; letter-spacing:0.2px; line-height:15px; }

#inst_title { position:relative; font-size:12px; font-weight:bold; margin-bottom:10px; }

#inst_image { position:relative; margin-bottom:-5px; z-index:20px;}

#inst_media { position:relative; margin-bottom:10px;}

#inst_info { position:relative; top:2px; width:250px; left:0px; }

#inst_info li { padding:0; margin:5px 0px 5px 0px; }

.justify {text-align:justify;}


#search{margin-left:10px; margin-top:-4px; height:12px;}

#upload_left{float:left; width:325px; margin:0px 10px 0px 0px;}
#upload_right{float:left; max-width:345px; margin:0px 0px 0px 0px;}


@media (max-width: 1030px) {
#contribute{width:350px;}
}

@media (max-width: 680px) {
#contribute{width:350px;}
}

@media (max-width: 480px) {
#browser{display:none;}
}

@media (max-width: 1150px) {
/*	.dropdownMenu{float:right; font-family: "Droid Sans", Helvetica, Arial, Sans-serif; font-size:11px; letter-spacing:0px; padding-right:2px; }
	
	//#browser { color:#fff;  width:230px; height:19px; letter-spacing:2px; background:#000; padding:0px 10px; margin:0;}
	
	#browserList { margin-left:0px; margin-top:3px; background:#000; letter-spacing:1px; font-size:10px; overflow:auto; outline: none;  width:230px; }

	#topTitle{font-family:'Arvo'; font-size:11px; letter-spacing:1px}
*/
}

@media (max-width: 950px) {
/*	
	#top { position:fixed; padding:6px 10px 5px 10px; top:0px; left:0px; width:100%; min-width:800px; opacity:0.6; color:#fff; line-height:13px; height:14px; background:#000; }
	
	.dropdownMenu{float:right; font-family: "Droid Sans", Helvetica, Arial, Sans-serif; font-size:10px; letter-spacing:0px; padding-right:2px; }
	
	.dropdownMenu li { display:inline; float:left; padding:6px 10px; margin:-6px 0px; }
	
	//#browser { color:#fff;  width:160px; height:19px; letter-spacing:2px; background:#000; padding:0px 0px 0px 5px; margin:0;}
	
	#browserList { margin-left:0px; margin-top:3px; background:#000; letter-spacing:1px; font-size:10px; overflow:auto; outline: none;  width:276px; }

	#search{margin-left:5px; margin-top:-4px; height:12px; width:70px;}
	
	#topTitle{font-family:'Arvo'; font-size:11px; letter-spacing:0px}
*/
}

