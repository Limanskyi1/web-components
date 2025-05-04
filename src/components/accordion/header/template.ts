const styles = `
    <style>
        :host {
            display: block;
            background: #eee;
            padding: 10px;
            cursor: pointer;
            font-weight: bold;
        }
    </style>
`;

export const template = styles + `<slot></slot>`;
