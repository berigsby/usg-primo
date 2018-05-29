/**
 * Creates a widget or a link for Primo Basic Searches.
 * Based on Primo Deep Search Creator by Jim Robinson
 * Based on Brief Search documentation on http://developer.exlibrisgroup.com
 * Customized with values for University System of Georgia Libraries
 */

var USG_libraries = {
	"Select a USG Library"	: "Select a USG Library",
	"Abraham Baldwin Agriculture College" : "Abraham Baldwin Agriculture College",
	"Albany State University" : "Albany State University",
	"Armstrong State University" : "Armstrong State University",
	"Atlanta Metropolitan State College" : "Atlanta Metropolitan State College",
	"Augusta University" : "Augusta University",
	"Bainbridge State College" : "Bainbridge State College",
	"Clayton State University" : "Clayton State University",
	"College of Coastal Georgia" : "College of Coastal Georgia",
	"Columbus State University" : "Columbus State University",
	"Dalton State College" : "Dalton State College",
	"East Georgia State College" : "East Georgia State College",
	"Fort Valley State University" : "Fort Valley State University",
	"Georgia College and State University" : "Georgia College and State University",
	"Georgia Gwinnett College" : "Georgia Gwinnett College",
	"Georgia Highlands College" : "Georgia Highlands College",
	"Georgia Piedmont Technical College" : "Georgia Piedmont Technical College",
	"Georgia Southern Univesity" : "Georgia Southern Univesity",
	"Georgia Southwestern State Univesity" : "Georgia Southwestern State Univesity",
	"Georgia State University" : "Georgia State University",
	"Gordon State College" : "Gordon State College",
	"Kennesaw State University" : "Kennesaw State University",
	"Middle Georgia State University" : "Middle Georgia State University",
	"Savannah State University" : "Savannah State University",
	"South Georgia State College" : "South Georgia State College",
	"University of Georgia" : "University of Georgia",
	"University of North Georgia" : "University of North Georgia",
	"University of West Georgia" : "University of West Georgia",
	"Valdosta State University" : "Valdosta State University",
	"Georgia Archives" : "Georgia Archives",
}
// institution code : view code : URL : Name
var UGA_library_basic_details = ["01GALI_UGA", "UGA", "http://galileo-usg-uga-primo.hosted.exlibrisgroup.com", "University of Georgia"];
var ABAC_library_basic_details = ["01GALI_BALDWIN", "ABAC_V1", "http://galileo-usg-abac-primo.hosted.exlibrisgroup.com", "Abraham Baldwin Agriculture College"];
var ASU_library_basic_details = ["01GALI_ALBANY", "ASU_V1" , "http://galileo-usg-asu-primo.hosted.exlibrisgroup.com", "Albany State University"];
var ARMSTRONG_library_basic_details = ["01GALI_ARMSTRONG", "ARMSTRONG_V1", "http://galileo-usg-armstrong-primo.hosted.exlibrisgroup.com", "Armstrong State University"];
var ATLM_library_basic_details = ["01GALI_ATLAMETRO", "ATLM_V1", "http://galileo-usg-atlm-primo.hosted.exlibrisgroup.com", "Atlanta Metropolitan State College"];
var AUGUSTA_library_basic_details = ["01GALI_AUG", "AUGUSTA_V1", "http://galileo-usg-augusta-primo.hosted.exlibrisgroup.com", "Augusta University"];
var BCS_library_basic_details = ["01GALI_BAINBRIDGE", "BCS_V1", "http://galileo-usg-bcs-primo.hosted.exlibrisgroup.com", "Bainbridge State College"];
var CLAYTON_library_basic_details = ["01GALI_CLAYTON", "CLAYTON_V1", "http://galileo-usg-clayton-primo.hosted.exlibrisgroup.com", "Clayton State University"];
var CCGA_library_basic_details = ["01GALI_COASTLGA", "CCGA_V1" , "http://galileo-usg-ccga-primo.hosted.exlibrisgroup.com", "College of Coastal Georgia"];
var CSU_library_basic_details = ["01GALI_COLUMBUS", "CSU_V1", "http://galileo-usg-csu-primo.hosted.exlibrisgroup.com", "Columbus State University"];
var DALTON_library_basic_details = ["01GALI_DALTON", "DALTON_V1", "http://galileo-usg-dalton-primo.hosted.exlibrisgroup.com", "Dalton State College"];
var EGSC_library_basic_details = ["01GALI_EAGEORG", "EGSC_V1", "http://galileo-usg-egsc-primo.hosted.exlibrisgroup.com", "East Georgia State College"];
var FVSU_library_basic_details = ["01GALI_FTVALLEY", "FVSU_V1", "http://galileo-usg-fvsu-primo.hosted.exlibrisgroup.com", "Fort Valley State University"];
var GCSU_library_basic_details = ["01GALI_GCSU", "GCSU_V1", "http://galileo-usg-gcsu-primo.hosted.exlibrisgroup.com", "Georgia College and State University"];
var GGC_library_basic_details = ["01GALI_GWINNETT", "GGC_V1", "http://galileo-usg-ggc-primo.hosted.exlibrisgroup.com", "Georgia Gwinnett College"];
var GHC_library_basic_details = ["01GALI_FLOYD", "GHC_V1", "http://galileo-usg-ghc-primo.hosted.exlibrisgroup.com", "Georgia Highlands College"];
var GPTC_library_basic_details = ["01GALI_GPTC", "GPTC_V1", "http://galileo-usg-gptc-primo.hosted.exlibrisgroup.com", "Georgia Piedmont Technical College"];
var GASOU_library_basic_details = ["01GALI_GASOUTH", "GASOU", "http://galileo-usg-gasou-primo.hosted.exlibrisgroup.com", "Georgia Southern Univesity"];
var GSWU_library_basic_details = ["01GALI_GSSU", "GSWU_V1", "http://galileo-usg-gswu-primo.hosted.exlibrisgroup.com", "Georgia Southwestern State Univesity"];
var GSU_library_basic_details = ["01GALI_GSU", "GSU_V1", "http://galileo-usg-gsu-primo.hosted.exlibrisgroup.com", "Georgia State University"];
var GORDON_library_basic_details = ["01GALI_GORDON", "GORDON_V1", "http://galileo-usg-gordon-primo.hosted.exlibrisgroup.com", "Gordon State College"];
var KSU_library_basic_details = ["01GALI_KENNESAW", "KSU_V1", "http://galileo-usg-ksu-primo.hosted.exlibrisgroup.com", "Kennesaw State University"];
var MGA_library_basic_details = ["01GALI_MGA", "MGA_V1", "http://galileo-usg-mga-primo.hosted.exlibrisgroup.com", "Middle Georgia State University"];
var SSU_library_basic_details = ["01GALI_SSU", "SSU_V1", "http://galileo-usg-ssu-primo.hosted.exlibrisgroup.com", "Savannah State University"];
var SGSC_library_basic_details = ["01GALI_SGC", "SGSC_V1", "http://galileo-usg-sgsc-primo.hosted.exlibrisgroup.com", "South Georgia State College"];
var UNG_library_basic_details = ["01GALI_UNG", "UNG_V1", "http://galileo-usg-ung-primo.hosted.exlibrisgroup.com", "University of North Georgia"];
var UWG_library_basic_details = ["01GALI_UWG", "UWG_V1", "http://galileo-usg-uwg-primo.hosted.exlibrisgroup.com", "University of West Georgia"];
var VSU_library_basic_details = ["01GALI_VALDOSTA", "VSU", "http://galileo-usg-vsu-primo.hosted.exlibrisgroup.com", "Valdosta State University"];
var ARCHIVES_library_basic_details = ["01GALI_GADEPT", "ARCHIVES_V1", "http://galileo-usg-archives-primo.hosted.exlibrisgroup.com", "Georgia Archives"];

