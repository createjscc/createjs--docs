YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "CSSPlugin",
        "Ease",
        "Event",
        "EventDispatcher",
        "MotionGuidePlugin",
        "SamplePlugin",
        "Ticker",
        "Timeline",
        "Tween",
        "TweenJS",
        "Utility Methods"
    ],
    "modules": [
        "CreateJS",
        "TweenJS"
    ],
    "allModules": [
        {
            "displayName": "CreateJS",
            "name": "CreateJS",
            "description": "A collection of Classes that are shared across all the CreateJS libraries.  The classes are included in the minified\nfiles of each library and are available on the createsjs namespace directly.\n\n<h4>Example</h4>\n\n     myObject.addEventListener(\"change\", createjs.proxy(myMethod, scope));"
        },
        {
            "displayName": "TweenJS",
            "name": "TweenJS",
            "description": "The TweenJS Javascript library provides a simple but powerful tweening interface. It supports tweening of both\nnumeric object properties & CSS style properties, and allows you to chain tweens and actions together to create\ncomplex sequences.\n\n<h4>Simple Tween</h4>\nThis tween will tween the target's alpha property from 0 to 1 for 1s then call the <code>handleComplete</code> function.\n\n\t    target.alpha = 0;\n\t    createjs.Tween.get(target).to({alpha:1}, 1000).call(handleComplete);\n\t    function handleComplete() {\n\t    \t//Tween complete\n\t    }\n\n<strong>Arguments and Scope</strong>\nTween also supports a `call()` with arguments and/or a scope. If no scope is passed, then the function is called\nanonymously (normal JavaScript behaviour). The scope is useful for maintaining scope when doing object-oriented\nstyle development.\n\n     createjs.Tween.get(target).to({alpha:0})\n         .call(handleComplete, [argument1, argument2], this);\n\n<h4>Chainable Tween</h4>\nThis tween will wait 0.5s, tween the target's alpha property to 0 over 1s, set it's visible to false, then call the\n<code>handleComplete</code> function.\n\n\t    target.alpha = 1;\n\t    createjs.Tween.get(target).wait(500).to({alpha:0, visible:false}, 1000).call(handleComplete);\n\t    function handleComplete() {\n\t    \t//Tween complete\n\t    }\n\n<h4>Browser Support</h4>\nTweenJS will work in modern browsers. To use TweenJS with IE8 and earlier, use an older version of PreloadJS\n(version 0.4.1 and earlier)."
        }
    ]
} };
});