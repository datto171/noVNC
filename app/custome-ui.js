// -------------- TOGGLE SETTINGS CONTROL BAR --------------------- //
function closeAllPanels() {
    closeExtraKeys();
    closeDisplayOption();
    closeScreen();
}

function openControlbar() {
    document.getElementById('control_bar').classList.add("control-bar-active");
    $('#test_box').css('margin-top', '45px');
    document.getElementById('arrow_control_bar_handle').classList.add("arrow-control-bar-active");
}

function closeControlbar() {
    $('#test_box').css('margin-top', '0px');
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

function openChatBox() {
    closeAllPanels();
    document.getElementById('chat_box').classList.add("chat-box-open");
    setTimeout(function () {
        document.getElementById('input_chat_box').focus();
    }, 100);
}

function closeChatBox() {
    document.getElementById('chat_box').classList.remove("chat-box-open");
}

function toggleChatBox() {
    if (document.getElementById("chat_box").classList.contains("chat-box-open")) {
        closeChatBox();
    } else {
        openChatBox();
    }
}

// -------------- HANDLE CHAT BOX --------------------- //
// Button F1 - open chat box
shortcut.add("F1", function () {
    toggleChatBox();
});

// Chat Enter - content chat box
shortcut.add("Enter", function () {
    // Get time now
    let d = new Date();
    let hours = d.getHours();
    let min = d.getMinutes();
    let newChat = document.getElementById("input_chat_box").value;

    // Add new node chat to the conversation and refresh
    let parent = document.getElementById('conversation');
    let newChild = '<div class="test"><span class="my-mess"><b>Tôi </b>(' + hours + ':' + min + '): </span >' + newChat + '</div > ';
    parent.insertAdjacentHTML('beforeend', newChild);
    document.getElementById("input_chat_box").value = "";
    scrollLastestChat();
});

// Scroll to the lastest chat 
function scrollLastestChat() {
    let listChat = document.getElementsByClassName("test");
    let lastChat = listChat[listChat.length - 1];
    lastChat.scrollIntoView({ behavior: 'smooth' });
}