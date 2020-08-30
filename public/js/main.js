// simple close the editor function
function close_editor(e){
	if(document.querySelector('.real_changer').classList.contains('max_width_0')) {
		document.querySelector('.real_changer').classList.remove('max_width_0');
	}
	else{
		document.querySelector('.real_changer').classList.add('max_width_0');
	}
	console(document.querySelector('.change_content_changes').innerHTML);
}

// switch mode
function toggle_device(target){
	if (document.querySelector('.computer_ch__real_changer').classList.contains('active')) {
		document.querySelector('.computer_ch__real_changer').classList.remove('active');
		document.querySelector('.phone_ch__real_changer').classList.add('active');
		document.querySelector('.img_container_changer').classList.add('phone_view');
		document.querySelector('.changer_main_photo').classList.add('phone_view');
		document.querySelector('.example_h1__img_container_changer').classList.add('phone_view');
		document.querySelector('.example_description__img_container_changer').classList.add('phone_view');
		document.querySelector('.example_0_4x').classList.add('phone_view');
	}
	else{
		document.querySelector('.computer_ch__real_changer').classList.add('active');
		document.querySelector('.phone_ch__real_changer').classList.remove('active');
		document.querySelector('.img_container_changer').classList.remove('phone_view');
		document.querySelector('.changer_main_photo').classList.remove('phone_view');
		document.querySelector('.example_h1__img_container_changer').classList.remove('phone_view');
		document.querySelector('.example_description__img_container_changer').classList.remove('phone_view');
		document.querySelector('.example_0_4x').classList.remove('phone_view');
	}
}

//full screen
var elem_full_screen = document.querySelector(".changer_main_photo");
function openFullscreen(target) {
	console.log('GGG2')
  if (elem_full_screen.requestFullscreen) {
    elem_full_screen.requestFullscreen();
  } else if (elem_full_screen.mozRequestFullScreen) { /* Firefox */
    elem_full_screen.mozRequestFullScreen();
  } else if (elem_full_screen.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem_full_screen.webkitRequestFullscreen();
  } else if (elem_full_screen.msRequestFullscreen) { /* IE/Edge */
    elem_full_screen.msRequestFullscreen();
  }
  target.setAttribute('onclick','closeFullscreen(this)');
  target.firstElementChild.innerText = 'fullscreen_exit';
}

function closeFullscreen(target) {
	console.log('GGG')
	if (document.exitFullscreen) {
	  document.exitFullscreen();
	} else if (document.mozCancelFullScreen) { /* Firefox */
	  document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
	  document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) { /* IE/Edge */
	  document.msExitFullscreen();
	}
	target.setAttribute('onclick','openFullscreen(this)');
	target.firstElementChild.innerText = 'fullscreen';
}


// start check
function check_from_start(el) {
	if (document.querySelector('.prof__text_container__home')) {
		if (document.querySelector('.prof__text_container__home').innerText.length === 0) {
			document.querySelector('.prof__text_container__home').classList.add('display_none');
		}
		else{
			document.querySelector('.prof__text_container__home').classList.remove('display_none');
		}
	}
	else{

	}
}
check_from_start();


