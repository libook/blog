'use strict';

// Replace qrcode URLs to qrcode image data URLs.
Array
    .from(document.querySelectorAll('a.donate > span > img'))
    .forEach(async imgElement => {
        const url = imgElement.src;
        const dataUrl = await QRCode.toDataURL(url);
        imgElement.src = dataUrl;
    });
