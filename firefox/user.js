user_pref("general.warnOnAboutConfig", false);

/* 0101: disable "slow startup" options
 * warnings, disk history, welcomes, intros, EULA, default browser check ***/
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);
user_pref("browser.rights.3.shown", true);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", ""); // what's new page after updates
user_pref("browser.laterrun.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);

/*** 0200: GEOLOCATION ***/
user_pref("_user.js.parrot", "0200 syntax error: the parrot's definitely deceased!");
/* 0201: disable Location-Aware Browsing
 * [1] https://www.mozilla.org/firefox/geolocation/ ***/
user_pref("geo.enabled", false);
/* 0202: disable GeoIP-based search results
 * [NOTE] May not be hidden if Firefox has changed your settings due to your locale
 * [1] https://trac.torproject.org/projects/tor/ticket/16254
 * [2] https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_geolocation-for-default-search-engine ***/
user_pref("browser.search.countryCode", "US"); // (hidden pref)
user_pref("browser.search.region", "US"); // (hidden pref)
user_pref("browser.search.geoip.url", "");
/* 0205: set OS & APP locale (FF59+)
 * If set to empty, the OS locales are used. If not set at all, default locale is used ***/
user_pref("intl.locale.requested", "en-US"); // (hidden pref)
/* 0206: disable geographically specific results/search engines e.g. "browser.search.*.US"
 * i.e. ignore all of Mozilla's various search engines in multiple locales ***/
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
/* 0207: set language to match ***/
user_pref("intl.accept_languages", "en-US, en");
/* 0208: enforce US English locale regardless of the system locale
 * [1] https://bugzilla.mozilla.org/867501 ***/
user_pref("javascript.use_us_english_locale", true); // (hidden pref)
/* 0209: use APP locale over OS locale in regional preferences (FF56+)
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1379420,1364789 ***/
user_pref("intl.regional_prefs.use_os_locales", false);

/* 0306: disable extension metadata updating
 * sends daily pings to Mozilla about extensions and recent startups ***/
user_pref("extensions.getAddons.cache.enabled", false);
/* 0307: disable auto updating of personas (themes) ***/
user_pref("lightweightThemes.update.enabled", false);
/* 0308: disable search update
 * [SETTING-56+] Options>General>Firefox Update>Automatically update search engines
 * [SETTING-ESR] Options>Advanced>Update>Automatically update: Search Engines ***/
user_pref("browser.search.update", false);
/* 0309: disable sending Flash crash reports ***/
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
/* 0310: disable sending the URL of the website where a plugin crashed ***/
user_pref("dom.ipc.plugins.reportCrashURL", false);
/* 0320: disable about:addons' Get Add-ons panel (uses Google-Analytics) ***/
user_pref("extensions.getAddons.showPane", false); // hidden pref
user_pref("extensions.webservice.discoverURL", "");

/* 0330: disable telemetry
 * the pref (.unified) affects the behaviour of the pref (.enabled)
 * IF unified=false then .enabled controls the telemetry module
 * IF unified=true then .enabled ONLY controls whether to record extended data
 * so make sure to have both set as false
 * [NOTE] FF58+ `toolkit.telemetry.enabled` is now LOCKED to reflect prerelease
 * or release builds (true and false respectively), see [2]
 * [1] https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/internals/preferences.html
 * [2] https://medium.com/georg-fritzsche/data-preference-changes-in-firefox-58-2d5df9c428b5 ***/
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE] above FF58+
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // (FF55+)
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // (FF55+)
user_pref("toolkit.telemetry.updatePing.enabled", false); // (FF56+)
user_pref("toolkit.telemetry.bhrPing.enabled", false); // (FF57+) Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // (FF57+)
user_pref("toolkit.telemetry.hybridContent.enabled", false); // (FF59+)
/* 0333: disable health report ***/
user_pref("datareporting.healthreport.uploadEnabled", false);
/* 0334: disable new data submission, master kill switch (FF41+)
 * If disabled, no policy is shown or upload takes place, ever
 * [1] https://bugzilla.mozilla.org/1195552 ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
/* 0350: disable crash reports ***/
user_pref("breakpad.reportURL", "");
/* 0351: disable sending of crash reports (FF44+) ***/
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // (FF51+)
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false); // (FF51-57)
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // (FF58+)
/* 0360: disable new tab tile ads & preload & marketing junk ***/
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.directory.source", "data:text/plain,");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
/* 0370: disable "Snippets" (Mozilla content shown on about:home screen)
 * [1] https://wiki.mozilla.org/Firefox/Projects/Firefox_Start/Snippet_Service ***/
