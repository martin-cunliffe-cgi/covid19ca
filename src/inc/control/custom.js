(function  ($hw, $) {
	if (typeof $hw.url === 'undefined') $hw.url = {};
  
  $hw.url.getURL = function (docType, docHwid, sectHwid) {
        if (docHwid.toLowerCase() === 'search') {
            url = 'https://www.healthlinkbc.ca/health-topics/hwsxchk';
        } else if (docHwid.toLowerCase() === 'callnurse') {
            url = 'https://www.healthlinkbc.ca/nursing-services';
        } else if (docHwid.toLowerCase() === 'selfisolateathome') {
            url = 'https://www.canada.ca/en/public-health/services/publications/diseases-conditions/covid-19-how-to-isolate-at-home.html';
        } else if (docHwid.toLowerCase() === 'healthfeature') {
            url = 'https://www.healthlinkbc.ca/hlbc/files/documents/healthfeature/hf_040_coronavirus_covid-19.pdf';
        } else if (docHwid.toLowerCase() === 'selfhomepage') {
            url = 'https://www.healthlinkbc.ca/covid-check';
        } else if (docHwid.toLowerCase() === 'returntocanada') {
            url = 'https://www.canada.ca/en/public-health/services/publications/diseases-conditions/2019-novel-coronavirus-information-sheet.html';
        } 

      if (sectHwid != '')
          return url + '#' + sectHwid;
      else
          return url;
   };

} (org.healthwise, jQuery));