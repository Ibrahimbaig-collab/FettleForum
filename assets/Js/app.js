window.gtranslateSettings = {"default_language":"en","languages":["en","it","es","fr","de","nl","da","pt","ar","zh-CN","ms","cs","sk","hu","bg","pl","ro","hr","sl","sr","bs"],"wrapper_selector":".gtranslate_wrapper"};

// Back To TOP
 let backToTop = document.getElementById("backToTop");
 // Show button when user scrolls down
 window.onscroll = function () {
     if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
         backToTop.style.display = "block";
     } else {
         backToTop.style.display = "none";
     }
 };

 // Scroll to top when button clicked
 backToTop.addEventListener("click", function () {
     window.scrollTo({ top: 0, behavior: "smooth" });
 });

// search Bar
 function toggleSearch() {
    let searchBar = document.getElementById("searchBar");
    let searchIcon = document.getElementById("searchIcon");
    let suggestions = document.getElementById("suggestions");
    
    if (searchBar.classList.contains("active")) {
        searchBar.classList.remove("active");  
        searchIcon.classList.remove("fa-magnifying-glass");
        searchIcon.classList.add("fa-times","fa-icon");  
    } else {
        searchBar.classList.add("active");  
        searchIcon.classList.remove("fa-times");
        searchIcon.classList.add("fa-magnifying-glass");  
    }
}
function showSuggestions() {
    document.getElementById("getdata").classList.remove("d-none");
}
// Hide input and ul on outside click
document.addEventListener("click", function (event) {
    const searchIcon = document.getElementById("searchIcon");
    const getData = document.getElementById("getdata");
    if (
      !searchIcon.contains(event.target) && !getData.contains(event.target)
    ) {
      getData.classList.add("d-none");
    }
  });