user_pref("browser.aboutHomeSnippets.updateUrl", "data:,");

/* 0501: disable experiments
 * [1] https://wiki.mozilla.org/Telemetry/Experiments ***/
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("experiments.activeExperiment", false);
/* 0502: disable Mozilla permission to silently opt you into tests ***/
user_pref("network.allow-experiments", false);
/* 0505: block URL used for system extension updates (FF44+)
 * [NOTE] You will not get any system extension updates except when you update Firefox ***/
   // user_pref("extensions.systemAddon.update.url", "");
/* 0506: disable PingCentre telemetry (used in several system extensions) (FF57+)
 * Currently blocked by 'datareporting.healthreport.uploadEnabled' (see 0333) ***/
user_pref("browser.ping-centre.telemetry", false);
/* 0510: disable Pocket (FF39+)
 * Pocket is a third party (now owned by Mozilla) "save for later" cloud service
 * [1] https://en.wikipedia.org/wiki/Pocket_(application)
 * [2] https://www.gnu.gl/blog/Posts/multiple-vulnerabilities-in-pocket/ ***/
user_pref("extensions.pocket.enabled", false);
/* 0512: disable Shield (FF53+)
 * Shield is an telemetry system (including Heartbeat) that can also push and test "recipes"
 * [1] https://wiki.mozilla.org/Firefox/Shield
 * [2] https://github.com/mozilla/normandy ***/
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("extensions.shield-recipe-client.api_url", "");
/* 0513: disable Follow On Search (FF53+)
 * Just DELETE the XPI file in your system extensions directory
 * [1] https://blog.mozilla.org/data/2017/06/05/measuring-search-in-firefox/ ***/
/* 0514: disable Activity Stream (FF54+)
 * Activity Stream replaces "New Tab" with one based on metadata and browsing behavior,
 * and includes telemetry as well as web content such as snippets and "spotlight"
 * [1] https://wiki.mozilla.org/Firefox/Activity_Stream
 * [2] https://www.ghacks.net/2016/02/15/firefox-mockups-show-activity-stream-new-tab-page-and-share-updates/ ***/
user_pref("browser.newtabpage.activity-stream.enabled", false);
user_pref("browser.library.activity-stream.enabled", false); // (FF57+)
/* 0515: disable Screenshots (FF55+)
 * [1] https://github.com/mozilla-services/screenshots
 * [2] https://www.ghacks.net/2017/05/28/firefox-screenshots-integrated-in-firefox-nightly/ ***/
   // user_pref("extensions.screenshots.disabled", true);
/* 0516: disable Onboarding (FF55+)
 * Onboarding is an interactive tour/setup for new installs/profiles and features. Every time
 * about:home or about:newtab is opened, the onboarding overlay is injected into that page
 * [NOTE] Onboarding uses Google Analytics [2], and leaks resource://URIs [3]
 * [1] https://wiki.mozilla.org/Firefox/Onboarding
 * [2] https://github.com/mozilla/onboard/commit/db4d6c8726c89a5d6a241c1b1065827b525c5baf
 * [3] https://bugzilla.mozilla.org/863246#c154 ***/
user_pref("browser.onboarding.enabled", false);

/* 0518: disable Web Compatibility Reporter (FF56+)
 * Web Compatibility Reporter adds a "Report Site Issue" button to send data to Mozilla ***/
user_pref("extensions.webcompat-reporter.enabled", false);

/*** 0600: BLOCK IMPLICIT OUTBOUND [not explicitly asked for - e.g. clicked on] ***/
user_pref("_user.js.parrot", "0600 syntax error: the parrot's no more!");
/* 0601: disable link prefetching
 * [1] https://developer.mozilla.org/docs/Web/HTTP/Link_prefetching_FAQ ***/
user_pref("network.prefetch-next", false);
/* 0602: disable DNS prefetching
 * [1] https://www.ghacks.net/2013/04/27/firefox-prefetching-what-you-need-to-know/
 * [2] https://developer.mozilla.org/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control ***/
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); // (hidden pref)
/* 0603a: disable Seer/Necko
 * [1] https://developer.mozilla.org/docs/Mozilla/Projects/Necko ***/
