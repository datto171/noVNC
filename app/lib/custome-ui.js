// -------------- TOGGLE SETTINGS CONTROL BAR --------------------- //
function closeAllPanels() {
    closeExtraKeys();
    closeDisplayOption();
    closeScreen();
}

function openControlbar() {
    document.getElementById('control_bar').classList.add("control-bar-active");
    document.getElementById('arrow_control_bar_handle').classList.add("arrow-control-bar-active");
}

function closeControlbar() {
    closeExtraKeys();
    document.getElementById('control_bar').classList.remove("control-bar-active");
    document.getElementById('arrow_control_bar_handle').classList.remove("arrow-control-bar-active");
}

function toggleControlbar() {
    if (document.getElementById("control_bar").classList.contains("control-bar-active")) {
        closeControlbar();
    } else {
        openControlbar();
    }
}

function openExtraKeys() {
    closeAllPanels();
    document.getElementById('extra_keys').classList.add("extra-keys-active");
}

function closeExtraKeys() {
    document.getElementById('extra_keys').classList.remove("extra-keys-active");
}

function toggleExtraKeys() {
    if (document.getElementById("extra_keys").classList.contains("extra-keys-active")) {
        closeExtraKeys();
    } else {
        openExtraKeys();
    }
}

function openDisplayOption() {
    closeAllPanels();
    document.getElementById('option_display').classList.add("advan-option-open");
}

function closeDisplayOption() {
    document.getElementById('option_display').classList.remove("advan-option-open");
}

function toggleDisplayOption() {
    if (document.getElementById("option_display").classList.contains("advan-option-open")) {
        closeDisplayOption();
    } else {
        openDisplayOption();
    }
}

function openScreen() {
    closeAllPanels();
    document.getElementById('option_screen').classList.add("advan-option-open");
}

function closeScreen() {
    document.getElementById('option_screen').classList.remove("advan-option-open");
}

function toggleScreen() {
    if (document.getElementById("option_screen").classList.contains("advan-option-open")) {
        closeScreen();
    } else {
        openScreen();
    }
}

function toggleChatBox() {
    let nameEvent = "toggle-chat-box";
    let data = { name_event: nameEvent };
    parent.postMessage(data, "*");
}

function testFullScreen() {
    let nameEvent = "toggle-full-screen";
    let data = { name_event: nameEvent };
    parent.postMessage(data, "*");
}