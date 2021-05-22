// All DOM Elements
const DOMElements = {
   headerSearch: document.querySelector("#header-search"),
   headerSearchSlash: document.querySelector("#header-search-slash"),
   hamburgerMenu: document.querySelector("#hamburger-menu"),
   mobileMenu: document.querySelector("#mobile-menu"),
   tab: document.querySelector("#tab-p"),
   profileForm: document.querySelector("#profile-input-form"),
   profileFormInput: document.querySelector("#profile-form-search"),
   profileInputPage: document.querySelector("#profile-input-page"),
   preloadar: document.querySelector("#preloader"),
   searchBtn: document.querySelector("#fix-search-btn"),
   closeInputPage: document.querySelector("#input-page-close"),
   profileSummary: document.querySelector(".profile-summary"),
   profileName: document.querySelectorAll(".profile-name"),
   profileUsername: document.querySelectorAll(".profile-username"),
   profileImage: document.querySelectorAll(".profile-image"),
   profileMobileUsername: document.querySelector("#mobile-name"),
   repositoryParent: document.querySelector("#repository-p")
}

// Default 
const defsValue = {
   tabOffsetTop: DOMElements.tab.offsetTop,
   gitToken: "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",
   gitUser: "enipx",
   monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "June",
      "July", "Aug", "Sep", "Oct", "Nov", "Dec"
   ]
}

// Handlers
const tabStickHandler = (params) => {
   if (window.pageYOffset >= params.offsetTop) {
      params.elem.classList.add("stick")
   } else {
      params.elem.classList.remove("stick")
   }
}

const isInputValidHandler = (input) => {
   if (input.value === "") {
      // show error
      input.classList.add("error");
      return false;
   } else {
      // remove error
      input.classList.remove("error");
      return true;
   }
}

const modifyInputPageHandler = (action) => {
   switch (action) {
      case "hide":
         DOMElements.profileInputPage.classList.remove("show");
         break;

      case "show":
         DOMElements.profileInputPage.classList.add("show");
         break;

      case "toggle":
         DOMElements.profileInputPage.classList.toggle("show");
         break;
   }
}

const modifyPreloaderHandler = (action) => {
   switch (action) {
      case "hide":
         DOMElements.preloadar.classList.remove("show");
         break;

      case "show":
         DOMElements.preloadar.classList.add("show");
         break;

      case "toggle":
         DOMElements.preloadar.classList.toggle("show");
         break;
   }
}

const setUpProfileDetailsHandler = (param) => {
   const name = param.name ? param.name : "Unknown";
   const username = param.username ? param.username : "Unknown";
   const image = param.image ? param.image : "./assets/img/avatar.svg";
   const summary = param.summary ? param.summary : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, qui.";

   DOMElements.profileName.forEach(pName => {
      pName.innerHTML = name;
   });

   DOMElements.profileUsername.forEach(pUname => {
      pUname.innerHTML = username;
   })

   DOMElements.profileImage.forEach(pImg => {
      pImg.src = image;
   })

   DOMElements.profileMobileUsername.innerHTML = username
   DOMElements.profileSummary.innerHTML = summary;

}

const clearAllRepoHandler = () => {
   DOMElements.repositoryParent.innerHTML = "";
}

const addRepoHandler = (param) => {
   let repoLanguage = "";
   const lastUpdateDate = new Date(param.repoLastUpdate);
   const lastUpdate = `${defsValue.monthNames[lastUpdateDate.getMonth()]} ${lastUpdateDate.getDay() + 1}, ${lastUpdateDate.getFullYear()}`;

   if (param.repoLanguage) {
      repoLanguage = `
         <div class="item">
            <span class="lang-color" style="background-color: ${param.repoLangColor}"></span>
            ${param.repoLanguage}
         </div>
      `
   }

   const mockUp = `
      <div class="repository">
         <div class="repo-detail">
            <a target="_blank" href="${param.repoUrl}" id="repo-name">${param.repoName}</a>
            <div id="repo-descr">${param.repoDescription ? param.repoDescription : ""}</div>

            <div class="details">
               
               ${repoLanguage}

               <div class="item">
                  <svg class="octicon octicon-star mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
                  ${param.repoStarCount}
               </div>

               <div class="item">
                  <svg aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
                  ${param.repoForkCount}
               </div>

               <div class="item">Updated on ${lastUpdate}</div>
            </div>
         </div>
         <div class="repo-star">
            <a href="./" class="btn small btn-light">
               <svg class="octicon octicon-star mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
               Star
            </a>
         </div>
      </div>
   `;

   DOMElements.repositoryParent.insertAdjacentHTML("beforeend", mockUp);
}


