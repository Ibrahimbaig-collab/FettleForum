window.gtranslateSettings={default_language:"en",languages:["en","it","es","fr","de","nl","da","pt","ar","zh-CN","ms","cs","sk","hu","bg","pl","ro","hr","sl","sr","bs"],wrapper_selector:".gtranslate_wrapper"};let backToTop=document.getElementById("backToTop");function toggleSearch(){let e=document.getElementById("searchBar"),t=document.getElementById("searchIcon");document.getElementById("suggestions"),t.addEventListener("click",function(){e.classList.contains("active")?(e.classList.remove("active"),t.classList.remove("fa-times"),t.classList.add("fa-magnifying-glass")):(e.classList.add("active"),t.classList.remove("fa-magnifying-glass"),t.classList.add("fa-times"))})}function showSuggestions(){document.getElementById("getdata").classList.remove("d-none")}function hidealert(){document.getElementById("cookie-vookie").style.display="none"}window.onscroll=function(){document.body.scrollTop>300||document.documentElement.scrollTop>300?backToTop.style.display="block":backToTop.style.display="none"},backToTop.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("click",function(e){let t=document.getElementById("searchIcon"),s=document.getElementById("getdata");t.contains(e.target)||s.contains(e.target)||s.classList.add("d-none")}),document.addEventListener("DOMContentLoaded",function(){var e=new bootstrap.Modal(document.getElementById("exampleModal"));setTimeout(function(){e.show()},5e3)});