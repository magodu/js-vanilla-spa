import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Dashboard');
    }

    async getHtml() {
        return `
            <h1>Welcome back</h1>
            <p>
                This is an example about how to build a SPA frontend application without use any framework or library. This could be great for create small and fastest apps.
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>
            </p>
            <p>
                <a href="/settings" data-link>Show Settings</a>
            </p>
        `;
    }
}
