["click", "input"].forEach(e => document.addEventListener(e, createEmail));
    
const toggles = {
    buildTime: { id: 'buildTimeTog', state: 1 },
    setup: { id: 'setupTog', state: 0 },
    utah: { id: 'utahTog', state: 0 },
    template: { id: 'templateTog', state: 0 },
    setupExtra: { id: 'setupExtraTog', state: 0 },
    chat: { id: 'chatTog', state: 0 },
    webBase: { id: 'webBaseTog', state: 0 },
    sEO1: { id: 'sEO1Tog', state: 0 },
    sEO2: { id: 'sEO2Tog', state: 0 },
    boost1: { id: 'boost1Tog', state: 0 },
    boost2: { id: 'boost2Tog', state: 0 },
    boost3: { id: 'boost3Tog', state: 0 },
    xProvider: { id: 'xProviderTog', state: 0 },
    xFacility: { id: 'xFacilityTog', state: 0 },
    blog: { id: 'blogTog', state: 0 },
    pPCMgmt: { id: 'pPCMgmtTog', state: 0 },
    social: { id: 'socialTog', state: 0 },
    combo: { id: 'comboTog', state: 0 },
    stratPlus: { id: 'stratPlusTog', state: 0 },
    aug1: { id: 'aug1Tog', state: 0 },
    aug2: { id: 'aug2Tog', state: 0 },
    aug3: { id: 'aug3Tog', state: 0 },
    aug4: { id: 'aug4Tog', state: 0 },
    proceduresConfirm: { id: 'proceduresConfirmTog', state: 1 },
    commCell: { id: 'commCellTog', state: 1 },
    billingCell: { id: 'billingCellTog', state: 1 },
    billingSame: { id: 'billingSameTog', state: 1 },
};

let buildTimeDisplay = "";

for (let key in toggles) {
    document.querySelector(`#${toggles[key].id}`).addEventListener('click', function() {
        toggles[key].state = toggles[key].state === 0 ? 1 : 0;
    });
}

function toggleVisible(selector, condition, displayValueTrue, displayValueFalse) {
    const element = document.querySelector(selector);
    if (condition) {
        element.style.display = displayValueTrue;
    } else {
        element.style.display = displayValueFalse;
    }
}
function toggleClass(selector, condition) {
    const element = document.querySelector(selector);
    if (condition) {
        element.classList.add("toggleButtonOn");
        element.classList.remove("toggleButtonOff");
    } else {
        element.classList.remove("toggleButtonOn");
        element.classList.add("toggleButtonOff");
    }
}

