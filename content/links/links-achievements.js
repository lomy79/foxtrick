'use strict';
/**
 * links-achievements.js
 * Foxtrick add links to manager pages
 * @author convinced, LA-MJ
 */

Foxtrick.modules['LinksAchievements'] = {
	MODULE_CATEGORY: Foxtrick.moduleCategories.LINKS,
	PAGES: ['achievements'],
	LINK_TYPE: 'achievementslink',
	/**
	 * return HTML for FT prefs
	 * @param  {document}         doc
	 * @param  {function}         cb
	 * @return {HTMLUListElement}
	 */
	OPTION_FUNC: function(doc, cb) {
		return Foxtrick.util.links.getPrefs(doc, this, cb);
	},

	run: function(doc) {
		Foxtrick.util.links.run(doc, this);
	},

	links: function(doc) {
		var main = Foxtrick.Pages.All.getMainHeader(doc);

		var teamid = Foxtrick.util.id.findTeamId(main);
		var teamname = Foxtrick.Pages.All.getTeamName(doc);
		var userid = Foxtrick.util.id.findUserId(main);

		var info = {
			teamid: teamid,
			teamname: teamname,
			userid: userid,
		};
		return { info: info };
	}
};