user_pref("network.predictor.enabled", false);
/* 0603b: disable more Necko/Captive Portal
 * [1] https://en.wikipedia.org/wiki/Captive_portal
 * [2] https://wiki.mozilla.org/Necko/CaptivePortal
 * [3] https://trac.torproject.org/projects/tor/ticket/21790 ***/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // (FF52+)
/* 0605: disable link-mouseover opening connection to linked server
 * [1] https://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests
 * [2] https://www.ghacks.net/2015/08/16/block-firefox-from-connecting-to-sites-when-you-hover-over-links/ ***/
user_pref("network.http.speculative-parallel-limit", 0);
/* 0606: disable pings (but enforce same host in case)
 * [1] http://kb.mozillazine.org/Browser.send_pings
 * [2] http://kb.mozillazine.org/Browser.send_pings.require_same_host ***/
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);
/* 0607: disable links launching Windows Store on Windows 8/8.1/10 [WINDOWS]
 * [1] https://www.ghacks.net/2016/03/25/block-firefox-chrome-windows-store/ ***/
user_pref("network.protocol-handler.external.ms-windows-store", false);
/* 0608: disable predictor / prefetching (FF48+) ***/
user_pref("network.predictor.enable-prefetch", false);

/*** 0700: HTTP* / TCP/IP / DNS / PROXY / SOCKS etc ***/
/* 0701: disable IPv6 (included for knowledge ONLY [WARNING] do not do this)
 * This is all about covert channels such as MAC addresses being included/abused in the
 * IPv6 protocol for tracking. If you want to mask your IP address, this is not the way
 * to do it. It's 2016, IPv6 is here. Here are some old links
 * 2010: https://christopher-parsons.com/ipv6-and-the-future-of-privacy/
 * 2011: https://iapp.org/news/a/2011-09-09-facing-the-privacy-implications-of-ipv6/
 * 2012: http://www.zdnet.com/article/security-versus-privacy-with-ipv6-deployment/
 * [NOTE] It is a myth that disabling IPv6 will speed up your internet connection
 * [1] https://www.howtogeek.com/195062/no-disabling-ipv6-probably-wont-speed-up-your-internet-connection/ ***/
   // user_pref("network.dns.disableIPv6", true);
   // user_pref("network.http.fast-fallback-to-IPv4", true); // default: true
/* 0702: disable HTTP2 (which was based on SPDY which is now deprecated)
 * HTTP2 raises concerns with "multiplexing" and "server push", does nothing to enhance
 * privacy, and in fact opens up a number of server-side fingerprinting opportunities
 * [1] https://http2.github.io/faq/
 * [2] https://blog.scottlogic.com/2014/11/07/http-2-a-quick-look.html
 * [3] https://queue.acm.org/detail.cfm?id=2716278
 * [4] https://github.com/ghacksuserjs/ghacks-user.js/issues/107 ***/
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.deps", false);
user_pref("network.http.spdy.enabled.http2", false);
/* 0703: disable HTTP Alternative Services (FF37+)
 * [1] https://www.ghacks.net/2015/08/18/a-comprehensive-list-of-firefox-privacy-and-security-settings/#comment-3970881
 * [2] https://www.mnot.net/blog/2016/03/09/alt-svc ***/
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);
/* 0704: enforce the proxy server to do any DNS lookups when using SOCKS
 * e.g. in TOR, this stops your local DNS server from knowing your Tor destination
 * as a remote Tor node will handle the DNS request
 * [1] http://kb.mozillazine.org/Network.proxy.socks_remote_dns
 * [2] https://trac.torproject.org/projects/tor/wiki/doc/TorifyHOWTO/WebBrowsers ***/
user_pref("network.proxy.socks_remote_dns", true);
/* 0705: disable DNS requests for hostnames with a .onion TLD (FF45+)
 * [1] https://bugzilla.mozilla.org/1228457 ***/
user_pref("network.dns.blockDotOnion", true);
/* 0706: remove paths when sending URLs to PAC scripts (FF51+)
 * CVE-2017-5384: Information disclosure via Proxy Auto-Config (PAC)
 * [1] https://bugzilla.mozilla.org/1255474 ***/
user_pref("network.proxy.autoconfig_url.include_path", false);

