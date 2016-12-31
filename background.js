// this is the background code...

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.insertCSS(tab.ib, {
		code: 'a.UFILikeLink { pointer-events: none !important;cursor: default;color:Black;} a.comment_link { pointer-events: none !important;cursor: default;color:Black;} a.share_action_link {pointer-events: none !important;cursor: default;color:Black; } a.addButton { pointer-events: none !important;cursor: default;color:Black;} button.FriendRequestAdd {display: none;} div.UFICommentContainer{display: none;}'
	});
	
});