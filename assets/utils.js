var Browser = {
  isIE: function () {
      return /*@cc_on!@*/false || !!document.documentMode;
  },
  isFirefox: function () {
      return typeof InstallTrigger !== 'undefined';
  },
  isChrome: function () {
      return !!window.chrome && !!window.chrome.webstore;
  },
  isEdge: function () {
      return !isIE && !!window.StyleMedia;
  },
  isOpera: function () {
      return (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  },
  isiOS: function () {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  },
  isSafari: function () {
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  },
  isAndroid: function () {
      return navigator.userAgent.toLowerCase().indexOf("android") > -1;
  },
  isSafariWebRTC: function () {
      return navigator.mediaDevices && Browser.isSafari();
  }
};