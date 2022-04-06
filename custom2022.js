console.log("This is a text from thirdpary link.");
var body = document.getElementsByTagName('body')[0];
if (window.location.pathname == "/") {
     body.classList.add('homepage');
     body.classList.remove('internalpages');
} else {
     body.classList.add('internalpages');
     body.classList.remove('homepage');
}

var tabsBottomWrapper = document.querySelector("#tabsBottomWrapper .ProductPage---freeInterestText---2y6x9");
var minicartContent = document.querySelector("#minicartContent + ._1x9W3_ h2.GX53aF");

if (tabsBottomWrapper) {
 tabsBottomWrapper.innerHTML = "<b>Interest free credit</b> available on orders over £1,000";
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
 tabsBottomWrapper.innerHTML = "<b>Interest free credit</b> available on orders over £1,000";
});
}

if (minicartContent) {
 minicartContent.innerHTML = "<b>Interest free credit</b> available on orders over £1,000";
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
 minicartContent.innerHTML = "<b>Interest free credit</b> available on orders over £1,000";
});
}