/*** 1600: HEADERS / REFERERS
     Only *cross domain* referers need controlling and XOriginPolicy (1603) is perfect for that. Thus we enforce
     the default values for 1601, 1602, 1605 and 1606 to minimize breakage, and only tweak 1603 and 1604.
     Our default settings provide the best balance between protection and amount of breakage.
     To harden it a bit more you can set XOriginPolicy (1603) to 2 (+ optionally 1604 to 1 or 2).
     To fix broken sites, temporarily set XOriginPolicy=0 and XOriginTrimmingPolicy=2 in about:config,
     use the site and then change the values back. If you visit those sites regularly, use an extension.
                    full URI: https://example.com:8888/foo/bar.html?id=1234
       scheme+host+path+port: https://example.com:8888/foo/bar.html
            scheme+host+port: https://example.com:8888
     #Required reading [#] https://feeding.cloud.geek.nz/posts/tweaking-referrer-for-privacy-in-firefox/
 ***/
user_pref("_user.js.parrot", "1600 syntax error: the parrot rests in peace!");
/* 1601: ALL: control when images/links send a referer
 * 0=never, 1=send only when links are clicked, 2=for links and images (default) ***/
user_pref("network.http.sendRefererHeader", 2);
/* 1602: ALL: control the amount of information to send
 * 0=send full URI (default), 1=scheme+host+path+port, 2=scheme+host+port ***/
user_pref("network.http.referer.trimmingPolicy", 0);
/* 1603: CROSS ORIGIN: control when to send a referer [SETUP]
 * 0=always (default), 1=only if base domains match, 2=only if hosts match ***/
user_pref("network.http.referer.XOriginPolicy", 1);
/* 1604: CROSS ORIGIN: control the amount of information to send (FF52+)
 * 0=send full URI (default), 1=scheme+host+path+port, 2=scheme+host+port ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 0);
/* 1605: ALL: disable spoofing a referer
 * [WARNING] Spoofing effectively disables the anti-CSRF (Cross-Site Request Forgery) protections that some sites may rely on ***/
user_pref("network.http.referer.spoofSource", false);
/* 1606: ALL: set the default Referrer Policy
 * 0=no-referer, 1=same-origin, 2=strict-origin-when-cross-origin, 3=no-referrer-when-downgrade
 * [NOTE] This is only a default, it can be overridden by a site-controlled Referrer Policy
 * [1] https://www.w3.org/TR/referrer-policy/
 * [2] https://developer.mozilla.org/docs/Web/HTTP/Headers/Referrer-Policy
 * [3] https://blog.mozilla.org/security/2018/01/31/preventing-data-leaks-by-stripping-path-information-in-http-referrers/ ***/
user_pref("network.http.referer.defaultPolicy", 3); // (FF59+) default: 3
user_pref("network.http.referer.defaultPolicy.pbmode", 2); // (FF59+) default: 2
/* 1607: TOR: hide (not spoof) referrer when leaving a .onion domain (FF54+)
 * [NOTE] Firefox cannot access .onion sites by default. We recommend you use
 * TBB (Tor Browser Bundle) which is specifically designed for the dark web
 * [1] https://bugzilla.mozilla.org/1305144 ***/
user_pref("network.http.referer.hideOnionSource", true);
/* 1610: ALL: disable the DNT HTTP header, which is essentially USELESS
 * It is voluntary and most ad networks do not honor it. DNT is *NOT* how you stop being data mined.
 * Don't encourage a setting that gives any legitimacy to 3rd parties being in control of your privacy.
 * Sending a DNT header *highly likely* raises entropy, especially in standard windows.
 * [SETTING-56+] Options>Privacy & Security>Tracking Protecting>Send websites a "Do Not Track"...
 * [SETTING-ESR] Options>Privacy>Use Tracking Protecting>manage your Do Not Track settings
 * [NOTE] DNT is enforced with TP (see 0420) regardless of this pref (e.g. in default PB Mode)
 * [NOTE] If you use NoScript MAKE SURE to set the pref noscript.doNotTrack.enabled to match ***/
user_pref("privacy.donottrackheader.enabled", false);


/*** 1800: PLUGINS ***/
user_pref("_user.js.parrot", "1800 syntax error: the parrot's pushing up daisies!");
/* 1801: set default plugin state (i.e. new plugins on discovery) to never activate
 * 0=disabled, 1=ask to activate, 2=active - you can override individual plugins ***/
