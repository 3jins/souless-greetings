(() => {
    let mailBody = document.getElementById(':jh');
    console.log(mailBody);
    if (mailBody === null) {
        mailBody = document.getElementById(':ih');
        if (mailBody === null) {
            console.log("여긴가");
            return false;
        } // no mail-writing page
    }
    console.log("ok");
    mailBody.innerHTML = "hi";
})();