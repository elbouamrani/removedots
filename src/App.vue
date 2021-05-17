<template>
    <div id="app">
        <ArabicEditor />
    </div>
</template>

<script>
import ArabicEditor from "./components/ArabicEditor.vue";

export default {
    name: "App",
    components: {
        ArabicEditor,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    justify-content: center;
}
</style>
