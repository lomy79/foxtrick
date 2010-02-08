/**
 * Fixes for css isues
 * @author spambot
 */
 
FoxtrickFixcssProblems = {
       
    MODULE_NAME : "FixcssProblems",
    MODULE_CATEGORY : Foxtrick.moduleCategories.PRESENTATION,
	PAGES : new Array('all'), 
    DEFAULT_ENABLED : true,
	NEW_AFTER_VERSION: "0.5.0.2",
	LATEST_CHANGE:"Some options moved to new modules",	
	LATEST_CHANGE_CATEGORY : Foxtrick.latestChangeCategories.FIX,
	
    OPTIONS :  new Array(           "Forum_FoxLink_Headers",
                                    "Club_Menu_Teamnames",
                                    "Page_Minimum_Height",
                                    "MatchOrder_Lineheight",
                                    "RTL_Fixes",
                                    "ForumScrollBarFix"
                  
								),
	OPTIONS_CSS: new Array (
                                Foxtrick.ResourcePath+"resources/css/fixes/Forum_FoxLink_Headers.css",
                                Foxtrick.ResourcePath+"resources/css/fixes/Club_Menu_Teamnames.css",
                                Foxtrick.ResourcePath+"resources/css/fixes/Page_Minimum_Height.css",
                                Foxtrick.ResourcePath+"resources/css/fixes/MatchOrder_Lineheight.css",
                                "",
                                Foxtrick.ResourcePath+"resources/css/fixes/ForumScrollBarFix.css"
								
								),
        OPTIONS_CSS_RTL: new Array (
                                Foxtrick.ResourcePath+"resources/css/fixes/Forum_FoxLink_Headers.css",
                                Foxtrick.ResourcePath+"resources/css/fixes/Club_Menu_Teamnames.css",
                                Foxtrick.ResourcePath+"resources/css/fixes/Page_Minimum_Height.css",
                                Foxtrick.ResourcePath+"resources/css/fixes/MatchOrder_Lineheight.css",
                                Foxtrick.ResourcePath+"resources/css/fixes/RTL_Fixes.css",
                                Foxtrick.ResourcePath+"resources/css/fixes/ForumScrollBarFix.css"
								
                                ),
                               
    init : function() {
    },

                                                                       
    run : function(page, doc) {
       
	   if ( Foxtrick.isRTLLayout(doc) && Foxtrick.isModuleFeatureEnabled( this, "RTL_Fixes" )) {
				if (!Foxtrick.isStandardLayout( doc ) ) {
                        var css = Foxtrick.ResourcePath+"resources/css/fixes/RTL_Fixes_simple.css";
						Foxtrick.addStyleSheet( doc, css );
				}							
			}
			
			
     /* obsolete      
		if (Foxtrick.isModuleFeatureEnabled( this, "Forum_ThreadlistSpace" )) {
				if (!Foxtrick.isStandardLayout( doc ) ) {
                        var css = Foxtrick.ResourcePath+"resources/css/fixes/Forum_ThreadlistSpace_simple.css";
						Foxtrick.addStyleSheet( doc, css );
				}
				else {
				        var css = Foxtrick.ResourcePath+"resources/css/fixes/Forum_ThreadlistSpace.css";
						Foxtrick.addStyleSheet( doc, css );
				}				
			}*/
             
	return;
   

                // old version
               
        // standard | simpe | all | alternate
        var LAYOUTSWITCH = new Array (
           // "standard",
           // "alternate",
            "all",
            "all",
            "all",
            "simple",
            "all",
                        "all"
        );
        Foxtrick.dump (' => LAYOUT: ' + Foxtrick.isStandardLayout( doc ) + '\n');
		
	
        for (var i = 0; i < this.OPTIONS.length; i++) {
           
            if (Foxtrick.isModuleFeatureEnabled( this, this.OPTIONS[i]  ) ) {
                var css = Foxtrick.ResourcePath+"resources/css/fixes/" + this.OPTIONS[i] + ".css";
                var css_simple = Foxtrick.ResourcePath+"resources/css/fixes/" + this.OPTIONS[i] + "_simple.css";
                if ( ( (LAYOUTSWITCH[i] == 'standard' ) || (LAYOUTSWITCH[i] == 'all') ) && (Foxtrick.isStandardLayout( doc ) == true) ) {
                    Foxtrick.dump ('  FIXES: (standard) ' + i + ' - ' + this.OPTIONS[i] + ' enabled.\n');
                    Foxtrick.addStyleSheet( doc, css );
                }
                else if ( ((LAYOUTSWITCH[i] == 'simple' ) || (LAYOUTSWITCH[i] == 'all')) && (Foxtrick.isStandardLayout( doc ) == false) ) {
                    // Foxtrick.dump ('  FIXES: (simple) ' + i + ' - ' + this.OPTIONS[i] + ' enabled.\n');
                    Foxtrick.addStyleSheet ( doc, css );
                }
                                else if ( LAYOUTSWITCH[i] == 'alternate' ) {
                    // Foxtrick.dump ('  FIXES: (simple) ' + i + ' - ' + this.OPTIONS[i] + ' enabled.\n');
                    if (Foxtrick.isStandardLayout( doc ) == false)  Foxtrick.addStyleSheet ( doc, css_simple );
                    else  Foxtrick.addStyleSheet ( doc, css );
                }                              
                else {
                    // Foxtrick.dump ('  FIXES: ' + i + ' - ' + this.OPTIONS[i] + ' disabled.\n');
                }
            }
        }    
    },
       
        change : function( page, doc ) {

        }    
};