user_pref("plugin.default.state", 0);
user_pref("plugin.defaultXpi.state", 0);
/* 1802: enable click to play and set to 0 minutes ***/
user_pref("plugins.click_to_play", true);
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);
/* 1803: set a plugin state: 0=deactivated 1=ask 2=enabled (Flash example)
 * you can set all these plugin.state's via Add-ons>Plugins or search for plugin.state in about:config
 * [NOTE] You can still over-ride individual sites e.g. youtube via site permissions
 * [1] https://www.ghacks.net/2013/07/09/how-to-make-sure-that-a-firefox-plugin-never-activates-again/ ***/
   // user_pref("plugin.state.flash", 0);
/* 1805: disable scanning for plugins [WINDOWS]
 * [1] http://kb.mozillazine.org/Plugin_scanning
 * plid.all = whether to scan the directories specified in the Windows registry for PLIDs.
 * Used to detect RealPlayer, Java, Antivirus etc, but since FF52 only covers Flash ***/
user_pref("plugin.scan.plid.all", false);
/* 1820: disable all GMP (Gecko Media Plugins) [SETUP]
 * [1] https://wiki.mozilla.org/GeckoMediaPlugins ***/
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp.trial-create.enabled", false);
user_pref("media.gmp-manager.url", "data:text/plain,");
user_pref("media.gmp-manager.url.override", "data:text/plain,"); // (hidden pref)
user_pref("media.gmp-manager.updateEnabled", false); // disable local fallback (hidden pref)
/* 1825: disable widevine CDM (Content Decryption Module) [SETUP] ***/

//user_pref("media.gmp-widevinecdm.visible", false);
//user_pref("media.gmp-widevinecdm.enabled", true);
//user_pref("media.gmp-widevinecdm.autoupdate", false);

/* 1830: disable all DRM content (EME: Encryption Media Extension) [SETUP]
 * [1] https://www.eff.org/deeplinks/2017/10/drms-dead-canary-how-we-just-lost-web-what-we-learned-it-and-what-we-need-do-next ***/
//user_pref("media.eme.enabled", false); // Options>Content>Play DRM Content
//user_pref("browser.eme.ui.enabled", false); // hides "Play DRM Content" checkbox [RESTART]
/* 1840: disable the OpenH264 Video Codec by Cisco to "Never Activate"
 * This is the bundled codec used for video chat in WebRTC ***/
//user_pref("media.gmp-gmpopenh264.enabled", false); // (hidden pref)
//user_pref("media.gmp-gmpopenh264.autoupdate", false);

/*** 2000: MEDIA / CAMERA / MIC ***/
user_pref("_user.js.parrot", "2000 syntax error: the parrot's snuffed it!");
/* 2001: disable WebRTC (Web Real-Time Communication)
 * [1] https://www.privacytools.io/#webrtc ***/
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.ice.tcp", false);
user_pref("media.navigator.video.enabled", false); // video capability for WebRTC
/* 2002: limit WebRTC IP leaks if using WebRTC
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1189041,1297416
 * [2] https://wiki.mozilla.org/Media/WebRTC/Privacy ***/
user_pref("media.peerconnection.ice.default_address_only", true); // (FF42-FF50)
user_pref("media.peerconnection.ice.no_host", true); // (FF51+)
/* 2010: disable WebGL (Web Graphics Library), force bare minimum feature set if used & disable WebGL extensions
 * [1] https://www.contextis.com/resources/blog/webgl-new-dimension-browser-exploitation/
 * [2] https://security.stackexchange.com/questions/13799/is-webgl-a-security-concern ***/
/*
user_pref("webgl.disabled", true);
user_pref("pdfjs.enableWebGL", false);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
*/
/* 2011: disable WebGL debug info being available to websites
 * [1] https://bugzilla.mozilla.org/1171228
 * [2] https://developer.mozilla.org/docs/Web/API/WEBGL_debug_renderer_info ***/
user_pref("webgl.enable-debug-renderer-info", false);
/* 2012: disable two more webgl preferences (FF51+) ***/
//user_pref("webgl.dxgl.enabled", false); // [WINDOWS]
//user_pref("webgl.enable-webgl2", false);
/* 2022: disable screensharing ***/
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
/* 2024: set a default permission for Camera/Microphone (FF58+)
 * 0=always ask (default), 1=allow, 2=block
 * [SETTING] to add site exceptions: Page Info>Permissions>Use the Camera/Microphone
 * [SETTING] to manage site exceptions: Options>Privacy>Permissions>Camera/Microphone>Settings ***/
   // user_pref("permissions.default.camera", 2);
   // user_pref("permissions.default.microphone", 2);
