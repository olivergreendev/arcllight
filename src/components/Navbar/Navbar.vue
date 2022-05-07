<template>
    <nav class="navbar">
        <div class="nav-links">
            <div class="nav-link flex align-center has-dropdown">
                <router-link :to="{ name: 'features' }">Features</router-link>
                <i class="bi bi-chevron-down dropdown-toggle"></i>
                <div class="dropdown">
                    <div class="dropdown-links-wrapper">
                        <ul class="dropdown-links">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="nav-link">
                <router-link :to="{ name: 'pricing' }">Pricing</router-link>
            </div>
            <div class="nav-link">
                <router-link :to="{ name: 'academy' }">Academy</router-link>
            </div>
            <div class="nav-link">
                <router-link :to="{ name: 'blog' }">Blog</router-link>
            </div>
        </div>
        <div class="nav-logo nav-links">
            <router-link :to="{ name: 'home' }" class="nav-link">arclight</router-link>
        </div>
        <div class="nav-links account-controls">
            <div class="flex align-center ml-auto">
                <div class="nav-link">
                    <router-link :to="{ name: 'login' }">Login</router-link>
                </div>
                <div class="nav-link">
                    <router-link :to="{ name: 'sign-up' }" class="gradient-button">Sign Up</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    padding: 30px 40px;
}
.navbar .nav-links {
    display: flex;
    align-items: center;
}
.navbar .nav-links:nth-child(1) {
    position: relative;
    width: 50%;
    flex-grow: 1;
    order: 0;
    flex-basis: auto;
}
.navbar .nav-links:nth-child(2) {
    margin: 0 auto;
    width: 25%;
    text-align: center;
    display: block;
    order: 1;
}
.navbar .nav-links:nth-child(3) {
    flex-basis: auto;
    width: 50%;
    flex-grow: 1;
    order: 2;
}
.navbar .nav-links .nav-link {
    font-weight: 500;
    transition: color 0.2s ease;
}
.navbar .nav-links .nav-link a {
    padding: 10px 0;
}
.navbar .nav-links:not(.account-controls) .nav-link:not(:last-child) {
    margin-right: 60px;
}
.navbar .nav-links.account-controls .nav-link:not(:last-child) {
    margin-right: 40px;
}
.navbar .nav-logo .nav-link {
    font-size: 22px;
    font-weight: 400;
}
.navbar .nav-links .nav-link.has-dropdown .dropdown-toggle {
    font-size: 12px;
    margin-left: 10px;
}
.navbar .nav-links .nav-link .gradient-button {
    color: white;
    padding: 12px 20px;
    background: linear-gradient(to right, var(--accent-01) 0%, var(--accent-02) 100%);
    border-radius: 4px;
    transition: background 0.2s ease;
}
.navbar .nav-links .nav-link .gradient-button:hover {
    background-position: 100px;
}
.navbar .nav-links .nav-link:hover {
    color: white;
}
.navbar .nav-links .nav-link.has-dropdown .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    background: var(--grey-primary);
    border-radius: 8px;
    padding: 20px;
    width: 100%;
    color: var(--bg-color);
}
.navbar .nav-links .nav-link.has-dropdown .dropdown .dropdown-links {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-align: left;
}
</style>