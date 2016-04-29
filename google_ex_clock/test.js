var kKeywordsStringCN = "关键词 一个或多个关键词，用以描述您的 App。关键词将使 App Store 搜索结果更加准确。关键词之间用英文逗点分隔。";
var kKeywordsStringEN = "Keywords One or more keywords that describe your app. Keywords make App Store search results more accurate. Separate keywords with a comma.";

if ("undefined" == typeof KeyEvent) var KeyEvent = {
	DOM_VK_CANCEL: 3,
	DOM_VK_HELP: 6,
	DOM_VK_BACK_SPACE: 8,
	DOM_VK_TAB: 9,
	DOM_VK_CLEAR: 12,
	DOM_VK_RETURN: 13,
	DOM_VK_ENTER: 14,
	DOM_VK_SHIFT: 16,
	DOM_VK_CONTROL: 17,
	DOM_VK_ALT: 18,
	DOM_VK_PAUSE: 19,
	DOM_VK_CAPS_LOCK: 20,
	DOM_VK_ESCAPE: 27,
	DOM_VK_SPACE: 32,
	DOM_VK_PAGE_UP: 33,
	DOM_VK_PAGE_DOWN: 34,
	DOM_VK_END: 35,
	DOM_VK_HOME: 36,
	DOM_VK_LEFT: 37,
	DOM_VK_UP: 38,
	DOM_VK_RIGHT: 39,
	DOM_VK_DOWN: 40,
	DOM_VK_PRINTSCREEN: 44,
	DOM_VK_INSERT: 45,
	DOM_VK_DELETE: 46,
	DOM_VK_0: 48,
	DOM_VK_1: 49,
	DOM_VK_2: 50,
	DOM_VK_3: 51,
	DOM_VK_4: 52,
	DOM_VK_5: 53,
	DOM_VK_6: 54,
	DOM_VK_7: 55,
	DOM_VK_8: 56,
	DOM_VK_9: 57,
	DOM_VK_SEMICOLON: 59,
	DOM_VK_EQUALS: 61,
	DOM_VK_A: 65,
	DOM_VK_B: 66,
	DOM_VK_C: 67,
	DOM_VK_D: 68,
	DOM_VK_E: 69,
	DOM_VK_F: 70,
	DOM_VK_G: 71,
	DOM_VK_H: 72,
	DOM_VK_I: 73,
	DOM_VK_J: 74,
	DOM_VK_K: 75,
	DOM_VK_L: 76,
	DOM_VK_M: 77,
	DOM_VK_N: 78,
	DOM_VK_O: 79,
	DOM_VK_P: 80,
	DOM_VK_Q: 81,
	DOM_VK_R: 82,
	DOM_VK_S: 83,
	DOM_VK_T: 84,
	DOM_VK_U: 85,
	DOM_VK_V: 86,
	DOM_VK_W: 87,
	DOM_VK_X: 88,
	DOM_VK_Y: 89,
	DOM_VK_Z: 90,
	DOM_VK_WIN: 91,
	DOM_VK_CONTEXT_MENU: 93,
	DOM_VK_NUMPAD0: 96,
	DOM_VK_NUMPAD1: 97,
	DOM_VK_NUMPAD2: 98,
	DOM_VK_NUMPAD3: 99,
	DOM_VK_NUMPAD4: 100,
	DOM_VK_NUMPAD5: 101,
	DOM_VK_NUMPAD6: 102,
	DOM_VK_NUMPAD7: 103,
	DOM_VK_NUMPAD8: 104,
	DOM_VK_NUMPAD9: 105,
	DOM_VK_MULTIPLY: 106,
	DOM_VK_ADD: 107,
	DOM_VK_SEPARATOR: 108,
	DOM_VK_SUBTRACT: 109,
	DOM_VK_DECIMAL: 110,
	DOM_VK_DIVIDE: 111,
	DOM_VK_F1: 112,
	DOM_VK_F2: 113,
	DOM_VK_F3: 114,
	DOM_VK_F4: 115,
	DOM_VK_F5: 116,
	DOM_VK_F6: 117,
	DOM_VK_F7: 118,
	DOM_VK_F8: 119,
	DOM_VK_F9: 120,
	DOM_VK_F10: 121,
	DOM_VK_F11: 122,
	DOM_VK_F12: 123,
	DOM_VK_F13: 124,
	DOM_VK_F14: 125,
	DOM_VK_F15: 126,
	DOM_VK_F16: 127,
	DOM_VK_F17: 128,
	DOM_VK_F18: 129,
	DOM_VK_F19: 130,
	DOM_VK_F20: 131,
	DOM_VK_F21: 132,
	DOM_VK_F22: 133,
	DOM_VK_F23: 134,
	DOM_VK_F24: 135,
	DOM_VK_NUM_LOCK: 144,
	DOM_VK_SCROLL_LOCK: 145,
	DOM_VK_COMMA: 188,
	DOM_VK_PERIOD: 190,
	DOM_VK_SLASH: 191,
	DOM_VK_BACK_QUOTE: 192,
	DOM_VK_OPEN_BRACKET: 219,
	DOM_VK_BACK_SLASH: 220,
	DOM_VK_CLOSE_BRACKET: 221,
	DOM_VK_QUOTE: 222,
	DOM_VK_META: 224
};

