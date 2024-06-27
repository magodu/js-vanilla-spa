import AbstractView from './AbstractView.js';
// import { appState } from '../AppState.js';

export default class extends AbstractView {

    postData = null;
    loading = true;

    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle('Post detail');
        this.getdata();

        // this.postName = appState.getData(`postName_${this.postId}`);
    }

    async getdata() {
        const url = `https://dummyjson.com/posts/${this.postId}`;
        await fetch(url)
            .then(res => res.json())
            .then(res => {
                this.postData = res;
                this.loading = false;
                console.log('postData', this.postData);
                this.render();
            });
    }

    async getHtml() {
        let html = '';
        if (this.loading) {
            html = '<p>Loading...</p>';
        } else {
            html = `
                <h1>Post #${this.postId}</h1>
                <h3>${this.postData.title}</h3>
                <p>${this.postData.body}</p>
                <p><a href="/posts" data-link>Go back</a></p>
            `;
        }

        return html;

    }
}