const fetchUsernameDataHandler = () => {
   return fetch("https://api.github.com/graphql", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${defsValue.gitToken}`
         },
         body: JSON.stringify({
            query: `
               query {
                  user(login: "${defsValue.gitUser}") {
                  repositories(first: 20, orderBy: { field: UPDATED_AT,direction: DESC }) {
                     edges {
                        repository:node {
                           name,
                           description,
                           stargazerCount,
                           updatedAt,
                           primaryLanguage {
                              color,
                              name
                           },
                           forkCount,
                           url
                        }
                     }
                  },
                  avatarUrl,
                  bio,
                  name,
                  }
               }
            `
         })
      })
      .then(res => res.json())
      .then(data => {
         const userData = data.data.user;

         // Set up profile
         setUpProfileDetailsHandler({
            name: userData.name,
            username: defsValue.gitUser,
            summary: userData.bio,
            image: userData.avatarUrl
         })

         // Clear recent repo
         clearAllRepoHandler();

         // Set up all repo
         userData.repositories.edges.forEach(repo => {
            const project = repo.repository;

            addRepoHandler({
               repoName: project.name,
               repoDescription: project.description,
               repoLanguage: project.primaryLanguage ? project.primaryLanguage.name : null,
               repoLangColor: project.primaryLanguage ? project.primaryLanguage.color : null,
               repoStarCount: project.stargazerCount,
               repoLastUpdate: project.updatedAt,
               repoForkCount: project.forkCount,
               repoUrl: project.url
            })
         })

         // Hide preloader and Input page
         modifyPreloaderHandler("hide");
         modifyInputPageHandler("hide");

         // Clear input
         DOMElements.profileFormInput.value = "";

      })
}

// Header Search Animation
DOMElements.headerSearch.addEventListener("focusin", () => {
   DOMElements.headerSearchSlash.classList.add("hide");
})

DOMElements.headerSearch.addEventListener("focusout", () => {
   DOMElements.headerSearchSlash.classList.remove("hide");
})

// Mobile menu toggle
DOMElements.hamburgerMenu.addEventListener("click", () => {
   DOMElements.mobileMenu.classList.toggle("show");
})

// Window events
window.addEventListener("scroll", () => {
   tabStickHandler({
      offsetTop: defsValue.tabOffsetTop,
      elem: DOMElements.tab
   });

   // Any other thing..
})

window.addEventListener("keyup", (e) => {
   if (e.key === "m" && e.ctrlKey) {
      modifyInputPageHandler("toggle")
   }
})

// Form Events
DOMElements.profileForm.addEventListener("submit", (e) => {
   e.preventDefault();
   // Check if input is valid
   if (isInputValidHandler(DOMElements.profileFormInput)) {
      // Show Preloader
      modifyPreloaderHandler("show");
      defsValue.gitUser = DOMElements.profileFormInput.value;
      fetchUsernameDataHandler()
   }

})

DOMElements.profileFormInput.addEventListener("keyup", () => {
   // Check if input is valid
   isInputValidHandler(DOMElements.profileFormInput)
})

DOMElements.searchBtn.addEventListener("click", () => {
   modifyInputPageHandler("show");
})

DOMElements.closeInputPage.addEventListener("click", () => {
   modifyInputPageHandler("hide");
})