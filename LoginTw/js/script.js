function showLogin() {
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("signupForm").classList.add("hidden");

    document.getElementById("btnLogin").classList.add("bg-blue-600", "text-white");
    document.getElementById("btnLogin").classList.remove("text-gray-600");

    document.getElementById("btnSignup").classList.remove("bg-blue-600", "text-white");
    document.getElementById("btnSignup").classList.add("text-gray-600");
}

function showSignup() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");

    document.getElementById("btnLogin").classList.remove("bg-blue-600", "text-white");
    document.getElementById("btnLogin").classList.add("text-gray-600");

    document.getElementById("btnSignup").classList.add("bg-blue-600", "text-white");
    document.getElementById("btnSignup").classList.remove("text-gray-600");
}