var institution_name = "Nobody's"

/* Base URL for non-vanity USG Libraries */
var domain_name = "http://galileo-usg-uga-primo.hosted.exlibrisgroup.com";

/* initialize variable for institution codes */
var institution_code = "";

/* initialize variable for view codes */
var view_code = "";		


/**********************************************************************
 * Tab Names for USG Libraries as of May 2017:
 * Front End: Perform a basic search and from the resulting URL, take
 * the parameter after 'tab='. Do this for each tab.
 *
 * Back Office: Ongoing Configuration Wizard -> Views Wizard
 * For your default (or desired) view, click 'Edit'
 * Click through to 'Tabs', use the attributes in the 'Tab Code' column, 
 *
 * NOTE: TAB CODES MUST BE LOWER CASE! These are the codes to the left of the colon.
 * The value to the right of the colon will display in the drop-down.
 *
 * @var {object} tab_names
 * @example
 * var tab_name = {
 *	  "everything" : "Everything",
 *	  "books" : "Books+",
 *	  "articles" : "Articles+"
 * }
 *********************************************************************/
var tab_names = {
	"default_tab"	: "Primo Search"
}
var UGA_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var ABAC_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var ASU_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var ARMSTRONG_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var ATLM_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var AUGUSTA_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var BCS_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var CLAYTON_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var CCGA_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var CSU_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var DALTON_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var EGSC_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var FVSU_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var GCSU_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var GGC_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var GHC_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var GPTC_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var GASOU_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var GSWU_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var GSU_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var GORDON_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var KSU_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var MGA_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var SSU_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var SGSC_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var UNG_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var UWG_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"			
}
var VSU_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}
var ARCHIVES_tab_names= {
	"default_tab"	: "Library Resources",
	"course_reserves"		: "Course Reserves"
}

/**********************************************************************
 * Scopes for Alliance Libraries as of Feb 2016:
 * Front End: Perform a basic search using a drop-down list.
 * In the URL, look for the value after &scp.scps=
 * and take everything between 'scope%3A%28' and '%29'
 *
 * Back Office: Ongoing Configuration Wizard -> Views Wizard
 * For your default (or desired) view, click 'Edit'
 * Click through to 'Scopes List', use the attributes in the 'Name' 
 * column for each scope you'd like to have available.
 * The value to the right of the colon will display in the drop-down.
 *
 * @var {object} scopes
 * @example
 * var scopes = {
 *	  "TCC_EVERYTHING" : "All TCC Resources",
 *	  "TCC_Trinity_Library" : "Trinity River Library",
 *	  "TCC_EBOOK" : "Ebooks Only"
 * }
 *********************************************************************/
