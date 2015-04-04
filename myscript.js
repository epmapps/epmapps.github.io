function aboutLinkPress() {
	//var page = "about";
	hidePages();
	slideMainCover();
};

function ourAppsLinkPress() {
	//var page = "apps";
	hidePages();
	slideMainCover();
};

function contactLinkPress() {
	var page = "#id_contact_us_page";
	hidePages();
	slideMainCover(page);
};

function slideMainCover(page) {
	$("#id_main_cover").slideDown("slow", function() {
		showPage(page);		
		$("#id_main_cover").slideUp("slow");
	});
};

function showPage(page) {
    $(page).show();
};



function hidePages() {
	$("#id_contact_us_page").hide();
	//$("#id_contact_us_page").hide();
	//$("#id_contact_us_page").hide();
};
