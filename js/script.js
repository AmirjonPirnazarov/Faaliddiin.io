function downloadVCard() {
    var vCardData = 'BEGIN:VCARD\nVERSION:3.0\nFN:Amir Pirnazarov\nTEL:+992 92 009 09 09\nEMAIL:pimazarova98@gmail.com\nEND:VCARD';
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/vcard;charset=utf-8,' + encodeURI(vCardData);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'AmirPirnazarov.vcf';
    hiddenElement.click();
}