var scopes = {
	"scope"	: "Scope"
}
var UGA_scopes = {
	"UGA"	: "University of Georgia",
	"USG" 	: "USG"
}
var ABAC_scopes= {
	"ABAC"	: "Abraham Baldwin Agriculture College",
	"USG" 	: "USG"						
}
var ASU_scopes= {
	"ASU"	: "Albany State University",
	"USG" 	: "USG"			
}
var ARMSTRONG_scopes= {
	"ARMSTRONG"	: "Armstrong State University",
	"USG" 	: "USG"					
}
var ATLM_scopes= {
	"ATLM"	: "Atlanta Metropolitan State College",
	"USG" 	: "USG"
}
var AUGUSTA_scopes= {
	"AUGUSTA"	: "Augusta University",
	"USG" 	: "USG"			
}
var BCS_scopes= {
	"BCS"	: "Bainbridge State College",
	"USG" 	: "USG"			
}
var CLAYTON_scopes= {
	"CLAYTON"	: "Clayton State University",
	"USG" 	: "USG"			
}
var CCGA_scopes= {
	"CCGA"	: "College of Coastal Georgia",
	"USG" 	: "USG"			
}
var CSU_scopes= {
	"CSU"   : "Columbus State University",
	"USG" 	: "USG"		
}
var DALTON_scopes= {
	"DALTON": "Dalton State College",
	"USG" 	: "USG"			
}
var EGSC_scopes= {
	"EGSC"	: "East Georgia State College",
	"USG" 	: "USG"			
}
var FVSU_scopes= {
	"FVSU"	: "Fort Valley State University",
	"USG" 	: "USG"
}
var GCSU_scopes= {
	"GCSU"	: "Georgia College & State University",
	"USG" 	: "USG"			
}
var GGC_scopes= {
	"GGC"	: "Georgia Gwinnett College",
	"USG" 	: "USG"		
}
var GHC_scopes= {
	"GHC"	: "Georgia Highlands College",
	"USG" 	: "USG"		
}
var GPTC_scopes= {
	"GPTC"	: "Georgia Piedmont Technical College",
	"USG" 	: "USG"	
}
var GASOU_scopes= {
	"GASOU" : "Georgia Southern Univesity",
	"USG" 	: "USG"
}
var GSWU_scopes= {
	"GSWU"	: "Georgia Southwestern State Univesity",
	"USG" 	: "USG"
}
var GSU_scopes= {
	"GSU"	: "Georgia State University",
	"USG" 	: "USG"
}
var GORDON_scopes= {
	"GORDON"	: "Gordon State College",
	"USG" 	: "USG"
}
var KSU_scopes= {
	"KSU"	: "Kennesaw State University",
	"USG" 	: "USG"
}
var MGA_scopes = {
	"MGA"	: "Middle Georgia State University",
	"USG" 	: "USG"
}
var SSU_scopes= {
	"SSU"	: "Savannah State University",
	"USG" 	: "USG"
}
var SGSC_scopes= {
	"SGSC"	: "South Georgia State College",
	"USG" 	: "USG"
}
var UNG_scopes= {
	"UNG"	: "University of North Georgia",
	"USG" 	: "USG"
}
var UWG_scopes = {
	"UWG"	: "University of West Georgia",
	"USG" 	: "USG"
}
var VSU_scopes= {
	"VSU"	: "Valdosta State University",
	"USG" 	: "USG"
}
var ARCHIVES_scopes= {
	"ARCHIVES"	: "Georgia Archives",
	"USG" 	: "USG"
}

/**********************************************************************
 * Facets:
 * Front End: Perform a basic search, click a facet, then take the 
 * value after 'fctN='
 *
 * Back Office: Advanced Configuration -> All Code Tables
 * Subsystem: Front End, Table Name: Facet Code Fields.
 * Select the codes for facets you would like to have available.
 *
 * @var {object} facet_types
 * @example
 * var facet_types = {
 *	  "facet_none" : "Choose Facet",
 *	  "facet_creator" : "Author/Creator",
 *	  "facet_rtype" : "Resource Type"
 * }
 *********************************************************************/
var facet_types = {
	"facet_none"		: "Choose Facet",
	"facet_rtype"		: "Format",
	"facet_lang"		: "Language",
	/*"facet_tlevel"		: "Top Level Facet (Full-text of Available)",
	"facet_creationdate" : "Creation Date (Year Range)",*/
	"facet_local1"	: "Location"
}


/**********************************************************************
 * Facet Values:
 * This object is used for any facet you wish to limit by providing
 * a drop-down list instead of an open text field. These are usually
 * values found in their own Code Table in Back Office. Each attribute
 * must match an attribute from the facet_type object above, followed
 * by a list of options for the drop-down box.
 *
 * Front End: Perform a Basic Search, click a facet, then take the
 * value after 'fctV=' for each facet type.
 *
 * Back Office: Advanced Configuration -> All Code Tables
 * Subsystem: Front End, then find the Facet table (for example, 
 * Top Level Facet table or Facet Resource Type table)
 * Use the value after the last period.
 *
 * @var {object} facet_values
 * @example
 * var facet_values = {
 *	  "facet_rtype" : [ <<==Note: This is the facet type from the facet_types object above
 *			{"name" : "Books",	"value" : "books"},
 *			{"name" : "DVDs",	 "value" : "dvds"},
 *			{"name" : "Audio",	"value" : "media"}
 *	  ],
 *	  "facet_tlevel" : [
 *			{"name" : "Full Text Online",	"value" : "online_resources"},
 *			{"name" : "Available in the Library",	"value" : "available" }
 *	  ]
 * }
 **********************************************************************/
var facet_values = {
	"facet_rtype" : [
		{"name" : "Audio Visual",	"value" : "media"},
		{"name" : "Books",	"value" : "books"}, 
		{"name" : "Images",		"value" : "images"},
		{"name" : "Journals",	"value" : "journals"},
		{"name" : "Maps",	"value" : "maps"},
		{"name" : "Scores",	"value" : "scores"},
		{"name" : "Text Resources",	"value" : "text_resources"},
		{"name" : "Web Sites",	"value" : "websites"},
		{"name" : "Other",	"value" : "other"}
	],
	
	"facet_tlevel" : [
		{"name" : "Full Text Online",	"value" : "online_resources"},
		{"name" : "Available in the Library",	"value" : "available" }
	],
	
	"facet_lang" : [
		{"name" : "English", "value": "en"},
		{"name" : "German", "value": "ger"},
		{"name" : "French", "value": "fre"},
		{"name" : "Spanish", "value": "spa"},
		{"name" : "Italian", "value": "ita"},
		{"name" : "Latin", "value": "lat"},
		{"name" : "Russian", "value": "rus"},
		{"name" : "Portuguese", "value": "por"},
		{"name" : "Chinese", "value": "chi"},
		{"name" : "Dutch", "value": "dut"},
		{"name" : "Japanese", "value": "jpn"},
		{"name" : "Swedish", "value": "swe"},
		{"name" : "Korean", "value": "kor"}
	]
}


