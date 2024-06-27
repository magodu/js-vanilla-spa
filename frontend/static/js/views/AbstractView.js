export default class {
    constructor(params) {
        this.params = params;
    }

    clear() {
        // Implement this method to remove existing HTML content
        // This could involve setting innerHTML to an empty string or removing child nodes
        document.querySelector('#app').innerHTML = '';
    }

    async render() {
        // Clear existing HTML
        this.clear();

        // Generate new HTML based on the updated posts
        const html = await this.getHtml();

        // Append the new HTML to the DOM
        document.querySelector('#app').innerHTML = html;
    
        // Attach the click event listener to a method passed by data attribute
        document.querySelectorAll('a').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                if (/^call-method-\d+$/.test(e.target.id)) {
                    const method = e.target.dataset.onclick;
                    e.preventDefault();
                    method && this[method]();
                }
            });
        });
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return '';
    }
}
