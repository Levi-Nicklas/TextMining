

/* Modification to standard mapping-centers-desktop.js to point to modified moduleUI-telligent.js to alter form submit behavior.  Telligent
 * uses .NET webforms, so pages are wrapped with <form> elements.  No other <form> elements are permitted inside the page, as the browser
 * removes nested <form> elements.
 */
require(['newsletter/1/mapping-centers-desktop-telligent'], function(module){
  module.init({
    selector: "#newsletter-mapping-center",
    template: {
      successMsg: '<p class="success">You will receive your first newsletter with our next scheduled circulation!</p>',
      content: '' +
        '<div class="wrapper">\n' +
        '<div class="nls-header">{header}</div>\n' +
        '{preContent}' +
        '<div class="nls-content">\n' +
        '{preForm}' +
        '<div class="nls-form">\n' +
        '<div class="validationWrapper"><div class="checkbox-container clearfix"><fieldset><legend class="visually-hidden">Select your newsletters:</legend>{inputs}</fieldset></div></div>\n' +
        '<div class="input-container">\n' +
        '<div class="email-container validationWrapper">\n' +
        '<label for="nls-email" class="visually-hidden">Enter email address:</label><input id="nls-email" type="email" class="nls-email" name="email" autocapitalize="off" autocorrect="off" placeholder="Enter email address" /> ' +
        '<button name="nl-submit" formnovalidate class="off {submitClass}" type="submit">Subscribe</button>\n' +
        '<div class="clearfix"></div>' +
        '</div>\n' + // .email-container
        '</div>\n' + // .input-container
        '<div class="privacy-disclaimer">' +
        '<em>By clicking Submit, I agree to the WebMD <a href="http://www.webmd.com/about-webmd-policies/about-terms-and-conditions-of-use" target="_blank">Terms & Conditions</a> & <a href="http://www.webmd.com/about-webmd-policies/about-privacy-policy" target="_blank">Privacy Policy</a> and understand that I may opt out of WebMD subscriptions at any time.</em>' +
        '</div>' + // .privacy-disclaimer
        '</div>\n' +
        '{postForm}' +
        '</div>\n' + // .nls-content
        '{postContent}' +
        '</div>',
        header: '<header><h3>Subscribe to {title} Newsletter</h3></header>',
        headerMulti: '<header><h3>Subscribe to WebMD Newsletters</h3></header>',
        submitClass: 'webmd-btn webmd-btn-pr webmd-btn-s',
        successHeader: '<header><h3>Thank you for signing up</h3></header>',
        promo: '<div class="promo"><div class="promo-content clearfix"><img src="{image}" alt="WebMD App" /><div class="promo-description"><p>{text}</p><p class="promoLink"><a href="{url}" class="webmd-btn webmd-btn-pr webmd-btn-m" onclick="wmdPageLink(\'nlupgrd_sub\')">{button}</a></p><div class="clearfix"></div></div></div></div>'

    }
  });
});