/**********************************************************************
 * Available Field Values:
 * These are the fields that can be searched.
 *
 * Back Office: Advanced Configuration -> All Code Tables
 * Subsystem: Front End, Table Name: Basic Index Fields
 *
 * @var {object} field_names
 * @example
 * var field_names = {
 *	  any: "Everything",
 *	  title: "Title",
 *	  creator: "Creator / Author",
 *	  isbn: "ISBN"
 * }
 **********************************************************************/
var field_names = {
	"any"		: "Everything",
	"title"		: "Title",
	"creator"	: "Creator / Author",
	"sub"		: "Subject",
	"isbn"		: "ISBN",
	"issn"		: "ISSN"
}



/******************************************************************************
* There is probably no need to change anything below this point...
*****************************************************************************/
var pages = {};
for(var x=0; x<10; x++) {
	pages[x] = x+1;
}

var records_per_page = {};
for(var x=10; x<=100; x+=10) {
	records_per_page[x] = x;
}

var sort_types = {
	"default"	: "Relevance",
	"date"	: "Date",
	"stitle"	: "Title",
	"sauthor"	: "Author",
	"popularity" : "Popularity"
}

var precision = {
	"contains"	 : "Contains",
	"exact"		 : "Exact Match",
	"begins_with" : "Begins With (For Title Searches Only)"
}

var removed_facet_types = {};

$('document').ready( function() {
	$('#hints').hide();
	$('#toggle_hints').on('click', function() {
		$('#hints').toggle();
	});
	
	$('#examples').hide();
	$('#toggle_examples').on('click', function() {
		$('#examples').toggle();
	});
	
	/** populate Primo Information fields */
	if(domain_name.length>0) $('#domain_name').val(domain_name);
	if(institution_code.length>0) $('#institution_code').val(institution_code);
	if(view_code.length>0) $('#view_code').val(view_code);
	
	/** Set up date picker for exact date range */
	$('body').on('focus','.add_datepicker', function() {
		$(this).datepicker({
			dateFormat: 'yymmdd',
			changeMonth: true,
			changeYear: true,
			onClose: function(selectedDate) {
				checkDate($(this),selectedDate);
			}
		});
	});
	
	/** Hide facet values and add_facet_buttons until a facet type is selected */
	$('#facet_values_0').hide();
	$('#add_facet_button_0').hide();
	
	/** populate select elements */
	$.each(USG_libraries, function(index,value) {
		$('.USG_libraries').append($("<option>").text(value).attr('value',index));
	});			
	
	$.each(tab_names, function(index,value) {
		$('#search_tab').append($("<option>").text(value).attr('value',index));
	});
	
	$.each(pages, function(index,value) {
		$('#search_page').append($("<option>").text(value).attr('value',index));
	});
	
	$.each(records_per_page, function(index,value) {
		$('#search_rpp').append($("<option>").text(value).attr('value',index));
	});
	
	$.each(field_names, function(index,value) {
		$('#search_field').append($("<option>").text(value).attr('value',index));
	});
	
	$.each(precision, function(index,value) {
		$('#precision_field').append($("<option>").text(value).attr('value',index));
	});
	
	$.each(sort_types, function(index,value) {
		$('#sort_field').append($("<option>").text(value).attr('value',index));
	});
	
	$.each(scopes, function(index,value) {
		$('.scope_field').append($("<option>").text(value).attr('value',index));
	});
	
	$.each(facet_types, function(index,value) {
		$('.facet_type_select').append($("<option>").text(value).attr('value',index));
	});

	/** perform actions when selections are made or buttons clicked */
	$('.facet_type_select').on('change', function() {
		getFacetValue($(this));
	});
	
	$('#add_facet_0').on('click', function() {
		createFacetSelector();
	});
	
	$('#doSubmit').on('click', function() {
		createDeepSearchLink();
	});
	
	$('#doClear').on('click', function() {
		$('.facet_type_select').each(function() {
			var id = $(this).attr('id');
			var index = id.slice(id.lastIndexOf('_'));
			if(index!='_0') {
				$('#facet'+index).remove();
			}
		});
		$('select').each( function() {
			$(this).val($(this).find("option:first").val());
		});
		$('#search_criteria').val('');
		$('#view_label').val('');
		$('#result').val('');
	});
	
	$('#precision_field').on('change', function() {
		if($(this).val() == 'begins_with') {
			$('#search_field').val('title');
		}
	});
	
	$('#search_field').on('change', function() {
		if($(this).val() != 'title') {
			if($('#precision_field').val() == 'begins_with') {
				$('#precision_field').val('contains');
			}
		}
	});
});



/**
 * Creates a facet value drop-down or text field based on the facet type selected
 *
 * @param {object} facet_type_obj - The facet type selected
 */