function createEmail () {
    
    //Run functions
    createBuildTime();
    createUtah();
    createTemplate();
    createSetup(); 
    createSetupExtra();
    createChat();
    createWebBase();
    createSEO1();
    createSEO2();
    createBoost1();
    createBoost2();
    createBoost3();
    createBlogs();
    createXProvider();
    createXFacility(); 
    createPPCMgmt();
    createSocialMgmt();
    createComboMgmt();
    createStratPlus();
    createAug1();
    createAug2();
    createAug3();
    createAug4();
    createPM();
    createCSM();
    createProceduresConfirm();
    createComm();
    createURL();
    createOtherWeb();
    createBilling();
    createBillingSame();
    createNotes();
    
    //Create functions
    function createBuildTime () {
        buildTimeDisplay = document.querySelector("#buildTimeTog").value;
    }
    function createUtah () {
        utahDisplay = toggles.utah.state ? "Utah" : "Non-Utah";
        toggleVisible('#utahTog', toggles.utah.state, "none", "none");
        toggleClass('#utahTog', toggles.utah.state);
    }
    function createTemplate () {
        templateDisplay = toggles.template.state ? "(Custom)" : "(Template)";
        toggleVisible('#templateTog', toggles.template.state, "none", "none");
        toggleClass('#templateTog', toggles.template.state);
    }
    function createSetup () {
        toggleClass('#setupTog', toggles.setup.state);
        ['#utahTog', '#templateTog', '#setupFeePriceLabel'].forEach(e =>
            toggleVisible(e, toggles.setup.state, "inline", "none"));
        if (toggles.template.state) {
            customTemplate = `Custom - Showed the following designs during the demo or sent with the proposal:<br>`;
            setupFee = Number(document.querySelector('#setupFeeCustom').value);
            retailSetupFee = toggles.setup.state ? 5000 : 0;
            retailSetupDisplay = toggles.setup.state ? `$5000 Website Setup Fee ${templateDisplay} - ${utahDisplay}<br>` : "";
            document.querySelector('#setupFeeCustom').style.display = "inline";
            document.querySelector('#setupFeeTemplate').style.display = "none";
        } else {
            customTemplate = "";
            setupFee = Number(document.querySelector('#setupFeeTemplate').value);
            retailSetupFee = toggles.setup.state ? 2500 : 0;
            retailSetupDisplay = toggles.setup.state ? `$2500 Website Setup Fee ${templateDisplay} - ${utahDisplay}<br>` : "";
            document.querySelector('#setupFeeCustom').style.display = "none";
            document.querySelector('#setupFeeTemplate').style.display = "inline";
        }
        setupDisplay = toggles.setup.state ? `$${setupFee} Website Setup Fee ${templateDisplay} - ${utahDisplay}<br>` : "";
        if (!toggles.setup.state) {
            document.querySelector('#setupFeePriceLabel').style.display = "none";
        }
    }
    function createSetupExtra () {
        extraPagePrice = toggles.setupExtra.state ? Number(document.querySelector('#extraPagePrice').value) : 0;
        retailSetupExtraNumber = toggles.setupExtra.state ? 
            Number(document.querySelector('#retailSetupExtraNumber').value) : 0;
        retailSetupExtra = toggles.setupExtra.state ?
            `$${retailSetupExtraNumber * 150} Author Extra Content Page (${retailSetupExtraNumber})<br>` : "";
        extraPagePriceDisplay = toggles.setupExtra.state ?
            `$${extraPagePrice * retailSetupExtraNumber} Author Extra Content Page (${retailSetupExtraNumber})<br>` : "";
        procedureNum = toggles.setupExtra.state ?
            `${retailSetupExtraNumber + 10} procedures` : `10 procedures`;
        toggleVisible('#retailSetupExtraNumberLabel', toggles.setupExtra.state, "inline", "none");
        toggleVisible('#extraPagePriceLabel', toggles.setupExtra.state, "inline", "none");
        toggleClass('#setupExtraTog', toggles.setupExtra.state);
    }
    function createChat () {
        const isChat = toggles.chat.state;
        chatPrice = isChat ? Number(document.querySelector('#chatPrice').value) : 0;
        retailChatPrice = isChat ? 100 : 0;
        retailChatDisplay = isChat ? `$100 Managed Chat<br>` : "";
        chatDisplay = isChat ? `$${chatPrice} Managed Chat<br>` : "";
        chatMonthly = isChat ? `Managed Chat - Unlimited<br>` : "";
        toggleVisible('#chatPriceLabel', isChat, "inline", "none");
        toggleClass('#chatTog', isChat);
    }
    function createWebBase () {
        retailWebBasePrice = toggles.webBase.state ? 299 : 0;
        retailWebBaseDisplay = toggles.webBase.state ? `$299 Website Base Level<br>` : "";
        webBaseDisplay = toggles.webBase.state ? `$299 Website Base Level<br>` : "";
        toggleClass('#webBaseTog', toggles.webBase.state);
    }
    function createSEO1 () {
        const isSEO1 = toggles.sEO1.state;
        retailSEO1Price = isSEO1 ? 200 : 0;
        sEO1Price = isSEO1 ? Number(document.querySelector("#sEO1Price").value) : 0;
        retailSEO1 = isSEO1 ? `$200 SEO Add-On 1<br>` : "";
        sEO1PriceDisplay = isSEO1 ? `$${sEO1Price} SEO Add-On 1<br>` : "";
        toggleVisible('#sEO1Price', isSEO1, "inline", "none");
        toggleClass('#sEO1Tog', isSEO1);
    }
    function createSEO2 () {
        const isSEO2 = toggles.sEO2.state;
        retailSEO2Price = isSEO2 ? 250 : 0;
        sEO2Price = isSEO2 ? Number(document.querySelector("#sEO2Price").value) : 0;
        retailSEO2 = isSEO2 ? `$250 SEO Add-On 2<br>` : "";
        sEO2Display = isSEO2 ? `$${sEO2Price} SEO Add-On 2<br>` : "";
        toggleVisible('#sEO2Price', isSEO2, "inline", "none");
        toggleClass('#sEO2Tog', isSEO2);
    }
    function createBoost1 () {
        const isBoost1 = toggles.boost1.state;
        retailBoost1Price = isBoost1 ? 100 : 0;
        boost1Price = isBoost1 ? Number(document.querySelector("#boost1Price").value) : 0;
        retailBoost1 = isBoost1 ? `$100 Boost Feature 1<br>` : "";
        boost1Display = isBoost1 ? `$${boost1Price} Boost Feature 1<br>` : "";
        toggleVisible('#boost1Price', isBoost1, "inline", "none");
        toggleClass('#boost1Tog', isBoost1);
    }
    function createBoost2 () {
        const isBoost2 = toggles.boost2.state;
        retailBoost2Price = isBoost2 ? 100 : 0;
        boost2Price = isBoost2 ? Number(document.querySelector("#boost2Price").value) : 0;
        retailBoost2 = isBoost2 ? `$100 Boost Feature 2<br>` : "";
        boost2Display = isBoost2 ? `$${boost2Price} Boost Feature 2<br>` : "";
        toggleVisible('#boost2Price', isBoost2, "inline", "none");
        toggleClass('#boost2Tog', isBoost2);
    }
    function createBoost3 () {
        const isBoost3 = toggles.boost3.state;
        retailBoost3Price = isBoost3 ? 100 : 0;
        boost3Price = isBoost3 ? Number(document.querySelector("#boost3Price").value) : 0;
        retailBoost3 = isBoost3 ? `$100 Boost Feature 3<br>` : "";
        boost3Display = isBoost3 ? `$${boost3Price} Boost Feature 3<br>` : "";
        toggleVisible('#boost3Price', isBoost3, "inline", "none");
        toggleClass('#boost3Tog', isBoost3);
    }
    function createBlogs () {
        blogNum = toggles.blog.state ? document.querySelector('#blogNum').value : 0;
        let blogPriceField;
        let [blogPrice1x, blogPrice2x, blogPrice3x, blogPrice4x] = 
            document.querySelectorAll('#blogPrice1x, #blogPrice2x, #blogPrice3x, #blogPrice4x');

        function blogDisplayVis (show, hiddenArray) {
            show.style.display = "inline";
            hiddenArray.forEach(e => e.style.display = "none" );
        }
        
        switch (blogNum) {
            case "1X":
                retailBlogPrice = 250;
                blogPriceField = Number(blogPrice1x.value);
                blogDisplayVis(blogPrice1x, [blogPrice2x, blogPrice3x, blogPrice4x]);
                break;
            case "2X":
                retailBlogPrice = 500;
                blogPriceField = Number(blogPrice2x.value);
                blogDisplayVis(blogPrice2x, [blogPrice1x, blogPrice3x, blogPrice4x]);
                break;
            case "3X":
                retailBlogPrice = 700;
                blogPriceField = Number(blogPrice3x.value);
                blogDisplayVis(blogPrice3x, [blogPrice1x, blogPrice2x, blogPrice4x]);
                break;
            case "4X":
                retailBlogPrice = 800;
                blogPriceField = Number(blogPrice4x.value);
                blogDisplayVis(blogPrice4x, [blogPrice1x, blogPrice2x, blogPrice3x]);
                break;
            default: 
                retailBlogPrice = 0;
        }
        blogPrice = toggles.blog.state ? blogPriceField : 0;
        retailBlogDisplay = toggles.blog.state ? `$${retailBlogPrice} Blogs - ${blogNum}/Month<br>` : "";
        blogDisplay = toggles.blog.state ? `$${blogPrice} Blogs - ${blogNum}/Month<br>` : "";
        ['#blogNum', '#blogPriceLabel'].forEach(e => toggleVisible(e, toggles.blog.state, "inline", "none"));
        toggleClass('#blogTog', toggles.blog.state);
        if (!toggles.blog.state) {
                document.querySelector('#blogPriceLabel').style.display = "none";
        }
    }
    function createXProvider () {
        const isXProvider = toggles.xProvider.state;
        toggleVisible('#xProviderNumberLabel',isXProvider, "inline","none");
        toggleVisible('#xProviderPriceLabel',isXProvider, "inline","none");
        toggleClass('#xProviderTog', isXProvider);
        xProviderNumber = isXProvider ? Number(document.querySelector('#xProviderNumber').value) : 0;
        xProviderPrice = isXProvider ? Number(document.querySelector('#xProviderPrice').value) : 0;
        providerNum = isXProvider ? `${xProviderNumber + 1} providers`: `1 provider`;
        retailXProviderDisplay = isXProvider ? `$${xProviderNumber * 250} Extra Provider (${xProviderNumber})<br>` : "";
        xProviderDisplay = isXProvider ? `$${xProviderPrice * xProviderNumber} Extra Provider (${xProviderNumber})<br>` : "";
    }
    function createXFacility () {
        const isXFacility = toggles.xFacility.state;
        toggleVisible('#xFacilityNumberLabel',isXFacility, "inline","none");
        toggleVisible('#xFacilityPriceLabel',isXFacility, "inline","none");
        toggleClass('#xFacilityTog', isXFacility);
        xFacilityNumber = isXFacility ? Number(document.querySelector('#xFacilityNumber').value) : 0;
        xFacilityPrice = isXFacility ? Number(document.querySelector('#xFacilityPrice').value) : 0;
        retailXFacilityDisplay = isXFacility ? `$${xFacilityNumber * 250} Extra Facility (${xFacilityNumber})<br>` : "";
        xFacilityDisplay = isXFacility ? `$${xFacilityPrice * xFacilityNumber} Extra Facility (${xFacilityNumber})<br>` : "";
        facilityNum = isXFacility ? `${xFacilityNumber + 1} facilities`: `1 facility`;
    }
    function createPPCMgmt () {
        const isPPCMgmt = toggles.pPCMgmt.state;
        toggleVisible('#pPCMgmtPriceLabel',isPPCMgmt, "inline", "none");
        toggleVisible('#pPCBudgetPriceLabel',isPPCMgmt, "inline", "none");
        toggleClass('#pPCMgmtTog',isPPCMgmt);
        retailPPCMgmtDisplay = isPPCMgmt ? `$250 PPC Leads Management<br>` : "";
        pPCMgmtPrice = isPPCMgmt ? Number(document.querySelector('#pPCMgmtPrice').value) : 0;
        retailPPCMgmtPrice = isPPCMgmt ? 250 : 0;
        pPCMgmtDisplay = isPPCMgmt ? `$${pPCMgmtPrice} PPC Leads Management<br>` : "";
        pPCBudgetPrice = isPPCMgmt ? Number(document.querySelector('#pPCBudgetPrice').value) : 0;
        pPCBudgetDisplay = isPPCMgmt ? `$${pPCBudgetPrice} PPC Leads Budget<br>` : "";
    }
    function createSocialMgmt () {
        const isSocial = toggles.social.state;
        toggleVisible('#socialMgmtPriceLabel', isSocial, "inline", "none");
        toggleVisible('#socialBudgetPriceLabel', isSocial, "inline", "none");
        toggleClass('#socialTog', isSocial);
        retailSocialMgmtDisplay = isSocial ? `$250 Social Media 2.0 Management<br>` : "";
        socialMgmtPrice = isSocial ?  Number(document.querySelector('#socialMgmtPrice').value) : 0;
        retailSocialMgmtPrice = isSocial ? 250 : 0;
        socialMgmtDisplay = isSocial ? `$${socialMgmtPrice} Social Media 2.0 Management<br>` : "";
        socialBudgetPrice = isSocial ? Number(document.querySelector('#socialBudgetPrice').value) : 0;
        socialBudgetDisplay = isSocial ? `$${socialBudgetPrice} Social Media 2.0 Budget<br>` : "";
    }
    function createComboMgmt () {
        const isCombo = toggles.combo.state;
        ['#comboMgmtPriceLabel', '#comboPPCBudgetPriceLabel', '#comboSocialBudgetPriceLabel'].forEach(e =>
            toggleVisible(e, isCombo, "inline", "none"));
        toggleClass('#comboTog', isCombo);
        retailComboMgmtDisplay = isCombo ? `$500 Combo Management Fee<br>` : "";
        comboMgmtPrice = isCombo ? Number(document.querySelector('#comboMgmtPrice').value) : 0;
        retailComboMgmtPrice = isCombo ? 500 : 0;
        comboMgmtDisplay = isCombo ? `$${comboMgmtPrice} Combo Management Fee<br>` : "";
        comboPPCBudgetPrice = isCombo ? Number(document.querySelector('#comboPPCBudgetPrice').value) : 0;
        comboPPCBudgetDisplay = isCombo ? `$${comboPPCBudgetPrice} Combo PPC Media Budget<br>` : "";
        comboSocialBudgetPrice = isCombo ? Number(document.querySelector('#comboSocialBudgetPrice').value) : 0;
        comboSocialBudgetDisplay = isCombo ? `$${comboSocialBudgetPrice} Combo Social Media Budget<br>` : "";
    }
    function createStratPlus () {
        toggleClass('#stratPlusTog', toggles.stratPlus.state);
        stratPlusPrice = toggles.stratPlus.state ? 1000 : 0;
        stratPlusDisplay = toggles.stratPlus.state ? `$1000 Strategy Plus<br>` : "";
    }
    function createAug1 () {
        toggleClass('#aug1Tog', toggles.aug1.state);
        aug1Price = toggles.aug1.state ? 50 : 0 ;
        aug1Display = toggles.aug1.state ? `$50 Augment 1<br>` : "";
    }
    function createAug2 () {
        toggleClass('#aug2Tog', toggles.aug2.state);
        aug2Price = toggles.aug2.state ? 50 : 0;
        aug2Display = toggles.aug2.state ? `$50 Augment 2<br>` : "";
    }
    function createAug3 () {
        toggleClass('#aug3Tog', toggles.aug3.state);
        aug3Price = toggles.aug3.state ? 100 : 0;
        aug3Display = toggles.aug3.state ? `$100 Augment 3<br>` : "";
    }
    function createAug4 () {
        toggleClass('#aug4Tog', toggles.aug4.state);
        aug4Price = toggles.aug4.state ? 150 : 0;
        aug4Display = toggles.aug4.state ? `$150 Augment 4<br>` : "";
    }
    
    function createRetailMonthlyTotal () {
        return retailWebBasePrice + 
            retailSEO1Price + 
            retailSEO2Price + 
            retailBoost1Price +
            retailBoost2Price + 
            retailBoost3Price + 
            retailBlogPrice +
            (xProviderNumber * 250) +
            (xFacilityNumber * 250) +
            retailPPCMgmtPrice +
            pPCBudgetPrice +
            retailSocialMgmtPrice +
            socialBudgetPrice +
            retailComboMgmtPrice +
            comboPPCBudgetPrice + 
            comboSocialBudgetPrice + 
            stratPlusPrice +
            aug1Price +
            aug2Price +
            aug3Price +
            aug4Price;
    }
    function createMonthlyTotal () {
        return retailWebBasePrice + 
            sEO1Price + 
            sEO2Price + 
            boost1Price + 
            boost2Price + 
            boost3Price + 
            blogPrice +
            (xProviderNumber * xProviderPrice) +
            (xFacilityNumber * xFacilityPrice) +
            pPCMgmtPrice +
            pPCBudgetPrice +
            socialMgmtPrice +
            socialBudgetPrice +  
            comboMgmtPrice +
            comboPPCBudgetPrice +                
            comboSocialBudgetPrice +   
            stratPlusPrice +
            aug1Price +
            aug2Price +
            aug3Price +
            aug4Price;
    }

    function createPM() {
        pMValue = document.querySelector("#pM").value;   
        pMDisplay = (pMValue === null || pMValue === "") ? "TBD" : pMValue;
    }
    function createCSM () {
        cSMValue = document.querySelector("#cSM").value;
        cSMDisplay = (cSMValue === null || cSMValue === "") ? "TBD" : cSMValue;
    }
    function createProceduresConfirm () {
        proceduresConfirmDisplay = document.querySelector("#proceduresConfirmTog").value;

    }
    function createComm () {
        commPhone = document.querySelector('#commPhone').value;
        commCellDisplay = toggles.commCell.state ? `Cell: ${commPhone}` : `Office: ${commPhone}`;
        toggleClass('#commCellTog', toggles.commCell.state);
    }  
    function createURL () {
        uRLValue = document.querySelector("#uRL").value;
        uRLDisplay = (uRLValue === null || uRLValue === "") ? "TBD" : uRLValue;
    }
    function createOtherWeb () {
        otherWebValue = document.querySelector("#otherWeb").value;
        otherWebDisplay = (otherWebValue === null || otherWebValue === "") ? "N/A" : otherWebValue;
    }
    function createBilling () {
        billingPhone = document.querySelector('#billingPhone').value; 
        billingCellDisplay = toggles.billingCell.state ? `Cell: ${billingPhone}` : `Office: ${billingPhone}`;
        toggleClass('#billingCellTog', toggles.billingCell.state);
    }          
    function createBillingSame () {
        billingName = document.querySelector('#billingName').value;
        billingEmail = document.querySelector('#billingEmail').value;
        billingDisplay = toggles.billingSame.state ? "BILLING:<br>Same as Above." : 
            `BILLING:<br>Name: ${billingName}<br>${billingCellDisplay}<br>Email: ${billingEmail}`;
        ['#billingName', '#billingPhone', '#billingEmail', '#billingCellTog'].forEach(e => 
        toggleVisible(e, toggles.billingSame.state, "none", "inline"));
        toggleClass('#billingSameTog', toggles.billingSame.state);
    } 

    
    function createNotes () {
        
        let proceduresValue = document.querySelector("#procedures").value;
        let procedureSpacing = "";
        if (proceduresValue === null || proceduresValue === "") {
            procedureSpacing = "";
        } else {
            procedureSpacing = `<br>`;
        }
        
        let designValue = document.querySelector("#design").value;            
        let designSpacing = "";
        if (designValue === null || designValue === "") {
            designSpacing = "";
        } else {
            designSpacing = `<br>`;
        }
        
        document.querySelector("#output").innerHTML =
        `${buildTimeDisplay}
        <br><br>
        RETAIL SET-UP PRICING
        <br>
        ${retailSetupDisplay}
        ${retailSetupExtra}
        ${retailChatDisplay}
        $${retailSetupFee + (retailSetupExtraNumber * 150)  + retailChatPrice} TOTAL RETAIL SET-UP
        <br><br>
        RETAIL MONTHLY PRICING
        <br>
        ${retailWebBaseDisplay}
        ${retailSEO1}
        ${retailSEO2}
        ${retailBoost1}
        ${retailBoost2}
        ${retailBoost3}
        ${retailBlogDisplay}
        ${retailXProviderDisplay}
        ${retailXFacilityDisplay}
        ${retailPPCMgmtDisplay}
        ${pPCBudgetDisplay}
        ${retailSocialMgmtDisplay}
        ${socialBudgetDisplay}
        ${retailComboMgmtDisplay}
        ${comboPPCBudgetDisplay}
        ${comboSocialBudgetDisplay}
        ${stratPlusDisplay}
        ${aug1Display}
        ${aug2Display}
        ${aug3Display}
        ${aug4Display}
        ${chatMonthly}
        $${createRetailMonthlyTotal()} TOTAL RETAIL MONTHLY
        <br><br>
        DISCOUNTED SET-UP PRICING
        <br>
        ${setupDisplay}
        ${extraPagePriceDisplay}
        ${chatDisplay}
        $${setupFee + (extraPagePrice * retailSetupExtraNumber)  + chatPrice} TOTAL DISCOUNTED SET-UP
        <br><br>
        DISCOUNTED MONTHLY PRICING
        <br>
        ${retailWebBaseDisplay}
        ${sEO1PriceDisplay}
        ${sEO2Display}
        ${boost1Display}
        ${boost2Display}
        ${boost3Display}
        ${blogDisplay}
        ${xProviderDisplay}
        ${xFacilityDisplay}
        ${pPCMgmtDisplay}
        ${pPCBudgetDisplay}
        ${socialMgmtDisplay}
        ${socialBudgetDisplay} 
        ${comboMgmtDisplay}
        ${comboPPCBudgetDisplay}
        ${comboSocialBudgetDisplay}
        ${stratPlusDisplay}        
        ${aug1Display}
        ${aug2Display}
        ${aug3Display}
        ${aug4Display}
        ${chatMonthly}
        $${createMonthlyTotal()} TOTAL DISCOUNTED MONTHLY
        <br><br>
        AREAS OF INTEREST/NOTES:<br>
        <span id="areasOfInterestFormat" style="white-space: pre-wrap">
        </span>
        <br><br>
        ONBOARDING FORM LINK:<br>
        ${document.querySelector('#onboardingForm').value}
        <br><br>
        PM: ${pMDisplay}<br>
        CSM: ${cSMDisplay}
        <br><br>
        DESIGN:<br>
        ${customTemplate}
        <span id="designFormat" style="white-space: pre-wrap">
        </span>
        ${designSpacing}<br>
        PROCEDURES LIST:<br>
        ${proceduresConfirmDisplay}
        <br>
        <span id="proceduresFormat" style="white-space: pre-wrap">
        </span>
        ${procedureSpacing}<br>
        AGREEMENT DETAILS:<br>
        Custom design with up to ${procedureNum}, ${providerNum}, and ${facilityNum}. 12-month agreement.
        <br><br>
        COMMUNICATION:<br>
        Name: ${document.querySelector('#commName').value}<br>
        ${commCellDisplay}<br>
        Email: ${document.querySelector('#commEmail').value}
        <br><br>
        CURRENT URL: ${uRLDisplay}
        <br><br>
        OTHER WEB VENDOR: ${otherWebDisplay}
        <br><br>
        ${billingDisplay}`;
        
        document.querySelector("#areasOfInterestFormat").innerText = document.querySelector("#areasOfInterest").value;
        document.querySelector("#designFormat").innerText = designValue;
        document.querySelector("#proceduresFormat").innerText = proceduresValue;
    
    }
    
    document.querySelector("#copyButton").style.display = "inline-block";

}

