import AbstractView from './AbstractView.js';
// import { appState } from '../AppState.js';


export default class extends AbstractView {

    loading = true;

    constructor(params) {
        super(params);
        this.setTitle('Posts');
        this.getdata();
    }

    async getdata() {
        await fetch('https://dummyjson.com/posts?limit=80')
            .then(res => res.json())
            .then(res => {
                this.posts = res.posts;
                this.loading = false;
                console.log('posts', this.posts);
                this.render();
            });
    }

    clickMethodCallExample() {
        console.log('clickMethodCallExample: Clicked!');
    }

   /*  async getHtml() {
        let html = '<h1>Posts</h1><p>You are viewing the posts!</p><ul>';
    
        this.posts?.map(post => {
            // Generate the HTML for each post
            html += `<li>${post.title}. <a href="javascript: void(0)" id="call-method-${post.id}" data-onclick="clickMethodCallExample">View detail</a></li>`;
        });
    
        html += '</ul>';
    
        return html;
    } */

    async getHtml() {
        let html = '';
        if (this.loading) {
            html = '<p>Loading...</p>';
        } else {
            html = '<h1>Posts</h1><p>You are viewing the posts!</p><ul>';

            this.posts?.map(post => {
                const postName = post.title;
                html += `<li>
                            ${post.title}. <a href="/posts/${post.id}" data-link>View detail</a>
                         </li>`;
            });
    
            html += '</ul>';
        }
       
        //${post.title}. <a href="javascript: void(0)" id="call-method-${post.id}" data-onclick="clickMethodCallExample">View detail</a>;
        return html;
    }
}