function getFacetValue(facet_type_obj) {
	$('.facet_type_select').each( function(x, y) {
		var valueSelected = $(this).val();
		var id = $(this).attr('id');
		var index = id.slice(id.lastIndexOf('_'));
		var parent_id = id;
		if(!isEmpty(facet_type_obj)) parent_id = facet_type_obj.attr('id');
		
		if(parent_id == id) {
			$('#facet_value_field'+index).find('option').remove().end(); // remove old values
			
			$('#facet_creationdate_end_date'+index).remove();
			$('#facet_value_end_date'+index).remove();
			$('#to'+index).remove();
			
			switch(true) {
				case (valueSelected=='facet_none'):
					$('#facet_values'+index).hide();
					$('#add_facet_button'+index).hide();
					break;
					
				case (valueSelected=='facet_creationdate'):
					$('#facet_values'+index).show();
					var $start_date = $('<input>', {id:'facet_value_field'+index, name:'facet_value_start_date', class:'date_range', maxlength:'4' });
					var $end_date	= $('<input>', {id:'facet_creationdate_end_date'+index, name:'facet_value_end_date', class:'date_range', maxlength:'4' });
					var $date_range = $('<div>', {class: 'col'});
					var $to = $('<span>', {id:'to'+index,text:' to '});
					$date_range.append($start_date).append($to).append($end_date);
					$('#facet_value_field'+index).replaceWith($date_range);
					$('#add_facet_button'+index).show();
					break;
					
				case (valueSelected=='facet_date_range'):
					$('#facet_values'+index).show();
					var $start_date = $('<input>', {id:'facet_value_field'+index, name:'facet_value_start_date',class:'add_datepicker', maxlength:'10' });
					var $end_date	= $('<input>', {id:'facet_value_end_date'+index, name:'facet_value_end_date',class:'add_datepicker', maxlength:'10' } );
					var $date_range = $('<div>', {class: 'col'});
					var $to = $('<span>', {id:'to'+index,text:' to '});
					$date_range.append($start_date).append($to).append($end_date);
					$('#facet_value_field'+index).replaceWith($date_range);
					$('#add_facet_button'+index).show();
					break;
					
				case (!isEmpty(facet_values[valueSelected])):
					$('#facet_values'+index).show();
					$('#facet_value_field'+index).replaceWith($("<select>").attr('name','facet_value_field'+index).attr('id','facet_value_field'+index));
					$.each(facet_values[valueSelected], function(obj) {
						$('#facet_value_field'+index).append($("<option>").text(facet_values[valueSelected][obj].name).attr('value',facet_values[valueSelected][obj].value));
					});
					$('#add_facet_button'+index).show();
					break;
					
				default:
					$('#facet_values'+index).show();
					$('#facet_value_field'+index).replaceWith($("<input>").attr('type','text').attr('name','facet_value_field'+index).attr('id','facet_value_field'+index));
					$('#add_facet_button'+index).show();
			}
		}
	});
}

/**
 * Adds a row with a facet type selector.
 *
 * Finds the last facet row added and increments the index
 *
 * The manageFacetTypes(string) function called near the end
 * is used to remove a facet type once it has been used.
 * To disable this, comment out the call to 
 * manageFacetTypes('__add'); in function createFacetSelector() and
 * manageFacetTypes(value); in function removeFacetSelector(element)
 *
 */
function createFacetSelector() {
	var last = $('.facet_type_select').last().attr('id');
	var index = last.slice(last.lastIndexOf('_')+1);
	index++;
	
	/** Facet Type Row */
	var $facet_type_label = $("<label for='facet_type_field_"+index+"'>Facet Type</label>");
	var $facet_type_label_div = $('<div>', { class:'col label'});
	$facet_type_label_div.append($facet_type_label);
	
	$('#facet_type_field_'+index).find('option').remove().end();
	
	var $facet_type_input = $('<select>', {id:'facet_type_field_'+index, class:'facet_type_select'});
	var $facet_type_input_div = $('<div>', {class:'col input'});
	$facet_type_input_div.append($facet_type_input);
	
	var $facet_type_div = $("<div>", {id:'facet_types_'+index, class:'col'});
	$facet_type_div.append($facet_type_label_div);
	$facet_type_div.append($facet_type_input_div);
	
	/** Facet Value Row */
	var $facet_value_label = $("<div class='col label'><label for='facet_value_field_"+index+"'>Facet Value</label></div>");
	var $facet_value_input = $("<div class='col'><select id='facet_value_field_"+index+"' class='facet_value_select'></select></div>");
	var $facet_value_div = $("<div>", {id:'facet_values_'+index, class:'col'});
	$facet_value_div.append($facet_value_label);
	$facet_value_div.append($facet_value_input);
	
	/** Facet Add/Remove Buttons */
	var $facet_add_button = $('<input>', { type:'button', value:'+', id:'add_facet_'+index, class:'add_facet_button', click: function() { createFacetSelector(); } });
	var $facet_add_div = $('<div>', { id:'add_facet_button_'+index, class:'col' });
	$facet_add_div.append($facet_add_button);
	
	var $facet_remove_button = $('<input>', { type:'button', value:'-', id:'remove_facet_'+index, class:'remove_facet_button', click: function() { removeFacetSelector($(this)); } });
	var $facet_remove_div = $('<div>', { id:'remove_facet_button_'+index, class:'col' });
	$facet_remove_div.append($facet_remove_button);
	
	/** Create Facet Row */
	var $newFacet = $('<div>', {id: 'facet_'+index, class: 'row'});
	$newFacet.append($facet_type_div);
	$newFacet.append($facet_value_div);
	$newFacet.append($facet_add_div);
	$newFacet.append($facet_remove_div);
	
	/** Add to interface */
	$('#facets').append($newFacet);
	$('#facets').on('change','#facet_type_field_'+index,function() {
		getFacetValue($('#facet_type_field_'+index));
	});

	/** Hide facet value until facet type is selected */
	$('#facet_values_'+index).hide();
	
	/** Remove used facet types from the object so they won't appear in new drop-down lists */
	//manageFacetTypes('__add');
	
	/** Populate new facet type drop-down list */
	$my_facet_types = $(facet_types)[0];
	for(var key in $my_facet_types) {
		if(!isEmpty($my_facet_types[key])) {
			$facet_type_input.append($('<option>').text($my_facet_types[key]).attr('value',key));
		}
	}
	
	
}

/**
 * Removes a facet row when the '-' button is clicked
 *
 * The manageFacetTypes(value) function called near the end
 * is used to remove a facet type once it has been used.
 * To disable this, comment out the call to 
 * manageFacetTypes('__add'); in function createFacetSelector() and
 * manageFacetTypes(value); in function removeFacetSelector(element)
 *
 * @param {object} element - The button clicked which has the same index as the facet row
 */
