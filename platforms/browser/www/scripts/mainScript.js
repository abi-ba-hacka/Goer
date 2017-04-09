var homeScroll, feedScroll, goerScroll, assistScroll, notifScroll, profileScroll, moreScroll, chatFriendsScroll, chatMessageScroll, feedEventScroll, userListScroll;

$(document).ready(function(){
	
	/*var attachFastClick = Origami.fastclick;
	attachFastClick(document.body); doesn't change anything*/
    
	/*var lang;
	if(navigator && navigator.userAgent && (lang = navigator.userAgent.match(/android.*\W(\w\w)-(\w\w)\W/i))) lang = lang[1];
	if(!lang && navigator)
	{
		if(navigator.language) lang = navigator.language;
		else if(navigator.browserLanguage) lang = navigator.browserLanguage;
		else if(navigator.systemLanguage) lang = navigator.systemLanguage;
		else if(navigator.userLanguage) lang = navigator.userLanguage;
		lang = lang.substr(0, 2);
	}*/
    
	var appModule = "HOME";
    var lastModule = "HOME";
    var appPopup = "";
    //var profile_subModule = "P_EVENTS";
    var reg_step = "photo";
    var backbtn = false;
    
    var home = document.getElementById('home');
    //var map = document.getElementById('map');
    var feed = document.getElementById('feed');
    var goer = document.getElementById('goer');
    var assist = document.getElementById('assist');
    var notif = document.getElementById('notif');
    var profile = document.getElementById('profile');
    var my_profile = document.getElementById('my_profile');
    var o_profile = document.getElementById('o_profile');
    var more = document.getElementById('more');
    var join = document.getElementById("join");
    var search = document.getElementById("search");
    var chat = document.getElementById("chat");
    var userlist = document.getElementById("userlist");
    var chatview = document.getElementById("chatview");
    var feedevent = document.getElementById("feedevent");
    var nav_down = document.getElementById("nav_down");
    var nav_up_logo = document.getElementById("nav_up_logo");
    var p_events = document.getElementById('p_events');
    var p_feed = document.getElementById('p_feed');
    var btn_more = document.getElementById('btn_more');
    var btn_chat = document.getElementById('btn_chat');
    var btn_like = document.getElementById('btn_like');
    var btn_share = document.getElementById('btn_share');
    var btn_search = document.getElementById('btn_search');
    //var btn_map = document.getElementById('btn_map');
    var btn_back = document.getElementById("btn_back");
    var txt_search = document.getElementById("txt_search");
    var ul_caption = document.getElementById("ul_caption");
    
    /*navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 30000 });
    function onSuccess(position) {
        var lat=position.coords.latitude;
        var lang=position.coords.longitude;
        var myLatlng = new google.maps.LatLng(lat,lang);
        var mapOptions = {zoom: 4,center: myLatlng}
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var marker = new google.maps.Marker({position: myLatlng,map: map});
    }
    function onError(error) {
        alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }
    google.maps.event.addDomListener(window, 'load', onSuccess);*/

	LoadHome();
	
	$(document).on('tap', '#logo', function(){
		join.style.display = "none";
	});
	
	$(document).on('tap', '#btnFacebookLogin', function(){
		FB_login();
	});
    
    $(document).on('tap', '#terms', function(){
		$("#initial").fadeOut(100);
        $("#username_photo, #bar_steps").fadeIn(250);
        reg_step = "photo";
	});
    
    $(document).on('tap', '#reg_next', function(){
        if(reg_step === "photo")
        {
            $("#username_photo").fadeOut(100);
            $("#invite").fadeIn(250);
            reg_step = "invite";
        }
	});
    
    $(document).on('tap', '#reg_prev', function(){
		
	});
	
	/*$(document).on('focusin', '#txt_email, #txt_password', function(){
		$('#joinForm').css({
			'top' : '3%',
			'bottom' : 'auto'
		});
		$('#logo, #slasher_container').hide();
		$('#btn_mail_back').show();
		$('#textMail').css({
			'float' : 'right',
			'margin-right' : '5%'
		});
	});
	
	$(document).on('focusout', '#txt_email, #txt_password', function(){
		$('#joinForm').css({
			'bottom' : '13%',
			'top' : 'auto'
		});
		$('#logo, #slasher_container').show();
		$('#btn_mail_back').hide();
		$('#textMail').css({
			'float' : 'none',
			'margin-right' : '0'
		});
	});mail register systemmail register system*/
    
    $(document).on('tap', '#nav_up_logo', function(){
		if(appModule === "HOME") homeScroll.scrollTo(0, 0, 500, IScroll.utils.ease.quadratic);
        else if(appModule === "FEED") feedScroll.scrollTo(0, 0, 500, IScroll.utils.ease.quadratic);
        else if(appModule === "GOER") goerScroll.scrollTo(0, 0, 500, IScroll.utils.ease.quadratic);
        else if(appModule === "ASSIST") assistScroll.scrollTo(0, 0, 500, IScroll.utils.ease.quadratic);
        else if(appModule === "NOTIF") notifScroll.scrollTo(0, 0, 500, IScroll.utils.ease.quadratic);
        else if(appModule === "PROFILE") profileScroll.scrollTo(0, 0, 500, IScroll.utils.ease.quadratic);
        else if(appModule === "MORE") moreScroll.scrollTo(0, 0, 500, IScroll.utils.ease.quadratic);
        else if(appModule === "FEEDEVENT") feedEventScroll.scrollTo(0, 0, 500, IScroll.utils.ease.quadratic);
	});
	
	$(document).on('tap', '#btn_home', function(){
		changeAppModule('HOME', this);
	});
    
    $(document).on('tap', '#btn_feed', function(){
		changeAppModule('FEED', this);
	});
    
    $(document).on('tap', '#btn_goer', function(){
		changeAppModule('GOER', this);
	});
    
    $(document).on('tap', '#btn_assist', function(){
        onPressBackButton();
		changeAppModule('ASSIST', this);
	});
	
	$(document).on('tap', '#btn_notif', function(){
		changeAppModule('NOTIF', this);
	});
	
	$(document).on('tap', '#btn_profile', function(){
		changeAppModule('PROFILE', this);
	});
    
    $(document).on('tap', '.p_content', function(){
        changeAppModule('FEEDEVENT', this);
	});
    
    $(document).on('tap', '#btn_chat', function(){
        chat.style.visibility = "visible";
        appPopup = "CHAT";
	});
    
    $(document).on('tap', '#c_close', function(){
        CloseChat();
	});
    
    $(document).on('tap', '#ul_close', function(){
        CloseUserList();
	});
	
	$(document).on('tap', '#btn_search', function(){
		search.style.display = "block";
        appPopup = "SEARCH";
	});
	
	$(document).on('tap', '#s_close', function(){
		CloseSearch();
	});
    
    $(document).on('tap', '#followers', function(){
		userlist.style.visibility = "visible";
        ul_caption.className = "";
        ul_caption.innerHTML = "Seguidores";
        appPopup = "USERLIST";
	});
    
    $(document).on('tap', '#followed', function(){
		userlist.style.visibility = "visible";
        ul_caption.className = "";
        ul_caption.innerHTML = "Siguiendo";
        appPopup = "USERLIST";
	});
    
    $(document).on('tap', '.s_attendants', function(){
		userlist.style.visibility = "visible";
        ul_caption.className = "icon-group";
        ul_caption.innerHTML = "¿Quiénes van?";
        appPopup = "USERLIST";
	});
    
    $(document).on('tap', '.s_likes', function(){
		userlist.style.visibility = "visible";
        ul_caption.className = "icon-heart";
        ul_caption.innerHTML = "Me interesa";
        appPopup = "USERLIST";
	});
    
    $(document).on('tap', '.s_feeds', function(){
		userlist.style.visibility = "visible";
        ul_caption.className = "icon-flash";
        ul_caption.innerHTML = "Actividad";
        appPopup = "USERLIST";
	});
    
    $(document).on('tap', '#btn_like', function(){
		if($(this).css('color') == 'rgb(33, 33, 33)') $(this).css('color', '#EE2A1B');
        else $(this).css('color', '#212121');
	});
    
    $(document).on('tap', '.btn_p_like', function(ev){
        ev.stopPropagation();
		if($(this).css('color') == 'rgb(255, 255, 255)') 
        {
            $(this).css('color', '#EE2A1B');
            $(this).removeClass('icon-heart-empty');
            $(this).addClass('icon-heart');
        }
        else 
        {
            $(this).css('color', 'white');
            $(this).removeClass('icon-heart');
            $(this).addClass('icon-heart-empty');
        }
	});
    
    $(document).on('tap', '.feed_like', function(){
		if($(this).css('color') == 'rgb(33, 33, 33)') 
        {
            $(this).css('color', '#EE2A1B');
            $(this).html('18,232');
            $(this).removeClass('icon-heart-empty');
            $(this).addClass('icon-heart');
        }
        else 
        {
            $(this).css('color', '#212121');
            $(this).html('18,231');
            $(this).removeClass('icon-heart');
            $(this).addClass('icon-heart-empty');
        }
	});
    
    $(document).on('tap', '.btn_follow', function(){
        $(this).removeClass('icon-user-add-1 btn_follow');
        $(this).addClass('icon-group btn_unfollow');
	});
    
    $(document).on('tap', '.btn_unfollow', function(){
        $(this).removeClass('icon-group btn_unfollow');
        $(this).addClass('icon-user-add-1 btn_follow');
	});
    
    /*$(document).on('tap', '#btn_map', function(){
		if($(this).css('color') == 'rgb(33, 33, 33)') 
        {
            $(this).css('color', '#E94E1B');
            home.style.opacity = 0;
            map.style.opacity = 1;
        }
        else 
        {
            $(this).css('color', '#212121');
            home.style.opacity = 1;
            map.style.opacity = 0;
        }
	});
    */
    $(document).on('tap', '#btn_more', function(){
        if($(this).css('color') == 'rgb(33, 33, 33)') 
        {
            $(this).css('color', '#E94E1B');
            changeAppModule('MORE', this);
        }
        else 
        {
            $(this).css('color', '#212121');
            changeAppModule('PROFILE', document.getElementById("btn_profile"));
        }
	});
    
    $(document).on('tap', '#btn_p_events', function(){ // DISABLE TABS NO MORE NEEDED
		changeAppModule('P_EVENTS', this);
	});
    
    $(document).on('tap', '#btn_p_feed', function(){
		changeAppModule('P_FEED', this);
	});
	
	$(document).on('tap', '#btn_back', function(){
		onPressBackButton();
	});
    
    $(document).on('tap', '#btn_send', function(){
		// send chat msg, take script of http://codepen.io/supah/pen/jqOBqp
	});
	
	$("#text_message").focus(function(){
		//if($(this).val() == "Escribir mensaje") $(this).val("");
        //sendmessage should go up to keyboard height, search google phonegap keyboard different uses resize and superponer screen o con prompt como feed
	});
    
	$("#text_message").focusout(function(){
		//if($(this).val() == "") $(this).val("Escribir mensaje");
        //sendmessage should go back down
	});
		
	$(".friend").each(function(){		
		$(this).click(function(){																						
			//$("#profile_chat .friendname").html($(this).find(".friendtext .friendname").html());		
			//$(".message").not(".right").find("img").attr("src", $(this).find('img').eq(0).attr("src"));									
            chatview.style.visibility = "visible";
			$('#cc_close').unbind("click").click(function(){
				chatview.style.visibility = "hidden";
			});
		});
	});
	
	function FB_login() {
		facebookConnectPlugin.login(["email", "public_profile", "user_friends"],
			function (userData) {
				$('#join').fadeOut(400);
			},
			function (error) { alert("" + error); }
		);
	}
	
	function changeAppModule(module, e){
        if(appModule !== "FEEDEVENT") lastModule = appModule;
		switch(module)
		{
			case 'HOME':
			{
                btn_chat.style.visibility = "visible";
                btn_more.style.visibility = "hidden";
                btn_search.style.visibility = "visible";
                //btn_map.style.visibility = "visible";
				home.style.opacity = 1;
                feed.style.opacity = 0;
                goer.style.opacity = 0;
                assist.style.opacity = 0;
                notif.style.opacity = 0;
				profile.style.opacity = 0;
                more.style.opacity = 0;
				Nav_Click(e);
				break;
			}
            case 'FEED':
			{
                btn_chat.style.visibility = "visible";
                btn_more.style.visibility = "hidden";
                btn_search.style.visibility = "visible";
                //btn_map.style.visibility = "hidden";
				home.style.opacity = 0;
                feed.style.opacity = 1;
                goer.style.opacity = 0;
                assist.style.opacity = 0;
                notif.style.opacity = 0;
				profile.style.opacity = 0;
                more.style.opacity = 0;
				Nav_Click(e);
				break;	
			}
            case 'GOER':
			{
                btn_chat.style.visibility = "visible";
                btn_more.style.visibility = "hidden";
                btn_search.style.visibility = "visible";
                //btn_map.style.visibility = "hidden";
				home.style.opacity = 0;
                feed.style.opacity = 0;
                goer.style.opacity = 1;
                assist.style.opacity = 0;
                notif.style.opacity = 0;
				profile.style.opacity = 0;
                more.style.opacity = 0;
				Nav_Click(e);
                $('#btn_goer').css('filter', 'none');
				break;	
			}
            case 'ASSIST':
			{
                btn_chat.style.visibility = "visible";
                btn_more.style.visibility = "hidden";
                btn_search.style.visibility = "visible";
                //btn_map.style.visibility = "hidden";
				home.style.opacity = 0;
                feed.style.opacity = 0;
                goer.style.opacity = 0;
                assist.style.opacity = 1;
                notif.style.opacity = 0;
				profile.style.opacity = 0;
                more.style.opacity = 0;
				break;	
			}
			case 'NOTIF':
			{
                btn_chat.style.visibility = "visible";
                btn_more.style.visibility = "hidden";
                btn_search.style.visibility = "visible";
                //btn_map.style.visibility = "hidden";
				home.style.opacity = 0;
                feed.style.opacity = 0;
                goer.style.opacity = 0;
                assist.style.opacity = 0;
                notif.style.opacity = 1;
				profile.style.opacity = 0;
                more.style.opacity = 0;
				Nav_Click(e);
				break;	
			}
            case 'PROFILE':
			{
                btn_chat.style.visibility = "visible";
                btn_more.style.visibility = "visible";
                btn_search.style.visibility = "hidden";
                //btn_map.style.visibility = "hidden";
				home.style.opacity = 0;
                feed.style.opacity = 0;
                goer.style.opacity = 0;
                assist.style.opacity = 0;
                notif.style.opacity = 0;
				profile.style.opacity = 1;
                more.style.opacity = 0;
                my_profile.style.visibility = "visible";
                o_profile.style.visibility = "hidden";
				Nav_Click(e);
				break;	
			}
            case 'O_PROFILE':
			{
                btn_chat.style.visibility = "visible";
                btn_more.style.visibility = "hidden";
				btn_search.style.visibility = "hidden";
                //btn_map.style.visibility = "hidden";
				home.style.opacity = 0;
                feed.style.opacity = 0;
                goer.style.opacity = 0;
                assist.style.opacity = 0;
                notif.style.opacity = 0;
				profile.style.opacity = 1;
                more.style.opacity = 0;
                my_profile.style.visibility = "hidden";
                o_profile.style.visibility = "visible";
				break;	
			}
            case 'MORE':
			{
                btn_chat.style.visibility = "visible";
				btn_more.style.visibility = "visible";
				btn_search.style.visibility = "hidden";
                //btn_map.style.visibility = "hidden";
				home.style.opacity = 0;
                feed.style.opacity = 0;
                goer.style.opacity = 0;
                assist.style.opacity = 0;
                notif.style.opacity = 0;
				profile.style.opacity = 0;
                more.style.opacity = 1;
				Nav_Click(e);
				break;	
			}
            case 'FEEDEVENT':
			{
                toggleBackButton();
                btn_chat.style.visibility = "hidden";
                nav_down.style.visibility = "hidden";
				btn_more.style.visibility = "hidden";
                btn_search.style.visibility = "hidden";
                //btn_map.style.visibility = "hidden";
				home.style.opacity = 0;
                feed.style.opacity = 0;
                goer.style.opacity = 0;
                assist.style.opacity = 0;
                notif.style.opacity = 0;
				profile.style.opacity = 0;
                feedevent.style.visibility = "visible";
                btn_like.style.visibility = "visible";
                btn_share.style.visibility = "visible";
				break;	
			}
                
            // submodules
                
            /*case 'P_EVENTS':
			{
				p_events.style.display = "block";
				p_feed.style.display = "none";
				TabProfile_Click(e);
				break;	
			}
            case 'P_FEED':
			{
				p_events.style.display = "none";
				p_feed.style.display = "block";
				TabProfile_Click(e);
				break;	
			}*/
		}
		appModule = module;
	}
    
    function CloseChat(){
        chat.style.visibility = "hidden";
        appPopup = "";
    }
    
    function CloseUserList(){
        userlist.style.visibility = "hidden";
        appPopup = "";   
    }
    
    function CloseSearch(){
        txt_search.value = "";
		search.style.display = "none";
        appPopup = "";   
    }
    
    function onPressBackButton(){
        if(backbtn === true)
        {
            if(appModule === "FEEDEVENT")
            {
                btn_search.style.visibility = "visible";
                nav_down.style.visibility = "visible";
                feedevent.style.visibility = "hidden";
                btn_like.style.visibility = "hidden";
                btn_share.style.visibility = "hidden";
                changeAppModule(lastModule, document.getElementById("btn_" + lastModule.toLowerCase()));
                toggleBackButton();
            }
        }
        else 
        {
            if(appPopup === "CHAT") CloseChat();
            else if(appPopup === "SEARCH") CloseSearch();
            else if(appPopup === "USERLIST") CloseUserList();
            else if(appModule === "HOME") navigator.app.exitApp();
            else changeAppModule(lastModule, document.getElementById("btn_" + lastModule.toLowerCase()));
        }
    }
	
	function toggleBackButton(){
		if(backbtn === false) 
        {
            nav_up_logo.style.left = "19%";
            btn_back.style.display = "block";
            backbtn = true;
        }
		else
        {
            nav_up_logo.style.left = "29%";
            btn_back.style.display = "none";
            backbtn = false;
        }
	}
    
    /*function TabProfile_Click(e){
		$('.btn_p_navup').css({
			'color' : '#E4E4E4',
			'background-color' : '#262626'
		});
		$(e).css({
			'color' : 'white',
			'background-color' : 'black'
		});
        setTimeout(function () {
            profileScroll.refresh();
        }, 0);
	}*/
	
	function Nav_Click(e){
		clearPressedButtons();
		$(e).css({
			'color' : '#E94E1B'
		});
	}
	
	function clearPressedButtons(){
		$('.btn_navup').css({
			'color' : '#212121'
		});
		$('.btn_navdown').css({
			'border' : 'none',
			'background-color' : 'white',
			'color' : 'lightgray'
		});
        $('#btn_goer').css('filter', 'grayscale(100%) opacity(35%)');
	}
	
	function LoadHome(){
        $('#home .scroller').append('\
                            <div class="p_header">\
                                <img class="profile_link p_ppicture" src="images/jet.jpeg">\
                                <span class="profile_link p_username tap_text">Jet BA</span>\
                            </div>\
                            <div class="p_content" style="background-image:url(images/jet_e.jpg);">\
                                <div class="btn_p_like icon-heart-empty"></div>\
                                <div class="p_info">\
                                    <span class="p_text eventTitle">This Thursday We Are Lucky</span>\
                                    <br/>\
                                    <span class="icon-calendar p_text"> jueves, 14 julio 22:00 a 4:00</span>\
                                    <br/>\
                                    <span class="icon-location-6 location_link p_text">Av. Rafael Obligado Costanera 4801</span>\
                                </div>\
                            </div>\
                            <div class="p_stats">\
                                <span class="icon-group s_text s_attendants">2,561</span>\
                                <span class="icon-heart s_text s_likes">18,231</span>\
                                <span class="icon-flash s_text s_feeds">492</span>\
                            </div>\
                            <div class="p_edescription">\
                                El jueves con Baileys argentina te esperamos a partir de las 22:00. Pico Bussoli + Nacho Donadeu Djs + Martin Buceta + Alejandro Schultz se van a encargar de que no paremos de bailar!\
                            </div>\
                            <br/>\
                            <div class="p_header">\
                                <img class="profile_link p_ppicture" src="images/patagonia.png">\
                                <span class="profile_link p_username tap_text">Cerveza Patagonia</span>\
                            </div>\
                            <div class="p_content" style="background-image:url(images/eventpata.jpg);">\
                                <div class="btn_p_like icon-heart-empty"></div>\
                                <div class="p_info">\
                                    <span class="p_text eventTitle">PICUBRA Picnic Urbano</span>\
                                    <br/>\
                                    <span class="icon-calendar p_text"> jueves, 21 abril 18:00 a 0:00</span>\
                                    <br/>\
                                    <span class="icon-location-6 location_link p_text">Av. Centenario y Guemes</span>\
                                </div>\
                            </div>\
                            <div class="p_stats">\
                                <span class="icon-group s_text s_attendants">2,561</span>\
                                <span class="icon-heart s_text s_likes">18,231</span>\
                                <span class="icon-flash s_text s_feeds">492</span>\
                            </div>\
                            <div class="p_edescription">\
                                Veni a disfrutar de la mejor birra del país junto con tus amigos a pasar un momento increíble!\
                            </div>\
                            <br/>\
                            <div class="p_header">\
                                <img class="profile_link p_ppicture" src="images/pacha.png">\
                                <span class="profile_link p_username tap_text">Pacha</span>\
                            </div>\
                            <div class="p_content" style="background-image:url(images/pacha_e2.jpg);">\
                                <div class="btn_p_like icon-heart-empty"></div>\
                                <div class="p_info">\
                                    <span class="p_text eventTitle">John Jacobsen, Alex Caro & Sote De Lino</span>\
                                    <br/>\
                                    <span class="icon-calendar p_text"> sábado, 28 octubre 22:00 a 4:00</span>\
                                    <br/>\
                                    <span class="icon-location-6 location_link p_text">Av. Rafael Obligado Costanera 4801</span>\
                                </div>\
                            </div>\
                            <div class="p_stats">\
                                <span class="icon-group s_text s_attendants">2,561</span>\
                                <span class="icon-heart s_text s_likes">18,231</span>\
                                <span class="icon-flash s_text s_feeds">492</span>\
                            </div>\
                            <div class="p_edescription">\
                                El jueves con Baileys argentina te esperamos a partir de las 22:00. Pico Bussoli + Nacho Donadeu Djs + Martin Buceta + Alejandro Schultz se van a encargar de que no paremos de bailar!\
                            </div>\
                            <br/>\
        ');
	}
});

