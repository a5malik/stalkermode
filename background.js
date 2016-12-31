// this is the background code...

var tIDs = [];
var cd = 'a.UFILikeLink { pointer-events: none !important;cursor: default;color:Black;} a.comment_link { pointer-events: none !important;cursor: default;color:Black;} a.share_action_link {pointer-events: none !important;cursor: default;color:Black; } a.addButton { pointer-events: none !important;cursor: default;color:Black;} button.FriendRequestAdd {display: none;} div.UFICommentContainer{display: none;} div.fbTimelineComposerUnit{display: none;}';
function doStuff(tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active && tIDs.indexOf(tab.id)!=-1 ) {
	  	chrome.tabs.insertCSS(tab.id, {
		code: cd
	});
  }
}

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	tIDs.push(tab.id);
	chrome.tabs.insertCSS(tab.id, {
		code: cd
	});
	
	chrome.tabs.onUpdated.addListener(doStuff);
	chrome.tabs.onRemoved.addListener(function (tabId, changeInfo, tab) {
		tab_index = tIDs.indexOf(tab.id);
		if(tab_index!=-1)
			tIDs.splice(tab_index, 1);
	});
});