;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconfonticonfonticonfont20" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M522.686526 729.393043c82.582264 0 149.812053-67.229789 149.812053-149.812053 0-82.582264-67.229789-149.812053-149.812053-149.812053-82.582264 0-149.812053 67.229789-149.812053 149.812053C372.874473 662.163253 440.104263 729.393043 522.686526 729.393043L522.686526 729.393043zM522.686526 464.286918c63.517099 0 115.294072 51.776972 115.294072 115.294072 0 63.517099-51.776972 115.294072-115.294072 115.294072-63.517099 0-115.294072-51.776972-115.294072-115.294072C407.392455 516.06389 459.169427 464.286918 522.686526 464.286918L522.686526 464.286918zM522.686526 464.286918"  ></path>' +
    '' +
    '<path d="M795.820088 312.969721l-92.014503 0c-4.314748-21.072024-27.192945-112.484468-102.7512-112.484468L444.318667 200.485252c-75.457913 0-98.436453 91.412445-102.7512 112.484468l-92.014503 0c-47.161195 0-85.49221 38.331014-85.49221 85.49221l0 361.435375c0 47.161195 38.331014 85.49221 85.49221 85.49221l546.267124 0c47.161195 0 85.592553-38.331014 85.592553-85.49221L881.412641 398.562273C881.312298 351.300735 842.981284 312.969721 795.820088 312.969721L795.820088 312.969721zM198.578736 398.562273c0-28.096031 22.878197-51.074571 51.074571-51.074571l96.32925 0c14.549731 0 26.791573-10.536012 28.999118-24.985399 0.100343-0.903087 14.449388-87.499069 69.437335-87.499069L601.054385 235.003234c54.686918 0 69.236649 86.696325 69.437335 87.499069 2.207545 14.449388 14.349045 24.885056 28.999118 24.885056l96.32925 0c28.196374 0 51.074571 22.878197 51.074571 51.074571l0 361.435375c0 28.196374-22.878197 50.974228-51.074571 50.974228L249.552964 810.871534c-28.196374 0-51.074571-22.878197-51.074571-50.974228L198.578736 398.562273 198.578736 398.562273zM198.578736 398.562273"  ></path>' +
    '' +
    '<path d="M738.022538 420.437041l40.137188 0c9.532582 0 17.258991-7.726409 17.258991-17.258991 0-9.532582-7.726409-17.258991-17.258991-17.258991l-40.137188 0c-9.532582 0-17.258991 7.726409-17.258991 17.258991C720.86389 412.710632 728.590299 420.437041 738.022538 420.437041L738.022538 420.437041zM738.022538 420.437041"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)