/* 2026: disable canvas capture stream
 * [1] https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/captureStream ***/
user_pref("canvas.capturestream.enabled", false);
/* 2027: disable camera image capture
 * [1] https://trac.torproject.org/projects/tor/ticket/16339 ***/
user_pref("dom.imagecapture.enabled", false);
/* 2028: disable offscreen canvas
 * [1] https://developer.mozilla.org/docs/Web/API/OffscreenCanvas ***/
user_pref("gfx.offscreencanvas.enabled", false);
/* 2030: disable auto-play of HTML5 media
 * [WARNING] This may break video playback on various sites ***/
//user_pref("media.autoplay.enabled", false);
/* 2031: disable audio auto-play in non-active tabs (FF51+)
 * [1] https://www.ghacks.net/2016/11/14/firefox-51-blocks-automatic-audio-playback-in-non-active-tabs/ ***/
//user_pref("media.block-autoplay-until-in-foreground", true);

user_pref("dom.vibrator.enabled", false);
/* 2415: set max popups from a single non-click event - default is 20! ***/
user_pref("dom.popup_maximum", 3);
/* 2415b: limit events that can cause a popup
 * default is "change click dblclick mouseup pointerup notificationclick reset submit touchend"
 * [1] http://kb.mozillazine.org/Dom.popup_allowed_events ***/
user_pref("dom.popup_allowed_events", "click dblclick");

/*** 2500: HARDWARE FINGERPRINTING ***/
/* 2504: disable virtual reality devices
 * [WARNING] [SETUP] Optional protection depending on your connected devices
 * [1] https://developer.mozilla.org/docs/Web/API/WebVR_API ***/
   // user_pref("dom.vr.enabled", false);
/* 2505: disable media device enumeration (FF29+)
 * [NOTE] media.peerconnection.enabled should also be set to false (see 2001)
 * [1] https://wiki.mozilla.org/Media/getUserMedia
 * [2] https://developer.mozilla.org/docs/Web/API/MediaDevices/enumerateDevices ***/
//user_pref("media.navigator.enabled", false);
/* 2510: disable Web Audio API (FF51+)
 * [1] https://bugzilla.mozilla.org/1288359 ***/
//user_pref("dom.webaudio.enabled", false);

/*** 2600: MISCELLANEOUS ***/
user_pref("_user.js.parrot", "2600 syntax error: the parrot's run down the curtain!");
/* 2601: disable sending additional analytics to web servers
 * [1] https://developer.mozilla.org/docs/Web/API/Navigator/sendBeacon ***/
user_pref("beacon.enabled", false);
/* 2602: discourage downloading to desktop (0=desktop 1=downloads 2=last used)
 * [NOTE] To set your default "downloads": Options>General>Downloads>Save files to ***/
//user_pref("browser.download.folderList", 2);
/* 2603: enforce user interaction for security by always asking the user where to download ***/
//user_pref("browser.download.useDownloadDir", false);
/* 2604: remove temp files opened with an external application
 * [1] https://bugzilla.mozilla.org/302433 ***/
user_pref("browser.helperApps.deleteTempFileOnExit", true);
/* 2605: disable adding downloads to the system's "recent documents" list ***/
//user_pref("browser.download.manager.addToRecentDocs", false);
/* 2606: disable hiding mime types (Options>Applications) not associated with a plugin ***/
user_pref("browser.download.hide_plugins_without_extensions", false);
/* 2607: disable page thumbnail collection
 * look in profile/thumbnails directory - you may want to clean that out ***/
//user_pref("browser.pagethumbnails.capturing_disabled", true); // (hidden pref)
/* 2608: disable JAR from opening Unsafe File Types ***/
user_pref("network.jar.open-unsafe-types", false);
/* 2609: disable exposure of system colors to CSS or canvas (FF44+)
 * [NOTE] see second listed bug: may cause black on black for elements with undefined colors
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=232227,1330876 ***/
user_pref("ui.use_standins_for_native_colors", true); // (hidden pref)
/* 2610: remove special permissions for certain mozilla domains (FF35+)
 * [1] resource://app/defaults/permissions ***/