window.onload = onLoad;

var timer;

function onLoad() {
	console.log("onLoad");
	update();
}

function update() {
	hide_keywords();
	timer = setTimeout(update, 1000);
}

function stopTimer() {
	console.log("stopTimer");
	clearTimeout(timer);
}

function append(tagName, inner) {

	var bodyNode = document.getElementsByTagName("body")[0];
	var newNode = document.createElement(tagName);
	newNode.innerHTML = inner;
	bodyNode.appendChild(newNode);
}

function hide_keywords() {

	var labels = document.getElementsByTagName("label");
	var taretNode;
	for (var i = labels.length - 1; i >= 0; i--) {
		// console.log(labels[i].innerText);
		if (labels[i].innerText == kKeywordsStringEN || labels[i].innerText == kKeywordsStringCN) {
			taretNode = labels[i];
			break;
		}
	}
	// console.log("taretNode = " + taretNode);
	if (taretNode) {
		var keywordNode = taretNode.parentNode;
		keywordNode && keywordNode.parentNode && keywordNode.parentNode.removeChild(keywordNode);
		stopTimer();
	}
}

function set_password() {

	// append("div", "<div><p> Hi there </p></div>");
	// var authFrame = document.getElementById("authFrame");



	var account = document.getElementById("appleId");

	var password = document.getElementById("pwd");

	account.value = "tianleiapple@sina.com";
	password.value = "Tian1231";

	// console.log("authFrame = " + authFrame + ",account = " + account + ",password = " + password);

	fire_onchange(account);

	fire_onchange(password);
}


function fire_onchange(a, b, c) {
	try {
		if (a) {
			console.log("a = " + a);
			// console.log("b = " + b);
			// console.log("c = " + );
			if (a.ownerDocument && "function" == typeof a.ownerDocument.createEvent) {
				var d = a.ownerDocument.createEvent("Events");
				d.initEvent("change", !0, !0);
				a.dispatchEvent(d);
				d = a.ownerDocument.createEvent("Events");
				d.initEvent("input", !0, !0);
				a.dispatchEvent(d);
				"undefined" != typeof ischrome && (ischrome && "function" == typeof a.onkeyup) && (c && (d.keyCode = 8), a.onkeyup(d))
			} else "undefined" != typeof a.fireEvent && (a.fireEvent("onchange"), a.fireEvent("oninput"));
			("undefined" == typeof b || null ==
				b || b) && "function" == typeof sendKey && sendKey("SHIFT", a);
			if ("function" == typeof lpGetBrowserForDocument) {
				var e = lpGetBrowserForDocument(a.ownerDocument);
				e && (e.lpfieldchanged = !0)
			}
		}
	} catch (f) {}
}


function sendKey(a, b) {
	try {
		return keyName = "DOM_VK_" + a.toUpperCase(), send_simulated_key(b, 0, KeyEvent[keyName], !1)
	} catch (c) {
		lpdbg("error", c)
	}
	return null
}

function send_simulated_key(a, b, c, d) {
	if (void 0 === a || void 0 === a.ownerDocument) return lpdbg("error", "No key target!"), !1;
	var e = a.ownerDocument.createEvent("KeyboardEvent");
	e.initKeyboardEvent("keydown", !0, !0, document.defaultView, !1, !1, d, !1, c, c);
	var f = a.dispatchEvent(e);
	e = a.ownerDocument.createEvent("KeyboardEvent");
	e.initKeyboardEvent("keyup", !0, !0, null, !1, !1, d, !1, c, c);
	a.dispatchEvent(e);
	return f
}