// simple close the editor function
function open_editor_texts_main(el){
	var attribute = el.getAttribute("change");
	var current_attribute = document.querySelector('.change_content_changes').getAttribute("current");
	if (attribute === current_attribute) {
		close_editor();
	}
	else{
		document.querySelector('.change_content_changes').setAttribute('current',attribute);
		var all_forms = document.querySelectorAll('#form_changes');
		if(document.querySelector('.real_changer').classList.contains('max_width_0')) {
			var text_create = all_forms.forEach(function(item){
				item.classList.add('display_none');
			})
			document.querySelector('.texts_main__changer').classList.remove('display_none');
			document.querySelector('.real_changer').classList.remove('max_width_0');
		}
		else{
			document.querySelector('.real_changer').classList.add('max_width_0');
			setTimeout(function (){
				var text_create = all_forms.forEach(function(item){
					item.classList.add('display_none');
				})
				document.querySelector('.texts_main__changer').classList.remove('display_none');
				document.querySelector('.real_changer').classList.remove('max_width_0');
			},300)
		}
	}
}
function open_editor_main_photo(el){
	var attribute = el.getAttribute("change");
	var current_attribute = document.querySelector('.change_content_changes').getAttribute("current");
	if (attribute === current_attribute) {
		close_editor();
	}
	else{
		document.querySelector('.change_content_changes').setAttribute('current',attribute);
		var all_forms = document.querySelectorAll('#form_changes');
		if(document.querySelector('.real_changer').classList.contains('max_width_0')) {
			var text_create = all_forms.forEach(function(item){
				item.classList.add('display_none');
			})
			document.querySelector('.photo_ch_main_changer').classList.remove('display_none');
			document.querySelector('.real_changer').classList.remove('max_width_0');
		}
		else{
			document.querySelector('.real_changer').classList.add('max_width_0');
			setTimeout(function (){
				var text_create = all_forms.forEach(function(item){
					item.classList.add('display_none');
				})
				document.querySelector('.photo_ch_main_changer').classList.remove('display_none');
				document.querySelector('.real_changer').classList.remove('max_width_0');
			},300)
		}
	}
}
function open_editor_socials(el){
	var attribute = el.getAttribute("change");
	var current_attribute = document.querySelector('.change_content_changes').getAttribute("current");
	if (attribute === current_attribute) {
		close_editor();
	}
	else{
		document.querySelector('.change_content_changes').setAttribute('current',attribute);
		var all_forms = document.querySelectorAll('#form_changes');
		if(document.querySelector('.real_changer').classList.contains('max_width_0')) {
			var text_create = all_forms.forEach(function(item){
				item.classList.add('display_none');
			})
			document.querySelector('.socials_main_changer').classList.remove('display_none');
			document.querySelector('.real_changer').classList.remove('max_width_0');
		}
		else{
			document.querySelector('.real_changer').classList.add('max_width_0');
			setTimeout(function (){
				var text_create = all_forms.forEach(function(item){
					item.classList.add('display_none');
				})
				document.querySelector('.socials_main_changer').classList.remove('display_none');
				document.querySelector('.real_changer').classList.remove('max_width_0');
			},300)
		}
	}
}





// preview file v2
function previewFile(el) {
	var preview = el.nextElementSibling;
	var preview2 = document.getElementById('img_main_changer');
	console.log(preview);
	var file = el.files[0];
	console.log(file);
	var reader = new FileReader();
	reader.onloadend = function() {
		document.getElementById('img__photo_container_change_content_changes').classList.remove('turned_off');
		document.getElementById('phto_choose_icon__photo_container_change_content_changes').classList.add('turned_off');
		preview.src = reader.result;
		preview2.src = reader.result;
	};
	if (file) {
	  reader.readAsDataURL(file);
	} else {
		console.log('Allright');
	}
}



// main onkeyups
function keyup_main_name(el) {
	document.querySelector('.example_h1__img_container_changer').innerText = el.value;
	el.setAttribute('value',el.value);
	if (el.value.length === 0) {
		document.querySelector('.example_h1__img_container_changer').classList.add('display_none');
	}
	else{
		document.querySelector('.example_h1__img_container_changer').classList.remove('display_none');
	}
}

function keyup_main_description(el) {
	document.querySelector('.example_description__img_container_changer').innerText = el.value;
	el.setAttribute('value',el.value);
	if (el.value.length === 0) {
		document.querySelector('.example_description__img_container_changer').classList.add('display_none');
	}
	else{
		document.querySelector('.example_description__img_container_changer').classList.remove('display_none');
	}
}

function keyup_main_tag(el) {
	document.querySelector('.prof__text_container__home').innerText = el.value;
	el.setAttribute('value',el.value);
	if (el.value.length === 0) {
		document.querySelector('.prof__text_container__home').classList.add('display_none');
		console.log('working',el.value.length);
	}
	else{
		document.querySelector('.prof__text_container__home').classList.remove('display_none');
		console.log('no working',el.value.length);
	}
}

// onkeyup saving
function onkeyup_save(el) {
	el.setAttribute('value',el.value);
}


// switch mode
function ChangeMode(target){
	if (document.querySelector('.switch_mode').classList.contains('false')) {
		document.querySelector('.switch_mode').classList.remove('false');
		document.querySelector('.slider__switch_mode').classList.remove('false');
	}
	else{
		document.querySelector('.switch_mode').classList.add('false');
		document.querySelector('.slider__switch_mode').classList.add('false');
	}
}