user_pref("permissions.manager.defaultsUrl", "");
/* 2611: disable WebIDE to prevent remote debugging and extension downloads
 * [1] https://trac.torproject.org/projects/tor/ticket/16222 ***/
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.debugger.remote-enabled", false);
//user_pref("devtools.webide.enabled", false);
/* 2617: enable Firefox's built-in PDF reader [SETUP]
 * [SETTING-56+] Options>General>Applications>Portable Document Format (PDF)
 * [SETTING-ESR] Options>Applications>Portable Document Format (PDF)
 * This setting controls if the option "Display in Firefox" in the above setting is available
 * and by effect controls whether PDFs are handled in-browser or externally ("Ask" or "Open With")
 *   [WHY USE false=default=view PDFs in Firefox]
 * pdfjs is lightweight, open source and as secure as any pdf reader out there, certainly better and more
 * vetted than most. Exploits are rare (1 serious case in 3 years), treated seriously and patched quickly.
 * It doesn't break "state separation" of browser content (by not sharing with OS, independent apps). It
 * maintains disk avoidance and application data isolation. It's convenient. You can still save to disk.
 *   [WHY USE true=open with or save to disk]
 * If you think a particular external app is more secure...
 *   [NOTE]
 * See 2662, and JS can still force a pdf to open in-browser by bundling its own code (rare) ***/
user_pref("pdfjs.disabled", false);
/* 2619: limit HTTP redirects (this does not control redirects with HTML meta tags or JS)
 * [WARNING] A low setting of 5 or under will probably break some sites (e.g. gmail logins)
 * To control HTML Meta tag and JS redirects, use an extension. Default is 20 ***/
user_pref("network.http.redirection-limit", 10);
/* 2620: disable middle mouse click opening links from clipboard
 * [1] https://trac.torproject.org/projects/tor/ticket/10089
 * [2] http://kb.mozillazine.org/Middlemouse.contentLoadURL ***/
user_pref("middlemouse.contentLoadURL", false);
/* 2622: enforce a security delay when installing extensions (milliseconds)
 * default=1000, This also covers the delay in "Save" on downloading files.
 * [1] http://kb.mozillazine.org/Disable_extension_install_delay_-_Firefox
 * [2] https://www.squarefree.com/2004/07/01/race-conditions-in-security-dialogs/ ***/
user_pref("security.dialog_enable_delay", 700);
/* 2623: enable Strict File Origin Policy on local files
 * [1] http://kb.mozillazine.org/Security.fileuri.strict_origin_policy ***/
user_pref("security.fileuri.strict_origin_policy", true);
/* 2624: enable Subresource Integrity (SRI) (FF43+)
 * [1] https://developer.mozilla.org/docs/Web/Security/Subresource_Integrity
 * [2] https://wiki.mozilla.org/Security/Subresource_Integrity ***/
user_pref("security.sri.enable", true); // default: true
/* 2626: disable optional user agent token
 * [1] https://developer.mozilla.org/docs/Web/HTTP/Headers/User-Agent/Firefox ***/
user_pref("general.useragent.compatMode.firefox", false); // default: false
/* 2628: disable UITour backend so there is no chance that a remote page can use it ***/
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
/* 2629: disable remote JAR files being opened, regardless of content type (FF42+)
 * [1] https://bugzilla.mozilla.org/1173171
 * [2] https://www.fxsitecompat.com/en-CA/docs/2015/jar-protocol-support-has-been-disabled-by-default/ ***/
user_pref("network.jar.block-remote-files", true);
/* 2630: prevent accessibility services from accessing your browser [RESTART]
 * [SETTING] Options>Privacy & Security>Permissions>Prevent accessibility services from accessing your browser
 * [1] https://support.mozilla.org/kb/accessibility-services ***/
user_pref("accessibility.force_disabled", 1);
/* 2631: block web content in file processes (FF55+)
 * [WARNING] [SETUP] You may want to disable this for corporate or developer environments
 * [1] https://bugzilla.mozilla.org/1343184 ***/
user_pref("browser.tabs.remote.allowLinkedWebInFileUriProcess", false);
/* 2632: disable websites overriding Firefox's keyboard shortcuts (FF58+)
 * [SETTING] to add site exceptions: Page Info>Permissions>Override Keyboard Shortcuts
 * [NOTE] At the time of writing, causes issues with delete and backspace keys ***/
   // user_pref("permissions.default.shortcuts", 2); //  0 (default) or 1=allow, 2=block
