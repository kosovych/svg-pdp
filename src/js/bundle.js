!function o(a,l,s){function c(t,e){if(!l[t]){if(!a[t]){var i="function"==typeof require&&require;if(!e&&i)return i(t,!0);if(u)return u(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var n=l[t]={exports:{}};a[t][0].call(n.exports,function(e){return c(a[t][1][e]||e)},n,n.exports,o,a,l,s)}return l[t].exports}for(var u="function"==typeof require&&require,e=0;e<s.length;e++)c(s[e]);return c}({1:[function(e,t,i){void 0!==t&&t.exports&&(t.exports={core:{meta:{path:"components/prism-core.js",option:"mandatory"},core:"Core"},themes:{meta:{path:"themes/{id}.css",link:"index.html?theme={id}",exclusive:!0},prism:{title:"Default",option:"default"},"prism-dark":"Dark","prism-funky":"Funky","prism-okaidia":{title:"Okaidia",owner:"ocodia"},"prism-twilight":{title:"Twilight",owner:"remybach"},"prism-coy":{title:"Coy",owner:"tshedor"},"prism-solarizedlight":{title:"Solarized Light",owner:"hectormatos2011 "},"prism-tomorrow":{title:"Tomorrow Night",owner:"Rosey"}},languages:{meta:{path:"components/prism-{id}",noCSS:!0,examplesPath:"examples/prism-{id}",addCheckAll:!0},markup:{title:"Markup",alias:["html","xml","svg","mathml"],aliasTitles:{html:"HTML",xml:"XML",svg:"SVG",mathml:"MathML"},option:"default"},css:{title:"CSS",option:"default",modify:"markup"},clike:{title:"C-like",option:"default",overrideExampleHeader:!0},javascript:{title:"JavaScript",require:"clike",modify:"markup",alias:"js",option:"default"},abap:{title:"ABAP",owner:"dellagustin"},abnf:{title:"Augmented Backus–Naur form",owner:"RunDevelopment"},actionscript:{title:"ActionScript",require:"javascript",modify:"markup",owner:"Golmote"},ada:{title:"Ada",owner:"Lucretia"},antlr4:{title:"ANTLR4",alias:"g4",owner:"RunDevelopment"},apacheconf:{title:"Apache Configuration",owner:"GuiTeK"},apl:{title:"APL",owner:"ngn"},applescript:{title:"AppleScript",owner:"Golmote"},aql:{title:"AQL",owner:"RunDevelopment"},arduino:{title:"Arduino",require:"cpp",owner:"eisbehr-"},arff:{title:"ARFF",owner:"Golmote"},asciidoc:{alias:"adoc",title:"AsciiDoc",owner:"Golmote"},asm6502:{title:"6502 Assembly",owner:"kzurawel"},aspnet:{title:"ASP.NET (C#)",require:["markup","csharp"],owner:"nauzilus"},autohotkey:{title:"AutoHotkey",owner:"aviaryan"},autoit:{title:"AutoIt",owner:"Golmote"},bash:{title:"Bash",alias:"shell",aliasTitles:{shell:"Shell"},owner:"zeitgeist87"},basic:{title:"BASIC",owner:"Golmote"},batch:{title:"Batch",owner:"Golmote"},bbcode:{title:"BBcode",owner:"RunDevelopment"},bison:{title:"Bison",require:"c",owner:"Golmote"},bnf:{title:"Backus–Naur form",alias:"rbnf",aliasTitles:{rbnf:"Routing Backus–Naur form"},owner:"RunDevelopment"},brainfuck:{title:"Brainfuck",owner:"Golmote"},brightscript:{title:"BrightScript",owner:"RunDevelopment"},bro:{title:"Bro",owner:"wayward710"},c:{title:"C",require:"clike",owner:"zeitgeist87"},csharp:{title:"C#",require:"clike",alias:["cs","dotnet"],owner:"mvalipour"},cpp:{title:"C++",require:"c",owner:"zeitgeist87"},cil:{title:"CIL",owner:"sbrl"},coffeescript:{title:"CoffeeScript",require:"javascript",alias:"coffee",owner:"R-osey"},cmake:{title:"CMake",owner:"mjrogozinski"},clojure:{title:"Clojure",owner:"troglotit"},crystal:{title:"Crystal",require:"ruby",owner:"MakeNowJust"},csp:{title:"Content-Security-Policy",owner:"ScottHelme"},"css-extras":{title:"CSS Extras",require:"css",modify:"css",owner:"milesj"},d:{title:"D",require:"clike",owner:"Golmote"},dart:{title:"Dart",require:"clike",owner:"Golmote"},diff:{title:"Diff",owner:"uranusjr"},django:{title:"Django/Jinja2",require:"markup-templating",alias:"jinja2",owner:"romanvm"},"dns-zone-file":{title:"DNS zone file",owner:"RunDevelopment",alias:"dns-zone"},docker:{title:"Docker",alias:"dockerfile",owner:"JustinBeckwith"},ebnf:{title:"Extended Backus–Naur form",owner:"RunDevelopment"},eiffel:{title:"Eiffel",owner:"Conaclos"},ejs:{title:"EJS",require:["javascript","markup-templating"],owner:"RunDevelopment"},elixir:{title:"Elixir",owner:"Golmote"},elm:{title:"Elm",owner:"zwilias"},etlua:{title:"Embedded Lua templating",require:["lua","markup-templating"],owner:"RunDevelopment"},erb:{title:"ERB",require:["ruby","markup-templating"],owner:"Golmote"},erlang:{title:"Erlang",owner:"Golmote"},fsharp:{title:"F#",require:"clike",owner:"simonreynolds7"},"firestore-security-rules":{title:"Firestore security rules",require:"clike",owner:"RunDevelopment"},flow:{title:"Flow",require:"javascript",owner:"Golmote"},fortran:{title:"Fortran",owner:"Golmote"},ftl:{title:"FreeMarker Template Language",require:"markup-templating",owner:"RunDevelopment"},gcode:{title:"G-code",owner:"RunDevelopment"},gdscript:{title:"GDScript",owner:"RunDevelopment"},gedcom:{title:"GEDCOM",owner:"Golmote"},gherkin:{title:"Gherkin",owner:"hason"},git:{title:"Git",owner:"lgiraudel"},glsl:{title:"GLSL",require:"clike",owner:"Golmote"},gml:{title:"GameMaker Language",alias:"gamemakerlanguage",require:"clike",owner:"LiarOnce"},go:{title:"Go",require:"clike",owner:"arnehormann"},graphql:{title:"GraphQL",owner:"Golmote"},groovy:{title:"Groovy",require:"clike",owner:"robfletcher"},haml:{title:"Haml",require:"ruby",optional:["css","css-extras","coffeescript","erb","javascript","less","markdown","ruby","scss","textile"],owner:"Golmote"},handlebars:{title:"Handlebars",require:"markup-templating",owner:"Golmote"},haskell:{title:"Haskell",alias:"hs",owner:"bholst"},haxe:{title:"Haxe",require:"clike",owner:"Golmote"},hcl:{title:"HCL",owner:"outsideris"},http:{title:"HTTP",optional:["css","javascript","json","markup"],owner:"danielgtaylor"},hpkp:{title:"HTTP Public-Key-Pins",owner:"ScottHelme"},hsts:{title:"HTTP Strict-Transport-Security",owner:"ScottHelme"},ichigojam:{title:"IchigoJam",owner:"BlueCocoa"},icon:{title:"Icon",owner:"Golmote"},inform7:{title:"Inform 7",owner:"Golmote"},ini:{title:"Ini",owner:"aviaryan"},io:{title:"Io",owner:"AlesTsurko"},j:{title:"J",owner:"Golmote"},java:{title:"Java",require:"clike",owner:"sherblot"},javadoc:{title:"JavaDoc",require:["markup","java","javadoclike"],modify:["java"],optional:["scala"],owner:"RunDevelopment"},javadoclike:{title:"JavaDoc-like",modify:["java","javascript","php"],owner:"RunDevelopment"},javastacktrace:{title:"Java stack trace",owner:"RunDevelopment"},jolie:{title:"Jolie",require:"clike",owner:"thesave"},jq:{title:"JQ",owner:"RunDevelopment"},jsdoc:{title:"JSDoc",require:["javascript","javadoclike"],modify:"javascript",optional:["actionscript","coffeescript"],owner:"RunDevelopment"},"js-extras":{title:"JS Extras",require:"javascript",modify:"javascript",optional:["actionscript","coffeescript","flow","n4js","typescript"],owner:"RunDevelopment"},"js-templates":{title:"JS Templates",require:"javascript",modify:"javascript",optional:["css","css-extras","graphql","markdown","markup"],owner:"RunDevelopment"},json:{title:"JSON",owner:"CupOfTea696"},jsonp:{title:"JSONP",require:"json",owner:"RunDevelopment"},json5:{title:"JSON5",require:"json",owner:"RunDevelopment"},julia:{title:"Julia",owner:"cdagnino"},keyman:{title:"Keyman",owner:"mcdurdin"},kotlin:{title:"Kotlin",require:"clike",owner:"Golmote"},latex:{title:"LaTeX",alias:["tex","context"],aliasTitles:{tex:"TeX",context:"ConTeXt"},owner:"japborst"},less:{title:"Less",require:"css",optional:"css-extras",owner:"Golmote"},lilypond:{title:"LilyPond",require:"scheme",alias:"ly",owner:"RunDevelopment"},liquid:{title:"Liquid",owner:"cinhtau"},lisp:{title:"Lisp",alias:["emacs","elisp","emacs-lisp"],owner:"JuanCaicedo"},livescript:{title:"LiveScript",owner:"Golmote"},lolcode:{title:"LOLCODE",owner:"Golmote"},lua:{title:"Lua",owner:"Golmote"},makefile:{title:"Makefile",owner:"Golmote"},markdown:{title:"Markdown",require:"markup",alias:"md",owner:"Golmote"},"markup-templating":{title:"Markup templating",require:"markup",owner:"Golmote"},matlab:{title:"MATLAB",owner:"Golmote"},mel:{title:"MEL",owner:"Golmote"},mizar:{title:"Mizar",owner:"Golmote"},monkey:{title:"Monkey",owner:"Golmote"},moonscript:{title:"MoonScript",alias:"moon",owner:"RunDevelopment"},n1ql:{title:"N1QL",owner:"TMWilds"},n4js:{title:"N4JS",require:"javascript",optional:["jsdoc"],alias:"n4jsd",owner:"bsmith-n4"},"nand2tetris-hdl":{title:"Nand To Tetris HDL",owner:"stephanmax"},nasm:{title:"NASM",owner:"rbmj"},nginx:{title:"nginx",owner:"westonganger",require:"clike"},nim:{title:"Nim",owner:"Golmote"},nix:{title:"Nix",owner:"Golmote"},nsis:{title:"NSIS",owner:"idleberg"},objectivec:{title:"Objective-C",require:"c",owner:"uranusjr"},ocaml:{title:"OCaml",owner:"Golmote"},opencl:{title:"OpenCL",require:"cpp",modify:["c","cpp"],overrideExampleHeader:!0,owner:"Milania1"},oz:{title:"Oz",owner:"Golmote"},parigp:{title:"PARI/GP",owner:"Golmote"},parser:{title:"Parser",require:"markup",owner:"Golmote"},pascal:{title:"Pascal",alias:"objectpascal",aliasTitles:{objectpascal:"Object Pascal"},owner:"Golmote"},pascaligo:{title:"Pascaligo",owner:"DefinitelyNotAGoat"},pcaxis:{title:"PC-Axis",alias:"px",owner:"RunDevelopment"},perl:{title:"Perl",owner:"Golmote"},php:{title:"PHP",require:["clike","markup-templating"],owner:"milesj"},phpdoc:{title:"PHPDoc",require:["php","javadoclike"],modify:"php",owner:"RunDevelopment"},"php-extras":{title:"PHP Extras",require:"php",modify:"php",owner:"milesj"},plsql:{title:"PL/SQL",require:"sql",owner:"Golmote"},powershell:{title:"PowerShell",owner:"nauzilus"},processing:{title:"Processing",require:"clike",owner:"Golmote"},prolog:{title:"Prolog",owner:"Golmote"},properties:{title:".properties",owner:"Golmote"},protobuf:{title:"Protocol Buffers",require:"clike",owner:"just-boris"},pug:{title:"Pug",require:["markup","javascript"],optional:["coffeescript","ejs","handlebars","less","livescript","markdown","scss","stylus","twig"],owner:"Golmote"},puppet:{title:"Puppet",owner:"Golmote"},pure:{title:"Pure",optional:["c","cpp","fortran"],owner:"Golmote"},python:{title:"Python",alias:"py",owner:"multipetros"},q:{title:"Q (kdb+ database)",owner:"Golmote"},qore:{title:"Qore",require:"clike",owner:"temnroegg"},r:{title:"R",owner:"Golmote"},jsx:{title:"React JSX",require:["markup","javascript"],optional:["jsdoc","js-extras","js-templates"],owner:"vkbansal"},tsx:{title:"React TSX",require:["jsx","typescript"]},renpy:{title:"Ren'py",owner:"HyuchiaDiego"},reason:{title:"Reason",require:"clike",owner:"Golmote"},regex:{title:"Regex",modify:["actionscript","coffeescript","flow","javascript","typescript","vala"],owner:"RunDevelopment"},rest:{title:"reST (reStructuredText)",owner:"Golmote"},rip:{title:"Rip",owner:"ravinggenius"},roboconf:{title:"Roboconf",owner:"Golmote"},robotframework:{title:"Robot Framework",alias:"robot",owner:"RunDevelopment"},ruby:{title:"Ruby",require:"clike",alias:"rb",owner:"samflores"},rust:{title:"Rust",owner:"Golmote"},sas:{title:"SAS",peerDependencies:["groovy","lua","sql"],owner:"Golmote"},sass:{title:"Sass (Sass)",require:"css",owner:"Golmote"},scss:{title:"Sass (Scss)",require:"css",optional:"css-extras",owner:"MoOx"},scala:{title:"Scala",require:"java",owner:"jozic"},scheme:{title:"Scheme",owner:"bacchus123"},"shell-session":{title:"Shell session",require:"bash",owner:"RunDevelopment"},smalltalk:{title:"Smalltalk",owner:"Golmote"},smarty:{title:"Smarty",require:"markup-templating",owner:"Golmote"},solidity:{title:"Solidity (Ethereum)",require:"clike",owner:"glachaud"},soy:{title:"Soy (Closure Template)",require:"markup-templating",owner:"Golmote"},sparql:{title:"SPARQL",require:"turtle",owner:"Triply-Dev",alias:"rq"},"splunk-spl":{title:"Splunk SPL",owner:"RunDevelopment"},sqf:{title:"SQF: Status Quo Function (Arma 3)",require:"clike",owner:"RunDevelopment"},sql:{title:"SQL",owner:"multipetros"},stylus:{title:"Stylus",owner:"vkbansal"},swift:{title:"Swift",require:"clike",owner:"chrischares"},tap:{title:"TAP",owner:"isaacs",require:"yaml"},tcl:{title:"Tcl",owner:"PeterChaplin"},textile:{title:"Textile",require:"markup",optional:"css",owner:"Golmote"},toml:{title:"TOML",owner:"RunDevelopment"},tt2:{title:"Template Toolkit 2",require:["clike","markup-templating"],owner:"gflohr"},turtle:{title:"Turtle",alias:["trig"],aliasTitles:{trig:"TriG"},owner:"jakubklimek"},twig:{title:"Twig",require:"markup",owner:"brandonkelly"},typescript:{title:"TypeScript",require:"javascript",optional:"js-templates",alias:"ts",owner:"vkbansal"},"t4-cs":{title:"T4 Text Templates (C#)",require:["t4-templating","csharp"],alias:"t4",owner:"RunDevelopment"},"t4-vb":{title:"T4 Text Templates (VB)",require:["t4-templating","visual-basic"],owner:"RunDevelopment"},"t4-templating":{title:"T4 templating",owner:"RunDevelopment"},vala:{title:"Vala",require:"clike",owner:"TemplarVolk"},vbnet:{title:"VB.Net",require:"basic",owner:"Bigsby"},velocity:{title:"Velocity",require:"markup",owner:"Golmote"},verilog:{title:"Verilog",owner:"a-rey"},vhdl:{title:"VHDL",owner:"a-rey"},vim:{title:"vim",owner:"westonganger"},"visual-basic":{title:"Visual Basic",alias:"vb",owner:"Golmote"},wasm:{title:"WebAssembly",owner:"Golmote"},wiki:{title:"Wiki markup",require:"markup",owner:"Golmote"},xeora:{title:"Xeora",require:"markup",alias:"xeoracube",aliasTitles:{xeoracube:"XeoraCube"},owner:"freakmaxi"},xojo:{title:"Xojo (REALbasic)",owner:"Golmote"},xquery:{title:"XQuery",require:"markup",owner:"Golmote"},yaml:{title:"YAML",alias:"yml",owner:"hason"},zig:{title:"Zig",owner:"RunDevelopment"}},plugins:{meta:{path:"plugins/{id}/prism-{id}",link:"plugins/{id}/"},"line-highlight":{title:"Line Highlight",description:"Highlights specific lines and/or line ranges."},"line-numbers":{title:"Line Numbers",description:"Line number at the beginning of code lines.",owner:"kuba-kubula"},"show-invisibles":{title:"Show Invisibles",description:"Show hidden characters such as tabs and line breaks.",optional:["autolinker","data-uri-highlight"]},autolinker:{title:"Autolinker",description:"Converts URLs and emails in code to clickable links. Parses Markdown links in comments."},wpd:{title:"WebPlatform Docs",description:'Makes tokens link to <a href="https://webplatform.github.io/docs/">WebPlatform.org documentation</a>. The links open in a new tab.'},"custom-class":{title:"Custom Class",description:"This plugin allows you to prefix Prism's default classes (<code>.comment</code> can become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code>). You can even add new classes.",owner:"dvkndn",noCSS:!0},"file-highlight":{title:"File Highlight",description:"Fetch external files and highlight them with Prism. Used on the Prism website itself.",noCSS:!0},"show-language":{title:"Show Language",description:"Display the highlighted language in code blocks (inline code does not show the label).",owner:"nauzilus",noCSS:!0,require:"toolbar"},"jsonp-highlight":{title:"JSONP Highlight",description:"Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).",noCSS:!0,owner:"nauzilus"},"highlight-keywords":{title:"Highlight Keywords",description:"Adds special CSS classes for each keyword matched in the code. For example, the keyword <code>if</code> will have the class <code>keyword-if</code> as well. You can have fine grained control over the appearance of each keyword by providing your own CSS rules.",owner:"vkbansal",noCSS:!0},"remove-initial-line-feed":{title:"Remove initial line feed",description:"Removes the initial line feed in code blocks.",owner:"Golmote",noCSS:!0},"inline-color":{title:"Inline color",description:"Adds a small inline preview for colors in style sheets.",require:"css-extras",owner:"RunDevelopment"},previewers:{title:"Previewers",description:"Previewers for angles, colors, gradients, easing and time.",require:"css-extras",owner:"Golmote"},autoloader:{title:"Autoloader",description:"Automatically loads the needed languages to highlight the code blocks.",owner:"Golmote",noCSS:!0},"keep-markup":{title:"Keep Markup",description:"Prevents custom markup from being dropped out during highlighting.",owner:"Golmote",optional:"normalize-whitespace",noCSS:!0},"command-line":{title:"Command Line",description:"Display a command line with a prompt and, optionally, the output/response from the commands.",owner:"chriswells0"},"unescaped-markup":{title:"Unescaped Markup",description:"Write markup without having to escape anything."},"normalize-whitespace":{title:"Normalize Whitespace",description:"Supports multiple operations to normalize whitespace in code blocks.",owner:"zeitgeist87",optional:"unescaped-markup",noCSS:!0},"data-uri-highlight":{title:"Data-URI Highlight",description:"Highlights data-URI contents.",owner:"Golmote",noCSS:!0},toolbar:{title:"Toolbar",description:"Attach a toolbar for plugins to easily register buttons on the top of a code block.",owner:"mAAdhaTTah"},"copy-to-clipboard":{title:"Copy to Clipboard Button",description:"Add a button that copies the code block to the clipboard when clicked.",owner:"mAAdhaTTah",require:"toolbar",noCSS:!0},"download-button":{title:"Download Button",description:"A button in the toolbar of a code block adding a convenient way to download a code file.",owner:"Golmote",require:"toolbar",noCSS:!0},"match-braces":{title:"Match braces",description:"Highlights matching braces.",owner:"RunDevelopment"},"diff-highlight":{title:"Diff Highlight",description:"Highlights the code inside diff blocks.",owner:"RunDevelopment",require:"diff"},"filter-highlight-all":{title:"Filter highlightAll",description:"Filters the elements the <code>highlightAll</code> and <code>highlightAllUnder</code> methods actually highlight.",owner:"RunDevelopment",noCSS:!0}}})},{}],2:[function(e,t,i){(function(e){var c=function(c){var u=/\blang(?:uage)?-([\w-]+)\b/i,t=0,C={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof P?new P(e.type,C.util.encode(e.content),e.alias):Array.isArray(e)?e.map(C.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function i(e,r){var n,t,o=C.util.type(e);switch(r=r||{},o){case"Object":if(t=C.util.objId(e),r[t])return r[t];for(var a in n={},r[t]=n,e)e.hasOwnProperty(a)&&(n[a]=i(e[a],r));return n;case"Array":return t=C.util.objId(e),r[t]?r[t]:(n=[],r[t]=n,e.forEach(function(e,t){n[t]=i(e,r)}),n);default:return e}},getLanguage:function(e){for(;e&&!u.test(e.className);)e=e.parentElement;return e?(e.className.match(u)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var t=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack)||[])[1];if(t){var i=document.getElementsByTagName("script");for(var r in i)if(i[r].src==t)return i[r]}return null}}},languages:{extend:function(e,t){var i=C.util.clone(C.languages[e]);for(var r in t)i[r]=t[r];return i},insertBefore:function(i,e,t,r){var n=(r=r||C.languages)[i],o={};for(var a in n)if(n.hasOwnProperty(a)){if(a==e)for(var l in t)t.hasOwnProperty(l)&&(o[l]=t[l]);t.hasOwnProperty(a)||(o[a]=n[a])}var s=r[i];return r[i]=o,C.languages.DFS(C.languages,function(e,t){t===s&&e!=i&&(this[e]=o)}),o},DFS:function e(t,i,r,n){n=n||{};var o=C.util.objId;for(var a in t)if(t.hasOwnProperty(a)){i.call(t,a,t[a],r||a);var l=t[a],s=C.util.type(l);"Object"!==s||n[o(l)]?"Array"!==s||n[o(l)]||(n[o(l)]=!0,e(l,i,a,n)):(n[o(l)]=!0,e(l,i,null,n))}}},plugins:{},highlightAll:function(e,t){C.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,i){var r={callback:i,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};C.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),C.hooks.run("before-all-elements-highlight",r);for(var n,o=0;n=r.elements[o++];)C.highlightElement(n,!0===t,r.callback)},highlightElement:function(e,t,i){var r=C.util.getLanguage(e),n=C.languages[r];e.className=e.className.replace(u,"").replace(/\s+/g," ")+" language-"+r;var o=e.parentNode;o&&"pre"===o.nodeName.toLowerCase()&&(o.className=o.className.replace(u,"").replace(/\s+/g," ")+" language-"+r);var a={element:e,language:r,grammar:n,code:e.textContent};function l(e){a.highlightedCode=e,C.hooks.run("before-insert",a),a.element.innerHTML=a.highlightedCode,C.hooks.run("after-highlight",a),C.hooks.run("complete",a),i&&i.call(a.element)}if(C.hooks.run("before-sanity-check",a),!a.code)return C.hooks.run("complete",a),void(i&&i.call(a.element));if(C.hooks.run("before-highlight",a),a.grammar)if(t&&c.Worker){var s=new Worker(C.filename);s.onmessage=function(e){l(e.data)},s.postMessage(JSON.stringify({language:a.language,code:a.code,immediateClose:!0}))}else l(C.highlight(a.code,a.grammar,a.language));else l(C.util.encode(a.code))},highlight:function(e,t,i){var r={code:e,grammar:t,language:i};return C.hooks.run("before-tokenize",r),r.tokens=C.tokenize(r.code,r.grammar),C.hooks.run("after-tokenize",r),P.stringify(C.util.encode(r.tokens),r.language)},matchGrammar:function(e,t,i,r,n,o,a){for(var l in i)if(i.hasOwnProperty(l)&&i[l]){var s=i[l];s=Array.isArray(s)?s:[s];for(var c=0;c<s.length;++c){if(a&&a==l+","+c)return;var u=s[c],p=u.inside,m=!!u.lookbehind,d=!!u.greedy,g=0,h=u.alias;if(d&&!u.pattern.global){var w=u.pattern.toString().match(/[imsuy]*$/)[0];u.pattern=RegExp(u.pattern.source,w+"g")}u=u.pattern||u;for(var f=r,k=n;f<t.length;k+=t[f].length,++f){var v=t[f];if(t.length>e.length)return;if(!(v instanceof P)){if(d&&f!=t.length-1){if(u.lastIndex=k,!(q=u.exec(e)))break;for(var y=q.index+(m&&q[1]?q[1].length:0),b=q.index+q[0].length,S=f,x=k,j=t.length;S<j&&(x<b||!t[S].type&&!t[S-1].greedy);++S)(x+=t[S].length)<=y&&(++f,k=x);if(t[f]instanceof P)continue;A=S-f,v=e.slice(k,x),q.index-=k}else{u.lastIndex=0;var q=u.exec(v),A=1}if(q){m&&(g=q[1]?q[1].length:0);b=(y=q.index+g)+(q=q[0].slice(g)).length;var F=v.slice(0,y),G=v.slice(b),D=[f,A];F&&(++f,k+=F.length,D.push(F));var T=new P(l,p?C.tokenize(q,p):q,h,q,d);if(D.push(T),G&&D.push(G),Array.prototype.splice.apply(t,D),1!=A&&C.matchGrammar(e,t,i,f,k,!0,l+","+c),o)break}else if(o)break}}}}},tokenize:function(e,t){var i=[e],r=t.rest;if(r){for(var n in r)t[n]=r[n];delete t.rest}return C.matchGrammar(e,i,t,0,0,!1),i},hooks:{all:{},add:function(e,t){var i=C.hooks.all;i[e]=i[e]||[],i[e].push(t)},run:function(e,t){var i=C.hooks.all[e];if(i&&i.length)for(var r,n=0;r=i[n++];)r(t)}},Token:P};function P(e,t,i,r,n){this.type=e,this.content=t,this.alias=i,this.length=0|(r||"").length,this.greedy=!!n}if(c.Prism=C,P.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return P.stringify(e,t)}).join("");var i={type:e.type,content:P.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var r=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}C.hooks.run("wrap",i);var n=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(n?" "+n:"")+">"+i.content+"</"+i.tag+">"},!c.document)return c.addEventListener&&(C.disableWorkerMessageHandler||c.addEventListener("message",function(e){var t=JSON.parse(e.data),i=t.language,r=t.code,n=t.immediateClose;c.postMessage(C.highlight(r,C.languages[i],i)),n&&c.close()},!1)),C;var e=C.util.currentScript();if(e&&(C.filename=e.src,e.hasAttribute("data-manual")&&(C.manual=!0)),!C.manual){function i(){C.manual||C.highlightAll()}var r=document.readyState;"loading"===r||"interactive"===r&&e&&e.defer?document.addEventListener("DOMContentLoaded",i):window.requestAnimationFrame?window.requestAnimationFrame(i):window.setTimeout(i,16)}return C}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});void 0!==t&&t.exports&&(t.exports=c),void 0!==e&&(e.Prism=c),c.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},c.languages.markup.tag.inside["attr-value"].inside.entity=c.languages.markup.entity,c.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(c.languages.markup.tag,"addInlined",{value:function(e,t){var i={};i["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:c.languages[t]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};r["language-"+t]={pattern:/[\s\S]+/,inside:c.languages[t]};var n={};n[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:r},c.languages.insertBefore("markup","cdata",n)}}),c.languages.xml=c.languages.extend("markup",{}),c.languages.html=c.languages.markup,c.languages.mathml=c.languages.markup,c.languages.svg=c.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var i=e.languages.markup;i&&(i.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:i.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},i.tag))}(c),c.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},c.languages.javascript=c.languages.extend("clike",{"class-name":[c.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),c.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,c.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*(?:$|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:c.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:c.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:c.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:c.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),c.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:c.languages.javascript}},string:/[\s\S]+/}}}),c.languages.markup&&c.languages.markup.tag.addInlined("script","javascript"),c.languages.js=c.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var s={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var t,i=e.getAttribute("data-src"),r=e,n=/\blang(?:uage)?-([\w-]+)\b/i;r&&!n.test(r.className);)r=r.parentNode;if(r&&(t=(e.className.match(n)||[,""])[1]),!t){var o=(i.match(/\.(\w+)$/)||[,""])[1];t=s[o]||o}var a=document.createElement("code");a.className="language-"+t,e.textContent="",a.textContent="Loading…",e.appendChild(a);var l=new XMLHttpRequest;l.open("GET",i,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(a.textContent=l.responseText,c.highlightElement(a),e.setAttribute("data-src-loaded","")):400<=l.status?a.textContent="✖ Error "+l.status+" while fetching file: "+l.statusText:a.textContent="✖ Error: File does not exist or is empty")},l.send(null)}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(e,t,i){"use strict";e("prismjs"),e("prismjs/components");var r=document.getElementById("ta-code"),n=document.getElementById("code").innerHTML,o=Prism.highlight(n,Prism.languages.html,"html");r.value=n,document.getElementById("output").innerHTML=o,r.addEventListener("input",function(e){var t=e.target.value,i=Prism.highlight(t,Prism.languages.html,"html");document.getElementById("output").innerHTML=i;var r=document.getElementById("code"),n=(new DOMParser).parseFromString(t,"image/svg+xml");r.innerHTML="",r.appendChild(n.documentElement)})},{prismjs:2,"prismjs/components":1}]},{},[3]);
//# sourceMappingURL=bundle.js.map
