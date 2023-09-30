const Vue = {
    createApp(options) {
        let html = '';
        const data = options.data().message;
        console.log(data);

        return {
            mount(selector){
                let content = document.querySelector(selector);
                html = `<h1>${data}</h1>`
                content.innerHTML = html;
            }
        }
    },
};

export default Vue;