//Divider functionality
const divider = document.getElementById('divider');
const topHalf = document.querySelector('.topHalf');
const bottomHalf = document.querySelector('.bottomHalf');

let isDragging = false;
let startY;
let initialTopHeight;
let initialBottomHeight;

divider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    initialTopHeight = topHalf.offsetHeight;
    initialBottomHeight = bottomHalf.offsetHeight;

    document.body.style.cursor = 'row-resize';
    topHalf.style.overflow = 'hidden'; // Disable scrolling during drag
    document.body.style.userSelect = 'none'; // Disable text selection

    // Store the initial top position of the divider relative to the viewport
    divider.initialTop = divider.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaY = e.clientY - startY;
        const newTopHeight = initialTopHeight + deltaY;
        const newBottomHeight = initialBottomHeight - deltaY;

        if (newTopHeight > 50 && newBottomHeight > 50) {
            topHalf.style.height = `${newTopHeight}px`;
            bottomHalf.style.height = `${newBottomHeight}px`;

            // Update the top position of the FIXED divider
            divider.style.top = `${newTopHeight}px`;
        }
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        document.body.style.cursor = 'default';
        topHalf.style.overflow = 'auto'; // Re-enable scrolling after drag
        document.body.style.userSelect = 'auto'; // Re-enable text selection
    }
});

document.addEventListener('mouseleave', () => {
    if (isDragging) {
        isDragging = false;
        document.body.style.cursor = 'default';
        topHalf.style.overflow = 'auto'; // Re-enable scrolling after drag
        document.body.style.userSelect = 'auto'; // Re-enable text selection
    }
});

//Copy Functionality
document.getElementById('copyButton').addEventListener('click', async function() {
    let emailBody = document.getElementById('output');

    const blob = new Blob([emailBody.innerHTML], { type: 'text/html' });
    const data = [new ClipboardItem({ 'text/html': blob })];

    try {
        await navigator.clipboard.write(data);

        document.querySelector('#copyButton').innerText = "Copied!";
        
        setTimeout(() => {
            document.querySelector('#copyButton').innerText = "Copy Notes";
        }, 1300);
    } catch (err) {
        console.error("Failed to copy:", err);
    }
});