function LoadApp(){
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	document.addEventListener("deviceready", onDeviceReady, false);
    
    homeScroll = new IScroll('#home', {
		scrollbars: 'custom',
		//mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'clip',
		fadeScrollbars: true,
		disableMouse: false,
		disablePointer: true,
		probeType:1
		//tap:true
	});
    feedScroll = new IScroll('#feed', {
		scrollbars: 'custom',
		//mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'clip',
		fadeScrollbars: true,
		disableMouse: true,
		disablePointer: true,
		probeType:1
		//tap:true
	});
    goerScroll = new IScroll('#goer', {
		scrollbars: 'custom',
		//mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'clip',
		fadeScrollbars: true,
		disableMouse: true,
		disablePointer: true,
		probeType:1
		//tap:true
	});
    assistScroll = new IScroll('#assist', {
		scrollbars: 'custom',
		//mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'clip',
		fadeScrollbars: true,
		disableMouse: true,
		disablePointer: true,
		probeType:1
		//tap:true
	});
	notifScroll = new IScroll('#notif', {
		scrollbars: 'custom',
		//mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'clip',
		fadeScrollbars: true,
		disableMouse: true,
		disablePointer: true,
		probeType:1
		//tap:true
	});
	profileScroll = new IScroll('#profile', {
		scrollbars: 'custom',
		//mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'clip',
		fadeScrollbars: true,
		disableMouse: true,
		disablePointer: true,
		probeType:1
		//tap:true
	});
    moreScroll = new IScroll('#more', {
		scrollbars: 'custom',
		//mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'clip',
		fadeScrollbars: true,
		disableMouse: true,
		disablePointer: true,
		probeType:1
		//tap:true
	});
    chatFriendsScroll = new IScroll('#friends', {
		scrollbars: 'custom',
		//mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'clip',
		fadeScrollbars: true,
        click:true,
		disableMouse: true,
		disablePointer: true,
		probeType:1
		//tap:true
	});
    chatMessageScroll = new IScroll('#chat_messages', {
		scrollbars: 'custom',
		//mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'clip',
		fadeScrollbars: true,
        click:true,
		disableMouse: true,
		disablePointer: true,
		probeType:1
		//tap:true
	});
    feedEventScroll = new IScroll('#e_content', {
		scrollbars: 'custom',
		//mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'clip',
		fadeScrollbars: true,
		disableMouse: true,
		disablePointer: true,
		probeType:1
		//tap:true
	});
    userListScroll = new IScroll('#ul_users', {
		scrollbars: 'custom',
		//mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'clip',
		fadeScrollbars: true,
		disableMouse: true,
		disablePointer: true,
		probeType:1
		//tap:true
	});
}

