<template>
    <div class="editor-container">
        <textarea
            class="input"
            cols="30"
            rows="10"
            v-model="input"
            @keyup="processText"
        ></textarea>
        <div>
            <button class="clear" @click="clear">clear</button>
            <button class="copy" @click="copy">copy</button>
        </div>
        <textarea
            class="processed"
            cols="30"
            rows="10"
            ref="processed"
            v-model="processed"
        ></textarea>
    </div>
</template>

<script>
import ArabicEditor from "./../services/ArabicService";

export default {
    name: "ArabicEditor",
    data() {
        return {
            input: "",
            processed: "",
        };
    },
    methods: {
        processText() {
            this.processed = ArabicEditor.process(this.input);
        },
        clear() {
            this.input = "";
            this.processed = "";
        },
        copy() {
            this.$refs.processed.select();
            this.$refs.processed.setSelectionRange(0, this.processed.length);
            document.execCommand("copy");
        },
    },
};
</script>

<style>
.editor-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400pt;
}

.editor-container > div {
    margin-top: 10pt;
    display: flex;
    justify-content: space-between;
    width: 400pt;
    width: 100%;
}

button {
    border: none;
    color: #fff;
    background-color: #7952b3;
    border-color: #7952b3;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    color: white;
}

textarea {
    display: block;
    width: 100%;
    border: 2pt solid black;
    margin-top: 10pt;
    text-align: right;
}
</style>
