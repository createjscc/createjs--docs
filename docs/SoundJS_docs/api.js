YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "AbstractPlugin",
        "AbstractSoundInstance",
        "AudioSprite",
        "CordovaAudioLoader",
        "CordovaAudioPlugin",
        "CordovaAudioSoundInstance",
        "ErrorEvent",
        "Event",
        "EventDispatcher",
        "FlashAudioLoader",
        "FlashAudioPlugin",
        "FlashAudioSoundInstance",
        "HTMLAudioPlugin",
        "HTMLAudioSoundInstance",
        "HTMLAudioTagPool",
        "PlayPropsConfig",
        "Sound",
        "SoundJS",
        "Utility Methods",
        "WebAudioLoader",
        "WebAudioPlugin",
        "WebAudioSoundInstance"
    ],
    "modules": [
        "CreateJS",
        "SoundJS"
    ],
    "allModules": [
        {
            "displayName": "CreateJS",
            "name": "CreateJS",
            "description": "A collection of Classes that are shared across all the CreateJS libraries.  The classes are included in the minified\nfiles of each library and are available on the createsjs namespace directly.\n\n<h4>Example</h4>\n\n     myObject.addEventListener(\"change\", createjs.proxy(myMethod, scope));"
        },
        {
            "displayName": "SoundJS",
            "name": "SoundJS",
            "description": "The SoundJS library manages the playback of audio on the web. It works via plugins which abstract the actual audio\nimplementation, so playback is possible on any platform without specific knowledge of what mechanisms are necessary\nto play sounds.\n\nTo use SoundJS, use the public API on the {{#crossLink \"Sound\"}}{{/crossLink}} class. This API is for:\n<ul>\n     <li>Installing audio playback Plugins</li>\n     <li>Registering (and preloading) sounds</li>\n     <li>Creating and playing sounds</li>\n     <li>Master volume, mute, and stop controls for all sounds at once</li>\n</ul>\n\n<b>Controlling Sounds</b><br />\nPlaying sounds creates {{#crossLink \"AbstractSoundInstance\"}}{{/crossLink}} instances, which can be controlled\nindividually.\n<ul>\n     <li>Pause, resume, seek, and stop sounds</li>\n     <li>Control a sound's volume, mute, and pan</li>\n     <li>Listen for events on sound instances to get notified when they finish, loop, or fail</li>\n</ul>\n\n<h4>Example</h4>\n\n     createjs.Sound.alternateExtensions = [\"mp3\"];\n     createjs.Sound.on(\"fileload\", this.loadHandler, this);\n     createjs.Sound.registerSound(\"path/to/mySound.ogg\", \"sound\");\n     function loadHandler(event) {\n         // This is fired for each sound that is registered.\n         var instance = createjs.Sound.play(\"sound\");  // play using id.  Could also use full sourcepath or event.src.\n         instance.on(\"complete\", this.handleComplete, this);\n         instance.volume = 0.5;\n     }\n\n<h4>Browser Support</h4>\nAudio will work in browsers which support Web Audio (<a href=\"http://caniuse.com/audio-api\" target=\"_blank\">http://caniuse.com/audio-api</a>)\nor HTMLAudioElement (<a href=\"http://caniuse.com/audio\" target=\"_blank\">http://caniuse.com/audio</a>).\nA Flash fallback can be used for any browser that supports the Flash player, and the Cordova plugin can be used in\nany webview that supports <a href=\"http://plugins.cordova.io/#/package/org.apache.cordova.media\" target=\"_blank\">Cordova.Media</a>.\nIE8 and earlier are not supported, even with the Flash fallback. To support earlier browsers, you can use an older\nversion of SoundJS (version 0.5.2 and earlier)."
        }
    ]
} };
});