function removeFacetSelector(element) {
	var id = element.attr('id'); 
	var index = id.slice(id.lastIndexOf('_'));
	var value = $('#facet_type_field'+index+' option:selected').val();
	//manageFacetTypes(value);
	$('#facet'+index).remove();
}

/**
 * Adds a facet type row when a '+' button is clicked or
 * removes a facet row when a '-' button is clicked. Keeps track of
 * what has been added or removed in arrays.
 *
 * @param {String} status - Either __add for a new facet or the facet type to remove
 */
function manageFacetTypes(status) {
	console.log(status);
	$('.facet_type_select').each( function() {
		var val = $(this).val();
		if(val != 'facet_none' && !isEmpty(val) && status != 'facet_none') {
			if(status=='__add') {
				if(isEmpty(removed_facet_types[val])) {
					removed_facet_types[val] = facet_types[val];
				}
				facet_types[val] = '';
			} else {
				if(!isEmpty(removed_facet_types[status])) {
					facet_types[status] = removed_facet_types[status];
					removed_facet_types[status] = '';
				}
			}
		}
	});
}

/**
 * Handles conditional date for creation_date (exact date range)
 * 
 * @param {obj} element - The start date element
 * @param {string} selectedDate - The conditional date selected
 */
function checkDate(element,selectedDate) {
	console.log(typeof(element));
	if(element.attr('name') == 'facet_value_start_date') {
		var id = element.attr('id'); 
		var index = id.slice(id.lastIndexOf('_'));
		$('#facet_value_end_date'+index).focus();
		$('#facet_value_end_date'+index).datepicker("option","minDate",selectedDate);
		$('#facet_value_end_date'+index).focus(); // refocus or the calendar disappears :(
	}
}

/**
 * Helper function to determine null, undefined, empty variables
 *
 * @param {obj} date - the variable to check
 */
function isEmpty(data) {
	if(typeof(data) == 'number' || typeof(data) == 'boolean') {
		return false;
	}
	if(typeof(data) == 'undefined' || data === null) {
		return true;
	}
	if(typeof(data.length) != 'undefined') {
		return data.length == 0;
	}
	var count=0;
	for(var i in data) {
		if(data.hasOwnProperty(i)) {
			count++;
		}
	}
	return count==0;
}


/**
 * Compiles all data input by the user and creates a widget or link
 *
 */
function createDeepSearchLink() {
	var domain = $('#domain_name').val();
	var institution = $('#institution_code').val();
	var view = $('#view_code').val();
	var label = $('#view_label').val();
	var tab = $('#search_tab').val();
	var page = $('#search_page').val();
	var rpp = $('#search_rpp').val();
	var scope = $('#scope_field').val();
	var field = $('#search_field').val();
	var precision = $('#precision_field').val();
	var criteria = $('#search_criteria').val();
	var srt = $('#sort_field option:selected').text();
	var sortField = $('#sort_field option:selected').val();
	
	var indx = rpp * page + 1;
	
	if(!isEmpty(srt) && srt=='default') {
		srt='';
		sortField='';
	} else {
		srt = '&srt='+srt;
		sortField = '&sortField='+sortField;
	}
	
	var facet_query = '';
	$('.facet_type_select').each( function() {
		var id = $(this).attr('id');
		index = id.slice(id.lastIndexOf('_'));
		
		var type = $('#facet_type_field'+index).val();
		var value = $('#facet_value_field'+index).val();
	    var counter = 0;
		if(type == 'facet_creationdate') {
			var start_date= $('#facet_value_field'+index).val();
			var end_date= $('#facet_creationdate_end_date'+index).val();
			if(!isEmpty(start_date) && !isEmpty(end_date)) {
				value = '['+start_date+'+TO+'+end_date+']';
			} else {
				value = '';
			}
		}
		
		if(type == 'facet_date_range') {
			var start_date = $('#facet_value_field'+index).val();
			var end_date = $('#facet_value_end_date'+index).val();
			if(!isEmpty(start_date) && !isEmpty(end_date)) {
				facet_query += '&query=dr_s,exact,'+start_date+'&query=dr_e,exact,'+end_date;
				type=value=null;
			}
		}
		
		if(type == 'facet_local1'){
			var inst_abrev = $('#view_code').val();
			if(inst_abrev.indexOf('_') > 0){
				inst_abrev = inst_abrev.substr(0, inst_abrev.indexOf('_'));
			}
			if(!isEmpty(type) && !isEmpty(value)) {
				if(type.length>0 && value.length>0) {
				    //facet_query += '&query='+type+',exact,'+value + '$$I' + inst_abrev; OLD method for single location
				    counter ++;
				    facet_query +=  '&mfacet=library,include,' + value + '$$I' + inst_abrev +','+ counter //NEW method for multiple location
				    //facet_query += '&mfacet=rtype,include'+value
					type=value=null;
				}
			}
		}
		
		if(type == 'facet_lang'){
			if(!isEmpty(type) && !isEmpty(value)) {
			    if(type.length>0 && value.length>0) {
				counter++;
					facet_query += '&facet=lang,include,'+value
					type=value=null;
				}
			}
		}
		
		if(!isEmpty(type) && !isEmpty(value)) {
		    if(type.length>0 && value.length>0) {
			counter++;
				facet_query += '&mfacet=rtype,include,'+value+','+counter
			}
		}
	});
	
	var url = domain + '/primo-explore/search?vid=' + view + '&tab=' + tab //+ '&indx=' + indx + '&bulkSize=' + rpp;
	url += srt + sortField;
	if(scope.length>0) url += '&search_scope=' + encodeURIComponent(scope);
	url += '&query='+field+','+precision+',';
	
	/**
	 * facets must come after the query or the first facet will appear in the search box on the results page.
	 */
	if(isEmpty(criteria)) {
		var d = new Date();
		var n = d.getTime();
		$('#result').val('<div>\r	<script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>\r		<form>\r			<label for="' + n + '">' + label + '</label><input type="text" id="' + n + '"><a class="search_link' + n + '"><button type="submit">Search</button></a>\r	<script type="text/javascript">\r	$("a.search_link' + n + '").on("click",function' + n + ');\r	function function'+ n + '(){\r	var target = "');
		$('#result').val($('#result').val() + url + '"');
		$('#result').val($('#result').val() + "+document" + "." + "getElementById" + "('" + n + "')" + "." + "value");
		if(facet_query.length>0) $('#result').val($('#result').val() + '+"' + facet_query + '"');
		$('#result').val($('#result').val() + ";\r	window.open(target,'_blank');\r	}" + "\r	</script" + ">\r		</form>\r</div>");		
		$('#result2').html(" ");
	} else {
		url += encodeURIComponent(criteria);
		if(facet_query.length>0) url += facet_query;
		label = '';
		var link = '<a href="' + url + '" target="_blank">';
		link += isEmpty(label) ? 'Search for ' + criteria : label;
		link += "</a>";
			
		$('#result').val(link);

	
	$('#result').select();
	testtext = $('#result').val();
	$('#result2').html("Test Your Link:<br/>"+testtext);
		
	}	
}

