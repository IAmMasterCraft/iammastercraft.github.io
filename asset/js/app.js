/**
 * Routing
 */
const getRoute = () => {
    return $(location).attr("href").split("#")[1];
}

const isHome = () => {
    if ((getRoute()) && getRoute().includes("home")) return true;
    if (getRoute() === "") return true;
    if (!(getRoute())) return true;
    return false;
}

const isEducation = () => {
    return (getRoute() && getRoute().includes("education")) ? true : false;
}

const isExperience = () => {
    return (getRoute() && getRoute().includes("experience")) ? true : false;
}

const isProjects = () => {
    return (getRoute() && getRoute().includes("project")) ? true : false;
}

const isContact = () => {
    return (getRoute() && getRoute().includes("contact")) ? true : false;
}

/**
 * manage nav
 */
const manageNav = () => {
    if (isHome()) {
        $(".nav-item").removeClass("active", () => {
            $("#nav-home").addClass("active");
        });
    }
    if (isEducation()) {
        $(".nav-item").removeClass("active", () => {
            $("#nav-home").addClass("active");
        });
    }
    if (isExperience()) {
        $(".nav-item").removeClass("active", () => {
            $("#nav-home").addClass("active");
        });
    }
    if (isProject()) {
        $(".nav-item").removeClass("active", () => {
            $("#nav-home").addClass("active");
        });
    }
    if (isContact()) {
        $(".nav-item").removeClass("active", () => {
            $("#nav-home").addClass("active");
        });
    }
}

/**
 * pageLoad
 */
const loadPage = (pageName) => {
    $(".nav-item").removeClass("active");
    $("#root").load(`./pages/${pageName}.html`, (response, status) => {
        $(`#nav-${pageName}`).addClass("active");
        if (status === "error") $("#root").load("./pages/404.html");
    });
}

/**
 * hashChange
 */
const hashChange = () => {
    const pageName = getRoute().split("/");
    loadPage(pageName[pageName.length - 1]);
}

//fire and startup
window.onhashchange = hashChange;