function onDeviceReady(){
	document.addEventListener("backbutton", onPressBackButton, true);
	//facebookConnectPlugin.browserInit(107362566276502);
}

$.event.special.tap = {
	distanceThreshold: 10,
	timeThreshold: 500,
	setup: function() {
		var self = this,
		$self = $(self);
		$self.on('touchstart', function(startEvent) {
            var target = startEvent.target,
                touchStart = startEvent.originalEvent.touches[0],
                startX = touchStart.pageX,
                startY = touchStart.pageY,
                threshold = $.event.special.tap.distanceThreshold,
                timeout
            ;
            function removeTapHandler() {
                clearTimeout(timeout);
                $self.off('touchmove', moveHandler).off('touchend', tapHandler);
            };
            function tapHandler(endEvent) {
                removeTapHandler();
                if (target == endEvent.target) {
                  $.event.simulate('tap', self, endEvent);
                }
            };
            function moveHandler(moveEvent) {
                var touchMove = moveEvent.originalEvent.touches[0],
                  moveX = touchMove.pageX,
                  moveY = touchMove.pageY
                ;
                if (Math.abs(moveX - startX) > threshold ||
                    Math.abs(moveY - startY) > threshold) {
                  removeTapHandler();
                }
            };
            timeout = setTimeout(removeTapHandler, $.event.special.tap.timeThreshold);
            $self.on('touchmove', moveHandler).on('touchend', tapHandler);
        });
	}
};