function populate(select){

	if(select == "Select a USG Library"){
		institution_name = "Nobody's";
		institution_code = "USG";
		view_code = "USG";
	}
	
	if(select == "University of Georgia"){
		scopes = UGA_scopes;
		tab_names = UGA_tab_names;
		domain_name = UGA_library_basic_details[2];
		institution_code = UGA_library_basic_details[0];
		view_code = UGA_library_basic_details[1];
		institution_name = UGA_library_basic_details[3];
	}

	if(select == "Abraham Baldwin Agriculture College"){
		scopes = ABAC_scopes;
		tab_names = ABAC_tab_names;
		domain_name = ABAC_library_basic_details[2];
		institution_code = ABAC_library_basic_details[0];
		view_code = ABAC_library_basic_details[1];
		institution_name =  ABAC_library_basic_details[3];
	}

	if(select == "Albany State University"){
		scopes = ASU_scopes;
		tab_names = ASU_tab_names;
		domain_name = ASU_library_basic_details[2];
		institution_code = ASU_library_basic_details[0];
		view_code = ASU_library_basic_details[1];
		institution_name =  ASU_library_basic_details[3];
	}

	if(select == "Armstrong State University"){
		scopes = ARMSTRONG_scopes;
		tab_names = ARMSTRONG_tab_names;
		domain_name = ARMSTRONG_library_basic_details[2];
		institution_code = ARMSTRONG_library_basic_details[0];
		view_code = ARMSTRONG_library_basic_details[1];
		institution_name =  ARMSTRONG_library_basic_details[3];
	}

	if(select == "Atlanta Metropolitan State College"){
		scopes = ATLM_scopes;
		tab_names = ATLM_tab_names;
		domain_name = ATLM_library_basic_details[2];
		institution_code = ATLM_library_basic_details[0];
		view_code = ATLM_library_basic_details[1];
		institution_name =  ATLM_library_basic_details[3];
	}

	if(select == "Augusta University"){
		scopes = AUGUSTA_scopes;
		tab_names = AUGUSTA_tab_names;
		domain_name = AUGUSTA_library_basic_details[2];
		institution_code = AUGUSTA_library_basic_details[0];
		view_code = AUGUSTA_library_basic_details[1];
		institution_name =  AUGUSTA_library_basic_details[3];
	}

	if(select == "Bainbridge State College"){
		scopes = BCS_scopes;
		tab_names = BCS_tab_names;
		domain_name = BCS_library_basic_details[2];
		institution_code = BCS_library_basic_details[0];
		view_code = BCS_library_basic_details[1];
		institution_name =  BCS_library_basic_details[3];
	}

	if(select == "Clayton State University"){
		scopes = CLAYTON_scopes;
		tab_names = CLAYTON_tab_names;
		domain_name = CLAYTON_library_basic_details[2];
		institution_code = CLAYTON_library_basic_details[0];
		view_code = CLAYTON_library_basic_details[1];
		institution_name =  CLAYTON_library_basic_details[3];
	}

	if(select == "College of Coastal Georgia"){
		scopes = CCGA_scopes;
		tab_names = CCGA_tab_names;
		domain_name = CCGA_library_basic_details[2];
		institution_code = CCGA_library_basic_details[0];
		view_code = CCGA_library_basic_details[1];
		institution_name =  CCGA_library_basic_details[3];
	}

	if(select == "Columbus State University"){
		scopes = CSU_scopes;
		tab_names = CSU_tab_names;
		domain_name = CSU_library_basic_details[2];
		institution_code = CSU_library_basic_details[0];
		view_code = CSU_library_basic_details[1];
		institution_name =  CSU_library_basic_details[3];
	}

	if(select == "Dalton State College"){
		scopes = DALTON_scopes;
		tab_names = DALTON_tab_names;
		domain_name = DALTON_library_basic_details[2];
		institution_code = DALTON_library_basic_details[0];
		view_code = DALTON_library_basic_details[1];
		institution_name =  DALTON_library_basic_details[3];
	}

	if(select == "East Georgia State College"){
		scopes = EGSC_scopes;
		tab_names = EGSC_tab_names;
		domain_name = EGSC_library_basic_details[2];
		institution_code = EGSC_library_basic_details[0];
		view_code = EGSC_library_basic_details[1];
		institution_name =  EGSC_library_basic_details[3];
	}

	if(select == "Fort Valley State University"){
		scopes = FVSU_scopes;
		tab_names = FVSU_tab_names;
		domain_name = FVSU_library_basic_details[2];
		institution_code = FVSU_library_basic_details[0];
		view_code = FVSU_library_basic_details[1];
		institution_name =  FVSU_library_basic_details[3];
	}

	if(select == "Georgia College and State University"){
		scopes = GCSU_scopes;
		tab_names = GCSU_tab_names;
		domain_name = GCSU_library_basic_details[2];
		institution_code = GCSU_library_basic_details[0];
		view_code = GCSU_library_basic_details[1];
		institution_name =  GCSU_library_basic_details[3];
	}

	if(select == "Georgia Gwinnett College"){
		scopes = GGC_scopes;
		tab_names = GGC_tab_names;
		domain_name = GGC_library_basic_details[2];
		institution_code = GGC_library_basic_details[0];
		view_code = GGC_library_basic_details[1];
		institution_name =  GGC_library_basic_details[3];
	}

	if(select == "Georgia Highlands College"){
		scopes = GHC_scopes;
		tab_names = GHC_tab_names;
		domain_name = GHC_library_basic_details[2];
		institution_code = GHC_library_basic_details[0];
		view_code = GHC_library_basic_details[1];
		institution_name =  GHC_library_basic_details[3];
	}

	if(select == "Georgia Piedmont Technical College"){
		scopes = GPTC_scopes;
		tab_names = GPTC_tab_names;
		domain_name = GPTC_library_basic_details[2];
		institution_code = GPTC_library_basic_details[0];
		view_code = GPTC_library_basic_details[1];
		institution_name =  GPTC_library_basic_details[3];
	}

	if(select == "Georgia Southern Univesity"){
		scopes = GASOU_scopes;
		tab_names = GASOU_tab_names;
		domain_name = GASOU_library_basic_details[2];
		institution_code = GASOU_library_basic_details[0];
		view_code = GASOU_library_basic_details[1];
		institution_name =  GASOU_library_basic_details[3];
	}

	if(select == "Georgia Southwestern State Univesity"){
		scopes = GSWU_scopes;
		tab_names = GSWU_tab_names;
		domain_name = GSWU_library_basic_details[2];
		institution_code = GSWU_library_basic_details[0];
		view_code = GSWU_library_basic_details[1];
		institution_name =  GSWU_library_basic_details[3];
	}

	if(select == "Georgia State University"){
		scopes = GSU_scopes;
		tab_names = GSU_tab_names;
		domain_name = GSU_library_basic_details[2];
		institution_code = GSU_library_basic_details[0];
		view_code = GSU_library_basic_details[1];
		institution_name =  GSU_library_basic_details[3];
	}

	if(select == "Gordon State College"){
		scopes = GORDON_scopes;
		tab_names = GORDON_tab_names;
		domain_name = GORDON_library_basic_details[2];
		institution_code = GORDON_library_basic_details[0];
		view_code = GORDON_library_basic_details[1];
		institution_name =  GORDON_library_basic_details[3];
	}

	if(select == "Kennesaw State University"){
		scopes = KSU_scopes;
		tab_names = KSU_tab_names;
		domain_name = KSU_library_basic_details[2];
		institution_code = KSU_library_basic_details[0];
		view_code = KSU_library_basic_details[1];
		institution_name =  KSU_library_basic_details[3];
	}

	if(select == "Middle Georgia State University"){
		scopes = MGA_scopes;
		tab_names = MGA_tab_names;
		domain_name = MGA_library_basic_details[2];
		institution_code = MGA_library_basic_details[0];
		view_code = MGA_library_basic_details[1];
		institution_name =  MGA_library_basic_details[3];
	}
	if(select == "Savannah State University"){
		scopes = SSU_scopes;
		tab_names = SSU_tab_names;
		domain_name = SSU_library_basic_details[2];
		institution_code = SSU_library_basic_details[0];
		view_code = SSU_library_basic_details[1];
		institution_name =  SSU_library_basic_details[3];
	}

	if(select == "South Georgia State College"){
		scopes = SGSC_scopes;
		tab_names = SGSC_tab_names;
		domain_name = SGSC_library_basic_details[2];
		institution_code = SGSC_library_basic_details[0];
		view_code = SGSC_library_basic_details[1];
		institution_name =  SGSC_library_basic_details[3];
	}

	if(select == "University of North Georgia"){
		scopes = UNG_scopes;
		tab_names = UNG_tab_names;
		domain_name = UNG_library_basic_details[2];
		institution_code = UNG_library_basic_details[0];
		view_code = UNG_library_basic_details[1];
		institution_name =  UNG_library_basic_details[3];
	}

	if(select == "University of West Georgia"){
		scopes = UWG_scopes;
		tab_names = UWG_tab_names;
		domain_name = UWG_library_basic_details[2];
		institution_code = UWG_library_basic_details[0];
		view_code = UWG_library_basic_details[1];
		institution_name =  UWG_library_basic_details[3];
	}
	if(select == "Valdosta State University"){
		scopes = VSU_scopes;
		tab_names = VSU_tab_names;
		domain_name = VSU_library_basic_details[2];
		institution_code = VSU_library_basic_details[0];
		view_code = VSU_library_basic_details[1];
		institution_name =  VSU_library_basic_details[3];
	}

	if(select == "Georgia Archives"){
		scopes = ARCHIVES_scopes;
		tab_names = ARCHIVES_tab_names;
		domain_name = ARCHIVES_library_basic_details[2];
		institution_code = ARCHIVES_library_basic_details[0];
		view_code = ARCHIVES_library_basic_details[1];
		institution_name =  ARCHIVES_library_basic_details[3];
	}
	
	$('#domain_name').val(domain_name);
	$('#institution_code').val(institution_code);
	$('#view_code').val(view_code);
	
	$('#search_tab').find('option').remove().end();
	$.each(tab_names, function(index,value) {
		$('#search_tab').append($("<option>").text(value).attr('value',index));
	});

	$('#scope_field').find('option').remove().end();
	$.each(scopes, function(index,value) {
		$('#scope_field').append($("<option>").text(value).attr('value',index));
	});

}
