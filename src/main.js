"use strict";

require("../styles/modern-normalize.css");
require("../styles/style.css");
require("../styles/components/header.css");
require("../styles/components/hero.css");
require("../styles/components/about.css");
require("../styles/components/featured.css");
require("../styles/components/work.css");
require("../styles/components/contact.css");
require("../styles/components/footer.css");
require("../styles/components/mobile-nav.css");
require("../styles/utils.css");
var _mobileNav2 = _interopRequireDefault(require("./utils/mobile-nav"));
var _darkMode = _interopRequireDefault(require("./utils/dark-mode"));
var _lazyLoading = _interopRequireDefault(require("./utils/lazy-loading"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(0, _mobileNav2["default"])();
(0, _darkMode["default"])();
(0, _lazyLoading["default"])();