/* 2662: disable "open with" in download dialog (FF50+)
 * This is very useful to enable when the browser is sandboxed (e.g. via AppArmor)
 * in such a way that it is forbidden to run external applications.
 * [SETUP] This may interfere with some users' workflow or methods
 * [1] https://bugzilla.mozilla.org/1281959 ***/
user_pref("browser.download.forbid_open_with", true);
/* 2663: disable MathML (Mathematical Markup Language) (FF51+)
 * [TEST] http://browserspy.dk/mathml.php
 * [1] https://bugzilla.mozilla.org/1173199 ***/
user_pref("mathml.disabled", true);
/* 2664: disable DeviceStorage API
 * [1] https://wiki.mozilla.org/WebAPI/DeviceStorageAPI ***/
user_pref("device.storage.enabled", false);
/* 2665: remove webchannel whitelist ***/
user_pref("webchannel.allowObject.urlWhitelist", "");
/* 2667: disable various developer tools in browser context
 * [SETTING] Devtools>Advanced Settings>Enable browser chrome and add-on debugging toolboxes
 * [1] https://github.com/pyllyukko/user.js/issues/179#issuecomment-246468676 ***/
user_pref("devtools.chrome.enabled", false);
/* 2668: lock down allowed extension directories
 * [WARNING] This will break extensions that do not use the default XPI directories
 * [1] https://mike.kaply.com/2012/02/21/understanding-add-on-scopes/
 * [1] archived: https://archive.is/DYjAM ***/
user_pref("extensions.enabledScopes", 1); // (hidden pref)
user_pref("extensions.autoDisableScopes", 15);
/* 2670: disable "image/" mime types bypassing CSP (FF51+)
 * [1] https://bugzilla.mozilla.org/1288361 ***/
user_pref("security.block_script_with_wrong_mime", true);
/* 2671: disable in-content SVG (Scalable Vector Graphics) (FF53+)
 * [WARNING] SVG is fairly common (~15% of the top 10K sites), so will cause some breakage
 * including youtube player controls. Best left for "hardened" or specific profiles.
 * [1] https://bugzilla.mozilla.org/1216893 ***/
   // user_pref("svg.disabled", true);
/* 2672: enforce Punycode for Internationalized Domain Names to eliminate possible spoofing security risk
 * Firefox has *some* protections to mitigate the risk, but it is better to be safe
 * than sorry. The downside: it will also display legitimate IDN's punycoded, which
 * might be undesirable for users from countries with non-latin alphabets
 * [TEST] https://www.xn--80ak6aa92e.com/ (www.apple.com)
 * [1] http://kb.mozillazine.org/Network.IDN_show_punycode
 * [2] https://wiki.mozilla.org/IDN_Display_Algorithm
 * [3] https://en.wikipedia.org/wiki/IDN_homograph_attack
 * [4] CVE-2017-5383: https://www.mozilla.org/security/advisories/mfsa2017-02/
 * [5] https://www.xudongz.com/blog/2017/idn-phishing/ ***/
user_pref("network.IDN_show_punycode", true);
/* 2673: enable CSP (Content Security Policy)
 * [1] https://developer.mozilla.org/docs/Web/HTTP/CSP ***/
user_pref("security.csp.enable", true); // default: true
/* 2674: enable CSP 1.1 experimental hash-source directive (FF29+)
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=855326,883975 ***/
user_pref("security.csp.experimentalEnabled", true);
/* 2675: block top level window data: URIs (FF56+)
 * [1] https://bugzilla.mozilla.org/1331351
 * [2] https://www.wordfence.com/blog/2017/01/gmail-phishing-data-uri/
 * [3] https://www.fxsitecompat.com/en-CA/docs/2017/data-url-navigations-on-top-level-window-will-be-blocked/ ***/
user_pref("security.data_uri.block_toplevel_data_uri_navigations", true);

/* 0515: disable Screenshots (FF55+)
 * [1] https://github.com/mozilla-services/screenshots
 * [2] https://www.ghacks.net/2017/05/28/firefox-screenshots-integrated-in-firefox-nightly/ ***/
user_pref("extensions.screenshots.disabled", true);